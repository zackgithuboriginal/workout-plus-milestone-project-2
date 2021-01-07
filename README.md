# Workout Plus - Milestone Project 2

![Image of Landing Page](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/multi-screen-display.PNG)

## Website Description
This website contains a web application that offers the ability to connect visitors and users with Gyms and Exercise Centres either nearby to their location or around a desired location. The web application uses a suite of Google APIs to provide a map display and make use of the Places database and autocomplete search feature to display the locations and retrieve their details and ensure a more accurate user-friendly search experience.

The Gym Search feature offers two search options to the user. The first allows them to select their desired country and then enter an address in the field that will autocomplete and offer suggestions and predictions. The second is to use the Device location search which uses the Geolocation Web API to read the device’s location and then initiates a map search on that location.

The purpose of the website is to connect visitors with potential exercise locations as easily and conveniently as possible within a space that could be expanded to provide a more comprehensive workout planner service in the future.
## User Experience / UX
### User stories

#### 1.	Discern the purpose and function of the website.

#### 2.	Navigate and explore website.

#### 3.	Find and understand how to use the map search.

#### 4.	Identify potential new workout locations in a specific area.

#### 5. Identify potential new workout locations around their location.

#### 6.	Select a location and access contact information for it.

#### 7.	Search through potential locations comparing ratings.

#### 8. Search a location that does not appear using the autocomplete results.

#### 9. Prioritise a search country to get more accurate results.

### Design

#### Design Overview
The main principle behind the design of the website was to create a space that was easy to navigate, that offered clear and easy to understand information and easy to use. The driving force behind the design was my desire to create a website that melded high energy colour and imagery with clear and legible information and an immediately understandable structure.

#### Colour Scheme
The colour scheme is quite simple, essentially consisting of only three colours. The primary colour, which is used frequently throughout the design is #F39237. This is a very strong and eye-catching colour that conveys the sense of energy and activity that I wanted to associate with the website. I believe that by using an energetic colour in this manner it will help to build the identity of the website as well as subconsciously create a link between the website and the energetic activities involved in exercising in the mind of any visitor to the site. The other two colours in use are #F9F9F9 and #1E3231, and they used for accent and contrasting purposes. #1E3231 is a shade of dark – grey navy and I find that it stands out quite well against both the white background of certain sections and the reduced opacity #F39237 which is used as a background colour in other sections. #1E3231 is therefore used as the primary font colour for most instances of text on the website as I believe it to be more comfortable and easy on the eyes than a typical black font colour. #F9F9F9 is an offwhite shade that is used as the text colour for navbar elements and any links or CTA buttons. Reserving this colour only for actionable elements helps a visitor to understand the navigation and structure of the site more quickly and easily as they can identify clickable links just through their colour.
![Image of the colour scheme](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/workout-plus-colour-scheme.png)


#### Typography
There are two fonts used on the website. The first, Montserrat is a very minimal and clean font and is used for the navigation options and important headings. The second font used is Raleway and is used for information paragraphs, I chose this font for this function because I consider it to be a very readable font and it allows for fast legibility and information digestion. I intentionally used two separate fonts for these functions to enable a user to discern the content and importance of text from a quick scan and allow a user to intuit and learn the structure of the website more easily than they would have been able to if the website used only one font type.

#### Imagery
There are not a lot of images used in the design of the website. The most notable example, however, is the background image of the landing page. This is an energetic image of a man in the process of working out. This image I believe is very effective at setting the tone and further reinforcing the theme and purpose of the website alongside the name and general branding. This image ties in with the theming of the design well, evoking high energy but by overlaying a low opacity screen on it does not overpower the page.

Additionally, whenever a user selects a gym on the map, an image of the gym is supplied in the additional information section. Using JavaScript I was able to access the photos attached to the location in the Google Places Library, and then loop through the images until one with a suitable landscape orientation was encountered. This image is then be displayed alongside the other location details and with the screening process, the layout and display of information would be consistent and clear while clicking between different locations. I believe that this was necessary to not only maintain the neat display of information but to provide a pleasurable experience to the user, as they clicked through different gyms to compare their details and appearance.

