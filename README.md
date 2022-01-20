# Star-Tup

A mobile-first website created to enable the matchmaking of entrepreneurs. Single entrepreneurs can find their entrepreneurial soulmate through this platform to launch interesting conversations about business.

Developed by Shanon and Hanna.

## Frontend requirements (Hanna)
These are the views you should be creating:

- A screen to register
- A screen to login
- A match-making view
- A list of conversations (once you have matched)
- The conversation details
- (optional) A settings view to edit user details

## Backend requirements (Shanon)
Design an API that allows people to connect with each other. You should provide the following functionalities:

- An endpoint to register (POST /api/register)
- An endpoint to login/logout (POST /api/login)
- An endpoint that list potential matches (GET /api/matches)
- An enpoint that list all users (but without their full name) (/api/users)
- An endpoint that list all of a user conversations (/api/conversations/)
- An enpoint to retrieve and send message to a conversation (POST+GET /api/conversations/[id])
- (optional) A user-settings endpoint to edit user profile (PATCH /api/users/[id])