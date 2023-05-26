import { Box, Typography, Checkbox, styled, Divider } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";

import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Wrapper = styled(Box)({
    padding: "0 0 0 10px",
    background: "#f2f6fc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderTop: "0.5px solid #e6e7e8",
    borderBottom: "0.5px solid #e6e7e8",
    // borderWidth: 'thin',
    // borderColor: '#e6e7e8',
    "& > div": {
        display: "flex",
        width: "100%",
        "& > p": {
            fontSize: 14,
        },
    },
});

const Indicator = styled(Typography)({
    fontSize: "12px !important",
    background: "#ddd",
    color: "#222",
    padding: "0 4px",
    borderRadius: 4,
    marginRight: 6,
});
const Date = styled(Typography)({
    marginLeft: "auto",
    marginRight: 20,
    fontSize: 12,
    color: "#5F6368",
});

const Email = ({
    email,
    selectedEmails,
    setRefreshScreen,
    setSelectedEmails,
    openDrawer,
    search,
}) => {
    const navigate = useNavigate();
    const [contains, setContains] = useState(true);

    const toggleStarredServices = useApi(API_URLS.toggleStarredEmail);

    const toggleStarredMails = () => {
        toggleStarredServices.call({ id: email._id, value: !email.stareed });
        setRefreshScreen((prevState) => !prevState);
    };

    const onValueChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails((prevState) =>
                prevState.filter((id) => id !== email._id)
            );
        } else {
            setSelectedEmails((prevState) => [...prevState, email._id]);
        }
    };

    const { type } = useParams();
    



    useEffect(
        () => {
            var l = search.length;
            if (l === 0) {
                setContains(true);
            } else {
                setContains(false);
            }
        },
        [search]
    );

    return (
        <Box>
            {contains ? (
                <Wrapper
                    sx={{
                        "&:hover": {
                            zIndex: 1,
                            position: "relative",
                            boxShadow: 10,
                        },
                    }}
                >
                    <Divider light />
                    <Checkbox
                        size="small"
                        checked={selectedEmails.includes(email._id)}
                        onChange={() => onValueChange()}
                    />
                    {email.stareed ? (
                        <Star
                            size="small"
                            style={{ marginRight: 10, color: "#f3c74b" }}
                            onClick={() => toggleStarredMails()}
                        />
                    ) : (
                        <StarBorder
                            size="small"
                            style={{ marginRight: 10 }}
                            onClick={() => toggleStarredMails()}
                        />
                    )}

                    <Box
                        onClick={() =>
                            navigate(routes.view.path, {
                                state: { email: email },
                            })
                        }
                    >
                        <Typography style={{ width: 200, overflow: "hidden" }}>
                            {email.name}
                        </Typography>
                        <Indicator>{type}</Indicator>

                        {openDrawer ? (
                            <Typography
                                style={{
                                    width: 800,
                                    height: 20,
                                    overflow: "hidden",
                                }}
                            >
                                {email.subject}
                                {email.body && "-"}
                                {email.body}
                            </Typography>
                        ) : (
                            <Typography
                                style={{
                                    width: 1070,
                                    height: 20,
                                    overflow: "hidden",
                                }}
                            >
                                {email.subject}
                                {email.body && "-"}
                                {email.body}
                            </Typography>
                        )}

                        <Date>
                            {new window.Date(email.date).getDate()}
                            {new window.Date(email.date).toLocaleString(
                                "default",
                                {
                                    month: "long",
                                }
                            )}
                        </Date>
                    </Box>
                    <Divider light />
                </Wrapper>
            ) : (
                <Box>
                {     email.subject.toLowerCase().includes(search.toLowerCase()) | email.body.toLowerCase().includes(search.toLowerCase()) | email.name.toLowerCase().includes(search.toLowerCase())  ? (
                        <Wrapper
                            sx={{
                                "&:hover": {
                                    zIndex: 1,
                                    position: "relative",
                                    boxShadow: 10,
                                },
                            }}
                        >
                            <Divider light />

                            <Checkbox
                                size="small"
                                checked={selectedEmails.includes(email._id)}
                                onChange={() => onValueChange()}
                            />
                            {email.stareed ? (
                                <Star
                                    size="small"
                                    style={{
                                        marginRight: 10,
                                        color: "#f3c74b",
                                    }}
                                    onClick={() => toggleStarredMails()}
                                />
                            ) : (
                                <StarBorder
                                    size="small"
                                    style={{ marginRight: 10 }}
                                    onClick={() => toggleStarredMails()}
                                />
                            )}

                            <Box
                                onClick={() =>
                                    navigate(routes.view.path, {
                                        state: { email: email },
                                    })
                                }
                            >
                                <Typography
                                    style={{ width: 200, overflow: "hidden" }}
                                >
                                    {email.name}
                                </Typography>
                                <Indicator>{type}</Indicator>

                                {openDrawer ? (
                                    <Typography
                                        style={{
                                            width: 800,
                                            height: 20,
                                            overflow: "hidden",
                                        }}
                                    >
                                        {email.subject}
                                        {email.body && "-"}
                                        {email.body}
                                    </Typography>
                                ) : (
                                    <Typography
                                        style={{
                                            width: 1100,
                                            height: 20,
                                            overflow: "hidden",
                                        }}
                                    >
                                        {email.subject}
                                        {email.body && "-"}
                                        {email.body}
                                    </Typography>
                                )}

                                <Date>
                                    {new window.Date(email.date).getDate()}
                                    {new window.Date(email.date).toLocaleString(
                                        "default",
                                        {
                                            month: "long",
                                        }
                                    )}
                                </Date>
                            </Box>
                            <Divider light />
                        </Wrapper>
                    ) 
                    :""}
                </Box>
            )}
        </Box>
    );
};

export default Email;
