import { createSlice } from '@reduxjs/toolkit'


const stored =JSON.parse(localStorage.getItem("data"))||[];
export const DataSlice = createSlice({
  name: 'Data',
  initialState : {
    data:stored,
},
  reducers: {
    setData:(state,action)=>{
        state.data = [...state.data,action.payload]
         localStorage.setItem("data",JSON.stringify(state.data))
    },
   
   
  },
})

// Action creators are generated for each case reducer function
export const {setData} = DataSlice.actions

export default DataSlice.reducer