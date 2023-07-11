

export const savebatch=(batch)=>{  
    return{
        type:'batch',
        payload:batch
    }
}

export const savebatch1=(load)=>{  
    return{
        type:'batch1',
        payload:load
    }
}

export const savestudentid=(id)=>{  
    return{
        type:'id',
        payload:id
    }
}

