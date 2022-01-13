//////////////////////// INPUT DATA MANAGEMENT
const fs = require('fs');
// console.log(process.argv);
const fileName = process.argv[2];

let data = [];
let dataInput = [];
try {
  data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (error) {
  console.error(error.message);
}