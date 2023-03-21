//** usersSlice.js **/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fake API that accepts GET and POST requests
// ** Consider using .env variable for this in a real project **
// or
// ** Consider creating an axios instance, set a base url and import that **
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await axios.get(USERS_URL);
	return response.data;
});

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
