const express = require('express')
const bodyParser = require('body-parser')
const { Pool } = require('pg')

const app = express()
const port = 3000

app.use(bodyParser.json())

const pool = new Pool({
  user: 'seu_usuario', // Substitua pelo seu usuário
  host: 'localhost',
  database: 'seu_banco', // Substitua pelo nome do seu banco
  password: 'sua_senha', // Substitua pela sua senha
  port: 5432
})

app.post('/cadastro', async (req, res) => {
  const {
    nome,
    tipo,
    quantidade,
    localizacao,
    descricao,
    formula_quimica,
    indicacoes_uso,
    indicacoes_descarte
  } = req.body

  try {
    const result = await pool.query(
      'INSERT INTO produtos (nome, tipo, quantidade, localizacao, descricao, formula_quimica, indicacoes_uso, indicacoes_descarte) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [
        nome,
        tipo,
        quantidade,
        localizacao,
        descricao,
        formula_quimica,
        indicacoes_uso,
        indicacoes_descarte
      ]
    )

    res.json(result.rows[0])
  } catch (error) {
    console.error('Erro ao cadastrar o produto:', error)
    res.status(500).send('Erro interno do servidor')
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

//ID
// Gera automaticamente um código de 4 dígitos incrementais
document.getElementById('id_produto').value = generateProductId()

function generateProductId() {
  // Recupera o último ID armazenado (pode ser obtido do banco de dados)
  // Aqui estamos usando localStorage apenas para fins de exemplo
  let lastProductId = localStorage.getItem('lastProductId') || 0

  // Incrementa o último ID
  lastProductId++

  // Formata para um código de 4 dígitos
  let formattedId = String(lastProductId).padStart(4, '0')

  // Armazena o novo ID (atualizado) para uso futuro
  localStorage.setItem('lastProductId', lastProductId)

  return formattedId
}

document.addEventListener('DOMContentLoaded', function () {
  var mainFooter = document.getElementById('mainFooter')

  // Adiciona um ouvinte de rolagem para mostrar o footer apenas quando a tela for rolada até o final
  window.addEventListener('scroll', function () {
    var windowHeight = window.innerHeight
    var bodyHeight = document.body.offsetHeight
    var scrollPosition = window.scrollY || window.pageYOffset

    // Verifica se a tela foi rolada até o final
    if (scrollPosition + windowHeight >= bodyHeight) {
      mainFooter.classList.add('show-footer')
    } else {
      mainFooter.classList.remove('show-footer')
    }
  })
})
