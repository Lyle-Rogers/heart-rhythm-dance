'use strict'

const Days = use('App/Models/Day')

class CalendarController {
  async loadCalendar({view}) {
    const jan1 = await Days.findBy('day', 'jan1')
    const jan2 = await Days.findBy('day', 'jan2')
    const jan3 = await Days.findBy('day', 'jan3')
    const jan4 = await Days.findBy('day', 'jan4')
    const jan5 = await Days.findBy('day', 'jan5')
    const jan6 = await Days.findBy('day', 'jan6')
    const jan7 = await Days.findBy('day', 'jan7')
    const jan8 = await Days.findBy('day', 'jan8')
    const jan9 = await Days.findBy('day', 'jan9')
    const jan10 = await Days.findBy('day', 'jan10')
    const jan11 = await Days.findBy('day', 'jan11')
    const jan12 = await Days.findBy('day', 'jan12')
    const jan13 = await Days.findBy('day', 'jan13')
    const jan14 = await Days.findBy('day', 'jan14')
    const jan15 = await Days.findBy('day', 'jan15')
    const jan16 = await Days.findBy('day', 'jan16')
    const jan17 = await Days.findBy('day', 'jan17')
    const jan18 = await Days.findBy('day', 'jan18')
    const jan19 = await Days.findBy('day', 'jan19')
    const jan20 = await Days.findBy('day', 'jan20')
    const jan21 = await Days.findBy('day', 'jan21')
    const jan22 = await Days.findBy('day', 'jan22')
    const jan23 = await Days.findBy('day', 'jan23')
    const jan24 = await Days.findBy('day', 'jan24')
    const jan25 = await Days.findBy('day', 'jan25')
    const jan26 = await Days.findBy('day', 'jan26')
    const jan27 = await Days.findBy('day', 'jan27')
    const jan28 = await Days.findBy('day', 'jan28')
    const jan29 = await Days.findBy('day', 'jan29')
    const jan30 = await Days.findBy('day', 'jan30')
    const jan31 = await Days.findBy('day', 'jan31')


    return view.render('pages/calendar', { jan1, jan2, jan3, jan4, jan5, jan6, jan7, jan8, jan9, jan10, jan11, jan12, jan13, jan14, jan15, jan16, jan17, jan18, jan19, jan20, jan21, jan22, jan23, jan24, jan25, jan26, jan27, jan28, jan29, jan30, jan31 });
  }

  async descriptionClick({ view, params }) {
    const descriptionClicked = params.day;

    const jan1 = await Days.findBy('day', 'jan1')
    const jan2 = await Days.findBy('day', 'jan2')
    const jan3 = await Days.findBy('day', 'jan3')
    const jan4 = await Days.findBy('day', 'jan4')
    const jan5 = await Days.findBy('day', 'jan5')
    const jan6 = await Days.findBy('day', 'jan6')
    const jan7 = await Days.findBy('day', 'jan7')
    const jan8 = await Days.findBy('day', 'jan8')
    const jan9 = await Days.findBy('day', 'jan9')
    const jan10 = await Days.findBy('day', 'jan10')
    const jan11 = await Days.findBy('day', 'jan11')
    const jan12 = await Days.findBy('day', 'jan12')
    const jan13 = await Days.findBy('day', 'jan13')
    const jan14 = await Days.findBy('day', 'jan14')
    const jan15 = await Days.findBy('day', 'jan15')
    const jan16 = await Days.findBy('day', 'jan16')
    const jan17 = await Days.findBy('day', 'jan17')
    const jan18 = await Days.findBy('day', 'jan18')
    const jan19 = await Days.findBy('day', 'jan19')
    const jan20 = await Days.findBy('day', 'jan20')
    const jan21 = await Days.findBy('day', 'jan21')
    const jan22 = await Days.findBy('day', 'jan22')
    const jan23 = await Days.findBy('day', 'jan23')
    const jan24 = await Days.findBy('day', 'jan24')
    const jan25 = await Days.findBy('day', 'jan25')
    const jan26 = await Days.findBy('day', 'jan26')
    const jan27 = await Days.findBy('day', 'jan27')
    const jan28 = await Days.findBy('day', 'jan28')
    const jan29 = await Days.findBy('day', 'jan29')
    const jan30 = await Days.findBy('day', 'jan30')
    const jan31 = await Days.findBy('day', 'jan31')


    return view.render('pages/calendar', { descriptionClicked, jan1, jan2, jan3, jan4, jan5, jan6, jan7, jan8, jan9, jan10, jan11, jan12, jan13, jan14, jan15, jan16, jan17, jan18, jan19, jan20, jan21, jan22, jan23, jan24, jan25, jan26, jan27, jan28, jan29, jan30, jan31 });
  }

  async ChangeDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/')
  }
}

module.exports = CalendarController
