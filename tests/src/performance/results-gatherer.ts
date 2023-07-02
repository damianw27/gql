import { TestsDictionary } from '$performance/types/tests-dictionary';
import { examples } from '$performance/examples';
import { TestExample } from '$performance/types/test-example';
import { ResultData } from '$performance/types/result-data';

const loadTestExamples = (): TestsDictionary =>
  examples.reduce(
    (currentDictionary: TestsDictionary, nextTest: TestExample) => ({
      ...currentDictionary,
      [nextTest.name]: nextTest,
    }),
    {},
  );

export class ResultsGatherer {
  private readonly samplesCount = 200;

  private readonly debounceAwaitTime = 800;

  private readonly tests: TestsDictionary;

  private readonly samples: Record<string, number[]>;

  private readonly results: Record<string, ResultData>;

  private currentTestId?: string;

  private currentTestStart?: number;

  private minTestTime: number = Number.MAX_VALUE;

  private maxTestTime: number = Number.MIN_VALUE;

  public constructor() {
    this.tests = loadTestExamples();
    this.samples = {};
    this.results = {};
  }

  public getTestsIds = (): string[] => Object.keys(this.tests);

  public selectTestById = (id: string): TestExample => {
    this.currentTestId = id;
    this.minTestTime = Number.MAX_VALUE;
    this.maxTestTime = Number.MIN_VALUE;
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

    if (this.minTestTime > testTime) {
      this.minTestTime = testTime;
    }

    if (this.maxTestTime < testTime) {
      this.maxTestTime = testTime;
    }

    this.samples[this.currentTestId].push(testTime);
    console.log(
      `T: ${this.tests[this.currentTestId].name} ${this.samples[this.currentTestId].length}/${this.samplesCount}`,
    );

    if (this.isCurrentTestNotCompleted()) {
      return;
    }

    const samplesSum = [...this.samples[this.currentTestId]].reduce((acc, next) => acc + next, 0);

    this.results[this.currentTestId] = {
      samples: this.samples[this.currentTestId],
      min: this.minTestTime,
      max: this.maxTestTime,
      avg: samplesSum / this.samplesCount,
    };
  };

  public isCurrentTestNotCompleted = (): boolean =>
    (this.samples[this.currentTestId ?? '']?.length ?? 0) < this.samplesCount;

  public getTests = (): TestsDictionary => this.tests;

  public getResults = (): Record<string, ResultData> => this.results;
}
