import { Constants } from '../constants/Constants';

export const AddReminder = (text) =>{
    const action = {
        type:Constants.ADD_REMINDER,
        text
    }
    return action;
}

export const DeleteReminder = (id) =>{
    const action = {
        type:Constants.DELETE_REMINDER,
        id
    }
    return action;
}

export const ClearReminder = () =>{
    return {
      type:Constants.CLEAR_REMINDER
    };
}
