
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  $("#twitter, #tripadvisor").hide();
}

if(/chrome/i.test(navigator.userAgent)){
  $("#twitter, #facebook").addClass("chrome");
}
