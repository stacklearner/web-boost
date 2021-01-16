import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet='utf-8' />
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				<script
					dangerouslySetInnerHTML={{
						__html: `<!-- Load Facebook SDK for JavaScript -->
            <div id="fb-root"></div>
            <script>
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v9.0'
                });
              };

              (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>

            <!-- Your Chat Plugin code -->
            <div class="fb-customerchat"
              attribution=setup_tool
              page_id="101277768070549"
        theme_color="#FECA57"
        logged_in_greeting="Hello, How Can I Help You?"
        logged_out_greeting="Hello, How Can I Help You?">
      </div>`,
					}}
				/>
				{props.preBodyComponents}
				<div
					key={`body`}
					id='___gatsby'
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
