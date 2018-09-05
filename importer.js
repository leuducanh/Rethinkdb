var r = require("rethinkdb")

r.connect({db : "music"},function(err,conn){
    var artists = require("./data/artists");
    var counter = 1;
    artists.array.forEach(element => {
        r.table("artists").insert(artist).run(conn,(err,res)=>{
            console.log(counter);
            counter++;
        });
    });

    conn.close();
});