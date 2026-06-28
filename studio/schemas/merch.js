import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'merch',
  title: 'Merchandise',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Product Name', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['T-Shirt', 'Hoodie', 'Cap', 'Poster', 'CD', 'Vinyl'], layout: 'radio' },
    }),
    defineField({ name: 'price', title: 'Price (IDR)', type: 'number' }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Leave empty if no sizes apply',
    }),
    defineField({
      name: 'stock',
      title: 'Stock Status',
      type: 'string',
      options: { list: ['In Stock', 'Low Stock', 'Sold Out'], layout: 'radio' },
      initialValue: 'In Stock',
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'details',
      title: 'Product Details',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Bullet points like fabric, print method, fit',
    }),
    defineField({ name: 'image', title: 'Product Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'emoji', title: 'Emoji (fallback when no image)', type: 'string', initialValue: '📦' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Order Link', type: 'string' }),
    defineField({ name: 'marketplace', title: 'Marketplace Link', type: 'string' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number', initialValue: 99 }),
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'image' } },
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
