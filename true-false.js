if (0) {
    console.log("This will NOT execute");
}

if ("") {
    console.log("This will NOT execute");
}

if (null) {
    console.log("This will NOT execute");
}


if (42) {
    console.log("This will execute");  // ✅ 42 is truthy
}

if ("hello") {
    console.log("This will execute");  // ✅ Non-empty strings are truthy
}

if ([]) {
    console.log("This will execute");  // ✅ Empty arrays are truthy
}

if ({}) {
    console.log("This will execute");  // ✅ Empty objects are truthy
}


if (42) {
    console.log("This will execute");  // ✅ 42 is truthy
}

if ("hello") {
    console.log("This will execute");  // ✅ Non-empty strings are truthy
}

if ([]) {
    console.log("This will execute");  // ✅ Empty arrays are truthy
}

if ({}) {
    console.log("This will execute");  // ✅ Empty objects are truthy
}
