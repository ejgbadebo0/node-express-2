# Bugs 


- Bug 1: /login route in auth.js doesn't await authenticate function.

- Bug 2: get() function of User model doesn't throw an error when invalid.

- Bug 3: /update route in users.js requires admin and doesn't allow authorized user to change fields.

- Bug 4: /update route in users.js allows change of username and admin privledges

- Bug 5: authUser() in auth.js doesn't verify the token. 