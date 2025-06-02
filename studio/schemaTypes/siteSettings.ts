const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      {
        name: 'bookingLink',
        title: 'Booking Link',
        type: 'url',
        description: 'Link to your Calendly or Google Calendar booking page',
      },
      // ...add more site-wide settings as needed
    ],
  }
  export default siteSettings;