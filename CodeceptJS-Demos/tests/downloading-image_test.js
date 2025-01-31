Feature("downloading-image");
let dataSrcList = [];

Scenario("navigate images from multiple pages", async ({ I }) => {
  // Loop through pages 1 to 320
  for (let page = 320; page <= 250; page++) {
    const url = `https://zxi.mytechroad.com/blog/page/${page}/`;
    await I.amOnPage(url);

    // Get all image elements
    const pageDataSrcList = await I.grabAttributeFromAll(
      { xpath: "//figure//img" },
      "data-src"
    );
    dataSrcList.push(...pageDataSrcList);
  }
  for (let i = 0; i < dataSrcList.length; i++) {
    await I.amOnPage(dataSrcList[i]);
    await I.saveElementScreenshot(
      { xpath: "//img" },
      `${585 + i}-${dataSrcList[i]
        .split("/")
        .pop()
        .replace(/\.png$/, "")}.png`
    );
  }
});
