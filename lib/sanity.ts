// lib/sanity.js or lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: '1q7001iq', // Find this in sanity.json or at manage.sanity.io
  dataset: 'production',        // Or your dataset name
  apiVersion: '2023-01-01',     // Use today's date or your preferred version
  useCdn: true,                 // `false` if you want fresh data (e.g. for previews)
  token: 'skTmNNf6EEP7AFPIv66Ec5hS87s6qtd4OOFMYvqLCLwJqzPTpAlEiXs5ig2FJckK6Qq9Tc8xSJg9wmIRXImsGMMuYUdsLmUDfaHp7E2yxovxYvPg2sX5OgnKUIIEx7WdKHE8F4Kh9bkV6tWIoYC29PjuKPlJhQmluryZuEObGCPgfI010s48', 
});