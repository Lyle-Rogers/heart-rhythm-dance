'use strict'

const Days = use('App/Models/Day')

class CalendarController {
  async loadJanuary({view}) {
    const jan1 = await Days.findBy('day', 'jan1')
    if (jan1.description === null) {
      jan1.description = "";
      await jan1.save()
    }
    const jan2 = await Days.findBy('day', 'jan2')
    if (jan2.description === null) {
      jan2.description = "";
      await jan2.save()
    }
    const jan3 = await Days.findBy('day', 'jan3')
    if (jan3.description === null) {
      jan3.description = "";
      await jan3.save()
    }
    const jan4 = await Days.findBy('day', 'jan4')
    if (jan4.description === null) {
      jan4.description = "";
      await jan4.save()
    }
    const jan5 = await Days.findBy('day', 'jan5')
    if (jan5.description === null) {
      jan5.description = "";
      await jan5.save()
    }
    const jan6 = await Days.findBy('day', 'jan6')
    if (jan6.description === null) {
      jan6.description = "";
      await jan6.save()
    }
    const jan7 = await Days.findBy('day', 'jan7')
    if (jan7.description === null) {
      jan7.description = "";
      await jan7.save()
    }
    const jan8 = await Days.findBy('day', 'jan8')
    if (jan8.description === null) {
      jan8.description = "";
      await jan8.save()
    }
    const jan9 = await Days.findBy('day', 'jan9')
    if (jan9.description === null) {
      jan9.description = "";
      await jan9.save()
    }
    const jan10 = await Days.findBy('day', 'jan10')
    if (jan10.description === null) {
      jan10.description = "";
      await jan10.save()
    }
    const jan11 = await Days.findBy('day', 'jan11')
    if (jan11.description === null) {
      jan11.description = "";
      await jan11.save()
    }
    const jan12 = await Days.findBy('day', 'jan12')
    if (jan12.description === null) {
      jan12.description = "";
      await jan12.save()
    }
    const jan13 = await Days.findBy('day', 'jan13')
    if (jan13.description === null) {
      jan13.description = "";
      await jan13.save()
    }
    const jan14 = await Days.findBy('day', 'jan14')
    if (jan14.description === null) {
      jan14.description = "";
      await jan14.save()
    }
    const jan15 = await Days.findBy('day', 'jan15')
    if (jan15.description === null) {
      jan15.description = "";
      await jan15.save()
    }
    const jan16 = await Days.findBy('day', 'jan16')
    if (jan16.description === null) {
      jan16.description = "";
      await jan16.save()
    }
    const jan17 = await Days.findBy('day', 'jan17')
    if (jan17.description === null) {
      jan17.description = "";
      await jan17.save()
    }
    const jan18 = await Days.findBy('day', 'jan18')
    if (jan18.description === null) {
      jan18.description = "";
      await jan18.save()
    }
    const jan19 = await Days.findBy('day', 'jan19')
    if (jan19.description === null) {
      jan19.description = "";
      await jan19.save()
    }
    const jan20 = await Days.findBy('day', 'jan20')
    if (jan20.description === null) {
      jan20.description = "";
      await jan20.save()
    }
    const jan21 = await Days.findBy('day', 'jan21')
    if (jan21.description === null) {
      jan21.description = "";
      await jan21.save()
    }
    const jan22 = await Days.findBy('day', 'jan22')
    if (jan22.description === null) {
      jan22.description = "";
      await jan22.save()
    }
    const jan23 = await Days.findBy('day', 'jan23')
    if (jan23.description === null) {
      jan23.description = "";
      await jan23.save()
    }
    const jan24 = await Days.findBy('day', 'jan24')
    if (jan24.description === null) {
      jan24.description = "";
      await jan24.save()
    }
    const jan25 = await Days.findBy('day', 'jan25')
    if (jan25.description === null) {
      jan25.description = "";
      await jan25.save()
    }
    const jan26 = await Days.findBy('day', 'jan26')
    if (jan26.description === null) {
      jan26.description = "";
      await jan26.save()
    }
    const jan27 = await Days.findBy('day', 'jan27')
    if (jan27.description === null) {
      jan27.description = "";
      await jan27.save()
    }
    const jan28 = await Days.findBy('day', 'jan28')
    if (jan28.description === null) {
      jan28.description = "";
      await jan28.save()
    }
    const jan29 = await Days.findBy('day', 'jan29')
    if (jan29.description === null) {
      jan29.description = "";
      await jan29.save()
    }
    const jan30 = await Days.findBy('day', 'jan30')
    if (jan30.description === null) {
      jan30.description = "";
      await jan30.save()
    }
    const jan31 = await Days.findBy('day', 'jan31')
    if (jan31.description === null) {
      jan31.description = "";
      await jan31.save()
    }

    return view.render('calendar/january', { jan1, jan2, jan3, jan4, jan5, jan6, jan7, jan8, jan9, jan10, jan11, jan12, jan13, jan14, jan15, jan16, jan17, jan18, jan19, jan20, jan21, jan22, jan23, jan24, jan25, jan26, jan27, jan28, jan29, jan30, jan31 })
  }

  async januaryDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
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

