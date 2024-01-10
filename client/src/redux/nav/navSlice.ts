import { createSlice } from "@reduxjs/toolkit";

type NavbarState = {
	navbarOpen: boolean;
	isMobile: boolean;
};

const initialState: NavbarState = {
	navbarOpen: false,
	isMobile: false,
};

const navbarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		toggleNavbar: (state) => {
			state.navbarOpen = !state.navbarOpen;
		},
		closeNavbar: (state) => {
			state.navbarOpen = false;
		},
		setIsMobile: (state, action) => {
			state.isMobile = action.payload;
		},
	},
});

export const { toggleNavbar, closeNavbar, setIsMobile } = navbarSlice.actions;

export default navbarSlice.reducer;
