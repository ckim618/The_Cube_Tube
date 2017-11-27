var clientCategories = {};
var channelIDofCategorySet = "";

function handleChangeCategory(){
    let channelID = $(this).parent().attr("channelId");
    channelIDofCategorySet = channelID;

    //update categoryEditModal

    $("#categoryEditModal").modal("show")
}

function changeCategory(category){
    //ajax calls to remove category

    //ajax calls to insert category

    //front end changes to clientCategories and call renderChannelSelectionDropdown()

}

function handleAddButton() {
    //CALL FUNCTION THAT LOOKS SELECTION LIST AND UPDATES clientSelectedChannelIds and and clientSelectedChannelObjects
    videoObjectsToLoad = [];
    if (browsingMode) {
        clientSelectedChannelIds = [];
        clientSelectedChannelObjects = [];
        compileSelectedChannelsFromDropdown()
    }
    browsingMode = false;

    returnToPageOne();
    clearVideoList();

    let channelID = $(this).parent().attr("channelId");
    channelIDofCategorySet = channelID;
    retrieveInfoFromDB(channelID, true);
    // toastMsg('loading channel videos',1000);

    $('.fa-play-circle-o').remove();
    $('.tdList').removeClass('selectedTd');
    $('#channelSearchModal').modal('hide')
}

function addChannelModal(userLink) {
    if (userLink) {
        let uLink = 'www.thecubetube.com/?user='+userLink;
        const britEyesOnly = $('<span>',{
            'class': 'linkGhost',
            'text': uLink
        }).css({
            position: 'absolute',
            display: 'none'
        });
        $('body').append(britEyesOnly);
        const linkSpan = $('<span>',{
            'class':'linkSpan',
            'text': uLink
        });

        const linkHeaderHiddenXs = $('<h3>').text("Save this link!").addClass("hidden-xs");
        const linkHeaderVisibleXs = $('<h3>').text("Save this link!").addClass("visible-xs");
        const linkDiv = $('<div>',{
            text: 'Use it to get access to your subscribed channels.'
        });

        let button = $('<button>').addClass("btn btn-info btn-lg btn-block").text("CopyLink  ");
        let linkIcon = $('<i>').addClass('fa fa-clipboard fa-lg text-danger');

        button.append(linkIcon).click(()=>{
            clipBoard('linkSpan');
        });
        $('.linkCopyArea').append(linkHeaderHiddenXs, linkHeaderVisibleXs, linkSpan, linkDiv, button);
    }
    $('#userLinkModal').modal('show');
}


function handleBrowseButton() {
    $('.dropdownSettingsPopover').popover('hide');

    browsingMode = true;
    videoObjectsToLoad = [];

    returnToPageOne();
    clearVideoList();

    let channelID = $(this).parent().attr("channelId");
    retrieveInfoFromDB(channelID);
    // toastMsg('loading channel videos',1000);
    $('.fa-play-circle-o').remove();
    $('.tdList').removeClass('selectedTd');
    $('#channelSearchModal').modal('hide')
}

function handleRemoveButton() {
    $('.dropdownSettingsPopover').popover('hide');
    let channelId = $(this).parent().attr("channelId");
    console.log("REMOVING " + channelId);
    access_database.delete_ctu(channelId);
    for (var i = 0; i < clientSubscribedChannelObjects.length; i++) {
        if (clientSubscribedChannelObjects[i].youtube_channel_id === channelId) {
            clientSubscribedChannelObjects.splice(i, 1)
        }
        if (clientSubscribedChannelIds[i] === channelId) {
            clientSubscribedChannelIds.splice(i, 1)
        }
        if (clientSelectedChannelObjects[i].youtube_channel_id === channelId) {
            clientSelectedChannelObjects.splice(i, 1)
        }
        if (clientSelectedChannelIds[i] === channelId) {
            clientSelectedChannelIds.splice(i, 1)
        }
    }
    renderChannelSelectionDropdown();
    loadSelectedChannels();
}
