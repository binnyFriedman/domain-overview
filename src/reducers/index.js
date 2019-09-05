import { combineReducers } from "redux";
import domainReducer from "./domainReducer";
import formReducer from "./formReducer";
import createForms from "react-redux-form";

export default combineReducers({
  domain: domainReducer,
  ...createForms({
    form: formReducer
  })
});
