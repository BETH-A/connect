console.log("connection");

$("#survey-button").on("click", function (event) {
    event.preventDefault();
    console.log("clicked")

    var a1 = $("#q1.form-control").val();
    var a2 = $("#q2.form-control").val();
    var a3 = $("#q3.form-control").val();
    var a4 = $("#q4.form-control").val();
    var a5 = $("#q5.form-control").val();
    var id = $("#user_id").text();
    console.log(id);

    var survey = {
        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,
        a5: a5,
        UserId: id
    };

    console.log(survey);
    // var localSurvey = survey

    // localSurvey.setItem('localSurvey', JSON.stringify(localSurvey));

    // console.log(localSurvey)


    console.log(survey);
    // $.ajax({
    //     type: "POST",
    //     url: "api/addSurvey",
    //     data: survey,
    //     success: function (results) {
    //         console.log("good call");
    //         localStorage.setItem('user_id',);
    //     }
    // });

    $.ajax({
        type: "POST",
        url: "/api/addSurvey",
        data: survey,
        success: function (data) {
            console.log("---------------MESSAGE-----------");
            console.log(data);
            window.location.href = ("/wall/" + data.UserId);
        }
    });
})