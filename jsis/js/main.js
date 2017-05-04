
require.config({
    baseUrl:"js",
    paths:{
        "jquery":"libs/jquery-3.2.1",
        "swiper":"libs/swiper-3.3.1.jquery.min",
        "public":"apps/public"
    }
});

require(["jquery","swiper","public"],function ($,swiper,public) {

});