import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import ResetPassword from '../containers/ResetPassword';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/reset-password" element={<ResetPassword />} />
                </Layout>
            </Routes>
        </BrowserRouter>
    );
}

export default App;