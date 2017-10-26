//user database object
var user = {
    userId:"f93jd",      //string of text and numbers that is appended to address for unique link
    categories:{
        uncategorized:[            //channel Ids the user is subscribed to separated into categories
            "UCjrL1ugI6xGqQ7VEyV6aRAg",
            "UCUcyEsEjhPEDf69RRVhRh4A",
            "UC67f2Qf7FYhtoUIF4Sf29cA"
        ]
    }
};

//content database object                 TODO channel subscriber count
var content = {
    channels:{
        "UCjrL1ugI6xGqQ7VEyV6aRAg": {
            snippet:{   //*From here to line 37, exact same as return from API https://www.googleapis.com/youtube/v3/channels*
                // channelId: "UCjrL1ugI6xGqQ7VEyV6aRAg",  Default place from API call, not stored here on db put pulled as key three lines above
                channelTitle: "BBQ Pit Boys",
                description: "YouTube's and Facebook's #1 Channel for Barbecue and Grilling with 600+ recipes, 360000000 views, and 2000000 subscribers and Likes, the BBQ Pit Boys ...",
                thumbnails: {//Not sure what size to use
                    default: {
                        url:"https://yt3.ggpht.com/-w5MgnW1qxCw/AAAAAAAAAAI/AAAAAAAAAAA/ywS4ukZBIaM/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    high:{
                        url:"https://yt3.ggpht.com/-w5MgnW1qxCw/AAAAAAAAAAI/AAA…ywS4ukZBIaM/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    medium:{
                        url:"https://yt3.ggpht.com/-w5MgnW1qxCw/AAAAAAAAAAI/AAA…ywS4ukZBIaM/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    }
                }
            },
            statistics:{
                subscriberCount:"927972",
                videoCount:"620",
                viewCount:"168949569"
            },
            videos:{
                "0Jykp0GFDAY": {
                    // id:"0Jykp0GFDAY",  Default place from API call, not stored here on db put pulled as key one lines above
                    snippet: {  //**From here to bottom, exact same as return from  'https://www.googleapis.com/youtube/v3/videos'
                        description: "Don't fear the Reaper. Light it up with this classic hot chili pepper cheese burger by the BBQ Pit Boys. It comes with the South Carolina Reaper, known as the hottest pepper on the planet and the Ghost. These burgers are packed with flavor and topped with a Jack Cheese Sauce. Your family and friends will luv 'em.-...Please Subscribe, Fav and Share us. Thanks..!  Are you looking for barbecue and grilling recipes to serve up at your Pit, family picnic, or tailgating party? Then put your Barbecue Shoes on because we're serving up some delicious, moist and tender, and real easy to do cooking on the ol' BBQ grill.↵↵To print out this recipe, or to get your BBQ Pit Boys Pitmasters Certificate, our custom BBQ Pit Boys Old Hickory knife, gifts and more CLICK HERE http://www.bbqpitboys.com/barbecue-store-gifts.↵↵For more information about our Santa Corona Grill used in this video, check out our website here: http://bbqpitboys.com/grill-shop/↵ ↵To purchase our official T-Shirts, Mugs, Aprons, Scarfs, Hoodies, and more shipped to you anywhere in the world CLICK HERE http://www.bbqpitboys.com/barbecue-store-gifts↵↵Cheese Sauce recipe: 8 tablespoons butter, 1/2 cup all-purpose flour, 2 cups whole milk, or more as needed, 1 teaspoon onion powder, 1 teaspoon garlic powder, 24oz. shredded Monterey Jack cheese↵  ↵Become a member of the Pit. Or join a BBQ Pit Boys Chapter, or start your own, now over 15,000 BBQ Pit Boys Chapters formed worldwide. Visit our Website to register http://www.BBQPitBoys.com↵↵Thanks for stopping by the Pit and for your continued support..! --BBQ Pit Boys",
                        publishedAt: "2017-10-21T12:58:06.000Z",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/0Jykp0GFDAY/default.jpg"
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/0Jykp0GFDAY/hqdefault.jpg"
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/0Jykp0GFDAY/mqdefault.jpg"
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/0Jykp0GFDAY/sddefault.jpg"
                            }
                        },
                        title: "Reaper Ghost Cheese Burger recipe by the BBQ Pit Boys"
                    },
                    statistics: {
                        dislikeCount:"99",
                        favoriteCount:"0",
                        likeCount:"3288",
                        viewCount:"91867"
                    }
                }
            }
        },
    },
};


