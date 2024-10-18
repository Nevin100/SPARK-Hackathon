import React, { useState } from 'react';
import { FaThumbsUp, FaTrash } from 'react-icons/fa'; // Importing icons
import './Social.css';

const Social = () => {
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', description: '', imageUrl: '' });
    const [commentText, setCommentText] = useState('');
    const [showComments, setShowComments] = useState({});

    const toggleLike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, isLiked: !post.isLiked, likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1 }
                    : post
            )
        );
    };

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    const addComment = (postId) => {
        if (commentText) {
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, comments: [...(post.comments || []), { text: commentText, id: Date.now() }] }
                        : post
                )
            );
            setCommentText('');
        }
    };

    const deleteComment = (postId, commentId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, comments: post.comments.filter(comment => comment.id !== commentId) }
                    : post
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title && formData.description && formData.imageUrl) {
            setPosts([...posts, { ...formData, id: Date.now(), isLiked: false, likeCount: 0, comments: [] }]);
            setShowForm(false);
            setFormData({ title: '', description: '', imageUrl: '' });
        }
    };

    return (
        <div className="social-container">
            <h1 className="title">Blog</h1>

            {showForm && (
                <div className="centered-form">
                    <form className="styled-form" onSubmit={handleSubmit}>
                        <h2>Create Post</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, imageUrl: URL.createObjectURL(e.target.files[0]) })}
                            required
                        />
                        <textarea
                            placeholder="Description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                        ></textarea>
                        <button type="submit">Create Post</button>
                    </form>
                </div>
            )}

            <button className="floating-btn" onClick={() => setShowForm(!showForm)}>
                +
            </button>

            <div className="social-layout">
                <div className="left-section">
                    {/* Left section content if needed */}
                </div>
                <div className="right-section">
                    {posts.length === 0 ? (
                        <div className="no-posts">No posts yet</div>
                    ) : (
                        posts.map((post) => (
                            <div className="blog-post" key={post.id}>
                                <img src={post.imageUrl} alt="Blog" />
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <div className="actions">
                                    <button onClick={() => toggleLike(post.id)}>
                                        <FaThumbsUp style={{ marginRight: '5px' }} />
                                        {post.isLiked ? 'Unlike' : 'Like'}
                                    </button>
                                    <span className="like-count">{post.likeCount} Likes</span>
                                    <button onClick={() => deletePost(post.id)}>
                                        <FaTrash style={{ marginRight: '5px' }} />
                                        Delete
                                    </button>
                                </div>
                                <div className="comment-section">
                                    <button onClick={() => setShowComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}>
                                        {showComments[post.id] ? 'Hide Comments' : 'Show Comments'}
                                    </button>
                                    {showComments[post.id] && (
                                        <>
                                            <div className="comment-input">
                                                <input 
                                                    type="text" 
                                                    placeholder="Add a comment..." 
                                                    value={commentText}
                                                    onChange={(e) => setCommentText(e.target.value)} 
                                                />
                                                <button onClick={() => addComment(post.id)}>Comment</button>
                                            </div>
                                            <div className="comments-list">
                                                {post.comments && post.comments.map((comment) => (
                                                    <div className="comment" key={comment.id}>
                                                        <span>{comment.text}</span>
                                                        <button className="delete-comment" onClick={() => deleteComment(post.id, comment.id)}>
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Social;
