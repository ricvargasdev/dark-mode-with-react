Inspera test instructions
====================================

## Setup

* `yarn install`

* `yarn start`

* open in browser: `http://localhost:8080/`

* run tests: `yarn test`

## Tasks

### 1 Change the header and add "Dark mode"
Look at the video added in the docs folder (_docs/responsive-header-with-dark-mode.mov_). Change the CSS and/or HTML 
of the Header component to make it responsive and have a dark mode, similarly to what is shown in the screen recording.
>> DONE!

### 2 Update the timer
The user interface now gets updated with the time every 10 seconds. The time is requested from a
server as the user can get extra time and also needs to be synchronized with the server time. 
Change the user interface logic so that the timer displayed to the user counts every second, while still
requesting/synchronizing with the server every 10 seconds. Calling the api every second should _not be done_
as this will increase the load on the server.
Write some unit tests for this change.
>> DONE!  NOTE: The sync API will be called only when the current second count is a multiple of 10 (divisible by 10), otherwise the seconds are substracted on the Frontent as requested.


### Notes

Here are some of the things that I did for the app to run:

1. Added "NODE_OPTIONS=--openssl-legacy-provider" in the "start" script to overcome the "error:0308010C:digital envelope routines::unsupported" issue in Dev.

2. "sass-loader" updated to "13.2.0".

3. Added "moduleNameMapper" in the package.json file to avoid Jest testing issues.

4. For the sake of time I didn't implement the tests for enabling/disabling Dark mode in Jest but I wrote the explaination of why and how to implement those tests in the file App.spec.js

---

Because I'm aware that web accessibility is important, I added:

1. tabIndex on the text input, checkboxes and button.

2. aria-label's on the text input, checkboxes and button.
