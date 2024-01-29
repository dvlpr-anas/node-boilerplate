import config from 'config'

export const mysqlConfig = () => {
    return config.get<{
        host: string
        port: number
        username: string
        password: string
        database: string
        synchronize: boolean
        logging: boolean
    }>('mysqlConfig')
}
