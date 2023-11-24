import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const TinyEditor = props => {
	const { onChange } = props;

	return (
		<div>
			<Editor
				apiKey='vocxqksl1lger7ttak7q87j3trvipgvjttvpp4fl4dfs4ddb'
				init={{
					height: 300,
					menubar: false,
				}}
				name='newsBody'
				// value={value}
				onChange={onChange}
			/>
		</div>
	);
};
