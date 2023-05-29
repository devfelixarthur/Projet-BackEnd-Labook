import { Request } from "express";
import { BaseDatabase} from "./BaseDataBase";
import { PostDB } from "../models/Post";

export class PostDataBase extends BaseDatabase{
    static POST_TABLE = 'posts'
    static LIKE_DELIKE_TABLE = 'likes_dislikes' 

    public insertPost = async (
        postDB: PostDB
      ): Promise<void> => {
        await BaseDatabase
          .connection(PostDataBase.POST_TABLE)
          .insert(postDB)
      }
}