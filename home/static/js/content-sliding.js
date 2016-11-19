$(document).ready(
function(){
    //alert("HERE");
    
    setInterval(function(){
        $(".works-sliding").each(
            function(index){
                // 拿到当前最左面的图片，向左移动
                // 由于右面的图片紧挨着前面的，所以会跟着移动
                var first = $(this).children().first();
                first.css("margin-left", "-=1px");

                var margin = parseInt(first.css("margin-left"));
                var width = first.width();
                if (margin + width <= 0){
                    // 第一个不可见了，把它放到最后面，即循环播放
                    var new_pic = first.clone();
                    new_pic.css("margin-left", "0px");
                    first.remove();
                    $(this).append(new_pic);
                }
            }
        );
    }, 30);
    
}
);