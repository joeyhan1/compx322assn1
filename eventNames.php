<?php
	//first connect to the database 
    require_once('./sampleconnect.php');  //replace with path and name for your connection script

    //create the sql query and send it
    $query = "select * from `events`";
    $result = $con->query($query);
    $count = 1;
    
    //if we get data back display it using a table
    if($result != FALSE) 
    {
        echo "<div id='eventNamesDiv'>";
        echo "<h1 id='eventListHeading'>Event List</h1>";
        echo "<table id ='eventNames'>";
        while($row = $result->fetch()) 
        {
            echo "<tr id=".$count." onclick ='javascript:popup(this.id);'>";
            echo "<td>". $row['name'] . "</td>" ;
            $count = $count + 1;
            echo "</tr>";
        }
        echo "</table>";
        echo "</div>";
    }
?>