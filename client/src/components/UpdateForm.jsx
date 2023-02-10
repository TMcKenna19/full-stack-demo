import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateForm = props => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "" ,
        art: "" ,
        minPlayers: 1
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/games/" + _id)
        .then(res => setFormData(res.data[0]))
        .catch(err => console.log(err))
    }, [_id]);

    const [formErrors, setFormErrors] = useState({});

    const changeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const formHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/games/update/" + _id, formData)
        .then(res => {
            //form is invalid
            if(res.data.error) {
                console.log("error: form submit")
                setFormErrors(res.data.error.errors)
            }else {
                // form is valid
                console.log("form submit success")
                navigate("/")
            }
        })
        .catch(err => console.log(err))
    }
    

    return(
        <div>
            <h2>Update Game</h2>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" className="form-control" value={formData.title} onChange={changeHandler} />
                    { formErrors.title ? <span>{formErrors.title.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="art">Cover Art:</label>
                    <input type="text" name="art" id="art" className="form-control" value={formData.art}onChange={changeHandler} />
                    { formErrors.art ? <span>{formErrors.art.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="minPlayers">Min Players:</label>
                    <input type="number" name="minPlayers" id="minPlayers" value={formData.minPlayers} className="form-control" onChange={changeHandler} />
                    { formErrors.minPlayers ? <span>{formErrors.minPlayers.message}</span>:""}
                </div>
                <button type="submit" className="btn btn-outline-dark mt-3" >Update Game</button>
            </form>
        </div>
    );
}

export default UpdateForm;