require("dotenv").config();
console.log(process.argv);

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

console.log(port, dbUrl, apiKey);

console.log(process.pid);
console.log(process.exit());
