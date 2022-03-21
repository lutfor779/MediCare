import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/details';
import PrivateRoute from './components/privateRoute';
import AuthProvider from './context/AuthProvider';
import './Global.css';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import HomePage from './pages/HomePage';
import Services from './pages/Services';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />
                        <Route path="/services" element={<Services />} />
                        <Route
                            path="/services/:id"
                            element={
                                <PrivateRoute>
                                    <Details />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route
                            path="/doctors/:id"
                            element={
                                <PrivateRoute>
                                    <Details />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/appointment"
                            element={
                                <PrivateRoute>
                                    <Appointment />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/department" element={<Departments />} />
                        <Route path="*" element={<h1>Not found</h1>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
