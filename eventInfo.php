<?php
	//first connect to the database 
    require_once('./sampleconnect.php');  //replace with path and name for your connection script

    $id = $_POST["id"];

    //create the sql query and send it
    $query = "select * from `events` where `id` = '". $id . "'";
    $result = $con->query($query);

    //Displaying the clicked event full information
    if($result != FALSE) 
    {
        echo "<table id ='eventInfo'>";
        while($row = $result->fetch()) 
        {
            echo "<tr>";
            echo "<th>Name</th>";
            echo "<th>Category</th>";
            echo "<th>Month</th>";
            echo "<th>Day</th>";
            echo "<th>Time</th>";
            echo "<th>Cost</th>";
            echo "<th>Location</th>";
            echo "<th>ID</th>";
            echo "<th>Tagged</th>";
            echo "<th>Lat_Lon</th>";
            echo "<th>Notes</th>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>". $row['name'] . "</td>" ;
            echo "<td>". $row['category'] . "</td>" ;
            echo "<td>". $row['month'] . "</td>" ;
            echo "<td>". $row['day'] . "</td>" ;
            echo "<td>". $row['time'] . "</td>" ;
            echo "<td>". $row['cost'] . "</td>" ;
            echo "<td>". $row['location'] . "</td>" ;
            echo "<td id='id'>". $row['id'] . "</td>" ;
            echo "<td>". $row['tagged'] . "</td>" ;
            echo "<td id='location'>". $row['lon_lat'] . "</td>" ;
            echo "<td>". $row['notes'] . "</td>" ;
            echo "</tr>";
        }
        echo "</table>";
    }
?>