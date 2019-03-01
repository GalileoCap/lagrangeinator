//************************************
//S: Lagrange Interpolating Polynomial 

function check_function(fun, coordinates){ //U: Checks if the resulting function works for the given coordinates
	for (var i in coordinates){
		temp= fun.replace(/x/g, coordinates[i][0]);
		if (eval(temp)!=coordinates[i][1]){
			console.error('ERROR expected recieved', coordinates[i], eval(temp));
			return false;
		}
	}

	console.log('CHECKED coordinates function \n', coordinates, '\n', fun, '\n');
	return true;
}

function create_function(coordinates){ //U: Creates the function from a given set of points
	f= []; //A: In f I will be saving the function as an array
	for (var i in coordinates){
		f.push('((');
		for (var t in coordinates){
			if (t != i){
				f.push('(x-', coordinates[t][0], ')*');
			}
		}
		f.pop();
		f.push('))/(');
		for (var j in coordinates){
			if (j != i){
				f.push('(', coordinates[i][0], '-', coordinates[j][0], ')*');
			}
		}
		f.pop();
		f.push(')))*', coordinates[i][1], '+');
	}

	f.pop();
	r= f.join('');

	check_function(r, coordinates);
}

coordinates_test= [];
coordinates_test.push([[1, 1], [2, 2], [3, 3]]);
coordinates_test.push([[1, 1], [2, 2], [3, 1]]);
coordinates_test.push([[1, 1], [2, 0], [3, 1]]);
coordinates_test.push([[1, 1], [2, 2], [3, 9]]);

coordinates_test.forEach((c) => create_function(c));
