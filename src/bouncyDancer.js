var makeBouncyDancer = function(top, left, timeBetweenSteps) {
//MULAN
  
//var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<img class="dancer1 movable" src="https://www.disneyclips.com/imagesnewb/images/mulan3.png" alt="Mulan"></img>'); 
  this.step();
  this.grow();
  this.setPosition(top,left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
  // this.$node = $('<span class="dancer"></span>');
  //return blinkyDancer;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer; 

// toggle is the blinky effect  
makeBouncyDancer.prototype.step = function() { 
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

makeBouncyDancer.prototype.grow = function() {
  // this.$node.fadeIn(6000, function() { return alert("Mulan WINS!");});
  this.$node.animate({
    width: "400px",
    height: "400px",
  }, 2000);
};
