import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer, { Browser, Page } from 'puppeteer';
import { environment } from '$root/_helpers_/environment';
import { clearEditor } from '$root/_helpers_/commons';

const feature = loadFeature('./src/e2e/features/autocomplete.feature');

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

  test('the user selects a suggestion with arrow up and enter keys', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user types "ta" in the editor', async () => {
      await page.type('#code-textarea--input', 'ta');
      await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
    });

    and('the user press the arrow up key', async () => {
      await page.keyboard.press('ArrowDown');
    });

    and('the user press the enter key', async () => {
      await page.keyboard.press('Enter');
    });

    then('selected suggestion should be inserted to the editor', async () => {
      const editorValue = await page.$eval('#code-textarea--input', (element) => element.textContent);
      expect(editorValue).not.toBeNull();
      expect(editorValue?.includes('data')).toBeTruthy();
    });
  });

  test('the user selects a suggestion with arrow down and enter keys', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user types "ta" in the editor', async () => {
      await page.type('#code-textarea--input', 'ta');
      await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
    });

    and('the user press the arrow down key', async () => {
      await page.keyboard.press('ArrowDown');
    });

    and('the user press the enter key', async () => {
      await page.keyboard.press('Enter');
    });

    then('selected suggestion should be inserted to the editor', async () => {
      const editorValue = await page.$eval('#code-textarea--input', (element) => element.textContent);
      expect(editorValue).not.toBeNull();
      expect(editorValue?.includes('at')).toBeTruthy();
    });
  });

  test('the user cancels the suggestion with the escape key', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user types "mat" in the editor', async () => {
      await page.type('#code-textarea--input', 'mat');
      await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
    });

    and('the user press escape key', async () => {
      await page.keyboard.press('Escape');
    });

    then('the autocomplete dialog should be closed', async () => {
      const autocompleteList = await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
      expect(autocompleteList).toBeNull();
    });
  });

  test('the user shows suggestions with ctrl + enter keys', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user types "mat" in the editor', async () => {
      await page.type('#code-textarea--input', 'mat');
      await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
    });

    and('the user press escape key to close dialog', async () => {
      await page.keyboard.press('Escape');
      const autocompleteList = await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');

      if (autocompleteList === null) {
        throw new Error('illegal state, dialog should be hidden');
      }
    });

    and('the user press ctrl + enter keys', async () => {
      await page.keyboard.down('ControlLeft');
      await page.keyboard.press('Enter');
      await page.keyboard.up('ControlLeft');
    });

    then('the autocomplete dialog should be reopened', async () => {
      const autocompleteList = await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
      expect(autocompleteList).not.toBeNull();
    });
  });

  test('the user types word that is not in the list', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user types "dqewqsaczx" in the editor', async () => {
      await page.type('#code-textarea--input', 'dqewqsaczx');
    });

    then('the autocomplete dialog should not be opened', async () => {
      const autocompleteList = await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
      expect(autocompleteList).toBeNull();
    });
  });

  test('the user types a keyword that partially matches suggestions', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user types "sel" in the editor', async () => {
      await page.type('#code-textarea--input', 'sel');
      await page.waitForSelector('ul[data-testid="ti-autocomplete-list"]');
    });

    then('the user should see suggestions that contains "sel"', async () => {
      const autocompleteList = await page.waitForSelector('ul[data-testid="ti-autocomplete-list"] li');
      expect(autocompleteList).not.toBeNull();
    });
  });
});
