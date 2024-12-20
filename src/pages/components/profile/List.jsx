import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";
import bhouse from '../../../assets/images/bh1.jpg';
import location from '../../../assets/images/pin.png';
import bed from '../../../assets/images/bed.png';
import bath from '../../../assets/images/bath.png';
import chat from '../../../assets/images/chat.png';

function List() {
    const [posts, setPosts] = useState([]);

    // Fetch data from Supabase
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('newPost') // Replace with your actual Supabase table name
                .select('*'); // Adjust the columns you want to retrieve

            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setPosts(data);
            }
        };

        fetchData();
    }, []);

    // Delete a post
    const handleDelete = async (postId) => {
        const { error } = await supabase
            .from('newPost') // Replace with your actual Supabase table name
            .delete()
            .eq('id', postId);

        if (error) {
            console.error("Error deleting post:", error);
            alert("An error occurred while deleting the post.");
        } else {
            // Remove the deleted post from the state
            setPosts(posts.filter(post => post.id !== postId));
            alert("Post deleted successfully!");
        }
    };

    return (
        <>
            <div className="listbody">
                <div className="header">
                    <h3 className="my">My List</h3>
                    <a href="/create" className="create btn me-4">Create Post</a>
                </div>

                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div className="post mt-4" key={post.id}>
                            <div className="imgbh">
                                <img src={bhouse} alt="Boarding House" /> {/* Replace with post-specific image if available */}
                            </div>

                            <div className="detail">
                                <h5 className="bhName mt-3 ms-1">{post.title}</h5>
                                <a href="#" className="payment btn btn-warning mt-5 mb-5 ms-3">
                                    ₱ {post.price}
                                </a>
                                <p className="loc ms-3 mt-5">
                                    <img src={location} className="pin" alt="Location" /> {post.address}, {post.city}
                                </p>

                                <div className="icons">
                                    <p className="bedicon col-3">
                                        <img src={bed} alt="Bed" /> {post.bedroom} bedroom
                                    </p>
                                    <p className="cr col-3">
                                        <img src={bath} alt="Bathroom" /> {post.bathroom} bathroom
                                    </p>
                                    <p className="chat col-3">
                                        <img src={chat} className="me-3" alt="Chat" />
                                    </p>
                                </div>

                                {/* Delete Button */}
                                <button
                                    className="delete btn btn-danger mt-3 ms-3"
                                    onClick={() => handleDelete(post.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="mt-4 ms-4">No posts available.</p>
                )}
            </div>
        </>
    );
}

export default List;
