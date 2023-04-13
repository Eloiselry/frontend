
var byline = document.getElementById('byline');   // Find the H2
bylineText = byline.innerHTML;                    // Get the content of the H2
bylineArr = bylineText.split('');                 // Split content into array
byline.innerHTML = '';                            // Empty current content

var span;         // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                  // Loop for every letter
  span = document.createElement("span");          // Create a <span> element
  letter = document.createTextNode(bylineArr[i]); // Create the letter
  if(bylineArr[i] == ' ') {                       // If the letter is a space...
    byline.appendChild(letter);         // ...Add the space without a span
  } else {
    span.appendChild(letter);           // Add the letter to the span
    byline.appendChild(span);           // Add the span to the h2
  }
}


$(window).load(function(){

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
  
    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
    };
  
    var setView = function(view) { universe.removeClass().addClass(view); };
  
    $("#toggle-data").click(function(e) {
      body.toggleClass("data-open data-close");
      e.preventDefault();
    });
  
    $("#toggle-controls").click(function(e) {
      body.toggleClass("controls-open controls-close");
      e.preventDefault();
    });
  
    $("#data a").click(function(e) {
      var ref = $(this).attr("class");
      solarsys.removeClass().addClass(ref);
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });
  
    init();
  
  });

  
  var yoda = $("#yoda").attr("d");

  TweenLite.set("svg", {visibility:"visible"})
  
  var tl = new TimelineMax({repeat:0, delay:4,});
  tl.to(document.body, 1.5, {
    backgroundColor:'#001400',
    ease:Power2.easeInOut
  }, '-=1')