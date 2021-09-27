describe("Test site for function scope declarations", () => {
  var message = "Hello World!";
  test("Should return the number of number with the last value", () => {
    const expectResult = "Hello World!";

    expect(message).toBe(expectResult);
  });
});
