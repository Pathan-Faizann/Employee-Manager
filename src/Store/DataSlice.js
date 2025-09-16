import { createSlice } from '@reduxjs/toolkit'


let stored = []
try {
  const parsed = JSON.parse(localStorage.getItem("data"))
  if (Array.isArray(parsed)) {
    stored = parsed
  }
} catch (e) {
  console.log(e)
  stored = []
}
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


export const {setData} = DataSlice.actions

export default DataSlice.reducer