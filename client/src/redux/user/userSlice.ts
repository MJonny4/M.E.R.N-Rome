import { createSlice } from "@reduxjs/toolkit";

type User = {
	id: number;
	name: string;
	surname: string;
	email: string;
	phone: string;
	gender: string;
	birthday: Date;
	role: string;
};

type UserState = {
	loading: boolean;
	error: string | null;
	currentUser: User | null;
};

const initialsState: UserState = {
	loading: false,
	error: null,
	currentUser: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: initialsState,
	reducers: {
		signInStart: (state) => {
			state.loading = true;
		},
		signInSuccess: (state, action) => {
			state.loading = false;
			state.currentUser = action.payload;
			state.error = null;
		},
		signInFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
