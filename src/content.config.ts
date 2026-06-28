import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const releases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/releases' }),
  schema: z.object({
    title:       z.string(),
    type:        z.enum(['Single', 'EP', 'Album', 'Collaboration']),
    year:        z.string(),
    duration:    z.string(),
    description: z.string(),
    cover:       z.string().default('/images/placeholder-release.jpg'),
    links: z.array(z.object({
      platform: z.string(),
      url:      z.string(),
    })).default([]),
    order: z.number().default(99),
  }),
})

const merch = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/merch' }),
  schema: z.object({
    name:        z.string(),
    category:    z.enum(['T-Shirt', 'Hoodie', 'Cap', 'Poster', 'CD', 'Vinyl']),
    price:       z.number(),
    sizes:       z.array(z.string()).optional(),
    stock:       z.enum(['In Stock', 'Low Stock', 'Sold Out']),
    description: z.string(),
    details:     z.array(z.string()).default([]),
    emoji:       z.string().default('📦'),
    image:       z.string().optional(),
    whatsapp:    z.string().optional(),
    marketplace: z.string().optional(),
    order:       z.number().default(99),
  }),
})

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title:     z.string(),
    category:  z.enum(['Music Video', 'Lyric Video', 'Shorts', 'Live Session']),
    youtubeId: z.string().default(''),
    year:      z.string(),
    order:     z.number().default(99),
  }),
})

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    alt:      z.string(),
    category: z.enum(['Photoshoot', 'Live Performance', 'Behind The Scene', 'Studio Session', 'Fan Event']),
    src:      z.string().default(''),
    order:    z.number().default(99),
  }),
})

const settings = defineCollection({
  loader: file('./src/content/settings/artist.json'),
  schema: z.object({
    name:       z.string(),
    tagline:    z.string(),
    genre:      z.string(),
    bio:        z.string(),
    bioExtended: z.string().default(''),
    influences: z.array(z.string()).default([]),
    achievements: z.array(z.string()).default([]),
    milestones: z.array(z.object({
      year:  z.string(),
      event: z.string(),
    })).default([]),
    stats: z.object({
      monthlyListeners: z.string().default('—'),
      totalStreams:     z.string().default('—'),
      totalReleases:    z.string().default('—'),
    }),
    social: z.object({
      spotify:    z.string().default('#'),
      appleMusic: z.string().default('#'),
      instagram:  z.string().default('#'),
      tiktok:     z.string().default('#'),
      youtube:    z.string().default('#'),
      threads:    z.string().default('#'),
      twitter:    z.string().default('#'),
      facebook:   z.string().default('#'),
    }),
    spotifyTrackId:    z.string().default(''),
    spotifyPlaylistId: z.string().default(''),
    appleMusicId:      z.string().default(''),
    pressEmail:        z.string().default(''),
  }),
})

export const collections = { releases, merch, videos, gallery, settings }
