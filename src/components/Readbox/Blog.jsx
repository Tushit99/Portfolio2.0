import { Grid } from "@chakra-ui/react";
import { useState } from "react";


export default function Blog({text}) {
    const [showMore, setShowMore] = useState(true);
    return (
        <Grid className="project-description" textAlign={"left"}> 
             {showMore ? text : `${text.substring(0, 108)} . . .`}  
            <button className="readmore" onClick={() => setShowMore(!showMore)}>{showMore ? "Read less":"Read more"}</button>
        </Grid> 
    );
} 


