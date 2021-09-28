import closure from "../../src/closure/closure";
describe("Test site for closure", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should return the definition function", () => {
    const expectResult = 'The color is Green'

    let greenColorPrinter = closure.makeColorPrinter('Green');

    expect(expectResult).toBe(greenColorPrinter())
  });

  test("Should return keep private the value count and increase o decrease and use count how private variable", () => {
    let counter = closure.makeCounter(7);

    expect(counter.getCount()).toBe(7);

    counter.increase();

    expect(counter.getCount()).toBe(8);

    counter.decrease();
    counter.decrease();
    counter.decrease();
    counter.decrease();

    expect(counter.getCount()).toBe(4);
  });
});