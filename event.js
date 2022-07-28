const event = require("events");
const emitter = new event();

emitter.on("event", (mess1, mess2) => {
  console.log(mess1 + " " + mess2);
});

emitter.emit("event", "messaggio1", "messaggio2");
