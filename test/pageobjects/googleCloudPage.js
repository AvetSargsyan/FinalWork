const Page = require("./page");

class CloudPage extends Page {
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
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[1]/div[1]/md-input-container/input"
    );
  }
  get whatFor() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[2]/div[1]/md-input-container/input"
    );
  }
  get os() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[3]/div[1]/md-input-container/md-select/md-select-value/span[1]/div"
    );
  }
  get free() {
    return $("/html/body/div[3]/md-select-menu/md-content/md-option[1]/div");
  }
  get vmClass() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[4]/div[1]/md-input-container/md-select/md-select-value"
    );
  }
  get regular() {
    return $("/html/body/div[4]/md-select-menu/md-content/md-option[1]");
  }
  get series() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[6]/div[1]/md-input-container/md-select/md-select-value"
    );
  }
  get n1() {
    return $("/html/body/div[5]/md-select-menu/md-content/md-option[1]");
  }
  get instanceType() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[7]/div[1]/md-input-container/md-select/md-select-value"
    );
  }
  get n1_standart() {
    return $(
      "/html/body/div[6]/md-select-menu/md-content/md-optgroup[3]/md-option[4]/div"
    );
  }
  get addGPUBtn() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[13]/div[1]/md-input-container/md-checkbox/div[1]"
    );
  }
  get typeOfGPU() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[1]/md-select"
    );
  }
  get teslaV100() {
    return $("/html/body/div[7]/md-select-menu/md-content/md-option[4]/div");
  }
  get numsOfGPU() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[2]/md-select/md-select-value/span[1]"
    );
  }
  get one() {
    return $("/html/body/div[8]/md-select-menu/md-content/md-option[2]/div");
  }
  get localSSD() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[15]/div[1]/md-input-container/md-select/md-select-value"
    );
  }
  get twoX475gb() {
    return $("/html/body/div[9]/md-select-menu/md-content/md-option[3]/div");
  }
  get dataCenterLocation() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[16]/div[1]/md-input-container/md-select/md-select-value"
    );
  }
  get frankfurt() {
    return $(
      "/html/body/div[10]/md-select-menu/md-content/md-optgroup/md-option[12]"
    );
  }
  get comitedUsage() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[19]/div[1]/md-input-container/md-select/md-select-value"
    );
  }
  get oneYear() {
    return $("/html/body/div[11]/md-select-menu/md-content/md-option[2]");
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
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[5]/div[1]"
    );
  }
  get checkDataCenterLocation() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[1]/div"
    );
  }
  get checkLocalSSD() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[7]/div[1]"
    );
  }
  get checkCommitmentTerm() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[3]/div"
    );
  }
  get checkCostPerMonth() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/h2/b"
    );
  }
  get emailCopyBtn() {
    return $("/html/body/div[2]/div[2]/div[1]/div[3]/a[5]");
  }
  get emailBtn() {
    return $(
      "/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/div[2]/button[1]"
    );
  }
  get emailField() {
    return $(
      "/html/body/div[9]/md-dialog/form/md-content/div[3]/md-input-container/input"
    );
  }
  get sendEmailBtn() {
    return $("/html/body/div[9]/md-dialog/form/md-dialog-actions/button[2]");
  }
}

module.exports = new CloudPage();
