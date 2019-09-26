import React, { useEffect, useState } from "react";
import axios from "axios";
import entryCard from "./entryCard";

export default function entryList() {
	const [entries, setEntries] = useState([]);
	

	useEffect(() => {
		axios
			.get(`https://official-joke-api.appspot.com/random_ten`)
			.then(res => {
				setEntries(res);
				console.log('entriesList.js -> %cres.data.results:', 'color: purple', res)
			})
			.catch(err => console.error("Data is not flowing, check this out:",err))
	}, []);
  

	return (
		<div>
			{entries.map(entry => {
				
				return <EntryCard key={entry.id} entry={entry}/>;
				
			})}
		{console.log('Entry at map',entry)}
		</div>
	);
}