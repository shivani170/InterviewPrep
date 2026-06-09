CREATE TABLE urls(
    id BIGINT PRIMARY KEY,
    short_code VARCHAR(20) UNIQUE,
    long_url TEXT,
    created_at TIMESTAMP,
    expires_at TIMESTAMP
);
