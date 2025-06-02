const contactSubmission = {
    name: 'contactSubmission',
    title: 'Contact Submission',
    type: 'document',
    fields: [
      { name: 'firstName', title: 'First Name', type: 'string' },
      { name: 'lastName', title: 'Last Name', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'company', title: 'Company', type: 'string' },
      { name: 'message', title: 'Message', type: 'text' },
      { name: 'createdAt', title: 'Created At', type: 'datetime', options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm' }, initialValue: () => new Date().toISOString() },
    ]
  }
  export default contactSubmission;