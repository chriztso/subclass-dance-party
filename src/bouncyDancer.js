var makeBouncyDancer = function(top, left, timeBetweenSteps) {
//MULAN
  
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node.addClass('Mulan'); 
  this.grow();

};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer; 


makeBouncyDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  this.$node.toggle();  
};

makeBouncyDancer.prototype.grow = function() {
  this.$node.animate({
    width: "200px",
    height: "200px",
  }, 3000);
};




// this.$node = $('<img class="dancer1 movable" src="https://www.disneyclips.com/imagesnewb/images/mulan3.png" alt="Mulan"></img>'); 