fetch("test.json") // Faz a requisição ao arquivo JSON
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    // Seleciona a div e insere os dados formatados
    document.getElementById("conteudo").innerHTML = `
      <p><strong>Nome:</strong> ${data.nome}</p>
      <p><strong>Idade:</strong> ${data.idade} anos</p>
      <p><strong>Cidade:</strong> ${data.cidade}</p>
      <p><strong>Habilidades:</strong> ${data.habilidades.join(", ")}</p>
    `;
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));
