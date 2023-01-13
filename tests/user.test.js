const request = require('supertest');
const app = require('../src/app');
const { connectToDB, closeDB} = require('../src/config/mongo_db');

beforeAll(async () => {
    await connectToDB();
});

afterAll(async () => {
    await closeDB();
});

//Test Users endpoint (route = /)
describe("Test User endpoint", () => {
     it("Should return status 200 and send back a simple JSON response with a timestamp", async () => {
         const response = await request(app).get("/api/users");
         expect(response.statusCode).toEqual(200);
         expect(response.body).toHaveProperty('result');
         expect(response.body.result.length === 1)
         expect(response.body.result[0].username === "mock578")
         expect(response.body.result[0].password === "demo")
     });
});