 //this is a reference file for the front-end developers, also used for testing
 function Database(){
    this.change_category_name = function(category_name,new_name){
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                category_name:category_name,
                new_name:new_name,
                action:'change_category_name'
            },
            success:function(data){
                if(data.success){
                    console.log('change category name success', data);
                }else{
                    console.log(data);
                }
            },
            errors:function(data){
                console.log(data['errors']);
            }
        })
    }
    this.delete_categories = function(category_name){
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                category_name:category_name,
                action:'delete_category'
            },
            success:function(data){
                if(data.success){
                    console.log('deleted success', data);
                }else{
                    console.log(data);
                }
            },
            errors:function(data){
                console.log(data['errors']);
            }
        })
    }
    this.delete_ctc = function(youtube_channel_id,category_name){//delele link between category and channel
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                youtube_channel_id: youtube_channel_id,
                category_name: category_name,
                action:'delete_ctc'
            },
            success:function(data){
                if(data.success){
                    console.log('deleted success', data);
                }else{
                    console.log(data);
                }
            },
            errors:function(data){
                console.log(data['errors']);
            }
        })
    }
    this.delete_ctu = function(youtube_channel_id){//delete link between channel and user
        $.ajax({
            url: './script/api_calls_to_db/access_database/access.php',
            method: 'POST',
            dataType: 'JSON',
            data: {
                action: 'delete_ctu',
                youtube_channel_id:youtube_channel_id
            },
            success: function (data) {
                if (data.success){
                    console.log('delete success', data);
                }else{
                   console.log(data);
                }
            },
            errors: function (data) {
                console.log('read error', data);
            }
        })
    }
    this.read_categories_by_user = function(){
        $.ajax({
            url: './script/api_calls_to_db/access_database/access.php',
            method: 'POST',
            dataType: 'JSON',
            data: {
                action: 'read_categories_by_user',
            },
            success: function (data) {
                if (data.success){
                    console.log('read success', data);
                }else{
                   console.log(data);
                }
            },
            errors: function (data) {
                console.log('read error', data);
            }
        })
    }
     this.read_channels_by_user_id = function(){//it'll read channels based on user
         $.ajax({
             url: './script/api_calls_to_db/access_database/access.php',
             method: 'POST',
             dataType: 'JSON',
             data: {
                 action: 'read_channels_by_user_id',
             },
             success: function (data) {
                 if (data.success){
                     console.log('read success', data);
                 }else{
                    console.log(data);
                 }
             },
             errors: function (data) {
                 console.log('read error', data);
             }
         })
     }
    this.read_channels_by_youtube_id = function(youtube_channel_id){
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                youtube_channel_id:youtube_channel_id,
                action:'read_channels_by_youtube_id'
            },
            success:function(data){
                if(data.success){
                    console.log('read data success', data);
                }else{
                    console.log(data);
                }
            },
            errors:function(data){
                console.log(data['errors'], data);
            }
        })
    }
    this.read_video = function(video_title,youtube_channel_array){//not implemented by front end
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                video_title:video_title,
                youtube_channel_array:youtube_channel_array,
                action:'read_video'
            },
            success:function(data){
                if(data.success){
                    console.log('read video success', data);
                }else{
                    console.log('no video',data);
                }
            },
            errors:function(data){
                console.log(data['errors']);
            }
        })
    }
     this.read_videos_by_channel_array = function(channel_id_array,offset){//give u a list of videos bassed on channels, limit 40, can pass in offset
         $.ajax({
             url: './script/api_calls_to_db/access_database/access.php',
             method: 'POST',
             dataType: 'JSON',
             data: {
                 action:'read_videos_by_channel_array',
                 channel_id_array:channel_id_array,
                 offset:offset
             },
             success: function (data) {
                 if (data.success) {
                     console.log('read success', data);
                 }else{
                    console.log(data);
                }
             },
             errors: function (data) {
                 console.log('read error', data);
             }
         })
     }
     this.insert_category = function(youtube_channel_id,category_name){
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                action:'insert_category',
                youtube_channel_id:youtube_channel_id,
                category_name:category_name
            },
            success: function (data) {
                if (data.success) {
                    console.log('insert success', data);
                }else{
                    console.log(data);
                }
            },
            errors: function (data) {
                console.log('insert error', data);
            }
        })
     }
     this.insert_channels_by_youtube_id_php = function(youtube_channel_id){
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                action:'insert_youtube_channel_curl',
                youtube_channel_id:youtube_channel_id
            },
            success: function (data) {
                if (data.success) {
                    console.log('insert success', data);
                }else{
                    console.log(data);
                }
            },
            errors: function (data) {
                console.log('insert error', data);
            }
        })
     }
     this.insert_videos_php = function(youtube_channel_id,page_token){
         $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                action:'insert_videos_curl',
                youtube_channel_id:youtube_channel_id,
                page_token:page_token
            },
            success: function (data) {
                if (data.success) {
                    console.log('insert success', data);
                }else{
                    console.log(data);
                }
            },
            errors: function (data) {
                console.log('insert error', data);
            }
         })
     }
     this.insert_ctc = function(youtube_channel_id,category_name){
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                action:'insert_ctc',
                youtube_channel_id:youtube_channel_id,
                category_name:category_name
            },
            success: function (data) {
                if (data.success) {
                    console.log('insert success', data);
                }else{
                    console.log(data);
                }
            },
            errors: function (data) {
                console.log('insert error', data);
            }
        })
     }
     this.update_videos_by_youtube_id_php = function(youtube_channel_id,last_channel_pull){//get last channel pull from read channels by youtube id
        $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                action:'update_video_list',
                youtube_channel_id:youtube_channel_id,
                last_channel_pull:last_channel_pull
            },
            success: function (data) {
                if (data.success) {
                    console.log('insert success', data);
                }else{
                    console.log(data);
                }
            },
            errors: function (data) {
                console.log('insert error', data);
            }
        })
     }
     this.insert_ctu = function(youtube_channel_id){//create link between user and channel
         $.ajax({
            url:'./script/api_calls_to_db/access_database/access.php',
            method:'post',
            dataType:'JSON',
            data:{
                action:'insert_ctu',
                youtube_channel_id:youtube_channel_id
            },
            success: function (data) {
                if (data.success) {
                    console.log('insert success', data);
                }else{
                    console.log(data);
                }
            },
            errors: function (data) {
                console.log('insert error', data);
            }
         })
     }
}
var access_database = new Database();
