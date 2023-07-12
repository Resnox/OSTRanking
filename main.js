require("dotenv").config()

const express = require("express");
const session = require("express-session")
const passport = require("passport")
const MySQLStore = require("express-mysql-session")(session)

const dboption = {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 8
};

const pool = require("mariadb").createPool(dboption)

require("./models/dbinit")(pool).then(() => {
    console.log("Server starting...");

    const app = express();

    app.set("view engine", "ejs");
    app.set("database pool", pool);

    app.use(session({
        secret: process.env.SESSION_SECRET.split(' '),
        store: new MySQLStore(dboption),
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge: 1000 * 60 * 60 * 24
        }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.urlencoded({extended: true}));
    require("./controllers/ostrankingcontroller")(app);
    require("./controllers/auth")(app);
    app.use(express.static("public"));

    app.listen(process.env.PORT || 8080);
}, (err) => {
    console.log(`Could not initialize DB : ${err}`);
})