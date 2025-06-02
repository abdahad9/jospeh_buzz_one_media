const portfolioCase = {
  name: 'portfolioCase',
  title: 'Portfolio Case',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'client', title: 'Client', type: 'string' },
    { name: 'stats', title: 'Stats', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'value', title: 'Value', type: 'string' },
    ] }] },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'color', title: 'Color', type: 'string' },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'industry', title: 'Industry', type: 'string' },
  ]
}

export default portfolioCase; 