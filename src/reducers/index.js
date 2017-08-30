import { Constants } from '../constants/Constants';


const reminder = (action) => {
    return {
        id:Math.floor(Math.random()*1234567890),
        text:action.text
    }
}

const removeReminderById =(state, id) =>{
  const reminders = state.filter(reminder => reminder.id !== id);
  // console.log('new reduced reminders ',reminders);
  return reminders;
}

const reminders = (state =[], action) => {
    let reminders = null;
    switch(action.type){
        case Constants.ADD_REMINDER:
            reminders = [...state, reminder(action)];
            // console.log('reminders in the state ',reminders);
            return reminders;
        case Constants.DELETE_REMINDER:
            reminders = removeReminderById(state,action.id);
            return reminders;
        case Constants.CLEAR_REMINDER:
            reminders = [];
            return reminders;
        default:
            return state;
    }
}

export default reminders;
