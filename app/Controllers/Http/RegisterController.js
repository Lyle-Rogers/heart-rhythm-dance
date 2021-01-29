'use strict'

const Register = use('App/Models/Register')

class RegisterController {
  async register({ response, request, auth }) {
    const registerForm = request.all();
 
    var styles = '';
    if (registerForm.tecChoreography) {
      styles = styles.concat(' Tec & Choreography')
    }
    if (registerForm.tumblingAcro) {
      styles = styles.concat(' Tumbling & Acro')
    }
    if (registerForm.balletPointe) {
      styles = styles.concat(' Ballet & Pointe')
    }
    if (registerForm.hipHop) {
      styles = styles.concat(' Hip Hop')
    }
    if (registerForm.aerialArts) {
      styles = styles.concat(' Aerial Arts')
    }
    if (registerForm.jazzFunk) {
      styles = styles.concat(' Jazz Funk')
    }
    if (registerForm.yoga) {
      styles = styles.concat(' Yoga')
    }
    if (registerForm.barreFitness) {
      styles = styles.concat(' Barre Fitness')
    }
    if (registerForm.bellyDance) {
      styles = styles.concat(' Belly Dance')
    }

    var age_group = '';
    if (registerForm.fourToSix) {
      age_group = age_group.concat('  4 - 6')
    }
    if (registerForm.sixToHeight) {
      age_group = age_group.concat('  6 - 8')
    }
    if (registerForm.nineToEleven) {
      age_group = age_group.concat('  9 - 11')
    }
    if (registerForm.twelveToFourteen) {
      age_group = age_group.concat('  12 - 14')
    }
    if (registerForm.twelvePluss) {
      age_group = age_group.concat('  12+')
    }
    if (registerForm.fifteenPluss) {
      age_group = age_group.concat('  15+')
    }

    const posted = await auth.user.registers().create({
      age_group: age_group,
      styles: styles,
      student_name: registerForm.student_name,
      age: registerForm.age,
      date_of_birth: registerForm.date_of_birth,
      male: registerForm.male,
      female: registerForm.female,
      name_of_parents: registerForm.name_of_parents,
      health_conditions: registerForm.health_conditions,
      emergency_contacts: registerForm.emergency_contacts,
      cash_payment_monthly: registerForm.cash_payment_monthly,
      online_payment_monthly: registerForm.online_payment_monthly,
      sign: registerForm.sign,
      date: registerForm.date
    })

    return response.redirect('/your_registers')
  }

  async loadRegisters({ view, auth }) {
    const registers = await Register
      .query()
      .where('user_id', auth.user.id)
      .orderBy('id', 'desc')
      .fetch()

    return view.render('pages/your_registers', { registers: registers.toJSON() })
  }

  async deleteBtnClick({ view, params }) {
    const registerId = params.id;
    const register = await Register.find(params.id);
    const studentName = register.student_name;

    return view.render('associates.register_deletion_warning', { registerId, studentName })
  }

  async deleteRegistraition({ params, response }) {
    const register = await Register.find(params.id);
    await register.delete();

    return response.redirect('/your_registers')
  }

