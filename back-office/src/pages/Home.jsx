import React,{useState, useEffect} from 'react';

import Navigation from '../components/Navigation';
import Button from "../components/Button";

import axios from 'axios';

const Home = () => {
    const [company, setCompany] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/company/1`)
            .then((res) => {

                setCompany(res.data.data[0])

            }).catch((error) => {

            console.log(error);
        })
    }, [])

    return (
        <>
            <Navigation/>
            <section className="home">
                <div className="profile-header">
                    <div className="logo">
                        <img src="img/entreprise_logo.png" className="img_logo" alt=""/>
                        <h2>{company.name}</h2>
                    </div>
                    <div className="edit_btn">
                        <Button name="Modifier" icon="bx bx-right-arrow-alt"/>
                    </div>
                </div>
                <div className="users_stats">
                    <div>
                        STARS
                    </div>
                    <br/>
                    <p><i className='bx bx-user'></i> X personnes vous suivent</p>
                </div>
                <div className="description">
                    <h4>Description :</h4>
                    <p>{company.description}</p>
                </div>
            </section>
        </>
    );
};

export default Home;