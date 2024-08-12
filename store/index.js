import axios from "axios";
import { action, createStore, thunk } from "easy-peasy";

const dataModel={
    data:null,
    addData:action((state,payload)=>{
        state.data=payload
    }),
    fetchData:thunk(async(actions,payload)=>{
        const {data}=await axios.get('https://personal-portfolio-drab-seven.vercel.app/api/v1/data')
        console.log(data)
        actions.addData(data[0])
    })
}

const store=createStore({
    data:dataModel
})

export default store;