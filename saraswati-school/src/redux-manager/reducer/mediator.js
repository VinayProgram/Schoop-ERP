import {combineReducers} from 'redux'
import {reducer,savestudentid,setbatch} from './Reducer'

export const combinered=combineReducers({
    data:reducer,
    id:savestudentid,
    batch:setbatch
})