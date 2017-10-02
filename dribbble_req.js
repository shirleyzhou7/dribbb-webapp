// I am using Dribbble API which allows CORS. 
// Dribbble is a platform where designers can share their original work
// displayed as "shots" which are 300x400 snapshots of a design 

// API documentation found here: http://developer.dribbble.com/v1/

//requests images and data of different "shots" from API
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

//grabs only the image, description and tags of each shot
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
    $(".tag_class").html(displayTags);
    $("#img"+imgnum).html(image);
}

//grabs data from data.json (local)
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

    //hide methods
    //keeps things hidden
    $('.less_info').hide();
    $('#descrip').hide();
    $('#tags').hide();

    //keyup, text methods
    //text input for your name
    $("#name_input").keyup(function(){
        $('#name').text($(this).val());
    });

    //hover and css methods
    $('#learn_more').hover(function(){
        $(this).css("color", "white");
        $(this).css("background-color", "")}, 
        function(){ 
        $(this).css("color", "black");
        $(this).css("background-color", "#85C1E9")});
    
    //animate method
    //makes Dribbble bounce
    $('#whee').mouseover(function(){
        $(this).animate({marginTop: "80px"}, 1500)
            .animate({ marginTop: "20px" }, 1000 );
    })
    //mouseenter
    $('#welcome').mouseenter(function(){
        $(this).css("color", "#EC7063");
    });

    $('#welcome').mouseleave(function(){
        $(this).css("color", "black");
    })

    //click, show
    //toggle show/hide excess info
    $('.more_info').click(function(){
        $('.more_info').hide();
        $('.less_info').show();
        $('#descrip').show();
        $('#tags').show();      
    });
    $('.less_info').click(function(){
        $('.more_info').show();
        $('.less_info').hide();
        $('#descrip').hide();
        $('#tags').hide(); 
    })
    //mouseover, toggleClass
    $('.tag_class').mouseover(function(){
        $(this).toggleClass('tag_class');     
    });
    
})







