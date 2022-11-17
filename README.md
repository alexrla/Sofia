# Sofia

- **API que disponibiliza citações filosóficas;**



#### POST /create-quote

```typescript
body: {
  "quote": "Deve-se temer a velhice, porque ela nunca vem só. Bengalas são provas de idade e não de prudência.",
  "author": "platao",
  "author_name": "Platão"
}
```

- **Obs.:**
  - **`autor`: corresponde ao nome que vai ser utilizada na hora da filtragem, quando eu quiser retornar citações referentes a um determinado autor (nesse campo o que se espera são nomes sem acento e em caixa baixa, além de ser o "principal nome" do autor, o nome pelo qual ele é mais conhecido, por exemplo, podemos ter citações do filósofo `Friedrich Nietzsche`, mas na hora de buscar as citações desse filósofo, utilizamos apenas o termo(nome) `Nietzsche`, pelo qual ele  é mais reconhecido);**
  - **`author_name`: corresponde, de fato, ao nome do autor da citação, será esse campo que será retornando, quando o usuário buscar por uma citação (retornamos a citação e o nome do autor, da forma que ele é escrito, tendo acento ou não);**



#### GET /search-quotes

- **Retorna todas as citações cadastradas no banco;**



#### GET /search-quote/:id

- **Retorna uma citação, por meio do seu `id`;**



#### GET /search-quotes/:author

- **Retorna as citações referentes a um autor;**



#### GET /search-quote/:author/:id

- **Retorna uma citação, com base no seu autor e no seu `id`;**



#### PUT /edit-quote/:id

- **Edita a citação, com base no seu `id`;**



#### PUT /edit-author/:id

- **Edita o nome do autor da citação, com base no `id` dela;**



#### PUT /edit-fullquote/:id

- **Edita toda a citação, incluindo o nome do seu autor, com base no `id` dela;**



#### DELETE /delete-quote/:id

- **Deleta uma citação, com base no seu `id`;**

