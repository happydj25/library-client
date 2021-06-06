const express = require('express');
const app = express();
 
// http://localhost:4000/ 으로 접속 시 응답메시지 출력
// router.get('/test', (req,res) => {
//     res.send({ test : "this is test!!"});
// })

// app.get('/', (req, res)=> {
//     res.send('hello world');
// });

app.post('/api/insert', (req, res) => {
    const sqlInsert = ""
    db.query
});

app.listen(4000, () => {
    console.log("running on port 4000")
});
 
module.exports = router;