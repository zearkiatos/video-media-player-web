import functionScope from "../../src/scope/functionScope";
import { sleep } from "../utils/testHelper";
describe("Test site for global scope declarations", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should return the last number for all index when the index declaration is var", async () => {
    const expectResult = 10;
    const logSpy = jest.spyOn(console, "log");

    functionScope.printNumbers();

    await sleep(2000);

    expect(logSpy.mock.calls.length).toBe(expectResult);
    for (let call in logSpy.mock.calls) {
      expect(logSpy.mock.calls[call][0]).toBe(expectResult);
    }
  });

  test("Should return the sequence of number since 0 to 9 when use callback function with closures", async () => {
    const expectResult = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const logSpy = jest.spyOn(console, "log");

    functionScope.printNumberClosure();

    await sleep(2000);

    expect(logSpy.mock.calls.length).toBe(expectResult.length);
    for (let call in logSpy.mock.calls) {
      expect(logSpy.mock.calls[call][0]).toBe(expectResult[call]);
    }
  });
});
