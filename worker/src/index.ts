export * from '$types/grammar-event';
export * from '$types/grammar-event-result-init';
export * from '$types/grammar-event-result-parse';
export * from '$types/grammar-event-result-utilities';
export * from '$types/grammar-event-type';
export * from '$types/grammar-parsing-error';
export * from '$shared/code-suggestion/types/case-kind';
export * from '$shared/code-suggestion/suggestions-provider';
export * from '$shared/grammar-builder/types/grammar-definition';
export * from '$shared/grammar-builder/types/syntax-object';
export * from '$shared/grammar-builder/types/syntax-token';
export * from '$shared/grammar-builder/types/syntax-type';
export * from '$shared/grammar-builder/grammar-builder';
export * from '$shared/grammar-builder/common-syntax-objects';
export * from '$shared/parse-tree/types/parse-tree';
export * from '$shared/parse-tree/types/tree-node';
export * from '$shared/parse-tree/types/tree-rule-node';
export * from '$shared/parse-tree/types/tree-terminal-node';
export * from '$shared/parse-tree/parse-tree-extractor';

export interface WorkerInfo {
  readonly name: string;
  readonly fileName: string;
}

export const availableWorkers: WorkerInfo[] = [
  {
    name: 'GQL (latest)',
    fileName: 'latest.worker.js',
  },
  {
    name: 'PG-Schema (latest)',
    fileName: 'pg-schema.worker.js',
  },
];
