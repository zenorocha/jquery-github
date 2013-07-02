function Github( element, options ) {
	var self = this,
			defaults   = {
				iconStars:  true,
				iconForks:  true,
				iconIssues: false
			};

	self.element    = element;
	self.$container = $( element );
	self.repo       = self.$container.attr( "data-repo" );

	self.options = $.extend( {}, defaults, options ) ;

	self._defaults = defaults;

	self.init();
	self.displayIcons();
}

// Initializer
Github.prototype.init = function () {
	var self   = this,
			cached = self.getCache();

	if ( cached !== null ) {
		self.applyTemplate( JSON.parse( cached ) );
	}
	else {
		self.requestData( self.repo );
	}
};

// Display or hide icons
Github.prototype.displayIcons = function () {
	$iconStars = $( ".repo-stars" );
	$iconForks = $( ".repo-forks" );
	$iconIssues = $( ".repo-issues" );

	if ( this.options.iconStars ) {
		$iconStars.css( "display", "inline-block" );
	} else {
		$iconStars.css( "display", "none" );
	}

	if ( this.options.iconForks ) {
		$iconForks.css( "display", "inline-block" );
	} else {
		$iconForks.css( "display", "none" );
	}

	if ( this.options.iconIssues ) {
		$iconIssues.css( "display", "inline-block" );
	} else {
		$iconIssues.css( "display", "none" );
	}
};

// Apply results to HTML template
Github.prototype.applyTemplate = function ( repo ) {
	var self  = this,
			$widget = self.parseTemplate( repo );

	$widget.appendTo( self.$container );
};

// Stores repostories in sessionStorage if available
Github.prototype.cacheResults = function ( result_data ) {
	var self = this;

	// Cache data
	if ( window.sessionStorage ) {
		window.sessionStorage.setItem( "gh-repos:" + self.repo, JSON.stringify( result_data ) );
	}
};

// Grab cached results
Github.prototype.getCache = function() {
	var self = this;

	if ( window.sessionStorage ) {
		return window.sessionStorage.getItem( "gh-repos:" + self.repo );
	}
	else {
		return false;
	}
};

// Handle Errors requests
Github.prototype.handlerErrorRequests = function ( result_data ) {
	var self = this;

	console.warn( result_data.message );
	return;
};

// Handle Successful request
Github.prototype.handlerSuccessfulRequest = function ( result_data ) {
	var self = this;

	self.applyTemplate( result_data );
	self.cacheResults( result_data );
};

// Parses Pushed date with date format
Github.prototype.parsePushedDate = function ( pushed_at ) {
	var self = this,
			date = new Date( pushed_at );

	return date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear();
};

// Parses repository URL to be friendly
Github.prototype.parseRepositoryURL = function ( url ) {
	var self = this;

	return url.replace( "api.", "" ).replace( "repos/", "" );
};

// Parses HTML template
Github.prototype.parseTemplate = function ( repo ) {
	var self      = this,
			pushed_at = self.parsePushedDate( repo.pushed_at ),
			repo_url  = self.parseRepositoryURL( repo.url );

	return $(
		"<div class='github-box'>" +
			"<div class='github-box-header'>" +
				"<h3>" +
					"<a href='" + repo_url + "'>" + repo.name + "</a>" +
				"</h3>" +
				"<div class='github-stats'>" +
					"<a class='repo-stars' title='Stars' data-icon='7' href='" + repo_url + "/watchers'>" + repo.watchers + "</a>" +
					"<a class='repo-forks' title='Forks' data-icon='f' href='" + repo_url + "/network'>" + repo.forks + "</a>" +
					"<a class='repo-issues' title='Issues' data-icon='i' href='" + repo_url + "/issues'>" + repo.open_issues + "</a>" +
				"</div>" +
			"</div>" +
			"<div class='github-box-content'>" +
				"<p>" + repo.description + " &mdash; <a href='" + repo_url + "#readme'>Read More</a></p>" +
			"</div>" +
			"<div class='github-box-download'>" +
				"<p class='repo-update'>Latest commit to <strong>master</strong> on " + pushed_at + "</p>" +
				"<a class='repo-download' title='Download as zip' data-icon='w' href='" + repo_url + "/zipball/master'></a>" +
			"</div>" +
		"</div>");
};

// Request repositories from Github
Github.prototype.requestData = function ( repo ) {
	var self = this;

	$.ajax({
		url: "https://api.github.com/repos/" + repo,
		dataType: "jsonp",
		success: function( results ) {
			var result_data = results.data;

			// Handle API failures
			if ( results.meta.status >= 400 && result_data.message ) {
				self.handlerErrorRequest();
			}
			else {
				self.handlerSuccessfulRequest( result_data );
			}
		}
	});
};

;( function ( $, window, undefined ) {

	$.fn.github = function ( options ) {
		return this.each(function () {
			if ( !$( this ).data( "plugin_github" ) ) {
				$( this ).data( "plugin_github", new Github( this, options ) );
			}
		});
	};

}( window.jQuery || window.Zepto, window ));
