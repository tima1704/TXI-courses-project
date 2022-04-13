import { IValidError } from "Types/common";

export interface ISuccessRes<D = any> {
  status: true;
  data?: D;
}

export interface IValidErrorRes {
  status: false;
  errors: IValidError[];
}
