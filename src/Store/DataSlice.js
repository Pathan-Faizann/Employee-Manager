import { createSlice } from '@reduxjs/toolkit'



export const DataSlice = createSlice({
  name: 'Data',
  initialState : {
    data:[]
},
  reducers: {
    setData:(state,action)=>{
        state.data = [...state.data,action.payload]
         localStorage.setItem("data",JSON.stringify(state.data))
    },
    remove:(state,action)=>{
      state.data =state.data.filter((item)=> item.id !== action.payload)
      localStorage.setItem("data",JSON.stringify(state.data))

    }
   
  },
})

// Action creators are generated for each case reducer function
export const {setData,remove} = DataSlice.actions

export default DataSlice.reducer