$(document).ready(function () {
  $("#view_button").click(getPicture);
  console.log("apod");
});
function getPicture() {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: {
      api_key: "gyhaJ2GQ5PF58E8w6iESVvscg2en3nrGcOqczI2s",
      date: $("#date").val(),
    },
    dataType: "json",
    success: showPicture,
    error: noPicture,
  });
  console.log("getpic");
}
function showPicture(data) {
  $("#pic").attr("src", data.url);
  $("#title").text(data.title);
}
function noPicture(error) {
  alert(error.responseText);
}
