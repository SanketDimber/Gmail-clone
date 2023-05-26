
import {Box,Typography,styled,Divider} from '@mui/material';
import { useParams } from 'react-router-dom';
import { EMPTY_TABS } from "../constants/Constants";


const Component = styled(Box)({

    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    marginTop:50,
    opacity:0.8,
    width:'100%'
})

const StyledDivider = styled(Divider)({

    width:'100%',
    marginTop:10
})

const NoMails = () => {
  
    
    const {type} = useParams();
    console.log(type);

    return ( 
        <Component>
            <Typography>{EMPTY_TABS[type].heading}</Typography>
            <Typography>{EMPTY_TABS[type].subHeading}</Typography>
            <StyledDivider />
        </Component>
     );
}
 
export default NoMails;