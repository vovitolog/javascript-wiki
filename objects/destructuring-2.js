const response = {
  data: {
    type: "photos",
    id: "550e8400-e29b-41d4-a716-446655440000",
    attributes: {
      title: "Ember Hamster",
      src: "http://example.com/images/productivity.png",
    },
    relationships: {
      author: {
        links: {
          related: "http://example.com/articles/1/author",
        },
      },
    },
    links: {
      self: "http://example.com/photos/550e8400-e29b-41d4-a716-446655440000",
    },
  },
};

const {
  links,
  attributes: user,
  relationships: { author: {links: {related}} }, // переименование
  
} = response.data;

console.log(links);
console.log(user);
console.log(related);
