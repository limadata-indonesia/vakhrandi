import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'alt', title: 'Caption / Alt Text', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Photoshoot', 'Live Performance', 'Behind The Scene', 'Studio Session', 'Fan Event'],
        layout: 'radio',
      },
    }),
    defineField({ name: 'src', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number', initialValue: 99 }),
  ],
  preview: { select: { title: 'alt', subtitle: 'category', media: 'src' } },
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
