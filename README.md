# Arzttermine - Amirault

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7. For information on how to run a Angular CLI project, please see the includedREADME.md file.

This project is an Idea project (i.e. built with IntelliJ). Besides the .angular-cli-json file where I made a minor change to relocate the provided index.html file, I have not touched any of the files not in the app and data folders. All of those are generated files provided by IntelliJ.

## Roadmap

The main location to find the main pieces is under src->app. There I broke things down into several different folders:
* components: contains all the components I built for this project
* config: contains the configuration pieces to make the site work
* models: contains the objects the data is stored with
* services: contains the one service to return the doctors from a .ts file
* styles: contains all the stylesheets
* views: contains all the html pages

Here is the structure of the site (i.e. which HTML references another):
* index.html
    * app.component.html
        * doctor-detail.component.html
            * calendar.component.html

###Things left to do:
* Extract the search box into its own Component
    * Populate drop-downs dynamically from the backend
* Extract the map into its own Component
    * Update map with real data
    * Resize map to display better
* Update doctor service to use JSON file instead of mock file
    * **Note**: I'm hoping this will be an easy switch, but my initial attempt failed and I didn't want to mess with what was working so I de-prioritized this in order to work on the UI.  
* Add JSON call to search button to get JSON data
* Add metadata for SEO optimization

###Extras:
* Make site more responsive for all screens (currently looks best with large screen)
* Add better styling all around to site
* Update the appointments calendar
    * Create functionality for "See more >>"
    * Add a "more" feature for days with too many appointments
* Update map to be dynamic instead of static
* Hide search box when not in use
* Add tests
    * Learn how to write Angular/Node/TypeScript/? tests

