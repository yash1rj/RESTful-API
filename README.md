----
## RESTful-API
A simple RESTful API Implementation.


----
## Structure of APP

We are going to inject a bit of MVC into this app structure to keep our files lean and separate concerns. We need to three more files listed below…

* **api-routes —** all api endpoint shall be defined in this file
* **controller —** processes HTTP requests and defines available endpoints
* **model —** manages database layer (request and response)

----
## Note

* Mongoose is Nodejs package for modeling Mongodb. It helps you handle validation and business logic for mongodb on Nodejs.

* Body-parser enables your app to parse data from incoming request like form data via urlencode.

* Controller will handle API request and Model to save/retrieve data from the database. We will implement a simple data model the stores contact information with the following details:
 * Name
 * Email

 * Phone
 * Gender

 * Phone No.
 * Create date

* I am implementing the following endpoints:
 * GET /api/contacts list all contacts
 * POST /api/contacts create new contact
 * GET /api/contacts/{id} retrieve a single contact
 * PUT /api/contacts/{id} update a single contact
 * DELETE /api/contacts/{id} delete a single contact
