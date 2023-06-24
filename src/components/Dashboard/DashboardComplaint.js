import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import React from "react";

const array_complaint = [
  {
    id: 1,
    name: "Trash Full",
    img: "/images/trash-can.png",
  },
  {
    id: 2,
    name: "Tissue Paper",
    img: "/images/toilet-paper.png",
  },
  {
    id: 3,
    name: "The water is not running",
    img: "/images/water.png",
  },
  {
    id: 4,
    name: "Smell",
    img: "/images/smell.png",
  },
  {
    id: 5,
    name: "Wet Floor",
    img: "/images/wet-floor.png",
  },
  {
    id: 6,
    name: "Flush Toilet",
    img: "/images/wc.png",
  },
  {
    id: 7,
    name: "Urinal",
    img: "/images/urinal.png",
  },
  {
    id: 8,
    name: "Others",
    img: "/images/other.png",
  },
];
const DashboardComplaint = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {_.map(array_complaint, (i) => {
          return (
            <Grid item md={3} sm={6} xs={6} xl={3} key={i.id}>
              <Box
                sx={{
                  backgroundColor: "#333B53",
                  height: "21vh",
                  width: "100%",
                  borderRadius: "30px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={i.img}
                  alt={i.name}
                  style={{
                    width: "100%",
                    maxWidth: "9vh",
                    height: "auto",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "2vmin",
                    color: "#ffffff",
                    mt: 3,
                    fontWeight: 600,
                  }}
                >
                  {i.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardComplaint;
