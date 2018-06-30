import React from 'react';
import {Router, Route, Link, History, withRouter} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose} from 'redux';

import pubsub from 'pubsub-js';
import {Collapse} from 'react-bootstrap';
import SidebarRun from './Sidebar.run';
import avatar from '../../assets/img/user/02.jpg';
import {makeSelectCurrentUser} from 'containers/App/selectors';

class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userBlockCollapse: false,
            collapse: {
                dashboard: this.routeActive(['dashboard', 'dashboardv2', 'dashboardv3']),
                widget: this.routeActive('widgets'),
                elements: this.routeActive([
                    'communities',
                    'projects',
                    'sweetalert',
                    'tour',
                    'carousel',
                    'spinners',
                    'animations',
                    'dropdown',
                    'nestable',
                    'sortable',
                    'panels',
                    'portlet',
                    'grid',
                    'grid-masonry',
                    'typography',
                    'icons-font',
                    'icons-weather',
                    'dm'
                ]),
                forms: this.routeActive([
                    'form-standard',
                    'form-extended',
                    'form-validation',
                    'form-wizard',
                    'openRoles',
                    'myRoles',
                    'allRoles'
                ]),
                charts: this.routeActive([
                    'chart-flot',
                    'chart-radial',
                    'chart-chartjs',
                    'chart-rickshaw',
                    'chart-morris',
                    'chart-chartist'
                ]),
                tables: this.routeActive(['table-standard', 'table-extended', 'table-datatable', 'table-jqgrid']),
                volunteers: this.routeActive(['add-volunteers', 'list-volunteers']),
                extras: this.routeActive([
                    'mailbox',
                    'timeline',
                    'calendar',
                    'invoice',
                    'search',
                    'todo',
                    'profile',
                    'bug-tracker',
                    'contact-details',
                    'contacts',
                    'faq',
                    'file-manager',
                    'followers',
                    'help-center',
                    'plans',
                    'project-details',
                    'projects',
                    'settings',
                    'social-board',
                    'team-viewer',
                    'vote-links'
                ]),
                blog: this.routeActive(['projectsList', 'createProject', 'myProjects', 'blog-article-view']),
                ecommerce: this.routeActive(['help', 'ecommerce-order-view', 'ecommerce-products', 'ecommerce-product-view', 'ecommerce-checkout']),
                forum: this.routeActive(['forum-categories', 'user-skills', '']),
                admin: this.routeActive(['add-roles', 'add-skills', '']),
                pages: false
            }
        };
        this.pubsub_token = pubsub.subscribe('toggleUserblock', () => {
            this.setState({
                userBlockCollapse: !this.state.userBlockCollapse
            });
        });
    };

    componentDidMount() {
        // console.log(this.props.currentUser)
        // pass navigator to access router api
        SidebarRun(this.navigator.bind(this));
    }

    navigator(route) {
        this
            .props
            .history
            .push(route);
    }

    componentWillUnmount() {
        // React removed me from the DOM, I have to unsubscribe from the pubsub using my
        // token
        pubsub.unsubscribe(this.pubsub_token);
    }

    routeActive(paths) {
        paths = Array.isArray(paths)
            ? paths
            : [paths];
        if (paths.indexOf(this.props.location.pathname.replace('/', '')) > -1) 
            return true;
        return false;
    }

    toggleItemCollapse(stateName) {
        var newCollapseState = {};
        for (let c in this.state.collapse) {
            if (this.state.collapse[c] === true && c !== stateName) 
                this.state.collapse[c] = false;
            }
        this.setState({
            collapse: {
                [stateName]: !this.state.collapse[stateName]
            }
        });
    }

    render() {
        return (
            <aside className='aside'>
                {/* START Sidebar (left) */}
                <div className="aside-inner">
                    <nav data-sidebar-anyclick-close="" className="sidebar">
                        {/* START sidebar nav */}
                        <ul className="nav">
                            {/* START user info */}
                            <li className="has-user-block">
                                <Collapse id="user-block" in={this.state.userBlockCollapse}>
                                    <div>
                                        <div className="item user-block">
                                            {/* User picture */}
                                            <div className="user-block-picture">
                                                <div className="user-block-status">
                                                    <img
                                                        src={avatar}
                                                        alt="Avatar"
                                                        width="60"
                                                        height="60"
                                                        className="img-thumbnail img-circle"/>
                                                    <div className="circle circle-success circle-lg"></div>
                                                </div>
                                            </div>
                                            {/* Name and Job */}
                                            <div className="user-block-info">
                                                <span className="user-block-name">
                                                    <Link to="/profile">
                                                        {(this.props.currentUser && this.props.currentUser.profile)
                                                            ? this.props.currentUser.profile.firstName
                                                            : 'Not Found'}
                                                    </Link>
                                                </span>
                                                <span className="user-block-role">Community Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </li>
                            {/* END user info */}
                            {/* Iterates over all sidebar items */}
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.HEADER">Main Navigation</span>
                            </li>
                            <li
                                className={this.routeActive(['dashboard', 'dashboardv2', 'dashboardv3'])
                                ? 'active'
                                : ''}>
                                <div
                                    className="nav-item"
                                    onClick={this
                                    .toggleItemCollapse
                                    .bind(this, 'dashboard')}>
                                    <div className="pull-right label label-info">3</div>
                                    <em className="icon-speedometer"></em>
                                    <span data-localize="sidebar.nav.DASHBOARD">Dashboard</span>
                                </div>
                                <Collapse in={this.state.collapse.dashboard} timeout={100}>
                                    <ul id="dashboard" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Dashboard</li>
                                        <li
                                            className={this.routeActive('dashboard')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/dashboard" title="Calendar">
                                                <span>Calendar</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                            <li
                                className={this.routeActive(['', 'user-skills', ''])
                                ? 'active'
                                : ''}>
                                <div
                                    className="nav-item"
                                    title="Account Settings"
                                    onClick={this
                                    .toggleItemCollapse
                                    .bind(this, 'forum')}>
                                    <em className="icon-speech"></em>
                                    <span>Account Settings</span>
                                </div>
                                <Collapse in={this.state.collapse.forum}>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Profile</li>

                                        <li
                                            className={this.routeActive('account-settings')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/account-settings" title="Profile Setting">
                                                <span>Profile</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>
                            {/* Volunteers  */}
                            <li
                                className={this.routeActive(['add-volunteers', 'list-volunteers'])
                                ? 'active'
                                : ''}>
                                <div
                                    className="nav-item"
                                    title="Volunteers"
                                    onClick={this
                                    .toggleItemCollapse
                                    .bind(this, 'volunteers')}>
                                    <em className="icon-people"></em>
                                    <span>Volunteers</span>
                                </div>
                                <Collapse in={this.state.collapse.volunteers}>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">List Volunteers</li>

                                        <li
                                            className={this.routeActive('list-volunteers')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/list-volunteers" title="List Volunteers">
                                                <span>List Volunteers</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.COMPONENTS">Components</span>
                            </li>
                            <li
                                className={this.routeActive([
                                'communities',
                                'projects',
                                'sweetalert',
                                'tour',
                                'carousel',
                                'spinners',
                                'animations',
                                'dropdown',
                                'nestable',
                                'sortable',
                                'panels',
                                'portlet',
                                'grid',
                                'grid-masonry',
                                'typography',
                                'icons-font',
                                'icons-weather',
                                'dm'
                            ])
                                ? 'active'
                                : ''}>
                                <div
                                    className="nav-item"
                                    title="Communications"
                                    onClick={this
                                    .toggleItemCollapse
                                    .bind(this, 'elements')}>
                                    <em className="icon-grid"></em>
                                    <span data-localize="sidebar.nav.element.ELEMENTS">Communications</span>
                                </div>
                                <Collapse in={this.state.collapse.elements}>
                                    <ul id="#" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Communications</li>

                                        <li
                                            className={this.routeActive('communities')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/dashboard" title="Communities">
                                                <span data-localize="sidebar.nav.element.BUTTON">Communities</span>
                                            </Link>
                                        </li>

                                        <li
                                            className={this.routeActive('projects')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/listProjects" title="Projects">
                                                <span data-localize="sidebar.nav.element.BUTTON">Projects</span>
                                            </Link>
                                        </li>

                                        <li
                                            className={this.routeActive('dm')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/dashboard" title="D.M">
                                                <span data-localize="sidebar.nav.element.COLOR">D.M</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>
                            <li
                                className={this.routeActive([
                                'form-standard',
                                'form-extended',
                                'form-validation',
                                'form-wizard',
                                'openRoles',
                                'myRoles',
                                'allRoles'
                            ])
                                ? 'active'
                                : ''}>
                                <div
                                    className="nav-item"
                                    title="Roles"
                                    onClick={this
                                    .toggleItemCollapse
                                    .bind(this, 'forms')}>
                                    <em className="icon-note"></em>
                                    <span data-localize="sidebar.nav.form.FORM">Roles</span>
                                </div>
                                <Collapse in={this.state.collapse.forms}>
                                    <ul id="#" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Forms</li>

                                        <li
                                            className={this.routeActive('openRoles')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/roleView" title="Open Roles">
                                                <span>Open Roles</span>
                                            </Link>
                                        </li>
                                        <li
                                            className={this.routeActive('myRoles')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/roleView" title="My Roles">
                                                <span>My Roles</span>
                                            </Link>
                                        </li>
                                        <li
                                            className={this.routeActive('allRoles')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/roleView" title="All Roles">
                                                <span>All Roles</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                            <li
                                className={this.routeActive(['places'])
                                ? 'active'
                                : ''}>
                                <div
                                    className="nav-item"
                                    title="Places"
                                    onClick={this
                                    .toggleItemCollapse
                                    .bind(this, 'places')}>
                                    <em className="icon-notebook"></em>
                                    <span>Places</span>
                                </div>
                                <Collapse in={this.state.collapse.places}>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Places</li>
                                        <li
                                            className={this.routeActive('places')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/places" title="List">
                                                <span>List Places</span>
                                            </Link>
                                        </li>
                                        

                                    </ul>
                                </Collapse>
                            </li>

                            <li
                                className={this.routeActive(['projectsList', 'createProject', 'myProjects', 'blog-article-view'])
                                    ? 'active'
                                    : ''}>
                                <div
                                    className="nav-item"
                                    title="Projects"
                                    onClick={this
                                        .toggleItemCollapse
                                        .bind(this, 'blog')}>
                                    <em className="icon-notebook"></em>
                                    <span>Projects</span>
                                </div>
                                <Collapse in={this.state.collapse.blog}>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Projects</li>
                                        <li
                                            className={this.routeActive('projectsList')
                                                ? 'active'
                                                : ''}>
                                            <Link to="/listProjects" title="List">
                                                <span>List Projects</span>
                                            </Link>
                                        </li>
                                        {/* <li
                                            className={this.routeActive('createProject')
                                                ? 'active'
                                                : ''}>
                                            <Link to="/addProject" title="Create Project">
                                                <span>Create Project</span>
                                            </Link>
                                        </li> */}

                                        <li
                                            className={this.routeActive('myProjects')
                                                ? 'active'
                                                : ''}>
                                            <Link to="/listProjects" title="My Projects">
                                                <span>My Projects</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.MORE">More</span>
                            </li>

                            {/* HELP */}
                            <li
                                className={this.routeActive(['add-skills', ''])
                                ? 'active'
                                : ''}>
                                <div
                                    className="nav-item"
                                    title="Add Roles"
                                    onClick={this
                                    .toggleItemCollapse
                                    .bind(this, 'admin')}>
                                    <em className="icon-settings"></em>
                                    <span>General Settings</span>
                                </div>
                                <Collapse in={this.state.collapse.admin}>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">General Settings</li>

                                        <li
                                            className={this.routeActive('add-roles')
                                            ? 'active'
                                            : ''}>
                                            <Link to="/add-roles" title="Add Roles">
                                                <span>Add Roles</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                            <li>
                                <a href="/logout" title="Logout">
                                    <em className="icon-power"></em>
                                    <span>Logout</span>
                                </a>
                            </li>

                        </ul>
                        {/* END sidebar nav */}
                    </nav>
                </div>
                {/* END Sidebar (left) */}
            </aside>
        );
    }

}

const mapStateToProps = createStructuredSelector({currentUser: makeSelectCurrentUser()});

const withConnect = connect(mapStateToProps);

export default withRouter(
// compose(
Sidebar,
// withConnect, )
);
