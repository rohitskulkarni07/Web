import { test, expect } from "@playwright/test";

test.describe("file", () => {
  test("file upload", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-file-upload");
    await page.waitForTimeout(2000);
    const handle = page.locator("input[type='file']");
    await page.waitForTimeout(2000);
    await handle.setInputFiles("./tests/file.txt");
    await page.waitForTimeout(2000);
    page.once("dialogue", (dialogue) => {
      page.waitForTimeout(2000);

      console.log(dialogue.message());
      page.waitForTimeout(2000);
      dialogue.accept();
    });
    await page.waitForTimeout(2000);

    await page.getByText("Submit").click();
    await page.waitForTimeout(5000);
  });
});
