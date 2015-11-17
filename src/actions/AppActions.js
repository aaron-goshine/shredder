
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
export default class Actions {

  static sendTextToShredder (text) {
    AppDispatcher.dispatch({'action': ActionTypes.TEXT_TO_SHREDD, 'text': text});
  }

  static textChanged (text) {
    AppDispatcher.dispatch({'action': ActionTypes.TEXT_CHANGED, 'text': text});
  }
}
