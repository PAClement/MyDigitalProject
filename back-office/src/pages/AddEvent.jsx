import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import axios from "axios";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";

const AddEvent = () => {

    let companyID =  localStorage.getItem('user')
    const [category, setCategory] = useState([]);

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [newcategory, setNewcategory] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [error, setError] = useState("")

    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/category`)
            .then((res) => {

                setCategory(res.data.data)

            }).catch((error) => {

            console.log(error);
        })
    }, [])

    const displayError = (errorMSG) => {
        setError(errorMSG);

        setTimeout(() => {
            setError("");
        }, 5000)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(newcategory !== "Choisir category"){

            axios.post(`${process.env.REACT_APP_API_URL}/event/create`, {

                start_date : start,
                end_date : end,
                title,
                subtitle,
                description,
                id_company: parseInt(companyID),
                id_category: parseInt(newcategory),
                lat: latitude,
                lng: longitude
            }).then((res) => {

                if (res.status === 200) {

                    navigation('/gestion_evenement');
                } else {

                    displayError("Une erreur est survenue");
                }

            }).catch((error) => {

                console.log(error);
            })
        }
    }

    return (
        <>
            <Navigation/>
            <section className="home">
                <h2>Ajout d'un événement</h2>
                <br/><br/>
                {error &&
                    <p className="errorConnexion">{error}</p>
                }
                <form onSubmit={handleSubmit} className={"addEvent"}>
                    <div className="form-control">
                        <label htmlFor="title">Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={"Title"} id={"title"} type={"text"} />
                    </div>
                    <br/>
                    <div className="form-control">
                        <label htmlFor="subtitle">Subtitile</label>
                        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder={"Subtitile"} id={"subtitle"} type={"text"} />
                    </div>
                    <br/>
                    <div className="form-control-description">
                        <label htmlFor="description">Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" cols="10" rows="5">
                        </textarea>
                    </div>
                    <br/>
                    <div className="duoInput">
                        <div className="form-control">
                            <label htmlFor="start">Start Date</label>
                            <input value={start} onChange={(e) => setStart(e.target.value)} placeholder={"Start Date"} id={"start"} type={"date"} />
                        </div>
                        <div className="form-control">
                            <label htmlFor="end">End Date</label>
                            <input value={end} onChange={(e) => setEnd(e.target.value)} placeholder={"End Date"} id={"end"} type={"date"} />
                        </div>
                    </div>
                    <br/>
                    <div className="form-control">
                        <label htmlFor="category">Category</label>
                        <select value={newcategory} onChange={(e) => setNewcategory(e.target.value)}>
                            <option selected>Choisir category</option>
                            {category.map(target => (
                                    <option value={target.id} key={target.id}>{target.name}</option>
                            ))}
                        </select>
                    </div>
                    <br/>
                    <div className="duoInput">
                        <div className="form-control">
                            <label htmlFor="latitude">Latitude</label>
                            <input value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder={"Latitude"} id={"latitude"} type={"text"} />
                        </div>
                        <div className="form-control">
                            <label htmlFor="longitude">Longitude</label>
                            <input value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder={"Longitude"} id={"longitude"} type={"text"} />
                        </div>
                    </div>
                    <br/>
                    <Button
                        name="Ajouter Event"
                        icon="bx bx-edit-alt"
                        type="filled"
                        color="secondary"
                    />
                </form>
            </section>
        </>
    )
        ;
};

export default AddEvent;