var express = require("express");
var bodyParser = require("body-parser");
var {
    ObjectId
} = require("mongodb");
var _ = require("lodash");

var {
    mongoose
} = require("./db/mongoose");
var {
    Todo
} = require("./models/todo");
var {
    User
} = require("./models/user");

const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs);
    }, (err) => {
        res.status(400).send(e);
    })
    console.log(req.body);
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (err) => {
        res.status(400).send(e);
    });
});

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        console.log("Id is not valid");
        return res.status(404).send("ID is incorrect");
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send("Bad Request");
        }

        res.status(200).send({
            todo
        });
    }).catch((e) => {
        res.status(400).send();
    });

});

app.delete("/todos/:id", (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        res.status(404).send("NO item is deleted because id is not found");
    }

    Todo.findOneAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send("Incorrect id");
        }
        res.status(200).send({
            todo
        });
    }).catch((e) => res.status(400).send());

});

app.patch("/todos/:id", (req,res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["text", "completed"]);

    if (!ObjectId.isValid(id)) {
        res.status(404).send("NO item is deleted because id is not found");
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send("No item is updated");
        }
        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send("Bad request");
    })

});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {
    app
};