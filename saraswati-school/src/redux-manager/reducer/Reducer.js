export const reducer=(state=0,action)=>{
    console.log(action)
    switch (action.type) {
        case "batch":
            state=action.payload
        return state
        default:return 'no data'
    }
}

export const setbatch=(state=0,action)=>{
    console.log('setbact')
    switch (action.type) {
        case "batch1":
            console.log(action.payload)
        return action.payload
        default:return 'no data'
    }
}
export const savestudentid=(state=0,action)=>{
    console.log(action)
    switch (action.type) {
        case "id":
        return action.payload;
        default:return 'no data'
    }
}

