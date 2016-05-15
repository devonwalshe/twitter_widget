<?php
include('TwitterAPIExchange.php');
header('Content-Type: application/json');
$settings = array(
    'oauth_access_token' => "ACCESS_TOKEN",
    'oauth_access_token_secret' => "ACCESS_SECRET",
    'consumer_key' => "CONSUMER_KEY",
    'consumer_secret' => "CONSUMER_SECRET"
);


$url = 'https://api.twitter.com/1.1/lists/statuses.json';

// https://dev.twitter.com/rest/public/search for documentation on building a query string.
$getfield = '?QUERY_STRING';


$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();   

?>