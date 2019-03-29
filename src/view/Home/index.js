import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import GlobalState from '../../components/state/GlobalState';
import UserContext from '../../components/user/UserContext';


import '../../css/style.css'
import Persons from '../Person'

Home.propTypes = {
    version:  PropTypes.string,
};

function Home(props) {

    const {version} = props;
    function home() {
        return (
            <div>
                <h2>Home</h2>
                <p>v.{version}</p>
            </div>
        );
    }

    return (
        <GlobalState>
            <UserContext.Consumer>
                {
                    userContext => (
                        <React.Fragment>
                            <div className="head">
                                Usuario: {userContext.loggedUser.name}
                            </div>
                        </React.Fragment>
                    )
                }

            </UserContext.Consumer>
            <Router>
                <div className="container">
                    <div className="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/view/pessoas">Pessoas</Link></li>
                            <li><Link to="/view/produtos">Produtos</Link></li>
                            <li><Link to="/view/vendas">Vendas</Link></li>
                            <li><Link to="/view/Relatórios">Relatórios</Link></li>
                        </ul>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={home}/>
                            <Route exact path="/view/pessoas" component={Persons}/>
                            <Route exact path="/view/produtos"/>
                            <Route exact path="/view/vendas"/>
                            <Route exact path="/view/relatorios"/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </GlobalState>
    );
}

export default Home;