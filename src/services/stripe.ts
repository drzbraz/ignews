import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRYPE_API_KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'IgNews',
    version: '0.0.1'
  }
})
