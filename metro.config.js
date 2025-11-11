const { getDefaultConfig } = require("expo/metro-config");

// Try to load nativewind's metro helper. If nativewind isn't installed
// (e.g. node_modules not present), fall back to an identity function so
// Metro can still load a config and produce a clearer error later.
let withNativeWind;
try {
	({ withNativeWind } = require("nativewind/metro"));
} catch (e) {
	// eslint-disable-next-line no-console
	console.warn("nativewind/metro not found — continuing without nativewind helper");
	withNativeWind = (cfg) => cfg;
}

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./app/globals.css" });