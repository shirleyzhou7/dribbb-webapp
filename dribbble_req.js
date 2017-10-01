// I am using Dribbble API which allows CORS. 
// Dribbble is a platform where designers can share their original work
// displayed as "shots" which are 300x400 snapshots of a design 

// API documentation found here: http://developer.dribbble.com/v1/

$(document).ready(function(){
    // API Call and Image Initiallization
    // $('#local').click(api_request);
    api_request();
    local_request();
});


function api_request() {
    let access_token = '5f8acda96311be5321f29c1e9edb2223146d59c7a8072d0b4e9b7c7eddf7174c'
    $("#responseArea").html("");
    $.getJSON('https://api.dribbble.com/v1/shots/3821382?access_token='+access_token, 
        function(data,status){
            if (status === "success") parseData(data);
        });
}

function local_request() {
    $("#responseArea").html("");
    $.getJSON('data.json', function(data, status) {
    if (status === "success") processLocal(data);
  })
}

// function doLoadLocal() {
//   $("#responseArea").html("");
//   $.getJSON("data.json", function(data, status) {
//     if (status === "success") processResponse(data);
//   })
// }

// function processResponse(responseObject) {
//   var displayText = "There are " + responseObject.employees.length + " employees:<ol>";
//   for (var i = 0; i < responseObject.employees.length; i++) {
//     var employee = responseObject.employees[i];
//     displayText += "<li>" + employee.firstName + " " + employee.lastName + "<\/li>";
//   }
//   displayText += "<\/ol>";
//   $("#responseArea").html(displayText);
// }

function processLocal(responseobj){
    // var responseObject = JSON.parse(responseJSON);
    var displayText = responseObject.about;
    displayText += "<\/ol>";   
    document.getElementById("responseArea").innerHTML = displayText;
}

function parseData(obj){
    var displayTags;
    for (var i =0; i < obj.tags.length; i++) {                
        var tag = obj.tags[i];
        displayTags += "<li>" + tag + "<\/li>";
    };
    var image = '<img src=' + obj.images.hidpi +'>';
    var desc = obj.description;
    console.log(obj);
    $("#descrip").html(desc);
    $("#tags").html(displayTags);
    $("#image").html(image);
}



