//> Imports and Global Package
const {createStore} = require('redux')


// state
const initialCounter = {
    count: 0,
    users: [user1, user2, user3, user4, user5],
  };
  
  const initialCompanyDetails = {
    org: [{ name: "DevsNest LLC" }],
  };
  
  // action
  //! (Action is an object and hold two important keys which is Type (Types of the action), and payload. Here type is ==> 'String' and payload hold data ==> "any")
  
  //! We put action inside a function
  
  const increment = "INCREMENT";
  const decrement = "DECREMENT";
  const addUser = "ADD_USER";
  
  const IncrementCounter = () => {
    return {
      Type: increment, // we can assign this value inside a variable
    };
  };
  
  const DecrementCounter = () => {
    return {
      Type: decrement,
    };
  };
  
  // Adding payload
  
  const AddUser = () => {
    return {
      Type: addUser,
      Payload: { name: "Sabbir Ahamed Maruf" },
    };
  };
  
// Reducer 
//! Reducer is a pure function that helps to operate various action on top of state.
const operator=(state=increment,action)=>{
    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count-1
            }
        default:
            return state;
    }
}

// Store (Like a centralized database for holding state globally)

// ! We can access store data using getState() method. Also can update data using dispatch() method and we can run some function when a state changed using subscribe() method.


