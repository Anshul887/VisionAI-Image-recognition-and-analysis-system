CREATE TABLE image_history (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255),
    prediction JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
