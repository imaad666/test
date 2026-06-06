-- schema.sql

-- Create a table for agents
CREATE TABLE agents (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Create a table for tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    assigned_to INTEGER,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    FOREIGN KEY (assigned_to) REFERENCES agents(id) ON DELETE SET NULL
);

-- Create an index on the foreign key column
CREATE INDEX idx_tasks_assigned_to ON tasks (assigned_to);

-- Create a table for task assignments (many-to-many if needed)
CREATE TABLE task_assignments (
    task_id INTEGER,
    agent_id INTEGER,
    PRIMARY KEY (task_id, agent_id),
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE CASCADE
);

-- Create indexes for the task assignments
CREATE INDEX idx_task_assignments_task_id ON task_assignments (task_id);
CREATE INDEX idx_task_assignments_agent_id ON task_assignments (agent_id);
