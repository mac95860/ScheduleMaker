var date = moment().format('MMMM Do YYYY');

$("#currentDay").text(date);

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var text = $(".description").val();
    var saved = $("button").parent().siblings(".description").attr("id");
    localStorage.setItem(saved, text);
});

$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));

function changeColors() {
    var currentHour = moment().hour();
    
    $(".description").each(function () {
        var hour = parseInt($(this).attr("id"));
        if (hour < currentHour) {

            $(this).addClass("past");

        } else if (hour === currentHour) {

            $(this).removeClass("past").addClass("present");

        } else {
            $(this).removeClass("past").removeClass("present").addClass("future");
        }

    });
}

changeColors();






