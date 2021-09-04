const oktaAuthConfig = {
  issuer: 'https://dev-19915518.okta.com/oauth2/default',
  // issuer: 'https://dev-19915518.okta.com',
  // dev-19915518.okta.com
  clientId: '0oa1lz41szJya51jL5d7',
  // 0oa1lz41szJya51jL5d7
  redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
  baseUrl: 'https://dev-19915518.okta.com',
  clientId: '0oa1lz41szJya51jL5d7',
  redirectUri: window.location.origin + '/login/callback',
logo: 'blog.png',
  authParams: {
    
  }
// Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};

export { oktaAuthConfig, oktaSignInConfig };