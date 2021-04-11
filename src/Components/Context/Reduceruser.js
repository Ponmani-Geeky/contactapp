export const initialState = {
  user: "ponmani",
};

export const actionTypes = {
  SET_User: "SET_USER",
};

const Reduceruser = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default Reduceruser;
