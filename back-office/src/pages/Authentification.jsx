import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from "../components/Button";

const Authentification = () => {

    const navigation = useNavigate();

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const displayError = (errorMSG) => {
        setError(errorMSG);

        setTimeout(() => {
            setError("");
        }, 5000)
    }

    const handleForm = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/company/connection`, {

            email,
            password,
        }).then((res) => {

            if (res.data.status === 200) {

                setError("");
                localStorage.setItem('user', res.data.data[0].id);
                navigation('/');

            } else {

                displayError("Email ou mot de passe Incorrect");
            }

        }).catch((error) => {

            console.log(error);
        })

    }

    return (
        <div className={"authentification"}>
            <div className={"authCenter"}>
                <img className="mr-3" src="img/logo.png" alt="Logo"/>
            </div>
            <h1>Connexion</h1>
            {error &&
                <p className="errorConnexion">{error}</p>
            }
            <form onSubmit={handleForm}>
                <div className="form-control">
                    <label>Votre addresse mail</label>
                    <input placeholder={"societe@mail.fr"} value={email} onChange={(e) => setEmail(e.target.value)}
                           className="connexionInput" type={"email"}/>
                </div>
                <br/>
                <div className="form-control">
                    <label>Votre password</label>
                    <input placeholder={"Mot de passe"} value={password} onChange={(e) => setPassword(e.target.value)}
                           className="passwordInput" type={"password"}/>
                    <small>Mot de passe oublié?</small>
                </div>
                <br/>
                <div className={"authCenter"}>
                    <button className={`btn outlined secondary`} type={"submit"}>Se connecter</button>
                </div>
            </form>
        </div>
    );
};

export default Authentification;