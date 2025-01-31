import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

import { chromium } from "@playwright/test";

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");
// });

// test.describe("check visibility", () => {
//   test("verify is username visible", async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const isUsernameInputFieldVisible =
//       await loginPage.isUsernameInputFieldVisible();
//     expect(isUsernameInputFieldVisible).toBe(true);
//   });
// });

const { chromium } = require("playwright"); // Ensure Playwright is imported

chromium
  .launch()
  .then((browser) => {
    return browser.newPage().then((page) => {
      return { browser, page };
    });
  })
  .then(({ browser, page }) => {
    return page.goto("https://example.com").then(() => {
      return { browser, page };
    });
  })
  .then(({ browser, page }) => {
    return page.screenshot({ path: "../../ss.png" }).then(() => {
      return browser.close();
    });
  })
  .catch((e) => {
    console.error("An error occurred:", e);
  });
