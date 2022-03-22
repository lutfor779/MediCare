import { message } from 'antd';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const resisterUser = (
        email,
        password,
        name,
        location,
        navigate,
        setLoading
    ) => {
        setIsLoading(true);
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                setLoading(false);
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to database
                saveUser(email, name, 'POST');

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((err) => setError(err.message));

                // redirect url
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
                message.error(err.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signInWithEmailPassword = (
        email,
        password,
        location,
        navigate,
        setLoading
    ) => {
        setIsLoading(true);
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
                message.error(err.message);
            })
            .finally(setIsLoading(false));
    };

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError('');

                // save user to database
                saveUser(result.user.email, result.user.displayName, 'PUT');

                // redirect user
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((err) => {
                setError(err.message);
                message.error(err.message);
            })
            .finally(setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('');
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) =>
                setAdmin(data.admin).then(() => setIsLoading(false))
            )
            .catch(() => setIsLoading(false));
    }, [user.email]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then((r) => {
                setUser({});
                setError('');
            })
            .catch((err) => {
                setError(err.message);
                message.error(err.message);
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    };

    return {
        user,
        error,
        isLoading,
        admin,
        setUser,
        setError,
        resisterUser,
        signInWithEmailPassword,
        signInWithGoogle,
        logOut,
    };
};

export default useFirebase;
