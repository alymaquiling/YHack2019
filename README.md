# Mining Insights Online:
## JetBlue Customer Sentiment Prediction and Opinion Mining with Tweets

## Our Goal
Because JetBlue puts a high emphasis on a customer-centric approach, social media is a great tool for gathering opinions. The algorithms we incorporated were developed to suit the needs of their business.

JetBlue's 2018 Annual Report stated that they wanted to "bring back humanity to air travel". In the same manner, we attempted to incorporate the aspects of humanity that typical Sentiment Analyzers are not able to pick up, such as sarcasm and emojis, into the pre-trained and well-developed Sentiment Analysis models.

## How We Built It
To collect the tweets relevant to JetBlue, we used the Twitter API and tweepy Python API for sending requests to get the tweets. Then our data was stored on a MongoDB database running on a Linux instance using Google Cloud Platform's Compute Engine.

We also had a Flask API endpoint created to make it easier perform data analysis on a Jupyter notebook running locally. To perform our data analysis, we had to ensure that our data was cleansed. For this task, we used the following:
* Kaggle datasets for emoji sentiment and binary sarcasm classifier, imported with pandas
* nltk library's TweetTokenizer to remove user handles
* Hashtag to individual words using wordninja
* TfidfVectorizer and PorterStemmer from sci-kit learn Python package to train sarcasm detection algorithm
* emojis library to identify emojis
* matplotlib for data visualization purposes

Our website was developed using create-react-app and our components were built using React-Bootstrap and Google Charts.

We deployed on the app on Netlify, and it is viewable [here](http://mininginsights.online)!

#### [DevPost page](https://devpost.com/software/mininginsights-online-for-jetblue) can be found here.
