import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBreedInfo } from "../../redux/features/breeds/interfaces";
import { rest } from "..";

export const getCatsBreeds = createAsyncThunk(
  "breeds/getCatsBreeds",
  async () => {
    const url = `/breeds?limit=4&page=1`
    const { data } = await rest.get(url)
    return data
  }
)
export const getCatInfoByBreed = createAsyncThunk(
  "breeds/getCatInfoByBreed",
  async (breed: string) => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breed}`
    const { data } = await rest.get<IBreedInfo[]>(url)
    return data
  }
)
export const getFavorites = createAsyncThunk(
  "breeds/getFavorites",
  async () => {
    const url = `https://api.thecatapi.com/v1/favourites`
    const response = await rest.get(url)
    console.log(response)
  }
)