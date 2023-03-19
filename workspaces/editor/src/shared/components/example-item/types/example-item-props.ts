import { Example } from '../../examples-list/types/example';

export interface ExampleItemProps {
  readonly example: Example;
  readonly onElementClick: (example: Example) => void;
}
