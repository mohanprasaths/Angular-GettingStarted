// Code goes here

var createWorker = function(){
  return {
    job1: function(){console.log("job1")},
    job2: function(){console.log("job2")}
  }
}

var worker = createWorker()
worker.job1()
worker.job2()
