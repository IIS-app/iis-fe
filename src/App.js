
import './App.css';
import 'bulma/css/bulma.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Profile } from './components/Profile';
import { Wins } from './components/Wins';
import { Starrs } from './components/Starrs';
import { StarrForm } from './components/StarrForm';
import { TargetCompanies } from './components/TargetCompanies';
import { TargetCompanyForm } from './components/TargetCompanyForm';
import { Questions } from './components/Questions';
import { QuestionForm } from './components/QuestionForm';
import { TargetJobs } from './components/TargetJobs';
import { Resumes } from './components/Resumes';
import { CoverLetters } from './components/CoverLetters';
import { Dashboard } from './components/Dashboard';
import { MotivationalQuotes } from './components/MotivationalQuotes';

function App() {
	const [token, setToken] = useLocalStorageState('token', null)
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
                            <Header setAuth={setAuth} />
                            <NavBar />
                            <Routes>
                                <Route 
                                    path="/" 
                                    element={ <Login token={token} isLoggedIn={isLoggedIn} setAuth={setAuth}/> }
                                />
                                <Route 
                                    path="/register" 
                                    exact
                                    element={ <Register setAuth={setAuth} /> }
                                />
                                <Route 
                                    path="/profile"
                                    exact 
                                    element={ <Profile token={token} isLoggedIn={isLoggedIn}/> }
                                />
                                <Route 
                                    path="/home"
                                    exact
                                    element={ <Dashboard token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/wins"
                                    exact
                                    element={ <Wins token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                { <Route 
                                    path="/starrs" 
                                    exact
                                    element={ <Starrs token={token} isLoggedIn={isLoggedIn} /> }
                                /> }
                                { <Route 
                                    path="/starrform" 
                                    exact
                                    element={ <StarrForm token={token} isLoggedIn={isLoggedIn} /> }
                                /> }
                                <Route 
                                    path="/targetcompanies"
                                    exact
                                    element={ <TargetCompanies token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/targetcompany/add"
                                    exact
                                    element={ <TargetCompanyForm token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/targetjobs"
                                    exact
                                    element={ <TargetJobs token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/questions"
                                    exact
                                    element={ <Questions token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/questions/add"
                                    exact
                                    element={ <QuestionForm token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/resumes"
                                    exact
                                    element={ <Resumes token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/coverletters"
                                    exact
                                    element={ <CoverLetters token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/motivationalquotes"
                                    exact
                                    element={ <MotivationalQuotes token={token} isLoggedIn={isLoggedIn} /> }
                                />
                            </Routes>
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
