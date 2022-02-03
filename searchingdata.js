const { request, response } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

// endpoint 
app.post("/searchdata", (request,response) => {
    let keyword = request.body.keyword
    let data = [
        {nis : 101, nama :"Rachel", alamat : "pandaan"},
        {nis : 102, nama :"Reyna", alamat : "pandaan"},
        {nis : 103, nama :"Kladya", alamat : "pandaan"},
        {nis : 104, nama :"Dhea", alamat : "tuban"},
        {nis : 105, nama :"Vanisa", alamat : "tuban"},
        {nis : 106, nama :"Caca", alamat : "malang"},
        {nis : 107, nama :"Shiva", alamat : "malang"},
        {nis : 108, nama :"Debi", alamat : "malang"},
        {nis : 109, nama :"Rara", alamat : "malang"},
        {nis : 110, nama :"Zila", alamat : "tangerang"}
    ]

    let found = []
    for (let i = 0; i < data.length; i++) {
        if (keyword == data[i].nis || keyword == data[i].nama || keyword == data[i].alamat) {
            
            found.push({
                nis : data[i].nis,
                nama : data[i].nama,
                alamat : data[i].alamat
            })
        }
        
    }

    return response.json({
        found
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})