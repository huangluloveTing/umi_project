
export default {
    namespace:'user',
    state:{
        name:'huanglu'
    },
    reducers:{
        saveUser(state , {playload}) {
            console.log('user model save')
            console.log(playload)
            return  {
                ...state,
                name:playload.name
            };
        }
    },
    effects:{
        *netChange(action , {put , select , call}) {
            console.log('user netChange ===')
            console.log(action)
            yield put({type:'saveUser', playload:{
                name:action.name
            }})
        }
    },
    subscriptions: {
        setup({dispatch}) {
            console.log('subscriptions')
            dispatch({type:'netChange' ,name:'subscriptions name'})
        }
    }
}