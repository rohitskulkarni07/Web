// playwright.config.js
module.exports = {
  testDir: "Tests",
  timeout: 30000,
  use: {
    headless: false,
    screenshot: "only-on-failure", 
    video: "retain-on-failure",
  },
  projects: [
    // {
    //   name: "firefox", // You can specify browser here
    //   use: { browserName: "firefox" },
    // },
    // {
    //   name: "webkit", // You can specify browser here
    //   use: { browserName: "webkit" },
    // },
    {
      name: "chrome",
      use: { browserName: "chromium" }, // Default browser
    },
  ],
};
