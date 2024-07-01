import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'
import ClientException from '#exceptions/client_exception'

export default class UsersController {
  async index({ pagination }: HttpContext) {
    const { perPage, page } = pagination
    const users = await User.query().paginate(page, perPage)
    // return clientexception

    throw new ClientException()

  }

  async store({ request }: HttpContext) {
    const data = request.only(['name', 'email', 'password', 'age', 'address'])
    const user = await User.create(data)
    return user
  }
}
