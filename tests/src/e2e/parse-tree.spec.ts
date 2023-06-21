import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer, { Browser, Page } from 'puppeteer';
import { environment } from '$root/_helpers_/environment';
import { clearEditor, clickByTestId, getElementsByTestId } from '$root/_helpers_/commons';

const feature = loadFeature('./src/e2e/features/parse-tree.feature');

const example = `CREATE GRAPH mySocialNetwork OPEN TYPE
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

    then('first rendered element should be label "Rendering..."', async () => {
      const textFound = await page.evaluate((searchText) => {
        const pageText = document.body.innerText;
        return pageText.includes(searchText);
      }, 'Rendering...');

      expect(textFound).toBeTruthy();
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

    and('first rendered element should be label "Rendering..."', async () => {
      const textFound = await page.evaluate((searchText) => {
        const pageText = document.body.innerText;
        return pageText.includes(searchText);
      }, 'Rendering...');

      expect(textFound).toBeTruthy();
    });

    then('parse tree should be rendered properly', async () => {
      const parseTreeContainer = getElementsByTestId('ti-parse-tree--container', page);
      expect(parseTreeContainer).toBeTruthy();
    });
  });
});
