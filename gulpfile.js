const gulp = require("gulp");
const inquirer = require("inquirer");
// 默认gulp
function defaultTask(cb) {
  // place code for your default task here
  console.log("please input task name.");
  cb();
}
exports.default = defaultTask;

const a1 = () => {
  return new Promise(resolve => {
    console.log('a1 ready!')
    resolve()
  })
}
cUtils = {
  a1
}

gulp.task("demo", (done) => {
  const list = [
    {
      type: "rawlist",
      message: "choice one?",
      name: "answerName",
      choices: [
        {
          name: "a",
          value: "a1",
        },
        {
          name: "b",
          value: "a1",
        },
      ],
    },
  ];
  inquirer.prompt(list).then((answer) => {
    const { answerName } = answer;
    console.log(answer, answerName);
    cUtils[answerName]().then(done)
  });
});
