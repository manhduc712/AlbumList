
import { Route, Routes, NavLink } from 'react-router-dom'


import { useContext, useState, useEffect } from 'react'
import { PostContext, AlbumIdContext } from '../../App.js';

function Item({ id }) {
	return (
		<li className={`list-group-item d-flex justify-content-between align-items-center ${({ isActive, isPending }) =>
			isPending ? "pending" : isActive ? "active" : ""}`}>
			<NavLink to={`/posts/${id}`}
				className={`nav-link`}
			>
				AlbumId: {id}
			</NavLink>
			{/* <span className="badge badge-primary badge-pill">12</span> */}
		</li>
	);
}

function LeftContent() {

	const { albumId } = useContext(AlbumIdContext);

	return (
		<div className='col-2'>
			<ul className="list-group">
				<li className={`list-group-item d-flex justify-content-between align-items-center ${({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""}`}>
					<NavLink to={`/posts`} className={`nav-link`}>All Image</NavLink>
					{/* <span className="badge badge-primary badge-pill">12</span> */}
				</li>
				{
					albumId.map((id, index) => {
						return <Item key={index} id={id} />
					})
				}
			</ul>
		</div>
	);
}

export default LeftContent;