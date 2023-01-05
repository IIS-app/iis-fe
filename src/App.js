
import './App.css';
import './css/forms.css'
import './css/links.css'
import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { RoutesAll } from './components/RoutesAll';
import { Header } from './components/site-components/Header';
import { NavBar } from './components/site-components/NavBar';
import { Login } from './components/user-components/Login';

function App() {
	const [token, setToken] = useLocalStorageState('token', '')
	const [email, setEmail] = useLocalStorageState('email', '')
    
	const setAuth = (email, token) => {
		setToken(token)
		setEmail(email)
	}

	const isLoggedIn = !!(email && token)  
	
	return (
    <div className="App">
		{isLoggedIn ? (
                    <>
                            <Header token={token} setAuth={setAuth} />
                            <NavBar />
                            <RoutesAll token={token} setAuth={setAuth} isLoggedIn={isLoggedIn}  />
                    </>
                ) : (
                    <>
						<header className="App-header">An Organized Agent is an Employed Agent.</header>
                        <main id="home-box">
                            <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
                        </main>
                    </>
                    
                )}
    </div>
	);
}

export default App;
