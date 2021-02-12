'use strict'

const Config = use('Config')

const Stripe = use('stripe')(Config.get('stripe.key_secret'))

class StripeController {
  getKeyPublishable () {
    return Config.get('stripe.key_publishable')
  }

  getSuccessURL () {
    return Config.get('stripe.url_success')
  }

  getErrorURL () {
    return Config.get('stripe.url_error')
  }

  createSession ( payment ) {
    return new Promise( ( resolve, reject ) => {
      Stripe.checkout.sessions.create( payment, function( err, session ) {
        if ( err ) {
          reject(err);
        }
        else {
          resolve(session);
        }
      });
    });
  }

  getSession ( sessionId ) {
    return new Promise( ( resolve, reject ) => {
      Stripe.checkout.sessions.retrieve( sessionId, function(err, session) {
          if ( err ) {
            reject(err);
          }
          else {
            resolve(session);
          }
        }
      );
    });
  }
}

module.exports = StripeController