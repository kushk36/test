import React from 'react';
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const Post = () => {
    const params = useParams()

    // const status = 200
    // if (status === 404) {
    //     return <Navigate to='/notfound' />
    // }
    const navigate = useNavigate()
    const onClick = () => {
        console.log('Hello world');
        navigate('/about')
    }
    return (
        <div>
            <h1>Post {params.id}</h1>
            <p>{params.name}</p>
            <button onClick={onClick}>click</button>
            <Routes>
                <Route path='/show' element={<h1>Hello World</h1>} />
            </Routes>
        </div>
    );
};

export default Post;