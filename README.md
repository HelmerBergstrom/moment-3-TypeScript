# Moment 3 TypeScript

Detta projekt skapades med [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10. Mer information om hur man arbetar med Angular finns längre ned på sidan!

## Uppgiften

Denna uppgift handlade om att lära känna Angular och de funktioner som kommer med det. I uppgiften skapades en hemsida med en huvudmeny och tre undersidor. En startsida, en sida för konvertering av värden och en sida som beskriver uppgiften och de slutsatser
jag har efter att ha löst uppgiften

Konverteringen sker av längd(meter och feet) och temperatur(celsius och fahrenheit). Dessa konverteringar skapades med TypeScript och
HTML, med Angulars inbyggda verktyg. 

Startsidan består av information i ren text om vad hemsidan har för syfte och även en bild som även den har lagts till med både TypeScript och HTML.

Komponenter har använts för de olika sidorna och för att separera koden för lättare hantering. Komponenter har skapats för alla sidor/undersidor, men även för huvudmenyn, footern och undermenyn på konverteringssidan. Länkarna mellan alla sidor har skapats med routes istället för vanliga länkar, för att ge en app-liknande känsla till webbplatsen. 

Med routes laddas inte sidan om när man klickar på en länk, sidan byts bara ut. All data hämtas allstå vid första besöket till webbplatsen istället för att laddas när användaren navigerar. Detta görs med hjälp av den generella app.component.html-filen och elementet 
```bash
"<router-outlet />"
```

I detta element lagras de som visas för användaren. Klickar en användare på Startsidan, läggs komponenten för startsidan in i detta element och visas på skärmen, istället för att ladda ned en helt ny sida för användaren. 


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
