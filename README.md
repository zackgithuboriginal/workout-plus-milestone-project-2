#Workout Plus - Milestone Project 2

![Image of Landing Page](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/multi-screen-display.PNG)

## Website Description
This website contains a web application that offers the ability to connect visitors and users with Gyms and Exercise Centres either nearby to their location or around a desired location. The web application uses a suite of Google APIs to provide a map display and make use of the Places database and autocomplete search feature to display the locations and retrieve their details and ensure a more accurate user friendly search experience.
The Gym Search feature offers two search options to the user, the first to select their desired country and then enter an address in the field that will autocomplete and offer suggestions and predictions and the second is to use the Device location search which uses the HTML geolocation API to read the device’s location and then initiates a map search on that location.
The purpose of the website is to connect visitors with potential exercise locations as easily and conveniently as possible within a space that could be expanded to provide a more comprehensive workout planner service in the future.
## User Experience / UX
### User stories

#### Initial Visitor Goals
1.	Discern the purpose and function of the website.

2.	Navigate and explore website.

3.	Find and understand how to use the map search.
#### Return Visitor Goals
1.	Use the gym search functionality to search through potential locations comparing ratings.

2.	Use the gym search functionality to explore a new location and access contact information for it.

3.	Use the gym search a specific address to identify potential new workout locations.

### Design

#### Design Overview
The main principles behind the design of the website was to create a space that was easy to navigate, that offered clear and easy to understand information and easy to use. The driving force behind the design was my desire to create a website that melded high energy colour and imagery with clear and legible information and an immediately understandable structure.
#### Colour Scheme
The colour scheme is quite simple, essentially consisting of only three colours. The primary colour, which is used frequently throughout the design is #f!!F!. This is a very strong and eye-catching colour that conveys the sense of energy and activity that I wanted to associate with the website. I believe that by using an energetic colour in this manner it will help to build the identity of the website as well as subconsciously create a link between the website and the energetic activities involved in exercising in the mind of any visitor to the site. The other two colours in use are #fasfASF and #FEFW, and they used for accent and contrasting purposes. #ASFAF is a shade of dark – grey navy and I find that it stands out quite well against both the white background of certain sections and the reduced opacity #FAFAF which is used as a background colour in other sections. #ASFAF is therefore used as the primary font colour for most instances of text on the website as I believe it to be more comfortable and easy on the eyes than a typical black font colour. #FEFW is an offwhite shade that is used as a text colour for navbar elements and any links or CTA buttons. Reserving this colour only for actionable elements helps a visitor to understand the navigation and structure of the site more quickly and easily as they can identify clickable links just through their colour.
![Image of the colour scheme](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/workout-plus-colour-scheme.png)


#### Typography
There are two fonts used in the website. The first, Montserrat is a very minimal and clean font and is used for the navigation options and important headings. The second font used is Raleway and is used for information paragraphs, I chose this font for this function because I consider it to be a very readable font and it allows for fast legibility and information digestion. I intentionally used two separate fonts for these functions in order to enable a user to discern the content and importance of text from a quick scan and allow a user to intuit and learn the structure of the website more easily than they would have been able to if the website used only one font type.
#### Imagery
There are not a lot of images used in the design of the website. The most notable example, however, is the background image of the landing page. This is an energetic image of a man in the process of working out. This image I believe is very effective at setting the tone and further reinforcing the theme and purpose of the website alongside the name and general branding. This image ties in with the theming of the design well, evoking high energy but by overlaying a low opacity screen on it does not overpower the page.
Additionally, whenever a user selects a gym on the map, an image of the gym is supplied in the additional information section. Using JavaScript I was able to access the photos attached to the location in the Google Places Library, and then loop through the images until one with a suitable landscape orientation was encountered. This image is then be displayed alongside the other location details and with the screening process, the layout and display of information would be consistent and clear while clicking between different locations. I believe that this was necessary to not only maintain the neat display of information but to provide a pleasurable experience to the user, as they clicked through different gyms to compare their details and appearance.
In the event that a location did not have any images associated with it in the Google Places Library or that it did not have any available images in the correct orientation. A simple placeholder image is used. This image, created by me, contains the text “No Image Available” with a background colour of #FAFAFAFAFAAF to maintain the site’s consistent theme while also informing the user for the reason that no image is displayed as I believe that this provides a better user experience than just displaying a blank space.

### Wireframes

