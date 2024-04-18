const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const db = require("./config/mysql.js");
const conn =db.init();

app.use(cors())
//
// app.set("port", process.env.PORT || 3030);
// app.set("host", process.env.HOST || "0.0.0.0");
// app.use(
//     cors({
//         origin(req, res) {
//             console.log("접속된 주소: " + req),
//                 -1 == whitelist.indexOf(req) && req
//                     ? res(Error("허가되지 않은 주소입니다."))
//                     : res(null, !0);
//         },
//         credentials: !0,
//         optionsSuccessStatus: 200,
//     })
// );

app.get('/', (req, res) => {
    res.send('메인화면 입니다.');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

app.get("/view", function (req, res) {
    const sql = "select * from user_info where user_id = 519";
    conn.query(sql, function (err, result) {
        if (err) console.log("query is not excuted: " + err);
        else res.send(result);
    });
});