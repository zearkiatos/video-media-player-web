import thisModule from "../../src/this/thisModule";
describe("Test site for object this", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should evaluate the value into the this", () => {
    const thisValue = thisModule.getThis();

    expect(thisValue).toBeDefined();
    expect(typeof thisValue).toBe("object");
  });

  test("Should return with console  log the with this undefined in strict mode", () => {
    const expectResult = 'whoIsThisStrict: undefined';
    const logSpy = jest.spyOn(console, "log");
    
    thisModule.whoIsThisStrict();

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectResult);
  });

  test("Should return a greeting from object person", () => {
    const expectResult = 'Hi I\'m Gabriel';
    const logSpy = jest.spyOn(console, "log");
    
    thisModule.person.greet();

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectResult);
  });

  test("Should return an exception equal the definition of function greet to another variable", () => {
    const expectResult = 'Cannot read property \'name\' of undefined';
    const logSpy = jest.spyOn(console, "log");
    
    const action = thisModule.person.greet;
    try {
      action();
    }
    catch(ex) {
      expect(logSpy.mock.calls.length).toBe(0);
      expect(ex.message).toBe(expectResult);
    }
  });

  test("Should instance the person prototype class and return a greetings with a name", () => {
    const expectResult = 'My name is Angela';
    const logSpy = jest.spyOn(console, "log");
    
    const angela = new thisModule.Person("Angela");
    angela.greet();

    expect(logSpy.mock.calls.length).toBe(1);
    expect(logSpy.mock.calls[0][0]).toBe(expectResult);
  });
});
