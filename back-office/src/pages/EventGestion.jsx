import React from 'react';

import Navigation from '../components/Navigation';
import EventList from "../components/EventList";

const Home = () => {

    return (
        <>
            <Navigation />
            <section className="home">
                <div className="event-gestion">
                    <h2>Gestion évènements</h2>
                    <div className="event-list">
                        <EventList />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;