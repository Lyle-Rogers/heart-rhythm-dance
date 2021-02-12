'use strict'

const Register = use('App/Models/Register')
const Payment = use('App/Models/MembershipPayment')

const StripeController = use('App/Controllers/Http/StripeController')
const Stripe = new StripeController()

class PaymentController {
  async directToPayments({ view, params, auth }) {
    const register = await Register.find(params.registerId);

    const tecChoreographyPayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'tec & Choreography')
      .fetch()

    const tumblingAcroPayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Tumbling & Acro')
      .fetch()

    const balletPointePayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Ballet & Pointe')
      .fetch()

    const hipHopPayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Hip Hop')
      .fetch()

    const aerialArtsPayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Aerial Arts')
      .fetch()

    const jazzFunkPayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Jazz Funk')
      .fetch()

    const yogaPayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Yoga')
      .fetch()

    const barreFitnessPayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Barre Fitness')
      .fetch()

    const bellyDancePayments = await Payment
      .query()
      .where('user_id', auth.user.id)
      .where('style', 'Belly Dance')
      .fetch()

    return view.render('pages/payments', { register: register, tecChoreographyPayments: tecChoreographyPayments.toJSON(), tumblingAcroPayments: tumblingAcroPayments.toJSON(), balletPointePayments: balletPointePayments.toJSON(), hipHopPayments: hipHopPayments.toJSON(), aerialArtsPayments: aerialArtsPayments.toJSON(), jazzFunkPayments: jazzFunkPayments.toJSON(), yogaPayments: yogaPayments.toJSON(), barreFitnessPayments: barreFitnessPayments.toJSON(), bellyDancePayments: bellyDancePayments.toJSON() })
  }

  async startPay({ params, response }) {
    var styleBeingPayed = await Payment.find('6');

    styleBeingPayed.style = params.style;
    await styleBeingPayed.save()

    return response.redirect('/payments/try/pay')
  }

  async tryPay({ response }) {
    const success_url = Stripe.getSuccessURL()
    const error_url = Stripe.getErrorURL()

    var style = {};

    const styleBeingPayed = await Payment.find('6');
    if (styleBeingPayed.style == 'tecChoreography') {
      style = {
        name: 'Tec & Choreography',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/4554bec7ef264da1bca09af6982747bc.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/4554bec7ef264da1bca09af6982747bc.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'tumblingAcro') {
      style = {
        name: 'Tumbling & Acro',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/11062b_d0fb51a8fa2f47ab94d5c03becf7ff36~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/11062b_d0fb51a8fa2f47ab94d5c03becf7ff36~mv2_d_5472_3648_s_4_2.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'balletPointe') {
      style = {
        name: 'Ballet & Pointe',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/ee2226abaec643e985133e5932e2c39e.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/ee2226abaec643e985133e5932e2c39e.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'hipHop') {
      style = {
        name: 'Hip Hop',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/b1d3764b601943b29b5ff9891e45fe54.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/b1d3764b601943b29b5ff9891e45fe54.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'aerialArts') {
      style = {
        name: 'Aerial Arts',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/dc2acb_507a1756ff654a9baea09230303c4928~mv2.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/dc2acb_507a1756ff654a9baea09230303c4928~mv2.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'jazzFunk') {
      style = {
        name: 'Jazz Funk',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/5063cc3770e84e7aadb4f6c8a2633001.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5063cc3770e84e7aadb4f6c8a2633001.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'yoga') {
      style = {
        name: 'Yoga',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/nsplsh_abf078c2018b46268d6a374be9519fe2~mv2.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/nsplsh_abf078c2018b46268d6a374be9519fe2~mv2.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'barreFitness') {
      style = {
        name: 'Barre Fitness',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/dc2acb_69193fb09fe249e8800c734ec704104e~mv2.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/dc2acb_69193fb09fe249e8800c734ec704104e~mv2.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    if (styleBeingPayed.style == 'bellyDance') {
      style = {
        name: 'Belly Dance',
        description: "Heart Rhythm Dance Studio",
        image: 'https://static.wixstatic.com/media/82e08a1c73774fb0b297507a66654d2a.jpg/v1/fill/w_510,h_304,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/82e08a1c73774fb0b297507a66654d2a.webp',
        price: 350,
        currency: 'MXN',
      }
    }
    
    const payment = {
      payment_method_types: ['card'],
      line_items: [{
        name: style.name,
        description: style.description,
        images: [style.image],
        amount: style.price + '00',
        currency: style.currency,
        quantity: 1,
      }],
      success_url: success_url + '?sessionId={CHECKOUT_SESSION_ID}',
      cancel_url: error_url,
    }
    
    await Stripe.createSession( payment )
      .then( ( session ) => {
        return response.redirect('/pay/checkout' + '?sessionId=' + session.id);
      })
      .catch( ( err ) => {
        return response.redirect(error_url + '?name=' + err.type + '&message=' + err.raw.message);
      });
  }

  async payCheckout({ view, request }) {
    const sessionId = request.input('sessionId')
    return view.render('pages/checkout', {
      sessionId: sessionId,
      keyPublishable: Stripe.getKeyPublishable()
    })
  }

  async paySuccess ({ response, session }) {
    session.flash({
      payment_message: 'Payment Succesful! Thanks for your participation.',
      class: 'success'
    })
    response.redirect('/payments/74');
  }

  async payError({ request, response, session }) {
    const name = request.input('name')
    const message = request.input('message')
    session.flash({
      payment_message: 'Payment error! ' + name + ': ' + message,
      class: 'faild'
    })
    response.redirect('/payments/74');
  }
}

module.exports = PaymentController
