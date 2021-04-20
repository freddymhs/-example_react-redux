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


