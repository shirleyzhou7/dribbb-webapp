// I am using Dribbble API which allows CORS. 
// Dribbble is a platform where designers can share their original work
// displayed as "shots" which are 300x400 snapshots of a design 

// API documentation found here: http://developer.dribbble.com/v1/

function api_request() {
    let access_token = '5f8acda96311be5321f29c1e9edb2223146d59c7a8072d0b4e9b7c7eddf7174c'
    $("#responseArea").html("");
    $.getJSON('https://api.dribbble.com/v1/shots/3840395?access_token='+access_token, 
        function(data,status){
            if (status === "success") parseData(data,1);
        });
    $.getJSON('https://api.dribbble.com/v1/shots/3709382?access_token='+access_token, 
        function(data,status){
            if (status === "success") parseData(data,2);
        });
    $.getJSON('https://api.dribbble.com/v1/shots/3844491?access_token='+access_token, 
        function(data,status){
            if (status === "success") parseData(data,3);
        });
}

function parseData(obj, imgnum){
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
    $("#img"+imgnum).html(image);
}

function local_request() {
    $("#responseArea").html("");
    $.getJSON('data.json', function(data, status) {
        if (status === "success") processLocal(data);
        else { responseArea.innerHTML="Error code " + status;}
    })
}

function processLocal(responseobj){
    var displayText = responseobj.about;
    displayText += "<\/ol>";   
    document.getElementById("responseArea").innerHTML = displayText;
}

//rest of jquery methods down here

$(document).ready(function(){
    // API Call and Image Initiallization
    api_request();

$('#learn_more').hover(function(){
    $(this).css("color", "white");
    $(this).css("background-color", "")}, 
    function(){ 
    $(this).css("color", "black");
    $(this).css("background-color", "#85C1E9")});
$('img').hover(function(){
    $(this).css("border", "0");
})

    
})







