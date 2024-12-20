import React, { useState } from "react";
import { supabase } from "../../../supabaseClient";
import "./dashboard.css";
import search from '../../../assets/images/search.png';

function DashForm() {
  const [formData, setFormData] = useState({
    longterm: "",
    shorterm: "",
    address: "",
    maxprice: "",
    minprice: "",
  });

  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTermClick = (term) => {
    setSelectedTerm(term); // Set selected term to either 'longterm' or 'shorterm'
    setFormData({
      ...formData,
      [term]: term === "longterm" ? "LongTerm" : "ShortTerm", // Set value to match the term
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
      .from("search_bar")
      .insert([
        {
          longterm: formData.longterm,
          shorterm: formData.shorterm,
          address: formData.address,
          maxprice: formData.maxprice,
          minprice: formData.minprice, // Fixed typo here
        },
      ]);

      if (error) {
        console.error("Error Inserting Data:", error);
        alert("Failed to search. Please try again.");
      } else {
        console.log("Data inserted successfully:", data);
        alert("Search submitted successfully!");

        setFormData({
          longterm: "",
          shorterm: "",
          address: "",
          maxprice: "",
          minprice: "",
        });
        setSelectedTerm(null); // Reset selected term after submit
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="dashform">
            <form onSubmit={handleSubmit}>
                <div  className="row01">
                <div>
                        <button
                        type="button"
                        className={`longterm term-button ${selectedTerm === "longterm" ? "selected" : ""}`}
                        onClick={() => handleTermClick("longterm")}
                        >
                        LongTerm
                        </button>
                    </div>
                    <div>
                        <button
                        type="button"
                        className={`shorterm term-button ${selectedTerm === "shorterm" ? "selected" : ""}`}
                        onClick={() => handleTermClick("shorterm")}
                        >
                        ShortTerm
                        </button>
          </div>
                </div>

                <div className="row02">
                    <div>
                        <input
                            className="address"
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                        />
                    </div>
                    <div>
                        <input
                            className="maxprice"
                            type="text"
                            name="maxprice"
                            id="maxprice"
                            value={formData.maxprice}
                            onChange={handleChange}
                            placeholder="MaxPrice"
                        />
                    </div>
                    <div>
                        <input
                            className="minprice"
                            type="text"
                            name="minprice"
                            id="minprice"
                            value={formData.minprice}
                            onChange={handleChange}
                            placeholder="MinPrice"
                        />
                    </div>
                    <button type="submit" className="searchbtn01">
                        <img src={search} alt="search icon" />
                    </button>
                </div>
            </form>
      </div>
    </>
  );
}

export default DashForm;
