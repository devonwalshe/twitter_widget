$(document).ready(function() {
  
  // Get tweets and lay them out on the page
  $.getJSON('twitter_widget.php', function(tweets) {
    var tweet_list = tweets
    $.get("./tweet.html", function(response) {
       var tweet_template = response;
       for (i=0; i < tweet_list.length; i++){
         var $div = $("<div>", {id: "tweet-"+i});
         $('#tweets').append($div)

         var tweet = tweet_list[i]
         var status = linkify_entities(tweet)
         var image_url = tweet['user']['profile_image_url']
         var name = tweet['user']['name']
         var handle = "@" + tweet['user']['screen_name']
         var created_at = tweet['created_at']
         var time_rel = moment(created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow();
         $("#tweet-"+i).html(tweet_template)
         $("#tweet-" + i + " .display-name").html(name)
         $("#tweet-" + i + " .twitter-name").html("<a class='name-link' href='http://twitter.com/'"+handle+ " target='_blank'>" + handle+"</a>")
         $("#tweet-" + i + " .status").html(status)
         $("#tweet-" + i + " .image").attr("src", image_url)
         $("#tweet-" + i + " .image-link").attr("href", "http://www.twitter.com/" + handle)
         $("#tweet-" + i + " .timestamp").html(time_rel)
       }
       
       // Slider
       $("#tweets").slick({
         pauseOnHover: true,
         autoplay: true,
         // fade: true,
         mobileFirst: true,
         autoplaySpeed: 5000,
         speed: 1000,
         responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 4,
                 slidesToScroll: 4,
                 infinite: true,
                 dots: true
               }
             },
             {
               breakpoint: 800,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 dots:true
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 dots: false,
                 arrows: true
               }
             },
             {
               breakpoint: 400,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 dots: false,
                 arrows: true
               }
             }
           ]
       });
       
    });
  });
  

  
})
