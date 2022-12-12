## Database Design
The specifics of the data you must store will determine the ER diagram to be used for the database design. We have a USERS table with columns for the user's name, age and email and a PAYMENTS table with columns for payment information such the id, cardNumber, expiryDate, and cvv. Since one user may get numerous payments, there would be a one-to-many relationship between the users and payments tables.

The ER diagram for this database design would look something like this:
![Alt text](/ERImage.png?raw=true "ER Diagram")