import { connect } from "mongoose";

export const connection = (URI) => {
  
  connect(URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch(() => {
      console.log("Error while connecting DB");
    });
};
