import { Browser, ClickOptions, ElementHandle, Page } from 'puppeteer';
import clipboard from 'clipboardy';
import { environment } from '$root/_helpers_/environment';

export const selectWholeShortcut = async (page: Page): Promise<void> => {
  await page.keyboard.down('ControlLeft');
  await page.keyboard.press('a');
  await page.keyboard.up('ControlLeft');
};

export const clearFocusedInput = async (page: Page): Promise<void> => {
  await selectWholeShortcut(page);
  await page.keyboard.press('Backspace');
};

export const clearEditor = async (page: Page): Promise<void> => {
  await page.click('#code-textarea--input');
  await clearFocusedInput(page);
};

export const getElementsByTestId = async (testId: string, page: Page): Promise<ElementHandle[]> =>
  page.$$(`[data-testid="${testId}"]`);

export const getElementByTestId = async (testId: string, page: Page): Promise<ElementHandle | undefined> =>
  (await page.$(`[data-testid="${testId}"]`)) ?? undefined;

export const waitForElementByTestId = async (testId: string, page: Page): Promise<ElementHandle | undefined> =>
  (await page.waitForSelector(`[data-testid="${testId}"]`)) ?? undefined;

export const clickByTestId = async (testId: string, page: Page, options?: ClickOptions): Promise<void> =>
  page.click(`[data-testid="${testId}"]`, options);

export const switchLanguage = async (languageIndex: number, page: Page): Promise<void> => {
  const options = ['latest.worker.js', 'pg-schema.worker.js'];
  await page.select('[data-testid="ti-worker-select"]', options[languageIndex]);
};

export const waitForMillis = async (millis: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
