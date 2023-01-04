import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from './usercomponents/Register';
import { Profile } from './profilecomponents/Profile';
import { ProfileEdit } from './profilecomponents/ProfileEdit';

import { Wins } from './wincomponents/Wins';
import { WinForm } from './wincomponents/WinForm';
import { WinDetail } from './wincomponents/WinDetail';
import { WinEdit } from './wincomponents/WinEdit';

import { TJDossier } from './jobcomponents/TJDossier';
import { TJDossierBuild } from './jobcomponents/TJDossierBuild';
import { TJDossierDetail } from './jobcomponents/TJDossierDetail';

import { Starrs } from './starrcomponents/Starrs';
import { StarrForm } from './starrcomponents/StarrForm';
import { StarrDetail } from './starrcomponents/StarrDetail';
import { StarrEdit } from './starrcomponents/StarrEdit';

import { TargetCompanies } from './companycomponents/TargetCompanies';
import { TCForm } from './companycomponents/TCForm';
import { TCDetail } from './companycomponents/TCDetail';
import { TCEdit } from './companycomponents/TCEdit';
import { Questions } from './questioncomponents/Questions';

import { QuestionForm } from './questioncomponents/QuestionForm';
import { TargetJobs } from './jobcompenents/TargetJobs';

import { Resumes } from './Resumes';
import { CoverLetters } from './CoverLetters';
import { Dashboard } from './sitecomponents/Dashboard';
import { MotivationalQuotes } from './sitecomponents/MotivationalQuotes';


export const RoutesAll = ({token}, isLoggedIn, setAuth) => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={ <Dashboard token={token} isLoggedIn={isLoggedIn} setAuth={setAuth}/> }
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
                path="/profile/edit"
                exact 
                element={ <ProfileEdit token={token} isLoggedIn={isLoggedIn}/> }
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
            <Route 
                path="/wins/add"
                exact
                element={ <WinForm token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/wins/:pk"
                exact
                element={ <WinDetail token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/wins/edit/:pk"
                exact
                element={ <WinEdit token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/starrs" 
                exact
                element={ <Starrs token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/starrs/add" 
                exact
                element={ <StarrForm token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/starrs/:pk" 
                exact
                element={ <StarrDetail token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route
                path="starrs/edit/:pk"
                exact
                element={ <StarrEdit token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route  
                path="/targetcompanies"
                exact
                element={ <TargetCompanies token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/targetcompany/add"
                exact
                element={ <TCForm token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/targetcompany/:pk"
                exact
                element={ <TCDetail token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/targetcompany/edit/:pk"
                exact
                element={ <TCEdit token={token} isLoggedIn={isLoggedIn} /> }
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
                <Route 
                path="/dossier"
                exact
                element={ <TJDossier token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/dossier/add"
                exact
                element={ <TJDossierBuild token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/dossier/:pk"
                exact
                element={ <TJDossierDetail token={token} isLoggedIn={isLoggedIn} /> }
            />

        </Routes>
    )
}