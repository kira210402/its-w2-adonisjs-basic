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

router.where('id', router.matchers.number()) //define global route constraint

router
  .group(() => {
    router.get('/', [UsersController, 'index']).use(middleware.pagination())
    router.post('/', [UsersController, 'store'])
  })
  .prefix('/users')

router.get('/:id', async () => {
  return {
    hello: 'world',
  }
})
