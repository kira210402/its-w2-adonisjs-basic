import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export default class ClientException extends Exception {
  static status = 500
  static code = 'CLIENT_EXCEPTION'

  async handle(error: this, ctx: HttpContext) {
    ctx.response.status(error.status).send({
      message: error.code,
    })
  }
}