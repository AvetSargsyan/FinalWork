const Page = require("./page");

class SearchPage extends Page {
  get searchBtn() {
    return $("//input[@class='devsite-search-field devsite-search-query']");
  }
  get calcPagePlatformLink() {
    return $(
      "/html/body/section/section/main/devsite-content/article/article/div/devsite-cse/devsite-analytics-scope/div/div/div/div/div/div/div[5]/div[2]/div/div/div[1]/div[8]/div[1]/div[1]/div/a"
    );
  }
  open() {
    return super.open("https://cloud.google.com/");
  }
}

module.exports = new SearchPage();
