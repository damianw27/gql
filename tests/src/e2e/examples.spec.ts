import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer, { Browser, Page } from 'puppeteer';
import { environment } from '$root/_helpers_/environment';
import { clearFocusedInput, clickByTestId, getElementsByTestId, switchLanguage } from '$root/_helpers_/commons';

const feature = loadFeature('./src/e2e/features/examples.feature');

const firstGrammarExample = `CREATE GRAPH mySocialNetwork OPEN TYPE
INSERT (:Person { "firstname": "Keith", "lastname": "Hare", 
         "joined": DATE "2022-08-23" })
       -[:LIVES_IN { "since": DATE "1980-07-15" }]->
       (:City { "name":"Granville", "state":"OH",
         "country": "USA" })
INSERT (:Pet { "name": "Winnifred", "type": "Dog" })
/*
   The following INSERT succeeds because there are
   no restrictions on the contents of the graph.
*/
MATCH (a { "firstname": "Keith" }), (d { "name": "Winnifred" })
INSERT (a)-[:HasPet]->(d)
`;

defineFeature(feature, (test) => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('the user selects an example', ({ given, when, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when('the user clicks on first example of provided language', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item', page);
      await examples[0].click();
    });

    then('the example should be moved to the editor', async () => {
      const editorValue = await page.$eval('#code-textarea--input', (element) => element.textContent);
      expect(editorValue).toBe(firstGrammarExample);
    });
  });

  test('selecting of example should move to upper part of page', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when('the user clicks no first example of provided language', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item', page);
      await examples[0].click();
    });

    and('the example is provided to the editor', async () => {
      const editorValue = await page.$eval('#code-textarea--input', (element) => element.textContent);
      expect(editorValue).toBe(firstGrammarExample);
    });

    then('the page scroll position should be set to beginning of the page', async () => {
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBe(0);
    });
  });

  test('selecting of different formal language should change examples', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when('the example of selected language is rendered', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item--title', page);
      const firstTitleElement = await examples[0].jsonValue();
      expect(firstTitleElement.textContent).toBe('Example with any graph type');
    });

    and('the user select another language', async () => {
      await switchLanguage(1, page);
    });

    then('the examples should be changed', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item--title', page);
      const firstTitleElement = await examples[0].jsonValue();
      expect(firstTitleElement.textContent).not.toBe('Example with any graph type');
      await switchLanguage(0, page);
    });
  });

  test('providing search phrase should change list of examples', ({ given, when, and, then }) => {
    let defaultCountOfExamples: number;

    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when('the search input is empty', async () => {
      await clickByTestId('ti-examples-search-input', page);
      await clearFocusedInput(page);
    });

    and('the default count of examples is known', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item', page);
      defaultCountOfExamples = examples.length;
    });

    and('the user provides an search phrase to examples', async () => {
      await page.type('[data-testid="ti-examples-search-input"]', 'session');
    });

    then('the examples list should be altered to provide only examples that match', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item', page);
      const currentCountOfExamples = examples.length;
      expect(currentCountOfExamples).not.toBe(defaultCountOfExamples);
    });
  });

  test('removing searching phrase should reset list of examples', ({ given, when, and, then }) => {
    let defaultCountOfExamples: number;

    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when('the search input is empty', async () => {
      await clickByTestId('ti-examples-search-input', page);
      await clearFocusedInput(page);
    });

    and('the default count of examples is known', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item', page);
      defaultCountOfExamples = examples.length;
    });

    and('the user provides an search phrase to examples', async () => {
      await page.type('[data-testid="ti-examples-search-input"]', 'session');
    });

    and('the examples list is altered', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item', page);
      const currentCountOfExamples = examples.length;
      expect(currentCountOfExamples).not.toBe(defaultCountOfExamples);
    });

    and('the user removes search phrase', async () => {
      await clickByTestId('ti-examples-search-input', page);
      await clearFocusedInput(page);
    });

    then('the examples list should be at initial state before search', async () => {
      const examples = await getElementsByTestId('ti-examples-list-item', page);
      const currentCountOfExamples = examples.length;
      expect(currentCountOfExamples).toBe(defaultCountOfExamples);
    });
  });
});
