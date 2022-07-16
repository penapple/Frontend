/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

 import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

 const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
 /**
  * Enter here the user flows and custom policies for your B2C application,
  * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
  * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
  */
 export const b2cPolicies = {
     names: {
         signUpSignIn: "B2C_1_sign_up_in_policy_1",
         //editProfile: "b2c_1_edit_profile_v2"
     },
     authorities: {
         signUpSignIn: {
             authority: "https://penpineappleb2c.b2clogin.com/penpineappleb2c.onmicrosoft.com/B2C_1_sign_up_in_policy_1",
         },
        //  editProfile: {
        //      authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile_v2"
        //  }
     },
     authorityDomain: "penpineappleb2c.b2clogin.com"
 };
 
 /**
  * Configuration object to be passed to MSAL instance on creation. 
  * For a full list of MSAL.js configuration parameters, visit:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
  */
  export const msalConfig: Configuration = {
     auth: {
         clientId: '24f7f270-52a9-4650-86ff-f20742fd5858', // This is the ONLY mandatory field that you need to supply.
         authority: b2cPolicies.authorities.signUpSignIn.authority, // Defaults to "https://login.microsoftonline.com/common"
         knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
         redirectUri: 'https://ms3-dev-frontend.azurewebsites.net/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
         postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
         navigateToLoginRequestUrl: true, // If "true", will navigate back to the original request location before processing the auth code response.
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
         storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge
     },
     system: {
         loggerOptions: {
             loggerCallback(logLevel: LogLevel, message: string) {
                 console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }
 
 /**
  * An optional silentRequest object can be used to achieve silent SSO
  * between applications by providing a "login_hint" property.
  */
 export const silentRequest = {
     scopes: ["openid", "profile"],
     loginHint: "example@domain.net"
 };


 /**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    aloeTokenApi: {
      endpoint: "https://localhost:5001/api/AloeToken",
      scopes: ["https://penpineappleb2c.onmicrosoft.com/61bd96d7-b410-4d31-84fd-298629aefb4d/access_as_user"],
    },
  }
  