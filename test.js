let fs = require("fs");
let files = fs.readdirSync("./public/emotes");

const arr = [];
for (emote of files) {
  let obj = {
    filename: emote,
    code: emote.replace(".png", ""),
    new: false,
  };
  arr.push(obj);
}

let json = JSON.stringify(arr, null, 4);
console.log(json);
fs.writeFile("/emotes.json", json, function (err) {
  console.log(err);
});
