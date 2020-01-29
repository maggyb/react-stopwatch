# A stopwatch app

A stopwatch built with create-react-app

## Running

Clone and run the repository

`cd stopwatch && npm install && npm run start`

## Observations

- I used create-react-app to get a react app up and running quickly, I chose react because this is the framework I am most interested in at the moment, I am learning it outside of work.

- My approach was to start looking at the stopwatch as something that could be split into components, and what that UI will contain.

- This was quite a challenge, I had to do some research on better state handling, using localStorage as well as how to manage a time object.

- Stylistically, I attempted to go for a minimalist approach, I would have liked to include more icons to replace the text Start/Stop/Reset/Lap but couldn't find appropriate icons and didn't want to spend too long on design. The design is very flat and could benefit from some animations and stylised buttons. I chose a mono font as I found with the timer the numbers were constantly being misplaced as it was running due to the different sizes of each character

- From a styling point of view, if I had more time I would have use styled components. Due to the size of the project, I don't feel too awful for using plain CSS but for maintainability using a compiler/styled-components would be the next steps here

- I think this project would really benefit with some unit testing - I would use Jest and would also be keen to test with Puppeteer
