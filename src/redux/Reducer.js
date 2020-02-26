import { UPDATE_REQUEST,UPDATE_SERVICE,UPDATE_ENVIRONMENT} from './Actions';
import data from '../Data/data.json'

const initialState = {
  data: data,
  environment:0
};

function rootReducer(state = initialState, action) {

  switch(action.type) {
    case UPDATE_REQUEST:
        const newArr = state.data.map(item => {

            if(item.id !== action.id){
                return item
                       }
                       else{
                           return {
                               ...item,
                               status:'ACTIVE'
                           }
                       }

        })

        return {
            ...state,
            data:newArr
        }
    case UPDATE_SERVICE:
            const newArr1 = state.data.map(item => {

                if(item.id !== action.id){
                    return item
                           }
                           else{
                               return {
                                   ...item,
                                   status:'DONE'
                               }
                           }
    
            })
    
            return {
                ...state,
                data:newArr1
            }

    case UPDATE_ENVIRONMENT:
        return {
            ...state,
            environment:action.id
        }

    default:
      return state;
  };

}

export default rootReducer;