module.exports = function(output, direction) {
  switch (direction) {
    case 'up':
      output.up(1);
      output.left(1);
      break;
    case 'down':
      output.down(1);
      output.left(1);
      break;
    default:
      break;
  }
};
