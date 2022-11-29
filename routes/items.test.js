process.env.NODE_ENV = "test";

const { beforeEach, afterEach } = require("node:test");
const request = require("supertest");

const app = require("../app");

let items = require("../fakeDb");

let item = { 
    name: "test", price : 3000
}

beforeEach(async()=>{
    items.push(item);
});
afterEach(async()=>{
    items= [];
});