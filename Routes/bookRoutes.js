var express = require('express');

//gets the book model from the server.js when requiring the route
var routes = function (Book) {
    var bookRouter = express.Router();

    bookRouter.route('/')
        .post(function (req, res) {
            var book = new Book(req.body);

            book.save();
            //console.log(book);
            res.status(201).send(book);
        })
        .get(function (req, res) {

            var query = {};
            //enable the api to only filter by genre can add extra filters if needed
            if (req.query.genre) {
                query.genre = req.query.genre;
            }

            Book.find(query, function (err, books) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(books);
                }
            })

        });

    bookRouter.route('/:bookId')
        .get(function (req, res) {

            Book.findById(req.params.bookId, function (err, book) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(book);
                }
            })

        });

    bookRouter.route('/Books/:bookId')
        .get(function (req, res) {


            Book.findById(req.params.bookId, function (err, book) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(book);
            });
        });

    return bookRouter;
};

module.exports = routes;