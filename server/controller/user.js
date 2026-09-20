import { userModel } from "../model/user.js";

export async function userRegister(req, res) {
  const { fullName, email, address, roll } = req.body;
  console.log(req.body);
  try {
    userModel.create({
      fullName,
      email,
      address,
      roll,
    });
    return res.status(201).json({ data: "Added Sucessfully" });
  } catch (error) {
    return res.status(401).json({ data: "Cannot Added Data" });
  }
}
