# jQuery Github [![Build Status](https://secure.travis-ci.org/zenorocha/jquery-github.png?branch=master)](https://travis-ci.org/zenorocha/jquery-github)

[![Github Repo Demonstration](http://f.cl.ly/items/2I3u29002A1g2w1R1I0X/Screen%20Shot%202013-01-17%20at%202.16.36%20PM.png)](http://zenorocha.github.com/jquery-github/)

## Usage

Create an attribute called `data-repo`:

```html
<div data-repo="jquery-boilerplate/boilerplate"></div>
```

Include jQuery:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Include plugin's CSS and JS:

```html
<link rel="stylesheet" href="assets/base.css">
<script src="jquery.github.min.js"></script>
```

Call the plugin:

```javascript
$('[data-repo]').github();
```

And that's it \o/

[Check full example's source code](https://github.com/zenorocha/jquery-github/blob/master/demo/index.html).

## Forks

Prefer a non-jquery version with pure JavaScript? No problem, [@ricardobeat](https://github.com/ricardobeat) already did one :) Check [his fork!](https://github.com/ricardobeat/github-repos)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Also remember to follow [jQuery's Code Style](http://contribute.jquery.org/style-guide/js/).

## History

* v0.2.9 May 1, 2013
	* Fixed urls
* v0.2.8 April 30, 2013
	* Followed jQuery's core style guide
* v0.2.7 April 29, 2013
	* Code refactoring
	* Upgraded Grunt from v0.3 to v0.4
* v0.2.6 March 14, 2013
	* Updated to responsive design
* v0.2.5 March 01, 2013
	* Added Grunt and integrated it with Travis
	* Added lint task
	* Added minify task
* v0.2.4 January 17, 2013
	* Renamed from `jquery-github-repos` to `jquery-github`
* v0.2.3 January 17, 2013
	* Added to jQuery Plugins Registry
	* Updated to jQuery v1.9
* v0.2.2 January 15, 2013
	* Fixed "Last commit" date
	* Cached repo data using sessionStorage
	* Added error message if API exceeds its limits
* v0.2.1 January 13, 2013
	* Added live demo
	* Replaced single images for a sprite
	* Added minified version
* v0.2 September 11, 2012
	* Code wrapped into a jQuery plugin
	* Demonstration page created
* v0.1 September 10, 2012
	* Initial commit

## Credits

Built on top of [jQuery Boilerplate](http://jqueryboilerplate.com)

## License

[MIT License](http://zenorocha.mit-license.org/)
