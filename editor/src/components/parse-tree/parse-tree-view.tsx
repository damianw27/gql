import React, { useEffect, useRef, useState } from 'react';
import { Edge, Network, Node } from 'vis-network';
import { isTreeRuleNode, isTreeTerminalNode, ParseTree, TreeNode } from '@gql-grammar/worker';
import { parseTreeViewOptions } from '$components/parse-tree/parse-tree-view-options';
import css from '$components/parse-tree/parse-tree.module.css';

export interface ParseTreeViewProps {
  readonly parseTree: ParseTree;
}

const VALID_LEAF_COLOR = '#AFA';
const INVALID_LEAF_COLOR = '#FAA';

const loadDataFromParseTree = (nodes: Node[], edges: Edge[], treeNodes: TreeNode[]): void => {
  const stack: { treeNodes: TreeNode[]; level: number; parent?: Node }[] = [];
  stack.push({ treeNodes, level: 0 });

  while (stack.length > 0) {
    const { treeNodes, level, parent } = stack.pop()!;

    for (const treeNode of treeNodes) {
      const id = nodes.length;

      if (isTreeTerminalNode(treeNode)) {
        if (parent === undefined) {
          continue;
        }

        const label = `${treeNode.text}`;
        const color = VALID_LEAF_COLOR;
        const node: Node = { id, label, level, color };
        nodes.push(node);
      }

      if (isTreeRuleNode(treeNode)) {
        const label = treeNode.name;
        const color = treeNode.children.length === 0 ? INVALID_LEAF_COLOR : undefined;
        const node: Node = { id, label, level, color };
        nodes.push(node);

        stack.push({
          treeNodes: treeNode.children,
          level: level + 1,
          parent: node,
        });
      }

      if (parent !== undefined) {
        const edge: Edge = { from: parent.id, to: id };
        edges.push(edge);
      }
    }
  }
};

export const ParseTreeView = ({ parseTree }: ParseTreeViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);
  const [isRendering, setIsRendering] = useState<boolean>(false);

  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }

    const container = containerRef.current;
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    setIsRendering(true);

    loadDataFromParseTree(nodes, edges, parseTree);
    networkRef.current = new Network(container, { nodes, edges }, parseTreeViewOptions);
    networkRef.current?.fit();
    networkRef.current?.redraw();
    networkRef.current?.on('initRedraw', () => setIsRendering(false));

    return () => {
      if (networkRef.current === null) {
        return;
      }

      networkRef.current.destroy();
      networkRef.current = null;
    };
  }, [parseTree]);

  return (
    <div className={css.parseTree}>
      {isRendering ? 'Rendering...' : <div ref={containerRef} className={css.parseTreeView} />}
    </div>
  );
};
