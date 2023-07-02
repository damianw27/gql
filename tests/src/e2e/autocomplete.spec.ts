import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer, { Browser, Page } from 'puppeteer';
import { environment } from '$root/_helpers_/environment';
import { clearEditor, getElementByTestId, waitForElementByTestId, waitForMillis } from '$root/_helpers_/commons';

const feature = loadFeature('./src/e2e/features/autocomplete.feature');

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

  test('the user selects a suggestion with arrow up and enter keys', ({ given, when, and, then }) => {
    given('the user is on the application page', async () => {
      await page.goto(environment.websiteUrl);
    });

    when("the editor's empty", async () => {
      await clearEditor(page);
    });

    and('the user types "ta" in the editor', async () => {
      await page.type('#code-textarea--input', 'ta');
      await waitForMillis(800);
    });

    and('the user press the arrow up key', async () => {
      await page.focus('[data-testid="ti-autocomplete-list"]');
      await page.keyboard.press('ArrowUp');
    });

    and('the user press the enter key', async () => {
      await page.focus('[data-testid="ti-autocomplete-list"]');
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
      await waitForMillis(800);
    });

    and('the user press the arrow down key', async () => {
      await page.focus('[data-testid="ti-autocomplete-list"]');
      await page.keyboard.press('ArrowDown');
    });

    and('the user press the enter key', async () => {
      await page.focus('[data-testid="ti-autocomplete-list"]');
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
      await waitForMillis(800);
    });

    and('the user press escape key', async () => {
      await page.focus('[data-testid="ti-autocomplete-list"]');
      await page.keyboard.press('Escape');
    });

    then('the autocomplete dialog should be closed', async () => {
      const autocompleteList = await page.$('[data-testid="ti-autocomplete-list"]');
      expect(await autocompleteList?.isVisible()).toBeFalsy();
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
      await waitForMillis(800);
    });

    and('the user press escape key to close dialog', async () => {
      await page.keyboard.press('Escape');
      const autocompleteList = await waitForElementByTestId('ti-autocomplete-list', page);
      expect(autocompleteList?.isHidden()).toBeTruthy();
    });

    and('the user press ctrl + enter keys', async () => {
      await page.keyboard.down('ControlLeft');
      await page.keyboard.press('Enter');
      await page.keyboard.up('ControlLeft');
    });

    then('the autocomplete dialog should be reopened', async () => {
      const autocompleteList = await getElementByTestId('ti-autocomplete-list', page);
      expect(await autocompleteList?.isHidden()).toBeFalsy();
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
      await waitForMillis(800);
    });

    then('the autocomplete dialog should not be opened', async () => {
      const autocompleteList = await waitForElementByTestId('ti-autocomplete-list', page);
      expect(await autocompleteList?.isHidden()).toBeTruthy();
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
      await waitForMillis(800);
    });

    then('the user should see suggestions that contains "sel"', async () => {
      const item0 = await waitForElementByTestId('ti-autocomplete-option-0', page);
      const item1 = await waitForElementByTestId('ti-autocomplete-option-1', page);
      expect(item0).not.toBeUndefined();
      expect(item1).not.toBeUndefined();
    });
  });
});
