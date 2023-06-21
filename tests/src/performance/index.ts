import puppeteer from 'puppeteer';
import { environment } from '$root/_helpers_/environment';
import { ResultsGatherer } from '$performance/results-gatherer';
import { clearEditor } from '$root/_helpers_/clear-editor';
import { generateResults } from '$performance/results-generator';

const run = async (): Promise<void> => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(environment.websiteUrl);
  const resultsGatherer = new ResultsGatherer();
  const testIds = [resultsGatherer.getTestsIds()[0]];

  // eslint-disable-next-line no-restricted-syntax
  for (const testId of testIds) {
    const test = resultsGatherer.selectTestById(testId);

    while (resultsGatherer.isCurrentTestNotCompleted()) {
      await clearEditor(page);
      await page.type('#code-textarea--input', test.code, { delay: 0 });
      await page.keyboard.press('Enter');

      resultsGatherer.startCurrentTest();
      await page.waitForSelector('span[data-testid="ti-parsing-status-working"]');
      await page.waitForSelector('span[data-testid="ti-parsing-status-no-errors"]');
      resultsGatherer.endCurrentTest();

      await clearEditor(page);
    }
  }

  await browser.close();
  const results = resultsGatherer.getResults();
  generateResults(results);
};

run().catch(() => new Error('Test execution failed'));
