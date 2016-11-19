$(document).ready(
function(){
    var title = $("#content-flash-title h1");
    var titles = ["Effort", "Creativity", "Solution", "Idea"];

    var current_word = 0;   //从titles[0]即Effort开始
    title.text("");     //设置初始内容为空
    setInterval(function(){
        var old = title.text();
        if (old == titles[current_word]){
            // 应该下一个词了
            current_word = (current_word + 1) % titles.length;
            title.text("");
        } else{
            // 添加一个字母
            title.text(old + titles[current_word][old.length]);
        }
    }, 400);
}
);

