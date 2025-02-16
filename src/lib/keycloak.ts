/**
 * @file keycloak.ts
 * @type lib
 * @project Mewo Portal
 * @description This provides logic for initiating auth via keycloak.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID
});

export const initKeycloak = (): Promise<boolean> => {
  return keycloak.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256'
  });
};