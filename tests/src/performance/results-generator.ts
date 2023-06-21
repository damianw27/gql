import { writeFileSync } from 'fs';

const parseResultTemplate = (labels: string, data: string): string => `
\\usepackage{pgfplots}

\\begin{tikzpicture}
  \\begin{axis}[
    xbar,
    xlabel=Czas (w milisekundach),
    nodes near coords,
    nodes near coords style={
      /pgf/number format/precision=4,
    },
    enlarge y limits=0.2,
    enlarge x limits=0.02,
    ytick distance=1,
    symbolic y coords={
${labels}
    }
  ]

${data}

  \\end{axis}
\\end{tikzpicture}
`;

export const generateResults = (results: Record<string, number>): void => {
  const data = Object.entries(results)
    .map(([key, result]) => `    \\addplot coordinates {(${result}, ${key})};`)
    .join('\n');

  const labels = Object.keys(results)
    .map((key) => `      ${key}`)
    .join(',\n');

  const outputStr = parseResultTemplate(labels, data);
  writeFileSync('result.tex', outputStr);
};
