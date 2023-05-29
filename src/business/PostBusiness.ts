import { Request, Response } from "express";
import { PostDataBase } from "../database/PostDataBase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { CreatePostInputDTO, CreatePostOutputDTO } from "../DTOs/post/createPost.dto";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { Post } from "../models/Post";

export class PostBusiness{
    constructor(
        private postDatabase: PostDataBase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
    ){}

   public createPost = async (
    input: CreatePostInputDTO
  ): Promise<CreatePostOutputDTO> => {
    const { content, token } = input

    const payload = this.tokenManager.getPayload(token)

    if (!payload) {
      throw new UnauthorizedError()
    }

    const id = this.idGenerator.generate()

    const post = new Post(
      id,
      content,
      0,
      0,
      new Date().toISOString(),
      new Date().toISOString(),
      payload.id,
      payload.name
    )

    const postDB = post.toDBModel()
    await this.postDatabase.insertPost(postDB)

    const result: CreatePostOutputDTO = undefined

    return result
  }    

}