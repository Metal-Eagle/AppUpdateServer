const PORT = 80;
const express = require("express");
const app = express();

app.use("/beta", express.static(process.cwd() + "/src/beta")); //Setup Beta channel http://localhost/beta/win32/RELEASES
app.use("/release", express.static(process.cwd() + "/src/release")); //Setup Master channel  http://localhost/release/win32/RELEASES

app.listen(PORT, () => {
  console.log(`Update server is running on ${PORT}`);
});
