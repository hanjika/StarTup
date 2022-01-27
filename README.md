# StarTup

A mobile-first website created to enable the matchmaking of entrepreneurs. Single entrepreneurs can find their entrepreneurial soulmate through this platform to launch interesting conversations about business.

Developed by [Shanon](https://github.com/shanon-richet) and [Hanna](https://github.com/hanjika).

## How to access all features

Sign up as a new user or log in using one of the following existing accounts:

| Email    | Password |
|----------|----------|
| shanon.richet@gmail.com | fnjk*  |
| hanna.masanjika@gmail.com | sdop8? |
| jamesmd@gmail.com | jamesm1 |
| john@gmail.com | john |
| katesmith@gmail.com | kates1 |

## Launch 
- cd client
- npm run start-server

## Frontend requirements (Hanna)
- A screen to register
- A screen to login
- A match-making view
- A list of conversations (once you have matched)
- The conversation details
- (optional) A settings view to edit user details

## Backend requirements (Shanon)
- An endpoint to register (POST /api/register)
- An endpoint to login/logout (POST /api/login)
- An endpoint that lists potential matches (GET /api/matches)
- An endpoint that lists all users (but without their full name) (/api/users)
- An endpoint that lists all of a user conversations (/api/conversations/)
- An enpoint to retrieve and send message to a conversation (POST+GET /api/conversations/[id])
- (optional) A user-settings endpoint to edit user profile (PATCH /api/users/[id])