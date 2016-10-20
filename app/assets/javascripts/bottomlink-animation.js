function codepenIn() {
 	
 	var tl = new TimelineMax()
   	baseTime = .75
   	baseEase =  Elastic.easeOut.config(1, 1)
   	banner = $(".banner")

   	tl.to(banner, .5, {right:-30, ease:baseEase})

   	return tl;
} 

function homeLinkIn() {
 	
 	var tl = new TimelineMax()
   	baseTime = .75
   	baseEase =  Elastic.easeOut.config(1, 1)
   	homeLink = $(".home-link")

   	tl.to(homeLink, .5, {right:20, ease:baseEase})

   	return tl;
} 


function codepenOut() {
 	
 	var tl = new TimelineMax()
   	baseTime = .75
   	baseEase =  Elastic.easeOut.config(1, 1)
   	banner = $(".banner")

   	tl.to(banner, .5, {right:-200, ease:baseEase})

   	return tl;
} 

function homeLinkOut() {
 	
 	var tl = new TimelineMax()
   	baseTime = .75
   	baseEase =  Elastic.easeOut.config(1, 1)
   	homeLink = $(".home-link")

   	tl.to(homeLink, .5, {right:-50, ease:baseEase})

   	return tl;
} 