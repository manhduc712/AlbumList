

import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PostContext } from '../../App.js';

import Error from '../Error'

function Detail({ id }) {
    const { idPost } = useParams();
    const { posts } = useContext(PostContext);
    const post = posts.find(post => post.id == idPost);

    if(!idPost){
        return (<Error />)
    }

    return (
        <>
            {
                post && (
                    <div className='container'>
                        <Link to='/' className='nav-link'>Back To Home</Link>

                        <div className='row'>
                            <div className='col-6'>
                                <div className='img-thumbnail'>
                                    <img src={post.url} alt='post' className='w-100' />
                                </div>
                            </div>


                            <div className='col-6'>
                                <h3>Title: {post.title}</h3>
                                <strong>AlbumId: {post.albumId}</strong>

                            </div>
                        </div>

                    </div>
                )

            }

        </>
    )
}

export default Detail;