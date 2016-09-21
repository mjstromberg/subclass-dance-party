describe('LeftSharkDancer', function() {

  var leftSharkDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    leftSharkDancer = new LeftSharkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(leftSharkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a inConfusedMode function that makes its node change the image', function() {
    leftSharkDancer.inConfusedMode();
    expect(leftSharkDancer.$node.html()).to.be.equal('<img src="left-shark-confused.png">');
  });
});