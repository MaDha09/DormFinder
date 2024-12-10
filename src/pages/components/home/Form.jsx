import React, {useState} from "react";
import { supabase } from '../../../supabaseClient';

function Form(){

    const [formData, setFormData] = useState({
        email: "",
        password: ""
        });

    const [errorMessage, setErrorMessage] = useState("");
    
    const handleChange = (e) => {
        const {name, value} = e. target;
        setFormData ({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const{ data, error} = await supabase
            .from("user_info")
            .select("*")
            .eq("email", formData.email)
            .eq("password", formData.password);

            if(error){
                console.error("Database error:", error);
                setErrorMessage("An error occurred while logging in. Please try again.");
            }
            else if(data.length === 0){
                setErrorMessage("Invalid email or password. Please try again.");
            }
            else{
                console.log("Login Successful:", data);
                alert("Login successful!");
                // Optionally, redirect to another page
                window.location.href = "/Reg"; // Update the route as needed
            }

        } 
        catch (err) {
            console.error("Unexpected Error:", err);
            setErrorMessage("An unexpected error occurred. Please try again later.");
        }

    };


    return(
        <div className="formCon">

            <h1>WELCOME</h1>

            <form onSubmit={handleSubmit}>
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

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div>
                    <button type="submit" className="button mb-4">Login</button>
                </div>

            </form>

            <a href="/Reg" className="link">Don't have an Account?</a>
        </div>
    )

}

export default Form;