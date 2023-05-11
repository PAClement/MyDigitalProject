import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ClientInfo from "./pages/ClientInfo";
import EventGestion from "./pages/EventGestion";
import Historic from "./pages/Historic";
import Offer from "./pages/Offer";
import Setting from "./pages/Setting";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/gestion_evenement' element={<EventGestion />} />
                <Route path='/historique' element={<Historic />} />
                <Route path='/offre' element={<Offer />} />
                <Route path='/info_client' element={<ClientInfo />} />
                <Route path='/parametre' element={<Setting />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;