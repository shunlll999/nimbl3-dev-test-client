import { Constants } from '../constants/Constants';


const reminder = (action) => {
    return {
        id:Math.floor(Math.random()*1234567890),
        text:action.text
    }
}

const reminders = (state =[], action) => {
    let reminders = null;
    switch(action.type){
        case Constants.ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state ',reminders);
            return reminders;
        default:
            return state; 
    }
}

export default reminders;
