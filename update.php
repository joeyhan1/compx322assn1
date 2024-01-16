<?php
	//first connect to the database 
    require_once('./sampleconnect.php'); //replace this with the path and name to your connect script

    $jsondata = file_get_contents("php://input");
    $data = json_decode($jsondata, true);
    $notes = $data['notes'];
    $id = $data['id'];


    //create the sql query
    $sql = "update `events` set `notes` = '".$notes . "' where `id` = '". $id . "'";

    echo"<!DOCTYPE html>";
    echo"<html>";
    echo"<head>";
    echo"  <meta charset='UTF-8'>";
    echo"    <title>Updated Event Page".$notes."</title>";
    echo"</head>";
    echo"<body>";

    //run the query and check the result
    if ($con->query($sql)) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record because : " . $con->errorCode();
}
