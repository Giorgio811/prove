function send(val) {
  console.log("value is " + val);
}
let i = 2;

function get(multiplier) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      i = i * multiplier;
      let err = false;

      if (err == false) {
        res();
      } else {
        rej("error");
      }
    }, 1000);
  });
}

async function run() {
  await get(5);
  send(i);
}

run();
