## Steps followed

You would first need to establish a new React project using the create-react-app command in order to develop a straightforward form in React that receives user information and calls a REST API.

Once the project is configured, you can make a new component for the form and control the form state using the useState hook. Name, email, age, slots and payment information such as card number, CVV, and expiration date should all be fields on the form.

You can use the onSubmit event handler and the fetch or axios library to manage form submissions while sending an HTTP POST request to the REST API endpoint.

The user input can then be verified using the REST API, the data can be kept in a database, and the payment processing can be done by calling the CompletePayment function. A simple example would be to have a users table with columns for the user's name and email and a payments table with columns for the payment details. The database design would depend on the specifics of the data you need to store.

The frontend can then display the response to the user after the REST API returns it after the payment has been processed.

## Backend configuration

You would need to select a backend language and framework before implementing the REST API. Python with Flask, Java with Spring, and Node.js with Express are a few of the frequently used platforms for creating REST APIs.

You can start a new project and configure the appropriate routes and logic to handle the form submission from the React frontend once you've decided on a language and framework.

You can create your own custom validation logic or use built-in form validation techniques offered by the framework you are using to validate user input. For instance, the express-validator middleware in Express can be used to validate the form data.

You would need to set up a database server and setup your application to connect to it in order to store the data in a database.
MongoDb is utilised here as the database.

You can use the CompletePayment function to complete the payment after the data has been placed in the database. It is presumed that this function is a dummy function, which you can handle in your code by handling the response it returns. For instance, you could send a message to the frontend if the payment was successful or an error message if it wasn't.

## Working model

You can test the form and REST API after they have been implemented to make sure everything is functioning as it should. Start the backend server, and then launch the React application in development mode, to accomplish this. The form can then be filled out and submitted to check whether the payment was successfully handled and whether the API provided the correct response.

When the form and API function as planned, you may publish them to a web server so that users can access them. Building the React application for production and setting up the web server to handle API calls and deliver static files are common steps in this process.

Users can access the form and API by going to the relevant URL in their web browsers when they have been deployed. They can then finish the form and send it in to have their payment processed.