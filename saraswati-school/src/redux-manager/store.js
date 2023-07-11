import {createStore} from 'redux'
import {combinered} from'./reducer/mediator'

export const state=createStore(combinered,{})