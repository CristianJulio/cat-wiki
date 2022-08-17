import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "..";

export const getCatsBreeds = createAsyncThunk(
  "breeds/getCatsBreeds",
  async () => {
    const url = `/breeds?limit=4&page=1`
    const { data } = await rest.get(url)
    return data
  }
)