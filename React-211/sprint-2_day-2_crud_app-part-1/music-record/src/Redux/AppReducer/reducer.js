import * as types from "./actionTypes"

const initState={
    musicRecords: [],
    isLoading:false,
    isError:false,
    isUpdating:false,
    isUpdateError:false,
}

const reducer =(oldState=initState,action)=>{
    const {type,payload}=action;

    switch(type){
        case types.GET_MUSIC_RECORD_REQUEST:
            return {
                ...oldState,
               isLoading:true,
               isError:false,
            }

            case types.GET_MUSIC_RECORD_SUCCESS:
                return {
                    ...oldState,
                    musicRecords:payload,
                   isLoading:false,
                   isError:false,
                  
                }

                case types.GET_MUSIC_RECORD_FAILURE:
                    return {
                        ...oldState,
                       isLoading:false,
                       isError:true,
                    }
                case types.UPDATE_MUSIC_RECORD_REQUEST:
                    return{
                        ...oldState,
                        isUpdating:true,
                    }
            default:
                return oldState;
    }
}

export {reducer}
