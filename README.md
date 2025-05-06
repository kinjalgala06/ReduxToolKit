<b>using react + typescript</b> also using material ui

1) create store:: store.ts
```
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
      // create different reducers
    },
})

```
2) create Provider and store connect :: in App.tsx
```
import {Provider} from 'react-redux';
import store from './Store/store';
return (
   <Provider store={store}>
    <div>this is my first redux toolkit</div>
    </Provider>
  )
```
3) file to manager state as slice
basically create slice 
ex::habit-slice.tsx::
```
import { createSlice } from "@reduxjs/toolkit";

export interface Habit{
    id:string;
    name:string;
    frequency:"daily"|"weekly";
    completeDates:string[];
    createdAt:string;
}

interface HabitState{
    habits:Habit[];
}

const initialState:HabitState={
    habits:[],
}

const habitSlice = createSlice({
    name:"habits",
    initialState,
    reducers:{
        addHabit:()=>{},
    },
})

export const{addHabit}=habitSlice.actions
export default habitSlice.reducer;

in store.ts
import habitsReducer from '../Store/habbit-slice';
reducer:{
        habits:habitsReducer
    },
```

