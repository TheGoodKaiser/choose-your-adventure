// // function newPlayer = new Object();
// newPlayer.myName=myName;
// newPlayer.myClass=myClass;

// // var player = newPlayer();


function* chooseYourAdventure() {
	// yield adventure.start('Welcome to an awesome adventure!');
	// yield adventure.say('Hello world!');
	// var name = yield adventure.ask('What is your name?');
	// var chooseMessage = 'Hello, '+name+'! Would you like to go on an adventure?';
	// var cont = yield adventure.choose(chooseMessage, 'Yes!', 'No thanks');
	// adventure.end('That\'s all folks!');
	yield adventure.say('Welcome to my adventure!')
	var player = {}
	player.myName = yield adventure.ask('What is your name?')
	yield adventure.say('Hello, '+player.myName+"!", "Let\'s get started.")
	player.myClass = yield adventure.choose(player.myName+", what class would you like to play?", "Knight","Shaman","Rogue","Godmodetest")
	player.str = 0; /*increases attack damage at base .25 dmg per point*/
	player.stam = 0; /*increases health at base .75 per point*/
	player.inte = 0; /*increases ability dmg at base .75 per point, mana at .5 per point*/
	player.agi = 0; /*increases dodge chance at base .01 per point*/
	player.dex = 0; /*increases crit chance at base .01 per point*/
	player.luck = 0; /*???*/
	var ready = yield adventure.choose("Great choice! Are you ready to roll your stats?", "Yes", "No, let me choose another class")
	function randInt (min,max) {
		return Math.floor(Math.random()*(max-min+1)+min); /*lets me set random intervals that don't start with 1*/
	}
	function rollStats () {
		if (player.myClass=="Knight") {
			player.str = randInt(13,17);
			player.stam = randInt(13,17);
			player.inte = randInt(10,14);
			player.agi = randInt(8,13);
			player.dex = randInt(9,14);
			player.luck = randInt(10,14)
		} else if (player.myClass=="Shaman") {
			player.str = randInt(10,14);
			player.stam = randInt(10,14);
			player.inte = randInt(13,17);
			player.agi = randInt(8,13);
			player.dex = randInt(8,13);
			player.luck = randInt(9,14)
		} else if (player.myClass=="Rogue") {
			player.str = randInt(10,14);
			player.stam = randInt(8,13);
			player.inte = randInt(13,17);
			player.agi = randInt(13,17);
			player.dex = randInt(8,13);
			player.luck = randInt(12,16)
		} else if (player.myClass=="Godmodetest") {
			player.str = randInt(95,99);
			player.stam = randInt(95,99);
			player.inte = randInt(95,99);
			player.agi = randInt(95,99);
			player.dex = randInt(95,99);
			player.luck = randInt(95,99)
		}
	}
	if(ready == "No, let me choose another class") {
		player.myClass = yield adventure.choose(player.myName+", what class would you REALLY like to play, then?", "Knight","Shaman","Rogue","Godmodetest")
	} else {
		rollStats()
	}
	// yield adventure.say("Here are your stats, "+player.myClass+"!", "Strength:"+player.str+" "+"Stamina:"+player.stam+" "+"Intelligence:"+player.inte+" "+"Agility:"+player.agi+" "+"Dexterity:"+player.dex+" "+"Luck:"+player.luck+" ")
	// var q = 3;   to be implemented in a later build
	// if (q>0) {
	// 	var reroll = yield adventure.choose("Would you like to reroll your stats?", "Yes", "No")
	// 	q--
	// }
	var i = 5;
	while (i>0) {
		i--;
		yield adventure.say("Here are your stats, "+player.myClass+"!", "Strength:"+player.str+" "+"Stamina:"+player.stam+" "+"Intelligence:"+player.inte+" "+"Agility:"+player.agi+" "+"Dexterity:"+player.dex+" "+"Luck:"+player.luck+" ")
		var allo = yield adventure.choose("Allocate your "+(i+1)+" points!", "Strength","Stamina","Intelligence","Agility","Dexterity","Luck");
			if (allo =="Strength") {
				allo="str";
			} else if (allo=="Intelligence") {
				allo="inte";
			} else if (allo=="Agility") {
				allo="agi";
			} else if (allo=="Dexterity") {
				allo="dex";
			} else if (allo=="Luck") {
				allo="luck";
			} else if (allo=="Stamina") {
				allo="stam";
			}
		player[allo]++;
	}
	if (player.myClass=="Knight") {
			var myWeap = yield adventure.choose("Choose your equipment, "+player.myClass+"!", "Sword and Shield", "Lance", "Greatsword");
		} else if (player.myClass=="Shaman") {
			var myWeap = yield adventure.choose("Choose your equipment, "+player.myClass+"!", "Staff", "Knife and Poisons");
		} else if (player.myClass=="Rogue") {
			var myWeap = yield adventure.choose("Choose your equipment, "+player.myClass+"!", "Dueling Rapier and Dagger", "Assassin Blades", "Bow and Arrow");
		} else if (player.myClass=="Godmodetest") {
			var myWeap = yield adventure.choose("Choose your equipment, "+player.myClass+"!", "OP", "OP");
		}
	var myWeap = myWeap.replace(/\s+/, " ");
	var weapons = {
		SwordandShield: {
			weapDam: 9,
			weapArm: 9,
			weapInt: 0,
			weapAgi:-2
		},
		Lance: {
			weapDam: 10,
			weapArm: 9,
			weapInt: 0,
			weapAgi:-3
		},
		Greatsword: {
			weapDam: 16,
			weapArm: 4,
			weapInt: 0,
			weapAgi:-4
		},
		Staff: {
			weapDam: 8,
			weapArm: 3,
			weapInt: 6,
			weapAgi:-1
		},
		KnifeandPoisons: {
			weapDam: 10,
			weapArm: 0,
			weapInt: 2,
			weapAgi: 2
		},
		DuelingRapierandDagger: {
			weapDam: 9,
			weapArm: 2,
			weapInt: 0,
			weapAgi:5
		},
		AssassinsBlades: {
			weapDam: 10,
			weapArm: 1,
			weapInt: 0,
			weapAgi: 5
		},
		BowandArrow: {
			weapDam: 11,
			weapArm: 0,
			weapInt: 0,
			weapAgi: 5
		},
		OP: {
			weapDam: 99,
			weapArm: 99,
			weapInt: 99,
			weapAgi: 99
		}	
	}
	player.damage = ((player.str*.25)+weapDam);
	player.hitPoints = ((player.stam+*.75))
	}
	// 	var newWeap = {};
	// function weapReplace() {
	// 	yield adventure.say("Here's your new weapon: "+newWeap, "Stats - Damage: "+newWeap.)
	// 	myWeap=weapon[myWeap];
	// } for replacing equipment, not done
}




























