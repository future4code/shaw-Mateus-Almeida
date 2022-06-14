import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await connection("aula49_recipes")

      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}
























// exercicios 
// 1
type tipoNome = {
   id: string,
   name: string,
   email: string,
   type: any
}

export default async function selectAllUsers(): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}
export const getFiltrarNome = async (req: Request, res: Response): Promise<void> => {
   const buscaNome = req.query.buscaNome
   try {
      if (buscaNome === '') {
         throw new Error("e obrigatorio passar um nome!")
      }
      const resultado = await connection("aula48_exercicio")
         .where("buscaNome", "like", `%${buscaNome}%`)
      const filtroResultado = resultado.map(toResultado)
      res.status(200).send(filtroResultado)
   } catch (error) {
      res.status(500).send(error)

   }
}
const toResultado = (input: any): tipoNome => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}
