/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_GOOGLE_CLIENT_ID: string;
    // other env variables...
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}