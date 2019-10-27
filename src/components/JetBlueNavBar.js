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

import EmojiChart from './EmojiChart';
import WordCloud from './WordCloud'
import MainPage from './MainPage'
import BarChart from './BarChart';



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
                        <Nav.Link href="/">Main Page</Nav.Link>
                        <Nav.Link href="/wordcloud">Word Associations</Nav.Link>
                        <Nav.Link href="/emojis">Emoji Analysis</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route exact path="/">
                    <Container>
                    <MainPage />
                    </Container>
                </Route>
                <Route path="/emojis">
                    <Container>
                        <EmojiChart /> 
                    </Container>
                </Route>
                <Route path="/wordcloud">
                    <Container>
                        <WordCloud />
                    </Container>
                </Route>
                </Switch>
            </div>
        </Router>
        );
    }
}

export default JetBlueNavBar;