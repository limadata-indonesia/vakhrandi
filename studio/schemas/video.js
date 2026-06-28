import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Music Video', 'Lyric Video', 'Shorts', 'Live Session'], layout: 'radio' },
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'The part after ?v= in the YouTube URL (e.g. dQw4w9WgXcQ)',
    }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number', initialValue: 99 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', youtubeId: 'youtubeId' },
    prepare({ title, subtitle, youtubeId }) {
      return {
        title,
        subtitle: `${subtitle} · ${youtubeId || 'No ID yet'}`,
      }
    },
  },
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
