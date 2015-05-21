function* chooseYourAdventure() {
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
	// var q = 3;  >>>>>>to be implemented in a later build<<<<<<
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
			weapName: "Sword and Shield",
			weapDam: 13,
			weapArm: 14,
			weapInt: 0,
			weapAgi: -2,
			weapDex: 0
		},
		Lance: {
			weapName: "Lance",
			weapDam: 17,
			weapArm: 11,
			weapInt: 0,
			weapAgi:-3,
			weapDex: 0
		},
		Greatsword: {
			weapName: "Greatsword",
			weapDam: 23,
			weapArm: 6,
			weapInt: 0,
			weapAgi:-4,
			weapDex: 0
		},
		Staff: {
			weapName: "Staff",
			weapDam: 11,
			weapArm: 3,
			weapInt: 12,
			weapAgi:-1,
			weapDex: 0
		},
		KnifeandPoisons: {
			weapName: "Knife and Poisons",
			weapDam: 12,
			weapArm: 0,
			weapInt: 4,
			weapAgi: 2,
			weapDex: 3
		},
		DuelingRapierandDagger: {
			weapName: "Dueling Rapier and Dagger",
			weapDam: 12,
			weapArm: 2,
			weapInt: 0,
			weapAgi: 6,
			weapDex: 5
		},
		AssassinBlades: {
			weapName: "Assassin Blades",
			weapDam: 13,
			weapArm: 1,
			weapInt: 0,
			weapAgi: 1,
			weapDex: 4
		},
		BowandArrow: {
			weapName: "Bow and Arrow",
			weapDam: 11,
			weapArm: 0,
			weapInt: 0,
			weapAgi: 10,
			weapDex: 3
		},
		OP: {
			weapName: "#rekt",
			weapDam: 99,
			weapArm: 99,
			weapInt: 99,
			weapAgi: 99,
			weapDex: 99
		}	
	}
	myWeap=weapon[myWeap];
	player.damage = ((player.str+myWeap.weapDam)*.25);
	player.hitPoints = ((player.stam+myWeap.weapArm)*.75);
	player.mana = ((player.inte+myWeap.weapInt)*.75);
	player.dodgeChance = ((player.agi+myWeap.weapAgi)*.01);
	player.critChance = ((player.dex+myWeap.weapDex)*.01)
	yield adventure.say("Great choice, "+player.myClass+"!", "With your new "+myWeap.weapName+", here are your stats!"+" Strength:"+player.str+" "+"Stamina:"+player.stam+" "+"Intelligence:"+player.inte+" "+"Agility:"+player.agi+" "+"Dexterity:"+player.dex+" "+"Luck:"+player.luck+" ")
	
	// 	var newWeap = {};
	// function weapReplace() {
	// 	yield adventure.say("Here's your new weapon: "+newWeap, "Stats - Damage: "+newWeap.)
	// 	myWeap=weapon[myWeap];
	// } >>>>>>for replacing equipment, not done<<<<<<
}




























