import fetchAbort from "../../src/fetchAbort/fetchAbort";
describe("Test acceptation test for fetchAbort", () => {
  test("Should get a image", async () => {
    const image = await fetchAbort.getImage();
    
    expect(image).toBeDefined();
  });
});