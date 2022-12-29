import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes"


export const deleteTask = (n) => {
    return {
        type:DELETE,
        payload:n
    }
}
export const completeTask = (n) => {
    return {
        type:COMPLETE,
        payload:n
    }
}
export const addTask = (obj) => {
    return {
      type:ADD,
      payload:obj
    }
}


export const editTask = (obj) => {
    return {
        type:EDIT,
        payload:obj
    }
}


export const filterTask = () => {
    return {
        type:FILTER
    }
}