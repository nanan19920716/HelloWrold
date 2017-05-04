/**
 * Created by Administrator on 2017/5/1.
 */

define(["jquery","swiper"],function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1000
    });

    $(function(){
        $.ajax({
            type:"get",
            url:"http://localhost:3000/get/",
            success:function(data){
                var html="";
                var ul= $(".sec_head_right .foot ul");
                $.each(data,function(i){
                    console.log(data[i]);
                    var datalist=data[i];
                    var new_time=datalist.lxyz_news_time.split(":");
                    console.log(new_time);
                    html+="<li><a href=''>"+datalist.lxyz_news_content+"</a><span>"+new_time[0].substr(0,10)+"</span></li>" ;

                });
                ul.append(html);
            }
        });

        $.ajax({
            type:"get",
            url:"http://localhost:3000/get/sjjs/",
            success:function(data){
                var html="";
                var ul= $(".sec_con_left .sec_con_left_content ul");
                var ul1= $(".sec_con_right  ul");
                console.log(ul);
                $.each(data,function(i){
                    console.log(data[i]);
                    var datalist=data[i];
                    html+="<li><a href=''>"+datalist.lxyz_sjjs_content+"</a><span>"+datalist.lxyz_sjjs_time+"</span></li>" ;

                });
                ul.append(html);
                ul1.append(html);
            }
        });
        // 1.配置mysql

})

});