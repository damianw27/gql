import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer, { Browser, Page } from 'puppeteer';
import { environment } from '$root/_helpers_/environment';
import { clearEditor, clickByTestId, waitForElementByTestId } from '$root/_helpers_/commons';

const feature = loadFeature('./src/e2e/features/parse-tree.feature');

const example = `MATCH (a { "firstname": "Keith" }), (d { "name": "Winnifred" })
INSERT (a)-[:HasPet]->(d)`;

defineFeature(feature, (test) => {
  let browser: Browser;
  let page: Page;

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
  });

  afterEach(async () => {
    await browser.close();
  });

  test('render indicator for parse result processing while ongoing processing', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user provides valid large input', async () => {
      await page.type('#code-textarea--input', example);
    });

    and('the user switches to parse tree view', async () => {
      await clickByTestId('ti-view-select--wrapper--parse-tree', page);
    });

    then('should render spinner when processing', async () => {
      const spinnerElement = await waitForElementByTestId('ti-loading-parse-tree', page);
      expect(spinnerElement).not.toBeUndefined();
    });
  });

  test('render parse tree after parse result is processed', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user provides valid large input', async () => {
      await page.type('#code-textarea--input', example);
    });

    and('the user switches to parse tree view', async () => {
      await clickByTestId('ti-view-select--wrapper--parse-tree', page);
    });

    and('rendering spinner when processing', async () => {
      await waitForElementByTestId('ti-loading-parse-tree', page);
    });

    then('parse tree should be rendered properly', async () => {
      const parseTreeContainer = await waitForElementByTestId('ti-parse-tree--container', page);
      expect(parseTreeContainer).not.toBeUndefined();
    });
  });
});
