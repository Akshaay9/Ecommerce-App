import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType,dispatch1) =>{
  
  const id = uuidv4();
  dispatch1({
    type: "SET_ALERT",
    payload: { msg, alertType, id },
  });
  setTimeout(()=>dispatch1({type:"REMOVE_ALERT",payload:id}),1000)
};