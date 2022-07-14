const initialContacts = {
  noOfMobiles: 10,
  users: [],
  singleuser: {}

};

export const MobileReducers = (state = initialContacts, action) => {

  console.log(action);

  switch (action.type) {
    case "BUY_MOBILE_SUCCESS":
      return { noOfMobiles: state.noOfMobiles - 1 };

    case "SELL_MOBILE_SUCCESS":
      return { noOfMobiles: state.noOfMobiles + 1 };

    case "GET_ALL_USERS_SUCCESS":
      return { users: action.data };

    case "GET_ALL_USERS_FILED":
      return { message: action.message };
      
    case "GET_SINGLE_USER_SUCCESS":
      return { singleuser: action.data };
      case "GET_SINGLE_USER_FILED":
        return { message: action.message };
    default:
      return state;
  }
};
