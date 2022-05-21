### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  **JSON Web Token. Used for authentication/authorization in apps.**
- What is the signature portion of the JWT?  What does it do?
  **It's a passcode used by the application to verify the authenticity of the token. Contains base64.**
- If a JWT is intercepted, can the attacker see what's inside the payload?
  **The payload is encrypted but visible if decrypted.**
- How can you implement authentication with a JWT?  Describe how it works at a high level.
  **The app server would return a new token for the session and then when an action requiring authentication is performed, verify the token.**
- Compare and contrast unit, integration and end-to-end tests.
  **Unit tests are automated tests of a single module's functions. Integration tests test the functionality of multiple modules together. End-to-end tests test the complete application from a user's perspective.**
- What is a mock? What are some things you would mock?
  **Used to create a controlled test environment for tests that depend on factors outside of the application. Responses from external APIs and methods like Math.random.**
- What is continuous integration?
  **Methodology that focuses on incremental implementation: continuously pushing working code with minor changes and that has passed all tests run by the server.**
- What is an environment variable and what are they used for?
  **Global variables that have values set outside the program by the operating system. Used to limit the need to change configuration variables in the program.**
- What is TDD? What are some benefits and drawbacks?
  **Test-driven Development. Methodology of developing an application by writing tests first. Generally makes for good code architecture by using it, but it can be much slower to develop the parts of the app.** 
- What is the value of using JSONSchema for validation?
  **It's a system that is easy to set up for validating data that is used by the database.**
- What are some ways to decide which code to test?
  **Functions that have multiple moving parts like complex unit functions that have various return values and integration functions are good to have tested.**
- What does `RETURNING` do in SQL? When would you use it?
  **It allows you to see what in the database was modified by the query. Used generally for insert and update functions.**
- What are some differences between Web Sockets and HTTP?
  **Web Socket is a protocol that keeps the connection between the client and server alive after the initial request. While HTTP closes every time after a response.**
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  **I personally liked using Flask more, since I'm more familiar with Python as a language than Javascript.**