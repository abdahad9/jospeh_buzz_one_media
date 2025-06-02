const businessPlans = {
    name: 'businessPlans',
    title: 'Business Plans',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'price', title: 'Price', type: 'string' },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }]
      },
      { name: 'button', title: 'Button', type: 'string' },
      { name: 'highlight', title: 'Highlight', type: 'boolean' },
      { name: 'enterprise', title: 'Enterprise', type: 'boolean' },
      { name: 'badge', title: 'Badge', type: 'string' },
      { name: 'background', title: 'Background Color', type: 'string' }
    ]
  };
  
  export default businessPlans;
  