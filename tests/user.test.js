const request = require('supertest');
const app = require('../src/app');

//Test Users endpoint (route = /)
describe("Test User endpoint", () => {
     it("Should return status 200 and send back a simple JSON response with a timestamp", async () => {
         const response = await request(app).get("/api/users")
         expect(response.statusCode).toEqual(200);
         expect(response.body).toHaveProperty('message');
         expect(response.body).toHaveProperty('timestamp');
     });
});