import { sum } from "../internal/wasm_pack_ts_cypress"

describe("sum test", function () {
  it("should be able to run a sum test", async () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
