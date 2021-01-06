'use strict'

const Days = use('App/Models/Day')

class CalendarController {
  async loadCalendar({view}) {
    const jan1 = await Days.findBy('day', 'jan1')

    return view.render('pages/calendar', { jan1 });
  }

  async descriptionClick({ view, params }) {
    const descriptionClick = params.day;

    const jan1 = await Days.findBy('day', 'jan1')

    return view.render('pages/calendar', { descriptionClick, jan1 });
  }
}

module.exports = CalendarController
