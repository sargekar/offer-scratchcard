
//get image url
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
};

var imgUrl = getUrlParameter("img");
var offerUrl =  decodeURIComponent(imgUrl)

if(!offerUrl){
  bg = 'Images/plOffer.jpg';
}
else{
  bg = offerUrl;
}

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: bg,  // Background (image path or hex color).
  fg: `Images/front_new.jpg`, // Foreground (image path or hex color). Images/front.jpg`
  cursor: "pointer", // Set cursor.
});
