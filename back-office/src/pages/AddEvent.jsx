import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import axios from "axios";
import Button from "../components/Button";

const AddEvent = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/category`)
            .then((res) => {

                setCategory(res.data.data)

            }).catch((error) => {

            console.log(error);
        })
    }, [])

    return (
        <>
            <Navigation/>
            <section className="home">
                <h2>Ajout d'un événement</h2>
                <form>
                    <div className="form-control">
                        <label htmlFor="title">Title</label>
                        <input placeholder={"Title"} id={"title"} type={"text"} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="subtitle">Subtitile</label>
                        <input placeholder={"Subtitile"} id={"subtitle"} type={"text"} />
                    </div>
                    <div className="form-control-description">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div>
                        <div className="form-control">
                            <label htmlFor="start">Start Date</label>
                            <input placeholder={"Start Date"} id={"start"} type={"date"} />
                        </div>
                        <div className="form-control">
                            <label htmlFor="end">End Date</label>
                            <input placeholder={"End Date"} id={"end"} type={"date"} />
                        </div>
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">Category</label>
                        <select>
                            <option selected disabled>Choisir category</option>
                            {category.map(target => (
                                    <option key={target.id}>{target.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div className="form-control">
                            <label htmlFor="latitude">Latitude</label>
                            <input placeholder={"Latitude"} id={"latitude"} type={"text"} />
                        </div>
                        <div className="form-control">
                            <label htmlFor="longitude">Longitude</label>
                            <input placeholder={"Longitude"} id={"longitude"} type={"text"} />
                        </div>
                    </div>
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