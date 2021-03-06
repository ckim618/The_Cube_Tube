//Channel Search by Name
function searchChannelsByName(inputStr) {
    $(".addChannelButton").removeClass("disabled").text("Subscribe");
    let string = inputStr;
    $('.channelSearchInput').val('');
    $('#channelModalSearchBar').val('');
    var promise = {
        then: function (resolve, reject) {
            this.resolve = resolve;
            this.reject = reject;
        }
    };
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        dataType: 'json',
        method: 'get',
        data: {
            key: "AIzaSyAOr3VvEDRdI5u9KGTrsJ7usMsG5FWcl6s",
            q: string,
            type: 'channel',
            part: 'snippet',
            maxResults: 10
        },
        success: function (data) {
            $('#channelSearchModal').modal('show');
            clearChannelResults();
            for (var i = 0; i < data.items.length; i++) {
                let channelListData = "#chSearch-" + (i + 1);
                let chName = channelListData + " .chName";
                let img = channelListData + " img";
                $(channelListData).show();
                $(channelListData).attr("channelId", data.items[i].snippet.channelId);
                $(chName).text(data.items[i].snippet.channelTitle);
                $(img).attr("src", data.items[i].snippet.thumbnails.medium.url);

                if (clientSubscribedChannelIds.includes(data.items[i].snippet.channelId)) {
                    $(channelListData + " .addChannelButton").addClass("disabled").text("Subscribe");
                }
            }
            promise.resolve(data);
        },
        error: function (data) {
            promise.reject('searchChannel by name promise rejected');
        }
    });
    return promise;
}

function renderChannelSearchStats(i) {
    if ($("#chSearch-" + (i + 1) + ">h4>span").text() !== "") {
        const channelListData = "#chSearch-" + (i + 1);
        const chSub = "#chSearch-" + (i + 1) + " .chSub";
        const chDesc = "#chSearch-" + (i + 1) + " .chInfoButton";
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/channels',
            dataType: 'json',
            method: 'get',
            data: {
                key: "AIzaSyAOr3VvEDRdI5u9KGTrsJ7usMsG5FWcl6s",
                id: $(channelListData).attr("channelId"),
                part: 'snippet, statistics'
            },
            success: function (data) {
                const subNumber = parseInt(data.items[0].statistics.subscriberCount);
                const numWithCommas = subNumber.toLocaleString("en-us");
                $(chSub).text(numWithCommas);
                $(chDesc).attr({
                    "data-original-title": data.items[0].snippet.title,
                    "data-content": data.items[0].snippet.description
                });
            },
            error: function (data) {
            }
        });
    }
}

function clearChannelResults() {
    for (var i = 0; i < 10; i++) {
        let channelListData = "#chSearch-" + (i + 1);
        let chName = channelListData + " .chName";
        let img = channelListData + " img";
        let chSub = "#chSearch-" + (i + 1) + " .chSub";
        let chDesc = "#chSearch-" + (i + 1) + " .chInfoButton";
        $(channelListData).attr("channelId", "");
        $(chName).text("");
        $(img).attr("src", "");
        $(chSub).text("");
        $(chDesc).attr({
            "data-original-title": "",
            "data-content": ""
        });
        $(channelListData).css("display", 'none')
    }
}
