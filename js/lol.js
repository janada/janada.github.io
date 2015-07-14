$(function(){
  var step = 1000/30;

  // start timed loop
  setInterval(update, step);
  function update(){
    // update screen
    var c_x = $( window ).width()/2,
	c_y = $( window ).height()/2;
    // move i0
    $('#i0').width(Date.now()%1000)
    $('#i0').height(Date.now()%1000)
    $('#i0').offset(function(o){
      return { top: c_y-this.width/2, left: c_x-this.height/2 }
    });

    // move i1

  }
})
