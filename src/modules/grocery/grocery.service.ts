import { DeleteResult, UpdateResult } from 'typeorm'

import AppDataSource from '../../config/typeorm'
import { Grocery } from '../../models/grocery.model'

const groceryRepo = AppDataSource.getRepository(Grocery)

export const addGroceryService = async (grocery: Grocery): Promise<Grocery> => {
    return await groceryRepo.save(grocery)
}

export const getGroceriesService = async (): Promise<Grocery[] | null> => {
    return await groceryRepo.find()
}

export const updateGroceryService = async (
    id: number,
    grocery: Grocery,
): Promise<UpdateResult> => {
    return await groceryRepo.update({ id }, grocery)
}

export const deleteGroceryService = async (
    id: number,
): Promise<DeleteResult> => {
    return await groceryRepo.delete({ id })
}
