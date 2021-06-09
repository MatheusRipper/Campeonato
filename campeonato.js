var times = [];

function inserirTime() {
  var campoTeam = document.querySelector("#nameTeam");
  var team = campoTeam.value;
  var infoTeam = {
    nome: team,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  times.push(infoTeam);
  campoTeam.value = "";
  
  var tabelaTop = document.getElementById("top");
  tabelaTop.innerHTML =
    "<tr><th>Times</th><th>Vitórias</th><th>Empates</th><th>Derrotas</th><th>Pontos</th><th>Ações</th></tr>";

  var html = "";
  for (var i = 0; i < times.length; i++) {
    html += "<tr><td>" + times[i].nome + "</td>";
    html += "<td>" + times[i].vitorias + "</td>";
    html += "<td>" + times[i].empates + "</td>";
    html += "<td>" + times[i].derrotas + "</td>";
    html += "<td>" + times[i].pontos + "</td>";
    html +=
      "<td><button onClick = 'vitoria(" +
      i +
      ")' class='vit'>V</button><button onClick = 'empate(" +
      i +
      ")' class='emp'>E</button><button onClick = 'derrota(" +
      i +
      ")' class='der'>D</button></td></tr>";
  }

  var tabelaTimes = document.getElementById("contenTable");
  tabelaTimes.innerHTML = html;

  var champion = document.getElementById("champs");
  champion.innerHTML =
    "<button onClick = 'vencedor()' class='win'>Vencedor(es)</button>";
}

function gerarTabela() {
  var tabelaTop = document.getElementById("top");
  tabelaTop.innerHTML =
    "<tr><th>Times</th><th>Vitórias</th><th>Empates</th><th>Derrotas</th><th>Pontos</th><th>Ações</th></tr>";

  var html = "";
  for (var i = 0; i < times.length; i++) {
    html += "<tr><td>" + times[i].nome + "</td>";
    html += "<td>" + times[i].vitorias + "</td>";
    html += "<td>" + times[i].empates + "</td>";
    html += "<td>" + times[i].derrotas + "</td>";
    html += "<td>" + times[i].pontos + "</td>";
    html +=
      "<td><button onClick = 'vitoria(" +
      i +
      ")' class='vit'>V</button><button onClick = 'empate(" +
      i +
      ")' class='emp'>E</button><button onClick = 'derrota(" +
      i +
      ")' class='der'>D</button></td></tr>";
  }

  var tabelaTimes = document.getElementById("contenTable");
  tabelaTimes.innerHTML = html;

  var champion = document.getElementById("champs");
  champion.innerHTML =
    "<button onClick = 'vencedor()' class='win'>Vencedor(es)</button>";
}

function vitoria(i) {
  times[i].vitorias = times[i].vitorias + 1;
  times[i].pontos = times[i].pontos + 3;
  gerarTabela();
}

function empate(i) {
  times[i].empates = times[i].empates + 1;
  times[i].pontos = times[i].pontos + 1;
  gerarTabela();
}

function derrota(i) {
  times[i].derrotas = times[i].derrotas + 1;
  gerarTabela();
}

function vencedor() {
  var maior = 0;
  var winner = [];

  for (j = 0; j < times.length; j++) {
    if (times[j].pontos > maior) {
      maior = times[j].pontos;
    }
  }

  for (j = 0; j < times.length; j++) {
    if (maior == times[j].pontos) {
      winner.push(times[j].nome);
    }
  }

  document.getElementById("win").innerHTML = winner;
}
