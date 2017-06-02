interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'K67Sffss7Ejw12brFTu0bH4VpFz2Gdy8',
  CLIENT_DOMAIN: 'shrutha.auth0.com',
  AUDIENCE: 'ramen-taka-api',
  REDIRECT: 'http://localhost:8000/callback',
  SCOPE: 'openid profile'
};