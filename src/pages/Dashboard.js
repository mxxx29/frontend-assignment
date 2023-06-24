import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardComplaint from "../components/Dashboard/DashboardComplaint";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardTemp from "../components/Dashboard/DashboardTemp";
import DashboardTotal from "../components/Dashboard/DashboardTotal";
import DashboardWeather from "../components/Dashboard/DashboardWeather";

const Dashboard = () => {
  return (
    <Box sx={{ minHeight: "100vh", p: 3, boxSizing: "border-box" }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item md={12} sm={12} xs={12} xl={12}>
          <DashboardHeader />
        </Grid>
        <Grid item md={4} sm={12} xs={12} xl={4}>
          <DashboardWeather />
        </Grid>
        <Grid
          item
          container
          md={8}
          sm={12}
          xs={12}
          xl={8}
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item md={12} sm={12} xs={12} xl={12}>
            <DashboardTemp />
          </Grid>
          <Grid item md={12} sm={12} xs={12} xl={12}>
            <DashboardTotal />
          </Grid>
        </Grid>
      </Grid>
      <DashboardComplaint />
    </Box>
  );
};

export default Dashboard;
