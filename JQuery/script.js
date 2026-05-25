$(document).ready(function () {


    // 1. GET & SET

    $("#showName").click(function () {
        $("#output").text($("#student-name").text());
    });

    $("#changeName").click(function () {
        $("#student-name").text("Dean Ambrose");
    });

    $("#showBio").click(function () {
        $("#output").text($("#student-bio").html());
    });

    $("#getInput").click(function () {
        $("#output").text($("#nickname-input").val());
    });

    $("#setInput").click(function () {
        $("#nickname-input").val("jQuery Pro");
    });



    // 2. CSS CLASSES

    $("#highlightCard").click(function () {
        $("#profile-card").addClass("highlighted");
    });

    $("#removeHighlight").click(function () {
        $("#profile-card").removeClass("highlighted");
    });

    $("#toggleDark").click(function () {
        $("#profile-card").toggleClass("dark-mode");
    });

    $("#toggleRounded").click(function () {
        $("#profile-photo").toggleClass("rounded");
    });



    // 3. CSS METHOD

    $("#redBg").click(function () {
        $("#profile-card").css("background", "#e74c3c");
    });

    $("#resetBg").click(function () {
        $("#profile-card").css("background", "white");
    });



    // 4. HIDE & SHOW

    $("#hidePhoto").click(function () {
        $("#profile-photo").hide("slow");
    });

    $("#showPhoto").click(function () {
        $("#profile-photo").show("slow");
    });

    $("#toggleBio").click(function () {
        $("#student-bio").toggle();
    });


    
    // 5. FADE

    $("#fadeOutCard").click(function () {
        $("#profile-card").fadeOut();
    });

    $("#fadeInCard").click(function () {
        $("#profile-card").fadeIn();
    });

    $("#fade50").click(function () {
        $("#profile-card").fadeTo("slow", 0.5);
    });



    // 6. SLIDE

    $("#slideUp").click(function () {
        $("#skills-list").slideUp();
    });

    $("#slideDown").click(function () {
        $("#skills-list").slideDown();
    });

    $("#slideToggle").click(function () {
        $("#skills-list").slideToggle();
    });



    // 7. ANIMATE

    $("#animateCard").click(function () {
        $("#profile-card")
            .animate({ marginLeft: "200px" }, 1000)
            .animate({ marginLeft: "0px" }, 1000);
    });


    
    // 8. EVENTS
    $("#profile-photo").mouseenter(function () {
        $(this).addClass("shadow");
    });

    $("#profile-photo").mouseleave(function () {
        $(this).removeClass("shadow");
    });

    $("#nickname-input").keypress(function (event) {
        $("#output").text("Pressed Key: " + event.key);
    });

});

