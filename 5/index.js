module.exports = function navigateJumps(interruptList) {
  const interrupts = interruptList.split(/\n/g).map((interrupt) => parseInt(interrupt, 10));
  let position = 0;
  let jumps = 0;

  // infinite loop until we get an answer... 
  while(position < interrupts.length) {
    const interrupt = interrupts[position];
    interrupts[position] = interrupts[position] + 1;
    position += interrupt;
    jumps++;
  }

  return jumps;
}