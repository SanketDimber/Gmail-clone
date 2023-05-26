import * as React from "react";
import {
    Box,
    styled,
    Typography,
    Popover,
    Button,
    Divider,
} from "@mui/material";
import { useState } from "react";
import { AccountCircleOutlined } from "@mui/icons-material";
import { accountIcon } from "../constants/Constants";

const Element = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    // paddingTop:30,
    // paddingLeft:10,
    padding: 10,
});
const SubAccount = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <AccountCircleOutlined
                color="action"
                sx={{
                    "&:hover": {
                        backgroundColor: "#e3e1e1",
                        boxShadow: "none",
                        borderRadius: "22px",
                    },
                }}
                style={{ cursor: "pointer", padding: "10px" }}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                PaperProps={{
                    sx: {
                        borderRadius: 8,
                        background: "#eaf1fb",
                        width: 370,
                        height: 340,
                        padding: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                    }}
                >
                    <Box
                        style={{
                            display: "flex",
                            padding: 9,
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <img
                                src={accountIcon}
                                alt="logo"
                                style={{ height: 70 }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                style={{ fontSize: 14, fontWeight: 600 }}
                            >
                                Sanket Dimber
                            </Typography>
                            <Typography
                                style={{ color: "#b0b3b5", fontSize: 13 }}
                            >
                                dimbersanket@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            "&:hover": {
                                color: "#050505",
                                backgroundColor: "#e6e8eb",
                                boxShadow: "none",
                                borderColor: "#050505",
                            },
                            borderColor: "#050505",
                            color: "#050505",
                            marginLeft: 10,
                            fontSize: 13,
                            borderRadius: 2,
                            marginRight: 3,
                            fontWeight: 520,
                        }}
                    >
                        Manage your Google Account
                    </Button>
                    <Box style={{ paddingTop: 7 }}>
                        <Element
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#c8ddfa",
                                    boxShadow: "none",
                                }, height:25
                            }}
                        >
                            HELLO
                        </Element>
                    </Box>
                </Box>
                <Box
                    sx={{
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        marginTop: 0.5,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                    }}
                >
                    <Element
                        sx={{
                            "&:hover": {
                                backgroundColor: "#c8ddfa",
                                boxShadow: "none",
                                borderBottomRightRadius: 24,
                                borderBottomLeftRadius: 24,
                            },
                            height:25
                        }}
                    >
                        HELLO
                    </Element>
                </Box>
                <Box style={{ paddingTop: 4 }}>
                        <Element
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#c8ddfa",
                                    boxShadow: "none",
                                }, height:25
                            }}
                        >
                            Sign Out
                        </Element>
                    </Box>
                    <Divider light /> 
                    <Box style={{marginLeft: 100, paddingTop: 30,display:'flex',alignItems:'center' }}>
                
                    <Button
                         variant="text"
                        size="small"
                        sx={{
                            "&:hover": {
                                color: "#050505",
                                backgroundColor: "#e6e8eb",
                                boxShadow: "none",
                                borderColor: "#050505",
                            },
                            borderColor: "#050505",
                            color: "#050505",
                          
                            fontSize: 10,
                            borderRadius: 2,
                            marginRight: 2,
                            fontWeight: 520,
                        }}
                    >
                        Privacy Policy
                    </Button> 
                    <Button
                         variant="text"
                        size="small"
                        sx={{
                            "&:hover": {
                                color: "#050505",
                                backgroundColor: "#e6e8eb",
                                boxShadow: "none",
                                borderColor: "#050505",
                            },
                            borderColor: "#050505",
                            color: "#050505",
                      
                            fontSize: 10,
                            borderRadius: 2,
                            marginRight: 3,
                            fontWeight: 520,
                        }}
                    >
                        Terms of Services
                    </Button>

                    </Box>
            </Popover>
        </div>
    );
};

export default SubAccount;
