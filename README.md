# Quizology

## LIVE: [LINK](https://quizology.netlify.app/)
Notes: 
- UI is in Polish
- if You will register, check spam folder for the email with authentication link.

# About
Quizology is a quiz app, initialy created as my final project during CoderLab's Javascript Developer Bootcamp. This is the improved version in terms of used technologies and scaling possibilities (that's why I called it 2.0).

# Functionalities
## Unauthenticated user
Unauthenticated user is able to play every publicly visible quiz.
## Authentication
Authentication is provided throught firebase:
register using email and password -> click the link sent to Your email (check spam folder) -> login using Your credentials -> on first login set your username
## Authenticated user
Authenticated user is able to create, edit and delete his own quizzes. Quiz with at least 5 questions can be set as visible for other users.

# Used technologies:
- Typescript
- React
- Redux
- SCSS
- Firebase

# To do list:
- statistics
- possibility to suggest question for another player's quiz
