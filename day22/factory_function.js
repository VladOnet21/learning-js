const robotFactory = (model, mobile) => ({
  model,
  mobile,
  beep() {
    console.log('Beep Boop');
  },
});
const tinCan = robotFactory('P-500', true);
tinCan.beep();
