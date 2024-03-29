import {createSlice} from "@reduxjs/toolkit";
 
const userSlice = createSlice({
    name :"user",
    initialState:[],
    reducers:{
        addUser(state,action){},
        removeUser(state,action){},
        deleteUser(state,action){},
    },
});
console.log(userSlice);
export default userSlice.reducer;