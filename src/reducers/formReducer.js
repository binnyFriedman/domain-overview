import { DOMAIN_SUBMIT } from "../actions/types";

const initialeFormState = {
  domain: "",
  email: "",
  submitted: false
};

export default function(state = initialeFormState, actions) {
  switch (actions.type) {
    case DOMAIN_SUBMIT:
      const { domain, email } = actions.payload;
      return {
        ...state,
        domain: domain,
        email: email,
        submitted: true
      };

    default:
      break;
  }
}
