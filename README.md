# Konnect Digital Challenge
## Smitten date functionality
The functionality I am working on is centered around the date creation feature of smitten where matched users can create an idea for a date using day/time, theme and location options, then send it to their match that can accept/reject the date idea.

## Tech
React, react-google-maps/api, HTML/SCSS/JS

## Functionality
day/time, theme and location selection with dynamic update on details
Google maps API for location selection that auto searches based on theme selected, displays a marker for each user
Will need global context/state so the location selection component has access to selected theme

## Pages
1) Match/Begin
2) Day/time
3) Theme
4) Location (GoogleMapsApi)
5) Finalise

## Routes
All sequential until Finalise where you can go back to 2, 3 or 4. Consider a "back to finalise" reroute when new selection is made. Can return to previous page using the back button at top left.

## Remaining functionality to implement
1) Google Maps user markers, POI markers based on chosen theme
2) Location page details slide box section and search box section
3) Last bit of CSS to enable slow transitions between pages, allow for relative positioning when details section gets updated (Currently clipping the text beneath), location sections styling, and final styling for edit/slide to send buttons.