function start() {
	var button_calculate = document.querySelector("#btn_calculate");
	button_calculate.addEventListener("click", handleButtonClick);
}

function handleButtonClick() {
	var weight = document.querySelector("#input_weight");
	var height = document.querySelector("#input_height");
	var result = document.querySelector("#result");

	var weight_value = Number(weight.value);
	var height_value = Number(height.value);

	var Imc = calcularIMC(height_value, weight_value);

	var peso = handleIMC(Imc);

	result.textContent = Imc;
}

function calcularIMC(height, weight) {
	let total = 0;
	total = weight / (height * height);
	total = total.toFixed(2);
	console.log(total);
	return total;
}

function handleIMC(total) {
	var msg = document.querySelector("#result_icm_message");
	console.log(total);

	var text_output = "";

	if (total >= 30 && total <= 34.9) {
		text_output = console.log("Obesidade grau I");
	} else if (total >= 35 && total <= 39.9) {
		text_output = console.log("Obesidade grau II");
	} else if (total >= 40) {
		text_output = console.log("Obesidade Mórbida");
	} else if (total < 30) {
		text_output = console.log("Abaixo do peso");
	}
	msg.textContent = text_output;
	return text_output;
}

start();

/*
Grau I: IMC entre 30 e 34,9; 
Grau II: IMC entre 35 e 39,9 e 
Grau III: (obesidade mórbida): IMC acima de 40
*/
