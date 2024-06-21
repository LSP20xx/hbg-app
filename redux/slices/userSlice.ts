import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api';

interface UserState {
  loading: boolean;
  authenticated: boolean;
  userData: any;
  token: string | null;
  error: string | null;
  institutionalUserId: string | null;
  imageFrontLoading: boolean;
  imageBackLoading: boolean;
  imageFrontError: boolean;
  imageBackError: boolean;
  imageFrontSuccess: boolean;
  imageBackSuccess: boolean;
}

const initialState: UserState = {
  loading: false,
  authenticated: false,
  userData: null,
  token: null,
  error: null,
  institutionalUserId: null,
  imageFrontLoading: false,
  imageBackLoading: false,
  imageFrontError: false,
  imageBackError: false,
  imageFrontSuccess: false,
  imageBackSuccess: false,
};

export const loadUserId = createAsyncThunk(
  'user/loadUserId',
  async (_, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        return userId;
      } else {
        return rejectWithValue('No userId found');
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


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
      await AsyncStorage.setItem('userId', data.userData?.userId);
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
      await AsyncStorage.setItem('userId', data.userData?.userId);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { dispatch }) => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    dispatch(userSlice.actions.clearState());
  }
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
      console.log("error", error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const createInstitutionalUser = createAsyncThunk(
  'user/createInstitutionalUser',
  async (institutionId: string, { rejectWithValue }) => {
    try {
      const response = await api.post('/create-institutional-user', { institutionId });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateTermsAndConditions = createAsyncThunk(
  'user/updateTermsAndConditions',
  async ({ institutionId, userId }: { institutionId: string; userId: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/update-terms', { institutionId, userId });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateEmail = createAsyncThunk(
  'user/updateEmail',
  async ({ userId, email }: { userId: string; email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/update-email', { userId, email });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.authenticated = false;
      state.userData = null;
      state.token = null;
      state.error = null;
      state.institutionalUserId = null;
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
      .addCase(createInstitutionalUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInstitutionalUser.fulfilled, (state, action) => {
        state.loading = false;
        state.institutionalUserId = action.payload.userId;
      })
      .addCase(createInstitutionalUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateTermsAndConditions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTermsAndConditions.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateTermsAndConditions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(uploadFrontImage.pending, (state) => {
        state.imageFrontLoading = true;
        state.imageFrontError = false;
        state.imageFrontSuccess = false;
      })
      .addCase(uploadFrontImage.fulfilled, (state, action) => {
        state.imageFrontLoading = false;
        state.imageFrontSuccess = true;
        state.imageFrontError = false;
      })
      .addCase(uploadFrontImage.rejected, (state, action) => {
        state.imageFrontLoading = false;
        state.imageFrontError = true;
        state.imageFrontSuccess = false;
      })
      .addCase(uploadBackImage.pending, (state) => {
        state.imageBackLoading = true;
        state.imageBackError = false;
        state.imageBackSuccess = false;
      })
      .addCase(uploadBackImage.fulfilled, (state, action) => {
        state.imageBackLoading = false;
        state.imageBackSuccess = true;
        state.imageBackError = false;
      })
      .addCase(uploadBackImage.rejected, (state, action) => {
        state.imageBackLoading = false;
        state.imageBackError = true;
        state.imageBackSuccess = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authenticated = false;
        state.userData = null;
        state.token = null;
        state.error = null;
        state.institutionalUserId = null;
      })
      .addCase(loadUserId.fulfilled, (state, action) => {
        state.userData = { ...state.userData, userId: action.payload };
      })
      .addCase(loadUserId.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.userData.email = action.payload.email;
      })
      .addCase(updateEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearState } = userSlice.actions;

export default userSlice.reducer;