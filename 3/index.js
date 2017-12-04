module.exports = function calculateDistance(target) {
	console.log('--------------------------');
	console.log('Target: ', target);
	
	const ringMax = Math.pow(Math.ceil(Math.sqrt(target)), 2);
	console.log("RingMax: ", ringMax);

	const ring = (Math.sqrt(ringMax) - 1) / 2;
	console.log("Ring: ", ring);

	const previousRingMax = ringMax - (ring * 4 * 2);
	console.log("Previous Max: ", previousRingMax);

	const sizeOfSide = ring * 2;
	console.log("Side Size: ", sizeOfSide);

	const positionOnSide = (target - previousRingMax) % sizeOfSide;
	console.log("position on side: ", positionOnSide);

	const distanceToCenterOfSide = (positionOnSide >= ring ? positionOnSide - ring : ring - positionOnSide);
	console.log("Distance to Center: ", distanceToCenterOfSide);

	const totalDistance = distanceToCenterOfSide + ring;

	return totalDistance;
}