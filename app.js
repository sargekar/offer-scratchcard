


//get image url

var getUrlParameter = function getUrlParameter(sParam) {
 var orgUrl = window.location.search.substring(1);
  console.log("**orgurl:",orgUrl);
  console.log(sParam=="img",);
  if(sParam=="img" && orgUrl.includes("staging.yellowmessenger.com")){
    console.log("banner case:", orgUrl.replace("img=",""))
    return orgUrl.replace("img=","")
  }

  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      console.log("***params:",sParameterName);

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }      
  }
};
var imgUrl = getUrlParameter("img");
console.log(imgUrl,'imgUrl:')
var offerUrl =  decodeURIComponent(imgUrl)


console.log(offerUrl,'offerUrl:')

if(!offerUrl){
  bg = './Images/front_new.jpg';
}
else{
  bg = offerUrl;
}

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: bg, //`vskdsbdksd`, // Background (image path or hex color).
  fg: `Images/111112.png`, //front_new.jpg`, // Foreground (image path or hex color). Images/front.jpg`
  cursor: "pointer", // Set cursor.
});
