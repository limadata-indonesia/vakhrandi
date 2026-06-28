import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist Settings',
  type: 'document',
  fields: [
    defineField({ name: 'photo', title: 'Artist Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'genre', title: 'Genre', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'bioExtended', title: 'Bio (Extended)', type: 'text', rows: 4 }),
    defineField({
      name: 'milestones',
      title: 'Career Milestones',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'year', title: 'Year', type: 'string' }),
          defineField({ name: 'event', title: 'Event', type: 'string' }),
        ],
        preview: { select: { title: 'year', subtitle: 'event' } },
      })],
    }),
    defineField({
      name: 'influences',
      title: 'Musical Influences',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'object',
      fields: [
        defineField({ name: 'monthlyListeners', title: 'Monthly Listeners', type: 'string' }),
        defineField({ name: 'totalStreams', title: 'Total Streams', type: 'string' }),
        defineField({ name: 'totalReleases', title: 'Total Releases', type: 'string' }),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'spotify', title: 'Spotify URL', type: 'string' }),
        defineField({ name: 'appleMusic', title: 'Apple Music URL', type: 'string' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'string' }),
        defineField({ name: 'tiktok', title: 'TikTok URL', type: 'string' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'string' }),
        defineField({ name: 'threads', title: 'Threads URL', type: 'string' }),
        defineField({ name: 'twitter', title: 'X / Twitter URL', type: 'string' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'string' }),
      ],
    }),
    defineField({ name: 'spotifyTrackId', title: 'Spotify Track ID (latest release)', type: 'string' }),
    defineField({ name: 'spotifyPlaylistId', title: 'Spotify Playlist ID', type: 'string' }),
    defineField({ name: 'appleMusicId', title: 'Apple Music Album/Track ID', type: 'string' }),
    defineField({ name: 'pressEmail', title: 'Press / Booking Email', type: 'string' }),
  ],
  preview: { select: { title: 'name', subtitle: 'tagline' } },
})
