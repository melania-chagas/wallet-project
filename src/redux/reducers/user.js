import { USER_EMAIL } from '../actions/actionsTypes';

// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',

};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state, email: action.state };

  default:
    return state;
  }
}

export default user;
