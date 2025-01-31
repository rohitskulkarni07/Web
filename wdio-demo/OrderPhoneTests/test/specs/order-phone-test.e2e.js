import FlipkartPage from "../pageobjects/flipkart.page";

describe("Order Phone Test", () => {
  it("should order iPhone from Flipkart", async () => {
    await FlipkartPage.open();
    await browser.waitUntil(
      async () => {
        return (await browser.getTitle()) !== "";
      },
      {
        timeout: 10000,
        timeoutMsg: "Page did not load in time",
      }
    );

    // You can add more logic here to search and order the iPhone
    console.log("Flipkart page loaded successfully");
  });
});
