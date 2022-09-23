"use strict";
const SearchPage = require("../pageobjects/searchPage");
const CloudPage = require("../pageobjects/googleCloudPage");
const TenMinuteMailPage = require("../pageobjects/tenMinuteMailPage");
const assert = require("assert");

describe("'Hardcore' task", () => {
  it("Should open page, add some values and select some options", async () => {
    await SearchPage.open();
    await SearchPage.searchPageActions(
      "Google Cloud Platform Pricing Calculator"
    );
    await CloudPage.googlePageActions("4", "leave blank");
  });
  it("Should wait the letter with the cost calculation and check that the Total Estimated Monthly Cost in the letter matches what is displayed in the calculator", async () => {
    const costPerMonth = await CloudPage.checkCostPerMonth.getText();
    const cost = await costPerMonth.match(/[\d,.]+/g).shift();
    const calcPageUrl = await browser.getTitle();
    await browser.newWindow(TenMinuteMailPage.tenMinuteMailUrl);
    const temporaryMail = await TenMinuteMailPage.tenMinuteMail.getText();
    await browser.switchWindow(calcPageUrl);
    await browser.fullscreenWindow();
    const frame1 = await CloudPage.frameOne;
    await browser.switchToFrame(frame1);
    const frame2 = await CloudPage.frameTwo;
    await browser.switchToFrame(frame2);
    await CloudPage.emailBtn.click();
    await CloudPage.emailField.setValue(temporaryMail);
    await expect(CloudPage.sendEmailBtn).toBeExisting();
    await CloudPage.sendEmailBtn.click();
    await browser.switchWindow(TenMinuteMailPage.tenMinuteMailUrl);
    await expect(TenMinuteMailPage.letter).toBeExisting({ wait: 15000 });
    await TenMinuteMailPage.letter.click();
    const frame3 = await TenMinuteMailPage.tenMinutemailFrame;
    await browser.switchToFrame(frame3);
    await expect(TenMinuteMailPage.costInLetter).toBeExisting();
    const costPerMonthInLetter = await TenMinuteMailPage.costInLetter.getText();
    const costInLetter = await String(costPerMonthInLetter.match(/[\d,.]+/g));
    await assert.strictEqual(cost, costInLetter);
    await browser.pause(2000);
  });
});
