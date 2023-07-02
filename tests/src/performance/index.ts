import puppeteer from 'puppeteer';
import { environment } from '$root/_helpers_/environment';
import { ResultsGatherer } from '$performance/results-gatherer';
import { generateResultsInTex } from '$performance/results-generator';
import { clearEditor } from '$root/_helpers_/commons';
import { generateExamplesInTex } from '$performance/examples-generator';

const run = async (): Promise<void> => {
  const resultsGatherer = new ResultsGatherer();
  const testIds = resultsGatherer.getTestsIds();

  // eslint-disable-next-line no-restricted-syntax
  for (const testId of testIds) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(environment.websiteUrl);
    const test = resultsGatherer.selectTestById(testId);
    await page.waitForSelector('span[data-testid="ti-parsing-status-working"]');
    await page.waitForSelector('span[data-testid="ti-parsing-status-no-errors"]');

    while (resultsGatherer.isCurrentTestNotCompleted()) {
      await clearEditor(page);
      await page.type('#code-textarea--input', test.code);
      await page.keyboard.press('Enter');

      resultsGatherer.startCurrentTest();
      await page.waitForSelector('span[data-testid="ti-parsing-status-working"]');
      await page.waitForSelector('span[data-testid="ti-parsing-status-no-errors"]');
      resultsGatherer.endCurrentTest();

      await clearEditor(page);
    }

    await browser.close();
  }

  generateExamplesInTex(resultsGatherer.getTests());
  generateResultsInTex(resultsGatherer.getResults());
};

run().catch(() => new Error('Test execution failed'));
