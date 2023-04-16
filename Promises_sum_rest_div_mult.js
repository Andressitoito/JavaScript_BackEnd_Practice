/* 
For all operations/functions:
You must return a PROMISE that resolves as long as the result is positive.
In case any of the inputs are NOT numbers, reject the promise indicating "Only numbers allowed".
In case any of the numbers is zero, reject the promise indicating "Unnecessary operation".
Define functions for addition/subtraction/multiplication/division, and in case the result is negative, reject the promise indicating "The calculator should only return positive values" (example: 10 + (-15) = -5 should be reject).
*/

//funcion de ayuda: para verificar si es numero y si es mayor a cero
function isNum(num) {
	if (isNaN(num) || typeof num === "string") {
		let message = "Only numbers allowed";
		return { success: false, message };
	} else if (num === 0) {
		let message = "Wrong operation";
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

const sum = (num1, num2) => {
	return new Promise((resolve, reject) => {
		let verify_num1 = isNum(num1);
		let verify_num2 = isNum(num2);

		if (verify_num1.success && verify_num2.success) {
			const sum = num1 + num2;

			if (sum <= 0) {
				return reject({
					error: "The calculator only return positive values",
				});
			}
			return resolve({
				sum: `${num1} + ${num2} = ${sum}`,
			});
		} else {
			return reject({
				number_1: verify_num1.message ?? `The number ${num1} is correct`,
				number_2: verify_num2.message ?? `The number ${num2} is correct`,
			});
		}
	});
};

sum(5, 6)
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

const rest = (num1, num2) => {
	return new Promise((resolve, reject) => {
		let verify_num1 = isNum(num1);
		let verify_num2 = isNum(num2);

		if (verify_num1.success && verify_num2.success) {
			let rest = num1 - num2;

			if (rest <= 0) {
				return reject({
					error: "The calculator only return positive values",
				});
			}

			return resolve({
				rest: `${num1} - ${num2} = ${rest}`,
			});
		} else {
			return reject({
				number_1: verify_num1.message ?? `The number ${num1} is correct`,
				number_2: verify_num2.message ?? `The number ${num2} is correct`,
			});
		}
	});
};

rest(10, 9)
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

const multiply = (num1, num2) => {
	return new Promise((resolve, reject) => {
		let verify_num1 = isNum(num1);
		let verify_num2 = isNum(num2);

		if (verify_num1.success && verify_num2.success) {
			let multiply = num1 * num2;

			if (multiply <= 0) {
				return reject({
					error: "The calculator only return positive values",
				});
			}
			return resolve({
				multiply: `${num1} * ${num2} = ${multiply}`,
			});
		} else {
			return reject({
				number_1: verify_num1.message ?? `The number ${num1} is correct`,
				number_2: verify_num2.message ?? `The number ${num2} is correct`,
			});
		}
	});
};

multiply(10, 5)
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

const divide = (num1, num2) => {
	return new Promise((resolve, reject) => {
		let verify_num1 = isNum(num1);
		let verify_num2 = isNum(num2);

		if (verify_num1.success && verify_num2.success) {
			let divide = num1 / num2;

			if (divide <= 0) {
				return reject({
					error: "The calculator only return positive values",
				});
			}

			return resolve({
				divide: `${num1} / ${num2} = ${divide}`,
			});
		} else {
			return reject({
				number_1: verify_num1.message ?? `The number ${num1} is correct`,
				number_2: verify_num2.message ?? `The number ${num2} is correct`,
			});
		}
	});
};

divide(4, 5)
	.then((response) => console.log(response))
	.catch((error) => console.log(error));