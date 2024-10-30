// require("dotenv").config();
// console.log(process.argv);

// const port = process.env.PORT || 3000;
// const dbUrl = process.env.DATABASE_URL;
// const apiKey = process.env.API_KEY;

// console.log(port, dbUrl, apiKey);

// console.log(process.pid);
// console.log(process.exit());

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

wait(3000)
  .then(() => {
    console.log("Waited 3s");
    return wait(2000);
  })
  .then(() => {
    console.log("Waited 3s and 2s");
    return wait(2000);
  })
  .then(() => {
    console.log("Waited 3s and 2s and 1s");
    return wait(1000);
  });

const waitCallback = (time, cb) => {
  setTimeout(() => {
    cb();
  }, time);
};

waitCallback(3000, () => {
  console.log("Callback - Waited 3s");

  waitCallback(2000, () => {
    console.log("Callback - Waited 3s and 2s");
    waitCallback(1000, () => {
      console.log("Callback - Waited 3s and 2s and 1s");
    });
  });
});

const waitT = (t) => {
  setTimeout(() => {
    return "data";
  }, t);
};

const waitAsync = async (time) => {
  const wait1 = await wait(3000);
  console.log("Async await - Waited");
  const wait2 = await wait(2000);
  console.log("Async await - Waited 5s");
  const wait3 = await wait(2000);
  console.log("Async await - Waited 7s");
};

waitAsync();

const data = {
  shooting: 99,
  dribbling: 50,
  jumbing: 40,
};

const { shooting, jumping } = data;
