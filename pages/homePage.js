// Page Object for Home Page
export class HomePage {
  constructor(page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto('https://blazedemo.com/');
  }

  async selectRoute(from, to) {
    await this.page.selectOption('[name="fromPort"]', from);
    await this.page.selectOption('[name="toPort"]', to);
  }

  async findFlights() {
    await this.page.click('[value="Find Flights"]');
  }

  async getCheapestFlightRow() {
    const rows = await this.page.locator('table.table tbody tr');
    const rowCount = await rows.count();
    let minPrice = Number.MAX_VALUE;
    let cheapestRow = -1;
    for (let i = 0; i < rowCount; i++) {
      const priceText = await rows.nth(i).locator('td').nth(5).innerText();
      const price = parseFloat(priceText.replace('$', ''));
      if (price < minPrice) {
        minPrice = price;
        cheapestRow = i;
      }
    }
    return cheapestRow;
  }

  async selectFlight(rowIndex) {
    const rows = await this.page.locator('table.table tbody tr');
    await rows.nth(rowIndex).locator('input[type="submit"]').click();
  }

  async fillPassengerDetails(details) {
    await this.page.locator('#inputName').fill(String(details.name));
    await this.page.locator('#address').fill(String(details.address));
    await this.page.locator('#city').fill(String(details.city));
    await this.page.locator('#state').fill(String(details.state));
    await this.page.locator('#zipCode').fill(String(details.zipCode));
    await this.page.selectOption('#cardType', String(details.cardType));
    await this.page.locator('#creditCardNumber').fill(String(details.cardNumber));
    await this.page.locator('#creditCardMonth').fill(String(details.cardMonth));
    await this.page.locator('#creditCardYear').fill(String(details.cardYear));
    await this.page.locator('#nameOnCard').fill(String(details.nameOnCard));
  }
}
