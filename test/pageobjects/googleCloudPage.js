const Page = require("./page");

class CloudPage extends Page {
  get searchBtn() {
    return $("//input[@class='devsite-search-field devsite-search-query']");
  }
  get calcPagePlatformLink() {
    return $(
      "//*[@id='___gcse_0']/div/div/div/div[5]/div[2]/div/div/div[1]/div[6]/div[1]/div[1]/div/a"
    );
  }
  get computeEngine() {
    return $(
      "//*[@id='mainForm']/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[1]"
    );
  }
  get frameOne() {
    return $("//*[@id='cloud-site']/devsite-iframe/iframe");
  }
  get frameTwo() {
    return $("//iframe[@id='myFrame']");
  }
  get instancesNum() {
    return $("//*[@id='input_89']");
  }
  get whatFor() {
    return $("//*[@id='input_90']");
  }
  get os() {
    return $("//*[@id='select_value_label_81']");
  }
  get free() {
    return $("//*[@id='select_option_91']");
  }
  get vmClass() {
    return $("//*[@id='select_value_label_82']");
  }
  get regular() {
    return $("//*[@id='select_option_104']");
  }
  get series() {
    return $("//*[@id='select_value_label_84']");
  }
  get n1() {
    return $("//*[@id='select_option_199']");
  }
  get instanceType() {
    return $("//*[@id='select_value_label_85']");
  }
  get n1_standart() {
    return $("//*[@id='select_option_423']"); 
  }
  get addGPUBtn() {
    return $(
      "//*[@id='mainForm']/div[2]/div/md-card/md-card-content/div/div[1]/form/div[13]/div[1]/md-input-container/md-checkbox/div[1]"
    );
  }
  get typeOfGPU() {
    return $("//*[@id='select_461']"); 
  }
  get teslaV100() {
    return $("//*[@id='select_option_468']/div[1]");
  }                                                   
  get numsOfGPU() {
    return $("//*[@id='select_463']");
  }
  get one() {
    return $("//*[@id='select_option_472']");
  }
  get localSSD() {
    return $("//*[@id='select_value_label_417']");
  }
  get twoX475gb() {
    return $("//*[@id='select_option_444']/div");
  }
  get dataCenterLocation() {
    return $("//*[@id='select_value_label_87']");
  }
  get frankfurt() {
    return $("//*[@id='select_option_226']");
  }
  get comitedUsage() {
    return $(
      "//*[@id='select_value_label_88']"
    );
  }
  get oneYear() {
    return $("//*[@id='select_option_127']");
  }
  get addToEstimateBtn() {
    return $(
      "#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.layout-align-end-start.layout-row > button"
    );
  }
  get checkVMClass() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[4]/div"
    );
  }
  get checkInstanceType() {
    return $("/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[5]/div[1]");
  }
  get checkDataCenterLocation() {
    return $("/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[1]/div");
  }
  get checkLocalSSD() {
    return $("/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[7]/div[1]");
  }
  get checkCommitmentTerm() {
    return $("/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[3]/div");
  }
  get checkCostPerMonth(){
    return $("/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/h2/b")
  }
  get tenMinuteMail() {
    return $("//*[@id='email']")
  }
  get tenMinuteMailUrl(){
     return "https://www.fakemail.net/" 
  }                //         "https://www.minuteinbox.com/"
  get emailCopyBtn() {
    return $("/html/body/div[2]/div[2]/div[1]/div[3]/a[5] ");
  }     //        /html/body/div[2]/div[3]/div/a[4]
  get emailBtn() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/div[2]/button[1]"
    );
  }
  get emailField() {
    return $("/html/body/div[9]/md-dialog/form/md-content/div[3]/md-input-container/input");
  }
  //*[@id='maillist']/tbody/tr[2]/td[1]/a
  get  sendEmailBtn (){
    return $("//*[@id='dialogContent_545']/form/md-dialog-actions/button[2]")
  }
  get letter (){
    return $("/html/body/div[2]/div[3]/div[2]/div[1]/div/table/tbody/tr[3]/td[1]")
  }
  get costInLetter (){
    return $("/html/body/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/h3")
  }               //*[@id='mobilepadding']/td/table/tbody/tr[2]/td[2]/h3
  get closeBtn (){
    return $("//*[@id='dismiss-button']")
  }
  get tenMinutemailFrame() {
    return $("//*[@id='iframeMail']")
  }
  open() {
    return super.open("https://cloud.google.com/");
  }
}

module.exports = new CloudPage();
