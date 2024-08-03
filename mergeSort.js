const unsortedArr = [105, 79, 100, 110];

function mergeSort(arr) {
	//exit case
	if (arr.length <= 1) {
		console.log("firstescape");
		return arr;
	}

	//split array into 2
	let half = Math.floor(arr.length / 2);
	let leftHalf = arr.slice(0, half);
	let rightHalf = arr.slice(half, arr.length);

    //return merge function with recursive params 
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));

}

function merge(left, right) {
    let result = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
    return [...result, ...left, ...right];
}

console.log(mergeSort(unsortedArr));
