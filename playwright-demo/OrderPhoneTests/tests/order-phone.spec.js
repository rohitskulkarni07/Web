import { test, expect } from "@playwright/test";
import { OrderPhone } from "../pages/OrderPhonePage";
test.beforeEach(async ({ page }) => {
  page.goto("https://www.flipkart.com/");
});

test.describe("Order Phone Tests", () => {
  test("Goto Login Page", async ({ page }) => {
    const orderPhone = new OrderPhone(page);
    await orderPhone.gotoLogin();
    const isLoginTextVisible = await orderPhone.isLoginTextVisible();
    expect(isLoginTextVisible).toBe(true);

    await orderPhone.fillPhoneNumber("8275146578");
    await orderPhone.clickRequestOtpBtn();
    await page.waitForTimeout(25000);

    // await orderPhone.clickVerify();

    await orderPhone.fillSearchbar("Redmi k20 pro");
  });
});
