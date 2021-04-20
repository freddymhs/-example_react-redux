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