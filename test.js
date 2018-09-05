var r = require("rethinkdb");

r.connect({db : "music"},function(err,conn){

    
    r.db("music").table("artists").insert({
        name : "thi hue",
        sex : "gay"
      }).run(conn,(err,res)=>{
        conn.close();      
      })

      console.log("abc")
    conn.close();
});

r.connect({db : "music"},function(err,conn){
    
    var a = r.db("music").table("artists").getAll().run(conn,(err,res)=>{
        
    })
    console.log(a)
    conn.close();
});