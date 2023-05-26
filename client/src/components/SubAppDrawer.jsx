import * as React from "react";
import { Box, styled, Typography, Popover } from "@mui/material";
import { useState } from "react";
import { SUBAPP_DATA } from "../config/Subapp.config";
import { AppsOutlined } from "@mui/icons-material";
import PropTypes from 'prop-types';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
  

const Element = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    // paddingTop:30, 
    // paddingLeft:10,
    padding:20

});
const SubAppDrawer = () => {
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
            <AppsOutlined
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
                PaperProps={{ sx: {borderRadius:2} }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)", 
                        width: "330px", 
                        height: "435px",
                        alignItems:"center",
                        padding:"20px"
                    }}
                >
                    {SUBAPP_DATA.map((data) => (
                        <Element  
                        key={data.name}
                        sx={{
                            "&:hover": { backgroundColor: "#bbe7f0", boxShadow: 'none' , borderRadius:3},
                        }}>
                            <img
                                src={data.icon}
                                alt="logo"
                                style={{  height:40}}
                            />
                            <Typography>{data.title}</Typography>
                        </Element>
                    ))}
                </Box>
            </Popover>
        </div>
    );
};

export default SubAppDrawer;
