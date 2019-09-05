import { DOMAIN_SEARCH } from "./types";
import axios from "axios";
import csv from "csvtojsonV2";
export const getOverview = data => dispatch => {
  axios
    .get("https://api.semrush.com/", {
      params: {
        type: domain_organic,
        key: process.env.SEMRUSH_KEY,
        display_limit: 100,
        export_columns: { Ph, Po, Nq, Cp },
        domain: data.domain,
        display_sort: tr_desc,
        database: data.database
      }
    })
    .then(response => {
      csv()
        .fromString(response.data)
        .subscribe(jsonParsed =>
          dispatch({
            type: DOMAIN_SEARCH,
            payload: jsonParsed
          })
        );
    })
    .catch(error => {
      console.log(error);
    });
};
