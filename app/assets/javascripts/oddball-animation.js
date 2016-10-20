function oddballAnimation() {

	var MasterTL = new TimelineMax({paused:true})
			MorphSVGPlugin.convertToPath(".convert")

			letterEase = Elastic.easeOut.config(1, .75)
			letterTime = .5
			green1 = '#00A187'
			green2 = '#7ABE8F'
			green3 = '#BFDD9D'
			yellow = '#FAF39F'
			orange = '#F1623D'
			grey1 = '#1C1D1D'


	$(document).ready( function(){


	var circleFourA = $("#circleFourA")
			circleFourB = $("#circleFourB")

			textFour = $("#textAreaFour")
			headlineFour = $("#headlineFour")

			letterFourA = $("#letterFourA")
			letterFourB = $("#letterFourB")

			ends = $('.circuit-ends')
			lines = $('.circuit-line')
			circuitParts = [lines, ends]
			circuitGroup = $('#circuit-group')


	function circuitOpen() {

		var tl = new TimelineMax()
				
			tl.set(lines, {drawSVG:"100% 100%"})
				.set(ends, {scale:0})
				.set(circuitParts, {visibility:'visible', immediateRender:false})
				.to(circleOneA, .075, {scale:1.2})
				.to(circleOneA, .075, {scale:.9})
				.to(circleOneA, .075, {scale:1})
				.to(ends, .06, {scale:1, ease: Circ.EaseIn})
				.staggerTo(lines, .05, {drawSVG:"0% 100%", ease: Circ.EaseIn}, .025)
				
		return tl;
	}


	function circuitClose() {

		var tl = new TimelineMax()
				
			tl.to(lines, .15, {drawSVG:"100% 100%", ease: Circ.EaseIn})
				.to(ends, .15, {scale:0, ease: Circ.EaseIn})
				.set(circuitParts, {visibility:'hidden'})
				
		return tl;
	}


	function circuitOut() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)

		tl.set(circleFourA, {visibility:'visible', immediateRender:false})
			.set(circleFourB, {visibility:'visible', immediateRender:false})
			.to(circuitGroup, .3, {x:485, ease: baseEase}, "moveOut")
			
		return tl;	
	}


	function circuitOpenTwo() {

		var tl = new TimelineMax()
				finalCirc = $(".final-circle")
				finalLine = $(".final-line")
				
			tl
				.set(circuitParts, {visibility:'visible', immediateRender:false})
				.to(finalCirc, .15, {scale:1, ease: Circ.EaseIn})
				.to(finalLine, .15, {drawSVG:"0% 100%", ease: Circ.EaseIn})
				
		return tl;
	}


	function circuitLetter() {

		var tl = new TimelineMax()

		tl.to(circleFourB, letterTime, { morphSVG:{shape:letterFourB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")
			.to(circleFourA, letterTime, { morphSVG:{shape:letterFourA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
			
		return tl;	
	}

	function strokeColor(group) {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)
				strokes = ('#'+ group +'-group *')

		tl.to(strokes,  .1, {stroke:green2})
			.to(strokes,  .1, {stroke:yellow})
			.to(strokes,  .1, {stroke:green3})
			.to(strokes,  .1, {stroke:green2})
			.to(strokes,  .1, {stroke:yellow})
			.to(strokes,  .1, {stroke:green3})

		return tl;	
	}


	function strokeColorTwo(group) {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)
				strokes = ('#'+ group +'-group *')

		tl.to(strokes,  .1, {stroke:yellow})
			.to(strokes,  .1, {stroke:green2})
			.to(strokes,  .1, {stroke:green3})
			.to(strokes,  .1, {stroke:yellow})
			.to(strokes,  .1, {stroke:green2})
			.to(strokes,  .1, {stroke:green3})

		return tl;	
	}


	function strokeColorThree(group) {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)
				strokes = ('#'+ group +'-group *')

		tl.to(strokes,  .1, {stroke:green3})
			.to(strokes,  .1, {stroke:yellow})
			.to(strokes,  .1, {stroke:green2})
			.to(strokes,  .1, {stroke:green3})
			.to(strokes,  .1, {stroke:yellow})
			.to(strokes,  .1, {stroke:green2})
			 
		return tl;	
	}


	var baseEase = Elastic.easeOut.config(.75, .75)
			circleThreeA = $("#circleThreeA")
			circleThreeB = $("#circleThreeB")

			textThree = $("#textAreaThree")
		
			letterThreeA = $("#letterThreeA")
			letterThreeB = $("#letterThreeB")

			circleThreeC = $("#circleThreeC")
			circleThreeD = $("#circleThreeD")
			fullCompass = $('#compass-group')
			compassDial = $('#compass-dial')
			compassTicks = $('#compass-ticks')
			compassParts = [circleThreeC, compassTicks, compassDial]


	function compassOpen() {

		var tl = new TimelineMax()

		tl.set(circleThreeA, {visibility:'visible', immediateRender:false})
			.set(compassTicks, {visibility:'visible', immediateRender:false})
			.to(circleThreeA, .3, { morphSVG:{shape:compassDial}, ease: baseEase},"compassOut1")
			.to(circleThreeA, .3, {rotation:450, transformOrigin:'50% 50%'},"compassOut2")
				
		return tl;
	}


	function compassClose() {

		var tl = new TimelineMax()
		
		tl.to(circleThreeA, .3, {rotation:0, transformOrigin:'50% 50%'})
				.to(circleThreeA, .3, { morphSVG:{shape:circleThreeB}, ease: baseEase})
				.set(circleThreeA, {visibility:'hidden', immediateRender:false})
				.set(compassTicks, {visibility:'hidden', immediateRender:false})
				.to(circleThreeA, 0, { morphSVG:{shape:circleThreeC}})

		return tl;
	}


	function compassOut() {

		var tl = new TimelineMax()
		baseEase = Elastic.easeOut.config(.75, .75)
		finalCircles = [circleThreeC, circleThreeD]

		tl.set(finalCircles, {visibility:'visible', immediateRender:false})
			.to(fullCompass, .5, {x:323, ease: baseEase});

		return tl;	
	}


	function compassLetter() {

		var tl = new TimelineMax()

		tl.to(circleThreeC, letterTime, { morphSVG:{shape:letterThreeB, shapeIndex:-4},stroke:green1, x:-17, ease: letterEase}, "popOut")
			.to(circleThreeD, letterTime, { morphSVG:{shape:letterThreeA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")

		return tl;	
	}
	var circleTwoA = $("#circleTwoA")
			circleTwoB = $("#circleTwoB")
			circleTwoC = $("#circleTwoC")

			letterTwoA = $("#letterTwoA")
			letterTwoB = $("#letterTwoB")

			textTwo = $("#textAreaTwo")
			headlineTwo = $("#headlineTwo")

			lid = $('#main-lid')
			iris = $('#iris')
			lidOne = $('#lid-one')
			lidTwo = $('#lid-two')
			lidThree = $('#lid-three')
			lidFour = $('#lid-four')
			fullEye = $('#eyeball-group')


	function eyeOpen() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75);

		tl.set(lid, {visibility:'visible', immediateRender:false})
			.set(iris, {visibility:'visible', immediateRender:false})
			.to(lid, .3, { morphSVG:{shape:lidTwo}, ease: baseEase},"moveTwo")
			.to(lid, .3, { morphSVG:{shape:lidThree}, ease: baseEase}, "moveThree")
			.to(iris, .3, {x:15, ease: baseEase}, "moveThree")
		
		return tl;
	}


	function eyeClose() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75);

		tl.to(iris, .2, {x:0, ease: baseEase})
			.to(lid, .1, { morphSVG:{shape:lidFour}, ease: baseEase}, "moveFour")
			.to(lid, .1, { morphSVG:{shape:lidThree}, ease: baseEase}, "moveFive")
			.to(iris, .1, {x:2, ease: baseEase}, "moveFive")
			.to(lid, .1, { morphSVG:{shape:lidFour}, ease: baseEase}, "moveSix")
			.to(iris, .1, {x:0, ease: baseEase}, "moveSix")
			.to(lid, .1, { morphSVG:{shape:lidThree}, ease: baseEase}, "moveSeven")
			.to(lid, .1, { morphSVG:{shape:circleTwoC}, ease: baseEase}, "moveEight")
			.set(lid, {visibility:'hidden', immediateRender:false})
			.set(iris, {visibility:'hidden', immediateRender:false})	
		
		return tl;
	}


	function eyeCloseTwo() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75);

		tl.to(iris, .2, {x:0, ease: baseEase})
			.to(lid, .1, { morphSVG:{shape:lidThree}, ease: baseEase})
			.to(lid, .1, { morphSVG:{shape:circleTwoC}, ease: baseEase})
			.set(lid, {visibility:'hidden', immediateRender:false})
			.set(iris, {visibility:'hidden', immediateRender:false})	
		
		return tl;
	}


	function eyeOut() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)
				eyeParts = [circleTwoA, circleTwoB]

		tl.set(eyeParts, {visibility:'visible', immediateRender:false})
			.to(fullEye, .5, {x:161, ease: baseEase})
			
		return tl;	
	}


	function eyeLetter() {

		var tl = new TimelineMax()

		tl.to(circleTwoA, letterTime, { morphSVG:{shape:letterTwoA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
			.to(circleTwoB, letterTime, { morphSVG:{shape:letterTwoB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")

		return tl;	
	}
	function textOpen(headlineNumber) {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)
				textNumber = $('#textArea'+headlineNumber)

		tl.set(textNumber, {visibility:'visible', x:-100, immediateRender:false})
			.to(textNumber, .3, {x:0, ease: baseEase})

		return tl;
	}


	function textClose(headlineNumber) {

		var tl = new TimelineMax()
				baseEase = Elastic.easeIn.config(.75, .75)
				textNumber = $('#textArea'+headlineNumber)

		tl.to(textNumber, .3, {x:-100, ease: baseEase})		
			.set(textNumber, {visibility:'hidden', immediateRender:false})
			
		return tl;
	}
	var logoGroup = $("#logo-group")

			circleOneA = $("#circleOneA")
			circleOneB = $("#circleOneB")
			letterOne = $("#letterOne")

			subHead = $("#subHead")
			subHeadText = $("#subHeadText")

			downArrow = $("#downArrow")
			
			logoLineA = $("#logoLineA")
			logoLineB = $("#logoLineB")


	function circleDown() {
		var tl = new TimelineMax()
		baseEase = Elastic.easeInOut.config(.75, .75);

		tl.set(circleOneA, {visibility:'visible', immediateRender:false})
			.to(circleOneA, .5, { morphSVG:{shape:circleOneB}, ease: Elastic.easeIn.config(2, .5)});
		
		return tl;
	}


	function logoOpen() {

		var tl = new TimelineMax()
		baseEase = Elastic.easeIn.config(.75, .75)
				
		tl.set(logoLineA, {visibility:"visible"})
			.set(logoLineB, {visibility:"visible"})
		
			.set(logoLineA, {drawSVG:"0% 0%"})
			.set(logoLineB, {drawSVG:"100% 100%"})
			.to(logoLineA, .2, {drawSVG:"100% 0%", stroke:green1, ease: baseEase}, "popOut")
			.to(logoLineB, .2, {drawSVG:"100% 0%", stroke:green1, ease: baseEase}, "popOut")
			.to(circleOneA, .2, {stroke:green1, ease: baseEase}, "popOut")

		return tl;
	}


	function logoClose() {

		var tl = new TimelineMax()
				
		tl.to(logoLineA, .5, {drawSVG:"0% 0%", ease: Power4.easeIn}, "popOut")
			.to(logoLineB, .5, {drawSVG:"100% 100%", ease: Power4.easeIn}, "popOut")
			.set([logoLineA, logoLineB], {visibility:"hidden", immediateRender:false})
			
		return tl;
	}
		

	function logoOut() {

		var tl = new TimelineMax()
		baseEase = Elastic.easeOut.config(.75, .75)
				
		tl.to(logoGroup, .4, { x:93, ease: letterEase})	

		return tl;
	}



	function subheadOut() {

		var tl = new TimelineMax()
		baseEase = Circ.EaseInOut
				
		tl.set(subHead, {visibility:"visible", y:5, opacity:0, transformOrigin:"50% 50%", immediateRender:false})
			.to(subHead, 1.3, {y:0, opacity:1, ease: baseEase})

		return tl;
	}


	function arrowOut() {

		var tl = new TimelineMax()
		baseEase = Circ.EaseIn
				
		tl.set(downArrow, {visibility:"visible", y:-15, opacity:0, transformOrigin:"50% 50%", immediateRender:false})
			.to(downArrow, .3, {y:0, opacity:1, ease: baseEase})
			
		return tl;
	}


	var circleFiveA = $("#circleFiveA")
			circleFiveB = $("#circleFiveB")
			circleFiveC = $("#circleFiveC")
			circleFiveD = $("#circleFiveD")
			circleFiveE = $("#circleFiveE")

			textFive = $("#textAreaFive")
			headlineFive = $("#headlineFive")

			letterFiveA = $("#letterFiveA")
			letterFiveB = $("#letterFiveB")

			targetGroup = $("#target-group")

			ringTwo = $('#ring-two')
			ringThree = $('#ring-three')
			ringFour = $('#ring-four')
			ringFive = $('#ring-five')

			allRings = [circleFiveB, circleFiveC, circleFiveD, circleFiveE]


	function targetOpen() {

		var tl = new TimelineMax()
		baseEase = Bounce.easeOut
				
			tl.to(circleOneA, .075, {scale:1.2})
				.to(circleOneA, .075, {scale:.9})
				.to(circleOneA, .075, {scale:1})
				.set(allRings, {visibility:'visible', immediateRender:false})
				.to(circleFiveB, .3, {morphSVG:{shape:ringTwo}, ease:baseEase}, "ringsIn")
				.to(circleFiveC, .3, {morphSVG:{shape:ringThree}, ease:baseEase}, "ringsIn")
				.to(circleFiveD, .3, {morphSVG:{shape:ringFour}, ease:baseEase}, "ringsIn")
				.to(circleFiveE, .3, {morphSVG:{shape:ringFive}, ease:baseEase}, "ringsIn")
				
				
		return tl;
	}


	function targetClose() {

		var tl = new TimelineMax()
		baseEase = Bounce.easeIn
				
			tl.to(circleFiveB, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.to(circleFiveC, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.to(circleFiveD, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.to(circleFiveE, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.set(allRings, {visibility:'hidden', immediateRender:false})
				
		return tl;
	}


	function targetCloseTwo() {

		var tl = new TimelineMax()
		baseEase = Bounce.easeIn
		otherRings = [circleFiveC, circleFiveD, circleFiveE]
				
			tl.to(circleFiveB, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.to(circleFiveC, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.to(circleFiveD, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.to(circleFiveE, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
				.set(otherRings, {visibility:'hidden', immediateRender:false})
				
		return tl;
	}


	function targetOut() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)

		tl.set(circleFiveA, {visibility:'visible', immediateRender:false})
			.set(circleFiveB, {visibility:'visible', immediateRender:false})
			.to(targetGroup, .5, {x:647, ease: baseEase}, "moveOut")
			
		return tl;	
	}


	function targetLetter() {

		var tl = new TimelineMax()

		tl.set(circleFiveB, {visibility:'visible', immediateRender:false})
			.to(circleFiveB, letterTime, { morphSVG:{shape:letterFiveB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")
			.to(circleFiveA, letterTime, { morphSVG:{shape:letterFiveA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
			
		return tl;	
	}
		var circleSixA = $("#circleSixA")
				circleSixB = $("#circleSixB")
				circleSixC = $("#circleSixC")
				circleSixD = $("#circleSixD")

				allVenn = [circleSixA, circleSixB, circleSixC]

				textSix = $("#textAreaSix")
				headlineSix = $("#headlineSix")

				vennOne = $("#vennOne")
				vennTwo = $("#vennTwo")
				vennThree = $("#vennThree")
				

				vennGroup = $("#venn-group")
			
				letterSixA = $("#letterSixA")
				letterSixB = $("#letterSixB")


	function vennOpen() {

		var tl = new TimelineMax()
		baseEase = Elastic.easeOut.config(.75, .75);
				
			tl.set(allVenn, {visibility:'visible', immediateRender:false})
				.set(circleOneA, {visibility:'hidden', immediateRender:false})
				.to(circleSixA, .4, { morphSVG:{shape:vennOne}, ease: baseEase},"vennOpen")
				.to(circleSixB, .4, { morphSVG:{shape:vennTwo}, ease: baseEase},"vennOpen")
				.to(circleSixC, .4, { morphSVG:{shape:vennThree}, ease: baseEase},"vennOpen")
				.to(vennGroup, .4, {rotation:360, transformOrigin:"50% 50%"}, "vennOpen")
				
		return tl;
	}


	function vennClose() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeIn.config(.75, .75);
				
			tl.to(circleSixA, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
				.to(circleSixB, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
				.to(circleSixC, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
				.to(vennGroup, .4, {rotation:0, transformOrigin:"50% 50%"}, "vennClose")
				.set(allVenn, {visibility:'hidden', immediateRender:false})
				.set(circleOneA, {visibility:'visible', immediateRender:false})
				
		return tl;
	}


	function vennOpenTwo() {

		var tl = new TimelineMax()
		baseEase = Elastic.easeOut.config(.75, .75);
				
			tl.set(allVenn, {visibility:'visible', immediateRender:false})
				.to(circleSixA, .4, { morphSVG:{shape:vennOne}, ease: baseEase},"vennOpen")
				.to(circleSixB, .4, { morphSVG:{shape:vennTwo}, ease: baseEase},"vennOpen")
				.to(circleSixC, .4, { morphSVG:{shape:vennThree}, ease: baseEase},"vennOpen")
				.to(vennGroup, .4, {rotation:360, transformOrigin:"50% 50%"}, "vennOpen")
				
		return tl;
	}


	function vennCloseTwo() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeIn.config(.75, .75);
				
			tl.to(circleSixA, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
				.to(circleSixB, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
				.to(circleSixC, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
				.to(vennGroup, .4, {rotation:0, transformOrigin:"50% 50%"}, "vennClose")
				.set([circleSixC, circleSixD], {visibility:'hidden', immediateRender:false})
				
		return tl;
	}


	function vennOut() {

		var tl = new TimelineMax()
				baseEase = Elastic.easeOut.config(.75, .75)

		tl.set(circleSixA, {visibility:'visible', immediateRender:false})
			.to(vennGroup, .5, {x:809, ease: baseEase})
			
		return tl;	
	}


	function vennLetter() {

		var tl = new TimelineMax()
				
		tl.set([circleSixA, circleSixB], {visibility:'visible', immediateRender:false})
			.to(circleSixB, letterTime, { morphSVG:{shape:letterSixB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")
			.to(circleSixA, letterTime, { morphSVG:{shape:letterSixA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
			
		return tl;	
	}


	MasterTL.add(circleDown())
						
						.add(eyeOpen(), "eyeOut")
						.add(textOpen("Two"), "eyeOut")
						.add(eyeClose(), "eyeIn+=.3")
						.add(textClose("Two"), "eyeIn+=.2")

						.add(compassOpen(), "compassOut")
						.add(textOpen("Three"), "compassOut+=.21")
						.add(compassClose(), "compassIn+=.4")
						.add(textClose("Three"), "compassIn+=.3")

						.add(circuitOpen(), "circuitOut")
						.add(textOpen("Four"), "circuitOut+=.2")
						.add(circuitClose(), "circuitIn+=.6")
						.add(textClose("Four"), "circuitIn+=.5")

						.add(targetOpen(), "targetOut")
						.add(textOpen("Five"), "targetOut+=.3")
						.add(targetClose(), "targetIn+=.5")
						.add(textClose("Five"), "targetIn+=.5")

						.add(vennOpen(), "vennOut")
						.add(textOpen("Six"), "vennOut+=.2")
						.add(vennClose(), "vennIn+=.5")
						.add(textClose("Six"), "vennIn+=.55")

						
						.add(eyeOut(), "allOut")
						.add(eyeOpen(), "allOut")
						
						.add(compassOut(), "allOut")
						.add(compassOpen(), "allOut")
						
						.add(circuitOut(), "allOut")
						.add(circuitOpenTwo(), "allOut")

						.add(targetOut(), "allOut")
						.add(targetOpen(), "allOut")

						.add(vennOut(), "allOut")
						.add(vennOpenTwo(), "allOut")

						.add(eyeCloseTwo(), "allClose")
						.add(compassClose(), "allClose")
						.add(circuitClose(), "allClose")
						.add(targetCloseTwo(), "allClose")
						.add(vennCloseTwo(), "allClose")

						.add(strokeColor("logo"), "allClose")
						.add(strokeColorTwo("eyeball"), "allClose")
						.add(strokeColorThree("compass"), "allClose")
						.add(strokeColor("circuit"), "allClose")
						.add(strokeColorTwo("target"), "allClose")
						.add(strokeColorThree("venn"), "allClose")
						
						.add(logoOpen(), "letters")
						.add(logoOut(), "letters")
						.add(circuitLetter(), "letters")
						.add(eyeLetter(), "letters")
						.add(compassLetter(), "letters")
						.add(targetLetter(), "letters")
						.add(vennLetter(), "letters")

						.add(subheadOut(), "letters+=.7")
						.add(arrowOut(), "+=1")
						// .timeScale(.5)
	          // MasterTL.pause(1);
	          // MasterTL.seek(8).resume();
						
	})

	return MasterTL;
}