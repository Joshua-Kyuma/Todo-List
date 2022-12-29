const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

const app = express();
app.set('view engine', 'ejs');
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {

const day= date.getDate();

  res.render('lists', {
    listTittle: day,
    newListItems: items
  });

});

app.post('/', (req, res) => {

const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
      res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  })

app.get('/work', (req, res) => {
  res.render("lists", {
    listTittle: "Work List",
    newListItems: workItems
  });
})

app.get("/about", (req, res) => {
  res.render("about");
})

app.listen(port, () => {
  console.log("Server is up and running on port 3000");
})
