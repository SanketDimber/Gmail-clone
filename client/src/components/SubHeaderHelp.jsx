import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled,Box,Divider} from "@mui/material";
import { useState } from "react";

import {
    AppsOutlined,
    AccountCircleOutlined,
    AddToDriveOutlined,
    HelpOutline,
} from "@mui/icons-material";



const SubHeaderHelp = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <HelpOutline
                color="action"
                sx={{
                    "&:hover": {
                        backgroundColor: "#e3e1e1",
                        boxShadow: "none",
                        borderRadius: "22px",
                    },
                }}
                style={{ cursor: "pointer", padding: "10px" }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
             
            >
                <MenuItem onClick={handleClose} style={{fontSize:'14px'}}>Help</MenuItem>
                <MenuItem onClick={handleClose} style={{fontSize:'14px'}}>Traning</MenuItem>
                <MenuItem onClick={handleClose} style={{fontSize:'14px'}}>Updates</MenuItem>
                <Divider light />
                <MenuItem onClick={handleClose} style={{fontSize:'14px'}}>Send fedback to Google</MenuItem>
            </Menu>
        </Box>
    );
};

export default SubHeaderHelp;
