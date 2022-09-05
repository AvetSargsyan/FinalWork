"use strict";
const SearchPage = require("../pageobjects/searchPage");
const CloudPage = require("../pageobjects/googleCloudPage");
const TenMinuteMailPage = require("../pageobjects/tenMinuteMailPage");

describe("'Hardcore' task", () => {
  afterEach(async () => {
    await browser.pause(1000);
  });
  it("Should find the field, then add text, and enter", async () => {
    await SearchPage.open();
    await browser.fullscreenWindow();
    await SearchPage.searchBtn.click();
    await SearchPage.searchBtn.addValue(
      "Google Cloud Platform Pricing Calculator"
    );
    await browser.keys("Enter");
  });
  it("Should open calculator page", async () => {
    await SearchPage.calcPagePlatformLink.click();
  });
  it("Should activate 'COMPUTE ENGINE' section ", async () => {
    await browser.fullscreenWindow();
    const frame1 = await CloudPage.frameOne;
    await browser.switchToFrame(frame1);
    const frame2 = await CloudPage.frameTwo;
    await browser.switchToFrame(frame2);
    await CloudPage.computeEngine.click();
  });
  it("Should write '4' in 'Number of instances' field", async () => {
    await CloudPage.instancesNum.setValue("4");
  });
  it("Should write 'leave blank' in section  'What are these instances for ?'", async () => {
    await CloudPage.whatFor.setValue("leave blank");
  });
  it("Should select 'Free: Debian, CentOS, CoreOS, Ubuntu..' in section  'Operating System / Software'", async () => {
    await CloudPage.os.click();
    await CloudPage.free.click();
  });
  it("Should select 'Regular' in section  'VM Clas's", async () => {
    await CloudPage.vmClass.click();
    await CloudPage.regular.click();
  });
  it("Should select 'n1-standard-8 (vCPUs: 8, RAM: 30 GB)' in section  'Instance type'", async () => {
    await CloudPage.series.click();
    await browser.pause(1000);
    await CloudPage.n1.click();
    await CloudPage.instanceType.click();
    await browser.pause(1000);
    await CloudPage.n1_standart.click();
  });
  it("Should select 'Add GPUs' ", async () => {
    await CloudPage.os.scrollIntoView();
    await CloudPage.addGPUBtn.click();
  });
  it("Should select 'NVIDIA Tesla V100' in section 'GPU type' and '1' in secton 'Number of GPUs'", async () => {
    await CloudPage.typeOfGPU.click();
    await browser.pause(1000);
    await CloudPage.teslaV100.click();
    await CloudPage.numsOfGPU.click();
    await browser.pause(1000);
    await CloudPage.one.click();
  });
  it("Should select '2x375 Gb' in section  'Local SSD'", async () => {
    await CloudPage.localSSD.click();
    await browser.pause(1000);
    await CloudPage.twoX475gb.click();
  });
  it("Should select 'Frankfurt' in section  'Datacenter location'", async () => {
    await CloudPage.series.scrollIntoView();
    await CloudPage.dataCenterLocation.click();
    await browser.pause(1000);
    await CloudPage.frankfurt.click();
  });
  it("Should select '1 Year' in section  'Commited usage'", async () => {
    await CloudPage.comitedUsage.click();
    await browser.pause(1000);
    await CloudPage.oneYear.click();
  });
  it("Should click button 'Add to estimate'", async () => {
    await CloudPage.addToEstimateBtn.click();
  });

  it("Should wait the letter with the cost calculation and check that the Total Estimated Monthly Cost in the letter matches what is displayed in the calculator", async () => {
    const calcPageUrl = await browser.getTitle();
    let costPerMonth = await CloudPage.checkCostPerMonth.getText();
    await browser.newWindow(TenMinuteMailPage.tenMinuteMailUrl);
    const temporaryMail = await TenMinuteMailPage.tenMinuteMail.getText();
    //await CloudPage.emailCopyBtn.click();
    await browser.pause(2000);
    await browser.switchWindow(calcPageUrl);
    await browser.fullscreenWindow();
    const frame1 = await CloudPage.frameOne;
    await browser.switchToFrame(frame1);
    const frame2 = await CloudPage.frameTwo;
    await browser.switchToFrame(frame2);
    await CloudPage.emailBtn.click();
    await CloudPage.emailField.setValue(temporaryMail);
    await browser.pause(1000);
    await CloudPage.sendEmailBtn.click();
    await browser.pause(1000);
    await browser.switchWindow(TenMinuteMailPage.tenMinuteMailUrl);
    await browser.pause(5000);
    await browser.pause(9000);
    await expect(TenMinuteMailPage.letter).toBeExisting();
    await TenMinuteMailPage.letter.click();
    await browser.pause(2000);
    const frame3 = await TenMinuteMailPage.tenMinutemailFrame;
    await browser.switchToFrame(frame3);
    await expect(TenMinuteMailPage.costInLetter).toBeExisting();
    let costPerMonthInLetter = await TenMinuteMailPage.costInLetter.getText();
    await console.log(
      "---------------------" + costPerMonth + "---------------------"
    );
    await console.log(
      "---------------------" + costPerMonthInLetter + "---------------------"
    );
    await expect(costPerMonth).toHaveTextContaining(costPerMonthInLetter);
    await browser.pause(2000);
  });
});
