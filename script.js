var database = [

{
	username: "chamod",
	password: "apple"
}];

var newsFeed = [{
	username: "dilshan",
	timeline: "so tired for all that learning"

    },
    { username: "sally",
    timeline: "java script is so cool"

    }

];

var usernamePrompt = prompt("what is your username?");
var passwordPrompt = prompt("what is your password?");

function signIn(user,pass) {
	if (user === database[0].username &&
		pass === database[0].password){console.log(newsFeed);}
	else{ alert("sorry wrong username or password");}
}

signIn(usernamePrompt,passwordPrompt);