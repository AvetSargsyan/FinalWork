class TenMinuteMailPage {
  get tenMinuteMailUrl() {
    return "https://www.fakemail.net/";
  }
  get tenMinuteMail() {
    return $("//*[@id='email']");
  }
  get tenMinutemailFrame() {
    return $("/html/body/div[1]/div[3]/div/div[2]/div/div/iframe");
  }
  get letter() {
    return $(
      "/html/body/div[2]/div[3]/div[2]/div[1]/div/table/tbody/tr[3]/td[1]"
    );
  }
  get costInLetter() {
    return $("#mobilepadding > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > h3");
  }
}

module.exports = new TenMinuteMailPage();
