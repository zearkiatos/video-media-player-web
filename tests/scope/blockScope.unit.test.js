import blockScope from "../../src/scope/blockScope";
import { sleep } from "../utils/testHelper";
describe("Test site for block scope declarations", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("return the sequence of number since 0 to 9 when the index declaration is let", async () => {
    const expectResult = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const logSpy = jest.spyOn(console, "log");

    blockScope.printNumbers();

    await sleep(2000);

    expect(logSpy.mock.calls.length).toBe(expectResult.length);
    for (let call in logSpy.mock.calls) {
      expect(logSpy.mock.calls[call][0]).toBe(expectResult[call]);
    }
  });
});
