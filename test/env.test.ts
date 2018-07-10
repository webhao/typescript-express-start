import {ENVIRONMENT, PORT} from "../src/config/env"

describe("check env", () => {
  it("ENVIRONMENT must be test", () => {
    expect(ENVIRONMENT).toBe("test");
  })
  it('PORT must be 3000', () => {
    expect(PORT).toBe(3000)
  })
});