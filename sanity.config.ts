import { defineConfig } from 'sanity'
import { schemaTypes } from './studio/schemaTypes/index'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'buzz-one-media',
  projectId: '1q7001iq',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: '/admin',
}) 