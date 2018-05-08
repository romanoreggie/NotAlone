console.log("up and running");

var cc = new ChatCamp({
  appId: 6399747348821438464
})

cc.connect(USER_ID, function(error, user) {
  if(errror === null){
	console.log("Connected to ChatCamp")
  }
})
