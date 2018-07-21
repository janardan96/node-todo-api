const expect = require("expect");
const request = require("supertest");
const {
    ObjectID
} = require("mongodb");

const {
    app
} = require("./../server");
const {
    Todo
} = require("./../models/todo");

const todos = [{
    _id: new ObjectID(),
    text: "First todos"
}, {
    _id: new ObjectID(),
    text: "Second todos"
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
    console.log(done);
});

describe("POST/todos", () => {
    it("Should create new todo", (done) => {
        var text = "Test todo text";

        request(app)
            .post('/todos')
            .send({
                text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({
                    text
                }).then((todo) => {
                    expect(todo.length).toBe(1);
                    expect(todo[0].text).toBe(text);
                    done()
                }).catch((e) => done(e));
            });

    });

    // it("Should not create with invalid code",(done)=>{
    // request(app)
    // .post("/todos")
    // .send({})
    // .expect(400)
    // .end((err,res)=>{
    //     if(err){ 
    //         return done(err);
    //     }
    //     Todo.find().then((todos)=>{
    //         expect(todos.length).toBe(0);
    //         done();
    //     }).catch((e)=>done(e)); 
    // })
    // });
});

describe("Get/todos", () => {
    it("Should get all todos", (done) => {
        request(app)
            .get("/todos")
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});


describe("Get/todo/:id", () => {
    it("should return todo doc", (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it("should return 404 if todo is not found",(done)=>{
        var hexID=new ObjectID().toHexString();
        request(app)
        .get(`/todos/${hexID}`)
        .expect(404)
        .end(done)
        
    });
    
    it("should return 404 if id is incorrect",(done)=>{
        request(app)
        .get(`/todos/12346465`)
        .expect(404)
        .end(done)
    });

})