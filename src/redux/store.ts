import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "./feature/user/userSlice";
import cartReducer from "./feature/cart/cart";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    // wishlist: wishlistReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
