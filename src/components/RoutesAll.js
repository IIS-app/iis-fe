import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from './user-components/Register';
import { Profile } from './profile-components/Profile';
import { ProfileEdit } from './profile-components/ProfileEdit';

import { Wins } from './win-components/Wins';
import { WinForm } from './win-components/WinForm';
import { WinDetail } from './win-components/WinDetail';
import { WinEdit } from './win-components/WinEdit';

import { TJDossier } from './jobcomponents/TJDossier';
import { TJDossierBuild } from './jobcomponents/TJDossierBuild';
import { TJDossierDetail } from './jobcomponents/TJDossierDetail';

import { Starrs } from './starr-components/Starrs';
import { StarrForm } from './starr-components/StarrForm';
import { StarrDetail } from './starr-components/StarrDetail';
import { StarrEdit } from './starr-components/StarrEdit';

import { TargetCompanies } from './company-components/TargetCompanies';
import { TCForm } from './company-components/TCForm';
import { TCDetail } from './company-components/TCDetail';
import { TCEdit } from './company-components/TCEdit';
import { Questions } from './question-components/Questions';

import { QuestionForm } from './question-components/QuestionForm';
import { TargetJobs } from './job-compenents/TargetJobs';

import { Resumes } from './Resumes';
import { CoverLetters } from './CoverLetters';
import { Dashboard } from './site-components/Dashboard';
import { MotivationalQuotes } from './site-components/MotivationalQuotes';


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