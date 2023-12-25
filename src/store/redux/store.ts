import {configureStore} from "@reduxjs/toolkit";
import expenseReducer from "./slices/ExpenseSlice"

export const store = configureStore({
    reducer: {
        expense: expenseReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
