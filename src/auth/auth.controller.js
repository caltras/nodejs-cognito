var authService = require('./auth.service');

exports.register = (req, res) => {
    authService.register(req.body, (err, result) => {
        if (err)
            res.send(err);
        res.send(result);
    });
};

exports.login = (req, res) => {
    authService.login(req.body, (err, result) => {
        if (err)
            res.send(err);
        req.session.authorization = result;
        req.session.save( () => {
            res.redirect('/dashboard');
        });
    });
};
exports.token = (req, res) => {
    if (req.session.authorization) {
        res.send(req.session.authorization);
    } else {
        authService.login(req.body, (err, result) => {
            if (err)
                res.send(err);
            req.session.authorization = result;
            res.send(req.session.authorization);
        });
    }
};

exports.validateToken = (req, res) => {
    authService.validate(req.body.token, (err, result) => {
        if (err)
            res.send(err.message);
        res.send(result);
    });
};