import callApplyBind from "../../src/callApplyBind/callApplyBind.js";
describe("Test site for methods call, apply and bind", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should set the this with call method and return a greet with that properties", () => {
    const expectedValue = "Hello. I'm Pedro Capriles";
    const person = {
      name: "Pedro",
      lastname: "Capriles",
    };
    const logSpy = jest.spyOn(console, "log");

    callApplyBind.greet.call(person);

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectedValue);
  });

  test("Should set the this with call method and return a greet with that properties and receive another parameters for method walk", () => {
    const expectedValue = "Pedro walks 1000 meters to north.";
    const person = {
      name: "Pedro",
      lastname: "Capriles",
    };
    const logSpy = jest.spyOn(console, "log");

    callApplyBind.walk.call(person, 1000, "north");

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectedValue);
  });

  test("Should set the this with apply method and return a greet with that properties and receive another parameters for method walk", () => {
    const expectedValue = "Pedro walks 800 meters to norteast.";
    const person = {
      name: "Pedro",
      lastname: "Capriles",
    };
    const logSpy = jest.spyOn(console, "log");
    const params = [800, "norteast"];

    callApplyBind.walk.apply(person, params);

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectedValue);
  });

  test("Should set the this with bind method created a new method and return a greet with that properties", () => {
    const expectedValue = "Hello. I'm Daniel Sánchez";
    const person = {
      name: "Daniel",
      lastname: "Sánchez",
    };
    const logSpy = jest.spyOn(console, "log");

    const personGreeting = callApplyBind.greet.bind(person);
    personGreeting();

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectedValue);
  });

  test("Should set the this with bind method created a new method and return a information with walk and its params", () => {
    const expectedValue = "Daniel walks 1500 meters to west.";
    const person = {
      name: "Daniel",
      lastname: "Sánchez",
    };
    const logSpy = jest.spyOn(console, "log");

    const personWalking = callApplyBind.walk.bind(person);
    personWalking(1500, 'west');

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectedValue);
  });

  test("Should set the this with bind method created a new method pass the params in method bind", () => {
    const expectedValue = "Daniel walks 1500 meters to west.";
    const person = {
      name: "Daniel",
      lastname: "Sánchez",
    };
    const logSpy = jest.spyOn(console, "log");

    const personWalking = callApplyBind.walk.bind(person, 1500, 'west');
    personWalking();

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectedValue);
  });
});
