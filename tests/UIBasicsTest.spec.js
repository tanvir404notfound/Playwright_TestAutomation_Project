import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { getTestData } from '../utils/excelReader.js';

test('First Playwright Test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const homePage = new HomePage(page);
  const testData = getTestData('testData.xlsx')[0];
  await homePage.goto();
  await homePage.selectRoute('Philadelphia', 'Cairo');
  await homePage.findFlights();
  const cheapestRow = await homePage.getCheapestFlightRow();
  await homePage.selectFlight(cheapestRow);
  await homePage.fillPassengerDetails({
    name: testData.Name,
    address: testData.Address,
    city: testData.City,
    state: testData.State,
    zipCode: testData.ZipCode,
    cardType: testData.CardType,
    cardNumber: testData.CardNumber,
    cardMonth: testData.CardMonth,
    cardYear: testData.CardYear,
    nameOnCard: testData.NameOnCard,
  });
  await page.waitForTimeout(1000);
});