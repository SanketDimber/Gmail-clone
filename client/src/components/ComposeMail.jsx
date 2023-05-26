import {
    styled,
    Dialog,
    Box,
    Typography,
    InputBase,
    TextField,
    Button,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const dialogStyle = {
    height: "90%",
    width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#f2f6fc",
    "& > p": {
        fontSize: 14,
        fontWeight: 600,
    },
    "& > svg": {
        cursor: "pointer",
    },
});

const RecipientWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "0 10px",
    "& > div": {
        fontSize: 14,
        borderBottom: "1px solid #F5F5F5",
        marginTop: 10,
    },
});

const Footer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    alignItems: "center",
});

const SendButton = styled(Button)({
    background: "#0B57D0",
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    borderRadius: 19,
    width: 100,
});

const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525,
};

const ComposeMail = ({ openDialog, setDialog }) => {
    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);

    const [data, setData] = useState({});

    const closeComposeMail = (e) => {
        e.preventDefault();
        const payload = {
            to: data.to,
            from: "dimbersanket@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: "",
            name: "Sanket Dimber",
            stareed: false,
            type: "drafts",
        };

        if (
            typeof data.to === "undefined" &&
            typeof data.subject === "undefined" &&
            typeof data.body === "undefined"
        ) {
            console.log("true");
        } else {
            console.log("false");
            saveDraftService.call(payload);

            if (!saveDraftService.error) {
                setDialog(false);
                setData({});
            } else {
                console.log("ERROR IN API 2  ");
            }
        }

        setDialog(false);
    };

    const sendMail = (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: "dimbersanket@gmail.com",
                Subject: data.subject,
                Body: data.body,
            }).then((message) => alert(message));
        }

        const payload = {
            to: data.to,
            from: "dimbersanket@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: "",
            name: "Sanket Dimber",
            stareed: false,
            type: "sent",
        };

        sentEmailService.call(payload);

        if (!sentEmailService.error) {
            setDialog(false);
            setData({});
        } else {
            console.log("ERROR IN API");
        }
        setDialog(false);
    };

    const onChangeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };

    return (
        <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
            </Header>
            <RecipientWrapper>
                <InputBase
                    placeholder="Recipients"
                    name="to"
                    onChange={(e) => onChangeData(e)}
                />
                <InputBase
                    placeholder="Subject"
                    name="subject"
                    onChange={(e) => onChangeData(e)}
                />
            </RecipientWrapper>
            <TextField
                multiline
                rows={20}
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
                onChange={(e) => onChangeData(e)}
                name="body"
            />

            <Footer>
                <SendButton
                    onClick={(e) => sendMail(e)}
                    sx={{
                        "&:hover": {
                            backgroundColor: "#0B57D0",
                            boxShadow: 10,
                        },
                    }}
                >
                    Send
                </SendButton>
                <DeleteOutline
                    style={{ cursor: "pointer" }}
                    onClick={() => setDialog(false)}
                />
            </Footer>
        </Dialog>
    );
};

export default ComposeMail;
