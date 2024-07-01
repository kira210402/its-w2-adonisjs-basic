/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import AuthController from '#controllers/auth_controller'

router.where('id', router.matchers.number()) //define global route constraint

router
  .group(() => {

    // auth routers
    router.post('/login', [AuthController, 'login'])
    router.post('/register', [AuthController, 'register'])

    // user routers
    router
      .group(() => {
        router.get('/', [UsersController, 'index']).use(middleware.pagination())
      })
      .prefix('/users')
      .use(middleware.auth())
  })
  .prefix('/api/v1')

