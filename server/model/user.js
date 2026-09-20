import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
  },

  roll: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    trim: true,
    required: true,
  },
});

export const userModel = model("User", userSchema);
