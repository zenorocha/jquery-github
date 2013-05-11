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

#### iconStars

*Type: `Boolean` Default: `true`*

Display the number of stars in a repository.

#### iconForks

*Type: `Boolean` Default: `true`*

Display the number of forks in a repository.

#### iconIssues

*Type: `Boolean` Default: `false`*

Display the number of issues in a repository.

## Showcase

* [zenorocha.com/projects](http://zenorocha.com/projects/)
* [anasnakawa.com/projects](http://anasnakawa.com/projects/)

**Have you used this plugin in your project?**

Let me know! Send a [tweet](http://twitter.com/zenorocha) or [pull request](https://github.com/zenorocha/jquery-github/pull/new/master) and I'll add it here :)

## Forks

**Prefer a non-jquery version with pure JavaScript?**

No problem, [@ricardobeat](https://github.com/ricardobeat) already did one. Check [his fork!](https://github.com/ricardobeat/github-repos)

## Contributing

Check [CONTRIBUTING.md](https://github.com/zenorocha/jquery-github/blob/master/CONTRIBUTING.md).

## History

Check [HISTORY.md](https://github.com/zenorocha/jquery-github/blob/master/HISTORY.md).

## Credits

Built on top of [jQuery Boilerplate](http://jqueryboilerplate.com)

## License

[MIT License](http://zenorocha.mit-license.org/)
