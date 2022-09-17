const Page = require("./page");

class SearchPage extends Page {
  get searchBtn() {
    return $("//input[@class='devsite-search-field devsite-search-query']");
  }
  get calcPagePlatformLink() {
    return $("b=Google Cloud Platform Pricing Calculator");
  }
  open() {
    return super.open("https://cloud.google.com/");
  }
  async searchPageActions(pageName) {
    await browser.fullscreenWindow();
    await this.searchBtn.isClickable();
    await this.searchBtn.click();
    await this.searchBtn.addValue(pageName);
    await browser.keys("Enter");
    await this.calcPagePlatformLink.isClickable();
    await this.calcPagePlatformLink.click();
  }
}

module.exports = new SearchPage();
