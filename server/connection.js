import mongoose from "mongoose";
export const connection = (url) => {
  try {
    mongoose.connect(url);
    console.log("Database Connected Sucessfully Ashish Hero");
  } catch (error) {
    console.log("DataBase Cannot Connected ");
  }
};
