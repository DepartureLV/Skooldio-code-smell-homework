const request = require("supertest");
const appTotal = require("../app-total");
const total = require("../total");
/* test('total of empty string should be 0', () => {
    expect(total('')).toBe(0);
}) */
describe("Total Test", () => {
  it("should return 2 if input is 1,1", () => {
    expect(total("1,1")).toBe(2);
  });
  it("should return 4 if input is 2,2", () => {
    expect(total("2,2")).toBe(4);
  });
  it("should return 0 if input is empty string", () => {
    expect(total("")).toBe(0);
  });
  it("should return 1 if input is more than 1000", () => {
    expect(total("1,1001")).toBe(1);
  });

  it("POST / => Convert", () => {
    return request(appTotal)
      .post("/total")
      .send({
        values: "1,2",
      })
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body).toEqual(225);
      });
  });

  it("POST /total => item values correct data type check", () => {
    return request(appTotal).post("/total").send({ values: "1,2" }).expect(200);
  });
});
