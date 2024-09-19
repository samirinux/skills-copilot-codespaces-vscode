function skillsMember() {
  return {
    name: 'skillsMember',
    source: 'member',
    type: 'array',
    items: {
      type: 'string',
    },
    description: 'List of skills',
  };
}