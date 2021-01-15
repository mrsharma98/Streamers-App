/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash'
import  {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types'


export default (state = {}, action) => {
    switch (action.type) {

        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')}
            // explanation below

        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case CREATE_STREAM:
            return { ...state, [action.payloadid]: action.payload }

        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case DELETE_STREAM:
            return _.omit(state, action.payload)

        default:
            return state
    }
}


// mapKeys
// _.mapKeys(arrayOfObjects, 'keyWeWannaUseFromThatObject')
// prof = [ {id:1, name:'A'}, {id:2, name:'B'}]
// _.mapKeys(prof, 'id')
// {1:{id:1, name:'A'}, 2:{id:2, name:'B'}}