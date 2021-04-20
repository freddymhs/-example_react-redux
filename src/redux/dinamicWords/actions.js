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






