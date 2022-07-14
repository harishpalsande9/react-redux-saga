import React from "react";
import { connect } from "react-redux";

function MobileDetailes(props) {
  console.log(props.users);

  return (
    <div>
      <button onClick={() => props.decrement()}>Buy Mobile</button>
      <br></br>
      <button onClick={() => props.increment()}>Sell Mobile</button>
      <br></br>
      <button onClick={() => props.getAllUsers()}>Get All Users </button>
      <br></br>
      <button onClick={() => props.getSingleUser(1)}>Get Single User</button>
      <br></br>
      <h1>{props.stateMobile}</h1>
      {
          props.users.map((ele, ind) => {
        return (
          <div key={ind}>
            <h1>{ele.name}</h1>
          </div>
        );
      })
    }
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    stateMobile: state.noOfMobiles,
    users: state.users,
    singleuser: state.singleuser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "SELL_MOBILE" }),
    decrement: () => dispatch({ type: "BUY_MOBILE" }),
    getAllUsers: () => dispatch({ type: "GET_ALL_USERS" }),
    getSingleUser: (id) => dispatch({ type: "GET_SINGLE_USER", id }),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(MobileDetailes);
