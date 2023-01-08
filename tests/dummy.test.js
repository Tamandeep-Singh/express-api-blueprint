const request = require('supertest');
const app = require('../src/app');

describe("Test Dummy endpoint", () => {
     it("Should return status 200 and send back a simple JSON response with a timestamp", async () => {
         const response = await request(app).get("/dummy")
         expect(response.statusCode).toEqual(200);
         expect(response.body).toHaveProperty('message');
         expect(response.body).toHaveProperty('timestamp');
     });
});