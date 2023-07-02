import { writeFileSync } from 'fs';
import { TestsDictionary } from '$performance/types/tests-dictionary';

const exampleTemplate = (id: string, code: string, index: number): string => `
\\begin{lstlisting}[style=gqlStyle, label={lst:wydajnosc-przyklad-${id}}], caption={Przykład GQL ${index + 1}}]
${code}
\\end{lstlisting}`;

export const generateExamplesInTex = (tests: TestsDictionary): void => {
  const examples = Object.values(tests)
    .map(({ name, code }, index): string => exampleTemplate(name, code, index))
    .join('\n');

  writeFileSync('performance-examples.tex', examples);
};
