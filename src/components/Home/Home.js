import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <p>You don't have any notes yet,</p>
            <p>
                why not write your first one by clicking
                <Link to="/new-note">
                    <a href=''> here</a>
                </Link> ?
            </p>
        </div>
    )
}

export default Home;