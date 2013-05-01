;( function ( $, window, undefined ) {

	var pluginName = "github",
			document   = window.document,
			defaults   = {
				propertyName: "value"
			};

	function Plugin( element, options ) {
		var self = this;

		self.element    = element;
		self.$container = $( element );
		self.repo       = self.$container.attr( "data-repo" );

		self.options = $.extend( {}, defaults, options ) ;

		self._defaults = defaults;
		self._name     = pluginName;

		self.init();
	}

	// Initializer
	Plugin.prototype.init = function () {
		var self   = this,
				cached = self.getCache();

		if ( cached !== null ) {
			self.applyTemplate( JSON.parse( cached ) );
		}
		else {
			self.requestData( self.repo );
		}
	};

	// Apply results to HTML template
	Plugin.prototype.applyTemplate = function ( repo ) {
		var self  = this,
				$widget = self.parseTemplate( repo );

		$widget.appendTo( self.$container );
	};

	// Stores repostories in sessionStorage if available
	Plugin.prototype.cacheResults = function ( result_data ) {
		var self = this;

		// Cache data
		if ( window.sessionStorage ) {
			window.sessionStorage.setItem( "gh-repos:" + self.repo, JSON.stringify( result_data ) );
		}
	};

	// Grab cached results
	Plugin.prototype.getCache = function() {
		var self = this;

		if ( window.sessionStorage ) {
			return window.sessionStorage.getItem( "gh-repos:" + self.repo );
		}
		else {
			return false;
		}
	};

	// Handle Errors requests
	Plugin.prototype.handlerErrorRequests = function ( result_data ) {
		var self = this;

		console.warn( result_data.message );
		return;
	};

	// Handle Successful request
	Plugin.prototype.handlerSuccessfulRequest = function ( result_data ) {
		var self = this;

		self.applyTemplate( result_data );
		self.cacheResults( result_data );
	};

	// Parses Pushed date with date format
	Plugin.prototype.parsePushedDate = function ( pushed_at ) {
		var self = this,
				date = new Date( pushed_at );

		return date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear();
	};

	// Parses repository URL to be friendly
	Plugin.prototype.parseRepositoryURL = function ( url ) {
		var self = this;

		return url.replace( "api.", "" ).replace( "repos/", "" );
	};

	// Parses HTML template
	Plugin.prototype.parseTemplate = function ( repo ) {
		var self      = this,
				pushed_at = self.parsePushedDate( repo.pushed_at ),
				repo_url  = self.parseRepositoryURL( repo.url );

		return $( $.parseHTML(" \
			<div class='github-box'>  \
				<div class='github-box-header'> \
					<h3> \
						<a href='" + repo_url + "'>" + repo.name + "</a> \
					</h3> \
					<div class='github-stats'> \
						<a class='repo-watchers' href='" + repo_url + "/watchers'>" + repo.watchers + "</a> \
						<a class='repo-forks' href='" + repo_url + "/network'>" + repo.forks + "</a> \
					</div> \
				</div> \
				<div class='github-box-content'> \
					<p>" + repo.description + " &mdash; <a href='" + repo_url + "#readme'>Read More</a></p> \
				</div> \
				<div class='github-box-download'> \
					<p class='repo-update'>Latest commit to <strong>master</strong> on " + pushed_at + "</p> \
					<a class='repo-download' href='" + repo_url + "/zipball/master'>Download as zip</a> \
				</div> \
			</div> \
		  ") );
	};

	// Request repositories from Github
	Plugin.prototype.requestData = function ( repo ) {
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

	$.fn[ pluginName ] = function ( options ) {
		return this.each(function () {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
	};

}( jQuery, window ) );
