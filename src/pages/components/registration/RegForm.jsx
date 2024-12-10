import React, { useState } from "react";
import { supabase } from "../../../supabaseClient";

function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkpass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.checkpass) {
      alert("Password does not match!!!");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("user_info") // Replace 'user_info' with your actual table name
        .insert([
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          },
        ]);

      if (error) {
        console.error("Error Inserting Data:", error);
        alert("Failed to register. Please try again.");
      } else {
        console.log("Data inserted successfully:", data);
        alert("Registration successful");

        // Clear form fields
        setFormData({
          name: "",
          email: "",
          password: "",
          checkpass: "",
        });
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="formCon">
      <h1>WELCOME</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="inputs mt-3"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>

        <div>
          <input
            className="inputs mt-4"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>

        <div>
          <input
            className="inputs mt-4 mb-4"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <div>
          <input
            className="inputs mt-1 mb-4"
            type="password"
            name="checkpass"
            id="checkpass"
            value={formData.checkpass}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>

        <div>
          <button type="submit" className="button mb-4">
            Register
          </button>
        </div>
      </form>

      <a href="/" className="link">
        Already have an Account?
      </a>
    </div>
  );
}

export default RegForm;
