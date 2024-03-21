# django-css

Bootstrap based CSS for Django projects.

NOTE: This is a work in progress and not ready for production use in anyway (hence no pip packages yet).

# Design and development principles

NO NPM, NO CDN, fed up of installing node_modules for every project I wanted some of the features we come to expect in modern
ui frameworks but without the overhead of node_modules in our python projects.

As a base this project uses the bootstrap for now as development start but with a focus on improvement and simplifying
for deployment straight into a django project. The first step was implementing a build system for scss files that is achieved
using the python libsass package. https://sass.github.io/libsass-python/

# Docs for frameworks

* Bootstrap 5 - https://getbootstrap.com/docs/5.0/getting-started/introduction/

# Install

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
```

Build / rebuild

```bash
python3 manage.py css build
```

This will build the framework and place the files in the static directory of your project.

# Usage

Add to your base.html

```html
<link rel="stylesheet" href="{% static 'css/bootstrap.css' %}">
```

# TODO

* Javascipt builder
* get rid of hard coded the css include as it refences bootstrap and we want an agnostic approach
* Allow the selection of framework to build IE atm its just bootstrap
