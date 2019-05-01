var ONLYONETIME_EXECUTE = null;
window.addEventListener('load', function(){
    document.body.addEventListener('touchstart', function(){
        if (ONLYONETIME_EXECUTE == null) {   
            $(".bg_video").play();
            ONLYONETIME_EXECUTE = 0;
        }
    }, false)
}, false)
