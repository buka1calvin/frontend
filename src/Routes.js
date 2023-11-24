import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthRoute from './utils/AuthRoute';
import { Home, Dashboard } from './pages/home';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Subscribers, Unsubscribe } from './pages/maillist';
import { Contact } from './pages/contact';
import { UsersMain, UsersCreate, UsersView } from './pages/users';
import HomeBody from './components/homee/HomeBody';
import ServicesPage from './pagess/ServicesPage';
import EventPage from './pagess/EventPage';
import {
	Events,
	ViewEvent,
	EventsMain,
	EventsCreate,
	EventsView,
} from './pages/events';
import {
	News,
	NewsView,
	NewsMain,
	NewsCreate,
	NewsAdminView,
	NewsComment,
} from './pages/news';

import {
	Tours,
	ToursView,
	ToursMain,
	ToursCreate,
	ToursAdminView,
	ToursComment,
} from './pages/tours';
import {
	MemberJoin,
	MemberList,
	// MembersMain,
	MembersView,
	MemberBenefits,
	// MemberInfo,
} from './pages/members';
import {
	Publication,
	PublicationsMain,
	PublicationsCreate,
	PublicationsView,
	PressView,
} from './pages/publications';
import { Terms } from './pages/terms';
import { Faq } from './pages/faq';
import { Policy } from './pages/policy';
import {
	Login,
	ResetPassword,
	ForgotPassword,
	ResetAccount,
} from './pages/users';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				{/* this is the second alternative of homepage */}
				<Route exact path="/home" component={HomeBody}/>
				<Route exact path='/about' component={About} />
				<Route exact path='/services' component={Services} />
				{/* this is the second services */}
				<Route exact path='/services-test' component={ServicesPage} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/events' component={Events} />
				{/* this is for bukarani */}
				<Route exact path='/events-test' component={EventPage} />
				<Route exact path='/event/:slug' component={ViewEvent} />

				<Route exact path='/blogs' component={News} />
				<Route exact path='/blog/:slug' component={NewsView} />

				<Route exact path='/tours' component={Tours} />
				<Route exact path='/tour/:slug' component={ToursView} />

				<Route exact path='/members/benefits' component={MemberBenefits} />
				<Route exact path='/members/join' component={MemberJoin} />
				{/* <Route exact path='/members/info' component={MemberInfo} /> */}
				<Route exact path='/members/list' component={MemberList} />

				<Route exact path='/publications' component={Publication} />
				<Route exact path='/press-releases' component={PressView} />

				<Route exact path='/terms' component={Terms} />
				<Route exact path='/policy' component={Policy} />
				<Route exact path='/faq' component={Faq} />

				<Route exact path='/auth/login' component={Login} />
				<Route
					exact
					path='/auth/password/new/:token'
					component={ResetPassword}
				/>
				<Route exact path='/auth/password/forgot' component={ForgotPassword} />
				<Route
					exact
					path='/auth/set-new-password/:token'
					component={ResetAccount}
				/>

				<AuthRoute exact path='/account' component={Dashboard} />

				<AuthRoute exact path='/account/users' component={UsersMain} />
				<AuthRoute exact path='/account/users/create' component={UsersCreate} />
				<AuthRoute
					exact
					path='/account/users/view/:name'
					component={UsersView}
				/>

				{/* <AuthRoute exact path='/account/members' component={MembersMain} /> */}
				<AuthRoute
					exact
					path='/account/members/view/:name'
					component={MembersView}
				/>

				<AuthRoute exact path='/account/events' component={EventsMain} />
				<AuthRoute
					exact
					path='/account/events/create'
					component={EventsCreate}
				/>
				<AuthRoute
					exact
					path='/account/events/view/:slug'
					component={EventsView}
				/>

				<AuthRoute exact path='/account/news' component={NewsMain} />
				<AuthRoute exact path='/account/news/create' component={NewsCreate} />
				<AuthRoute
					exact
					path='/account/news/view/:slug'
					component={NewsAdminView}
				/>
				<AuthRoute
					exact
					path='/account/news/comment/:slug'
					component={NewsComment}
				/>

              <AuthRoute exact path='/account/tours' component={ToursMain} />
				<AuthRoute exact path='/account/tours/create' component={ToursCreate} />
				<AuthRoute
					exact
					path='/account/tours/view/:slug'
					component={ToursAdminView}
				/>
				<AuthRoute
					exact
					path='/account/tours/comment/:slug'
					component={ToursComment}
				/>

				<AuthRoute
					exact
					path='/account/publications'
					component={PublicationsMain}
				/>
				<AuthRoute
					exact
					path='/account/publications/create'
					component={PublicationsCreate}
				/>
				<AuthRoute
					exact
					path='/account/publications/view/:id'
					component={PublicationsView}
				/>
				<AuthRoute exact path='/account/subscribers' component={Subscribers} />
				<Route exact path='/maillist/unsubcribe/:id' component={Unsubscribe} />
			</Switch>
		</Router>
	);
}
