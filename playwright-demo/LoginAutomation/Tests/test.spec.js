import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/login-page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
});

test.describe("Check Element Visibility", () => {
  test("Verify is Username input field visible", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const isUsernameInputFieldVisible =
      await loginPage.isUsernameInputFieldVisible();
    expect(isUsernameInputFieldVisible).toBe(true);
  });

  test("Verify is Password input field visible", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const isPasswordInputFieldVisible =
      await loginPage.isPasswordInputFieldVisible();
    expect(isPasswordInputFieldVisible).toBe(true);
  });

  test("Verify is Submit button visible", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const isSubmitButtonVisible = await loginPage.isSubmitButtonVisible();
    await expect(isSubmitButtonVisible).toBe(true);
  });
});

test.describe('Test "Login" functionality', async () => {
  const validCredentials = ["student", "Password123"];
  const successfulLoginURL =
    "https://practicetestautomation.com/logged-in-successfully/";

  test("Test log in functionality with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(validCredentials[0], validCredentials[1]);
    await loginPage.clickSubmitLoginButton();
    await expect(page).toHaveURL(successfulLoginURL);

    await page.waitForTimeout(1000);
    const isLogOutButtonVisible = await loginPage.isLogOutButtonVisible();
    expect(isLogOutButtonVisible).toBe(true);
  });
});
