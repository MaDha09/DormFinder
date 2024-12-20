import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./create.css";
import { supabase } from '../../../supabaseClient';
import { useNavigate } from "react-router-dom";

function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        address: '',
        description: '',
        city: '',
        bedroom: '',
        bathroom: '',
        term: 'shorterm',
        property: 'apartment',
        payment: 'cash',
    });

    const navigate = useNavigate(); // Hook for navigation

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from('newPost') // Replace with your actual Supabase table name
            .insert([formData]);

        if (error) {
            console.error("Error inserting data:", error);
            alert("Failed to add post. Please try again.");
        } else {
            console.log("Data inserted successfully:", data);
            alert("Post added successfully!");

            // Redirect after successful submission
            navigate('/profile'); // Replace '/success' with your desired route
        }
    };

    return (
        <div className="newPost">
            <h3 className="ms-4 mb-4">Add New Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="row1">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row2 mb-4 mt-4">
                    <label htmlFor="description" className="ms-5">Description</label>
                    <textarea
                        name="description"
                        className="descrip"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row3">
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="bedroom"
                        placeholder="Available Bedroom"
                        value={formData.bedroom}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="bathroom"
                        placeholder="Bathroom Number"
                        value={formData.bathroom}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row4 mt-4">
                    <div className="stay">
                        <label htmlFor="term">Stay Type</label>
                        <select
                            name="term"
                            value={formData.term}
                            onChange={handleChange}
                        >
                            <option value="shorterm">ShortTerm</option>
                            <option value="longterm">LongTerm</option>
                        </select>
                    </div>

                    <div className="property">
                        <label htmlFor="property">Property Type</label>
                        <select
                            name="property"
                            value={formData.property}
                            onChange={handleChange}
                        >
                            <option value="apartment">Apartment</option>
                            <option value="boardhouse">Boarding House</option>
                            <option value="dorm">Dormitory</option>
                        </select>
                    </div>

                    <div className="payment">
                        <label htmlFor="payment">Method of Payment</label>
                        <select
                            name="payment"
                            value={formData.payment}
                            onChange={handleChange}
                        >
                            <option value="cash">Cash</option>
                            <option value="gcash">Online Payment</option>
                        </select>
                    </div>
                </div>

                <button className="ms-5 mt-4">Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
