import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes";



const init = {
    tasks : [
        {id:Math.random(),action:"wake up",isDone:true},
        {id:Math.random(),action:"have coffee",isDone:false}
    ],
    isFiltered:false   
}


// reducer function

const taskReducer = (state=init,{type,payload}) => {
    switch (type) {
       case DELETE:
        return {
            ...state,tasks:state.tasks.filter(el=>el.id!==payload)
        }
      case ADD:
        return{
            ...state,tasks:[...state.tasks,payload]
        }
        case COMPLETE:
            return {
                ...state,tasks:state.tasks.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
            }
        case EDIT:
            return {
                ...state,tasks:state.tasks.map(el=>el.id===payload.id?payload:el)
            }
        case FILTER:
            return {
                ...state,isFiltered:!state.isFiltered
            }
        default:
            return state;
    }
}


export default taskReducer