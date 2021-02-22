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

Route.get('/', 'BlogController.loadBlog').middleware(['auth'])

Route.on('/create_user').render('auth.create_user')
Route.post('/create_user', 'SignInController.createUser').validator('CreateUser')

Route.on('/sign_in').render('auth/sign_in')
Route.post('/sign_in', 'SignInController.signIn').validator('SignIn')

Route.get('/sign_out', async ({ auth, response }) => {
  await auth.logout();
  return response.redirect('back');
})

Route.on('/register').render('pages/register').middleware(['auth'])
Route.post('/register', 'RegisterController.register')

Route.get('/your_registers', 'RegisterController.loadRegisters').middleware(['auth'])
Route.get('/your_registers/delete_click/:id', 'RegisterController.deleteBtnClick')
Route.get('/your_registers/delete/:id', 'RegisterController.deleteRegistration')
Route.get('/your_register_edit/:id', 'RegisterController.editBtnClick')
Route.post('/update_registration/:id', 'RegisterController.updateRegistration')

Route.get('/admin', 'AdminController.loadAdminPage').middleware(['auth'])

Route.get('/blog', 'BlogController.loadBlog').middleware(['auth'])
Route.post('/blog', 'BlogController.sendBlog').validator('Blog')
Route.get('/blog/blog_delete/:id', 'BlogController.deleteBlog')
Route.get('/blog/blog_edit/:id', 'BlogController.editBlog')
Route.post('/blog/blog_update/:id', 'BlogController.updateBlog').validator('Blog')

Route.get('blog_comments/:id', 'BlogController.loadComments').middleware(['auth'])
Route.post('blog_comments/:id', 'BlogController.sendBlogComment').validator('BlogComments')
Route.get('blog_comments/delete/:id', 'BlogController.deleteComment')

Route.get('/payments/:registerId', 'PaymentController.directToPayments')
Route.get('/start/payment/:style', 'PaymentController.startPay')
Route.get('/payments/try/pay', 'PaymentController.tryPay')
Route.get('pay/checkout', 'PaymentController.payCheckout')
Route.get('/pay/error', 'PaymentController.payError')
Route.get('/pay/success', 'PaymentController.paySuccess')

Route.on('/calendar').render('calendar/months_list')

Route.get('/January', 'CalendarController.loadJanuary')
Route.get('/january/:day', 'CalendarController.januaryDescriptionClick')
Route.post('/january/change_day_description/:day', 'CalendarController.ChangeJanuaryDayDescription')

Route.get('/February', 'CalendarController.loadFebruary')
Route.get('/february/:day', 'CalendarController.februaryDescriptionClick')
Route.post('/february/change_day_description/:day', 'CalendarController.ChangeFebruaryDayDescription')

Route.get('/March', 'CalendarController.loadMarch')
Route.get('/march/:day', 'CalendarController.marchDescriptionClick')
Route.post('/march/change_day_description/:day', 'CalendarController.ChangeMarchDayDescription')

Route.get('/April', 'CalendarController.loadApril')
Route.get('/april/:day', 'CalendarController.aprilDescriptionClick')
Route.post('/april/change_day_description/:day', 'CalendarController.ChangeAprilDayDescription')

Route.get('/May', 'CalendarController.loadMay')
Route.get('/may/:day', 'CalendarController.mayDescriptionClick')
Route.post('/may/change_day_description/:day', 'CalendarController.ChangeMayDayDescription')

Route.get('/June', 'CalendarController.loadJune')
Route.get('/june/:day', 'CalendarController.juneDescriptionClick')
Route.post('/june/change_day_description/:day', 'CalendarController.ChangeJuneDayDescription')

Route.get('/July', 'CalendarController.loadJuly')
Route.get('/july/:day', 'CalendarController.julyDescriptionClick')
Route.post('/july/change_day_description/:day', 'CalendarController.ChangeJulyDayDescription')

Route.get('/August', 'CalendarController.loadAugust')
Route.get('/august/:day', 'CalendarController.augustDescriptionClick')
Route.post('/august/change_day_description/:day', 'CalendarController.ChangeAugustDayDescription')

Route.get('/September', 'CalendarController.loadSeptember')
Route.get('/september/:day', 'CalendarController.septemberDescriptionClick')
Route.post('/september/change_day_description/:day', 'CalendarController.ChangeSeptemberDayDescription')

Route.get('/October', 'CalendarController.loadOctober')
Route.get('/october/:day', 'CalendarController.octoberDescriptionClick')
Route.post('/october/change_day_description/:day', 'CalendarController.ChangeOctoberDayDescription')

Route.get('/November', 'CalendarController.loadNovember')
Route.get('/november/:day', 'CalendarController.novemberDescriptionClick')
Route.post('/november/change_day_description/:day', 'CalendarController.ChangeNovemberDayDescription')

Route.get('/December', 'CalendarController.loadDecember')
Route.get('/december/:day', 'CalendarController.decemberDescriptionClick')
Route.post('/december/change_day_description/:day', 'CalendarController.ChangeDecemberDayDescription')