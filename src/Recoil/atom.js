import { atom } from "recoil";



export const CartListCounts = atom({
    key: 'CartListCounts',
    default: 0,
  });

  export const WishListCounts = atom({
    key: 'WishListCounts',
    default: 0,
  });

  export const openSignInModal = atom({
    key: 'openSignInModal',
    default: false,
  });