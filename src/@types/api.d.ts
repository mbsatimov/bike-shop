type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};

type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: RequestInit }
  : { config?: RequestInit; params: Params };
