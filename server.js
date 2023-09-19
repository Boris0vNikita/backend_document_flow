const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  //origin: "http://localhost:8081"
  origin: "http://172.21.16.237:8080"
  //172.21.16.237:8080
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//xzz
global.__basedir = __dirname;
const initRoutes = require("./routes");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my document flow." });
});
require('./routes/view_info_work_doc.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/document.routes')(app);
require('./routes/work_document.routes')(app);
require('./routes/user_position.routes')(app);
require('./routes/position.routes')(app);
require('./routes/user_update.routes')(app);
require('./routes/history_log.routes')(app);
require('./routes/type_document.routes')(app);
require('./routes/status.routes')(app);
require('./routes/department.routes')(app);

require('./routes/view_user.routes')(app);
require('./routes/work_user.routes')(app);
require('./routes/view_user_work_doc.routes')(app);
require('./routes/view_documents.routes')(app);
require('./routes/view_work_department.routes')(app);
require('./routes/view_user_registr.routes')(app);
require('./routes/view_child_work.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});