var tired  = ["https://media0.giphy.com/media/pjh8wRrucp2Diqlyjg/giphy.gif","https://data.whicdn.com/images/54331901/large.jpg","https://media.tenor.com/images/7e006f99f443a499781533fa4f191578/tenor.gif"];
var hungry = ["https://data.whicdn.com/images/150265315/large.jpg", "https://media1.tenor.com/images/18a8a53a8a346d4d4d19fda00b461580/tenor.gif?itemid=5604774","https://media0.giphy.com/media/3o6Zt1CbqzTd36KXYY/200w.webp?cid=790b76115cd6230879454e4551ff3e5e&rid=200w.webp"];
var happy = ["https://media.tenor.com/images/717a6ecc14b70390f480c6af48197e99/tenor.gif","https://media.tenor.com/images/da4f74ef46f153d472ab5574a17a8410/tenor.gif","https://media1.tenor.com/images/f71006041a2c03e6d60bb0b9a3c61748/tenor.gif?itemid=3393652"];
var sad = ["https://media.tenor.com/images/056ea81cab18ef0e75aba9e3ecf1d1e2/tenor.gif","https://media.tenor.com/images/ee05075b8c718930c8ed1e1ab00f1051/tenor.gif","https://media1.tenor.com/images/df0baabccd3025d1b9f1e7af95ed91be/tenor.gif?itemid=11851653"];
var confused = ["https://media1.tenor.com/images/1875abff01d37aaf9414590569336d46/tenor.gif?itemid=13875986","https://media1.tenor.com/images/9aeb41584a55dd28bb839186119a3368/tenor.gif?itemid=12364382","https://media.tenor.com/images/d23a9bf0f508377979abbcf2d3abb9de/tenor.gif"];
var mad = ["https://media1.tenor.com/images/12b3b5a0fd2ff64136509dea171b1df4/tenor.gif?itemid=11667704","https://media.tenor.com/images/d0b5c3a005299bc843b3699a6ad790c1/tenor.gif","https://media.tenor.com/images/90764c3be7de1331686f8818354a84d9/tenor.gif"];
var love=["https://media.tenor.com/images/0a1652de311806ce55820a7115993853/tenor.gif","https://media1.tenor.com/images/0feacf1898bd3223fa59a32c1c03d5ca/tenor.gif?itemid=12816949","https://media1.tenor.com/images/3264bcc47ee47ebbdd441f9f1d203542/tenor.gif?itemid=12498539"];
var sick=["https://media.tenor.com/images/87e19fe8a74d1542a6bc31652e74d854/tenor.gif","https://media.tenor.com/images/58df66d2579cc90060da7e735039349d/tenor.gif","https://media.tenor.com/images/67a4b0fa15c62fc5b580176836358292/tenor.gif"];
function appear(mood){
    mood.forEach(function(element){
        $(".span").append("<img class='pic' src="+ element +">");
    });
}
function background(color){
    $("body").css("background-color",color);
}
$(".emo").click(function(){
    var mood =$(".mood").val();
    $(".pic").remove();
    $(".text").remove();
    if(mood === "tired"){
        appear(tired);
        background("#b2f8ff");
        underline(".tired");
    } else if(mood === "hungry"){
        appear(hungry);
        background("#ffb24f");
        underline(".hungry");
    }else if(mood ==="mad"||mood === "annoyed"){
        appear(mad);
        background("#ff0000");
        underline(".mad");
    } else if (mood === "happy"){
        appear(happy);
        background("#ffcf68");
        underline(".happy");
    } else if(mood === "in love"||mood === "love"){
        appear(love);
        background("#ff68a9");
        underline(".love");
    }else if(mood ==="sad"){
        appear(sad);
        background("#4f98ff");
        underline(".sad");
    }else if (mood ==="confused"){
        appear(confused);
        background("#e1b5ff");
        underline(".confused");
    } else if(mood==="sick"){
        appear(sick);
        background("#81ff6d");
        underline(".sick");
    } else{
        $(".span").append("<p class='text'>I don't think that is one of the options. Check your spelling.</p>");
    }
    $(".mood").val("");
});
function underline(pick){
    $(pick).css("text-decoration","underline");
}