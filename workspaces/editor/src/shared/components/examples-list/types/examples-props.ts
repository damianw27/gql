import { Example } from './example';

export interface ExamplesProps {
  readonly examples: Example[];
  readonly onExampleClick: (example: string) => void;
}
