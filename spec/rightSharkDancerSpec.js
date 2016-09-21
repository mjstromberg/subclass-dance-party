describe('RightSharkDancer', function() {

  var rightSharkDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    rightSharkDancer = new RightSharkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rightSharkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineup function that makes its node lines up', function() {
    sinon.spy(rightSharkDancer, 'lineUp');
    rightSharkDancer.lineUp();
    expect(rightSharkDancer.lineUp.called).to.be.true;
  });
});