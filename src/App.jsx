import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css';

function NavigationButtons() {
    const location = useLocation();
    return (
        <div className="navigation-buttons">
            {location.pathname !== '/' && (
                <Link to="/" className="nav-button">
                    List
                </Link>
            )}
            {location.pathname !== '/add-employee' && (
                <Link to="/add-employee" className="nav-button">
                    Add data
                </Link>
            )}
        </div>
    );
}

function App() {
    return (
        <Router>
            <div id="root">
                {/* Header */}
                <header>
                    <h1>FULL STACK ASSIGNMENT</h1>
                </header>

                {/* Navigation */}
                <NavigationButtons />

                {/* Main Content */}
                <main>
                    <Routes>
                        <Route path="/" element={<EmployeeList />} />
                        <Route path="/add-employee" element={<EmployeeForm />} />
                    </Routes>
                </main>

                
            </div>
        </Router>
    );
}

export default App;
