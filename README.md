# RTK Intro

## Agenda
1. Introduce Redux Toolkit
    a. Explain what RTK is and why it's used.
    b. Outline the benefits of using Redux Toolkit.
2. Set Up the Redux Store
    a. Install Redux Toolkit and React-Redux.
    b. Configure the store using configureStore.
    c. Wrap the React app with the Provider component.
3. Create and Manage Slices
    a. Define a to-do slice using createSlice.
    b. Generate actions and reducers for managing to-do items.
4. Handle Asynchronous Logic
    a. Implement createAsyncThunk for API calls.
    b. Manage loading and error states using extraReducers.
5. Connect Redux to React Components
    a. Use useSelector to access Redux state.
    b. Dispatch actions with useDispatch in components.

## Main Concepts and API
1. creating a store with configureStore
    1. configureStore is a function that takes a configuration object with three fields:
        1. reducer: a function that returns the root reducer
        2. middleware: an array of middleware to apply
        3. devTools: a boolean to enable the Redux DevTools Extension
    2. configureStore returns a Redux store instance
    3. configureStore is intended to be used for the store creation in the entry file of your application
2. createSlice
    1. createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
    2. createSlice returns an object with the generated slice reducer and action creators
    3. createSlice is intended to be used for creating "slices" of state in your Redux store
    4. createSlice uses Immer internally to allow you to write simpler immutable updates with normal mutative code
    5. createSlice is intended to be used in the same file as the slice reducer function, and the action creators are intended to be exported and used elsewhere in your application
    6. createSlice will generate hooks for each action creator that can be used with React-Redux's useDispatch hook
3. createAsyncThunk
    1. createAsyncThunk is a function that accepts a string action type and a payload creator callback function, and automatically generates a thunk that dispatches pending/fulfilled/rejected action types based on the resolved/rejected state of the payload creator
4. createEntityAdapter
    1. createEntityAdapter is a function that generates a set of prebuilt reducers and selectors for performing CRUD operations on a normalized state structure
    2. createEntityAdapter is intended to be used for managing "collections" of normalized data in your Redux store
    3. createEntityAdapter is intended to be used in conjunction with createSlice to generate reducers and selectors for a slice of state
5. createSelector
    1. createSelector is a function that generates memoized selector functions
    2. createSelector is intended to be used for creating efficient selectors that derive data from the Redux store
6. createReducer
    1. createReducer is a function that generates a reducer function from a lookup table of action types to case reducer functions
    2. createReducer is intended to be used for creating "slice reducers" that are passed to createSlice
7. createAction
    1. createAction is a function that generates an action creator function for a given action type string
    2. createAction is intended to be used for creating action creators that are passed to createSlice


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
