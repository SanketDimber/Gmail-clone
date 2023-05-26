
import { useEffect , useState} from "react";
import { useOutletContext,useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url";
import useApi from '../hooks/useApi';
import {Checkbox,Box,List} from '@mui/material'
import {DeleteOutline,RefreshRounded} from '@mui/icons-material'
import Email from "./Email"; 
import NoMails from "./NoMails";


const Emails = () => {

    const [selectedEmails,setSelectedEmails] = useState([]);
    const [refreshScreen,setRefreshScreen] = useState(false);
    const {openDrawer} = useOutletContext();
    const {search} = useOutletContext();

    const {type} = useParams();
    const getEmailService = useApi(API_URLS.getEmailFromType);
    const moveEmailsTOBinServices = useApi(API_URLS.moveEmailsToBin);
    const deleteEmailService = useApi(API_URLS.deleteEmail);
    
    useEffect(() => {

        getEmailService.call({},type);
    },[type,refreshScreen])

    const selectAllEmails = (e) => {


        if(e.target.checked) {

            const emails = getEmailService?.response?.map(email => email._id);
            setSelectedEmails(emails); 

        }else {

            setSelectedEmails([]); 

        }
    }

    const deleteSelectedEmails = (e) =>{

        if(type === 'bin'){

            deleteEmailService.call(selectedEmails);
        }else{
            
            moveEmailsTOBinServices.call(selectedEmails);
        }
        setSelectedEmails([]); 
        setRefreshScreen(!refreshScreen);
        
    }

    const refreshPage = (e) => {

        setRefreshScreen(!refreshScreen);
    }

    return ( 
        <Box style={openDrawer ? {marginLeft:250,width:'calc(100% - 250px)'} : {width:'100%'}}>
            <Box style={{padding:'20px 10px 0px 10px',display:'flex',alignItems:'center'}}>
                <Checkbox size="small" onChange={(e) => selectAllEmails(e)}/>
                <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} style={{ cursor: "pointer" }}/>
                <RefreshRounded size="small" onClick={(e) => refreshPage(e)} style={{ cursor: "pointer" }}/>
            </Box>
            <List>
                {
                    getEmailService?.response?.map(email => (
                        <Email 
                        
                            key={email._id}
                            email={email} 
                            selectedEmails={selectedEmails}
                            setRefreshScreen={setRefreshScreen}
                            setSelectedEmails={setSelectedEmails}
                            openDrawer={openDrawer}
                            search={search}
                        />
                    ))
                }
            </List>
            {
                getEmailService?.response?.length === 0  &&
                <NoMails />
            }
        </Box>
     );
}
 
export default Emails;

