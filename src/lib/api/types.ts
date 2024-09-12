export type Param = {
  method: "get" | "post";
  url: string;
  body?: any;
  headers?: HeadersInit;
};
