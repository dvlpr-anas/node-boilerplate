import config from 'config'
import { Secret } from 'jsonwebtoken'

export const commanConfig = () => {
    return config.get<{
        port: number
        nede_env: string
        accessToken: Secret
        refreshToken: Secret
    }>('comman')
}
