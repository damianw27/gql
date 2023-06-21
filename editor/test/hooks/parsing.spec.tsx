import { renderHook } from '@testing-library/react';
import { GrammarEventType, WorkerInfo } from '@gql-grammar/worker';
import { useParsing } from '$hooks/parsing/parsing';

jest.useFakeTimers();

describe('useParsing', () => {
  const workerInfo: WorkerInfo = {
    fileName: 'test.worker.js',
    name: 'example',
  };

  beforeAll(() => {
    (global as any).Worker = class {
      public onmessage() {}

      public postMessage() {}

      public terminate() {}
    };

    jest.spyOn((global as any).Worker.prototype, 'onmessage');
    jest.spyOn((global as any).Worker.prototype, 'postMessage');
    jest.spyOn((global as any).Worker.prototype, 'terminate');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should initialize a worker on load', () => {
    const { result } = renderHook(() => useParsing('sample text', workerInfo));

    expect(result.current.isParsing).toBe(false);
    expect((global as any).Worker.prototype.postMessage).toHaveBeenCalledWith({
      type: GrammarEventType.Initialize,
    });
  });
});
