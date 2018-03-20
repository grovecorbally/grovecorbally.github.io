// const finger = new Fingerprint().get();
// const form = "<div class='col-md-5'><input class='textbox'placeholder='Enter title' id='food-title'></input><input class='textbox'placeholder='Enter description' id='food-description'><button class='btn btn-success' id='add-food'>add Food</button></input></div>";
// var html = "";
// console.log(finger);
//
// $("#admin-login").on("click", function() {
//   verify(prompt("Enter admin login key"));
// });
//
//
// function verify(code) {
//   if (parseInt(code) === finger) {
//     $("#forms").show();
//     $("#edit").html(form);
//
//     $("#add-food").on("click", function() {
//       html += "<h4>" + $("#food-title").val() + "</h4><p>" + $("#food-description").val() + "</p>";
//       console.log(html);
//     });
//     $("#submit-menu").on("click", function() {
//       ("#offset").html(html);
//     })
//
//   } else {
//     alert("Incorrect code");
//   }
//
//
// }

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  $("#facebook").html("<p>Give us a like on facebook,<a href='https://www.facebook.com/thegrovelimerick/'>The Grove</a>, and stay up to date!</p>");
}
