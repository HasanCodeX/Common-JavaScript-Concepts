function testFunction() {
    var functionVar = "আমি ফাংশনের ভিতরে";
    console.log(functionVar); // ✅ এক্সেস করা যাবে
}

testFunction();
console.log(functionVar); // ❌ এক্সেস করা যাবে না (ReferenceError)
