<?php
if(empty($LOCAL_ACCESS)){
    die('direct access not allowed');
}
$user_link = $_SESSION['user_link'];
$date_created = date('Y-m-d H:i:s');
$last_modified = $date_created;
$ip_address_at_sign_up = get_client_ip();
function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
if(empty($user_link)){
    $output['errors'] = 'MISSING USERLINK';
}

$stmt = $conn->prepare("INSERT INTO users SET user_link=?, date_created=?, 
ip_address_at_signup=?,last_modified=?");
$stmt->bind_param('ssss',$user_link,$date_created,$ip_address_at_sign_up,$last_modified);
$stmt->execute();

echo("This is the prepared thing");
print_r($stmt);
if(!empty($stmt)){
    echo("Sup");
    if(mysqli_affected_rows($conn)>0){
        $output['success'] = true;
        define('USER_ID',mysqli_insert_id($conn));
        echo("Query successful");
    }
    else{
        $output['errors'][] = 'Unable to insert data';
        output_and_exit($output);
    }
}else{
    $output['errors'][]= 'invalid query';
    output_and_exit($output);
}
?>