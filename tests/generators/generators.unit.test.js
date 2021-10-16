import generators from '../../src/generators/generators';
describe("Test site for Generators", () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });
  
    afterAll(() => {
      jest.restoreAllMocks();
    });
    test("Should execute a simple generator", () => {
      const expectResult = 'Generator Start';
      const secondExpectResult = 'Generator End';
      const logSpy = jest.spyOn(console, "log");
  
      const gen = generators.simpleGenerator();
      const generated = gen.next();

      expect(generated.done).toBeFalsy();
      expect(generated.value).toBe(1);
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy.mock.calls[0][0]).toBe(expectResult);
      expect(gen.next().done).toBeTruthy();
      expect(logSpy.mock.calls[1][0]).toBe(secondExpectResult);
    });

    test("Should generate a sequence of Ids", () => {
        const gen = generators.idMakerGenerator();
        const generated = gen.next();
        const secondGenerated = gen.next();
  
        expect(generated.done).toBeFalsy();
        expect(generated.value).toBe(1);
        expect(secondGenerated.done).toBeFalsy();
        expect(secondGenerated.value).toBe(2);
      });

      test("Should generate a sequence of Ids and let us reset the sequence", () => {
        const gen = generators.idMakerWithResetGenerator();
        const generated = gen.next();
        const secondGenerated = gen.next();
        const thirdGenerated = gen.next(true);
  
        expect(generated.done).toBeFalsy();
        expect(generated.value).toBe(1);
        expect(secondGenerated.done).toBeFalsy();
        expect(secondGenerated.value).toBe(2);
        expect(thirdGenerated.done).toBeFalsy();
        expect(thirdGenerated.value).toBe(1);
      });

      test("Should generate execute fibonacci sequence", () => {
        const gen = generators.fibonacciGenerator();
        const generated = gen.next();
        const secondGenerated = gen.next();
        const thirdGenerated = gen.next();
  
        expect(generated.done).toBeFalsy();
        expect(generated.value).toBe(2);
        expect(secondGenerated.done).toBeFalsy();
        expect(secondGenerated.value).toBe(3);
        expect(thirdGenerated.done).toBeFalsy();
        expect(thirdGenerated.value).toBe(5);
      });
  });