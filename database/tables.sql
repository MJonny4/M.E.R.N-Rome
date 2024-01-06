-- Syntax: PostgreSQL
--
-- Table Hotels
CREATE TABLE IF NOT EXISTS Hotels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    stars INTEGER NOT NULL,
    address VARCHAR(100) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    photos VARCHAR(255) [] NOT NULL,
    -- Read only
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
    -- Constraints
    CHECK (
        stars BETWEEN 1
        AND 5
    ),
    UNIQUE (name, address, city, country),
    UNIQUE (email),
    UNIQUE (phone)
);

-- Table Users
CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    role VARCHAR(255) NOT NULL,
    -- Read only
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
    -- Constraints
    UNIQUE (email),
    UNIQUE (phone),
    CHECK (gender in ('male', 'female', 'other')),
    CHECK (role in ('admin', 'user'))
);

-- Table Hotel Facilities
CREATE TABLE IF NOT EXISTS HotelFacilities (
    id SERIAL PRIMARY KEY,
    hotel_id INTEGER NOT NULL,
    pool BOOLEAN NOT NULL,
    gym BOOLEAN NOT NULL,
    spa BOOLEAN NOT NULL,
    restaurant BOOLEAN NOT NULL,
    FOREIGN KEY (hotel_id) REFERENCES Hotels(id),
    -- Read only
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
    -- Constraints
    CHECK (pool IN (TRUE, FALSE)),
    CHECK (gym IN (TRUE, FALSE)),
    CHECK (spa IN (TRUE, FALSE)),
    CHECK (restaurant IN (TRUE, FALSE))
);

-- Table Rooms
CREATE TABLE IF NOT EXISTS Rooms (
    id SERIAL PRIMARY KEY,
    hotel_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    photos VARCHAR(255) [] NOT NULL,
    number INTEGER NOT NULL,
    floor INTEGER NOT NULL,
    type VARCHAR(255) NOT NULL,
    style VARCHAR(255) NOT NULL,
    -- ENUM('modern', 'urban', 'classical')
    discount DECIMAL(10, 2) NOT NULL,
    -- 1% - 50%
    FOREIGN KEY (hotel_id) REFERENCES Hotels(id),
    -- Read only
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
    -- Constraints
    CHECK (price > 0),
    CHECK (number > 0),
    CHECK (floor > 0),
    CHECK (
        type IN ('single', 'double', 'quad', 'queen', 'king')
    ),
    CHECK (style IN ('modern', 'urban', 'classical')),
    CHECK (
        discount BETWEEN 0
        AND 50
    )
);

-- Table Bookings
CREATE TABLE IF NOT EXISTS Bookings (
    id SERIAL PRIMARY KEY,
    room_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    available BOOLEAN NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    payed BOOLEAN NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Rooms(id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    -- Read only
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
    -- Constraints
    CHECK (check_in > NOW()),
    CHECK (check_out > NOW()),
    CHECK (check_out > check_in),
    CHECK (payed IN (TRUE, FALSE))
);

-- Table Reviews
CREATE TABLE IF NOT EXISTS Reviews (
    id SERIAL PRIMARY KEY,
    hotel_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    -- 1-5
    comment VARCHAR(255) NOT NULL,
    FOREIGN KEY (hotel_id) REFERENCES Hotels(id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    -- Read only
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
    -- Constraints
    CHECK (
        rating BETWEEN 1
        AND 5
    )
);