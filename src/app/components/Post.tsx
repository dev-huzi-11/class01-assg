"use client";
import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/external") // Fixed API path
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => setError("Unexpected error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>loading........</p>;
  if (error) return <p>{error}</p>; // Added error display
  if (!posts.length) return <p>No posts found</p>; // Added empty state

  return (
    <div className="w-ful flex flex-col items-center py-[5rem]">
      <h1 className="text-5xl font-semibold text-center tracking-tight mb-12">
        Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-6">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <div
            key={post.id}
            className="w-full max-w-lg py-8 px-4 shadow-lg bg-slate-800 text-white hover:scale-105 transition-all duration-300"
          >
            {" "}
            {/* Added key prop */}
            <h1 className="text-xl font-semibold text-center max-w-md mb-4 underline">
              {post.title}
            </h1>
            <p className="text-center">{post.body}</p>
            <button className="bg-blue-500 px-6 py-3 mt-4 rounded-md text-white font-semibold hover:bg-blue-600">
              View detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
