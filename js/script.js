var cartaPaulo = {
	nome: "Shiryu de dragão",
	imagem:
		"http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
	atributos: {
		ataque: 5,
		defesa: 9,
		magia: 10
	}
};

var cartaRafa = {
	nome: "Bulbassauro",
	imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
	atributos: {
		ataque: 7,
		defesa: 8,
		magia: 6
	}
};

var cartaGui = {
	nome: "Darth Vader",
	imagem:
		"https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
	atributos: {
		ataque: 9,
		defesa: 8,
		magia: 2
	}
};

var cartas = [cartaPaulo, cartaRafa, cartaGui];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
	var numeroCartaMaquina = parseInt(Math.random() * 3);
	cartaMaquina = cartas[numeroCartaMaquina];

	var numeroCartaJogador = parseInt(Math.random() * 3);
	while (numeroCartaMaquina == numeroCartaJogador) {
		numeroCartaJogador = parseInt(Math.random() * 3);
	}
	cartaJogador = cartas[numeroCartaJogador];
	console.log(cartaJogador);

	document.getElementById("btnSortear").disabled = true;
	document.getElementById("btnJogar").disabled = false;
	exibirCartaJogador();
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName("atributo");
	for (var i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked == true) {
			return radioAtributo[i].value;
		}
	}
}

function jogar() {
	var atributoSelecionado = obtemAtributoSelecionado();
	var divResultado = document.getElementById("resultado");

	if (
		cartaJogador.atributos[atributoSelecionado] >
		cartaMaquina.atributos[atributoSelecionado]
	) {
		htmlResultado = "<p class='resultado-final'>Venceu</p>";
	} else if (
		cartaMaquina.atributos[atributoSelecionado] >
		cartaJogador.atributos[atributoSelecionado]
	) {
		htmlResultado = "<p class='resultado-final'>Perdeu</p>";
	} else {
		htmlResultado = "<p class='resultado-final'>Empatou</p>";
	}
	console.log(divResultado);
	divResultado.innerHTML = htmlResultado;

	document.getElementById("btnJogar").disabled = true;
	exibirCartaMaquina();
}

function exibirCartaJogador() {
	var divCartaJogador = document.getElementById("carta-jogador");
	divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
	// divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
	var moldura =
		'<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
	var tagHTML = "<div id='opcoes' class='carta-status'>";

	var opcoesTexto = "";
	for (var atributo in cartaJogador.atributos) {
		opcoesTexto +=
			"<input type='radio' name='atributo' value='" +
			atributo +
			"'>" +
			atributo +
			" " +
			cartaJogador.atributos[atributo] +
			"<br>";
	}
	var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

	divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
	var divCartaMaquina = document.getElementById("carta-maquina");
	divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
	// divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"
	var moldura =
		'<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
	var tagHTML = "<div id='opcoes' class='carta-status'>";

	var opcoesTexto = "";
	for (var atributo in cartaMaquina.atributos) {
		opcoesTexto +=
			"<p type='text' name='atributo' value='" +
			atributo +
			"'>" +
			atributo +
			" " +
			cartaMaquina.atributos[atributo] +
			"</p>";
	}
	var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

	divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
