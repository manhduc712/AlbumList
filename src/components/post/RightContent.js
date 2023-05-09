
import { Link, useParams } from 'react-router-dom'

import { useContext, useRef } from 'react'

import { PostContext } from '../../App.js';

function FilterData() {
    const { idAlbum } = useParams();

    const { posts } = useContext(PostContext);

    let filterPosts = [...posts]

    if (idAlbum) {
        filterPosts = posts.filter(post => post.albumId == idAlbum);
    }

    const Item = ({ thumbnailUrl, title, id }) => {
        return (
            <div className="col-3 mb-4">
                <div className="card">
                    <img src={thumbnailUrl} className="card-img-top" alt="album img" />
                    <div className="card-body">
                        <h5 className="card-title">Image Title</h5>
                        <p className="card-text" style={{ height: '48px' }}>{title}</p>
                        <Link to={`/detail/${id}`} className='btn btn-primary mt-3'>Details</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='row pt-4'>
            {
                filterPosts.map((post, index) =>
                    <Item
                        key={index}
                        thumbnailUrl={post.thumbnailUrl}
                        title={post.title}
                        id={post.id}
                    />)
            }
        </div>
    );
}

function RightContent() {
    const { posts, setPosts, token, setToken, removeToken } = useContext(PostContext);

    const searchField = useRef();

    const handleSearch = () => {
        setPosts(posts.filter((post) => post.title.toLowerCase().includes(searchField.current.value.toLowerCase())));
    }

    const handleLogout = () => {
        setToken()
        removeToken()
    }

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-end '>
                <strong>Hello, <span className='text-success'>{token.name}</span>
                    <button className='ml-2 border-0 bg-light btn align-item-center' onClick={handleLogout}>Logout</button>
                </strong>
                    

                
            </div>

            <div className='d-flex justify-content-between pb-4 border-bottom'>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control" type="search" placeholder="Search" onInput={handleSearch} ref={searchField} />
                    <button className="btn btn-primary my-2 my-sm-0 ml-1" type="button">Search</button>
                </form>

                <Link to='/add' >
                    <button type="button" className="btn btn-primary">Create New Album</button>
                </Link>

            </div>

            <FilterData />
        </div>
    );
}

export default RightContent;