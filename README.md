Identified Problems and Impacts

1. Critical Security Gap: No Login Verification
I noticed that when I try to log in, the app doesn't actually verify my phone number or email with an OTP or any kind of handshake. This is a huge red flag because anyone who knows a user's number could potentially get into their account. For a travel app that handles personal IDs and booking histories, this lack of a security layer really hurts user trust. I’d fix this by implementing a server-side OTP system to make sure the person logging in is actually the owner of the account.

2. Broken Booking Logic: Invalid Date Selection
While testing the search flow, I found that I could actually set a check-out date that was earlier than my check-in date. The UI doesn't stop you from doing this, which would obviously cause a major crash or error once you get to the payment page. It’s a bad experience for a traveler to fill out all their info only to have the booking fail because of a simple date logic error. I’ve written a script that forces the check-out calendar to stay at least one day ahead of the check-in date.

3. UX Friction: Dead-end Search Results
Right now, if you search for a city where the app doesn't have hostels yet, it just shows an empty screen. That’s usually when a user uninstalls and goes to a competitor. Instead of just showing nothing, I propose adding a "Request this City" button. This keeps the user engaged and actually gives the company a list of the most requested cities to expand into next. It turns a missing feature into a data-gathering tool for growth.

4. Accessibility Issue: Poor Text Contrast
I also noticed the date and location text in the search bars is a very light grey on a light background. If someone is using this app outside in the sun—which travelers often do—it’s almost impossible to read. I’ve updated the CSS to use much higher contrast colors and made the buttons easier to tap on a mobile screen to meet standard accessibility guidelines.

Summary of My Solution
By fixing these specific leaks in the app, we can make the platform much more secure and user-friendly. My approach focuses on solving the bugs that actually matter for the business, like stopping invalid bookings and capturing data from missed searches to help the brand scale faster.
