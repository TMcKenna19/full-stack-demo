import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ViewOne = props => {
    const [oneGame, setOneGame] = useState(null)
    const {_id} = useParams();
    const navigate = useNavigate();

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/games/delete/" + id)
        .then(() => console.log(`${oneGame.title} deleted`))
        .catch(err => console.log("Error: delete game", err))
        navigate("/")    
    }
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/games/" + _id)
        .then(res => setOneGame(res.data[0]))
        .catch(err => console.log(err))
    }, [_id])
    return(
        <div>
            {
                oneGame ? <div>
                    <h2>{oneGame.title}</h2>
                    <img src={oneGame.art} alt="cover art" />
                    <h3>Min Players: {oneGame.minPlayers}</h3>
                    <button type="submit" className="btn btn-outline-danger mt-3" onClick={ ()=> handleDelete(oneGame._id)}>Delete Game</button>
                    <Link to={`/update/${oneGame._id}`}> <button type="submit" className="btn btn-outline-dark mt-3">Edit Game</button> </Link>
                </div> : ""
            }
            
        </div>
    );
}

export default ViewOne;