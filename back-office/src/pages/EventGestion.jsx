import React, {useEffect, useState} from 'react';

import Navigation from '../components/Navigation';
import EventList from "../components/EventList";
import axios from "axios";
import Button from "../components/Button";

const Home = () => {
    let companyID =  parseInt(localStorage.getItem('user'))

    const [error, setError] = useState("");
    const [events, setEvents] = useState([])
    const [eventById, setEventById] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/event/company/101`)
            .then((res) => {

                setEvents(res.data.data)

            }).catch((error) => {

            console.log(error);
        })
    }, [])

    const displayEvent = (eventID) => {
        axios.get(`${process.env.REACT_APP_API_URL}/event/byId/${eventID}`)
            .then((res) => {

                setEventById(res.data.data[0])

            }).catch((error) => {

            console.log(error);
        })
    }

    const dateFunction = (date) => {
       let dateFormat= new Date(new Date(date).getTime());
       return dateFormat.getHours() + ":" + dateFormat.getMinutes() + ", "+ dateFormat.toDateString();
    }

    const displayError = (errorMSG) => {
        setError(errorMSG);

        setTimeout(() => {
            setError("");
        }, 5000)
    }

    const deleteEvent = (eventID) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/event/delete/${eventID}`)
            .then((res) => {

                if(res.status !== 200){

                }else{

                    displayError("Une erreur est survenue lors de la suppression");
                }

            }).catch((error) => {

            console.log(error);
        })
    }

    return (
        <>
            <Navigation />
            <section className="home">
                <div className="event-gestion">
                    <h2>Gestion évènements</h2>
                    <div className="event-list">

                        {events.map(event => (
                            <EventList  key={event.id}  handleClick={displayEvent} data={event} />
                        ))}
                    </div>
                </div>
                <div className="show-event">
                    {error &&
                        <p className="errorConnexion">{error}</p>
                    }
                    {eventById != null ?(
                        <>
                            <div>
                                <h2>{eventById.title}</h2>
                                <Button name="Modifier" icon="bx bxs-pencil"/>
                                <button onClick={() => deleteEvent(eventById)}>Supprimer</button>
                            </div>
                            <h6>xx inscrit</h6>

                            <h5>{dateFunction(eventById.start_date)} au {dateFunction(eventById.end_date)}</h5>
                            <p>
                                {eventById.description}
                            </p>
                        </>
                    ):(
                        <p>Clique sur un event</p>
                    )}

                </div>
            </section>
        </>
    );
};

export default Home;