import { TestsDictionary } from '$performance/types/tests-dictionary';
import { examples } from '$performance/examples';
import { TestExample } from '$performance/types/test-example';

const loadTestExamples = (): TestsDictionary =>
  examples.reduce(
    (currentDictionary: TestsDictionary, nextTest: TestExample) => ({
      ...currentDictionary,
      [nextTest.name]: nextTest,
    }),
    {},
  );

export class ResultsGatherer {
  private readonly samplesCount = 10;

  private readonly debounceAwaitTime = 800;

  private readonly tests: TestsDictionary;

  private readonly samples: Record<string, number[]>;

  private readonly results: Record<string, number>;

  private currentTestId?: string;

  private currentTestStart?: number;

  public constructor() {
    this.tests = loadTestExamples();
    this.samples = {};
    this.results = {};
  }

  public getTestsIds = (): string[] => Object.keys(this.tests);

  public selectTestById = (id: string): TestExample => {
    this.currentTestId = id;
    return this.tests[id];
  };

  public startCurrentTest = (): void => {
    if (this.currentTestId === undefined) {
      throw new Error('Invalid state. Test is not selected.');
    }

    this.currentTestStart = performance.now();
  };

  public endCurrentTest = (): void => {
    if (this.currentTestId === undefined) {
      throw new Error('Invalid state. Test is not selected.');
    }

    if (this.samples[this.currentTestId] === undefined) {
      this.samples[this.currentTestId] = [];
    }

    const testTime = performance.now() - (this.currentTestStart ?? 0) - this.debounceAwaitTime;
    this.samples[this.currentTestId].push(testTime);

    if (this.isCurrentTestNotCompleted()) {
      return;
    }

    const samplesSum = [...this.samples[this.currentTestId]].reduce((acc, next) => acc + next, 0);
    this.results[this.currentTestId] = samplesSum / this.samplesCount;
  };

  public isCurrentTestNotCompleted = (): boolean =>
    (this.samples[this.currentTestId ?? '']?.length ?? 0) < this.samplesCount;

  public getResults = (): Record<string, number> => this.results;
}
