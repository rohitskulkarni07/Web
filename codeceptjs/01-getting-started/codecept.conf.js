/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://web.whatsapp.com/",
      browser: "chrome",
      port: 9515,
      path: "/",
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "01-getting-started",
};
