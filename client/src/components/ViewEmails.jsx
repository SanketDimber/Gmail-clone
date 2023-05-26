import { useOutletContext, useLocation } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/Constants";
import { API_URLS } from "../services/api.url";
import useApi from '../hooks/useApi';

const IconWrapper = styled(Box)({

    padding:15
})

const Subject = styled(Typography)({

    fontSize:22,
    margin:'10px 0 20px 75px',
    display:'flex'
})

const Indicator = styled(Box)({
    
    fontSize:12,
    background:'#ddd',
    color:'#222',
    padding:'2px 4px',
    marginLeft:6,
    borderRadius:4,
    alignSelf:'center'
})

const Container = styled(Box)({

    marginLeft:15,
    // width:'100%',
    display:'flex'

})

const Image = styled('img')({
    borderRadius:'50%',
    width:40,
    height:40,
    margin:'5px 10px 0 10px',
    background:'#cccccc'
})

const Wrapper = styled(Box)({

    display:'flex',
    // width:'100%',
    '& > p > span':{
        fontSize:12,
        color:'#5E5E5E'
    }
})

const Date = styled(Box)({

    margin:'0 50px 0 auto',
    color:'#5E5E5E' 
})

const ViewEmails = () => {
    const { openDrawer } = useOutletContext();
    const { state } = useLocation();
    const { email } = state;
    console.log("aa",window.history.state.usr.email.type,"aa");
    const moveEmailsTOBinServices = useApi(API_URLS.moveEmailsToBin);

    const deleteEmail = () => {
        moveEmailsTOBinServices.call([email._id]);
        window.history.back();
    }

    return (
        <Box
            style={
                openDrawer
                    ? { marginLeft: 250 }
                    : { width: "100%" }
            }
        >
            <IconWrapper>
                <ArrowBack
                    onClick={() => window.history.back()}
                    color="action"
                    fontSize="small"
                    style={{ cursor: "pointer" }}
                />
                <Delete
                    color="action"
                    fontSize="small"
                    style={{ marginLeft: 40 ,cursor: "pointer"}} 
                    onClick={()=>deleteEmail()}
                />
            </IconWrapper>
            <Subject>{email.subject} <Indicator component="span">MESSAGE</Indicator></Subject>

            <Container>
                <Image src={emptyProfilePic} alt="dp" />
                <Box style={{width:'100%'}}>
                <Wrapper>
                        <Typography style={{marginTop:14}}>
                            {email.name}
                            <Box component="span">
                                &nbsp;&#60;{email.to}&#62;
                            </Box>
                        </Typography>
                    <Date>
                        {new window.Date(email.date).getDate()}&nbsp;
                        {new window.Date(email.date).toLocaleString("default", {
                            month: "long",
                        })}
                        &nbsp;
                        {new window.Date(email.date).getFullYear()}
                    </Date>
                </Wrapper>
                <Typography style={{marginTop:20}}>{email.body}</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default ViewEmails;
