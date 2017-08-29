import { Constants } from '../constants/Constants';

export const AddReminder = (text) =>{
    const action = {
        type:Constants.ADD_REMINDER,
        text
    }
    console.log('Action in AddRemindier ', action);

    return action;
}