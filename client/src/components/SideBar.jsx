
import {Drawer} from '@mui/material'
import SideBarContent from './SideBarContent';
// import { SIDEBAR_DATA } from '../config/Sidebar.config';

const SideBar = ({openDrawer}) => {
    return ( 
        <Drawer
            anchor='left'
            open={openDrawer} 
            hideBackdrop={true}
            ModalProps={{
                keepMounted:true  
            }}   
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    marginTop:'64px',
                    width:250,
                    background:'#F5F5F5',
                    borderRight:'none',
                    height:'cal(100vh-64px)'
                }
            }}
        >
            <SideBarContent /> 
        </Drawer>
     );
}
 
export default SideBar;