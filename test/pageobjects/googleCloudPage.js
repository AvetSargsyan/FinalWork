const Page = require("./page");
const computer = require("../test-data/computer");
class CloudPage extends Page {
  get frameOne() {
    return $("//devsite-iframe/iframe");
  }
  get frameTwo() {
    return $("//iframe[@id='myFrame']");
  }
  get computeEngine() {
    return $("div=Compute Engine");
  }
  get instancesNum() {
    return $(
      "//input[@class='ng-pristine ng-untouched md-input ng-empty ng-valid-min ng-invalid ng-invalid-required']"
    );
  }
  get whatFor() {
    return $("//input[@ng-model='listingCtrl.computeServer.label']");
  }
  get os() {
    return $("//md-select[@aria-owns='select_container_104']");
  }
  get free() {
    return $(`//md-option/div[contains(text(),"${computer.os}")]`);
  }
  get vmClass() {
    return $("//md-select[@aria-owns='select_container_108']");
  }
  get regular() {
    return $(
      `//md-option[@value='regular']/div[contains(text(),"${computer.provisioningModel}")]`
    );
  }
  get series() {
    return $("//md-select[@aria-owns='select_container_116']");
  }
  get n1() {
    return $(`//div[contains(text(),"${computer.series}")]`);
  }
  get instanceType() {
    return $("//md-select[@aria-owns='select_container_118']");
  }
  get n1_standart() {
    return $(`//md-option/div[contains(text(),"${computer.instanceType}")]`);
  }
  get addGPUBtn() {
    return $("//md-checkbox[@ng-model='listingCtrl.computeServer.addGPUs']");
  }
  get typeOfGPU() {
    return $("//md-select[@aria-owns='select_container_464']");
  }
  get teslaV100() {
    return $(`//div[contains(text(),"${computer.type}")]`);
  }
  get numsOfGPU() {
    return $("//md-select[@aria-owns='select_container_466']");
  }
  get one() {
    return $(
      "//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]'][@value='1']"
    );
  }
  get localSSD() {
    return $("//md-select[@aria-owns='select_container_421']");
  }
  get twoX475gb() {
    return $(`//md-option/div[contains(text(),"${computer.localSSD}")]`);
  }
  get dataCenterLocation() {
    return $("//md-select[@aria-owns='select_container_124']");
  }
  get frankfurt() {
    return $(
      `//md-option[@ng-repeat='item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer']/div[contains(text(), "${computer.region}")]`
    );
  }
  get comitedUsage() {
    return $("//md-select[@aria-owns='select_container_131']");
  }
  get oneYear() {
    return $(
      `//div[@class='md-select-menu-container md-active md-clickable']//div[contains(text(),"${computer.commitmentTerm}")]`
    );
  }
  get addToEstimateBtn() {
    return $(
      "//button[@ng-click='listingCtrl.addComputeServer(ComputeEngineForm);']"
    );
  }
  async googlePageActions(instanceNumber, instanceFor) {
    await browser.fullscreenWindow();
    const frame1 = await this.frameOne;
    await browser.switchToFrame(frame1);
    const frame2 = await this.frameTwo;
    await browser.switchToFrame(frame2);
    await this.computeEngine.click();
    await this.instancesNum.setValue(instanceNumber);
    await this.whatFor.setValue(instanceFor);
    await this.os.click();
    await this.free.click();
    await this.vmClass.click();
    await this.regular.click();
    await this.series.click();
    await expect(this.n1).toBeClickable();
    await this.n1.click();
    await this.instanceType.click();
    await expect(this.n1_standart).toBeClickable();
    await this.n1_standart.click();
    await this.os.scrollIntoView();
    await this.addGPUBtn.click();
    await this.typeOfGPU.click();
    await expect(this.teslaV100).toBeClickable();
    await this.teslaV100.click();
    await this.numsOfGPU.click();
    await expect(this.one).toBeClickable();
    await this.one.click();
    await this.localSSD.click();
    await expect(this.twoX475gb).toBeClickable();
    await this.twoX475gb.click();
    await this.series.scrollIntoView();
    await this.dataCenterLocation.click();
    await expect(this.frankfurt).toBeClickable();
    await this.frankfurt.click();
    await this.comitedUsage.click();
    await expect(this.oneYear).toBeClickable();
    await this.oneYear.click();
    await this.addToEstimateBtn.click();
  }
  async checkCorrData(
    vMClassData,
    instanceTypeData,
    dataCenterLocationData,
    localSSDData,
    commitmentTermData,
    costPerMonthData
  ) {
    await expect(this.checkVMClass).toHaveText(vMClassData);
    await expect(this.checkInstanceType).toHaveTextContaining(instanceTypeData);
    await expect(this.checkDataCenterLocation).toHaveText(
      dataCenterLocationData
    );
    await expect(this.checkLocalSSD).toHaveTextContaining(localSSDData);
    await expect(this.checkCommitmentTerm).toHaveText(commitmentTermData);
    await expect(this.checkCostPerMonth).toHaveTextContaining(costPerMonthData);
  }
  get checkVMClass() {
    return $(
      `//div[contains(text(),'Provisioning model: ${computer.provisioningModel}')]`
    );
  }
  get checkInstanceType() {
    return $(
      `//div[contains(text(),'Instance type: ${computer.instanceType}')]`
    );
  }
  get checkDataCenterLocation() {
    return $(`//div[contains(text(),'Region: ${computer.region}')]`);
  }
  get checkLocalSSD() {
    return $(`//div[contains(text(),'Local SSD: ${computer.localSSD}')]`);
  }
  get checkCommitmentTerm() {
    return $(
      `//div[contains(text(),'Commitment term: ${computer.commitmentTerm}')]`
    );
  }
  get checkCostPerMonth() {
    return $("//b[contains(text(),'Total Estimated Cost')]");
  }
  get emailBtn() {
    return $("//button[contains(text(),'Email')]");
  }
  get emailField() {
    return $("//input[@ng-model='emailQuote.user.email']");
  }
  get sendEmailBtn() {
    return $("//button[contains(text(),'Send Email')]");
  }
}

module.exports = new CloudPage();
