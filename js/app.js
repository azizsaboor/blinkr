var main = function () {
    "use strict";  
    
    var flickr_req = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=masjids&format=json&jsoncallback=?';
    $.getJSON(flickr_req, function (flickr_res) {
         flickr_res.items.forEach(function (photo) {
             var photo_url = photo.media.m;
             var $photo = $('<img>').attr('src', photo_url);
             
             $('#flickr_imgs').append($photo);
         });
    });
};

$(document).ready(main);