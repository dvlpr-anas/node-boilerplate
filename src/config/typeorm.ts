import { join } from 'path'
import { DataSource } from 'typeorm'

import { mysqlConfig } from './env-config/get-mysql'

export default new DataSource({
    ...mysqlConfig(),
    type: 'mysql',
    entities: [join(__dirname, '../', 'models', '*.model.{ts,js}')],
})
