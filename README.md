# _The Robotics Club Organizer_

#### _This app holds information on the members of a robotics club, Date: September 29, 2017_

#### By _**Kim Schulze**_

## Description

_The program keeps member data for students and mentors on robotics team.  The app lists all members and then allows a view to see details on that member.  Details include:  first name, last name, birthdate, status (mentor, student, alum), team role, email address, and cell phone number.  The app contains an about section and an admin view that allows for adding, updating, and deleting member records._

# RoboticsClubOrganizer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Installing Bootstrap4
* npm install bootstrap@4.0.0-alpha.6

* bower install bootstrap#v4.0.0-alpha.6

## Specifications
| Behavior | Input | Output | Reasoning |
| ---- | ---- | ---- | ---- |
| 1. Displays members in team view including full name, affiliation, team role, and picture. | Load page. | See thumbnails of each member. | Requires upload of team member JSON file. |
| 2. Displays member view. | Click on member. | View name, birthdate, affiliation, team role, email, cell phone, and picture. | Show that all information is correctly accessed and views can change. |
| 3. Displays About page. | Click on About. | Displays basics on team history and mission. | Show another view and allow user to view deeper history. |
| 4. Admin page allows adding a member. | Click on page and add student information. | Create entry in Firebase database and display on homepage. | Add information to database from application. |
| 5. Admin page allows updating a member. | Click on page and update student information. | Dynamically change information on page. Change information in database. | Allow app admin to update database entries. |
| 6. Admin page allows deleting a member. | Press delete button. | Delete member entry from webpage and database. | Completes basic CRUD functionality. |

## Known Bugs

_There are no known bugs._

## Support and contact details

_With questions contact Kim Schulze at kimberlykayschulze@gmail.com._

## Technologies Used

_Used Angular2 packages with Angular2 and Bootstrap4_

### License

*All Rights Reserved.  Version 1.0*

Copyright (c) 2017 **_Kim Schulze_**
