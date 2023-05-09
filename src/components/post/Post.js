
import RightContent from './RightContent';
import LeftContent from './LeftContent';

import './post.css'

// import { memo } from 'react';

function Posts() {

	return (
		<div>
			<h1 className='text-center pt-4'>Album List</h1>
			<div className="d-flex">
				<LeftContent />
				<RightContent />
			</div>
		</div>


	);
}

export default Posts;