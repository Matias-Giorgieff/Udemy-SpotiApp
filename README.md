# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Desc
Esta aplicación se realizo con un fin educativo, siguiendo un curso de Angular realizado en Udemy. 

## Important
Se debe obtener un token el cual sera necesario cambiar en el codigo. El token lo podemos obtener de la siguiente URL:  https://accounts.spotify.com/api/token

En el body se debera ingresar:
Key - Value
grant_type - client_credentials
client_id - f5d18a3fcd0c420f98145700baa05b78
client_secret - c954be254e83489db405776793e12cf8

Una vez obtenido el token se debera ingresar al proyecto en la ruta: App/services/spotify.service.ts y modficiar la linea 17.

Ejemplo de:
'Authorization': 'Bearer BQB-rwxjkkm8UN1Z3bYlH_fxnzrocJvAuzIISy6fhLVgcTb8EvzqIOoZZFKUnrKESJsqZQvWby9Y98YpV5c'
A:
'Authorization': 'Bearer BQAkRUFcPdEIuuFPB9utiwMp-TGtkMcKqkdwMVh_BW6ArMGAhwuAYSP7lTkC4dDXy2m4me29-yP12F6SvyA'




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
