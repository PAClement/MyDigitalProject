import React, {useEffect, useState} from 'react';
import axios from "axios";

const EventList = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/event/company/1`)
            .then((res) => {

                setEvents(res.data.data)

            }).catch((error) => {

            console.log(error);
        })
    }, [])

    return (
        <>
            {events.map(event => (
                <div key={event.id}>
                    <h3>{event.title}</h3>
                    {/*<h5>{event.subtitle}</h5>*/}
                </div>
            ))}
        </>
    );
};

export default EventList;