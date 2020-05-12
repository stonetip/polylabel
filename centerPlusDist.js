'use strict';

var polylabel = require('./polylabel');

const turf = require('@turf/turf');


const mtCounties = require('./test/fixtures/mt_test_wm.json');



const lc = mtCounties.features[2];

let coords = lc.geometry.coordinates;

let circlePolyStr = generatePOICircle(coords);

console.log(circlePolyStr);



const foo = mtCounties.features[3];

coords = foo.geometry.coordinates;

circlePolyStr = generatePOICircle(coords);

console.log(circlePolyStr);


function generatePOICircle(coords) {

	let shapePOI = polylabel(coords, 1);

	console.log(shapePOI);

	let options = { steps: 16, units: 'degrees' };

	let circlePoly = turf.circle([shapePOI[0], shapePOI[1]], shapePOI[2] / 2, options);

	let circlePolyStr = JSON.stringify(circlePoly);

	console.log(circlePolyStr);

	return circlePolyStr;
}