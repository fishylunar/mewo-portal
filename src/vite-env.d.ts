/**
 * @file vite-env.d.ts
 * @type type
 * @project Mewo Portal
 * @description Provides types for the environment variables.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_KEYCLOAK_URL: string
    readonly VITE_KEYCLOAK_REALM: string
    readonly VITE_KEYCLOAK_CLIENT_ID: string
    readonly VITE_BASE_HOST: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }