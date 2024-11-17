export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      opttions: {
        hotspot: true,
      },
    },
    {
      name: 'likeCount',
      title: 'Like Count',
      type: 'number',
    },
  ],
}
