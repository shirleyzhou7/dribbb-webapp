
function api_request() {
    $.getjson('https://api.dribbble.com/v1/shots/3821382?access_token=5f8acda96311be5321f29c1e9edb2223146d59c7a8072d0b4e9b7c7eddf7174c', 
        function(e){
            $.each(e.data, function(i, val) {                
                db.img[i] = { src: val.images.hidpi, 
                    desc: val.description, 
                    title: val.title, 
                    author: val.user.name}
            })
        console.log(e);
        })
}

$(document).ready(function(){
    // API Call and Image Initiallization
    api_request();
});




