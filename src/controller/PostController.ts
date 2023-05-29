import {ZodError} from 'zod'
import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { CreatePostSchema } from "../DTOs/post/createPost.dto";
import { BaseError } from "../errors/BaseError";

export class PostController{
    constructor(
        private PostBusiness: PostBusiness
    ){}

    public createPost = async(req: Request, res: Response)=> {
try {
    const input = CreatePostSchema.parse({
        name: req.body.name,
        token: req.headers.authorization
      })

      const result = await this.PostBusiness.createPost(input)

      res.status(201).send(result)

} catch (error) {
     console.log(error)

      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("Erro inesperado")
      }
}

       
    }

    public getPost = async(req: Request, res: Response) =>{
        
    }
    public editPost = async(req: Request, res: Response)=> {

    }

    public deletePost = async(req: Request, res: Response) =>{

    }

    public likeOrDislikePost = async(req: Request, res: Response) =>{

    }



    

}