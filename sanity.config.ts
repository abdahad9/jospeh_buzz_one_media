import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './studio/schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'buzz-one-media',
  projectId: '1q7001iq',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: '/admin',
}) 