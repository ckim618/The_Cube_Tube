var playlistVideoObjectArray = [];


function handleAddToPlaylist(){
    if($(this).parent().parent().hasClass("playlistTd")){
        var videoIdToRemove = $(this).parent().parent().attr("videoID");

        for(var i = 0; i<playlistVideoObjectArray.length; i++){
            if(playlistVideoObjectArray[i].youtube_video_id === videoIdToRemove){
                playlistVideoObjectArray.splice(i, 1)
                resetPlaylistTd();
                return
            }
        }
    }

    var videoIDToAdd = $(this).parent().parent().attr("videoID")
    var channelIDToAdd = $(this).parent().parent().attr("channelID")

    var videoObject = {};
    videoObject.youtube_video_id = videoIDToAdd;
    videoObject.youtube_channel_id = channelIDToAdd;

    playlistVideoObjectArray.push(videoObject);
    $(this).parent().parent().addClass("playlistTd");


    $(this).find("i").toggleClass('fa-plus-square fa-check-square-o')
    $(this).find(".tdPlaylistNum").text(playlistVideoObjectArray.length)
}

function playNextPlaylistVideo(){
    $('.tdTitle i.fa').remove();    
    if(playlistVideoObjectArray.length){
        updateMidNavText();


        var nextVideoIdToLoad = playlistVideoObjectArray[0].youtube_video_id;
        var nextChannelToLoad = playlistVideoObjectArray[0].youtube_channel_id;

        updateVideoInfoPopover(nextVideoIdToLoad);
        updateChannelInfoPopover (nextChannelToLoad);

        if (getAutoPlayValue()) {
            player.loadVideoById(nextVideoIdToLoad);
        } else {
            player.cueVideoById(nextVideoIdToLoad);
        }

        currentlySelectedVideoID = nextVideoIdToLoad;
        $(".tdList").removeClass('selectedTd');
        $('i').removeClass('fa-circle-o-notch fa-spin fa-fw');
        $("[videoid='" + currentlySelectedVideoID + "'] span:first").before('<i>');
        $("[videoid='" + currentlySelectedVideoID + "'] i:first").addClass('fa fa-circle-o-notch fa-spin fa-fw').css({
            "margin-right": '5px',
            'color': 'green'
        });
        $("[videoid='" + currentlySelectedVideoID + "'] .tdPlaylistButton>i").toggleClass('fa-plus-square fa-check-square-o');
        $("[videoid='" + currentlySelectedVideoID + "'] .tdPlaylistNum").text('');

        $("[videoid='" + currentlySelectedVideoID + "']").removeClass('playlistTd').addClass('selectedTd');

        playlistVideoObjectArray.splice(0, 1);
    }
}
