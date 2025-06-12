import {defineConfig} from 'sanity'
import {schemaTypes} from './schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'Buzz One Media',
  projectId: 'buzz-one-media',
  dataset: 'production',
  basePath: '/admin',
  plugins: [],
  schema: {
    types: schemaTypes,
  },
  outputPath: 'dist',
})
