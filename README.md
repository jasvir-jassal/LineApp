# LineApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Project

This project implements, in a web page, a `light-switch` that allows you to change the theme of the page to Dark Mode.  

First of all I created an angular project, using the command `ng new`, in this way I installed all the modules needed to work on the angular project.   
Then I installed the modules for [Bootstrap](https://getbootstrap.com/) and [FontAwesome](https://fontawesome.com/) using the command `npm install` on the terminal.  
In particular I used [Bootstrap](https://getbootstrap.com/) to structure in a neat way my Web page (grid system) and also for its components such as modal or jumbotron class that would be a kind of box around my light-switch, 
just to beautify the page, instead as regards [FontAwesome](https://fontawesome.com/) I used it for the icon, with the symbol of the moon.  

Proceeding with the work, I immediately started to create my components using a "shortcut" `ng g c`.  
The components I created are the following:
- `light-switch`
- `stats`  

The first component I created was the `light-switch` component.  
This component allows you to deactivate/activate the Dark Mode, through a toggle made with `CSS`.  
Inside the light-switch component in the html page we find, as said before, the [Bootstrap](https://getbootstrap.com/) component jumbotron which in turn inside we can find the moon icon and the toggle.   
In the `Typescript` part I created first a function that changes the value of my boolean variable, every time I click the toggle (the boolean variable, called `darkModeEnabled` is initialized to `true`).   
Then I created a variable for the count, that increments every time the toggle is clicked.  
As a last thing I created an array list named `stats` that we will use later in order to show the stats in the modal.    

The second component I created was the `stats` component.  
This component allows you to record and display the following variables:
- `Count`
- `Last Status`
- `TimeStamp`  

To show the data I created a button underneath the jumbotron.  
Clicking on the button opens a modal.  
In this modal, it's displayed the count, the last status and the timestamp, plus the list of arrays in `JSON`.  
Another important thing I did was to create a new class `stat.ts`, inside a new folder called models.  
The `stat` class represents the `count`, the `status` and the `timestamp` variables.  
After, we build a list of arrays of stats that we will show later in the modal.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
