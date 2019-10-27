import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
//import { TagCloud } from 'react-tagcloud'
import CloudItem from './CloudItem';
import Container from 'react-bootstrap/Container'

const styles = {
    large: {
      fontSize: 60,
      fontWeight: 'bold'
    },
    small: {
      opacity: 0.7,
      fontSize: 16
    }
};

let apiData = {
  "good_words" : {
    "leg" : {
      "count": 12
    },
    "room" : {
      "count":12
    },
    "snacks" : {
      "count":8
    },
  },
  "bad_words": {
    "service" : {
      "count": 7,
      "sentiment": .7
    },
    "delay" : {
      "count":10
    }
  }
};



class WordCloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    

  render() {
    return (
        <Container fluid align-content-center>
        <div style={{'display':'flex', 'flexDirection':'row'}}>
          <div>
            <h1>
              Strengths
            </h1>
        <TagCloud 
        className='tag-cloud'
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          color: () => randomColor({
            hue: 'blue'
          }),
          flex: 1,
          width: this.state.width/2.5, 
          height: this.state.height*0.75
        }}>
        <div
          style={{
            fontFamily: 'serif',
            fontSize: 40,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: randomColor()
          }}>Futurama{console.log('rendering wordcloud')}</div>
        <div style={styles.large}>Transformers</div>
        <div style={styles.large}>Simpsons</div>
        <div style={styles.large}>Dragon Ball</div>
        <div style={styles.large}>Rick & Morty</div>
        <div style={{fontFamily: 'courier'}}>He man</div>
        <div style={{fontSize: 30}}>World trigger</div>
        <div style={{fontStyle: 'italic'}}>Avengers</div>
        <div style={{fontWeight: 200}}>Family Guy</div>
        <div style={{color: 'green'}}>American Dad</div>
        <div className="tag-item-wrapper">
        </div>
        <div>Gobots</div>
        <div>Thundercats</div>
        <div>M.A.S.K.</div>
        <div>GI Joe</div>
        <div>Inspector Gadget</div>
        <div>Bugs Bunny</div>
        <div>Tom & Jerry</div>
        <div>Cowboy Bebop</div>
        <div>Evangelion</div>
        <div>Bleach</div>
        <div>GITS</div>
        <div>Pokemon</div>
        <div>She Ra</div>
        <div>Fullmetal Alchemist</div>
        <div>Gundam</div>
        <div>Uni Taisen</div>
        <div>Pinky and the Brain</div>
        <div>Bobs Burgers</div>
        <div style={styles.small}>Dino Riders</div>
        <div style={styles.small}>Silverhawks</div>
        <div style={styles.small}>Bravestar</div>
        <div style={styles.small}>Starcom</div>
        <div style={styles.small}>Cops</div>
        <div style={styles.small}>Alfred J. Kwak</div>
        <div style={styles.small}>Dr Snuggles</div>
      </TagCloud>
      </div>
      <br />
      <div>
            <h1>
              Weaknesses
            </h1>
      <TagCloud 
        className='tag-cloud'
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          color: () => randomColor({
            hue: 'blue'
          }),
          flex: 1,
          width: this.state.width/2.5, 
          height: this.state.height*0.75
        }}>
        <div
          style={{
            fontFamily: 'serif',
            fontSize: 40,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: randomColor()
          }}>Futurama{console.log('rendering wordcloud')}</div>
        {/* <CloudItem text="Custom item, Hover me!" />
        <CloudItem text="Custom item 2, Hover me!" /> */}
        <div style={styles.large}>Transformers</div>
        <div style={styles.large}>Simpsons</div>
        <div style={styles.large}>Dragon Ball</div>
        <div style={styles.large}>Rick & Morty</div>
        <div style={{fontFamily: 'courier'}}>He man</div>
        <div style={{fontSize: 30}}>World trigger</div>
        <div style={{fontStyle: 'italic'}}>Avengers</div>
        <div style={{fontWeight: 200}}>Family Guy</div>
        <div style={{color: 'green'}}>American Dad</div>
        <div className="tag-item-wrapper">
        </div>
        <div>Gobots</div>
        <div>Thundercats</div>
        <div>M.A.S.K.</div>
        <div>GI Joe</div>
        <div>Inspector Gadget</div>
        <div>Bugs Bunny</div>
        <div>Tom & Jerry</div>
        <div>Cowboy Bebop</div>
        <div>Evangelion</div>
        <div>Bleach</div>
        <div>GITS</div>
        <div>Pokemon</div>
        <div>She Ra</div>
        <div>Fullmetal Alchemist</div>
        <div>Gundam</div>
        <div>Uni Taisen</div>
        <div>Pinky and the Brain</div>
        <div>Bobs Burgers</div>
        <div style={styles.small}>Dino Riders</div>
        <div style={styles.small}>Silverhawks</div>
        <div style={styles.small}>Bravestar</div>
        <div style={styles.small}>Starcom</div>
        <div style={styles.small}>Cops</div>
        <div style={styles.small}>Alfred J. Kwak</div>
        <div style={styles.small}>Dr Snuggles</div>
      </TagCloud>
      </div>
    </div>
    </Container>
    );
  }
}

export default WordCloud;