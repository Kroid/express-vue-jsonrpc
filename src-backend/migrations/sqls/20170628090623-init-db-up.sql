CREATE TABLE trips (
  id          serial PRIMARY KEY,
  title       text NOT NULL,
  description text
);

CREATE TABLE users (
  id              serial PRIMARY KEY,
  email           text UNIQUE NOT NULL,
  phone_number    text UNIQUE,
  password_digest text,
  avatar          text
);

CREATE TABLE trips_members (
  trip_id  integer references trips(id),
  user_id  integer references users(id),
  role     text
);

