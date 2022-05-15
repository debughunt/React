const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const createUser = () => {
    const newFakeUser ={
        password: faker.word.adjective(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.random.numeric()
    }
    return newFakeUser;
}

const createCompObj = () => {
    const newFakeObj ={
        _id: faker.random.numeric(),
        name: faker.commerce.productName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFakeObj;
}

const newUser = createUser();
const newObj = createCompObj();

const userAndObj = []
userAndObj.push(newUser);
userAndObj.push(newObj);



app.get("/api/users/new", (req, res) => {
    res.json(newUser);
})

app.get("/api/companies/new", (req, res) => {
    // console.log(newObj)
    res.json(newObj);
})

app.get("/api/user/company", (req, res) => {
    res.json(userAndObj);
})











app.listen(port, ()=> console.log(`Listening on port: ${port}`));