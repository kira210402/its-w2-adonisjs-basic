import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async index({ pagination, response }: HttpContext) {
    const { perPage, page } = pagination
    const users = await User.query().paginate(page, perPage)
    return response.ok({
      users
    })

  }
}
