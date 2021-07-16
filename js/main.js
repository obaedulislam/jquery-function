$(document).ready(function(){

    $('.hide-btn').click(function(){
        $('#hide').hide(1000);
    });
    /* Hide() function End */

    $('.show-btn').click(function(){
        $('#show').show(1000);
    });
    /* Show() function End */

    $('.toggle-btn').click(function(){
        $('#toggle').toggle(1000);
    });
    /* Toggle() function End */

    $('.flip1').click(function(){
        $('.panel1').slideUp(1500);
    });
    /* SlideUp() function End */

    $('.flip2').click(function(){
        $('.panel2').slideDown(1500);
    });
    /* SlideDown() function End */

    $('.flip3').click(function(){
        $('.panel3').slideToggle(1000);
    });
    /* SlideToggle() function End */

    $('.flip4').click(function(){
        $('.panel4').fadeToggle(3000);
        $('.panel44').fadeToggle(2000);
    });
    /* FadeToggle() function End */

    $('.flip5').click(function(){
        $('.panel5').fadeTo("slow", 0.4);
        $('.panel55').fadeTo("slow", 0.5);
    });
    /* FadeTo() function End */

    $('.animate-btn1').click(function(){
        $('.animate1').animate({
            left: '250px',
            opacity: '0.7',
            height: '150px',
            width: '150px',
        });
    });
    /* Animate() function End */


    $('.animate-btn2').click(function(){
        var anim = $(".animate2");
        anim.animate({height: '200px', opacity:'0.6'}, "slow");
        anim.animate({width: '450px', opacity:'0.8'}, "slow");
        anim.animate({height: '100px', opacity:'0.6'}, "slow");
        anim.animate({width: '100px', opacity:'0.8'}, "slow");
    });
    /* Animate() function End */

    $('.flip6').click(function(){
        $('.panel6').slideDown(1500);
    });
    $('.stop-btn').click(function(){
        $('.panel6').stop();
    });
    /* Stop() Animation Panel End */

    $('.start-btn').click(function(){
        $(".animate3").animate({left: '300px'}, 5000);
        $(".animate3").animate({fontSize: '2rem'}, 5000);
    });
    $('.stop-btn').click(function(){
        $(".animate3").stop();
    });
    $('.stop-all').click(function(){
        $(".animate3").stop(true);
    });
    $('.stop-finish').click(function(){
        $(".animate3").stop(true, true);
    });
    /* Start() Stop() Animate() End */

    $(".text-alert").click(function(){
        alert("Text: " + $("#demo").text());
    });
    $(".html-alert").click(function(){
        alert("HTML: " + $("#demo").html());
    });
    /* Text() & Html() End */ 

    $(".show-val").click(function(){
        alert("Value is: " + $(test1).val());
    });
    /* Val() function End */

    $(".show-href").click(function(){
        alert($("#fb").attr("href"));
    });
    /* Href() function End */

    $(".set-text").click(function(){
        $("#test2").text("Paragraph is setted");
    });
    $(".set-html").click(function(){
        $("#test3").html("<strong>Paragraph is setted by html</strong> ");
    });
    $(".set-value").click(function(){
        $("#test4").val("Web Developer");
    });
    /* text(), html(), and val() function End */

    $(".showon-text").click(function(){
        $("#test5").text(function(i, origText){
            return "Old Text: " + origText + "New Text: Hello World! (Index: " + i +")";
        });
    });
    $(".showon-html").click(function(){
        $("#test6").html(function(i, origText){
            return "Old HTML: " + origText + "New HTML: Hello <b>World!</b>  (Index: " + i +")";
        });
    });
    /* jQuery text() and html() - Set content callback function End */

    $(".append-text").click(function(){
        $('.test7').append(" <b>Appended Text.</b>")
    });
    $(".append-item").click(function(){
        $('ol').append(" <li><b>List item 4</b> </li>");
    });
    /* Append() function End */

    $(".prepend-text").click(function(){
        $('.test8').prepend(" <b>Prepended Text. </b>")
    });
    $(".prepend-item").click(function(){
        $('ol').prepend(" <li><b>Prepended item</b> </li>");
    });
    /* Prepend() function End */

    $(".append-per").click(function(){
        var txt1 = " <br> <br> <p> Text.</p>";
        var txt2 =  $("<p> </p>").text("Text");
        var txt3 = document.createElement("p");
        txt3.innerHTML = "Text.";
        $(".append-three").append(txt1, txt2, txt3);
    });
    /* Append() Several Item */

    $(".insert-bef").click(function(){
        $(".test10").before("<b>Before</b>");
    });
    $(".insert-aft").click(function(){
        $(".test10").after("<b>After</b>");
    });
    /* Before() After() function End */

    $(".remove-elem").click(function(){
        $(".panel7").remove();
    });
    /* Remove() function End */

    $(".empty-div").click(function(){
        $(".panel8").empty();
    });
    /* Empty() function End */
    
    $(".add-class").click(function(){
        $(".col-blu").addClass("blue");
        $(".font").addClass("fon-siz");
    });
    /* addClass() function End */

    $(".remove-class").click(function(){
        $(".col-blu").removeClass("blue");
    });
    /* removeClass() function End */

    $(".set-bg").click(function(){
        $(".p-bg").css({"background-color": "yellow","font-size": "150%"});
    });
    /* css() function End */
    
    $(".dis-dim").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#dimension").width() + "<br>";
        txt += "Height of div: " + $("#dimension").height() + "<br>";
        txt += "Inner width of div: " + $("#dimension").innerWidth() + "<br>";
        txt += "Inner Height of div: " + $("#dimension").innerHeight();
        $("#dimension").html(txt);
    });
    /* innerWidth() & innerHeight() End */

    $(".doc-win").click(function(){
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });
    /* width() & height() End */

    $(".resize-it").click(function(){
        $("#dimension2").width(300).height(200);
    });
    /* width() & height() resize End */

    $(".h2").next().css({"color": "red", "border": "2px solid red"});
    /* next() function End */
    
});
