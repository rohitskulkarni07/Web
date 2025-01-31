export class FlipkartPage {
  // Define elements on the page (example: search bar, buttons, etc.)

  // open() function that navigates to the Flipkart URL
  get open() {
    return browser.url("https://www.flipkart.com/");
  }

  // You can add more methods to interact with specific elements
  // For example, if you want to search for iPhone:
  get searchBox() {
    return $('[title="Search for products, brands and more"]');
  }

  get searchButton() {
    return $('button[type="submit"]');
  }

  async searchForItem(item) {
    await this.searchBox.setValue(item);
    await this.searchButton.click();
  }
}
