import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/index.js'

export default defineConfig({
  name: 'vakhrandi',
  title: 'VAKHRANDI CMS',
  projectId: 'k9qkr4ni',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Artist Settings')
              .id('artist')
              .child(S.document().schemaType('artist').documentId('artist-singleton')),
            S.divider(),
            S.documentTypeListItem('release').title('Releases'),
            S.documentTypeListItem('merch').title('Merchandise'),
            S.documentTypeListItem('video').title('Videos'),
            S.documentTypeListItem('gallery').title('Gallery'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemas },
})
