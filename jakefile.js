let { task, desc } = require("jake");

desc("This is the default task.");
task("default", function () {
	console.log("This is thellok.");
	console.log("Jake will run this task if you run");
});

desc("This is some other task. It depends on the default task");
task("otherTask", ["default"], function () {
	console.log("Some other task");
});
