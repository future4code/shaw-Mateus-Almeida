// 3
type PostRegra ={
    autor:string,
    texto:string
}


const posts:PostRegra[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
  //b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
  function buscarPostsPorAutor(posts:PostRegra[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
 console.table(buscarPostsPorAutor(posts, "Lord Voldemort"));
 // as entradas da funçoes sao o array de objeto e o nome do autor 
  