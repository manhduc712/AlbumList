
import './App.css';

import { Route, Routes } from 'react-router-dom'

import { createContext, useEffect, useState, memo } from 'react';

import Posts from './components/post/Post.js';
import Login from './components/user/Login.js';
import Header from './components/Header.js';
import Add from './components/post/Add.js';
import Detail from './components/post/Detail';
import Home from './components/home/Home';
import Error from './components/Error'


export const PostContext = createContext();
export const AlbumIdContext = createContext();

function setTokens(userToken) {
	sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
	const tokenString = sessionStorage.getItem('token')
	const userToken = JSON.parse(tokenString);

	return userToken
}

const removeToken = () => {
	sessionStorage.removeItem('token')
}

function App() {

	const [posts, setPosts] = useState([]);

	const [albumId, setAlbumId] = useState([0]);

	const [token, setToken] = useState(getToken())

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((json) => {
				const key = 'albumId'
				const uniqueData = [...new Map(json.map((item) => [item[key], item])).values()]
				setAlbumId([...new Set(json.map((item) => item.albumId))])
				setPosts(uniqueData)
			})
	}, []);

	console.log(token)

	if (!token) {
		return <Login setToken={setToken} setTokens={setTokens} />
	}

	return (
		<PostContext.Provider value={{ posts, setPosts, token, setToken, removeToken }}>
			<AlbumIdContext.Provider value={{ albumId, setAlbumId }}>
				<div className='bg-light'>
					{/* <Header /> */}

					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/add' element={<Add />}></Route>

						<Route path='posts' element={<Posts />} exact>
							<Route path=':idAlbum' element={<Posts />}></Route>
						</Route>
						<Route path='/detail' element={<Detail />} exact>
							<Route path=':idPost' element={<Detail />} ></Route>
						</Route>
					</Routes>
				</div>
			</AlbumIdContext.Provider>
		</PostContext.Provider>
	);
}


export default memo(App);