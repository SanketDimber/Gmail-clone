import { Suspense, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);
    const [search,setSearch] = useState("");

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    const searchData = (data,type) =>{
        
        setSearch(data);
    }

    return (
        <>
            <Header toggleDrawer={toggleDrawer}
                    searchData={(data) => searchData(data)}
            />
            <Box>
                <SideBar openDrawer={openDrawer} />
                <Suspense fallback={<SuspenseLoader />}>
                    <Outlet context={{openDrawer,search}}/>
                </Suspense>
            </Box>
        </>
    );
};

export default Main;
