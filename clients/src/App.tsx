import "./App.css";
import { useForm } from "react-hook-form";
import type { userProps } from "./type";
import { useState } from "react";
import { Table } from "./table";
import axios from "axios";

function App() {
  const { handleSubmit, register } = useForm<userProps>();
  const [user, setUser] = useState<userProps[]>([]);

  const onSubmit = async (data: userProps) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        data,
      });
      console.log(response.data);
    } catch (error) {
      console.log("Data Cannot Added To DataBase");
    }
    setUser((prev) => [...prev, data]);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <div className="container">
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", { required: "Name Is Required" })}
            />

            <div>
              <p>Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>

            <div>
              <p>Roll Number</p>
              <input
                type="number"
                placeholder="Enter your roll number"
                {...register("roll", { valueAsNumber: true, required: true })}
              />
            </div>

            <div>
              <p>Address</p>
              <input
                type="text"
                placeholder="Enter your address"
                {...register("address", { required: true })}
              />
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
        <Table user={user} />
      </div>
    </div>
  );
}

export default App;
