const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./database/database");

dotenv.config({ path: "Backend/config/config.env" });
// Path: Backend\server.js

connectDatabase();
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on Port: ${process.env.PORT}`);
});
