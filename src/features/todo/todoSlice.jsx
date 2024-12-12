import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
    todos: [],
    error: "",
    status: "idle",
    note: ""
}

export const fetchTodosAsync = createAsyncThunk(
  "fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/todos`);

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue({
          status: response.status,
          message: data?.error || "Something went wrong",
        });
      }

      const data = await response.json();
      return data || []; // Return an empty array if no todos are present
    } catch (error) {
      return rejectWithValue({
        status: 500,
        message: error.message || "Network error",
      });
    }
  }
);


export const todoSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    save: (state, action) => {
      state.note = action.payload;
    },
    reset: (state) => {
      state.note = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.pending, (state) => {
      state.status = "loading";
      state.error = ""; // Clear any previous errors
    });
    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.todos = action.payload || []; // Ensure todos is always an array
    });
    builder.addCase(fetchTodosAsync.rejected, (state, action) => {
      state.status = "idle";
      state.todos = []; // Reset todos to an empty array if the fetch fails
      state.error = action.payload; // Set error details
    });
  },
});

export default todoSlice.reducer;
export const { save, reset } = todoSlice.actions;
export const todosSelector = (state) => state.todo.todos