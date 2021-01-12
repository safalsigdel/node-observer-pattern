const EventEmitter = require("events").EventEmitter;

class TossCoin extends EventEmitter {
  constructor() {
    super();
    this.label = ["H", "T"];
  }

  tossTheCoin() {
    let randomNumber = Math.floor(10 * Math.random());
    let oddOrEven = randomNumber % 2;
    oddOrEven === 0
      ? this.emit("even", this.label[0])
      : this.emit("odd", this.label[1]);
  }
}

const toss = new TossCoin();
toss
  .on("even", (data) => {
    console.log("Head occured", data);
  })
  .on("odd", (data) => {
    console.log("Tail occured", data);
  })
  .tossTheCoin();
