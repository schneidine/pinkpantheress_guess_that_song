# Web Development Project 2 - *Guess The PinkPantheress Song*

Submitted by: **Schneidine Dorelien**

This web app: **Allows users to test their knowledge of PinkPantheress lyrics through an interactive guessing game with smooth animations and integrated Spotify previews!**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X] Title of card set is displayed 
  - [X] A short description of the card set is displayed 
  - [X] A list of card pairs is created
  - [X] The total number of cards in the set is displayed 
  - [X] Card set is represented as a dictionary mapping lyrics to Spotify embed URLs
- [X] **A single card at a time is displayed**
  - [X] Only one half of the information pair is displayed at a time
- [X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X] Clicking on "Reveal Answer" flips the card over, showing the Spotify embed
  - [X] Clicking on "Show Lyrics" flips it back, showing the original lyrics
- [X] **Navigation between cards works properly**
  - [X] Next/Previous buttons allow navigation through all cards
  - [X] Navigation is bounded (can't go below 0 or above total card count)

## Optional Features

The following **optional** features are implemented:

- [X] **Cards contain interactive media in addition to text**
  - [X] Cards display Spotify embeds that allow users to listen to song previews
- [X] **Cards have sophisticated visual styling**
  - [X] Beautiful pink wallpaper background with glassmorphism effects
  - [X] Smooth animations for card transitions and answer reveals

## Additional Features

The following **additional** features are implemented:

* [X] **Smooth Animations**: Shake animation when revealing answers, swipe animations when changing cards
* [X] **Spotify Integration**: Full Spotify embeds replace traditional text answers for an immersive experience
* [X] **Glassmorphism Design**: Modern UI with backdrop filters, semi-transparent elements, and soft shadows
* [X] **Responsive Styling**: Cards adapt beautifully between lyrics and Spotify embed states
* [X] **Boundary Handling**: Previous/Next buttons are disabled at endpoints with visual feedback
* [X] **Enhanced Typography**: White text with soft red drop shadows for optimal readability
* [X] **Dictionary Data Structure**: Clean mapping of lyrics to Spotify URLs for better maintainability

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/dtDbBZF' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with imgur and ezgif.com

## Notes

Challenges encountered during development:
- Implementing proper JSX syntax for Spotify iframes (converting HTML attributes to React props)
- Creating smooth animations that don't interfere with state management
- Designing a cohesive visual theme that works with both text and embedded media
- Handling background image scaling to fit different screen sizes properly

## License

    Copyright [2026] [Schneidine Dorelien]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
