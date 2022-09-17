class TenMinuteMailPage {
  get tenMinuteMailUrl() {
    return "https://www.fakemail.net/";
  }
  get tenMinuteMail() {
    return $("//*[@id='email']");
  }
  get tenMinutemailFrame() {
    return $("//iframe[@class='col-xs-12 noPadding']");
  }
  get letter() {
    return $("//span[contains(text(),'Google Cloud Sales ')]");
  }
  get costInLetter() {
    return $("//h3[contains(text(),'USD 1,081.20')]");
  }
}

module.exports = new TenMinuteMailPage();
