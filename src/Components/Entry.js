import React from "react";

const Entry = (props) => {
console.log('EntryCard.js -> %cprops:', 'color: dodgerblue', props)

	
	return (
		<div>
			<h2>{props.artistName}</h2>
			<h4>{props.title}</h4>
			<img src="props.url" alt="gallery item"/>
			<button>
				Edit
			</button>
			<button >
				Delete
			</button>
			
		</div>
	);
};

export default Entry;
