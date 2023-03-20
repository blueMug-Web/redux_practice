import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

//For Blog/Bulletin Board example
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
	reducer: {
		// FOR THE COUNTER APP
		counter: counterReducer, //this is now available to the entire app, through the Provider in index.js

		// FOR THE BLOG / BULLETIN BOARD
		posts: postsReducer,
		users: usersReducer,
	},
});
