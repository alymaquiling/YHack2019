import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container' 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import TermFreqGraphPage from './TermFreqGraphPage';
import WordCloudPage from './WordCloudPage'

class JetBlueNavBar extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src='/jetblue.png'
                        width="90"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Word Cloud</Nav.Link>
                        <Nav.Link href="/about">Graph</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/about">
                    <Container>
                    <TermFreqGraphPage />
                    </Container>
                </Route>
                <Route path="/">
                <Container>
                    <WordCloudPage />
                </Container>
                </Route>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default JetBlueNavBar;