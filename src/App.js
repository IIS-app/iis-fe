
import './App.css';
import './css/forms.css'
import './css/links.css'
import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Header } from './components/sitecomponents/Header';
import { NavBar } from './components/sitecomponents/NavBar';
import { Login } from './components/usercomponents/Login';
import { RoutesAll } from './components/RoutesAll';

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
                        <div>
                            <Header token={token} setAuth={setAuth} />
                            <NavBar />
                            <RoutesAll token={token} setAuth={setAuth} isLoggedIn={isLoggedIn}  />
                        </div>
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
