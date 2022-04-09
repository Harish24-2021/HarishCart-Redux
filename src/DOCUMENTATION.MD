OBJECTIVE:
CREATE A SHOPPING CART APP WITH REDUX AND REACT 

-- A. create action types file in constants folder and thish file will have following

 object with 3 types which are 
 * SET PRODUCTS,
 *SELECTED PRODUCT
 *REMOVE SELECTED PRODUCT

--B. create product actions file in actions folder, it has 3 actions for respective action types
* each action is a function that takes product as paramenter and return js object having 2 keys
which are
*type :
*payload:

--C. created a productReducer component inside redux folder which has reducer function which takes state and action,and has swtich cases to return ; 
* also defined initial state object in the top of the compoponent
--D . in the index.js file of reducer folder , im combining all reducers with combineReducers function whih takes on object having multiple reducers as its argument.
