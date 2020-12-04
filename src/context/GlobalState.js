import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import {v4 as uuid} from 'uuid'

const initialState={
    users:[
        {
            id:1,
            fullname:'',
            birthdate:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            address:'',
            gender:'male',
            college:[],
            hobbies:[]
        }
    ]
}
console.log('collge',initialState.users.college)
export const GlobalContext=createContext(initialState)

//Provider Component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    //Actions
    const removeUser=(id)=>{
        dispatch({
            type:'REMOVE_USER',
            payload:id
        })
    }
    
    const addUser=(user)=>{
        dispatch({
            type:'ADD_USER',
            payload:user
        })
    }

    const editUser=(user)=>{
        dispatch({
            type:'EDIT_USER',
            payload:user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users:state.users,
            removeUser,
            addUser,
            editUser
        }}>
        {children}
        </GlobalContext.Provider>
    )

}