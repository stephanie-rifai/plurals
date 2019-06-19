Qualtrics.SurveyEngine.addOnload(function()
{

	//define random function that pulls a random item from a list
	function random_item(items)
		{

		return items[Math.floor(Math.random()*items.length)];

		}

	//list of words for democrats and republicans
	//note that the pairs are matched by the index (so pair 1 = (democrat_words[0],republican_words[0]); pair 2 = (democrat_words[1],republican_words[1]) and so on)
	var democrat_words = ["comprehensive","wealth","workers","contribute","values","assault","acknowledge","respond","profit","potentially","glad","financial","kinds","end","criminal","spoke","changes","mother","responsibility","barriers","indicated","outrageous","discussion","maintain","basic"]
	var republican_words = ["complete","prosperity","employees","give","principles","attack","recognize","answer","gain","possibly","happy","monetary","types","finish","illegal","talked","reforms","mom","duty","walls","announced","excessive","conversation","preserve","fundamental"]

	//randomly decide if the participant will have three republican or three democrat lists
	var dem_rep = ["democrat", "republican"];
	var list1_party = random_item(dem_rep)
	
	//if democrat is selected, set the party for each of the lists that will be generated (3 democrat, 2 republican)	
	if (list1_party == "democrat"){
	   var list2_party = "democrat";
	   var list3_party = "democrat";
	   var list4_party = "republican";
	   var list5_party = "republican";
	//if republican is selected, set the party for each of the lists that will be generated (3 republican, 2 democrat)	   
	} else { 	
		   var list2_party = "republican";
		   var list3_party = "republican";
		   var list4_party = "democrat";
		   var list5_party = "democrat";
		}

	//embed variables to capture the party of the list
	//note that the randomization of the order the lists are viewed happens in qualtrics using question randomization
	Qualtrics.SurveyEngine.setEmbeddedData('list1_party',list1_party);
	Qualtrics.SurveyEngine.setEmbeddedData('list2_party',list2_party);
	Qualtrics.SurveyEngine.setEmbeddedData('list3_party',list3_party);
	Qualtrics.SurveyEngine.setEmbeddedData('list4_party',list4_party);
	Qualtrics.SurveyEngine.setEmbeddedData('list5_party',list5_party);


    //This will generate the 5 random lists of words (this is without replacement and ensures that only one word from each pair is shown, and no word is shown twice)
if (list1_party == "democrat"){
	 var list1 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(democrat_words);
		var index = democrat_words.indexOf(word);
		democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list1.push(word);
	 };

	 var list2 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(democrat_words);
	 	var index = democrat_words.indexOf(word);
	 	democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list2.push(word);
	 };

	  var list3 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(democrat_words);
	 	var index = democrat_words.indexOf(word);
	 	democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list3.push(word);
	 };

	  var list4 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(republican_words);
	 	var index = republican_words.indexOf(word);
	 	democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list4.push(word);
	 };

	  var list5 = [];
	 for (i=0; i <5; i++) {
		var word = random_item(republican_words);
	 	var index = republican_words.indexOf(word);
	 	democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list5.push(word);
	 };
} else {

	 var list1 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(republican_words);
		var index = republican_words.indexOf(word);
		democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list1.push(word);

	 };

	 var list2 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(republican_words);
		var index = republican_words.indexOf(word);
		democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list2.push(word);
	 };

	  var list3 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(republican_words);
		var index = republican_words.indexOf(word);
		democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list3.push(word);
	 };

	  var list4 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(democrat_words);
		var index = democrat_words.indexOf(word);
		democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list4.push(word);
	 };

	  var list5 = [];
	 for (i=0; i <5; i++) {
	 	var word = random_item(democrat_words);
		var index = democrat_words.indexOf(word);
		democrat_words.splice(index, 1);
		republican_words.splice(index, 1);
		list5.push(word);
	 };
}

//Creat strings out of list of words so that it correctly shows up in the data file
var string1 = list1[0]+", "+list1[1]+", "+list1[2]+", "+list1[3]+", "+list1[4];
var string2 = list2[0]+", "+list2[1]+", "+list2[2]+", "+list2[3]+", "+list2[4];
var string3 = list3[0]+", "+list3[1]+", "+list3[2]+", "+list3[3]+", "+list3[4];
var string4 = list4[0]+", "+list4[1]+", "+list4[2]+", "+list4[3]+", "+list4[4];
var string5 = list5[0]+", "+list5[1]+", "+list5[2]+", "+list5[3]+", "+list5[4];

//embed data back into qualtrics variables
Qualtrics.SurveyEngine.setEmbeddedData('list1',string1);
Qualtrics.SurveyEngine.setEmbeddedData('list2',string2);
Qualtrics.SurveyEngine.setEmbeddedData('list3',string3);
Qualtrics.SurveyEngine.setEmbeddedData('list4',string4);
Qualtrics.SurveyEngine.setEmbeddedData('list5',string5);

  


});