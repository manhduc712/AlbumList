import { Link } from "react-router-dom";


function Home (options) {

    return (
        <div className="">
            <h2 style={{textAlign: 'center'}}>Home</h2>

            <Link to='posts' className="nav-link">Post</Link>
        </div>
    )

}

export default Home;