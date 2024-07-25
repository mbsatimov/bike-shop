interface Pagination<T> {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  data: T[];
}
