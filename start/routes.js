'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'CalendarController.loadCalendar')

Route.on('/sign_in').render('pages/sign_in')
Route.post('/sign_in', 'SignInController.login')
Route.get('/sign_out', async ({ auth, response }) => {
  await auth.logout();
  return response.redirect('/');
})
