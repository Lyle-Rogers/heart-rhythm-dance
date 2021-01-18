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

Route.on('/').render('auth/register')

Route.on('/register').render('auth/register')
Route.post('/register', 'SignInController.register').validator('Register')

Route.on('/sign_in').render('auth/sign_in')
Route.post('/sign_in', 'SignInController.signIn').validator('SignIn')

Route.get('/sign_out', async ({ auth, response }) => {
  await auth.logout();
  return response.redirect('back');
})

Route.get('/blog', 'BlogController.loadBlog')
Route.post('/blog', 'BlogController.sendBlog')
Route.get('/blog/blog_delete/:id', 'BlogController.deleteBlog')
Route.get('/blog/blog_edit/:id', 'BlogController.editBlog')
Route.post('/blog/blog_update/:id', 'BlogController.updateBlog')

Route.get('blog_comments/:id', 'BlogController.loadComments')
Route.post('blog_comments/:id', 'BlogController.sendBlogComment')
Route.get('blog_comments/delete/:id', 'BlogController.deleteComment')

Route.on('/calendar').render('calendar/months_list')

Route.get('/january', 'CalendarController.loadJanuary')
Route.get('/january/:day', 'CalendarController.januaryDescriptionClick')
Route.post('/january/change_day_description/:day', 'CalendarController.ChangeJanuaryDayDescription')

Route.get('/february', 'CalendarController.loadFebruary')
Route.get('/february/:day', 'CalendarController.februaryDescriptionClick')
Route.post('/february/change_day_description/:day', 'CalendarController.ChangeFebruaryDayDescription')

Route.get('/march', 'CalendarController.loadMarch')
Route.get('/march/:day', 'CalendarController.marchDescriptionClick')
Route.post('/march/change_day_description/:day', 'CalendarController.ChangeMarchDayDescription')

Route.get('/april', 'CalendarController.loadApril')
Route.get('/april/:day', 'CalendarController.aprilDescriptionClick')
Route.post('/april/change_day_description/:day', 'CalendarController.ChangeAprilDayDescription')

Route.get('/may', 'CalendarController.loadMay')
Route.get('/may/:day', 'CalendarController.mayDescriptionClick')
Route.post('/may/change_day_description/:day', 'CalendarController.ChangeMayDayDescription')

Route.get('/june', 'CalendarController.loadJune')
Route.get('/june/:day', 'CalendarController.juneDescriptionClick')
Route.post('/june/change_day_description/:day', 'CalendarController.ChangeJuneDayDescription')

Route.get('/july', 'CalendarController.loadJuly')
Route.get('/july/:day', 'CalendarController.julyDescriptionClick')
Route.post('/july/change_day_description/:day', 'CalendarController.ChangeJulyDayDescription')

Route.get('/august', 'CalendarController.loadAugust')
Route.get('/august/:day', 'CalendarController.augustDescriptionClick')
Route.post('/august/change_day_description/:day', 'CalendarController.ChangeAugustDayDescription')

Route.get('/september', 'CalendarController.loadSeptember')
Route.get('/september/:day', 'CalendarController.septemberDescriptionClick')
Route.post('/september/change_day_description/:day', 'CalendarController.ChangeSeptemberDayDescription')

Route.get('/october', 'CalendarController.loadOctober')
Route.get('/october/:day', 'CalendarController.octoberDescriptionClick')
Route.post('/october/change_day_description/:day', 'CalendarController.ChangeOctoberDayDescription')

Route.get('/november', 'CalendarController.loadNovember')
Route.get('/november/:day', 'CalendarController.novemberDescriptionClick')
Route.post('/november/change_day_description/:day', 'CalendarController.ChangeNovemberDayDescription')

Route.get('/december', 'CalendarController.loadDecember')
Route.get('/december/:day', 'CalendarController.decemberDescriptionClick')
Route.post('/december/change_day_description/:day', 'CalendarController.ChangeDecemberDayDescription')