const people = [
    {
      name: 'bob',
      location: { street: '123 main street', timezone: { offset: '+7:00' } },
    },
    { name: 'peter', location: { street: '123 Pine street' } },
    {
      name: 'susan',
      location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
    },
  ]

  people.forEach((person)=>{
    console.log(person?.location?.timezone?.offset || 'helo world');

  })
