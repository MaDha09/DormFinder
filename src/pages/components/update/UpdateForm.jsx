import React, { useState } from "react";
import { supabase } from "../../../supabaseClient";

function UpdateForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        newEmail: "",
        newPassword: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase
                .from("user_info")
                .update({
                    email: formData.newEmail || formData.email, // Update email if newEmail is provided
                    password: formData.newPassword || formData.password, // Update password if newPassword is provided
                })
                .eq("email", formData.email)
                .eq("password", formData.password);

            if (error) {
                console.error("Database error:", error);
                setMessage("An error occurred while updating. Please try again.");
            } else {
                setMessage("Update successful!");
            }
        } catch (err) {
            console.error("Unexpected Error:", err);
            setMessage("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <div className="formCon">
            <h1>Update Your Details</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="inputs mt-4"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Current Email"
                        required
                    />
                </div>

                <div>
                    <input
                        className="inputs mt-4"
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Current Password"
                        required
                    />
                </div>

                <div>
                    <input
                        className="inputs mt-4"
                        type="email"
                        name="newEmail"
                        id="newEmail"
                        value={formData.newEmail}
                        onChange={handleChange}
                        placeholder="New Email (optional)"
                    />
                </div>

                <div>
                    <input
                        className="inputs mt-4 mb-4"
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        placeholder="New Password (optional)"
                    />
                </div>

                {message && <p className="message">{message}</p>}

                <div>
                    <button type="submit" className="button mb-4">Update</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateForm;
