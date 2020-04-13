var date = moment().format('MMMM Do YYYY');
var text = $(".description").val();
var saveButton = $(this).attr("class", "saveBtn");

$(".description").addClass("present");
$("#currentDay").text(date);




$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    
    var rowEl = $(this).parent().parent();
    var descriptionEl = rowEl.find('.description');
    var hourEl = rowEl.find(".hour");
    var text = descriptionEl.val();
    var hour = hourEl.text();
    
    console.log(text);
    localStorage.setItem(text, "text");



    if (moment().isAfter(moment().subtract(1, 'h'))) {

        descriptionEl.removeClass("present").addClass("past");

    } else {

        descriptionEl.removeClass("present").addClass("future");

    }

})




