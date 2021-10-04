import prototypeModule from '../../src/prototype/prototypeModule'
describe("Test site for object prototypes", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should return the greeting", () => {
    const expectedZeldaValue = 'Hi I\'m Zelda';
    const expectedLinkValue = 'Hi I\'m Link';
    const logSpy = jest.spyOn(console, "log");
    
    prototypeModule.zelda.greet();
    prototypeModule.link.greet();

    expect(logSpy.mock.calls.length).toBe(2);
    expect(logSpy.mock.calls[0][0]).toBe(expectedZeldaValue);
    expect(logSpy.mock.calls[1][0]).toBe(expectedLinkValue);
  });

  test("Should return the greeting with Hero", () => {
    const expectedZeldaValue = 'Hi I\'m Zelda';
    const expectedLinkValue = 'Hi I\'m Link';
    const logSpy = jest.spyOn(console, "log");
    const zelda = prototypeModule.Hero('Zelda');
    const link = prototypeModule.Hero('Link');
    
    zelda.greet();
    link.greet();

    expect(logSpy.mock.calls.length).toBe(2);
    expect(logSpy.mock.calls[0][0]).toBe(expectedZeldaValue);
    expect(logSpy.mock.calls[1][0]).toBe(expectedLinkValue);
  });

  test("Should return the greeting with Hero", () => {
    const expectedZeldaValue = 'Hi I\'m Zelda';
    const expectedLinkValue = 'Hi I\'m Link';
    const logSpy = jest.spyOn(console, "log");
    const zelda = prototypeModule.Hero('Zelda');
    const link = prototypeModule.Hero('Link');
    
    zelda.greet();
    link.greet();

    expect(logSpy.mock.calls.length).toBe(2);
    expect(logSpy.mock.calls[0][0]).toBe(expectedZeldaValue);
    expect(logSpy.mock.calls[1][0]).toBe(expectedLinkValue);
  });

  test("Should return the greeting with HeroObjectCreate", () => {
    const expectedZeldaValue = 'I\'m superheroe Zelda';
    const expectedLinkValue = 'I\'m superheroe Link';
    const logSpy = jest.spyOn(console, "log");
    const zelda = prototypeModule.HeroObjectCreate('Zelda');
    const link = prototypeModule.HeroObjectCreate('Link');
    
    zelda.greet();
    link.greet();

    expect(logSpy.mock.calls.length).toBe(2);
    expect(logSpy.mock.calls[0][0]).toBe(expectedZeldaValue);
    expect(logSpy.mock.calls[1][0]).toBe(expectedLinkValue);
  });

  test("Should return the greeting with HeroPrototype", () => {
    const expectedZeldaValue = 'I\'m superheroe Zelda';
    const expectedLinkValue = 'I\'m superheroe Link';
    const logSpy = jest.spyOn(console, "log");
    const zelda = prototypeModule.HeroPrototype('Zelda');
    const link = prototypeModule.HeroPrototype('Link');
    
    zelda.greet();
    link.greet();

    expect(logSpy.mock.calls.length).toBe(2);
    expect(logSpy.mock.calls[0][0]).toBe(expectedZeldaValue);
    expect(logSpy.mock.calls[1][0]).toBe(expectedLinkValue);
  });

  test("Should return the greeting with HeroWithNew", () => {
    const expectedZeldaValue = 'I\'m a Hyrule hero Zelda';
    const expectedLinkValue = 'I\'m a Hyrule hero Link';
    const logSpy = jest.spyOn(console, "log");
    const zelda = new prototypeModule.HeroWithNew('Zelda');
    const link = new prototypeModule.HeroWithNew('Link');
    
    zelda.greet();
    link.greet();

    expect(logSpy.mock.calls.length).toBe(2);
    expect(logSpy.mock.calls[0][0]).toBe(expectedZeldaValue);
    expect(logSpy.mock.calls[1][0]).toBe(expectedLinkValue);
  });

  test("Should return the own of specifict propertie", () => {
    const zelda = new prototypeModule.HeroWithNew('Zelda');
    const link = new prototypeModule.HeroWithNew('Link');
    
    zelda.greet();
    link.greet();

    expect(zelda.hasOwnProperty('name')).toBeTruthy();
    expect(zelda.hasOwnProperty('greet')).toBeFalsy();
    expect(zelda.hasOwnProperty('toString')).toBeFalsy();
  });
});