import { atom } from "recoil";

export const BlurFlag = atom({
    key: 'textBlurFlagState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });