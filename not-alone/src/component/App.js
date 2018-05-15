import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home'
import AccountPage from './Account';
import AboutPage from './About';
import LogInPage from './Login';
import TreatmentPage from './Treatment';
import OxfordPage from './Oxford';
import DetoxPage from './Detox';
import SoberLivingPage from './SoberLiving';
import ResumePage from './Resume';
import InterviewTipsPage from './InterviewTips';
import JobHelpPage from './JobHelp';
import TwelveStepMeetingsPage from './12StepMeetings';
import EventsGlobalPage from './EventsGlobal';
import EventsLocalPage from './EventsLocal';
import NewsPage from './News';
import AskItForum from './AskItForum';

import * as routes from '../constants/routes';

import withAuthentication from './withAuthentication';


const App = () =>

      <Router>
        <div>
        <Navigation />

        <hr />

        <Route
          exact path={routes.LANDING}
          component={() => <LandingPage />}
        />

        <Route
          exact path={routes.SIGN_UP}
          component={() => <SignUpPage />}
        />
        <Route
          exact path={routes.LOG_IN}
          component={() => <LogInPage />}
        />

        <Route
          exact path={routes.PASSWORD_FORGET}
          component={() => <PasswordForgetPage />}
        />
        <Route
          exact path={routes.HOME}
          component={() => <HomePage />}
        />
        <Route
          exact path={routes.ACCOUNT}
          component={() => <AccountPage />}
        />
        <Route
          exact path={routes.ABOUT}
          component={() => <AboutPage />}
        />
        <Route
          exact path={routes.TREATMENT}
          component ={() => <TreatmentPage />}
        />
        <Route
          exact path={routes.OXFORD}
          component ={() => <OxfordPage />}
        />
        <Route
          exact path={routes.DETOX}
          component ={() => <DetoxPage />}
        />
        <Route
          exact path={routes.SOBER_LIVING}
          component ={() => <SoberLivingPage />}
        />
        <Route
          exact path={routes.RESUME}
          component ={() => <ResumePage />}
        />
        <Route
          exact path={routes.INTERVIEW_TIPS}
          component ={() => <InterviewTipsPage />}
        />
        <Route
          exact path={routes.JOB_HELP}
          component ={() => <JobHelpPage />}
        />
        <Route
          exact path={routes.ASKITFORUM}
          component ={() => <AskItForum />}
        />
        <Route
          exact path={routes.NEWS}
          component ={() => <NewsPage />}
        />
        <Route
          exact path={routes.EVENTS_LOCAL}
          component ={() => <EventsLocalPage />}
        />
        <Route
          exact path={routes.EVENTS_GLOBAL}
          component ={() => <EventsGlobalPage />}
        />
        <Route
          exact path={routes.TWELVESTEP_MEETINGS}
          component ={() => <TwelveStepMeetingsPage />}
        />

      </div>
      </Router>

export default withAuthentication(App);
