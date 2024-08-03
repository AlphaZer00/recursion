function fibs(n) {
	const arr = [];

	for (let i = 0; i < n; i++) {
		if (i < 2) {
			arr.push(i);
		} else {
			arr.push(arr[i - 1] + arr[i - 2]);
		}
	}
	return arr;
}

function fibsRec(n, arr = [0, 1]) {
	if (n <= arr.length) return arr;
	return fibsRec(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
}

console.log(fibsRec(8));
