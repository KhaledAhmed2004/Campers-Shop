import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TResponse<T> = {
  data?: T;
  error?: TError;
  success: boolean;
  message: string;
};
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
