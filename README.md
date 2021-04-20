# guia para usar redux version hooks 
<!-- https://www.youtube.com/watch?v=CVpUuw9XSjY -->

- paquetes necesarios
```
npm i redux react-redux
```

# montaje estructura REDUX




- /src
    - /redux
        - index.js
```
/*packages required*/
import {createStore} from 'redux';// new store for this Project;


/*reducers*/
function fakereducer(){
  return '';
}

/*combine reducers*/


/*instance for my storage prepared for import and used in app*/
const index = () => {
 console.log('store instanciada y creada')
 return{
   ...createStore(
      fakereducer // LOAD MY REDUCER
   )
 }
}
 


export default index;
```        
- /src
    - index.js  // where react is loaded by id 'root'
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*redux imports*/
import { Provider } from 'react-redux'; // provider to connect react with redux 
import storeFn from './redux/index';    //  main store configured and prepared for use

const store = storeFn();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

# ACTIONS + REDUCERS para 'dinamicWords' 

- src/
    - redux/
        - dinamicWord/
            - actions.js
```
export const FnUpdateWord = ()=>{
  return {
    type:'UPDATE_WORD',
  }
}

export const FnUpdateNumber = ()=>{
  return {
    type:'UPDATE_NUMBER',
  }
}

export const FnUpdateMix = ()=>{
  return {
    type:'UPDATE_MIX',
  }
}

export const FnUpdateDate = ()=>{
  return {
    type:'UPDATE_DATE',
  }
}

export const FnUpdateWithInput = (palabra)=>{
  console.log(palabra)
  return {
   type:'UPDATE_PERSONALIZED',
   payload:palabra
  }
}







```

- src/
    - redux/
        - dinamicWord/
            - reducer.js

```
// state default/inicial/primer
const initialstate = {palabra:"REDUX"};

const dinamicWordsReducer = (state = initialstate ,action)=>{
  switch (action.type) {
    case 'UPDATE_WORD':
    state.palabra = "AAAAAAAAAA"
    return {...state}
  
    case 'UPDATE_NUMBER':
    state.palabra="1111111111111"
    return {...state}

    case 'UPDATE_MIX':
    state.palabra="A1A1A1A1A1A1"
    return {...state}


   case 'UPDATE_DATE':
    state.palabra= Date.now()
      return {...state}


   case 'UPDATE_PERSONALIZED':
   return{
     ...state,
      palabra:action.payload
   }
  //  state = action.payload
  //   return state



    default:
        return state;
  }
}

export default dinamicWordsReducer;
```

# Montaje completo de src/redux/index.js con todos los reducers
```
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
```



# aplicar 

```
import logo from './logo.svg';
import './App.css';

/*requerimientos*/
import React, { useRef } from 'react';
import { useSelector } from 'react-redux'; //  reducers de REDUX
import { useDispatch } from 'react-redux'; //  actions de REDUX

/*actions*/
import {FnUpdateWord,FnUpdateNumber,FnUpdateMix,FnUpdateDate,FnUpdateWithInput} from './redux/dinamicWords/actions'; //trae las actions declaradas


function App() {

  const mainDispatch = useDispatch(); //hook de redux para usar los actiones 
  const dinamicWordsReducer = useSelector(state => state.dinamicWordsReducer.palabra) // recupera el estaod de un reducer 



  const referencia = useRef(null);


  return (
    <>
      <h1>{dinamicWordsReducer}</h1>
      <p>prueba los botones de abajo para cambiar el estado</p>
      <br />
      <ul>

      <li>   <button onClick={() => mainDispatch(FnUpdateNumber())}    >      asignar numeros   </button></li>
      <li>   <button onClick={() => mainDispatch(FnUpdateMix())}       >      asignar mix  </button></li>
      <li>   <button onClick={() => mainDispatch(FnUpdateWord())}      >      asignar palabra   </button></li>
      <li>   <button onClick={() => mainDispatch(FnUpdateDate())}      >      asignar fecha   </button></li>
       <li><input type="text" ref={referencia} placeholder="esto esta vacio :["/>   <button onClick={() => mainDispatch(FnUpdateWithInput(referencia.current.value))}      >usar esto</button></li>

      </ul>
    </>
  );
}

export default App;
```