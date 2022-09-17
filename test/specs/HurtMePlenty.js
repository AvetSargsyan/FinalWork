"use strict";
const SearchPage = require("../pageobjects/searchPage");
const CloudPage = require("../pageobjects/googleCloudPage");

describe("'Hurt me plenty' task", () => {
  it("Should open page, add some values and select some options", async () => {
    await SearchPage.open();
    await SearchPage.searchPageActions(
      "Google Cloud Platform Pricing Calculator"
    );
    await CloudPage.googlePageActions("4", "leave blank");
  });
  it("Should check the correspondence of the data", async () => {
    await CloudPage.checkCorrData(
      "Provisioning model: Regular",
      "Instance type: n1-standard-8",
      "Region: Frankfurt",
      "Local SSD: 2x375 GiB",
      "Commitment term: 1 Year",
      "USD 1,081.20 per 1 month"
    );
  });
});
