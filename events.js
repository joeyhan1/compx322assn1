let getEventNames = () => {

    //set the url to the server-side script
    url = "eventNames.php";
    ajaxRequest("GET", url, "", displayEvent)
}

let getHome = () => {
    document.getElementById("clickedEvent").hidden = true;
    document.getElementById("clickedEventButton").hidden = true;
    document.getElementById("weatherImage").style.display = "none";
    document.getElementById("updateDiv").hidden = true;
    document.getElementById("eventsFull").hidden = true;
    document.getElementById("weather").hidden = true;
    document.getElementById("updateDiv").hidden = true;
    document.getElementById("notes").value = null;
    //set the url to the server-side script
    url = "eventNames.php";
    ajaxRequest("GET", url, "", displayEvent)
}

//call back function which will display all the event list names

let displayEvent = (response) =>{
    
    //put the returned data into the <div> element
    div = document.getElementById("eventsName");
    div.innerHTML = response;
    
}

//Used to get the clicked event id and send it to the eventInfo.php
let popup = (clicked_id)=> {
    //testing code
    //alert("hello" + clicked_id);
    document.getElementById("clickedEvent").hidden = false;
    document.getElementById("clickedEventButton").hidden = false;
    document.getElementById("addFormButton").style.display = "block";
    url = "eventInfo.php";
    data = "id=" + clicked_id;
    ajaxRequest("POST", url, data, displayEventFull);
}

//call back function which will display the clicked event full information
let displayEventFull = (response) =>{
    
    //put the returned data into the <div> element
    div = document.getElementById("eventsFull");
    div.hidden = false;
    div.innerHTML = response;
}

//Used to get the clicked event id and send it to the eventInfo.php
let update = ()=> {
    notes = document.getElementById("notes").value;
    id = document.getElementById("id").innerHTML;
    url = "update.php";
    //Turn the data into JSON
    data = JSON.stringify({id: id,notes: notes});
    // alert(data);
    ajaxRequest("POST", url, data, clickedUpdate);
}

//call back function which will display the clicked event full information
let clickedUpdate = (response) =>{
    alert("Updated");
}

let ajaxRequest = (method, url, data, callback) => {

    //Initialise the XMLHttpRequest Object and the request
    var request = new XMLHttpRequest();
    request.open(method,url);

    //Check for post and add the header
    if(method == "POST"){
        request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    
    //Callback function
    request.onload = function(){
        var response = request.responseText;
        //Set what happens when the request returns successfully
        callback(response);
    }

    //Sending the data
    request.send(data);
}

let getWeather = () => {
    const lon_latArray = document.getElementById("location").innerHTML.split(",");
    //Making 2 decimal lon and lat
    let lat = roundToTwo(lon_latArray[0]);
    let lon = roundToTwo(lon_latArray[1]);
    
    // alert("Latitude: "+lat);
    // alert("Longitude: " + lon);
    let qstring = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=b47854a0521e1aae8aa9387c5b0d7945&units=metric";
    fetch(qstring,{method:'get'})
    .then(response => response.json())
    .then(showWeather);
}

let showWeather = (response) => {
    let weatherIcon ="images/" + response.weather[0].icon + ".png";

    let winfo = "<h1>Current weather in event location:</h1></br>";
    winfo+= response.weather[0].main + ", " + response.main.temp + "c";
    document.getElementById("weather").innerHTML = winfo;
    document.getElementById("weatherImage").src = weatherIcon;
    document.getElementById("weatherImage").style.display = "block";
    document.getElementById("weather").hidden = false;
}
    

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}
console.log(roundToTwo(2.005));

let addForm = () => {
    document.getElementById('updateDiv').hidden = false;
}
