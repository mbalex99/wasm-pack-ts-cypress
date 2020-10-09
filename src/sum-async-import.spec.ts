describe("sum test", function () {
  it("should be able to run a sum test", async () => {
    const { sum } = await import("../internal/wasm_pack_ts_cypress")
    expect(sum(1, 2)).to.equal(3);
  });
});
