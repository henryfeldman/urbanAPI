$(document).ready(function(){
    $("#go").click(function(){
        $("#feed").empty();
        var word = $("#selectWord").val();

        console.log(word);
        $.ajax({
            url: "https://api.urbandictionary.com/v0/define?term=" + word,
            dataType: "jsonp",
            success: myCallback
        });
    });


    function myCallback(data){
        // var organizedData = JSON.parse(data);
        // console.log(organizedData);
        $("#feed").append("Word is: " + $("#selectWord").val() + "<br><br>");
        for(var i=0; i<3; i++){
            $("#feed").append("Definition " + (i + 1) + ": " +linkCheck(data.list[i].definition) +"<br><br>");
            $("#feed").append("Example " + (i+1) + ": " + linkCheck(data.list[i].example)+"<br><br>");
            $("#feed").append("<a href = " +data.list[i].permalink + ">Link to Urban Dict</a><br><br>" );

        }

       // "<a href= 'detail.html?artist=" + myData.results[i].artistName + "&song=" + i + "'>" +"More Info" + "</a>"

        console.log(data);

    }

    function linkCheck(str){
        for(var i=0;i<str.length; i++){
            if(str[i]=="]" || str[i]=="[") {
                str = str.slice(0,i) + str.slice(i+1,str.length);
            }
        }return str;
    }
    $("#clear").click(function(){
        $("#feed").empty();
    })


});