import { configureStore, createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearForm: (state) => {
      state.name = "";
      state.email = "";
      state.subject = "";
      state.message = "";
    },
  },
});

export const { setName, setEmail, setSubject, setMessage, clearForm } =
  formSlice.actions;

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export default store;
