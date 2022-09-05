class TenMinuteMailPage {
  get tenMinuteMailUrl() {
    return "https://www.fakemail.net/";
  }
  get tenMinuteMail() {
    return $("//*[@id='email']");
  }
  get tenMinutemailFrame() {
    return $("//*[@id='iframeMail']");
  }
  get letter() {
    return $(
      "/html/body/div[2]/div[3]/div[2]/div[1]/div/table/tbody/tr[3]/td[1]"
    );
  }
  get costInLetter() {
    return $("/html/body/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/h3");
  }
}

module.exports = new TenMinuteMailPage();
