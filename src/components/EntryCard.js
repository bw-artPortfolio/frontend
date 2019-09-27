import React from "react";
import {Card} from "semantic-ui-react";



const EntryCard = (entry) => {
	
	console.log("EntryCard.js -> %centry:", "color: purple", entry);
		
	return (
		<Card>
			{/* <Image src={entry.image} /> */}
			<Card.Content>
				<Card.Header>{entry.type}</Card.Header>
				<Card.Meta>
					<span>
					{entry.id}
					{entry.setup}
					{entry.punchline} 
					</span>
				</Card.Meta>
				{/* <Card.Description>
					Location: {entry.location.name}
					<br />
					Origin: {entry.origin.name}
				</Card.Description> */}
			</Card.Content>
			
		</Card>
	);
}

export default EntryCard