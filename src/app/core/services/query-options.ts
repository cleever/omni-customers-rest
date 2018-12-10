export class QueryOptions {
  page = 0;
  pageSize = 30;
  hasMore = true;
  isPaginating = false;

  constructor() {

  }

  next() {
    this.page += 1;
    this.isPaginating = true;
  }

  reset() {
    this.page = 0;
    this.hasMore = true;
    this.isPaginating = false;
  }

  done(count: number) {
    console.log('done', count);
    if (count === 0) {
      this.hasMore = false;
    }
    this.isPaginating = false;
  }

  toQueryParameters() {
    const offset = this.pageSize * this.page;
    return `?limit=${this.pageSize}&offset=${offset}`;
  }
}
