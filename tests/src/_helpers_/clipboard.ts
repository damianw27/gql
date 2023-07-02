import { Browser, Page } from 'puppeteer';
import { environment } from '$root/_helpers_/environment';

export const overrideClipboardPermissions = async (browser: Browser): Promise<void> => {
  const context = await browser.defaultBrowserContext();
  await context.overridePermissions(environment.websiteUrl, [
    'clipboard-read',
    'clipboard-write',
    'clipboard-sanitized-write',
  ]);
};

export const getClipboardValue = async (browser: Browser, page: Page): Promise<string> =>
  (await page.evaluate(async () => navigator.clipboard.readText())) as string;

export const waitForClipboardValueToChange = async (browser: Browser, page: Page): Promise<void> => {
  const initialValue = await getClipboardValue(browser, page);
  let nextValue = initialValue;

  while (initialValue === nextValue) {
    nextValue = await getClipboardValue(browser, page);
  }
};