If a location did not have any images associated with it in the Google Places Library or that it did not have any available images in the correct orientation. A simple placeholder image is used. This image, created by me, contains the text “No Image Available” with a background colour of #F39237 to maintain the site’s consistent theme while also informing the user for the reason that no image is displayed as I believe that this provides a better user experience than just displaying a blank space.

### Wireframes

The wireframes for the website were developed using [Figma](https://www.figma.com/) 

 -   Landing Page Wireframe - [View](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/wireframes/landing-page-desktop-wireframe.png)

 -   Landing Page - Mobile Wireframe - [View](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/wireframes/landing-page-mobile-wireframe.png)

 -   Gym Finder Wireframe - [View](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/wireframes/gym-finder-desktop-wireframe.png)

 -   Gym Finder - Mobile Wireframe - [View](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/wireframes/gym-finder-mobile-wireframe.png)

## Features

### Landing Page

![Image of Landing Page](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/landing-page.jpg)
The landing page is the user's first introduction to the site and as such, it was important to not only provide information that will inform the user about the purpose and functionality of the website but to set the tone of the website and to start to instil the identity of the website onto the user. The landing page, therefore, contains three primary elements. A large eye-catching callout with a CTA button that links to the gym finder application. A text section containing information about the website and explaining some of how the gym finder application works and a large hero image in the background of a man in the middle of working out that helps to set the tone of the website and create a sense of energy and activity.

### Gym Finder Page

![Image of Gym Search Feature](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/gym-finder-application.png)
The most important feature of the site is the gym finder page. The gym finder application allows a user to search around a target location for gyms and other businesses related to exercise and fitness. It visually displays the results on a map that is powered by the Google Maps API, with the 20 nearest locations displayed with custom markers. These markers can be selected to bring up the name of the location on the map, and on the sidebar, to the left of the page, an information window will open with more extensive details including the address, location rating and website along with an image of the location.

### Autocomplete Search
![Image of an autocomplete search](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/autocomplete.PNG)

The autocomplete search utilises the Google Place Autocomplete API. It reads any string typed into the text input field and turns that into an autocomplete request. The results are limited to addresses to streamline the experience for the user rather than allow for businesses and other locations to fill up the prediction options. Using the country selection dropdown input which contains a full list of countries a user can select a specific country in which they want to search. After selecting a country the only predictions suggested to users will be located within that country. This allows for much more accurate autocomplete suggestions, and again improves the user experience of the feature.

### Geocode Search
![Image of an autocomplete search](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/geocode.PNG)

The geocode search uses a Google Geocode API request. If a user decides to hit enter or to click the button to submit their text input, the string will be sent in a Geocoder request and be returned as lat, lng coordinates that are then used to centre the map on the location where the gym search will be carried out. As with the autocomplete search it is possible to specify a country to search in, however in the case of the geocoder search it only biases the result and if no location within the specified country is found it will default to a global search. Using a country-specific search increases the accuracy of the search.

### Device Geolocation Search
![Image of an autocomplete search](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/geolocation.PNG)

The geolocation search uses the Web Geolocation API to first request from the user permission to use their location and if the user approves it will use their device's functionality to provide a location for them. The result of this search again contains the lat, lng coordinates which are used to centre the map with great accuracy. This method of searching is the most convenient for searching in the immediate local area of the user as it's not necessary to know any addresses to search.

### Map Results Display 
![Image of an autocomplete search](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/map-results.PNG)

The results of the search are displayed as so, with orange markers on the map. Each of these markers represent a gym or similar location around the radius of the search location. To provide a good selection of results without overloading the map, only the closest 20 locations are displayed. If a user selects one of these markers a small window will pop up above the marker with the location's name. As well as that a side panel below the search input section will open and display further details about the location.

### Side Panel Results Display 
![Image of an autocomplete search](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/example-gym-result.PNG)

After a marker is selected on the map a display opens beneath the search options. This panel will display important information about the location selected to help the user make their decision to enable them to conduct further research and more effectively compare their options. As is visible above, to provide accurate information and consistent feedback to the user, if a location does not have value for a certain property in the Google Place database a predetermined placeholder response will display. In the case above the location had no affiliated website, so the gym finder application notifies the user as such instead of leaving the space blank or allowing the previous location's information to persist and cause confusion.

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
  
11. [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
 - DevTools was used for analysing the code and design of the practice during development. Also used to test changes in real-time.
 
12. [Google Cloud Platform](https://cloud.google.com/maps-platform)
- The Google Cloud Platform was used to manage the Google APIs used in the project. It is also where I styled the Map used in the project.
 
13. [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
- The Google Maps API is used to support and display the map in the gym finder application.

14. [Google Places API](https://developers.google.com/places/web-service/overview)
- The Google Places API is used to search for locations in the Places library and also to access information and details about the locations.

15. [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
- The geocoding API is used to convert an address string into a lat lng attribute that can then be used in a search.

16. [Google Autocomplete API](https://developers.google.com/places/web-service/autocomplete)
- This API is used to supply autocomplete suggestions for the address search input.

17. [Geolocation Web API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- This API was used to request the user's permission to use their device's location in a search.

18. [Papa Parse](https://www.papaparse.com)
- Papa Parse was used to parse the CSV file containing the full list of countries and their two-character country codes.

19. [gtMatrix](https://gtmetrix.com/)
- GTmatrix was used to test website performance and page load speed.

20. [Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php)
- This website was used to generate the image at the top of the readme.md file.

### Testing

### Browser and Device Size Testing
I tested the website thoroughly, throughout development I would ensure that it looked and behaved as designed and laid out in the wireframes. The website was tested at multiple scales, through desktop and mobile devices with no bugs or issues remaining in the deployed version.
The website was viewed and tested through the following browsers and devices:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/)

- [Google Chrome](https://www.google.com/intl/en_ie/chrome/)

- [Microsoft Edge](https://www.microsoft.com/en-us/edge)

- [Opera](https://www.opera.com/)

- A full range of sizes and devices using Chrome DevTools, [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) and [Am I Responsive?](http://ami.responsivedesign.is/)

### Code Validation

At the end of the project, the code was put through CSS and HTML validators to ensure there were no errors presented.

### index.html html validation          [W3C HTML Validator](https://validator.w3.org/nu/)
![Image of HTML validator for landing page](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/html-validator-index.PNG)

### gym-finder.html html validation     [W3C HTML Validator](https://validator.w3.org/nu/)
![Image of HTML validator for gym finder](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/html-validator-gym-finder.png)

### style.css css validation            [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
![Image of css validator](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/css-validator.PNG)

### gym-finder.js js validation         [JSHint](https://jshint.com/)
![Image of Js linter results](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/js-validator.PNG)

### Performance Testing 

To ensure that the website performed well without any major delays or issues especially on the initial load I tested it using [GTMatrix](https://gtmetrix.com) where both pages received positive results.

#### Landing Page 
![Image of index.html speed test](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/index-speed.PNG)

#### Gym Finder Page
![Image of gym-finder.html speed test](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/gym-finder-speed.PNG)


### Testing User Stories from User Experience (UX) Section

#### 1.	Goal: Discern the purpose and function of the website.

**Expected:** When the user accesses the website for the first time they should be presented with information about the website and the web application.

**Result:** When the user arrives at the landing page they are presented with a text paragraph giving an overview of the purpose for the website and the functionality of the web application.

![Image of landing page information](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/landing-info.PNG)

#### 2.	Goal: Navigate and explore the website.

**Expected:** Wherever the user is on the website they should be able to immediately identify and locate the navigation structure for the website.

**Result:** At all times the navigation bar is fixed at the top of the screen providing clear navigation opportunities to the user.

![Image of the navbar](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/navbar.PNG)

#### 3.	Goal: Find and understand how to use the gym search application.

**Expected:** Upon loading landing page, the user should be presented with clear navigation options to the gym search application. When they navigate to the gym finder application they should find it easy to understand and use.

**Result:** When the landing page is accessed, there is a clear navigation option “Gym Search” at the top of the page. There is also a large CTA button in the page heading. Both of these options will navigate the user directly to the gym search page. On the gym search page the user is presented with several clear input options with labels and example search options of “Ireland” and “Dublin” as placeholders. The map by default is centred on this location to provide the user with an example search result.

![Image of the search options](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/search-interface.PNG)

#### 4.	Goal: Identify potential new workout locations in a specific area.

**Expected:** The user should be able to enter their desired address or area and submit. They should then be presented with a selection of potential locations around that area.

**Result:** The user can enter their desired address, they will then be presented with autocomplete options. When the user selects an option the map will navigate to that spot and display markers on the map representing identified locations. 

![Image of the map results](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/map-results.PNG)

#### 5.	Goal: Identify potential new workout locations around their location.

**Expected:**  The user should be able to use their device's location to search the map quickly and conveniently.

**Result:** The user can click the "Use device's location" button which will then send a request to the user to allow permission to use their device's location. When they accept, the map will navigate to their device's location and display results.

![Image of the geolocation request](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/geolocation.PNG)

#### 6.	Select a location and access contact information for it.

**Expected:** The user should be able to submit a search and then click on any of the displayed locations to access information for them. 

**Result:** After submitting the desired search location the user is presented with 20 potential locations marked on the map. When the user clicks on any of the markers the application will display a window containing important information regarding the location.

![Image of location details](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/example-gym-result.PNG)

#### 7.	Goal: Search through potential locations comparing ratings.

**Expected:** The user should be able to click on multiple markers to compare rating information for them.

**Result:** The user can click on a marker which will then display the information for that gym. They can then either close their selection using the "x" and click a new marker or they can simply click on a new marker to overwrite the existing information to view the new results.

**Issue:** Some locations do not have rating information available through the Google Places Library which results in the previous location’s rating persisting incorrectly.

**Fix:** Upon clicking on a new location, a check is done to determine whether the location has a rating attribute. If it does not have a rating available the website now provides a “No available rating” message to ensure accurate feedback for the user.

![Image of the alternate rating response](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/rating.PNG)

#### 8. Search a location that does not appear using the autocomplete results.

**Expected:** The user should be able to search for more general areas such as "London" or "East London" and not have to find the exact address to search.

**Result:** The user can enter their desired location and hit submit. The application will use a geocoder search to convert their address to coordinates and navigate the map to that location.

![Image of the geolocation request](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/geocode.PNG)

#### 9. Prioritise a search country to get more accurate results.

**Expected:** The user should be able to narrow down the search area to a country to guarantee a more accurate result.

**Result:** The user can select any country from the dropdown list. Both the autocomplete search and the address search will then restrict the results to locations within the chosen country when possible.

![Image of the dropdown country selection](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/country-search.PNG)

### Manual Functionality Testing

Page | Action | Expected Result | Result
------------ | ------------- | ------------- | -------------
index.html | Click on navbar branding | Page reloads | Pass
index.html | Click on CTA button | Browser navigates to gym-finder.html | Pass
gym-finder.html | Refresh Page | Page reloads and map resets | Pass
gym-finder.html | Click the "Use device's location" button | Browser prompts the user to allow location permission | Pass
gym-finder.html | Allow location permission | Map navigates to tester's location, displays nearby locations | Pass
gym-finder.html | Click the submit button without entering text into input field | Box will outline in red and tester will be informed it is a required field | Pass
gym-finder.html | Click the dropdown country selection element | Dropdown box of country options will appear | Pass
gym-finder.html | Select one of the orange markers on the map | Name of location will appear above marker and information panel will open below search options | Pass
gym-finder.html | Click the "x" button in the gym information panel | Information panel will disappear | Pass
gym-finder.html | Submit a search nearby to the default location, ie "Howth" and zoom out | The map should navigate to Howth and when zoomed out it should be clear that the original markers have been replaced by the new ones | Pass
gym-finder.html | Select one map marker and then select another one | The information panel for the original gym should open and then all of the information should be replaced by the details of the second | Pass
gym-finder.html | Enter "Toledo" into the input field, select Spain as the search country and submit | The map will navigate to Toledo, Spain | Pass
gym-finder.html | Enter "Toledo" into the input field without selecting a search country and submit | The map will navigate to a Toledo not in Spain | Pass
gym-finder.html | Select a map marker and then click on the website URL | The browser should open another tab to display the website | Pass


## Deployment

### To Publish to GitHub Pages 

1. Go into the settings of the GitHub repository where the project is hosted.


![Image of the settings tab of a GitHub repository](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/settings.PNG)

2. Inside the settings scroll down to GitHub Pages section, set the branch to master.

![Image of the branch setting](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/branch.PNG)

3. Then set the directory to root and click the save button. 

![Image of the root setting and save button](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/root.PNG)

3. After filling out these two options and selecting the "Save" button and you will be presented with a URL on which the project is now hosted.

![Image of the published URL](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/published.PNG)

### To Clone the Repository and Run Locally

#### To Clone Using the Command Line

1. Navigate to the home page of the repository.

2. To the top right of the repository file directory click the "Code" button.

![Image of the clone repository tab](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/clone.PNG)

3. Make sure that the HTTPS tab is open and click the copy to clipboard button.

![Image of the option to copy HTTPS link](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/https-clone.PNG)

4. Navigate to your IDE and open the directory to which you want to clone the repository

5. Open the terminal and type "git clone" followed by the contents of the clipboard which will be "https://github.com/zackgithuboriginal/workout-plus-milestone-project-2.git" click enter and the repository will then clone to that directory.

![Image of the command line command](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/command-line.PNG)

#### To Clone Using GitHub Desktop

1. Navigate to the home page of the repository.

2. To the top right of the repository file directory click the "Code" button.

![Image of the clone repository tab](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/clone.PNG)

3. Halfway down the tab click the "Open with GitHub Desktop" option.

![Image of the open GitHub desktop button](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/desktop-clone.PNG)

4. If the GitHub Desktop application is installed and open it will be presented with this prompt.

![Image of the GitHub desktop prompt](https://github.com/zackgithuboriginal/workout-plus-milestone-project-2/blob/master/assets/images/desktop-url.PNG)

5. Enter the desired location to clone the repository to and click the clone button. 

6. The repository will then be cloned to that location.

## Credits

### Resources Used 

- [Google Codelabs Tutorial](https://developers.google.com/codelabs/maps-platform/google-maps-nearby-search-js#0) Was used to learn how the basic gym finder functionality could work using Google Maps API and Google Places API.

- [Harvard World Map](https://worldmap.harvard.edu/data/geonode:country_centroids_az8) is the source of the original CSV file I edited to use for the country restrictions feature of the gym finder.

### Code

-   [Bootstrap](https://getbootstrap.com/) library ver. 4.1.3 is used throughout the project to make the site responsive and provide the base components/ structure.

### Content

-   All of the text content on the site was produced by myself.

### Media

-   All icons were sourced and imported from [FontAwesome](https://fontawesome.com/)
-   [Map marker](https://fontawesome.com/icons/map-marker-alt?style=solid) was downloaded from FontAwesome and used as an SVG.

#### Original creators and links to images

- Karsten Winegeart is the original creator of [this](https://unsplash.com/photos/0Wra5YYVQJE) image used as the background of the landing page.

- All images of businesses and locations supplied by the Google Places library are owned by their respective creators.

### Acknowledgements

- My mentor Oluwafemi for his guidance and advice throughout the project.
