import React, { Component } from 'react';



class MainPage extends Component {
    render() {
        return (
            <>
            <h1>Mining Insights Online:</h1>
            <h2><em>JetBlue Customer Sentiment Prediction and Opinion Mining with Tweets</em></h2>
            <br />
            <div>
            <h2>Our Goal</h2>
            <p>Because JetBlue puts a high emphasis on a customer-centric approach, social media is a great tool for gathering opinions. 
                The algorithms we incorporated were developed to suit the needs of their business. </p><p>JetBlue's 2018 Annual Report stated that they wanted to "bring back
                humanity to air travel". In the same manner, we attempted to incorporate the aspects of humanity that typical Sentiment Analyzers are not able to pick up,
                such as sarcasm and emojis, into the pre-trained and well-developed Sentiment Analysis models.
            </p>
            <h2>How We Built It</h2>
            <p>To collect the tweets relevant to JetBlue, we used the Twitter API and tweepy Python API for sending requests to get the tweets. Then our data
                was stored on a MongoDB database running on a Linux instance using Google Cloud Platform's Compute Engine. </p>
            <p>We also had a Flask API endpoint created to
                make it easier perform data analysis on a Jupyter notebook running locally.
                To perform our data analysis, we had to ensure that our data was cleansed. For this task, we used the following:
                <ul>
                    <li>Kaggle datasets for emoji sentiment and binary sarcasm classifier, imported with pandas</li>
                    <li>nltk library's TweetTokenizer to remove user handles</li>
                    <li>Hashtag to individual words using wordninja</li>
                    <li>TfidfVectorizer and PorterStemmer from sci-kit learn Python package to train sarcasm detection algorithm</li>
                    <li>emojis library to identify emojis</li>
                    <li>matplotlib for data visualization purposes</li>
                </ul>
            </p>
            <p>Our website was developed using create-react-app and our components were built using React-Bootstrap and Google Charts.</p>
            <p>We deployed on the app on Netlify, and it is viewable at <a href="http://mininginsights.online/">http://mininginsights.online</a>!</p>
            </div>
            <br />
            <br />
            </>
        );
    }
}

export default MainPage;