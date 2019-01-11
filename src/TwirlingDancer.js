var makeTwirlingDancer = function(top, left, timeBetweenSteps) {
//SHAN YU
  
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node.addClass('ShanYu'); 
};

makeTwirlingDancer.prototype = Object.create(makeDancer.prototype);
makeTwirlingDancer.prototype.constructor = makeTwirlingDancer; 


makeTwirlingDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  this.$node.toggle();  
};


makeTwirlingDancer.prototype.lineUp = function() {
  // this.$node.fadeIn(6000, function() { return alert("Mulan WINS!");});
  this.$node.animate({
    left: 0
  });
};


// this.$node = $('<img class="dancer2 movable" src="https://vignette.wikia.nocookie.net/ammondisney/images/1/17/Shan_Yu.gif/revision/latest?cb=20100712105033" alt="Shan Yu"></img>'); 