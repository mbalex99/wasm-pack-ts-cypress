build:
	wasm-pack build --out-dir internal
	node wasm-pack-postbuild.js