// -- Github Repository --------------------------------------------------------

function GithubRepo( repo ) {
	this.description = repo.description;
	this.forks = repo.forks_count;
	this.name = repo.name;
	this.open_issues = repo.open_issues;
	this.pushed_at = repo.pushed_at;
	this.url = repo.url;
	this.stargazers = repo.stargazers_count;
}

// Parses HTML template
GithubRepo.prototype.toHTML = function () {
	this.pushed_at = this._parsePushedDate( this.pushed_at ),
	this.url  = this._parseURL( this.url );

	return $(
		"<div class='github-box'>" +
			"<div class='github-box-header'>" +
				"<h3>" +
					"<a href='" + this.url + "'>" + this.name + "</a>" +
				"</h3>" +
				"<div class='github-stats'>" +
					"<a class='repo-stars' title='Stars' data-icon='7' href='" + this.url + "/stargazers'>" + this.stargazers + "</a>" +
					"<a class='repo-forks' title='Forks' data-icon='f' href='" + this.url + "/network'>" + this.forks + "</a>" +
					"<a class='repo-issues' title='Issues' data-icon='i' href='" + this.url + "/issues'>" + this.open_issues + "</a>" +
				"</div>" +
			"</div>" +
			"<div class='github-box-content'>" +
				"<p>" + this.description + " &mdash; <a href='" + this.url + "#readme'>Read More</a></p>" +
			"</div>" +
			"<div class='github-box-download'>" +
				"<p class='repo-update'>Latest commit to <strong>master</strong> on " + this.pushed_at + "</p>" +
				"<a class='repo-download' title='Download as zip' data-icon='w' href='" + this.url + "/zipball/master'></a>" +
			"</div>" +
		"</div>");
};

// Parses pushed_at with date format
GithubRepo.prototype._parsePushedDate = function ( pushed_at ) {
	var date = new Date( pushed_at );

	return date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear();
};

// Parses URL to be friendly
GithubRepo.prototype._parseURL = function ( url ) {
	return url.replace( "api.", "" ).replace( "repos/", "" );
};

// -- Github Plugin ------------------------------------------------------------

function Github( element, options ) {
	var defaults = {
				iconStars:  true,
				iconForks:  true,
				iconIssues: false
			};

	this.element    = element;
	this.$container = $( element );
	this.repo       = this.$container.attr( "data-repo" );

	this.options = $.extend( {}, defaults, options ) ;

	this._defaults = defaults;

	this.init();
	this.displayIcons();
}

// Initializer
Github.prototype.init = function () {
	var cached = this.getCache();

	if ( cached !== null ) {
		this.applyTemplate( JSON.parse( cached ) );
		return;
	}

	this.requestData( this.repo );
};

// Display or hide icons
Github.prototype.displayIcons = function () {
	var options = this.options,
			$iconStars = $( ".repo-stars" ),
			$iconForks = $( ".repo-forks" ),
			$iconIssues = $( ".repo-issues" );

	$iconStars.css( "display", options.iconStars ? "inline-block" : "none" );
	$iconForks.css( "display", options.iconForks ? "inline-block" : "none" );
	$iconIssues.css( "display", options.iconIssues ? "inline-block" : "none" );
};

// Request repositories from Github
Github.prototype.requestData = function ( repo ) {
	var that = this;

	$.ajax({
		url: "https://api.github.com/repos/" + repo,
		dataType: "jsonp",
		success: function( results ) {
			var result_data = results.data,
				isFailling = results.meta.status >= 400 && result_data.message;

			if ( isFailling ) {
				that.handleErrorRequest( result_data );
				return;
			}

			that.handleSuccessfulRequest( result_data );
		}
	});
};

// Handle Errors requests
Github.prototype.handleErrorRequest = function ( result_data ) {
	console.warn( result_data.message );
	return;
};

// Handle Successful request
Github.prototype.handleSuccessfulRequest = function ( result_data ) {
	this.applyTemplate( result_data );
	this.setCache( result_data );
};

// Stores repostories in sessionStorage if available
Github.prototype.setCache = function ( result_data ) {
	// Cache data
	if ( window.sessionStorage ) {
		window.sessionStorage.setItem( "gh-repos:" + this.repo, JSON.stringify( result_data ) );
	}
};

// Grab cached results
Github.prototype.getCache = function() {
	if ( window.sessionStorage ) {
		return window.sessionStorage.getItem( "gh-repos:" + this.repo );
	}
	else {
		return false;
	}
};

// Apply results to HTML template
Github.prototype.applyTemplate = function ( repo ) {
	var githubRepo = new GithubRepo( repo ),
		$widget = githubRepo.toHTML();

	$widget.appendTo( this.$container );
};

// -- Attach plugin to jQuery's prototype --------------------------------------

;( function ( $, window, undefined ) {

	$.fn.github = function ( options ) {
		return this.each(function () {
			if ( !$( this ).data( "plugin_github" ) ) {
				$( this ).data( "plugin_github", new Github( this, options ) );
			}
		});
	};

}( window.jQuery || window.Zepto, window ) );
