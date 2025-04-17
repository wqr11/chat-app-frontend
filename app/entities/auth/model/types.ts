import { IUser } from "@/shared/types/db";

export interface SignUpFxParams {
  email: string;
  password: string;
}

export type SignUpFxResult = IUser;

export type LoginFxParams = SignUpFxParams;

export type LoginFxResult = {
  access: string;
  refresh: string;
};
