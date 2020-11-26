// Function starts
function onStart(){
    window.scrollTo(0, 1);
}
onStart();
// Change class
function change(id){
	$("#menu li span").addClass("without");
	$("#menu a").addClass("to_roll").removeClass("activated");
	$("#menu ."+id+" a").addClass("activated").removeClass("to_roll");
	$("#menu ."+id+" span").removeClass("without").stop().fadeOut(0).fadeIn(1500);
}
var lastId, topMenu = $("#menu"),
topMenuHeight = topMenu.outerHeight()+15,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});
// transition 
var $doc = $("html, body");
	$(".to_roll").click(function() {
    $doc.stop().animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});
// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       change(id);
       event.preventDefault();
    }                   
});