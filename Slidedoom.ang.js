var slidedoom=function(backgrounds,aspectRatioHeight,aspectRatioWidth,slidesgroup,maxSlides,slidespeed,fullscreendoom)
{
(function () {
try
{
    var slidezimple = document.getElementsByClassName("slidezimple");
        var newStyle=document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newStyle);
         var addSlidesStyles = newStyle, slidesStyle,storeStyles = ""; 
         var slidedoom = [], clearSlides, defaultAspectHeight = aspectRatioHeight, defaultAspectWidth = aspectRatioWidth, defaultSlidesGroup = slidesgroup; 
        var slidescontainer = document.getElementsByClassName("slidecontainer"),slides = document.getElementsByClassName("slides"),specificSlidesLength = []; 
         var leftarrow = document.getElementsByClassName("leftarrow"),rightarrow = document.getElementsByClassName("rightarrow");
           var containerLength = slidescontainer.length, togglepos = []; 
	   var fsele='<div style="position:absolute;height:24px;width:24px;bottom:10px;right:10px;" class="fsele">'+
'<div style="position:absolute;top:0px;left:0px;height:6px;width:6px;border-left:3px solid white;border-top:3px solid white;float:left;color:white;">'+
'</div>'+
'<div style="top:0px;right:0px;position:absolute;height:6px;width:6px;border-right:3px solid white;border-top:3px solid white;float:right;">'+
'</div>'+
'<div style="bottom:0px;left:0px;position:absolute;height:6px;width:6px;border-left:3px solid white;border-bottom:3px solid white;float:left;margin-top:30px;">'+
'</div>'+
'<div style="bottom:0px;right:0px;position:absolute;height:6px;width:6px;border-right:3px solid white;border-bottom:3px solid white;float:right;margin-top:30px;">'+
'</div>'+
'</div>';
try
{
fullscreendoom=fullscreendoom;
slidespeed=slidespeed;
}
catch(err)
{
fullscreendoom=false;
slidespeed=0.3;
}
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
           if (document.documentElement.clientWidth < 900) {
            aspectRatioHeight = []; aspectRatioWidth = []; slidesgroup = [];
            for(var i=0;i<slidescontainer.length;i++)
            {
                aspectRatioHeight.push(1);aspectRatioWidth.push(1);slidesgroup.push(1);
            }
        } for (var i = 0; i < maxSlides; i++) { 
            storeStyles += ".slide" + i + "{margin-left:" + (i * 100) + "%;}"; } 
            slidesStyle = document.createTextNode(storeStyles); 
            addSlidesStyles.appendChild(slidesStyle); 
            function setBackgroundSlides() {  var slideZimple=document.getElementsByClassName('slidezimple'),maxSlideCalculated=0;for(var i=0;i<slideZimple.length;i++){if(slideZimple[i].children.length>maxSlideCalculated){maxSlideCalculated=slideZimple[i].children.length;}}console.log('maxSlideCalculated',maxSlideCalculated);if(!((slides.length==backgrounds.length) && maxSlideCalculated==maxSlides)){alert('Check maxSlides variable value, backgrounds array length and total number of slides dom elements are equal');document.write('Check the error');}for (var i = 0; i < slides.length; i++) { if (typeof backgrounds[i] == "string") { slides[i].style.background = backgrounds[i]; } else if (typeof backgrounds[i] == "object") { slides[i].style.background = "url('" + backgrounds[i].name + "') 0% 0%/100% 100% no-repeat"; } } } 
            for (var i = 0; i < containerLength; i++) {
                 specificSlidesLength.push(slidescontainer[i].getElementsByClassName("slides").length); 
                 slidedoom.push(0); 
                 togglepos.push(0); 
		 if(fullscreendoom && fullscreendoom==true)
{		slidescontainer[i].innerHTML=slidescontainer[i].innerHTML+fsele;
(function(){
var togglefs=true;
var sdcontainer=slidescontainer[i];
		document.getElementsByClassName("fsele")[i].addEventListener('click',function(){
	if(togglefs)
openFullscreen(sdcontainer);
else
closeFullscreen();
togglefs=!togglefs;
});
})();
}
                } 
                function recalculate() {
                     for (var i = 0; i < containerLength; i++) {
                          slidescontainer[i].style.height = (document.documentElement.clientHeight / aspectRatioHeight[i]) + "px"; slidescontainer[i].style.width = (100 / aspectRatioWidth[i]) + "%"; for (var j = 0; j < specificSlidesLength[i]; j++) { slidescontainer[i].getElementsByClassName("slides")[j].style.height = (document.documentElement.clientHeight / aspectRatioHeight[i]) + "px"; } } 
                        } recalculate(); function recalculateScrollHeight() {
            var k = 0, slidesContainerCount = 0, finalScrollHeight = 0, slidesContainerIteration = 0, fullContainer = 0;
             for (var i = 0; i < slidesgroup.length; i++) {
                console.log("slidesgroup" + slidesgroup[i]); fullContainer += slidesgroup[i]; if (slidesgroup[i] > 1) {
                    for (var j = 0; j < slidesgroup[i]; j++) {
                        if (slidescontainer[slidesContainerIteration].scrollHeight > finalScrollHeight) { finalScrollHeight = slidescontainer[slidesContainerIteration].scrollHeight; }
                        slidesContainerIteration++; if (j == (slidesgroup[i] - 1)) {
                            for (var k = 0; k < slidesgroup[i]; k++) {
                                slidescontainer[slidesContainerCount].style.height = finalScrollHeight + "px"; slidesContainerCount++;
                            }
                        }
                    }
                }
                else { console.log('fullContainer',fullContainer);slidescontainer[fullContainer - 1].style.height = slidescontainer[fullContainer - 1].scrollHeight + "px"; slidesContainerIteration++; slidesContainerCount++; } finalScrollHeight = 0;
            }
            for (var i = 0; i < slidescontainer.length; i++) { for (var j = 0; j < slidescontainer[i].getElementsByClassName("slides").length; j++) { slidescontainer[i].getElementsByClassName("slides")[j].style.height = slidescontainer[i].scrollHeight + "px"; } } setBackgroundSlides();
        } recalculateScrollHeight();
        function moveslidecommon(val, cid, pos, containerindex) {
            var containerid = cid, stop = val;
            return {
                containers: function () {
                    if (Math.abs(togglepos[containerindex]) != 0 && pos == "left") {
                        if (togglepos[containerindex] == 0) {
                            togglepos[containerindex] = 0;
                        }
                        else {
                            togglepos[containerindex] += 100;
                        }
                    }
                    if (pos == "right") {
                        if (Math.abs(togglepos[containerindex]) == stop) {
                            togglepos[containerindex] = -stop;
                        }
                        else
                            togglepos[containerindex] -= 100;
                    }
                    containerid.style.webkitTransform = "translate(" + togglepos[containerindex] + "%)";
                    containerid.style.webkitTransitionDuration = slidespeed+"s";
                    containerid.style.webkitTransitionTimingFunction = "linear";
                    containerid.style.oTransform = "translate(" + togglepos[containerindex] + "%)";
                    containerid.style.oTransitionDuration = slidespeed+"s";
                    containerid.style.oTransitionTimingFunction = "linear";
                    containerid.style.transform = "translate(" + togglepos[containerindex] + "%)";
                    containerid.style.transitionDuration = slidespeed+"s";
                    containerid.style.transitionTimingFunction = "linear";
                    return togglepos;
                }
            };
        }
        for (var i = 0; i < rightarrow.length; i++) {
            (function () {
                var mscommon = moveslidecommon(((rightarrow[i].parentNode.children[1].getElementsByClassName("slides").length) - 1) * 100, rightarrow[i].parentNode.children[1], "right", i).containers;
                rightarrow[i].addEventListener("click", function () {
                    clearInterval(clearSlides);
                    mscommon();
                });
            })();
        }
        for (var i = 0; i < leftarrow.length; i++) {
            (function () {
                var mscommon = moveslidecommon(((leftarrow[i].parentNode.children[1].getElementsByClassName("slides").length) - 1) * 100, leftarrow[i].parentNode.children[1], "left", i).containers;
                leftarrow[i].addEventListener("click", function () {
                    clearInterval(clearSlides);
                    mscommon();
                });
            })();
        }
        clearSlides = setInterval(function () {
            for (var i = 0; i < containerLength; i++) {
                if (Math.abs(slidedoom[i]) == ((specificSlidesLength[i] - 1) * 100)) {
                    slidedoom[i] = 100;
                }
                slidedoom[i] -= 100;
            }
            for (var i = 0; i < slidezimple.length; i++) {
                slidezimple[i].style.webkitTransform = "translate(" + slidedoom[i] + "%)";
                slidezimple[i].style.webkitTransitionDuration = slidespeed+"s";
                slidezimple[i].style.webkitTransitionTimingFunction = "linear";
                slidezimple[i].style.oTransform = "translate(" + (slidedoom[i]) + "%)";
                slidezimple[i].style.oTransitionDuration = slidespeed+"s";
                slidezimple[i].style.oTransitionTimingFunction = "linear";
                slidezimple[i].style.transform = "translate(" + (slidedoom[i]) + "%)";
                slidezimple[i].style.transitionDuration = slidespeed+"s";
                slidezimple[i].style.transitionTimingFunction = "linear";
            }
        }, 3000);
        var headadjust = document.getElementsByClassName("headadjust");
        function adjustHeader() {
            if(headadjust[0])
            headadjust[1].style.marginTop = headadjust[0].scrollHeight + "px";
        }
        adjustHeader();
        window.addEventListener('resize',function () {
            adjustHeader();
            if (document.documentElement.clientWidth < 900) {
                for (var i = 0; i < containerLength; i++) {
                    specificSlidesLength.push(slidescontainer[i].getElementsByClassName("slides").length); 
                    slidedoom.push(0); 
                    togglepos.push(0); 
                   }
            }
            else {
                aspectRatioHeight = defaultAspectHeight;
                aspectRatioWidth = defaultAspectWidth;
                slidesgroup = defaultSlidesGroup;
            }
            recalculate();
            recalculateScrollHeight();
        });
 }
catch(err)
{
console.log('Kindly check the required parameters for the slide',err);
}
    }
)();
}
module.exports=slidedoom;