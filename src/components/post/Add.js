import { useContext, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PostContext, AlbumIdContext } from '../../App'

function Add() {

    const { posts, setPosts } = useContext(PostContext)

    const [title, setTitle] = useState()

    const [image, setImage] = useState()

    const [imageThumbnail, setImageThumbnail] = useState()

    const [id, setId] = useState()


    const { albumId } = useContext(AlbumIdContext)

    const navigate = useNavigate();


    const handleAdd = () => {

        const newPosts = [...posts, {
            title: title,
            url: image,
            thumbnailUrl: imageThumbnail,
            albumId: id,
            id: posts[posts.length - 1].id + 1
        }]
        setPosts(newPosts)
        navigate('/posts')
    }


    return (
        <div className='container pt-5 d-flex justify-content-center'>
            <div className="card w-50 ">
                <div className='card-title'>
                    <h3 className='text-center mt-4'>Create Album</h3>
                </div>

                <div className='card-body'>
                    <form>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type='text' className='form-control' onInput={e => setTitle(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Image: </label>
                            <div className="custom-file mb-3">
                                <input type="file" className="custom-file-input" id="customFile1" name="filename"
                                    onChange={e => setImage(e.target.value)} />
                                <label className="custom-file-label" forhtml="customFile1">Choose file</label>
                            </div>

                        </div>


                        <div className="form-group">
                            <label>Image Thumbnail: </label>
                            <div className="custom-file mb-3">
                                <input type="file" className="custom-file-input" id="customFile" name="filename"
                                    onChange={e => setImageThumbnail(e.target.value)} />
                                <label className="custom-file-label" forhtml="customFile">Choose file</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>AlbumId: </label>
                            <select name="cars" className="custom-select mb-3" onChange={e => setId(e.target.value)}>
                                {
                                    albumId.map((id, index) => <option value={id} key={index}>{id}</option>)
                                }
                            </select>
                        </div>

                        <div>
                            <button type="button" className="btn btn-primary mr-2" onClick={handleAdd}>Create</button>
                            <Link to='/posts'>
                                <button type="button" className="btn btn-danger" >Cancel</button>
                            </Link>


                        </div>
                    </form>
                </div>

            </div >
        </div >
    );
}

export default Add;