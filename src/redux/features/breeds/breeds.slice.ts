import { breedsInitialState } from "./breeds.initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCatInfoByBreed, getCatsBreeds } from "../../../services/breeds/breeds.service";
import { IBreed, IBreedInfo } from "./interfaces";
import { RootState } from "../../store/store";

const breedSlice = createSlice({
  name: "breeds",
  initialState: breedsInitialState,
  reducers: {
    resetBreedInfo: (state) => { state.breedInfo = breedsInitialState.breedInfo }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatsBreeds.pending, (state) => { state.isLoading = true })
      .addCase(getCatsBreeds.fulfilled, (state, { payload }: PayloadAction<IBreed[]>) => {
        state.breeds = payload
        state.isLoading = false
      })
      .addCase(getCatsBreeds.rejected, (state) => { state.isLoading = false })
    builder
      .addCase(getCatInfoByBreed.pending, (state) => { state.isLoading = true })
      .addCase(getCatInfoByBreed.fulfilled, (state, { payload }: PayloadAction<IBreedInfo[]>) => {
        state.breedInfo = payload
        state.isLoading = false
      })
      .addCase(getCatInfoByBreed.rejected, (state) => { state.isLoading = false })
  }
})

export const getBreeds = (store: RootState) => store.breeds.breeds
export const getBreedInfo = (store: RootState) => store.breeds.breedInfo

export const { resetBreedInfo } = breedSlice.actions
export default breedSlice.reducer