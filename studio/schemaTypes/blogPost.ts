const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'content', title: 'Content', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'category', title: 'Category', type: 'string' },
  ]
}

export default blogPost; 