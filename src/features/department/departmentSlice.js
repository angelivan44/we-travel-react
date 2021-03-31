import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DepartmentService from "./department_service";

export const fetchIndexDepartment = createAsyncThunk(
  "department/fetchIndexDepartment",
  async () => {
    const departmentService = new DepartmentService();
    const allDepartments = await departmentService.index();
    return { departments: allDepartments };
  }
);

export const fetchShowDepartment = createAsyncThunk(
  "department/fetchShowDepartment",
  async () => {
    const departmentService = new DepartmentService();
    const selectedDepartment = await departmentService.show();
    return { currentDepartment: selectedDepartment };
  }
);

const departmentSlice = createSlice({
  name: "department",
  initialState: {
    error: null,
    departments: [],
    currentDepartment: {},
  },

  reducers: {},
  extraReducers: {
    [fetchIndexDepartment.fulfilled]: (state, action) => {
      state.error = null;
      state.departments = action.payload.departments;
    },
    [fetchIndexDepartment.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.departments = [];
    },
    [fetchShowDepartment.fulfilled]: (state, action) => {
      state.error = null;
      state.currentDepartment = action.payload.currentDepartment;
    },
    [fetchShowDepartment.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.currentDepartment = {};
    },
  },
});

export default departmentSlice.reducer;
