import { StatusCodes } from "http-status-codes";

import { HttpResponse } from "../protocols";
import { ServerError } from "../errors";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: StatusCodes.BAD_REQUEST,
  body: error.message,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: StatusCodes.FORBIDDEN,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: StatusCodes.OK,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: StatusCodes.NO_CONTENT,
  body: null,
});