  async editBtnClick({ view, params }) {
    const register = await Register.find(params.id);

    var fourToSix = '';
    var sixToHeight = '';
    var nineToEleven = '';
    var twelveToFourteen = '';
    var twelvePluss = '';
    var fifteenPluss = '';
    if (register.age_group.includes('4 - 6')) {
      fourToSix = 'checked';
    }
    if (register.age_group.includes('6 - 8')) {
      sixToHeight = 'checked';
    }
    if (register.age_group.includes('9 - 11')) {
      nineToEleven = 'checked';
    }
    if (register.age_group.includes('12 - 14')) {
      twelveToFourteen = 'checked';
    }
    if (register.age_group.includes('12+')) {
      twelvePluss = 'checked';
    }
    if (register.age_group.includes('15+')) {
      fifteenPluss = 'checked';
    }

    var tecChoreography = '';
    var tumblingAcro = '';
    var balletPointe = '';
    var hipHop = '';
    var aerialArts = '';
    var jazzFunk = '';
    var yoga = '';
    var barreFitness = '';
    var bellyDance = '';
    if (register.styles.includes('Tec & Choreography')) {
      tecChoreography = 'checked';
    }
    if (register.styles.includes('Tumbling & Acro')) {
      tumblingAcro = 'checked';
    }
    if (register.styles.includes('Ballet & Pointe')) {
      balletPointe = 'checked';
    }
    if (register.styles.includes('Hip Hop')) {
      hipHop = 'checked';
    }
    if (register.styles.includes('Aerial Arts')) {
      aerialArts = 'checked';
    }
    if (register.styles.includes('Jazz Funk')) {
      jazzFunk = 'checked';
    }
    if (register.styles.includes('Yoga')) {
      yoga = 'checked';
    }
    if (register.styles.includes('Barre Fitness')) {
      barreFitness = 'checked';
    }
    if (register.styles.includes('Belly Dance')) {
      bellyDance = 'checked';
    }

    var male = '';
    var female = '';
    if (register.male === true) {
      male = 'checked';
    }
    if (register.female === true) {
      female = 'checked';
    }

    var cash = '';
    var online = '';
    if (register.cash_payment_monthly === true) {
      cash = 'checked';
    }
    if (register.online_payment_monthly === true) {
      online = 'checked';
    }

    if (register.student_name == null) {
      register.student_name = '';
      register.save()
    }
    if (register.age == null) {
      register.age = '';
      register.save()
    }
    if (register.date_of_birth == null) {
      register.date_of_birth = '';
      register.save()
    }
    if (register.name_of_parents == null) {
      register.name_of_parents = '';
      register.save()
    }
    if (register.health_conditions == null) {
      register.health_conditions = '';
      register.save()
    }
    if (register.emergency_contacts == null) {
      register.emergency_contacts = '';
      register.save()
    }
    if (register.sign == null) {
      register.sign = '';
      register.save()
    }
    if (register.date == null) {
      register.date = '';
      register.save()
    }

    return view.render('associates/edit_registration', { register, tecChoreography, tumblingAcro, balletPointe, hipHop, aerialArts, jazzFunk, yoga, barreFitness, bellyDance, fourToSix, sixToHeight, nineToEleven, twelveToFourteen, twelvePluss, fifteenPluss, male, female, cash, online })
  }

  async updateRegistration({ request, params, response }) {
    const register = await Register.find(params.id);
    const newFormData = request.all();

    var styles = '';
    if (newFormData.tecChoreography) {
      styles = styles.concat(' Tec & Choreography')
    }
    if (newFormData.tumblingAcro) {
      styles = styles.concat(' Tumbling & Acro')
    }
    if (newFormData.balletPointe) {
      styles = styles.concat(' Ballet & Pointe')
    }
    if (newFormData.hipHop) {
      styles = styles.concat(' Hip Hop')
    }
    if (newFormData.aerialArts) {
      styles = styles.concat(' Aerial Arts')
    }
    if (newFormData.jazzFunk) {
      styles = styles.concat(' Jazz Funk')
    }
    if (newFormData.yoga) {
      styles = styles.concat(' Yoga')
    }
    if (newFormData.barreFitness) {
      styles = styles.concat(' Barre Fitness')
    }
    if (newFormData.bellyDance) {
      styles = styles.concat(' Belly Dance')
    }

    var age_group = '';
    if (newFormData.fourToSix) {
      age_group = age_group.concat('  4 - 6')
    }
    if (newFormData.sixToHeight) {
      age_group = age_group.concat('  6 - 8')
    }
    if (newFormData.nineToEleven) {
      age_group = age_group.concat('  9 - 11')
    }
    if (newFormData.twelveToFourteen) {
      age_group = age_group.concat('  12 - 14')
    }
    if (newFormData.twelvePluss) {
      age_group = age_group.concat('  12+')
    }
    if (newFormData.fifteenPluss) {
      age_group = age_group.concat('  15+')
    }

    var male = false;
    var female = false;
    if (newFormData.malee) {
      male = true
    }
    if (newFormData.femalee) {
      female = true
    }

    var cash = false;
    var online = false;
    if (newFormData.cash_payment_monthly) {
      cash = true
    }
    if (newFormData.online_payment_monthly) {
      online = true
    }

    register.student_name = newFormData.student_name;
    register.age_group = age_group;
    register.styles = styles;
    register.age = newFormData.age;
    register.date_of_birth = newFormData.date_of_birth;
    register.male = male;
    register.female = female;
    register.name_of_parents = newFormData.name_of_parents;
    register.health_conditions = newFormData.health_conditions;
    register.emergency_contacts = newFormData.emergency_contacts;
    register.cash_payment_monthly = cash;
    register.online_payment_monthly = online;
    register.sign = newFormData.sign;
    register.date = newFormData.date;

    await register.save()

    return response.redirect('/your_registers')
  }
}

module.exports = RegisterController
