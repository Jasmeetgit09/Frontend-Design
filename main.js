$(document).ready(function(){
    flag=0;
    $(".previous").click(function(){
        if(flag==0)
        {
            $("#c1").css("z-index","999");
            $("#c2").css("z-index","9");
            $("#c3").css("z-index","9");
            $("#c1").css("transform","translateX(400px) scale(1.4)");
            $("#c2").css("transform","translateX(400px) scale(1)");
            $("#c3").css("transform","translateX(-800px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#c3").css("z-index","999");
            $("#c1").css("z-index","9");
            $("#c2").css("z-index","9");
            $("#c3").css("transform","translateX(-400px) scale(1.4)");
            $("#c2").css("transform","translateX(-400px) scale(1)");
            $("#c1").css("transform","translateX(800px)");
            flag=2;

        }
        else if(flag==2)
        {
            $("#c2").css("z-index","999");
            $("#c1").css("z-index","9");
            $("#c3").css("z-index","9");
            $("#c2").css("transform","translateX(0px) scale(1.4)");
            $("#c1").css("transform","translateX(100px) scale(1)");
            $("#c3").css("transform","translateX(-100px)");
            flag=0;

        }
    });
    $(".next").click(function(){
        if(flag==0)
        {
            $("#c1").css("z-index","999");
            $("#c2").css("z-index","9");
            $("#c3").css("z-index","9");
            $("#c1").css("transform","translateX(400px) scale(1.4)");
            $("#c2").css("transform","translateX(400px) scale(1)");
            $("#c3").css("transform","translateX(-800px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#c3").css("z-index","999");
            $("#c1").css("z-index","9");
            $("#c2").css("z-index","9");
            $("#c3").css("transform","translateX(-400px) scale(1.4)");
            $("#c2").css("transform","translateX(-400px) scale(1)");
            $("#c1").css("transform","translateX(800px)");
            flag=2;

        }
        else if(flag==2)
        {
            $("#c2").css("z-index","999");
            $("#c1").css("z-index","9");
            $("#c3").css("z-index","9");
            $("#c2").css("transform","translateX(0px) scale(1.4)");
            $("#c1").css("transform","translateX(100px) scale(1)");
            $("#c3").css("transform","translateX(-100px)");
            flag=0;

        }
    });
})