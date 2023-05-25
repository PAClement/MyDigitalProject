import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import Button from "../components/Button";

import axios from "axios";

const Home = () => {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/company/1`)
            .then((res) => {
                setCompany(res.data.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Navigation />
            <section className="profil">
                <div className="profil-header">
                    <div className="profil-header-logo">
                        <img src="img/entreprise_logo.png" className="img_logo" alt="" />
                        <h2>{company.name}</h2>
                    </div>
                    <div className="edit_btn">
                        <Button
                            name="Modifier"
                            icon="bx bx-edit-alt"
                            type="filled"
                            color="secondary"
                        />
                    </div>
                </div>
                <div className="profil-info">
                    <div>STARS</div>
                    <p className="follow">
                        <i className="bx bx-user"></i> X personnes vous suivent
                    </p>
                    <div className="description">
                        <h4 className="description-title">Description :</h4>
                        <p>{company.description}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
