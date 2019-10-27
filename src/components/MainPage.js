import React, { Component } from 'react';


class MainPage extends Component {
    render() {
        return (
            <>
            <h1>JetBlue Analysis</h1>
            <br />
            <div>
            <h2>Our Goal</h2>
            <p>Because JetBlue puts a high emphasis on a customer-centric approach, social media is a great tool for gathering opinions.</p>
            <p>The algorithms we incorporated were developed to suit the needs of their business. JetBlue's 2018 Annual Report stated that they wanted to "bring back
                humanity to air travel". In the same manner, we attempted to incorporate the aspects of humanity that typical Sentiment Analyzers are not able to pick up,
                such as sarcasm and emojis, into the pre-trained and well-developed Sentiment Analysis models.
            </p>
            </div>
            </>
        );
    }
}

export default MainPage;