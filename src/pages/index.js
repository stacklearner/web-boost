/** @jsx jsx */
import * as React from 'react';
import { jsx, ThemeProvider } from 'theme-ui';

const Index = () => {
	return (
		<div>
			<h1 sx={{ color: 'secondary', fontFamily: 'heading' }}>
				Hello World
			</h1>
		</div>
	);
};

export default Index;
