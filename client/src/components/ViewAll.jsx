import {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";


const ViewAll = props => {
    const [games, setGames] = useState(null);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/games")
        .then(res => setGames(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/games/delete/" + id)
        .then(() => console.log("Game deleted"))
        .catch(err => console.log("Error: delete game", err))
    }
    return(
        <>
        <h2>All Games</h2>
        <div className="flex">
        {
            games ? games.map((item, i) => <div key={i} className="card">
                <Link  to={`/game/${item._id}`}>
                    <h3>{item.title}</h3>
                    <img src={item.art} alt="image art" />
                    <h3>Min Players {item.minPlayers}</h3>
                </Link>
                <button type="submit" className="btn btn-outline-danger mt-3" onClick={ ()=> handleDelete(item._id)}>Delete Game</button>
            </div>) : ""
        }
        </div>
        </>
    );
}

export default ViewAll;