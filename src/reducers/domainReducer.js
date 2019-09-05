import {
  DOMAIN_ORGANIC,
  DOMAIN_PAID,
  COMPETITORS_BACKLINKS,
  COMPETITORS_ORGANIC,
  COMPETITORS_PAID,
  MAIN_COMPETITOR
} from "../actions/types";

const initialState = {
  organic_keywords: [],
  paid_keywords: [],
  competitors_organic: [],
  competitors_paid: [],
  main_competitor_keywords: [],
  backlinks: []
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case DOMAIN_ORGANIC:
      return {
        ...state,
        organic_keywords: actions.payload
      };
    case DOMAIN_PAID:
      return {
        ...state,
        paid_keywords: actions.payload
      };
    case COMPETITORS_BACKLINKS:
      return {
        ...state,
        backlinks: actions.payload
      };
    case COMPETITORS_ORGANIC:
      return {
        ...state,
        competitors_organic: actions.payload
      };
    case COMPETITORS_PAID:
      return {
        ...state,
        competitors_paid: actions.payload
      };
    case MAIN_COMPETITOR:
      return {
        ...state,
        main_competitor_keywords: actions.payload
      };
    default:
      return state;
  }
}
