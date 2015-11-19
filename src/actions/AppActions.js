
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
export default class Actions {
  /**
   *
   * Here you have an fabulus action to dispatch the main shredding
   * task, accept the text from the caller as the only param
   * The main purpose for this action is to be call On the onClick
   * event on of the 'ShreddIt' Button.
   **/
  static sendTextToShredder (text) {
    AppDispatcher.dispatch({'action': ActionTypes.TEXT_TO_SHREDD, 'text': text});
  }

  /**
   *
   * Here you have an fabulus action to dispatched when the
   * text area value is changed, good case for validation
   *
   **/

  static textChanged (text) {
    AppDispatcher.dispatch({'action': ActionTypes.TEXT_CHANGED, 'text': text});
  }
}
