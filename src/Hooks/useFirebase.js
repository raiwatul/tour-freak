import { useState, useEffect } from 'react';
import { useHistory ,useLocation } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,createUserWithEmailAndPassword,updateProfile,sendEmailVerification,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import swal from 'sweetalert';

initializeAuthentication();

const useFirebase = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const handleNameChange = e => {
      
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value);
      }
      const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          setError('');
          verifyEmail();
          setUserName();
          swal("Successfully", "Registered", "success");
          logOut();
          history.push('/login');
        })
        .catch(error => {
          setError(error.message);
          swal("Registration Unsuccessful", `${error}`, "warning");
        })
      }
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            
          })
      }

      const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
        //  if(!user.emailVerified){
        //      setError('Email is not verified');
        //      logOut();
        //      swal("Login Unsuccessful", `${error}`, "warning");
        //      return
        //  }
         
         swal("Login", "Successful", "success");
          history.push(redirect_uri);
          setError('');
        })
        .catch(error => {
          setError(error.message);
          swal("Login Unsuccessful", `${error}`, "warning");
        })
      }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    },[])

    return {
        user,
        loading,
        signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin,
        error,
        logOut
    }
}

export default useFirebase;