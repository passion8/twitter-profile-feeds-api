# Twitter Profile Feeds API 

##Problem

Twitter recent api [changes](https://dev.twitter.com/docs/api/1.1) forcing everyone to authenticate before accessing twitter feeds. Due to this, front-end plugins which display twitter feeds  are broken .Usually you see image like this . 


##Solution
We can use heroku server and get all feeds.  

## Installation
You have to set environment variables of 

        consumer_key : process.env.consumer_key,
        consumer_secret :  process.env.consumer_secret,
        access_token :  process.env.access_token,
        access_token_secret : process.env.access_token_secret


# WORK IN PROGRES | INCOMPLETE