const servicesData = {
        name: 'service',
        title: 'Service',
        type: 'document',
        fields: [
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'icon',
            title: 'Icon (URL or upload)',
            type: 'image',
            options: {
              hotspot: true,
            }
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'tagDescriptions',
            title: 'Tag Descriptions',
            type: 'array',
            of: [{ type: 'text' }],
          },
          {
            name: 'subServices',
            title: 'Sub Services',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'subslug', title: 'Sub Slug', type: 'slug', options: { source: 'title' } },
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                ]
              }
            ]
          },
          {
            name: 'description',
            title: 'Main Description',
            type: 'text',
          },
          {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
              hotspot: true,
            }
          }
        ]
    }
      
  export default servicesData; 