      return view.render('calendar/january', { descriptionClicked, jan1, jan2, jan3, jan4, jan5, jan6, jan7, jan8, jan9, jan10, jan11, jan12, jan13, jan14, jan15, jan16, jan17, jan18, jan19, jan20, jan21, jan22, jan23, jan24, jan25, jan26, jan27, jan28, jan29, jan30, jan31 })
    } else {
      return response.redirect('/january')
    }
  }

  async ChangeJanuaryDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/january')
  }

  async loadFebruary({view}) {
    const feb1 = await Days.findBy('day', 'feb1')
    if (feb1.description === null) {
      feb1.description = "";
      await feb1.save()
    }
    const feb2 = await Days.findBy('day', 'feb2')
    if (feb2.description === null) {
      feb2.description = "";
      await feb2.save()
    }
    const feb3 = await Days.findBy('day', 'feb3')
    if (feb3.description === null) {
      feb3.description = "";
      await feb3.save()
    }
    const feb4 = await Days.findBy('day', 'feb4')
    if (feb4.description === null) {
      feb4.description = "";
      await feb4.save()
    }
    const feb5 = await Days.findBy('day', 'feb5')
    if (feb5.description === null) {
      feb5.description = "";
      await feb5.save()
    }
    const feb6 = await Days.findBy('day', 'feb6')
    if (feb6.description === null) {
      feb6.description = "";
      await feb6.save()
    }
    const feb7 = await Days.findBy('day', 'feb7')
    if (feb7.description === null) {
      feb7.description = "";
      await feb7.save()
    }
    const feb8 = await Days.findBy('day', 'feb8')
    if (feb8.description === null) {
      feb8.description = "";
      await feb8.save()
    }
    const feb9 = await Days.findBy('day', 'feb9')
    if (feb9.description === null) {
      feb9.description = "";
      await feb9.save()
    }
    const feb10 = await Days.findBy('day', 'feb10')
    if (feb10.description === null) {
      feb10.description = "";
      await feb10.save()
    }
    const feb11 = await Days.findBy('day', 'feb11')
    if (feb11.description === null) {
      feb11.description = "";
      await feb11.save()
    }
    const feb12 = await Days.findBy('day', 'feb12')
    if (feb12.description === null) {
      feb12.description = "";
      await feb12.save()
    }
    const feb13 = await Days.findBy('day', 'feb13')
    if (feb13.description === null) {
      feb13.description = "";
      await feb13.save()
    }
    const feb14 = await Days.findBy('day', 'feb14')
    if (feb14.description === null) {
      feb14.description = "";
      await feb14.save()
    }
    const feb15 = await Days.findBy('day', 'feb15')
    if (feb15.description === null) {
      feb15.description = "";
      await feb15.save()
    }
    const feb16 = await Days.findBy('day', 'feb16')
    if (feb16.description === null) {
      feb16.description = "";
      await feb16.save()
    }
    const feb17 = await Days.findBy('day', 'feb17')
    if (feb17.description === null) {
      feb17.description = "";
      await feb17.save()
    }
    const feb18 = await Days.findBy('day', 'feb18')
    if (feb18.description === null) {
      feb18.description = "";
      await feb18.save()
    }
    const feb19 = await Days.findBy('day', 'feb19')
    if (feb19.description === null) {
      feb19.description = "";
      await feb19.save()
    }
    const feb20 = await Days.findBy('day', 'feb20')
    if (feb20.description === null) {
      feb20.description = "";
      await feb20.save()
    }
    const feb21 = await Days.findBy('day', 'feb21')
    if (feb21.description === null) {
      feb21.description = "";
      await feb21.save()
    }
    const feb22 = await Days.findBy('day', 'feb22')
    if (feb22.description === null) {
      feb22.description = "";
      await feb22.save()
    }
    const feb23 = await Days.findBy('day', 'feb23')
    if (feb23.description === null) {
      feb23.description = "";
      await feb23.save()
    }
    const feb24 = await Days.findBy('day', 'feb24')
    if (feb24.description === null) {
      feb24.description = "";
      await feb24.save()
    }
    const feb25 = await Days.findBy('day', 'feb25')
    if (feb25.description === null) {
      feb25.description = "";
      await feb25.save()
    }
    const feb26 = await Days.findBy('day', 'feb26')
    if (feb26.description === null) {
      feb26.description = "";
      await feb26.save()
    }
    const feb27 = await Days.findBy('day', 'feb27')
    if (feb27.description === null) {
      feb27.description = "";
      await feb27.save()
    }
    const feb28 = await Days.findBy('day', 'feb28')
    if (feb28.description === null) {
      feb28.description = "";
      await feb28.save()
    }

    return view.render('calendar/february', { feb1, feb2, feb3, feb4, feb5, feb6, feb7, feb8, feb9, feb10, feb11, feb12, feb13, feb14, feb15, feb16, feb17, feb18, feb19, feb20, feb21, feb22, feb23, feb24, feb25, feb26, feb27, feb28 })
  }

  async  februaryDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const feb1 = await Days.findBy('day', 'feb1')
      const feb2 = await Days.findBy('day', 'feb2')
      const feb3 = await Days.findBy('day', 'feb3')
      const feb4 = await Days.findBy('day', 'feb4')
      const feb5 = await Days.findBy('day', 'feb5')
      const feb6 = await Days.findBy('day', 'feb6')
      const feb7 = await Days.findBy('day', 'feb7')
      const feb8 = await Days.findBy('day', 'feb8')
      const feb9 = await Days.findBy('day', 'feb9') 
      const feb10 = await Days.findBy('day', 'feb10')
      const feb11 = await Days.findBy('day', 'feb11')
      const feb12 = await Days.findBy('day', 'feb12')
      const feb13 = await Days.findBy('day', 'feb13')
      const feb14 = await Days.findBy('day', 'feb14')
      const feb15 = await Days.findBy('day', 'feb15')
      const feb16 = await Days.findBy('day', 'feb16')
      const feb17 = await Days.findBy('day', 'feb17')
      const feb18 = await Days.findBy('day', 'feb18')
      const feb19 = await Days.findBy('day', 'feb19')
      const feb20 = await Days.findBy('day', 'feb20')
      const feb21 = await Days.findBy('day', 'feb21')
      const feb22 = await Days.findBy('day', 'feb22')
      const feb23 = await Days.findBy('day', 'feb23')
      const feb24 = await Days.findBy('day', 'feb24')
      const feb25 = await Days.findBy('day', 'feb25')
      const feb26 = await Days.findBy('day', 'feb26')
      const feb27 = await Days.findBy('day', 'feb27')
      const feb28 = await Days.findBy('day', 'feb28')
      
      return view.render('calendar/february', { descriptionClicked, feb1, feb2, feb3, feb4, feb5, feb6, feb7, feb8, feb9, feb10, feb11, feb12, feb13, feb14, feb15, feb16, feb17, feb18, feb19, feb20, feb21, feb22, feb23, feb24, feb25, feb26, feb27, feb28 })
    } else {
      return response.redirect('/february')
    }
  }

  async ChangeFebruaryDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/february')
  }

  async loadMarch({view}) {
    const mar1 = await Days.findBy('day', 'mar1')
    if (mar1.description === null) {
      mar1.description = "";
      await mar1.save()
    }
    const mar2 = await Days.findBy('day', 'mar2')
    if (mar2.description === null) {
      mar2.description = "";
      await mar2.save()
    }
    const mar3 = await Days.findBy('day', 'mar3')
    if (mar3.description === null) {
      mar3.description = "";
      await mar3.save()
    }
    const mar4 = await Days.findBy('day', 'mar4')
    if (mar4.description === null) {
      mar4.description = "";
      await mar4.save()
    }
    const mar5 = await Days.findBy('day', 'mar5')
    if (mar5.description === null) {
      mar5.description = "";
      await mar5.save()
    }
    const mar6 = await Days.findBy('day', 'mar6')
    if (mar6.description === null) {
      mar6.description = "";
      await mar6.save()
    }
    const mar7 = await Days.findBy('day', 'mar7')
    if (mar7.description === null) {
      mar7.description = "";
      await mar7.save()
    }
    const mar8 = await Days.findBy('day', 'mar8')
    if (mar8.description === null) {
      mar8.description = "";
      await mar8.save()
    }
    const mar9 = await Days.findBy('day', 'mar9')
    if (mar9.description === null) {
      mar9.description = "";
      await mar9.save()
    }
    const mar10 = await Days.findBy('day', 'mar10')
    if (mar10.description === null) {
      mar10.description = "";
      await mar10.save()
    }
    const mar11 = await Days.findBy('day', 'mar11')
    if (mar11.description === null) {
      mar11.description = "";
      await mar11.save()
    }
    const mar12 = await Days.findBy('day', 'mar12')
    if (mar12.description === null) {
      mar12.description = "";
      await mar12.save()
    }
    const mar13 = await Days.findBy('day', 'mar13')
    if (mar13.description === null) {
      mar13.description = "";
      await mar13.save()
    }
    const mar14 = await Days.findBy('day', 'mar14')
    if (mar14.description === null) {
      mar14.description = "";
      await mar14.save()
    }
    const mar15 = await Days.findBy('day', 'mar15')
    if (mar15.description === null) {
      mar15.description = "";
      await mar15.save()
    }
    const mar16 = await Days.findBy('day', 'mar16')
    if (mar16.description === null) {
      mar16.description = "";
      await mar16.save()
    }
    const mar17 = await Days.findBy('day', 'mar17')
    if (mar17.description === null) {
      mar17.description = "";
      await mar17.save()
    }
    const mar18 = await Days.findBy('day', 'mar18')
    if (mar18.description === null) {
      mar18.description = "";
      await mar18.save()
    }
    const mar19 = await Days.findBy('day', 'mar19')
    if (mar19.description === null) {
      mar19.description = "";
      await mar19.save()
    }
    const mar20 = await Days.findBy('day', 'mar20')
    if (mar20.description === null) {
      mar20.description = "";
      await mar20.save()
    }
    const mar21 = await Days.findBy('day', 'mar21')
    if (mar21.description === null) {
      mar21.description = "";
      await mar21.save()
    }
    const mar22 = await Days.findBy('day', 'mar22')
    if (mar22.description === null) {
      mar22.description = "";
      await mar22.save()
    }
    const mar23 = await Days.findBy('day', 'mar23')
    if (mar23.description === null) {
      mar23.description = "";
      await mar23.save()
    }
    const mar24 = await Days.findBy('day', 'mar24')
    if (mar24.description === null) {
      mar24.description = "";
      await mar24.save()
    }
    const mar25 = await Days.findBy('day', 'mar25')
    if (mar25.description === null) {
      mar25.description = "";
      await mar25.save()
    }
    const mar26 = await Days.findBy('day', 'mar26')
    if (mar26.description === null) {
      mar26.description = "";
      await mar26.save()
    }
    const mar27 = await Days.findBy('day', 'mar27')
    if (mar27.description === null) {
      mar27.description = "";
      await mar27.save()
    }
    const mar28 = await Days.findBy('day', 'mar28')
    if (mar28.description === null) {
      mar28.description = "";
      await mar28.save()
    }
    const mar29 = await Days.findBy('day', 'mar29')
    if (mar29.description === null) {
      mar29.description = "";
      await mar29.save()
    }
    const mar30 = await Days.findBy('day', 'mar30')
    if (mar30.description === null) {
      mar30.description = "";
      await mar30.save()
    }
    const mar31 = await Days.findBy('day', 'mar31')
    if (mar31.description === null) {
      mar31.description = "";
      await mar31.save()
    }

    return view.render('calendar/march', { mar1, mar2, mar3, mar4, mar5, mar6, mar7, mar8, mar9, mar10, mar11, mar12, mar13, mar14, mar15, mar16, mar17, mar18, mar19, mar20, mar21, mar22, mar23, mar24, mar25, mar26, mar27, mar28, mar29, mar30, mar31 })
  }

  async marchDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const mar1 = await Days.findBy('day', 'mar1')
      const mar2 = await Days.findBy('day', 'mar2')
      const mar3 = await Days.findBy('day', 'mar3')
      const mar4 = await Days.findBy('day', 'mar4')
      const mar5 = await Days.findBy('day', 'mar5')
      const mar6 = await Days.findBy('day', 'mar6')
      const mar7 = await Days.findBy('day', 'mar7')
      const mar8 = await Days.findBy('day', 'mar8')
      const mar9 = await Days.findBy('day', 'mar9') 
      const mar10 = await Days.findBy('day', 'mar10')
      const mar11 = await Days.findBy('day', 'mar11')
      const mar12 = await Days.findBy('day', 'mar12')
      const mar13 = await Days.findBy('day', 'mar13')
      const mar14 = await Days.findBy('day', 'mar14')
      const mar15 = await Days.findBy('day', 'mar15')
      const mar16 = await Days.findBy('day', 'mar16')
      const mar17 = await Days.findBy('day', 'mar17')
      const mar18 = await Days.findBy('day', 'mar18')
      const mar19 = await Days.findBy('day', 'mar19')
      const mar20 = await Days.findBy('day', 'mar20')
      const mar21 = await Days.findBy('day', 'mar21')
      const mar22 = await Days.findBy('day', 'mar22')
      const mar23 = await Days.findBy('day', 'mar23')
      const mar24 = await Days.findBy('day', 'mar24')
      const mar25 = await Days.findBy('day', 'mar25')
      const mar26 = await Days.findBy('day', 'mar26')
      const mar27 = await Days.findBy('day', 'mar27')
      const mar28 = await Days.findBy('day', 'mar28')
      const mar29 = await Days.findBy('day', 'mar29')
      const mar30 = await Days.findBy('day', 'mar30')
      const mar31 = await Days.findBy('day', 'mar31')
      
      return view.render('calendar/march', { descriptionClicked, mar1, mar2, mar3, mar4, mar5, mar6, mar7, mar8, mar9, mar10, mar11, mar12, mar13, mar14, mar15, mar16, mar17, mar18, mar19, mar20, mar21, mar22, mar23, mar24, mar25, mar26, mar27, mar28, mar29, mar30, mar31 })
    } else {
      return response.redirect('/march')
    }
  }

  async ChangeMarchDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/march')
  }

  async loadApril({view}) {
    const apr1 = await Days.findBy('day', 'apr1')
    if (apr1.description === null) {
      apr1.description = "";
      await apr1.save()
    }
    const apr2 = await Days.findBy('day', 'apr2')
    if (apr2.description === null) {
      apr2.description = "";
      await apr2.save()
    }
    const apr3 = await Days.findBy('day', 'apr3')
    if (apr3.description === null) {
      apr3.description = "";
      await apr3.save()
    }
    const apr4 = await Days.findBy('day', 'apr4')
    if (apr4.description === null) {
      apr4.description = "";
      await apr4.save()
    }
    const apr5 = await Days.findBy('day', 'apr5')
    if (apr5.description === null) {
      apr5.description = "";
      await apr5.save()
    }
    const apr6 = await Days.findBy('day', 'apr6')
    if (apr6.description === null) {
      apr6.description = "";
      await apr6.save()
    }
    const apr7 = await Days.findBy('day', 'apr7')
    if (apr7.description === null) {
      apr7.description = "";
      await apr7.save()
    }
    const apr8 = await Days.findBy('day', 'apr8')
    if (apr8.description === null) {
      apr8.description = "";
      await apr8.save()
    }
    const apr9 = await Days.findBy('day', 'apr9')
    if (apr9.description === null) {
      apr9.description = "";
      await apr9.save()
    }
    const apr10 = await Days.findBy('day', 'apr10')
    if (apr10.description === null) {
      apr10.description = "";
      await apr10.save()
    }
    const apr11 = await Days.findBy('day', 'apr11')
    if (apr11.description === null) {
      apr11.description = "";
      await apr11.save()
    }
    const apr12 = await Days.findBy('day', 'apr12')
    if (apr12.description === null) {
      apr12.description = "";
      await apr12.save()
    }
    const apr13 = await Days.findBy('day', 'apr13')
    if (apr13.description === null) {
      apr13.description = "";
      await apr13.save()
    }
    const apr14 = await Days.findBy('day', 'apr14')
    if (apr14.description === null) {
      apr14.description = "";
      await apr14.save()
    }
    const apr15 = await Days.findBy('day', 'apr15')
    if (apr15.description === null) {
      apr15.description = "";
      await apr15.save()
    }
    const apr16 = await Days.findBy('day', 'apr16')
    if (apr16.description === null) {
      apr16.description = "";
      await apr16.save()
    }
    const apr17 = await Days.findBy('day', 'apr17')
    if (apr17.description === null) {
      apr17.description = "";
      await apr17.save()
    }
    const apr18 = await Days.findBy('day', 'apr18')
    if (apr18.description === null) {
      apr18.description = "";
      await apr18.save()
    }
    const apr19 = await Days.findBy('day', 'apr19')
    if (apr19.description === null) {
      apr19.description = "";
      await apr19.save()
    }
    const apr20 = await Days.findBy('day', 'apr20')
    if (apr20.description === null) {
      apr20.description = "";
      await apr20.save()
    }
    const apr21 = await Days.findBy('day', 'apr21')
    if (apr21.description === null) {
      apr21.description = "";
      await apr21.save()
    }
    const apr22 = await Days.findBy('day', 'apr22')
    if (apr22.description === null) {
      apr22.description = "";
      await apr22.save()
    }
    const apr23 = await Days.findBy('day', 'apr23')
    if (apr23.description === null) {
      apr23.description = "";
      await apr23.save()
    }
    const apr24 = await Days.findBy('day', 'apr24')
    if (apr24.description === null) {
      apr24.description = "";
      await apr24.save()
    }
    const apr25 = await Days.findBy('day', 'apr25')
    if (apr25.description === null) {
      apr25.description = "";
      await apr25.save()
    }
    const apr26 = await Days.findBy('day', 'apr26')
    if (apr26.description === null) {
      apr26.description = "";
      await apr26.save()
    }
    const apr27 = await Days.findBy('day', 'apr27')
    if (apr27.description === null) {
      apr27.description = "";
      await apr27.save()
    }
    const apr28 = await Days.findBy('day', 'apr28')
    if (apr28.description === null) {
      apr28.description = "";
      await apr28.save()
    }
    const apr29 = await Days.findBy('day', 'apr29')
    if (apr29.description === null) {
      apr29.description = "";
      await apr29.save()
    }
    const apr30 = await Days.findBy('day', 'apr30')
    if (apr30.description === null) {
      apr30.description = "";
      await apr30.save()
    }

    return view.render('calendar/april', { apr1, apr2, apr3, apr4, apr5, apr6, apr7, apr8, apr9, apr10, apr11, apr12, apr13, apr14, apr15, apr16, apr17, apr18, apr19, apr20, apr21, apr22, apr23, apr24, apr25, apr26, apr27, apr28, apr29, apr30 })
  }

  async aprilDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const apr1 = await Days.findBy('day', 'apr1')
      const apr2 = await Days.findBy('day', 'apr2')
      const apr3 = await Days.findBy('day', 'apr3')
      const apr4 = await Days.findBy('day', 'apr4')
      const apr5 = await Days.findBy('day', 'apr5')
      const apr6 = await Days.findBy('day', 'apr6')
      const apr7 = await Days.findBy('day', 'apr7')
      const apr8 = await Days.findBy('day', 'apr8')
      const apr9 = await Days.findBy('day', 'apr9') 
      const apr10 = await Days.findBy('day', 'apr10')
      const apr11 = await Days.findBy('day', 'apr11')
      const apr12 = await Days.findBy('day', 'apr12')
      const apr13 = await Days.findBy('day', 'apr13')
      const apr14 = await Days.findBy('day', 'apr14')
      const apr15 = await Days.findBy('day', 'apr15')
      const apr16 = await Days.findBy('day', 'apr16')
      const apr17 = await Days.findBy('day', 'apr17')
      const apr18 = await Days.findBy('day', 'apr18')
      const apr19 = await Days.findBy('day', 'apr19')
      const apr20 = await Days.findBy('day', 'apr20')
      const apr21 = await Days.findBy('day', 'apr21')
      const apr22 = await Days.findBy('day', 'apr22')
      const apr23 = await Days.findBy('day', 'apr23')
      const apr24 = await Days.findBy('day', 'apr24')
      const apr25 = await Days.findBy('day', 'apr25')
      const apr26 = await Days.findBy('day', 'apr26')
      const apr27 = await Days.findBy('day', 'apr27')
      const apr28 = await Days.findBy('day', 'apr28')
      const apr29 = await Days.findBy('day', 'apr29')
      const apr30 = await Days.findBy('day', 'apr30')
      
      return view.render('calendar/april', { descriptionClicked, apr1, apr2, apr3, apr4, apr5, apr6, apr7, apr8, apr9, apr10, apr11, apr12, apr13, apr14, apr15, apr16, apr17, apr18, apr19, apr20, apr21, apr22, apr23, apr24, apr25, apr26, apr27, apr28, apr29, apr30 })
    } else {
      return response.redirect('/april')
    }
  }

  async ChangeAprilDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/april')
  }

  async loadMay({view}) {
    const may1 = await Days.findBy('day', 'may1')
    if (may1.description === null) {
      may1.description = "";
      await may1.save()
    }
    const may2 = await Days.findBy('day', 'may2')
    if (may2.description === null) {
      may2.description = "";
      await may2.save()
    }
    const may3 = await Days.findBy('day', 'may3')
    if (may3.description === null) {
      may3.description = "";
      await may3.save()
    }
    const may4 = await Days.findBy('day', 'may4')
    if (may4.description === null) {
      may4.description = "";
      await may4.save()
    }
    const may5 = await Days.findBy('day', 'may5')
    if (may5.description === null) {
      may5.description = "";
      await may5.save()
    }
    const may6 = await Days.findBy('day', 'may6')
    if (may6.description === null) {
      may6.description = "";
      await may6.save()
    }
    const may7 = await Days.findBy('day', 'may7')
    if (may7.description === null) {
      may7.description = "";
      await may7.save()
    }
    const may8 = await Days.findBy('day', 'may8')
    if (may8.description === null) {
      may8.description = "";
      await may8.save()
    }
    const may9 = await Days.findBy('day', 'may9')
    if (may9.description === null) {
      may9.description = "";
      await may9.save()
    }
    const may10 = await Days.findBy('day', 'may10')
    if (may10.description === null) {
      may10.description = "";
      await may10.save()
    }
    const may11 = await Days.findBy('day', 'may11')
    if (may11.description === null) {
      may11.description = "";
      await may11.save()
    }
    const may12 = await Days.findBy('day', 'may12')
    if (may12.description === null) {
      may12.description = "";
      await may12.save()
    }
    const may13 = await Days.findBy('day', 'may13')
    if (may13.description === null) {
      may13.description = "";
      await may13.save()
    }
    const may14 = await Days.findBy('day', 'may14')
    if (may14.description === null) {
      may14.description = "";
      await may14.save()
    }
    const may15 = await Days.findBy('day', 'may15')
    if (may15.description === null) {
      may15.description = "";
      await may15.save()
    }
    const may16 = await Days.findBy('day', 'may16')
    if (may16.description === null) {
      may16.description = "";
      await may16.save()
    }
    const may17 = await Days.findBy('day', 'may17')
    if (may17.description === null) {
      may17.description = "";
      await may17.save()
    }
    const may18 = await Days.findBy('day', 'may18')
    if (may18.description === null) {
      may18.description = "";
      await may18.save()
    }
    const may19 = await Days.findBy('day', 'may19')
    if (may19.description === null) {
      may19.description = "";
      await may19.save()
    }
    const may20 = await Days.findBy('day', 'may20')
    if (may20.description === null) {
      may20.description = "";
      await may20.save()
    }
    const may21 = await Days.findBy('day', 'may21')
    if (may21.description === null) {
      may21.description = "";
      await may21.save()
    }
    const may22 = await Days.findBy('day', 'may22')
    if (may22.description === null) {
      may22.description = "";
      await may22.save()
    }
    const may23 = await Days.findBy('day', 'may23')
    if (may23.description === null) {
      may23.description = "";
      await may23.save()
    }
    const may24 = await Days.findBy('day', 'may24')
    if (may24.description === null) {
      may24.description = "";
      await may24.save()
    }
    const may25 = await Days.findBy('day', 'may25')
    if (may25.description === null) {
      may25.description = "";
      await may25.save()
    }
    const may26 = await Days.findBy('day', 'may26')
    if (may26.description === null) {
      may26.description = "";
      await may26.save()
    }
    const may27 = await Days.findBy('day', 'may27')
    if (may27.description === null) {
      may27.description = "";
      await may27.save()
    }
    const may28 = await Days.findBy('day', 'may28')
    if (may28.description === null) {
      may28.description = "";
      await may28.save()
    }
    const may29 = await Days.findBy('day', 'may29')
    if (may29.description === null) {
      may29.description = "";
      await may29.save()
    }
    const may30 = await Days.findBy('day', 'may30')
    if (may30.description === null) {
      may30.description = "";
      await may30.save()
    }
    const may31 = await Days.findBy('day', 'may31')
    if (may31.description === null) {
      may31.description = "";
      await may31.save()
    }

    return view.render('calendar/may', { may1, may2, may3, may4, may5, may6, may7, may8, may9, may10, may11, may12, may13, may14, may15, may16, may17, may18, may19, may20, may21, may22, may23, may24, may25, may26, may27, may28, may29, may30, may31 })
  }

  async mayDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const may1 = await Days.findBy('day', 'may1')
      const may2 = await Days.findBy('day', 'may2')
      const may3 = await Days.findBy('day', 'may3')
      const may4 = await Days.findBy('day', 'may4')
      const may5 = await Days.findBy('day', 'may5')
      const may6 = await Days.findBy('day', 'may6')
      const may7 = await Days.findBy('day', 'may7')
      const may8 = await Days.findBy('day', 'may8')
      const may9 = await Days.findBy('day', 'may9') 
      const may10 = await Days.findBy('day', 'may10')
      const may11 = await Days.findBy('day', 'may11')
      const may12 = await Days.findBy('day', 'may12')
      const may13 = await Days.findBy('day', 'may13')
      const may14 = await Days.findBy('day', 'may14')
      const may15 = await Days.findBy('day', 'may15')
      const may16 = await Days.findBy('day', 'may16')
      const may17 = await Days.findBy('day', 'may17')
      const may18 = await Days.findBy('day', 'may18')
      const may19 = await Days.findBy('day', 'may19')
      const may20 = await Days.findBy('day', 'may20')
      const may21 = await Days.findBy('day', 'may21')
      const may22 = await Days.findBy('day', 'may22')
      const may23 = await Days.findBy('day', 'may23')
      const may24 = await Days.findBy('day', 'may24')
      const may25 = await Days.findBy('day', 'may25')
      const may26 = await Days.findBy('day', 'may26')
      const may27 = await Days.findBy('day', 'may27')
      const may28 = await Days.findBy('day', 'may28')
      const may29 = await Days.findBy('day', 'may29')
      const may30 = await Days.findBy('day', 'may30')
      const may31 = await Days.findBy('day', 'may31')
      
      return view.render('calendar/may', { descriptionClicked, may1, may2, may3, may4, may5, may6, may7, may8, may9, may10, may11, may12, may13, may14, may15, may16, may17, may18, may19, may20, may21, may22, may23, may24, may25, may26, may27, may28, may29, may30, may31 })
    } else {
      return response.redirect('/may')
    }
  }

  async ChangeMayDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/may')
  }

  async loadJune({view}) {
    const jun1 = await Days.findBy('day', 'jun1')
    if (jun1.description === null) {
      jun1.description = "";
      await jun1.save()
    }
    const jun2 = await Days.findBy('day', 'jun2')
    if (jun2.description === null) {
      jun2.description = "";
      await jun2.save()
    }
    const jun3 = await Days.findBy('day', 'jun3')
    if (jun3.description === null) {
      jun3.description = "";
      await jun3.save()
    }
    const jun4 = await Days.findBy('day', 'jun4')
    if (jun4.description === null) {
      jun4.description = "";
      await jun4.save()
    }
    const jun5 = await Days.findBy('day', 'jun5')
    if (jun5.description === null) {
      jun5.description = "";
      await jun5.save()
    }
    const jun6 = await Days.findBy('day', 'jun6')
    if (jun6.description === null) {
      jun6.description = "";
      await jun6.save()
    }
    const jun7 = await Days.findBy('day', 'jun7')
    if (jun7.description === null) {
      jun7.description = "";
      await jun7.save()
    }
    const jun8 = await Days.findBy('day', 'jun8')
    if (jun8.description === null) {
      jun8.description = "";
      await jun8.save()
    }
    const jun9 = await Days.findBy('day', 'jun9')
    if (jun9.description === null) {
      jun9.description = "";
      await jun9.save()
    }
    const jun10 = await Days.findBy('day', 'jun10')
    if (jun10.description === null) {
      jun10.description = "";
      await jun10.save()
    }
    const jun11 = await Days.findBy('day', 'jun11')
    if (jun11.description === null) {
      jun11.description = "";
      await jun11.save()
    }
    const jun12 = await Days.findBy('day', 'jun12')
    if (jun12.description === null) {
      jun12.description = "";
      await jun12.save()
    }
    const jun13 = await Days.findBy('day', 'jun13')
    if (jun13.description === null) {
      jun13.description = "";
      await jun13.save()
    }
    const jun14 = await Days.findBy('day', 'jun14')
    if (jun14.description === null) {
      jun14.description = "";
      await jun14.save()
    }
    const jun15 = await Days.findBy('day', 'jun15')
    if (jun15.description === null) {
      jun15.description = "";
      await jun15.save()
    }
    const jun16 = await Days.findBy('day', 'jun16')
    if (jun16.description === null) {
      jun16.description = "";
      await jun16.save()
    }
    const jun17 = await Days.findBy('day', 'jun17')
    if (jun17.description === null) {
      jun17.description = "";
      await jun17.save()
    }
    const jun18 = await Days.findBy('day', 'jun18')
    if (jun18.description === null) {
      jun18.description = "";
      await jun18.save()
    }
    const jun19 = await Days.findBy('day', 'jun19')
    if (jun19.description === null) {
      jun19.description = "";
      await jun19.save()
    }
    const jun20 = await Days.findBy('day', 'jun20')
    if (jun20.description === null) {
      jun20.description = "";
      await jun20.save()
    }
    const jun21 = await Days.findBy('day', 'jun21')
    if (jun21.description === null) {
      jun21.description = "";
      await jun21.save()
    }
    const jun22 = await Days.findBy('day', 'jun22')
    if (jun22.description === null) {
      jun22.description = "";
      await jun22.save()
    }
    const jun23 = await Days.findBy('day', 'jun23')
    if (jun23.description === null) {
      jun23.description = "";
      await jun23.save()
    }
    const jun24 = await Days.findBy('day', 'jun24')
    if (jun24.description === null) {
      jun24.description = "";
      await jun24.save()
    }
    const jun25 = await Days.findBy('day', 'jun25')
    if (jun25.description === null) {
      jun25.description = "";
      await jun25.save()
    }
    const jun26 = await Days.findBy('day', 'jun26')
    if (jun26.description === null) {
      jun26.description = "";
      await jun26.save()
    }
    const jun27 = await Days.findBy('day', 'jun27')
    if (jun27.description === null) {
      jun27.description = "";
      await jun27.save()
    }
    const jun28 = await Days.findBy('day', 'jun28')
    if (jun28.description === null) {
      jun28.description = "";
      await jun28.save()
    }
    const jun29 = await Days.findBy('day', 'jun29')
    if (jun29.description === null) {
      jun29.description = "";
      await jun29.save()
    }
    const jun30 = await Days.findBy('day', 'jun30')
    if (jun30.description === null) {
      jun30.description = "";
      await jun30.save()
    }

    return view.render('calendar/june', { jun1, jun2, jun3, jun4, jun5, jun6, jun7, jun8, jun9, jun10, jun11, jun12, jun13, jun14, jun15, jun16, jun17, jun18, jun19, jun20, jun21, jun22, jun23, jun24, jun25, jun26, jun27, jun28, jun29, jun30 })
  }

  async juneDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const jun1 = await Days.findBy('day', 'jun1')
      const jun2 = await Days.findBy('day', 'jun2')
      const jun3 = await Days.findBy('day', 'jun3')
      const jun4 = await Days.findBy('day', 'jun4')
      const jun5 = await Days.findBy('day', 'jun5')
      const jun6 = await Days.findBy('day', 'jun6')
      const jun7 = await Days.findBy('day', 'jun7')
      const jun8 = await Days.findBy('day', 'jun8')
      const jun9 = await Days.findBy('day', 'jun9') 
      const jun10 = await Days.findBy('day', 'jun10')
      const jun11 = await Days.findBy('day', 'jun11')
      const jun12 = await Days.findBy('day', 'jun12')
      const jun13 = await Days.findBy('day', 'jun13')
      const jun14 = await Days.findBy('day', 'jun14')
      const jun15 = await Days.findBy('day', 'jun15')
      const jun16 = await Days.findBy('day', 'jun16')
      const jun17 = await Days.findBy('day', 'jun17')
      const jun18 = await Days.findBy('day', 'jun18')
      const jun19 = await Days.findBy('day', 'jun19')
      const jun20 = await Days.findBy('day', 'jun20')
      const jun21 = await Days.findBy('day', 'jun21')
      const jun22 = await Days.findBy('day', 'jun22')
      const jun23 = await Days.findBy('day', 'jun23')
      const jun24 = await Days.findBy('day', 'jun24')
      const jun25 = await Days.findBy('day', 'jun25')
      const jun26 = await Days.findBy('day', 'jun26')
      const jun27 = await Days.findBy('day', 'jun27')
      const jun28 = await Days.findBy('day', 'jun28')
      const jun29 = await Days.findBy('day', 'jun29')
      const jun30 = await Days.findBy('day', 'jun30')
      
      return view.render('calendar/june', { descriptionClicked, jun1, jun2, jun3, jun4, jun5, jun6, jun7, jun8, jun9, jun10, jun11, jun12, jun13, jun14, jun15, jun16, jun17, jun18, jun19, jun20, jun21, jun22, jun23, jun24, jun25, jun26, jun27, jun28, jun29, jun30 })
    } else {
      return response.redirect('/june')
    }
  }

  async ChangeJuneDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/june')
  }

  async loadJuly({view}) {
    const jul1 = await Days.findBy('day', 'jul1')
    if (jul1.description === null) {
      jul1.description = "";
      await jul1.save()
    }
    const jul2 = await Days.findBy('day', 'jul2')
    if (jul2.description === null) {
      jul2.description = "";
      await jul2.save()
    }
    const jul3 = await Days.findBy('day', 'jul3')
    if (jul3.description === null) {
      jul3.description = "";
      await jul3.save()
    }
    const jul4 = await Days.findBy('day', 'jul4')
    if (jul4.description === null) {
      jul4.description = "";
      await jul4.save()
    }
    const jul5 = await Days.findBy('day', 'jul5')
    if (jul5.description === null) {
      jul5.description = "";
      await jul5.save()
    }
    const jul6 = await Days.findBy('day', 'jul6')
    if (jul6.description === null) {
      jul6.description = "";
      await jul6.save()
    }
    const jul7 = await Days.findBy('day', 'jul7')
    if (jul7.description === null) {
      jul7.description = "";
      await jul7.save()
    }
    const jul8 = await Days.findBy('day', 'jul8')
    if (jul8.description === null) {
      jul8.description = "";
      await jul8.save()
    }
    const jul9 = await Days.findBy('day', 'jul9')
    if (jul9.description === null) {
      jul9.description = "";
      await jul9.save()
    }
    const jul10 = await Days.findBy('day', 'jul10')
    if (jul10.description === null) {
      jul10.description = "";
      await jul10.save()
    }
    const jul11 = await Days.findBy('day', 'jul11')
    if (jul11.description === null) {
      jul11.description = "";
      await jul11.save()
    }
    const jul12 = await Days.findBy('day', 'jul12')
    if (jul12.description === null) {
      jul12.description = "";
      await jul12.save()
    }
    const jul13 = await Days.findBy('day', 'jul13')
    if (jul13.description === null) {
      jul13.description = "";
      await jul13.save()
    }
    const jul14 = await Days.findBy('day', 'jul14')
    if (jul14.description === null) {
      jul14.description = "";
      await jul14.save()
    }
    const jul15 = await Days.findBy('day', 'jul15')
    if (jul15.description === null) {
      jul15.description = "";
      await jul15.save()
    }
    const jul16 = await Days.findBy('day', 'jul16')
    if (jul16.description === null) {
      jul16.description = "";
      await jul16.save()
    }
    const jul17 = await Days.findBy('day', 'jul17')
    if (jul17.description === null) {
      jul17.description = "";
      await jul17.save()
    }
    const jul18 = await Days.findBy('day', 'jul18')
    if (jul18.description === null) {
      jul18.description = "";
      await jul18.save()
    }
    const jul19 = await Days.findBy('day', 'jul19')
    if (jul19.description === null) {
      jul19.description = "";
      await jul19.save()
    }
    const jul20 = await Days.findBy('day', 'jul20')
    if (jul20.description === null) {
      jul20.description = "";
      await jul20.save()
    }
    const jul21 = await Days.findBy('day', 'jul21')
    if (jul21.description === null) {
      jul21.description = "";
      await jul21.save()
    }
    const jul22 = await Days.findBy('day', 'jul22')
    if (jul22.description === null) {
      jul22.description = "";
      await jul22.save()
    }
    const jul23 = await Days.findBy('day', 'jul23')
    if (jul23.description === null) {
      jul23.description = "";
      await jul23.save()
    }
    const jul24 = await Days.findBy('day', 'jul24')
    if (jul24.description === null) {
      jul24.description = "";
      await jul24.save()
    }
    const jul25 = await Days.findBy('day', 'jul25')
    if (jul25.description === null) {
      jul25.description = "";
      await jul25.save()
    }
    const jul26 = await Days.findBy('day', 'jul26')
    if (jul26.description === null) {
      jul26.description = "";
      await jul26.save()
    }
    const jul27 = await Days.findBy('day', 'jul27')
    if (jul27.description === null) {
      jul27.description = "";
      await jul27.save()
    }
    const jul28 = await Days.findBy('day', 'jul28')
    if (jul28.description === null) {
      jul28.description = "";
      await jul28.save()
    }
    const jul29 = await Days.findBy('day', 'jul29')
    if (jul29.description === null) {
      jul29.description = "";
      await jul29.save()
    }
    const jul30 = await Days.findBy('day', 'jul30')
    if (jul30.description === null) {
      jul30.description = "";
      await jul30.save()
    }
    const jul31 = await Days.findBy('day', 'jul31')
    if (jul31.description === null) {
      jul31.description = "";
      await jul31.save()
    }

    return view.render('calendar/july', { jul1, jul2, jul3, jul4, jul5, jul6, jul7, jul8, jul9, jul10, jul11, jul12, jul13, jul14, jul15, jul16, jul17, jul18, jul19, jul20, jul21, jul22, jul23, jul24, jul25, jul26, jul27, jul28, jul29, jul30, jul31 })
  }

  async julyDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const jul1 = await Days.findBy('day', 'jul1')
      const jul2 = await Days.findBy('day', 'jul2')
      const jul3 = await Days.findBy('day', 'jul3')
      const jul4 = await Days.findBy('day', 'jul4')
      const jul5 = await Days.findBy('day', 'jul5')
      const jul6 = await Days.findBy('day', 'jul6')
      const jul7 = await Days.findBy('day', 'jul7')
      const jul8 = await Days.findBy('day', 'jul8')
      const jul9 = await Days.findBy('day', 'jul9') 
      const jul10 = await Days.findBy('day', 'jul10')
      const jul11 = await Days.findBy('day', 'jul11')
      const jul12 = await Days.findBy('day', 'jul12')
      const jul13 = await Days.findBy('day', 'jul13')
      const jul14 = await Days.findBy('day', 'jul14')
      const jul15 = await Days.findBy('day', 'jul15')
      const jul16 = await Days.findBy('day', 'jul16')
      const jul17 = await Days.findBy('day', 'jul17')
      const jul18 = await Days.findBy('day', 'jul18')
      const jul19 = await Days.findBy('day', 'jul19')
      const jul20 = await Days.findBy('day', 'jul20')
      const jul21 = await Days.findBy('day', 'jul21')
      const jul22 = await Days.findBy('day', 'jul22')
      const jul23 = await Days.findBy('day', 'jul23')
      const jul24 = await Days.findBy('day', 'jul24')
      const jul25 = await Days.findBy('day', 'jul25')
      const jul26 = await Days.findBy('day', 'jul26')
      const jul27 = await Days.findBy('day', 'jul27')
      const jul28 = await Days.findBy('day', 'jul28')
      const jul29 = await Days.findBy('day', 'jul29')
      const jul30 = await Days.findBy('day', 'jul30')
      const jul31 = await Days.findBy('day', 'jul31')
      
      return view.render('calendar/july', { descriptionClicked, jul1, jul2, jul3, jul4, jul5, jul6, jul7, jul8, jul9, jul10, jul11, jul12, jul13, jul14, jul15, jul16, jul17, jul18, jul19, jul20, jul21, jul22, jul23, jul24, jul25, jul26, jul27, jul28, jul29, jul30, jul31 })
    } else {
      return response.redirect('/july')
    }
  }

  async ChangeJulyDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/july')
  }

  async loadAugust({view}) {
    const aug1 = await Days.findBy('day', 'aug1')
    if (aug1.description === null) {
      aug1.description = "";
      await aug1.save()
    }
    const aug2 = await Days.findBy('day', 'aug2')
    if (aug2.description === null) {
      aug2.description = "";
      await aug2.save()
    }
    const aug3 = await Days.findBy('day', 'aug3')
    if (aug3.description === null) {
      aug3.description = "";
      await aug3.save()
    }
    const aug4 = await Days.findBy('day', 'aug4')
    if (aug4.description === null) {
      aug4.description = "";
      await aug4.save()
    }
    const aug5 = await Days.findBy('day', 'aug5')
    if (aug5.description === null) {
      aug5.description = "";
      await aug5.save()
    }
    const aug6 = await Days.findBy('day', 'aug6')
    if (aug6.description === null) {
      aug6.description = "";
      await aug6.save()
    }
    const aug7 = await Days.findBy('day', 'aug7')
    if (aug7.description === null) {
      aug7.description = "";
      await aug7.save()
    }
    const aug8 = await Days.findBy('day', 'aug8')
    if (aug8.description === null) {
      aug8.description = "";
      await aug8.save()
    }
    const aug9 = await Days.findBy('day', 'aug9')
    if (aug9.description === null) {
      aug9.description = "";
      await aug9.save()
    }
    const aug10 = await Days.findBy('day', 'aug10')
    if (aug10.description === null) {
      aug10.description = "";
      await aug10.save()
    }
    const aug11 = await Days.findBy('day', 'aug11')
    if (aug11.description === null) {
      aug11.description = "";
      await aug11.save()
    }
    const aug12 = await Days.findBy('day', 'aug12')
    if (aug12.description === null) {
      aug12.description = "";
      await aug12.save()
    }
    const aug13 = await Days.findBy('day', 'aug13')
    if (aug13.description === null) {
      aug13.description = "";
      await aug13.save()
    }
    const aug14 = await Days.findBy('day', 'aug14')
    if (aug14.description === null) {
      aug14.description = "";
      await aug14.save()
    }
    const aug15 = await Days.findBy('day', 'aug15')
    if (aug15.description === null) {
      aug15.description = "";
      await aug15.save()
    }
    const aug16 = await Days.findBy('day', 'aug16')
    if (aug16.description === null) {
      aug16.description = "";
      await aug16.save()
    }
    const aug17 = await Days.findBy('day', 'aug17')
    if (aug17.description === null) {
      aug17.description = "";
      await aug17.save()
    }
    const aug18 = await Days.findBy('day', 'aug18')
    if (aug18.description === null) {
      aug18.description = "";
      await aug18.save()
    }
    const aug19 = await Days.findBy('day', 'aug19')
    if (aug19.description === null) {
      aug19.description = "";
      await aug19.save()
    }
    const aug20 = await Days.findBy('day', 'aug20')
    if (aug20.description === null) {
      aug20.description = "";
      await aug20.save()
    }
    const aug21 = await Days.findBy('day', 'aug21')
    if (aug21.description === null) {
      aug21.description = "";
      await aug21.save()
    }
    const aug22 = await Days.findBy('day', 'aug22')
    if (aug22.description === null) {
      aug22.description = "";
      await aug22.save()
    }
    const aug23 = await Days.findBy('day', 'aug23')
    if (aug23.description === null) {
      aug23.description = "";
      await aug23.save()
    }
    const aug24 = await Days.findBy('day', 'aug24')
    if (aug24.description === null) {
      aug24.description = "";
      await aug24.save()
    }
    const aug25 = await Days.findBy('day', 'aug25')
    if (aug25.description === null) {
      aug25.description = "";
      await aug25.save()
    }
    const aug26 = await Days.findBy('day', 'aug26')
    if (aug26.description === null) {
      aug26.description = "";
      await aug26.save()
    }
    const aug27 = await Days.findBy('day', 'aug27')
    if (aug27.description === null) {
      aug27.description = "";
      await aug27.save()
    }
    const aug28 = await Days.findBy('day', 'aug28')
    if (aug28.description === null) {
      aug28.description = "";
      await aug28.save()
    }
    const aug29 = await Days.findBy('day', 'aug29')
    if (aug29.description === null) {
      aug29.description = "";
      await aug29.save()
    }
    const aug30 = await Days.findBy('day', 'aug30')
    if (aug30.description === null) {
      aug30.description = "";
      await aug30.save()
    }
    const aug31 = await Days.findBy('day', 'aug31')
    if (aug31.description === null) {
      aug31.description = "";
      await aug31.save()
    }

    return view.render('calendar/august', { aug1, aug2, aug3, aug4, aug5, aug6, aug7, aug8, aug9, aug10, aug11, aug12, aug13, aug14, aug15, aug16, aug17, aug18, aug19, aug20, aug21, aug22, aug23, aug24, aug25, aug26, aug27, aug28, aug29, aug30, aug31 })
  }

  async augustDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const aug1 = await Days.findBy('day', 'aug1')
      const aug2 = await Days.findBy('day', 'aug2')
      const aug3 = await Days.findBy('day', 'aug3')
      const aug4 = await Days.findBy('day', 'aug4')
      const aug5 = await Days.findBy('day', 'aug5')
      const aug6 = await Days.findBy('day', 'aug6')
      const aug7 = await Days.findBy('day', 'aug7')
      const aug8 = await Days.findBy('day', 'aug8')
      const aug9 = await Days.findBy('day', 'aug9') 
      const aug10 = await Days.findBy('day', 'aug10')
      const aug11 = await Days.findBy('day', 'aug11')
      const aug12 = await Days.findBy('day', 'aug12')
      const aug13 = await Days.findBy('day', 'aug13')
      const aug14 = await Days.findBy('day', 'aug14')
      const aug15 = await Days.findBy('day', 'aug15')
      const aug16 = await Days.findBy('day', 'aug16')
      const aug17 = await Days.findBy('day', 'aug17')
      const aug18 = await Days.findBy('day', 'aug18')
      const aug19 = await Days.findBy('day', 'aug19')
      const aug20 = await Days.findBy('day', 'aug20')
      const aug21 = await Days.findBy('day', 'aug21')
      const aug22 = await Days.findBy('day', 'aug22')
      const aug23 = await Days.findBy('day', 'aug23')
      const aug24 = await Days.findBy('day', 'aug24')
      const aug25 = await Days.findBy('day', 'aug25')
      const aug26 = await Days.findBy('day', 'aug26')
      const aug27 = await Days.findBy('day', 'aug27')
      const aug28 = await Days.findBy('day', 'aug28')
      const aug29 = await Days.findBy('day', 'aug29')
      const aug30 = await Days.findBy('day', 'aug30')
      const aug31 = await Days.findBy('day', 'aug31')
      
      return view.render('calendar/august', { descriptionClicked, aug1, aug2, aug3, aug4, aug5, aug6, aug7, aug8, aug9, aug10, aug11, aug12, aug13, aug14, aug15, aug16, aug17, aug18, aug19, aug20, aug21, aug22, aug23, aug24, aug25, aug26, aug27, aug28, aug29, aug30, aug31 })
    } else {
      return response.redirect('/august')
    }
  }

  async ChangeAugustDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/august')
  }

  async loadSeptember({view}) {
    const sep1 = await Days.findBy('day', 'sep1')
    if (sep1.description === null) {
      sep1.description = "";
      await sep1.save()
    }
    const sep2 = await Days.findBy('day', 'sep2')
    if (sep2.description === null) {
      sep2.description = "";
      await sep2.save()
    }
    const sep3 = await Days.findBy('day', 'sep3')
    if (sep3.description === null) {
      sep3.description = "";
      await sep3.save()
    }
    const sep4 = await Days.findBy('day', 'sep4')
    if (sep4.description === null) {
      sep4.description = "";
      await sep4.save()
    }
    const sep5 = await Days.findBy('day', 'sep5')
    if (sep5.description === null) {
      sep5.description = "";
      await sep5.save()
    }
    const sep6 = await Days.findBy('day', 'sep6')
    if (sep6.description === null) {
      sep6.description = "";
      await sep6.save()
    }
    const sep7 = await Days.findBy('day', 'sep7')
    if (sep7.description === null) {
      sep7.description = "";
      await sep7.save()
    }
    const sep8 = await Days.findBy('day', 'sep8')
    if (sep8.description === null) {
      sep8.description = "";
      await sep8.save()
    }
    const sep9 = await Days.findBy('day', 'sep9')
    if (sep9.description === null) {
      sep9.description = "";
      await sep9.save()
    }
    const sep10 = await Days.findBy('day', 'sep10')
    if (sep10.description === null) {
      sep10.description = "";
      await sep10.save()
    }
    const sep11 = await Days.findBy('day', 'sep11')
    if (sep11.description === null) {
      sep11.description = "";
      await sep11.save()
    }
    const sep12 = await Days.findBy('day', 'sep12')
    if (sep12.description === null) {
      sep12.description = "";
      await sep12.save()
    }
    const sep13 = await Days.findBy('day', 'sep13')
    if (sep13.description === null) {
      sep13.description = "";
      await sep13.save()
    }
    const sep14 = await Days.findBy('day', 'sep14')
    if (sep14.description === null) {
      sep14.description = "";
      await sep14.save()
    }
    const sep15 = await Days.findBy('day', 'sep15')
    if (sep15.description === null) {
      sep15.description = "";
      await sep15.save()
    }
    const sep16 = await Days.findBy('day', 'sep16')
    if (sep16.description === null) {
      sep16.description = "";
      await sep16.save()
    }
    const sep17 = await Days.findBy('day', 'sep17')
    if (sep17.description === null) {
      sep17.description = "";
      await sep17.save()
    }
    const sep18 = await Days.findBy('day', 'sep18')
    if (sep18.description === null) {
      sep18.description = "";
      await sep18.save()
    }
    const sep19 = await Days.findBy('day', 'sep19')
    if (sep19.description === null) {
      sep19.description = "";
      await sep19.save()
    }
    const sep20 = await Days.findBy('day', 'sep20')
    if (sep20.description === null) {
      sep20.description = "";
      await sep20.save()
    }
    const sep21 = await Days.findBy('day', 'sep21')
    if (sep21.description === null) {
      sep21.description = "";
      await sep21.save()
    }
    const sep22 = await Days.findBy('day', 'sep22')
    if (sep22.description === null) {
      sep22.description = "";
      await sep22.save()
    }
    const sep23 = await Days.findBy('day', 'sep23')
    if (sep23.description === null) {
      sep23.description = "";
      await sep23.save()
    }
    const sep24 = await Days.findBy('day', 'sep24')
    if (sep24.description === null) {
      sep24.description = "";
      await sep24.save()
    }
    const sep25 = await Days.findBy('day', 'sep25')
    if (sep25.description === null) {
      sep25.description = "";
      await sep25.save()
    }
    const sep26 = await Days.findBy('day', 'sep26')
    if (sep26.description === null) {
      sep26.description = "";
      await sep26.save()
    }
    const sep27 = await Days.findBy('day', 'sep27')
    if (sep27.description === null) {
      sep27.description = "";
      await sep27.save()
    }
    const sep28 = await Days.findBy('day', 'sep28')
    if (sep28.description === null) {
      sep28.description = "";
      await sep28.save()
    }
    const sep29 = await Days.findBy('day', 'sep29')
    if (sep29.description === null) {
      sep29.description = "";
      await sep29.save()
    }
    const sep30 = await Days.findBy('day', 'sep30')
    if (sep30.description === null) {
      sep30.description = "";
      await sep30.save()
    }

    return view.render('calendar/september', { sep1, sep2, sep3, sep4, sep5, sep6, sep7, sep8, sep9, sep10, sep11, sep12, sep13, sep14, sep15, sep16, sep17, sep18, sep19, sep20, sep21, sep22, sep23, sep24, sep25, sep26, sep27, sep28, sep29, sep30 })
  }

  async septemberDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const sep1 = await Days.findBy('day', 'sep1')
      const sep2 = await Days.findBy('day', 'sep2')
      const sep3 = await Days.findBy('day', 'sep3')
      const sep4 = await Days.findBy('day', 'sep4')
      const sep5 = await Days.findBy('day', 'sep5')
      const sep6 = await Days.findBy('day', 'sep6')
      const sep7 = await Days.findBy('day', 'sep7')
      const sep8 = await Days.findBy('day', 'sep8')
      const sep9 = await Days.findBy('day', 'sep9') 
      const sep10 = await Days.findBy('day', 'sep10')
      const sep11 = await Days.findBy('day', 'sep11')
      const sep12 = await Days.findBy('day', 'sep12')
      const sep13 = await Days.findBy('day', 'sep13')
      const sep14 = await Days.findBy('day', 'sep14')
      const sep15 = await Days.findBy('day', 'sep15')
      const sep16 = await Days.findBy('day', 'sep16')
      const sep17 = await Days.findBy('day', 'sep17')
      const sep18 = await Days.findBy('day', 'sep18')
      const sep19 = await Days.findBy('day', 'sep19')
      const sep20 = await Days.findBy('day', 'sep20')
      const sep21 = await Days.findBy('day', 'sep21')
      const sep22 = await Days.findBy('day', 'sep22')
      const sep23 = await Days.findBy('day', 'sep23')
      const sep24 = await Days.findBy('day', 'sep24')
      const sep25 = await Days.findBy('day', 'sep25')
      const sep26 = await Days.findBy('day', 'sep26')
      const sep27 = await Days.findBy('day', 'sep27')
      const sep28 = await Days.findBy('day', 'sep28')
      const sep29 = await Days.findBy('day', 'sep29')
      const sep30 = await Days.findBy('day', 'sep30')
      
      return view.render('calendar/september', { descriptionClicked, sep1, sep2, sep3, sep4, sep5, sep6, sep7, sep8, sep9, sep10, sep11, sep12, sep13, sep14, sep15, sep16, sep17, sep18, sep19, sep20, sep21, sep22, sep23, sep24, sep25, sep26, sep27, sep28, sep29, sep30 })
    } else {
      return response.redirect('/september')
    }
  }

  async ChangeSeptemberDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/september')
  }

  async loadOctober({view}) {
    const oct1 = await Days.findBy('day', 'oct1')
    if (oct1.description === null) {
      oct1.description = "";
      await oct1.save()
    }
    const oct2 = await Days.findBy('day', 'oct2')
    if (oct2.description === null) {
      oct2.description = "";
      await oct2.save()
    }
    const oct3 = await Days.findBy('day', 'oct3')
    if (oct3.description === null) {
      oct3.description = "";
      await oct3.save()
    }
    const oct4 = await Days.findBy('day', 'oct4')
    if (oct4.description === null) {
      oct4.description = "";
      await oct4.save()
    }
    const oct5 = await Days.findBy('day', 'oct5')
    if (oct5.description === null) {
      oct5.description = "";
      await oct5.save()
    }
    const oct6 = await Days.findBy('day', 'oct6')
    if (oct6.description === null) {
      oct6.description = "";
      await oct6.save()
    }
    const oct7 = await Days.findBy('day', 'oct7')
    if (oct7.description === null) {
      oct7.description = "";
      await oct7.save()
    }
    const oct8 = await Days.findBy('day', 'oct8')
    if (oct8.description === null) {
      oct8.description = "";
      await oct8.save()
    }
    const oct9 = await Days.findBy('day', 'oct9')
    if (oct9.description === null) {
      oct9.description = "";
      await oct9.save()
    }
    const oct10 = await Days.findBy('day', 'oct10')
    if (oct10.description === null) {
      oct10.description = "";
      await oct10.save()
    }
    const oct11 = await Days.findBy('day', 'oct11')
    if (oct11.description === null) {
      oct11.description = "";
      await oct11.save()
    }
    const oct12 = await Days.findBy('day', 'oct12')
    if (oct12.description === null) {
      oct12.description = "";
      await oct12.save()
    }
    const oct13 = await Days.findBy('day', 'oct13')
    if (oct13.description === null) {
      oct13.description = "";
      await oct13.save()
    }
    const oct14 = await Days.findBy('day', 'oct14')
    if (oct14.description === null) {
      oct14.description = "";
      await oct14.save()
    }
    const oct15 = await Days.findBy('day', 'oct15')
    if (oct15.description === null) {
      oct15.description = "";
      await oct15.save()
    }
    const oct16 = await Days.findBy('day', 'oct16')
    if (oct16.description === null) {
      oct16.description = "";
      await oct16.save()
    }
    const oct17 = await Days.findBy('day', 'oct17')
    if (oct17.description === null) {
      oct17.description = "";
      await oct17.save()
    }
    const oct18 = await Days.findBy('day', 'oct18')
    if (oct18.description === null) {
      oct18.description = "";
      await oct18.save()
    }
    const oct19 = await Days.findBy('day', 'oct19')
    if (oct19.description === null) {
      oct19.description = "";
      await oct19.save()
    }
    const oct20 = await Days.findBy('day', 'oct20')
    if (oct20.description === null) {
      oct20.description = "";
      await oct20.save()
    }
    const oct21 = await Days.findBy('day', 'oct21')
    if (oct21.description === null) {
      oct21.description = "";
      await oct21.save()
    }
    const oct22 = await Days.findBy('day', 'oct22')
    if (oct22.description === null) {
      oct22.description = "";
      await oct22.save()
    }
    const oct23 = await Days.findBy('day', 'oct23')
    if (oct23.description === null) {
      oct23.description = "";
      await oct23.save()
    }
    const oct24 = await Days.findBy('day', 'oct24')
    if (oct24.description === null) {
      oct24.description = "";
      await oct24.save()
    }
    const oct25 = await Days.findBy('day', 'oct25')
    if (oct25.description === null) {
      oct25.description = "";
      await oct25.save()
    }
    const oct26 = await Days.findBy('day', 'oct26')
    if (oct26.description === null) {
      oct26.description = "";
      await oct26.save()
    }
    const oct27 = await Days.findBy('day', 'oct27')
    if (oct27.description === null) {
      oct27.description = "";
      await oct27.save()
    }
    const oct28 = await Days.findBy('day', 'oct28')
    if (oct28.description === null) {
      oct28.description = "";
      await oct28.save()
    }
    const oct29 = await Days.findBy('day', 'oct29')
    if (oct29.description === null) {
      oct29.description = "";
      await oct29.save()
    }
    const oct30 = await Days.findBy('day', 'oct30')
    if (oct30.description === null) {
      oct30.description = "";
      await oct30.save()
    }
    const oct31 = await Days.findBy('day', 'oct31')
    if (oct31.description === null) {
      oct31.description = "";
      await oct31.save()
    }

    return view.render('calendar/october', { oct1, oct2, oct3, oct4, oct5, oct6, oct7, oct8, oct9, oct10, oct11, oct12, oct13, oct14, oct15, oct16, oct17, oct18, oct19, oct20, oct21, oct22, oct23, oct24, oct25, oct26, oct27, oct28, oct29, oct30, oct31 })
  }

  async octoberDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const oct1 = await Days.findBy('day', 'oct1')
      const oct2 = await Days.findBy('day', 'oct2')
      const oct3 = await Days.findBy('day', 'oct3')
      const oct4 = await Days.findBy('day', 'oct4')
      const oct5 = await Days.findBy('day', 'oct5')
      const oct6 = await Days.findBy('day', 'oct6')
      const oct7 = await Days.findBy('day', 'oct7')
      const oct8 = await Days.findBy('day', 'oct8')
      const oct9 = await Days.findBy('day', 'oct9') 
      const oct10 = await Days.findBy('day', 'oct10')
      const oct11 = await Days.findBy('day', 'oct11')
      const oct12 = await Days.findBy('day', 'oct12')
      const oct13 = await Days.findBy('day', 'oct13')
      const oct14 = await Days.findBy('day', 'oct14')
      const oct15 = await Days.findBy('day', 'oct15')
      const oct16 = await Days.findBy('day', 'oct16')
      const oct17 = await Days.findBy('day', 'oct17')
      const oct18 = await Days.findBy('day', 'oct18')
      const oct19 = await Days.findBy('day', 'oct19')
      const oct20 = await Days.findBy('day', 'oct20')
      const oct21 = await Days.findBy('day', 'oct21')
      const oct22 = await Days.findBy('day', 'oct22')
      const oct23 = await Days.findBy('day', 'oct23')
      const oct24 = await Days.findBy('day', 'oct24')
      const oct25 = await Days.findBy('day', 'oct25')
      const oct26 = await Days.findBy('day', 'oct26')
      const oct27 = await Days.findBy('day', 'oct27')
      const oct28 = await Days.findBy('day', 'oct28')
      const oct29 = await Days.findBy('day', 'oct29')
      const oct30 = await Days.findBy('day', 'oct30')
      const oct31 = await Days.findBy('day', 'oct31')
      
      return view.render('calendar/october', { descriptionClicked, oct1, oct2, oct3, oct4, oct5, oct6, oct7, oct8, oct9, oct10, oct11, oct12, oct13, oct14, oct15, oct16, oct17, oct18, oct19, oct20, oct21, oct22, oct23, oct24, oct25, oct26, oct27, oct28, oct29, oct30, oct31 })
    } else {
      return response.redirect('/october')
    }
  }

  async ChangeOctoberDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/october')
  }

  async loadNovember({view}) {
    const nov1 = await Days.findBy('day', 'nov1')
    if (nov1.description === null) {
      nov1.description = "";
      await nov1.save()
    }
    const nov2 = await Days.findBy('day', 'nov2')
    if (nov2.description === null) {
      nov2.description = "";
      await nov2.save()
    }
    const nov3 = await Days.findBy('day', 'nov3')
    if (nov3.description === null) {
      nov3.description = "";
      await nov3.save()
    }
    const nov4 = await Days.findBy('day', 'nov4')
    if (nov4.description === null) {
      nov4.description = "";
      await nov4.save()
    }
    const nov5 = await Days.findBy('day', 'nov5')
    if (nov5.description === null) {
      nov5.description = "";
      await nov5.save()
    }
    const nov6 = await Days.findBy('day', 'nov6')
    if (nov6.description === null) {
      nov6.description = "";
      await nov6.save()
    }
    const nov7 = await Days.findBy('day', 'nov7')
    if (nov7.description === null) {
      nov7.description = "";
      await nov7.save()
    }
    const nov8 = await Days.findBy('day', 'nov8')
    if (nov8.description === null) {
      nov8.description = "";
      await nov8.save()
    }
    const nov9 = await Days.findBy('day', 'nov9')
    if (nov9.description === null) {
      nov9.description = "";
      await nov9.save()
    }
    const nov10 = await Days.findBy('day', 'nov10')
    if (nov10.description === null) {
      nov10.description = "";
      await nov10.save()
    }
    const nov11 = await Days.findBy('day', 'nov11')
    if (nov11.description === null) {
      nov11.description = "";
      await nov11.save()
    }
    const nov12 = await Days.findBy('day', 'nov12')
    if (nov12.description === null) {
      nov12.description = "";
      await nov12.save()
    }
    const nov13 = await Days.findBy('day', 'nov13')
    if (nov13.description === null) {
      nov13.description = "";
      await nov13.save()
    }
    const nov14 = await Days.findBy('day', 'nov14')
    if (nov14.description === null) {
      nov14.description = "";
      await nov14.save()
    }
    const nov15 = await Days.findBy('day', 'nov15')
    if (nov15.description === null) {
      nov15.description = "";
      await nov15.save()
    }
    const nov16 = await Days.findBy('day', 'nov16')
    if (nov16.description === null) {
      nov16.description = "";
      await nov16.save()
    }
    const nov17 = await Days.findBy('day', 'nov17')
    if (nov17.description === null) {
      nov17.description = "";
      await nov17.save()
    }
    const nov18 = await Days.findBy('day', 'nov18')
    if (nov18.description === null) {
      nov18.description = "";
      await nov18.save()
    }
    const nov19 = await Days.findBy('day', 'nov19')
    if (nov19.description === null) {
      nov19.description = "";
      await nov19.save()
    }
    const nov20 = await Days.findBy('day', 'nov20')
    if (nov20.description === null) {
      nov20.description = "";
      await nov20.save()
    }
    const nov21 = await Days.findBy('day', 'nov21')
    if (nov21.description === null) {
      nov21.description = "";
      await nov21.save()
    }
    const nov22 = await Days.findBy('day', 'nov22')
    if (nov22.description === null) {
      nov22.description = "";
      await nov22.save()
    }
    const nov23 = await Days.findBy('day', 'nov23')
    if (nov23.description === null) {
      nov23.description = "";
      await nov23.save()
    }
    const nov24 = await Days.findBy('day', 'nov24')
    if (nov24.description === null) {
      nov24.description = "";
      await nov24.save()
    }
    const nov25 = await Days.findBy('day', 'nov25')
    if (nov25.description === null) {
      nov25.description = "";
      await nov25.save()
    }
    const nov26 = await Days.findBy('day', 'nov26')
    if (nov26.description === null) {
      nov26.description = "";
      await nov26.save()
    }
    const nov27 = await Days.findBy('day', 'nov27')
    if (nov27.description === null) {
      nov27.description = "";
      await nov27.save()
    }
    const nov28 = await Days.findBy('day', 'nov28')
    if (nov28.description === null) {
      nov28.description = "";
      await nov28.save()
    }
    const nov29 = await Days.findBy('day', 'nov29')
    if (nov29.description === null) {
      nov29.description = "";
      await nov29.save()
    }
    const nov30 = await Days.findBy('day', 'nov30')
    if (nov30.description === null) {
      nov30.description = "";
      await nov30.save()
    }

    return view.render('calendar/november', { nov1, nov2, nov3, nov4, nov5, nov6, nov7, nov8, nov9, nov10, nov11, nov12, nov13, nov14, nov15, nov16, nov17, nov18, nov19, nov20, nov21, nov22, nov23, nov24, nov25, nov26, nov27, nov28, nov29, nov30 })
  }

  async novemberDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const nov1 = await Days.findBy('day', 'nov1')
      const nov2 = await Days.findBy('day', 'nov2')
      const nov3 = await Days.findBy('day', 'nov3')
      const nov4 = await Days.findBy('day', 'nov4')
      const nov5 = await Days.findBy('day', 'nov5')
      const nov6 = await Days.findBy('day', 'nov6')
      const nov7 = await Days.findBy('day', 'nov7')
      const nov8 = await Days.findBy('day', 'nov8')
      const nov9 = await Days.findBy('day', 'nov9') 
      const nov10 = await Days.findBy('day', 'nov10')
      const nov11 = await Days.findBy('day', 'nov11')
      const nov12 = await Days.findBy('day', 'nov12')
      const nov13 = await Days.findBy('day', 'nov13')
      const nov14 = await Days.findBy('day', 'nov14')
      const nov15 = await Days.findBy('day', 'nov15')
      const nov16 = await Days.findBy('day', 'nov16')
      const nov17 = await Days.findBy('day', 'nov17')
      const nov18 = await Days.findBy('day', 'nov18')
      const nov19 = await Days.findBy('day', 'nov19')
      const nov20 = await Days.findBy('day', 'nov20')
      const nov21 = await Days.findBy('day', 'nov21')
      const nov22 = await Days.findBy('day', 'nov22')
      const nov23 = await Days.findBy('day', 'nov23')
      const nov24 = await Days.findBy('day', 'nov24')
      const nov25 = await Days.findBy('day', 'nov25')
      const nov26 = await Days.findBy('day', 'nov26')
      const nov27 = await Days.findBy('day', 'nov27')
      const nov28 = await Days.findBy('day', 'nov28')
      const nov29 = await Days.findBy('day', 'nov29')
      const nov30 = await Days.findBy('day', 'nov30')
      
      return view.render('calendar/november', { descriptionClicked, nov1, nov2, nov3, nov4, nov5, nov6, nov7, nov8, nov9, nov10, nov11, nov12, nov13, nov14, nov15, nov16, nov17, nov18, nov19, nov20, nov21, nov22, nov23, nov24, nov25, nov26, nov27, nov28, nov29, nov30 })
    } else {
      return response.redirect('/november')
    }
  }

  async ChangeNovemberDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/november')
  }

  async loadDecember({view}) {
    const dec1 = await Days.findBy('day', 'dec1')
    if (dec1.description === null) {
      dec1.description = "";
      await dec1.save()
    }
    const dec2 = await Days.findBy('day', 'dec2')
    if (dec2.description === null) {
      dec2.description = "";
      await dec2.save()
    }
    const dec3 = await Days.findBy('day', 'dec3')
    if (dec3.description === null) {
      dec3.description = "";
      await dec3.save()
    }
    const dec4 = await Days.findBy('day', 'dec4')
    if (dec4.description === null) {
      dec4.description = "";
      await dec4.save()
    }
    const dec5 = await Days.findBy('day', 'dec5')
    if (dec5.description === null) {
      dec5.description = "";
      await dec5.save()
    }
    const dec6 = await Days.findBy('day', 'dec6')
    if (dec6.description === null) {
      dec6.description = "";
      await dec6.save()
    }
    const dec7 = await Days.findBy('day', 'dec7')
    if (dec7.description === null) {
      dec7.description = "";
      await dec7.save()
    }
    const dec8 = await Days.findBy('day', 'dec8')
    if (dec8.description === null) {
      dec8.description = "";
      await dec8.save()
    }
    const dec9 = await Days.findBy('day', 'dec9')
    if (dec9.description === null) {
      dec9.description = "";
      await dec9.save()
    }
    const dec10 = await Days.findBy('day', 'dec10')
    if (dec10.description === null) {
      dec10.description = "";
      await dec10.save()
    }
    const dec11 = await Days.findBy('day', 'dec11')
    if (dec11.description === null) {
      dec11.description = "";
      await dec11.save()
    }
    const dec12 = await Days.findBy('day', 'dec12')
    if (dec12.description === null) {
      dec12.description = "";
      await dec12.save()
    }
    const dec13 = await Days.findBy('day', 'dec13')
    if (dec13.description === null) {
      dec13.description = "";
      await dec13.save()
    }
    const dec14 = await Days.findBy('day', 'dec14')
    if (dec14.description === null) {
      dec14.description = "";
      await dec14.save()
    }
    const dec15 = await Days.findBy('day', 'dec15')
    if (dec15.description === null) {
      dec15.description = "";
      await dec15.save()
    }
    const dec16 = await Days.findBy('day', 'dec16')
    if (dec16.description === null) {
      dec16.description = "";
      await dec16.save()
    }
    const dec17 = await Days.findBy('day', 'dec17')
    if (dec17.description === null) {
      dec17.description = "";
      await dec17.save()
    }
    const dec18 = await Days.findBy('day', 'dec18')
    if (dec18.description === null) {
      dec18.description = "";
      await dec18.save()
    }
    const dec19 = await Days.findBy('day', 'dec19')
    if (dec19.description === null) {
      dec19.description = "";
      await dec19.save()
    }
    const dec20 = await Days.findBy('day', 'dec20')
    if (dec20.description === null) {
      dec20.description = "";
      await dec20.save()
    }
    const dec21 = await Days.findBy('day', 'dec21')
    if (dec21.description === null) {
      dec21.description = "";
      await dec21.save()
    }
    const dec22 = await Days.findBy('day', 'dec22')
    if (dec22.description === null) {
      dec22.description = "";
      await dec22.save()
    }
    const dec23 = await Days.findBy('day', 'dec23')
    if (dec23.description === null) {
      dec23.description = "";
      await dec23.save()
    }
    const dec24 = await Days.findBy('day', 'dec24')
    if (dec24.description === null) {
      dec24.description = "";
      await dec24.save()
    }
    const dec25 = await Days.findBy('day', 'dec25')
    if (dec25.description === null) {
      dec25.description = "";
      await dec25.save()
    }
    const dec26 = await Days.findBy('day', 'dec26')
    if (dec26.description === null) {
      dec26.description = "";
      await dec26.save()
    }
    const dec27 = await Days.findBy('day', 'dec27')
    if (dec27.description === null) {
      dec27.description = "";
      await dec27.save()
    }
    const dec28 = await Days.findBy('day', 'dec28')
    if (dec28.description === null) {
      dec28.description = "";
      await dec28.save()
    }
    const dec29 = await Days.findBy('day', 'dec29')
    if (dec29.description === null) {
      dec29.description = "";
      await dec29.save()
    }
    const dec30 = await Days.findBy('day', 'dec30')
    if (dec30.description === null) {
      dec30.description = "";
      await dec30.save()
    }
    const dec31 = await Days.findBy('day', 'dec31')
    if (dec31.description === null) {
      dec31.description = "";
      await dec31.save()
    }

    return view.render('calendar/december', { dec1, dec2, dec3, dec4, dec5, dec6, dec7, dec8, dec9, dec10, dec11, dec12, dec13, dec14, dec15, dec16, dec17, dec18, dec19, dec20, dec21, dec22, dec23, dec24, dec25, dec26, dec27, dec28, dec29, dec30, dec31 })
  }

  async decemberDescriptionClick({ view, params, auth, response }) {
    if (auth.user.admin === true) {
      const descriptionClicked = params.day;

      const dec1 = await Days.findBy('day', 'dec1')
      const dec2 = await Days.findBy('day', 'dec2')
      const dec3 = await Days.findBy('day', 'dec3')
      const dec4 = await Days.findBy('day', 'dec4')
      const dec5 = await Days.findBy('day', 'dec5')
      const dec6 = await Days.findBy('day', 'dec6')
      const dec7 = await Days.findBy('day', 'dec7')
      const dec8 = await Days.findBy('day', 'dec8')
      const dec9 = await Days.findBy('day', 'dec9') 
      const dec10 = await Days.findBy('day', 'dec10')
      const dec11 = await Days.findBy('day', 'dec11')
      const dec12 = await Days.findBy('day', 'dec12')
      const dec13 = await Days.findBy('day', 'dec13')
      const dec14 = await Days.findBy('day', 'dec14')
      const dec15 = await Days.findBy('day', 'dec15')
      const dec16 = await Days.findBy('day', 'dec16')
      const dec17 = await Days.findBy('day', 'dec17')
      const dec18 = await Days.findBy('day', 'dec18')
      const dec19 = await Days.findBy('day', 'dec19')
      const dec20 = await Days.findBy('day', 'dec20')
      const dec21 = await Days.findBy('day', 'dec21')
      const dec22 = await Days.findBy('day', 'dec22')
      const dec23 = await Days.findBy('day', 'dec23')
      const dec24 = await Days.findBy('day', 'dec24')
      const dec25 = await Days.findBy('day', 'dec25')
      const dec26 = await Days.findBy('day', 'dec26')
      const dec27 = await Days.findBy('day', 'dec27')
      const dec28 = await Days.findBy('day', 'dec28')
      const dec29 = await Days.findBy('day', 'dec29')
      const dec30 = await Days.findBy('day', 'dec30')
      const dec31 = await Days.findBy('day', 'dec31')
      
      return view.render('calendar/december', { descriptionClicked, dec1, dec2, dec3, dec4, dec5, dec6, dec7, dec8, dec9, dec10, dec11, dec12, dec13, dec14, dec15, dec16, dec17, dec18, dec19, dec20, dec21, dec22, dec23, dec24, dec25, dec26, dec27, dec28, dec29, dec30, dec31 })
    } else {
      return response.redirect('/december')
    }
  }

  async ChangeDecemberDayDescription({ request, response, params }) {
    const day = await Days.findBy('day', params.day);
    const description = request.all().description;

    day.description = description;

    await day.save()

    return response.redirect('/december')
  }
}

module.exports = CalendarController
