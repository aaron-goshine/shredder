import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import ActionTypes from '../constants/ActionTypes';
import assign from 'object-assign';

let _message = {'cssClass': 'none', message: ''};
let _results = {};
let _wordCount = 0;
let _commaCount = 0;
let _periodCount = 0;

function resestResult () {
  _results = {};
}

function setWordCount (text) {
  _wordCount = extractWords(text).length;
}
function setCommaCount (text) {
  _commaCount = text.match(/,/g) ? text.match(/,/g).length : 0;
}
function setPeriodCount (text) {
  _periodCount = text.match(/\./g) ? text.match(/\./g).length : 0;
}
function extractWords (text) {
  let justWords = text.replace(/[^a-z\s]/gi, '');
  return justWords.split(' ').filter((item) => {
    return item !== '';
  });
}
function sortResultList () {
  for (let i in _results) {
    _results[i] = _results[i].sort();
  }
}

function updateResults (arr) {
  resestResult();
  for (var i = 0; i < arr.length; i++) {
    let firstChar = (arr[i][0]).toUpperCase();
    if (!_results[firstChar]) _results[firstChar] = [];
    _results[firstChar].push(arr[i]);
  }
  sortResultList();
}

function shreddIt (text) {
  let word = extractWords(text);
  updateResults(word);
  setWordCount(text);
  setCommaCount(text);
  setPeriodCount(text);
}

function containsNumbers (text) {
  return text.match(/\d/g);
}

function setMessage (cssClass, information) {
  _message.cssClass = cssClass;
  _message.message = information;
}

var AppStore = assign({}, EventEmitter.prototype, {
  getResults: function () {
    return _results;
  },
  getState: function () {
    return {
      'model': _results,
      'wordCount': _wordCount,
      'commaCount': _commaCount,
      'periodCount': _periodCount,
      'message': _message
    };
  },
  emitChange: function () {
    this.emit(ActionTypes.CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(ActionTypes.CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(ActionTypes.CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (payload) {
  let action = payload.action;
  let text = payload.text.trim();

  switch (action.actionType) {
    case ActionTypes.SHREDD_TEXT:
      setMessage('success', 'Please shredd something, thanks');
      if (containsNumbers(text)) {
        setMessage('error', 'only words are allowed');
      }

      if (text !== '') {
        let wordCount = extractWords(text).length;
        if (wordCount >= 5 && wordCount <= 500) {
          shreddIt(text);
        } else {
          setMessage('error', 'minimum 5 word maximum 500 word thanks');
        }
        AppStore.emitChange();
      }
      break;

    case ActionTypes.TEXT_CHANGE:
      // TODO implement validation on field change
      AppStore.emitChange();
      break;
  }
  return true;
});

export default AppStore;
