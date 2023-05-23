import React, {useEffect, useState} from 'react';

import Navigation from '../components/Navigation';
import EventList from "../components/EventList";
import axios from "axios";
import Button from "../components/Button";

const Home = () => {
    const [events, setEvents] = useState([])
    const [eventById, setEventById] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/event/company/1`)
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
                    {eventById != null ?(
                        <>
                            <div>
                                <h2>{eventById.title}</h2>
                                <Button name="Modifier" icon="bx bxs-pencil"/>
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