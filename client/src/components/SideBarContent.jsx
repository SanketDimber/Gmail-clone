import { Box, Button, List, ListItem, styled, Typography } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/Sidebar.config";
import ComposeMail from "./ComposeMail";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import {routes} from "../routes/routes";

const ComposeButton = styled(Button)({
    background: "#c2e7ff",
    color: "#001d35",
    padding: 15,
    borderRadius: 16,
    minWidth: 140,
    textTransform: "none",
});

const Container = styled(Box)({
    padding: 8,
    "& > ul": {
        padding: "10px 0 0 5px",
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        '&  > a':{
            textDecoration:'none',
            color:'inherit'
        }
    },
    "& > ul > a > li > svg": {
        marginRight: 20,
    },
});

const SideBarContent = () => {
    const [openDialog, setDialog] = useState(false);
    const { type } = useParams();

    const onComposeClick = () => {
        setDialog(true);
    };

    var no = 1;
    return (
        <Container>
            <ComposeButton
                sx={{
                    "&:hover": { backgroundColor: "#c2e9ff", boxShadow: 10 },
                }}
                onClick={onComposeClick}
            >
                <CreateOutlined style={{ marginRight: "10px" }} />{" "}
                <Typography style={{ fontWeight: 540 }}>Compose</Typography>
            </ComposeButton>
            <List>
                {SIDEBAR_DATA.map((data) => (
                    <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                        <ListItem
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#e3e1e1",
                                    boxShadow: "none",
                                    borderRadius: "20px",
                                },
                            }}
                            
                            style={
                                type === data.name.toLowerCase()
                                    ? {
                                          backgroundColor: "#d3e3fd",
                                          borderRadius: "20px",
                                      }
                                    : {}
                            }
                        >
                            <data.icon fontSize="small" />
                            {data.title}
                        </ListItem>
                    </NavLink>
                ))}
            </List>
            <ComposeMail openDialog={openDialog} setDialog={setDialog} />
        </Container>
    );
};

export default SideBarContent;
