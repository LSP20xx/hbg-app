import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

interface IdentificationState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: IdentificationState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchIdentification = createAsyncThunk(
  'identification/fetchIdentification',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/get-identification/${userId}`);
      return response.data.identification;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const identificationSlice = createSlice({
  name: 'identification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdentification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIdentification.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchIdentification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default identificationSlice.reducer;
