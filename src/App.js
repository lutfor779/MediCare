import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRoute from './components/adminRoute';
import Details from './components/details';
import PrivateRoute from './components/privateRoute';
import AuthProvider from './context/AuthProvider';
import './Global.css';
import About from './pages/About';
import AllOrders from './pages/Admin/AllOrders';
import Appointments from './pages/Admin/Appointments';
import HandleAdmin from './pages/Admin/HandleAdmin';
import HandleReviews from './pages/Admin/HandleReviews';
import HandleUsers from './pages/Admin/HandleUsers';
import Appointment from './pages/Appointment';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import MyOrders from './pages/orders';
import Packages from './pages/Packeges';
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
                        <Route
                            path="/packages"
                            element={
                                <PrivateRoute>
                                    <Packages />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/orders"
                            element={
                                <PrivateRoute>
                                    <MyOrders />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/department" element={<Departments />} />

                        {/* admin site */}
                        <Route
                            path="/appointments"
                            element={
                                <AdminRoute>
                                    <Appointments />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/handle-admin"
                            element={
                                <AdminRoute>
                                    <HandleAdmin />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/handle-reviews"
                            element={
                                <AdminRoute>
                                    <HandleReviews />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/all-orders"
                            element={
                                <AdminRoute>
                                    <AllOrders />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/special-users"
                            element={
                                <AdminRoute>
                                    <HandleUsers />
                                </AdminRoute>
                            }
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
