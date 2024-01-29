import AppDataSource from '../../config/typeorm'
import { User } from '../../models/user.model'

const userRepo = AppDataSource.getRepository(User)

export const signUpService = async (user: User): Promise<User> => {
    return await userRepo.save(user)
}

export const getIdByUserNameService = async (
    userName: string,
): Promise<User | null> => {
    return await userRepo.findOne({
        select: { id: true },
        where: { userName },
    })
}

export const getUserByUserNameService = async (
    userName: string,
): Promise<User | null> => {
    return await userRepo.findOne({
        select: {
            id: true,
            role: true,
            userName: true,
            password: true,
        },
        where: { userName },
    })
}
