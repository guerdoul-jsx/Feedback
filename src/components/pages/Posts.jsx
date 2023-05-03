import Card from "../shared/Card";
import {Navigate , useNavigate , Routes , Route} from 'react-router-dom'


const Posts = () => {
    const navigate = useNavigate();


    const status = 200;

    if(status === 404){
       return <Navigate to="/notfound" />
    }

    return (
        <Card>
            <h1>Posts</h1>
            <button onClick={(e) => navigate('/')}>Back to home</button>
            <Routes>
                <Route path="/show"  element={<h1>Hello Show</h1>}/>
            </Routes>
        </Card>
    );
};

export default Posts;
