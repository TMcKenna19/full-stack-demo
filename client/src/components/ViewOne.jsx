import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewOne = props => {
    const [oneGame, setOneGame] = useState(null)
    const {_id} = useParams();
    
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
                    <img src={oneGame.art} alt="image art" />
                    <h3>Min Players: {oneGame.minPlayers}</h3>
                </div> : ""
            }
            
        </div>
    );
}

export default ViewOne;