import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api';

interface UserState {
  loading: boolean;
  authenticated: boolean;
  userData: any;
  token: string | null;
  error: string | null;
  imageFrontLoading: boolean;
  imageBackLoading: boolean;
  imageFrontError: string | null;
  imageBackError: string | null;
  imageFrontSuccess: boolean;
  imageBackSuccess: boolean;
}

const initialState: UserState = {
  loading: false,
  authenticated: false,
  userData: null,
  token: null,
  error: null,
  imageFrontLoading: false,
  imageBackLoading: false,
  imageFrontError: null,
  imageBackError: null,
  imageFrontSuccess: false,
  imageBackSuccess: false,
};

export const login = createAsyncThunk(
  'user/login',
  async (
    credentials: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post('/auth/login', credentials, {
        headers: { 'Content-Type': 'application/json' },
      });
      const { data } = response;
      await AsyncStorage.setItem('token', data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const register = createAsyncThunk(
  'user/register',
  async (
    credentials: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post('/auth/register', credentials, {
        headers: { 'Content-Type': 'application/json' },
      });
      const { data } = response;
      await AsyncStorage.setItem('token', data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const uploadFrontImage = createAsyncThunk(
  'user/uploadFrontImage',
  async (
    { imageUri, userId }: { imageUri: string; userId: string },
    { rejectWithValue },
  ) => {
    let formData = new FormData();
    formData.append('imageUrl', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'id-photo.jpg',
    });
    formData.append('userId', userId);
    formData.append('cameraType', 'FRONT');

    try {
      const response = await api.post('/scan-id', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const uploadBackImage = createAsyncThunk(
  'user/uploadBackImage',
  async (
    { imageUri, userId }: { imageUri: string; userId: string },
    { rejectWithValue },
  ) => {
    let formData = new FormData();
    formData.append('imageUrl', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'id-photo.jpg',
    });
    formData.append('userId', userId);
    formData.append('cameraType', 'BACK');

    try {
      const response = await api.post('/scan-id', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      state.userData = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authenticated = true;
        state.loading = false;
        state.userData = action.payload.userData;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.authenticated = false;
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.authenticated = true;
        state.loading = false;
        state.userData = action.payload.userData;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.authenticated = false;
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(uploadFrontImage.pending, (state) => {
        state.imageFrontLoading = true;
        state.imageFrontError = null;
        state.imageFrontSuccess = false;
      })
      .addCase(uploadFrontImage.fulfilled, (state, action) => {
        state.imageFrontLoading = false;
        state.imageFrontSuccess = true;
      })
      .addCase(uploadFrontImage.rejected, (state, action) => {
        state.imageFrontLoading = false;
        state.imageFrontError = action.payload as string;
      })
      .addCase(uploadBackImage.pending, (state) => {
        state.imageBackLoading = true;
        state.imageBackError = null;
        state.imageBackSuccess = false;
      })
      .addCase(uploadBackImage.fulfilled, (state, action) => {
        state.imageBackLoading = false;
        state.imageBackSuccess = true;
      })
      .addCase(uploadBackImage.rejected, (state, action) => {
        state.imageBackLoading = false;
        state.imageBackError = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
