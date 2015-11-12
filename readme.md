# Hack

Bower package for the [Hack](https://github.com/chrissimpkins/Hack) web font.

## Usage

Add the following `HTML` to your website:

````html
<link href="/css/hack.css" rel="stylesheet" type="text/css">
````

Alternatively, you can use the minified version:

````html
<link href="/css/hack.min.css" rel="stylesheet" type="text/css">
````

Use the following `CSS` to integrate the font into your website:

````css
font-family: "Hack", serif;
````

## Customization

To compile your own stylesheet, open `scss/hack.scss` and remove any font styles you're not using:

````scss
@import "regular";
@import "italic";
@import "bold";
@import "bold-italic";
````

To generate an **unminified** stylesheet and source map file, run the following command:

````bash
gulp
````

To generate a **minified** stylesheet, run the following command:

````bash
gulp --production
````