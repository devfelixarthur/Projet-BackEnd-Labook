import z from 'zod'

export interface DeletePostInputDTO{
    token: string,
    idToDelete: String,
}

export type DeletePostOutputDTO = undefined

export const DeletePosSchema = z.object({
    token: z.string().min(1),
    idToDelete: z.string().min(1),
}).transform(data=> data as DeletePostInputDTO)