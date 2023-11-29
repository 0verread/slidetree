import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage ({
  cookie: {
    name: '',
    sameSite: 'lax'
  }
})