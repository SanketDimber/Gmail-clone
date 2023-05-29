import { AppBar, Toolbar, styled, Box, InputBase } from "@mui/material";
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Tune,
    SettingsOutlined,
  
} from "@mui/icons-material";
import { gmailLogo } from "../constants/Constants";
import SubAppDrawer from "./SubAppDrawer";
import SubHeaderHelp from "./SubHeaderHelp";
import SubAccount from "./SubAccount";

const StyledAppBar = styled(AppBar)`
    background: #f5f5f5;
    box-shadow: none;
`;
const SearchWrapper = styled(Box)({
    background: "#EAF1FB",
    marginLeft: 58,
    borderRadius: 8,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    "& > div": {
        width: "100%",
        padding: "0 10px",
    },
});

const OptionsWrapper = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "end",
    "& > svg": {
        marginLeft: 2,
    },
});

const Header = ({ toggleDrawer,searchData}) => {

 
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon
                    color="action"
                    onClick={toggleDrawer}
                    sx={{
                        "&:hover": { backgroundColor: "#e3e1e1", boxShadow: 'none',borderRadius:'22px'}
                    }}
                    style={{ cursor: "pointer",padding:"10px" }}
                />
                <img
                    src={gmailLogo}
                    alt="logo"
                    style={{ width: 110, marginLeft: 15,cursor: "pointer"}}
                />
                <SearchWrapper>
                    <SearchIcon color="action" 
                     sx={{
                        "&:hover": { backgroundColor: "#e3e1e1", boxShadow: 'none',borderRadius:'22px'}
                    }}
                    style={{ cursor: "pointer",padding:"10px" }}
                    />
                    <InputBase placeholder="Search Mail" onKeyUp={(e)=>searchData(e.target.value)}/>
                    <Tune color="action"
                     sx={{
                        "&:hover": { backgroundColor: "#e3e1e1", boxShadow: 'none',borderRadius:'22px' }
                    }}
                    style={{ cursor: "pointer",padding:"10px" }} 
                    />
                </SearchWrapper>
                <OptionsWrapper>
                    
                    <SubHeaderHelp />
                    <SettingsOutlined color="action" 
                     sx={{
                        "&:hover": { backgroundColor: "#e3e1e1", boxShadow: 'none',borderRadius:'22px' }
                    }}
                    style={{ cursor: "pointer",padding:"10px" }}/>
                    <SubAppDrawer />
                    <SubAccount />
                </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;

