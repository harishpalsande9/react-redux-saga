import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* buyMobile1() {
//   yield delay(4000)
  yield put({ type: "BUY_MOBILE_SUCCESS" });
}

function* sellMobile1() {
  // yield delay(4000)
  yield put({ type: "SELL_MOBILE_SUCCESS" });
}


function* getAllUsers() {
  // yield delay(4000)
   try {
        let users=yield call(axios.get, 'https://jsonplaceholder.typicode.com/users') 
        yield put({type: "GET_ALL_USERS_SUCCESS",data:users.data})
   }
   catch (error) {
       yield put({type: "GET_ALL_USERS_FILED",message:error.message})
        
   } 
}

function* getSingleUser({id}) {
  // yield delay(4000)
   try {
        let users=yield call(axios.get, `https://jsonplaceholder.typicode.com/users/` + id) 
        yield put({type: "GET_SINGLE_USER_SUCCESS",data:users.data})
   }
   catch (error) {
       yield put({type: "GET_SINGLE_USER_FILED",message:error.message})
        
   } 
}

export function* watchUser() {
  yield all([
    takeLatest("BUY_MOBILE", buyMobile1),
    takeLatest("SELL_MOBILE", sellMobile1),
    takeLatest("GET_ALL_USERS", getAllUsers),
    takeLatest("GET_SINGLE_USER", getSingleUser)
  ])
}
 