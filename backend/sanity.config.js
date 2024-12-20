import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// mdkhateebur.2022ug3006@iiitranchi.ac.in

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_CLIENT_ID,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
