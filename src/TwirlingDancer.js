var makeTwirlingDancer = function(top, left, timeBetweenSteps) {
//SHAN YU
  
//var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<img class="dancer2 movable" src="https://vignette.wikia.nocookie.net/ammondisney/images/1/17/Shan_Yu.gif/revision/latest?cb=20100712105033" alt="Shan Yu"></img>'); 
  this.step();
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
  // this.$node = $('<span class="dancer"></span>');
  //return blinkyDancer;
};

makeTwirlingDancer.prototype = Object.create(makeDancer.prototype);
makeTwirlingDancer.prototype.constructor = makeTwirlingDancer; 

// toggle is the blinky effect  
makeTwirlingDancer.prototype.step = function() { 
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  // var oldStep = setTimeout(this.step.bind(this), timeBetweenSteps);
  // oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();  
};