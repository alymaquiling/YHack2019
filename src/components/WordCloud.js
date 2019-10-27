import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
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
          }}>airlines{console.log('rendering wordcloud')}</div>
        <div style={styles.large}>travel</div>
        <div style={styles.large}>jet</div>
        <div style={styles.large}>great </div>
        <div style={styles.large}>aviation</div>
        <div style={{fontFamily: 'courier'}}>bad</div>
        <div style={{fontSize: 30}}>airline</div>
        <div style={{fontStyle: 'italic'}}>av</div>
        <div className="tag-item-wrapper">
        </div>
        <div>travel</div>
        <div>jet</div>
        <div>alaska</div>
        <div>life</div>
        <div>blue</div>
        <div>av</div>
        <div>aviation</div>
        <div>bad</div>
        <div>airline</div>
        <div>another</div>
        <div>flights</div>
        <div>time</div>
        <div>delay</div>
        <div>Southwest</div>
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
          }}>wait{console.log('rendering wordcloud')}</div>
        {/* <CloudItem text="Custom item, Hover me!" />
        <CloudItem text="Custom item 2, Hover me!" /> */}
        <div style={styles.large}>aviation</div>
        <div style={styles.large}>av</div>
        <div style={styles.large}>geek</div>
        <div style={styles.large}>service</div>
        <div style={{fontFamily: 'courier'}}>scheme</div>
        <div style={{fontSize: 30}}>blueprint</div>
        <div style={{fontStyle: 'italic'}}>airline</div>
        <div style={{fontWeight: 200}}>sky</div>
        <div style={{color: 'green'}}>delay</div>
        <div className="tag-item-wrapper">
        </div>
        <div>Alaska</div>
        <div>Norwegian</div>
        <div>nice</div>
        <div>customer</div>
        <div>life</div>
        <div style={styles.small}>hour</div>
        <div style={styles.small}>service</div>
        <div style={styles.small}>first</div>
      </TagCloud>
      </div>
    </div>
    </Container>
    );
  }
}

export default WordCloud;