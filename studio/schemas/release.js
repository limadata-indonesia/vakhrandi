import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'release',
  title: 'Releases',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['Single', 'EP', 'Album', 'Collaboration'], layout: 'radio' },
    }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string', description: 'e.g. 3:42 or 18:30' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'cover', title: 'Cover Art', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number', initialValue: 99 }),
    defineField({
      name: 'links',
      title: 'Streaming Links',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'platform', title: 'Platform', type: 'string', description: 'Spotify, Apple Music, etc.' }),
          defineField({ name: 'url', title: 'URL', type: 'string' }),
        ],
        preview: { select: { title: 'platform', subtitle: 'url' } },
      })],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'type', media: 'cover' } },
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
