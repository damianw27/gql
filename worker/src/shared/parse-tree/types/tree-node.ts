import { TreeTerminalNode } from '$shared/parse-tree/types/tree-terminal-node';
import { TreeRuleNode } from '$shared/parse-tree/types/tree-rule-node';

export type TreeNode = TreeTerminalNode | TreeRuleNode;
