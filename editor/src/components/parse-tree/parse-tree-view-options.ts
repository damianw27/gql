import { Options } from 'vis-network';

const NEUTRAL_LEAF_COLOR = '#DDD';

export const parseTreeViewOptions: Options = {
  autoResize: true,
  nodes: {
    shape: 'box',
    borderWidth: 0.5,
    color: NEUTRAL_LEAF_COLOR,
    font: {
      multi: 'html',
      face: "'JetBrains Mono', monospace",
    },
    shapeProperties: {
      borderRadius: 0,
    },
    physics: false,
  },
  edges: {
    physics: false,
  },
  layout: {
    improvedLayout: true,
    clusterThreshold: 150,
    hierarchical: {
      direction: 'UD',
      nodeSpacing: 150,
      parentCentralization: false,
    },
  },
  interaction: {
    dragNodes: false,
    selectable: false,
  },
  manipulation: {
    enabled: false,
  },
};
