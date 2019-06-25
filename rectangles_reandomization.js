Qualtrics.SurveyEngine.addOnload(function()
{
	//define random function that pulls a random item from a list
	function random_item(items)
		{

		return items[Math.floor(Math.random()*items.length)];

		}

	var pixel1 = [3,49,5,48,7,47,9,46,11,45,13,44,14,43,15,41,3,15,5,17,6,20,8,23,9,24,12,25,16,26,19,29]
	var pixel2 = [88,49,91,48,93,47,95,46,96,45,97,44,98,43,99,41,63,62,65,63,68,64,71,66,75,68,80,71,86,74,94,77]

	
	
	//if democrat is selected, set the party for each of the lists that will be generated (3 democrat, 2 republican)	
	var pixel = ["pixel1", "pixel2"];
    var x = [];
    var y =[];
    var width = [];
    var height = [];

	for (i=0; i <32; i++) {
		var x_position = random_item(pixel)
		if (x_position == "pixel1") {
			var width_temp = random_item(pixel1);
			index = pixel1.indexOf(width_temp);
			var height_temp = pixel2[index];
			var x_temp = (100-width_temp)/2;
			var y_temp = (100-height_temp)/2;
			pixel1.splice(index, 1);
			pixel2.splice(index, 1);
			x.push(y_temp);
			y.push(x_temp);
			width.push(width_temp);
			height.push(height_temp);
		} else {
			var width_temp = random_item(pixel2);
			index = pixel2.indexOf(width_temp);
			var height_temp = pixel1[index];
			var x_temp = (100-width_temp)/2;
			var y_temp = (100-height_temp)/2;
			pixel1.splice(index, 1);
			pixel2.splice(index, 1);
			x.push(y_temp);
			y.push(x_temp);
			width.push(width_temp);
			height.push(height_temp);
		}

	};
//embed data back into qualtrics variables
Qualtrics.SurveyEngine.setEmbeddedData('x1',x[0]);
Qualtrics.SurveyEngine.setEmbeddedData('x2',x[1]);
Qualtrics.SurveyEngine.setEmbeddedData('x3',x[2]);
Qualtrics.SurveyEngine.setEmbeddedData('x4',x[3]);
Qualtrics.SurveyEngine.setEmbeddedData('x5',x[4]);
Qualtrics.SurveyEngine.setEmbeddedData('x6',x[5]);
Qualtrics.SurveyEngine.setEmbeddedData('x7',x[6]);
Qualtrics.SurveyEngine.setEmbeddedData('x8',x[7]);
Qualtrics.SurveyEngine.setEmbeddedData('x9',x[8]);
Qualtrics.SurveyEngine.setEmbeddedData('x10',x[9]);
Qualtrics.SurveyEngine.setEmbeddedData('x11',x[10]);
Qualtrics.SurveyEngine.setEmbeddedData('x12',x[11]);
Qualtrics.SurveyEngine.setEmbeddedData('x13',x[12]);
Qualtrics.SurveyEngine.setEmbeddedData('x14',x[13]);
Qualtrics.SurveyEngine.setEmbeddedData('x15',x[14]);
Qualtrics.SurveyEngine.setEmbeddedData('x16',x[15]);
Qualtrics.SurveyEngine.setEmbeddedData('x17',x[16]);
Qualtrics.SurveyEngine.setEmbeddedData('x18',x[17]);
Qualtrics.SurveyEngine.setEmbeddedData('x19',x[18]);
Qualtrics.SurveyEngine.setEmbeddedData('x20',x[19]);
Qualtrics.SurveyEngine.setEmbeddedData('x21',x[20]);
Qualtrics.SurveyEngine.setEmbeddedData('x22',x[21]);
Qualtrics.SurveyEngine.setEmbeddedData('x23',x[22]);
Qualtrics.SurveyEngine.setEmbeddedData('x24',x[23]);
Qualtrics.SurveyEngine.setEmbeddedData('x25',x[24]);
Qualtrics.SurveyEngine.setEmbeddedData('x26',x[25]);
Qualtrics.SurveyEngine.setEmbeddedData('x27',x[26]);
Qualtrics.SurveyEngine.setEmbeddedData('x28',x[27]);
Qualtrics.SurveyEngine.setEmbeddedData('x29',x[28]);
Qualtrics.SurveyEngine.setEmbeddedData('x30',x[29]);
Qualtrics.SurveyEngine.setEmbeddedData('x31',x[30]);
Qualtrics.SurveyEngine.setEmbeddedData('x32',x[31]);


Qualtrics.SurveyEngine.setEmbeddedData('y1',y[0]);
Qualtrics.SurveyEngine.setEmbeddedData('y2',y[1]);
Qualtrics.SurveyEngine.setEmbeddedData('y3',y[2]);
Qualtrics.SurveyEngine.setEmbeddedData('y4',y[3]);
Qualtrics.SurveyEngine.setEmbeddedData('y5',y[4]);
Qualtrics.SurveyEngine.setEmbeddedData('y6',y[5]);
Qualtrics.SurveyEngine.setEmbeddedData('y7',y[6]);
Qualtrics.SurveyEngine.setEmbeddedData('y8',y[7]);
Qualtrics.SurveyEngine.setEmbeddedData('y9',y[8]);
Qualtrics.SurveyEngine.setEmbeddedData('y10',y[9]);
Qualtrics.SurveyEngine.setEmbeddedData('y11',y[10]);
Qualtrics.SurveyEngine.setEmbeddedData('y12',y[11]);
Qualtrics.SurveyEngine.setEmbeddedData('y13',y[12]);
Qualtrics.SurveyEngine.setEmbeddedData('y14',y[13]);
Qualtrics.SurveyEngine.setEmbeddedData('y15',y[14]);
Qualtrics.SurveyEngine.setEmbeddedData('y16',y[15]);
Qualtrics.SurveyEngine.setEmbeddedData('y17',y[16]);
Qualtrics.SurveyEngine.setEmbeddedData('y18',y[17]);
Qualtrics.SurveyEngine.setEmbeddedData('y19',y[18]);
Qualtrics.SurveyEngine.setEmbeddedData('y20',y[19]);
Qualtrics.SurveyEngine.setEmbeddedData('y21',y[20]);
Qualtrics.SurveyEngine.setEmbeddedData('y22',y[21]);
Qualtrics.SurveyEngine.setEmbeddedData('y23',y[22]);
Qualtrics.SurveyEngine.setEmbeddedData('y24',y[23]);
Qualtrics.SurveyEngine.setEmbeddedData('y25',y[24]);
Qualtrics.SurveyEngine.setEmbeddedData('y26',y[25]);
Qualtrics.SurveyEngine.setEmbeddedData('y27',y[26]);
Qualtrics.SurveyEngine.setEmbeddedData('y28',y[27]);
Qualtrics.SurveyEngine.setEmbeddedData('y29',y[28]);
Qualtrics.SurveyEngine.setEmbeddedData('y30',y[29]);
Qualtrics.SurveyEngine.setEmbeddedData('y31',y[30]);
Qualtrics.SurveyEngine.setEmbeddedData('y32',y[31]);

Qualtrics.SurveyEngine.setEmbeddedData('height1',height[0]);
Qualtrics.SurveyEngine.setEmbeddedData('height2',height[1]);
Qualtrics.SurveyEngine.setEmbeddedData('height3',height[2]);
Qualtrics.SurveyEngine.setEmbeddedData('height4',height[3]);
Qualtrics.SurveyEngine.setEmbeddedData('height5',height[4]);
Qualtrics.SurveyEngine.setEmbeddedData('height6',height[5]);
Qualtrics.SurveyEngine.setEmbeddedData('height7',height[6]);
Qualtrics.SurveyEngine.setEmbeddedData('height8',height[7]);
Qualtrics.SurveyEngine.setEmbeddedData('height9',height[8]);
Qualtrics.SurveyEngine.setEmbeddedData('height10',height[9]);
Qualtrics.SurveyEngine.setEmbeddedData('height11',height[10]);
Qualtrics.SurveyEngine.setEmbeddedData('height12',height[11]);
Qualtrics.SurveyEngine.setEmbeddedData('height13',height[12]);
Qualtrics.SurveyEngine.setEmbeddedData('height14',height[13]);
Qualtrics.SurveyEngine.setEmbeddedData('height15',height[14]);
Qualtrics.SurveyEngine.setEmbeddedData('height16',height[15]);
Qualtrics.SurveyEngine.setEmbeddedData('height17',height[16]);
Qualtrics.SurveyEngine.setEmbeddedData('height18',height[17]);
Qualtrics.SurveyEngine.setEmbeddedData('height19',height[18]);
Qualtrics.SurveyEngine.setEmbeddedData('height20',height[19]);
Qualtrics.SurveyEngine.setEmbeddedData('height21',height[20]);
Qualtrics.SurveyEngine.setEmbeddedData('height22',height[21]);
Qualtrics.SurveyEngine.setEmbeddedData('height23',height[22]);
Qualtrics.SurveyEngine.setEmbeddedData('height24',height[23]);
Qualtrics.SurveyEngine.setEmbeddedData('height25',height[24]);
Qualtrics.SurveyEngine.setEmbeddedData('height26',height[25]);
Qualtrics.SurveyEngine.setEmbeddedData('height27',height[26]);
Qualtrics.SurveyEngine.setEmbeddedData('height28',height[27]);
Qualtrics.SurveyEngine.setEmbeddedData('height29',height[28]);
Qualtrics.SurveyEngine.setEmbeddedData('height30',height[29]);
Qualtrics.SurveyEngine.setEmbeddedData('height31',height[30]);
Qualtrics.SurveyEngine.setEmbeddedData('height32',height[31]);

Qualtrics.SurveyEngine.setEmbeddedData('width1',width[0]);
Qualtrics.SurveyEngine.setEmbeddedData('width2',width[1]);
Qualtrics.SurveyEngine.setEmbeddedData('width3',width[2]);
Qualtrics.SurveyEngine.setEmbeddedData('width4',width[3]);
Qualtrics.SurveyEngine.setEmbeddedData('width5',width[4]);
Qualtrics.SurveyEngine.setEmbeddedData('width6',width[5]);
Qualtrics.SurveyEngine.setEmbeddedData('width7',width[6]);
Qualtrics.SurveyEngine.setEmbeddedData('width8',width[7]);
Qualtrics.SurveyEngine.setEmbeddedData('width9',width[8]);
Qualtrics.SurveyEngine.setEmbeddedData('width10',width[9]);
Qualtrics.SurveyEngine.setEmbeddedData('width11',width[10]);
Qualtrics.SurveyEngine.setEmbeddedData('width12',width[11]);
Qualtrics.SurveyEngine.setEmbeddedData('width13',width[12]);
Qualtrics.SurveyEngine.setEmbeddedData('width14',width[13]);
Qualtrics.SurveyEngine.setEmbeddedData('width15',width[14]);
Qualtrics.SurveyEngine.setEmbeddedData('width16',width[15]);
Qualtrics.SurveyEngine.setEmbeddedData('width17',width[16]);
Qualtrics.SurveyEngine.setEmbeddedData('width18',width[17]);
Qualtrics.SurveyEngine.setEmbeddedData('width19',width[18]);
Qualtrics.SurveyEngine.setEmbeddedData('width20',width[19]);
Qualtrics.SurveyEngine.setEmbeddedData('width21',width[20]);
Qualtrics.SurveyEngine.setEmbeddedData('width22',width[21]);
Qualtrics.SurveyEngine.setEmbeddedData('width23',width[22]);
Qualtrics.SurveyEngine.setEmbeddedData('width24',width[23]);
Qualtrics.SurveyEngine.setEmbeddedData('width25',width[24]);
Qualtrics.SurveyEngine.setEmbeddedData('width26',width[25]);
Qualtrics.SurveyEngine.setEmbeddedData('width27',width[26]);
Qualtrics.SurveyEngine.setEmbeddedData('width28',width[27]);
Qualtrics.SurveyEngine.setEmbeddedData('width29',width[28]);
Qualtrics.SurveyEngine.setEmbeddedData('width30',width[29]);
Qualtrics.SurveyEngine.setEmbeddedData('width31',width[30]);
Qualtrics.SurveyEngine.setEmbeddedData('width32',width[31]);


});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});