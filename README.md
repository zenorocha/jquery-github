# jQuery Github

[![Bower version](http://img.shields.io/bower/v/jquery-github.svg?style=flat)](http://bower.io/search/?q=jquery-github)
[![Build Status](http://img.shields.io/travis/zenorocha/jquery-github/master.svg?style=flat)](https://travis-ci.org/zenorocha/jquery-github)
[![DevDependencies Status](http://img.shields.io/david/dev/zenorocha/jquery-github.svg?style=flat)](https://david-dm.org/zenorocha/jquery-github#info=devDependencies)

[![Github Repo Demonstration](https://cloud.githubusercontent.com/assets/398893/3528396/064b1fa4-078f-11e4-8460-2593d190c2fc.png)](http://zenorocha.github.io/jquery-github/)

> A jQuery plugin to display your Github Repositories.

## Browser Support

We do care about it.

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Getting started

Three quick start options are available:

* [Download latest release](https://github.com/zenorocha/jquery-github/releases)
* Clone the repo: `git@github.com:zenorocha/jquery-github.git`
* Install with [Bower](http://bower.io): `bower install jquery-github`

## Setup

Use [Bower](http://bower.io) to fetch all dependencies:

```sh
$ bower install
```

Now you're ready to go!

## Usage

Create an attribute called `data-repo`:

```html
<div data-repo="jquery-boilerplate/jquery-boilerplate"></div>
```

Include jQuery:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```

Include plugin's CSS and JS:

```html
<link rel="stylesheet" href="assets/base.css">
<script src="jquery.github.min.js"></script>
```

Call the plugin:

```javascript
$("[data-repo]").github();
```

And that's it \o/

[Check full example's source code](https://github.com/zenorocha/jquery-github/blob/master/demo/index.html).

## Options

Here's a list of available settings.

```javascript
$("[data-repo]").github({
	iconStars:  true,
	iconForks:  true,
	iconIssues: false
});
```

Attribute			| Type				| Default		| Description
---						| ---					| ---				| ---
`iconStars`		| *Boolean*		| `true`		| Displays the number of stars in a repository.
`iconForks`		| *Boolean*		| `true`		| Displays the number of forks in a repository.
`iconIssues`	| *Boolean*		| `false`		| Displays the number of issues in a repository.

## Structure

The basic structure of the project is given in the following way:

```
.
|-- assets/
|-- demo/
|   |-- index.html
|   |-- index-zepto.html
|-- dist/
|   |-- jquery.boilerplate.js
|   |-- jquery.boilerplate.min.js
|-- src/
|   |-- jquery.boilerplate.coffee
|   |-- jquery.boilerplate.js
|-- .editorconfig
|-- .gitignore
|-- .jshintrc
|-- .travis.yml
|-- github.jquery.json
|-- Gruntfile.js
`-- package.json
```

#### [assets/](https://github.com/zenorocha/jquery-github/tree/master/assets)

Contains CSS and Font files to create that lovely Github box.

#### bower_components/

Contains all dependencies like jQuery and Zepto.

#### [demo/](https://github.com/zenorocha/jquery-github/tree/master/demo)

Contains a simple HTML file to demonstrate the plugin.

#### [dist/](https://github.com/zenorocha/jquery-github/tree/master/dist)

This is where the generated files are stored once Grunt runs JSHint and other stuff.

#### [src/](https://github.com/zenorocha/jquery-github/tree/master/src)

Contains the files responsible for the plugin.

#### [.editorconfig](https://github.com/zenorocha/jquery-github/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/zenorocha/jquery-github/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/zenorocha/jquery-github/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/zenorocha/jquery-github/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [github.jquery.json](https://github.com/zenorocha/jquery-github/tree/master/github.jquery.json)

Package manifest file used to publish plugins in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/zenorocha/jquery-github/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/zenorocha/jquery-github/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## Showcase

* [zenorocha.com/projects](http://zenorocha.com/projects/)
* [anasnakawa.com/projects](http://anasnakawa.com/projects/)

**Have you used this plugin in your project?**

Let me know! Send a [tweet](http://twitter.com/zenorocha) or [pull request](https://github.com/zenorocha/jquery-github/pull/new/master) and I'll add it here :)

## Alternatives

**Prefer a non-jquery version with pure JavaScript?**

No problem, [@ricardobeat](https://github.com/ricardobeat) already did one. Check [his fork](https://github.com/ricardobeat/github-repos)!

**Prefer Zepto instead of jQuery?**

No problem, [@igorlima](https://github.com/igorlima) already did that. Check [demo/index-zepto.html](https://github.com/zenorocha/jquery-github/tree/master/demo/index-zepto.html).

**Prefer AngularJS instead of jQuery?**

No problem, [@lucasconstantino](https://github.com/lucasconstantino) already did that. Check [his fork](https://github.com/lucasconstantino/angular-github-repo)!

## Contributing

Check [CONTRIBUTING.md](https://github.com/zenorocha/jquery-github/blob/master/CONTRIBUTING.md).

## History

Check [Releases](https://github.com/zenorocha/jquery-github/releases) for detailed changelog.

## Credits

Built on top of [jQuery Boilerplate](http://jqueryboilerplate.com).

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
