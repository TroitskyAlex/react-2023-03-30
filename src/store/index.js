import { dishSlice } from "@/store/entities/dish";
import { restaurantSlice } from "@/store/entities/restaurant";
import { reviewSlice } from "@/store/entities/review";
import { userSlice } from "@/store/entities/user";
import { logger } from "@/store/middlewares/logger";
import { cartSlice } from "@/store/ui/cart";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

