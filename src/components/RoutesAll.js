import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from './user-components/Register';
import { Profile } from './profile-components/Profile';

import { ProfileEdit } from './profile-components/ProfileEdit';

import { TargetCompanies } from './company-components/TargetCompanies';
import { TCForm } from './company-components/TCForm';
import { TCDetail } from './company-components/TCDetail';
import { TCEdit } from './company-components/TCEdit';

import { TargetJobs } from './job-compenents/TargetJobs';
import { TJDetail } from './job-compenents/TJDetail';
import { TJForm } from './job-compenents/TJForm';
import { TJEdit } from './job-compenents/TJEdit';

import { Dossier } from './dossier-components/Dossier';
import { DossierBuild } from './dossier-components/DossierBuild';
import { DossierDetail } from './dossier-components/DossierDetail';

import { Starrs } from './starr-components/Starrs';
import { StarrForm } from './starr-components/StarrForm';
import { StarrDetail } from './starr-components/StarrDetail';
import { StarrEdit } from './starr-components/StarrEdit';

import { Wins } from './win-components/Wins';
import { WinForm } from './win-components/WinForm';
import { WinDetail } from './win-components/WinDetail';
import { WinEdit } from './win-components/WinEdit';

import { Questions } from './question-components/Questions';
import { QuestionForm } from './question-components/QuestionForm';

import { Resumes } from './resume-components/Resumes';
import { CoverLetters } from './coverletter-components/CoverLetters';
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
                path="/home"
                exact
                element={ <Dashboard token={token} isLoggedIn={isLoggedIn} /> }
            />

                {/* USER AND PROFILE ROUTES */}
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

            {/* TARGET JOB ROUTES */}
            <Route 
                path="/targetjobs"
                exact
                element={ <TargetJobs token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/targetjobs/add"
                exact
                element={ <TJForm token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/targetjobs/:pk"
                exact
                element={ <TJDetail token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/targetjobs/edit/:pk"
                exact
                element={ <TJEdit token={token} isLoggedIn={isLoggedIn} /> }
            />
            
            {/* STARRS ROUTES */}
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

            {/* TARGET COMPANY ROUTES */}
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

            {/* QUESTIONS ROUTES */}
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
            

            {/* WINS ROUTES */}
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


            {/* RESUME & COVER LETTER ROUTES */}
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



            {/* OTHER ROUTES */}
            <Route 
                path="/motivationalquotes"
                exact
                element={ <MotivationalQuotes token={token} isLoggedIn={isLoggedIn} /> }
            />
            
            {/* DOSSIER ROUTES */}
            <Route 
                path="/dossier"
                exact
                element={ <Dossier token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/dossier/add"
                exact
                element={ <DossierBuild token={token} isLoggedIn={isLoggedIn} /> }
            />
            <Route 
                path="/dossier/:pk"
                exact
                element={ <DossierDetail token={token} isLoggedIn={isLoggedIn} /> }
            />

        </Routes>
    )
}