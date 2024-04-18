# django-sui

SCSS based CSS for Django projects and simple JS frameworks

Currently supports easy local install or bootstrap and fontawesome frameworks with more coming soon

NOTE: This is a work in progress and not ready for production use in anyway (hence no pip packages yet).

# Design and development principles

Fed up of installing node_modules for every project I wanted some of the features we come to expect in modern
ui frameworks but without the overhead of node_modules in our python projects or at the very least hide that from the developer.

As a base this project uses the bootstrap for now as development start but with a focus on improvement and simplifying
for deployment straight into a django project. The first step was implementing a build system for scss files that is achieved
using the python libsass package. https://sass.github.io/libsass-python/

# Docs for frameworks

## CSS

* Bootstrap 5 - https://getbootstrap.com/docs/5.0/getting-started/introduction/
* FortAwesome - https://github.com/FortAwesome/Font-Awesome

## Typescript

* IBTW - Itzy Bitzy Teeny Weeny JS Framework - [IBTW](docs/IBTW.md)


Local dev mode in edit mode

```bash
sudo python3 -m pip install --user -e ~/projects/django-css
```

Add to your django project

```python
INSTALLED_APPS = [
    ...
    'css',
    ...
]

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

CSS_FRAMEWORKS = [
    'bootstrap',
    'fontawesome',
]
```

Build / rebuild

```bash
python3 manage.py css build
```

This will build the framework and place the files in the static directory of your project. In default mode it will build
bootstrap and fontawesome. You would expect to see the following files in your static directory

```bash
css/
    bootstrap.css
    fontawesome.css
    regular.css
    brands.css
    solid.css
webfonts/
    fa-brands-400.woff2
    fa-brands-400.ttf
    fa-regular-400.woff2
    fa-regular-400.ttf
    fa-solid-900.woff2
    fa-solid-900.ttf
```


# Usage

Add to your base.html

Bootstrap

```html
<link rel="stylesheet" href="{% static 'css/bootstrap.css' %}">
<script src="{% static 'js/bootstrap.bundle.js' %}"></script>
```

Fontawsome

```html
<link rel="stylesheet" href="{% static  'css/fontawesome.css' %}">
<link rel="stylesheet" href="{% static  'css/regular.css' %}">
<link rel="stylesheet" href="{% static  'css/brands.css' %}">
<link rel="stylesheet" href="{% static  'css/solid.css' %}">
```



# TODO

* Javascipt builder
* Dynamic updater - We really need to pull the lastest frameworks via git as part of the build process
  * This will allow us to keep up to date with the latest versions of the frameworks
  * Importantly I dont like other peoples work c/p into my projects
* ~~get rid of hard coded the css include as it refences bootstrap and we want an agnostic approach~~
* ~~Allow the selection of framework to build IE atm its just bootstrap~~
