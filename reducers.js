import { createSlice } from "@reduxjs/toolkit"

// Initial state
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

// Create the slice
export const slice = createSlice({
    name: "uber",
    initialState: initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
});

export const { setOrigin, setDestination, setTravelTimeInformation } = slice.actions;

export const selectOrigin = state => state.uber.origin;
export const selectDestination = state => state.uber.destination;
export const selectTravelTimeInformation = state => state.uber.travelTimeInformation;

// Export the reducer
export default slice.reducer;
