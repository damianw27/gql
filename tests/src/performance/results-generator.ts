import { writeFileSync } from 'fs';
import { ResultData } from '$performance/types/result-data';

const parseExampleResultTemplate = (id: string, data: string, index: number): string => `
\\begin{figure}[H]
  \\centering
  \\begin{tikzpicture}
  
    \\begin{axis} [
      xbar = .05cm,
      nodes near coords,
      nodes near coords style={
        /pgf/number format/precision=4,
      },
      xmin = 0,
      ytick = data,
      enlarge x limits = {value = .25, upper},
      symbolic y coords = {10,9,8,7,6,5,4,3,2,1},
      xlabel=Czas (w milisekundach),
      ylabel=Iteracja,
      width=0.75\\textwidth,
      height=0.5\\textwidth
    ]
    
      \\addplot coordinates {${data}};
      
    \\end{axis}
  
  \\end{tikzpicture}
  \\caption{Wynik testów przykładu ${index + 1} [\\ref{lst:wydajnosc-przyklad-${id}}]}
  \\label{fig:wynik-przyklad-${index}}
\\end{figure}
`;

const parseResultTemplate = (labels: string, minData: string, maxData: string, avgData: string): string => `
\\begin{figure}[H]
  \\centering
  \\begin{tikzpicture}

    \\begin{axis} [
      xbar = .05cm,
      nodes near coords,
      nodes near coords style={
        /pgf/number format/precision=4,
      },
      xmin = 0,
      ytick = data,
      enlarge x limits = {value = .25, upper},
      symbolic y coords = {${labels}},
      xlabel=Czas (w milisekundach),
      width=0.9\\textwidth,
      height=1.25\\textwidth
    ]

      \\addplot coordinates {${minData}};
      \\addplot coordinates {${maxData}};
      \\addplot coordinates {${avgData}};
      \\legend{Minimalny,Maksymalny,Średni}

    \\end{axis}

  \\end{tikzpicture}
  \\caption{Ogólne wyniki wydajności gramatyki}
  \\label{fig:wynik-gramatyka}
\\end{figure}
`;

const generateExampleResultInTex = (id: string, resultData: ResultData, index: number): void => {
  const data = [...resultData.samples]
    .splice(0, 10)
    .map((sample, iterationIndex) => `(${sample},${iterationIndex + 1})`)
    .join(' ');

  const result = parseExampleResultTemplate(id, data, index);
  writeFileSync(`performance-${id}-result.tex`, result);
};

export const generateResultsInTex = (results: Record<string, ResultData>): void => {
  const labels = Object.keys(results)
    .map((key) => `[\\ref{lst:wydajnosc-przyklad-${key}]`)
    .join(',');

  const minData = Object.entries(results)
    .map(([key, result]) => `(${result.min},[\\ref{lst:wydajnosc-przyklad-${key}}])`)
    .join(' ');

  const maxData = Object.entries(results)
    .map(([key, result]) => `(${result.max},[\\ref{lst:wydajnosc-przyklad-${key}}])`)
    .join(' ');

  const avgData = Object.entries(results)
    .map(([key, result]) => `(${result.avg},[\\ref{lst:wydajnosc-przyklad-${key}}])`)
    .join(' ');

  Object.entries(results).forEach(([id, resultData], index) => generateExampleResultInTex(id, resultData, index));

  const outputStr = parseResultTemplate(labels, minData, maxData, avgData);
  writeFileSync('performance-result.json', JSON.stringify(results));
  writeFileSync('performance-result.tex', outputStr);
};
