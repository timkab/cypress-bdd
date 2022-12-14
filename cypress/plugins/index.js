//require('@babel/register')({ presets: [['@babel/preset-env', { targets: { node: '8.17.0', }, },]], });
//import dotenv from "dotenv";

const dotenv = require("dotenv")

const cucumber = require("cypress-cucumber-preprocessor").default

dotenv.config({ path: ".env.local" })
dotenv.config()

// Set Auth0 variables from .env

module.exports = (on, config) => {
  on("file:preprocessor", cucumber())

  //Auth0 STG
  config.env.auth0_username = process.env.AUTH0_USERNAME
  config.env.auth0_password = process.env.AUTH0_PASSWORD
  config.env.auth0_audience = process.env.AUTH0_AUDIENCE
  config.env.auth0_scope = process.env.AUTH0_SCOPE
  config.env.auth0_client_id = process.env.AUTH0_CLIENTID
  config.env.auth0_client_secret = process.env.AUTH0_CLIENT_SECRET
  //config.env.base_url = process.env.BASE_URL
  //config.env.auth0_domain = process.env.AUTH0_DOMAIN
  config.env.plaid_stg_public_key = process.env.PLAID_STG_PUBLIC_KEY 
  config.env.plaid_stg_client_id = process.env.PLAID_STG_CLIENT_ID
  config.env.plaid_stg_secret = process.env.PLAID_STG_SECRET

  return config
}