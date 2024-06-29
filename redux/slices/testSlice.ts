import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

interface TestState {
  tests: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TestState = {
    tests: [
        {
            _id: '1',
            userID: 'userId',
            testPhoto1: 'path/to/testPhoto1.jpg',
            testPhoto2: 'path/to/testPhoto2.jpg',
            testResult: 'SCD',
            resultSent: false,
            createdAt: new Date().toISOString().split('T')[0], // Solo la fecha
            updatedAt: new Date().toISOString().split('T')[0], // Solo la fecha
        }
    ],
  loading: false,
  error: null,
};

export const createTest = createAsyncThunk(
  'tests/createTest',
  async (testData: { userID: string; testPhoto1: string; testPhoto2?: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/create-test', testData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchUserTests = createAsyncThunk(
  'tests/fetchUserTests',
  async (userID: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/get-user-tests/${userID}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchTestById = createAsyncThunk(
  'tests/fetchTestById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/get-test-by-test-id/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateTestById = createAsyncThunk(
  'tests/updateTestById',
  async ({ id, updateData }: { id: string; updateData: any }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/update-test-by-test-id/${id}`, updateData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteTestById = createAsyncThunk(
  'tests/deleteTestById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/delete-test-by-test-id/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    clearTests: (state) => {
      state.tests = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTest.fulfilled, (state, action) => {
        state.loading = false;
        state.tests.push(action.payload);
      })
      .addCase(createTest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserTests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserTests.fulfilled, (state, action) => {
        state.loading = false;
        state.tests = action.payload;
      })
      .addCase(fetchUserTests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchTestById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tests.findIndex(test => test._id === action.payload._id);
        if (index !== -1) {
          state.tests[index] = action.payload;
        } else {
          state.tests.push(action.payload);
        }
      })
      .addCase(fetchTestById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateTestById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTestById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tests.findIndex(test => test._id === action.payload._id);
        if (index !== -1) {
          state.tests[index] = action.payload;
        }
      })
      .addCase(updateTestById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteTestById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTestById.fulfilled, (state, action) => {
        state.loading = false;
        state.tests = state.tests.filter(test => test._id !== action.meta.arg);
      })
      .addCase(deleteTestById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearTests } = testSlice.actions;

export default testSlice.reducer;
