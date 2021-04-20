/*packages required*/
import {createStore} from 'redux';// new store for this Project;
import {combineReducers} from 'redux' // para usar todos mis reducers

/*reducers*/
import dinamicWordsReducer from './dinamicWords/reducer';


/*combine reducers*/
export const allReducers = combineReducers({
  dinamicWordsReducer:dinamicWordsReducer
});


/*instance for my storage prepared for import and used in app*/
const index = () => {
 console.log('store instanciada y creada')
 return{
   ...createStore(
     allReducers, // load all my reducers
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
 }
}
 


export default index;