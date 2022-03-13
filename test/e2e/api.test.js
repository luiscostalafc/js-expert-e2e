import { jest, expect, test, describe } from "@jest/globals";

import superTest from "supertest";
import Server from "../../src/server.js";

describe("API E2E Test Suite", () => {
  test("GET / - should return an array", async () => {
    const response = await superTest(Server).get("/");
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);

    console.log("text", response.text);
  });
  test("POST / - should save an item and return ok", async () => {
    const response = await superTest(Server).post("/").send({
      nome: "Luis",
      age: 34,
    });
    const expectedResponse = { ok: 1 };
    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
    console.log("text", response.text);
  });
  test("DELETE / - should delete all items and return ok", async () => {
    const response = await superTest(Server).delete("/");
    const expectedResponse = { ok: 1 };
    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
    console.log("text", response.text);
  });
});
