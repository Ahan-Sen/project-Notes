let express = require("express");
require("dotenv").config();

const app = express();

const connectDB = require("./config/db");
//connect to database
connectDB();

app.use(express.json({ extended: true }));

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/notes", require("./routes/notes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