The wireframes for the website were developed using [Figma](https://www.figma.com/) 

 -   Landing Page Wireframe - [View]()

-   Landing Page - Mobile Wireframe - [View]()

 -   Gym Finder Wireframe - [View]()

 -   Gym Finder - Mobile Wireframe - [View]()

## Features

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/Javascript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.1.3:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
  - Bootstrap was used to create the initial base template of the design that was then built on top of and customised further using CSS.
  
2. [Google Fonts:](https://fonts.google.com/)
  - Google fonts was used to import the fonts that were used as the primary typography on the website.
  
3. [Font Awesome:](https://fontawesome.com/)
  - Font Awesome's icon library was used to reinforce sections and information points throughout the website.
  
4. [jQuery:](https://jquery.com/)
  - Bootstrap's jQuery library is in use on the website to increase the functionality of some Bootstrap components.
  
5. [Git](https://git-scm.com/)
  - Git was used as the primary version control software for the project. It was operated using the Gitpod terminal.
  
6. [GitHub:](https://github.com/)
  - GitHub is where the project is stored. It was also used to view version control changes.
  
7. [Gitpod](https://gitpod.io/)
  - Gitpod was the IDE used to program the website.
  
8. [Coolors](https://coolors.co/)
  - Coolors was used to generate colours for a scheme that was harmonious and evoked the desired aesthetic.
  
9. [Figma](https://www.figma.com/)
  - Figma was used to generate the initial wireframes and mockups that were used to inform the programming of the website.

10. [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en)
  - This chrome web extension was used as it allows for multiple views of a website at multiple scales and device sizes at once. It was used for testing of responsive design.
  
12. [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
 - DevTools was used for analysing the code and design of the practice during development. Also used to test changes in real-time.
 
13.[Google Maps API]

14.[Google Places API]

15.[Google Geocoding API]

16.[Papa Parse]
- Papa Parse was used to parse the CSV file containing the full list of countries and their ISF country codes

17.[gtMatrix] https://gtmetrix.com/reports/zackgithuboriginal.github.io/serEj5nd/
 ### Testing

I tested the website thoroughly, throughout development I would ensure that it looked and behaved as designed and laid out in the wireframes. The website was tested at multiple scales, through desktop and mobile devices with no bugs or issues remaining in the deployed version.
The website was viewed and tested through the following browsers and devices:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/)

- [Google Chrome](https://www.google.com/intl/en_ie/chrome/)

- [Microsoft Edge](https://www.microsoft.com/en-us/edge)

- [Opera](https://www.opera.com/)

- A full range of sizes and devices using Chrome DevTools and [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en)

At the end of the project, the code was put through CSS and HTML validators to ensure there were no errors presented.
-   [Markup Validator](https://validator.w3.org/nu/) - [HTML Testing Results]()
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [CSS Testing Results]()

### Testing User Stories from User Experience (UX) Section

- ### First Time Visitor Goals

- ### Potential customer goals

- ### Existing Customer goals

#### Initial Visitor Goals
4.	Goal: Discern the purpose and function of the website.

Expected behaviour: When the user accesses the website for the first time they will be presented with information about the website and the web application.

Result: When the landing page loads the user is presented with a text paragraph giving an overview of the purpose for the website and the functionality of the web application.

5.	Goal: Navigate and explore website.

Expected behaviour: Wherever the user is on the website they should be able to immediately identify and locate the navigation structure for the website.

Result: At all times the navigation bar is fixed at the top of the screen providing clear navigation opportunities to the user.

6.	Goal: Find and understand how to use the gym search application.

Expected Behaviour: 
1.	Upon loading landing page, user is presented with clear navigation options to gym search application.
2.	Upon using navigation, user is presented with gym search application and can easily understand its use.
Result: 
1.	When landing page is accessed, there is a clear navigation option “Gym Search” at the top of the page, and a large CTA button in the page heading both of which will navigate the user directly to the gym search page.
2.	When the Gym Search Page is loaded, the user is presented with a number of input options with clear labels and the example search options of “Ireland” and “Dublin”. The map by default is centred on this location to provide the user with an example search result.
#### Return Visitor Goals
1.	Goal: Search a specific address to identify potential new workout locations.

Expected Behaviour: Navigate to Gym Search application, select country to restrict search in, enter desired address of placename and submit. Then be presented with a selection of locations around that area.

Result:

2.	Goal: to search through potential locations comparing ratings.

Expected Behaviour: The user should be able to search for gyms around a location and then click on a marker on the map to view rating information for that gym.

Result: Upon entering their search details in the input field and submitting, a selection of the nearest twenty gyms are presented on the map. The user can then click on any of these markers for a information pane to appear displaying rating information for that gym.

Issue: Some locations do not have rating information available through the Google Places Library which results in the previous location’s rating persisting incorrectly.

Fix: Upon clicking on a new location, a check is done to determine whether the location has a rating attribute. If it does not have a rating available the website now provides a “No available rating” message to ensure accurate feedback for the user.

3.	Goal: Use the gym search application to search explore a new location and access contact information for it.

Expected Behaviour: 

Result:

## Deployment
The project is deployed and live using GitHub pages. This is a very useful tool and it is was setup very simply.
1. Go into the repository where the project is saved and then go to the settings menu by clicking the gear icon inside the repository. 
2. From inside the settings menu navigated to the GitHub Pages section where you will be presented with the option to choose the Branch and Root folder of the repository from which you wish to source the project from. 
3. After filling out these two options select the "Save" button and you will be presented with a URL on which the project is now hosted. 

## Credits

### Code

-   [Bootstrap](https://getbootstrap.com/) library ver. 4.1.3 is used throughout the project to make the site responsive and provide the base components/ structure.

### Content

-   All of the text content on the site was produced by myself.

### Media

-   All icons were sourced and imported from [FontAwesome](https://fontawesome.com/)

#### Original creators and links to images

### Acknowledgements

- My mentor Oluwafemi for his guidance and advice throughout the project.
