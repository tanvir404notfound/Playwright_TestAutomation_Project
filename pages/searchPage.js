// Page Object for Search Page
export class SearchPage {
  constructor(page) {
    this.page = page;
  }
  async search(keyword) {
    await this.page.fill('input[name="search"]', keyword);
    await this.page.click('button[type="submit"]');
  }
  // Add more search page methods here
}
