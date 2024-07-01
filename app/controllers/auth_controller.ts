import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {

  async login({ auth, request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    const tokens = await auth.use('jwt').generate(user) as {
      token: string
      type: string,
      expiresIn: number | string | undefined
    }
    return response.ok({
      message: 'Login successful',
      token: tokens.token,
      user
    })
  }

  async register({ request, response }: HttpContext) {
    const data = request.only(['name', 'email', 'password', 'age', 'address'])
    const user = await User.create(data)
    return response.created({
      message: 'Register success',
      user
    })
  }
}