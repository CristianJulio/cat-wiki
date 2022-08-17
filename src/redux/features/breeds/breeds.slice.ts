import { breedsInitialState } from "./breeds.initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { getCatsBreeds } from "../../../services/breeds/breeds.service";
import { IBreed } from "./interfaces";

const breedSlice = createSlice({
  name: "breeds",
  initialState: breedsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCatsBreeds.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCatsBreeds.fulfilled, (state, { payload }: PayloadAction<IBreed[]>) => {
        state.breeds = payload
        state.isLoading = false
      })
      .addCase(getCatsBreeds.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export const getBreeds = (store: RootState) => store.breeds.breeds

export const { } = breedSlice.actions
export default breedSlice.reducer