import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';
import pubsub from 'pubsub-js';
import { Collapse } from 'react-bootstrap';
import SidebarRun from './Sidebar.run';

class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userBlockCollapse: false,
            collapse: {
                dashboard: this.routeActive(['dashboard', 'dashboardv2', 'dashboardv3']),
                widget: this.routeActive('widgets'),
                elements: this.routeActive(['pledgedResources', 'notifications', 'sweetalert', 'tour', 'carousel', 'spinners', 'animations', 'dropdown', 'nestable', 'sortable', 'panels', 'portlet', 'grid', 'grid-masonry', 'typography', 'icons-font', 'icons-weather', 'neededResources']),
                forms: this.routeActive(['form-standard', 'form-extended', 'form-validation', 'form-wizard', 'openRoles', 'yourRoles', 'similarRoles']),
                charts: this.routeActive(['chart-flot', 'chart-radial', 'chart-chartjs', 'chart-rickshaw', 'chart-morris', 'chart-chartist']),
                tables: this.routeActive(['table-standard', 'table-extended', 'table-datatable', 'table-jqgrid']),
                maps: this.routeActive(['map-google', 'map-vector']),
                extras: this.routeActive(['mailbox', 'timeline', 'calendar', 'invoice', 'search', 'todo', 'profile','bug-tracker','contact-details','contacts','faq','file-manager','followers','help-center','plans','project-details','projects','settings','social-board','team-viewer','vote-links']),
                blog: this.routeActive(['projectsList', 'createProject', 'blog-articles', 'blog-article-view']),
                ecommerce: this.routeActive(['help', 'ecommerce-order-view', 'ecommerce-products', 'ecommerce-product-view', 'ecommerce-checkout']),
                forum: this.routeActive(['forum-categories', 'forum-topics', 'forum-discussion']),
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
        // pass navigator to access router api
        SidebarRun(this.navigator.bind(this));
    }

    navigator(route) {
        this.props.history.push(route);
    }

    componentWillUnmount() {
        // React removed me from the DOM, I have to unsubscribe from the pubsub using my token
        pubsub.unsubscribe(this.pubsub_token);
    }

    routeActive(paths) {
        paths = Array.isArray(paths) ? paths : [paths];
        if (paths.indexOf(this.props.location.pathname.replace('/','')) > -1)
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
                { /* START Sidebar (left) */ }
                <div className="aside-inner">
                    <nav data-sidebar-anyclick-close="" className="sidebar">
                        { /* START sidebar nav */ }
                        <ul className="nav">
                            { /* START user info */ }
                            <li className="has-user-block">
                                <Collapse id="user-block" in={ this.state.userBlockCollapse }>
                                    <div>
                                        <div className="item user-block">
                                            { /* User picture */ }
                                            <div className="user-block-picture">
                                                <div className="user-block-status">
                                                    <img src="assets/img/user/02.jpg" alt="Avatar" width="60" height="60" className="img-thumbnail img-circle" />
                                                    <div className="circle circle-success circle-lg"></div>
                                                </div>
                                            </div>
                                            { /* Name and Job */ }
                                            <div className="user-block-info">
                                                <span className="user-block-name">Hello, Mike</span>
                                                <span className="user-block-role">Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </li>
                            { /* END user info */ }
                            { /* Iterates over all sidebar items */ }
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.HEADER">Main Navigation</span>
                            </li>
                            <li className={ this.routeActive(['dashboard', 'dashboardv2', 'dashboardv3']) ? 'active' : '' }>
                                <div className="nav-item" onClick={ this.toggleItemCollapse.bind(this, 'dashboard') }>
                                    <div className="pull-right label label-info">3</div>
                                    <em className="icon-speedometer"></em>
                                    <span data-localize="sidebar.nav.DASHBOARD">Dashboard</span>
                                </div>
                                <Collapse in={ this.state.collapse.dashboard } timeout={ 100 }>
                                    <ul id="dashboard" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Dashboard</li>
                                        <li className={ this.routeActive('dashboard') ? 'active' : '' }>
                                            <Link to="dashboard" title="Main Dashboard">
                                            <span>Main Dashboard</span>
                                            </Link>
                                        </li>
                                    
                                    </ul>
                                </Collapse>
                            </li>
                         
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.COMPONENTS">Components</span>
                            </li>
                            <li className={ this.routeActive(['pledgedResources', 'notifications', 'sweetalert', 'tour', 'carousel', 'spinners', 'animations', 'dropdown', 'nestable', 'sortable', 'panels', 'portlet', 'grid', 'grid-masonry', 'typography', 'icons-font', 'icons-weather', 'neededResources']) ? 'active' : '' }>
                                <div className="nav-item" title="Resources" onClick={ this.toggleItemCollapse.bind(this, 'elements') }>
                                    <em className="icon-grid"></em>
                                    <span data-localize="sidebar.nav.element.ELEMENTS">Resources</span>
                                </div>
                                <Collapse in={ this.state.collapse.elements }>
                                    <ul id="#" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Resources</li>
                                        <li className={ this.routeActive('pledgedResources') ? 'active' : '' }>
                                            <Link to="pledgedResources" title="Pledged Resources">
                                            <span data-localize="sidebar.nav.element.BUTTON">Pledged Resources</span>
                                            </Link>
                                        </li>
                                    
                                      
                                        <li className={ this.routeActive('neededResources') ? 'active' : '' }>
                                            <Link to="neededResources" title="Needed Resources">
                                            <span data-localize="sidebar.nav.element.COLOR">Needed Resources</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['form-standard', 'form-extended', 'form-validation', 'form-wizard', 'openRoles', 'yourRoles', 'similarRoles']) ? 'active' : '' }>
                                <div className="nav-item" title="Roles" onClick={ this.toggleItemCollapse.bind(this, 'forms') }>
                                    <em className="icon-note"></em>
                                    <span data-localize="sidebar.nav.form.FORM">Roles</span>
                                </div>
                                <Collapse in={ this.state.collapse.forms }>
                                    <ul id="#" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Forms</li>
                                      
                                      
                                        <li className={ this.routeActive('openRoles') ? 'active' : '' }>
                                            <Link to="openRoles" title="Open Roles">
                                            <span>Open Roles</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('yourRoles') ? 'active' : '' }>
                                            <Link to="yourRoles" title="Your Roles">
                                            <span>Your Roles</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('similarRoles') ? 'active' : '' }>
                                            <Link to="similarRoles" title="Similar Roles">
                                            <span>Similar Roles</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                            <li className={ this.routeActive(['projectsList', 'createProject', 'blog-articles', 'blog-article-view']) ? 'active' : '' }>
                                <div className="nav-item" title="Projects" onClick={ this.toggleItemCollapse.bind(this, 'blog') }>
                                    <em className="icon-notebook"></em>
                                    <span>Projects</span>
                                </div>
                                <Collapse in={ this.state.collapse.blog }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Projects</li>
                                        <li className={ this.routeActive('projectsList') ? 'active' : '' }>
                                            <Link to="projectsList" title="List">
                                            <span>List</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('createProject') ? 'active' : '' }>
                                            <Link to="createProject" title="Create Project">
                                            <span>Create Project</span>
                                            </Link>
                                        </li>
                                   
                                    </ul>
                                </Collapse>
                            </li>


                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.MORE">Reports</span>
                            </li>

                            <li className={ this.routeActive(['chart-flot', 'chart-radial', 'chart-chartjs', 'chart-rickshaw', 'chart-morris', 'chart-chartist']) ? 'active' : '' }>
                                <div className="nav-item" title="Charts" onClick={ this.toggleItemCollapse.bind(this, 'charts') }>
                                    <em className="icon-graph"></em>
                                    <span data-localize="sidebar.nav.chart.CHART">Charts</span>
                                </div>
                                <Collapse in={ this.state.collapse.charts }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Charts</li>
                                        <li className={ this.routeActive('chart-flot') ? 'active' : '' }>
                                            <Link to="chart-flot" title="Flot">
                                            <span data-localize="sidebar.nav.chart.FLOT">Flot</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-radial') ? 'active' : '' }>
                                            <Link to="chart-radial" title="Radial">
                                            <span data-localize="sidebar.nav.chart.RADIAL">Radial</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-chartjs') ? 'active' : '' }>
                                            <Link to="chart-chartjs" title="Chart JS">
                                            <span>Chart JS</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-rickshaw') ? 'active' : '' }>
                                            <Link to="chart-rickshaw" title="Rickshaw">
                                            <span>Rickshaw</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-morris') ? 'active' : '' }>
                                            <Link to="chart-morris" title="MorrisJS">
                                            <span>MorrisJS</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-chartist') ? 'active' : '' }>
                                            <Link to="chart-chartist" title="Chartist">
                                            <span>Chartist</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li className={ this.routeActive(['map-google', 'map-vector']) ? 'active' : '' }>
                                <div className="nav-item" title="Maps" onClick={ this.toggleItemCollapse.bind(this, 'maps') }>
                                    <em className="icon-map"></em>
                                    <span data-localize="sidebar.nav.map.MAP">Maps</span>
                                </div>
                                <Collapse in={ this.state.collapse.maps }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Maps</li>
                                        <li className={ this.routeActive('map-google') ? 'active' : '' }>
                                            <Link to="map-google" title="Google Maps">
                                            <span data-localize="sidebar.nav.map.GOOGLE">Google Maps</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('map-vector') ? 'active' : '' }>
                                            <Link to="map-vector" title="Vector Maps">
                                            <span data-localize="sidebar.nav.map.VECTOR">Vector Maps</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.MORE">More</span>
                            </li>

                            <li className={this.routeActive(['help', 'ecommerce-order-view', 'ecommerce-products', 'ecommerce-product-view']) ? 'active' : ''}>
                                <div className="nav-item" title="Help" onClick={this.toggleItemCollapse.bind(this, 'ecommerce')}>
                                    <em className="icon-question"></em>
                                    <span>Help</span>
                                </div>
                                <Collapse in={this.state.collapse.ecommerce}>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Help</li>


                                        <li className={this.routeActive('help') ? 'active' : ''}>
                                            <Link to="help" title="FAQs">
                                                <span>FAQs</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                        
                            <li className={this.routeActive(['feedback', 'forum-topics', 'forum-discussion']) ? 'active' : ''}>
                                <div className="nav-item" title="Feedback" onClick={this.toggleItemCollapse.bind(this, 'forum')}>
                                    <em className="icon-speech"></em>
                                    <span>Feedback</span>
                                </div>
                                <Collapse in={this.state.collapse.forum}>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Feedback</li>
                                        <li className={this.routeActive('feedback') ? 'active' : ''}>
                                            <Link to="feedback" title="Categories">
                                                <span>Feedback</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                        </ul>
                        { /* END sidebar nav */ }
                    </nav>
                </div>
                { /* END Sidebar (left) */ }
            </aside>
            );
    }

}

export default withRouter(Sidebar);

