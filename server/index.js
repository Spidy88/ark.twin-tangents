const config = require('config');
const express = require('express');
const session = require('express-session');
const connectRedis = require('connect-redis');
const bodyParser = require('body-parser');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const models = require('./models');

const app = express();
const RedisStore = connectRedis(session);
const sessionWare = session({
    secret: config.get('server.secret'),
    store: new RedisStore(config.get('redis')),
    saveUninitialized: false,
    resave: false
});
const steamStrategy = new SteamStrategy(config.get('auth.steam'), userFromSteam);

passport.use(steamStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.use(express.static('dist'));
app.use(bodyParser.json());

app.use(sessionWare);
app.use(verifySession);

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/steam', passport.authenticate('steam', { successRedirect: '/' }));
app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
app.get('/api/me', (req, res) => {
    res.json({ user: req.user || null });
});

module.exports = app;

function verifySession(req, res, next) {
    if (!req.session) {
        return next(new Error('Server is unable to create a session. Please contact an administrator.'));
    }

    next();
}

function userFromSteam(identifier, profile, done) {
    const id = profile.id;
    const name = profile.displayName;
    const avatar = profile.photos[0].value;

    models.User.findOrCreate({
            where: { id },
            defaults: { id, name, avatar }
        })
        .spread((user, created) => {
            if( !created ) {
                user.name = name;
                user.avatar = avatar;
                return user.save();
            }

            return user;
        })
        .then((user) => {
            done(null, user.dataValues);
        })
        .catch((reason) => {
            console.log('Failed userFromSteam: ', reason);
            done(reason);
        });
}

function serializeUser(user, cb) {
    cb(null, user.id);
}

function deserializeUser(userId, cb) {
    models.User.findById(userId)
        .then((user) => {
            cb(null, user);
        })
        .catch((reason) => {
            console.log('Failed to deserialize user: ', reason);
            cb(reason);
        });
}