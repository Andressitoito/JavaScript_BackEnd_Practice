// Create a function that returns a Promise that resolves after a certain amount of time. For example, a function that returns a Promise that resolves after 5 seconds.

const timerResolve = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve({
				message: "Solved Promise",
			});
		}, 5000);
	});
};

// timerResolve().then(response => console.log(response));

// Create a function that returns a Promise that rejects after a certain amount of time. For example, a function that returns a Promise that rejects after 3 seconds.

const timerReject = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return reject({
				message: "Promise Rejected",
			});
		}, 3000);
	});
};

// timerReject().then(response => console.log(response)).catch(error => console.log(error))

// Create a function that takes an array of numbers and returns a Promise that resolves with the sum of the numbers in the array.

const sumArray = (array) => {
	return new Promise((resolve) => {
		const sum = array.reduce((acc, elem) => {
			return (acc += elem);
		});

		return resolve({
			sum: `The total sum is ${sum}`,
		});
	});
};

// sumArray([3, 2, 4, 5]).then((response) => console.log(response));

// Create a function that takes a string and returns a Promise that resolves with the reversed string.

const returnReversed = (str) => {
	return new Promise((resolved) => {
		let reversedString = str.split("").reverse().join("");

		return resolved({
			reversedString: reversedString,
		});
	});
};

// returnReversed("Andresito").then((response) => console.log(response));

// Create a function that takes a number and returns a Promise that resolves with an array of the first n Fibonacci numbers.

const return_n_FibonacciArray = (n) => {
	return new Promise((resolved, rejected) => {
		if (n === 0) {
			return rejected({
				error:
					"Fibonacci sequence starts with 0 and 1, please provide a positive integer greater than 0.",
			});
		}

		let two_previous = 0,
			one_previous = 1,
			sum,
			FibonacciArray = [0];

		for (let i = 2; i <= n; i++) {
			sum = two_previous + one_previous;
			two_previous = one_previous;
			one_previous = sum;

			FibonacciArray.push(sum);
		}

		return resolved({
			FibonacciArray: FibonacciArray,
		});
	});
};

return_n_FibonacciArray(9)
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

// return_n_FibonacciArray(0)
// 	.then((response) => console.log(response))
// 	.catch((error) => console.log(error));
/* 
/////////////////////////////
DECLARE VARIABLES
/////////////////////////////
two_previous = 0
one_previous = 1
sum = 0

/////////////////////////////
FIRST LOOP
/////////////////////////////
sum = two_previous + one_previous;
sum = 0 + 1
sum = 1

two_previous = one_previous;
two_previous = 1

one_previous = sum;
one_previous = 1

/////////////////////////////
SECOND LOOP
/////////////////////////////
sum = two_previous + one_previous;
sum = 1 + 1
sum = 2

two_previous = one_previous;
two_previous = 2

one_previous = sum;
one_previous = 2

/////////////////////////////
THIRD LOOP
/////////////////////////////
sum = two_previous + one_previous;
sum = 2 + 1
sum = 3

two_previous = one_previous;
two_previous = 2

one_previous = sum;
one_previous = 3
*/

/* 
Para todas las operaciones/funciones:
Debe devolver una PROMESA que se resuelva siempre que el resultado sea positivo.
En caso de que algún número NO sea número, rechazar la promesa indicando “Solo números”
En caso de que algún número sea cero, rechazar la promesa indicando “Operación innecesaria”
Definir función suma/resta/multiplicacion/division y en caso de que la operacion sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos” (ejemplo: 10 + (-15) = -5 debe rechazarse)
*/

//funcion de ayuda: para verificar si es numero y si es mayor a cero
function esNumero(num) {
	if (isNaN(num)) {
		let message = "Solo números";
		return { success: false, message };
	} else if (num === 0) {
		let message = "Operación innecesaria";
		return { success: false, message };
	} else {
		return { success: true, number: num };
	}
}
//funcion de ayuda: para verificar si da lo mismo que con then/catch
async function calculos(num1, num2, operacion) {
	try {
		let calculo = await operacion(num1, num2);
		console.log(calculo);
		return calculo;
	} catch (error) {
		console.log(error);
		return error;
	}
}
















