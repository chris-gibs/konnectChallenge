# Smitten
A dating app focused around date creation/approval where matched users can create an idea for a date using day/time, theme and location options, then send it to their match that can accept/reject the date idea.

## Tech
React, react-google-maps/api

## User Stories
When I match with another user, I want to create a date idea to send them, choosing the day/time, theme and location, so I can take them out on a date.

When I pick a selection I want to be taken straight to the next set of options quickly so that I can be the first to suggest a date idea.

When I am looking for a location, I want the app to handle searching for all the potential spots near me and my potential date based on the theme chosen to save time, while also giving me an option to look myself.

## Functionality
day/time, theme and location selection
Google maps API for location selection that auto searches based on theme selected
Will need global context/state so the location selection component has access to selected theme
Video content at least for user avatars, possibly for Theme button backgrounds

## Pages
1) Match/Begin
2) Day/time
3) Theme
4) Location (GoogleMapsApi)
5) Finalise

## Routes
All sequential until Finalise where you can go back to 2, 3 or 4. Consider a "back to finalise" reroute when new selection is made. Can return to previous page using the back button at top left.