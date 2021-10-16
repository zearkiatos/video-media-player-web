import handler from '../../src/proxy/handler';
describe("Test site for proxies", () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });
  
    afterAll(() => {
      jest.restoreAllMocks();
    });
    test("Should intercept a target with a proxy", () => {
      const expectResult = 'reee not found. Maybe you want to said red?';
      const target = {
        red: 'Red',
        green: 'Green',
        blue: 'Blue'
      };
      const logSpy = jest.spyOn(console, "log");
  
      const proxy = new Proxy(target, handler);
  
      expect('Red').toBe(proxy.red);
      expect(proxy.reee).toBeUndefined();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy.mock.calls[0][0]).toBe(expectResult);
    });
  });