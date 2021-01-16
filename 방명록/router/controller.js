var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({extended : false});

var mysql = require("mysql");

var conn_info = {
    host : "localhost",
    port : 3306,
    user : "root",
    password : "whdbrkd1!",
    database : "GuestBookDB"
};

module.exports = function(app){

    app.get("/",function(req,res){
        res.render("index.ejs");
    });

    app.post("/login",urlencodeParser,function(req,res){
        var user_name = req.body.user_name;
        req.session.user_name = user_name;
        
        res.redirect("main");
    });

    app.get("/main", function(req,res){
        
        var conn = mysql.createConnection(conn_info);
        var sql = "select * from GuestBookTable order by guestbook_idx desc";
        conm.query(sql,function(error,rows){
            var render_data = {
            "rows" : rows
            };
        });

        res.render("main.ejs",render_data);
        
    });

    app.post("/save_guestbook",urlencodeParser,function(req,res){
        var user_name= req.session.user_name;
        var content = req.body.content;
        
        var conn = mysql.createConnection(conn_info);
        var sql = "insert into GuestBookTable (guestbook_name, guestbook_content) values(? ,?)";
        var input_data = {user_name,content};
        conn.query(sql,input_data,function(error){
            conn.end;
            res.redirect("main");
        })

        res.send(user_name+" "+content);
    });

};

