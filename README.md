## Simple User Registration Login API with authentication using Nodejs and Express

To run this project run `yarn run dev` in root folder.

### To test this api in postman.

1. For registration - `http://localhost:3000/user/register` (POST)

{
    "username": "ada",
    "email": "ada@gmail.com",
    "password": "abcd123"
}

2. For Login :- `http://localhost:3000/user/login` (POST)

{
    "email": "ada@gmail.com",
    "password": "abcd123"
}

2. For User Details :- `http://localhost:3000/user/user-detail` (GET)

header {
    "auth-token": "your_jwt_token"
}