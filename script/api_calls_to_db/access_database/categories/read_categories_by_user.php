<?php
//read all categories for a user based on the user session link, called from access 
if(empty($LOCAL_ACCESS)){
    die('no direct access allowed');
}
//check for missing data, exit and output error if anthing is missing
if(empty($_SESSION['user_link'])){
    $output['messages'] = 'no user';
    output_and_exit($output);
}
//provide data from category and channel table
$query = 
    "SELECT
        c.channel_title,
        c.youtube_channel_id,
        ct.category_name
    FROM
        channels AS c
    JOIN
        categories_to_channels AS ctc ON c.channel_id = ctc.channel_id
    JOIN
        categories AS ct ON ct.category_id = ctc.category_id
    WHERE
        ct.user_id = ?
    ORDER BY
        ct.category_name";
if(!($stmt = $conn->prepare($query))){
    $output['errors'][] = 'invalid query at read categories';
    output_and_exit($output);
};
$stmt->bind_param('i',$user_id);
$stmt->execute();
$result = $stmt->get_result();
//output success or fail message
if($result->num_rows>0){
    $output['success']=true;
    while($row = $result->fetch_assoc()){
        $output['data'][] = $row;
    }
}else{
    $output['nothing_to_read'] = true;
}
?>