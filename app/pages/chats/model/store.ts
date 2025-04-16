import { authModel } from "@/entities/auth";
import { createEvent, sample } from "effector";

export const init = createEvent();

sample({
  clock: init,
  target: authModel.getTokensFromCookies,
});
