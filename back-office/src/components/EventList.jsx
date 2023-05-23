import React from 'react';

const EventList = ({data, handleClick}) => {

    return (
        <>
            <div onClick={() => handleClick(data.id)}>
                <h3>{data.title}</h3>
                {/*<h5>{event.subtitle}</h5>*/}
            </div>
        </>
    );
};

export default EventList;