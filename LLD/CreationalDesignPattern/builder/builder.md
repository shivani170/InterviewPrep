The Builder Pattern is a creational design pattern
used to construct complex objects step by step

const user = new User(
  "Shivani",
  "shivani@gmail.com",
  25,
  "India",
  true,
  "Frontend Engineer"
);

After a few months:

const user = new User(
  "Shivani",
  "shivani@gmail.com",
  true, // Age or active? 🤔
  "India",
  25,
  "Frontend Engineer"
);

It becomes hard to read and maintain.