const express = require("express");
const bodyParser = require("body-parser");

let items = ["Buy food", "Cook food", "Eat food"];

const app = express();
app.set('view engine', 'ejs');
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {


  let today = new Date();
  // var currentDay = today.getDay();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  var day = today.toLocaleDateString("en-Us", options);

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "saturday";
  //     break;
  //   default:
  //     console.log("Error: current day is equal to: " + currentDay);
  //
  // }

  res.render('lists', {
    kindOfDay: day,
    newListItems: items
  });

});

app.post('/', (req, res) => {
  let item = req.body.newItem;
      items.push(item);
  res.redirect("/");
})

app.listen(port, () => {
  console.log("Server is up and running on port 3000");
})
