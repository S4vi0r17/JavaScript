const url = 'http://localhost:4000/clientes';

// Create a new client
export const newClient = async client => {

    try {

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}

// Obtains all clients from the API
export const getClients = async () => {

    try {

        const response = await fetch(url);
        const clients = await response.json();

        return clients;

    } catch (error) {
        console.log(error);
    }
}

// Delete a client
export const deleteClient = async id => {

    try {

        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });

    } catch (error) {
        console.log(error);
    }
}

// Get a client by ID
export const getClient = async id => {

    try {

        const response = await fetch(`${url}/${id}`);
        const client = await response.json();

        return client;

    } catch (error) {
        console.log(error);
    }
}

// Update a client
export const updateClient = async client => {

    try {

        // Difference between PUT and PATCH: 
        // PUT: Update all the object
        // PATCH: Update only the fields that are modified

        await fetch(`${url}/${client.id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}