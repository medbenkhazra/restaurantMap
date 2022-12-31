const fs = require("fs");

const files = [
  "node_modules/@fullcalendar/common/main.js",
  "node_modules/@fullcalendar/daygrid/index.js",
  "node_modules/@fullcalendar/timegrid/index.js",

];

for (const fullCalendarFile of files) {
  fs.readFile(fullCalendarFile, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace("import './main.css';", "");

    fs.writeFile(fullCalendarFile, result, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
}
