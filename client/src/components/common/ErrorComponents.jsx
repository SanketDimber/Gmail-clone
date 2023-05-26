
import { Box,Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {

    const err = useRouteError();
        console.log(err);

    return ( 
        
        <Box style={{marginLeft:250}}>
        <Typography>
            ERROOOOOORR OCCCURRREEEEDDD
        </Typography>
        </Box>
     );
}
 
export default ErrorComponent;