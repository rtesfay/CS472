
$(document).ready(function(){
  addButtonEventListener();
});

function addButtonEventListener() {
  $("#lookup").click(function() {
      let term = $("#word").val();   //.trim();
      console.log(term)
      $.ajax({
          type: "POST",
          url: "/word",
          data: {term: term},
          success: function (response) {
              if(response.data.length >0){
                  var array = Object.entries(response.data); 
                  console.log(response.data);
              console.log(array)
              let results= "";

              for(let i =0; i<array.length; i++){
                  let res = JSON.parse(JSON.stringify(response.data[i]));
                 results+= res.word +" "+ res.wordtype+" " + res.definition + '\n';
                 $("#output").html(results).wrap('<pre />');
              }
              results="";
              }else{
                document.querySelector("#output").innerHTML = 'word not found';
                  response.message = "No such word found";
              }
          }
      });
  });
}














/**let word = $("#word").val();
$(document).ready(function () {
    let word = $("#word").val();
    $("#lookup").click(getWord(word));
  });
  
  function getWord(word) {
    console.log('Here');
    $.ajax({
      url: "/word",  //http://localhost:5500/word?word=
      data: {word: word},
      type: "POST",
      dataType: "json",
      success: getMeaning,
      error: notFound,
    });
  }
  
  function getMeaning(data) {
    removeList();
    console.log('Not Here');
    if (data.length == 0) {
      $(".output").html("<p>WORD NOT FOUND!</p>");
    } else {
      for (let i in data) {
        let output = `<strong>${data[i].wordtype}</strong> ${data[i].definition}`;
        let result = $("<p></p>").html(output);
        $(".output").append(result);
  
      }
    }
  }
  
  function notFound(error) {
  
    console.log(error);
  }
  
  function removeList() {
    console.log('remove');
    $(".output").children().empty();
  }
  */
  // $(document).ready(function () {
  //     $("button").click(function () {
  //       $("ul").children("li").remove();
  //       $.post(
  //         "/",
  //         {
  //           name: $("#enter").val(),
  //         },
  //         function (data, status) {
  //           var txt3 = document.createElement("p");
  //           $(data).each(function (index, element) {
  //             var li = document.createElement("li");
  //             var text = document.createTextNode(element.definition);
  //             li.appendChild(text);
  //             document.getElementById("output").appendChild(li);
  //           });
  //         }
  //       );
  //     });
  //   });*/