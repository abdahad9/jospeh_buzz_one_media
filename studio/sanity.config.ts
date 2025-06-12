import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'Buzz One Media',
  projectId: 'buzz-one-media',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  outputPath: 'dist',
})
