import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ClientInfo from "./pages/ClientInfo";
import EventGestion from "./pages/EventGestion";
import Historic from "./pages/Historic";
import Offer from "./pages/Offer";
import AddEvent from "./pages/AddEvent";
import Setting from "./pages/Setting";

import PublicRoutes from "./components/auth/PublicRoutes"
import ProtectedRoutes from "./components/auth/ProtectedRoutes"
import Authentification from "./pages/Authentification"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProtectedRoutes />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/gestion_evenement' element={<EventGestion />} />
                    <Route path='/historique' element={<Historic />} />
                    <Route path='/offre' element={<Offer />} />
                    <Route path='/info_client' element={<ClientInfo />} />
                    <Route path='/parametre' element={<Setting />} />
                    <Route path='/add_event' element={<AddEvent />} />
                </Route>
                <Route path='/authentification' element={<PublicRoutes />}>
                    <Route path='/authentification' element={<Authentification />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;