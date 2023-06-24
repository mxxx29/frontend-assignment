import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import React from "react";

const array_temp = [
  {
    id: 1,
    name: "TEMPERATURE",
    img: "/images/thermometer.png",
    value: 28.7,
    symbol: "\u00b0",
  },
  {
    id: 2,
    name: "HUMIDITY",
    img: "/images/humidity.png",
    value: 65,
    symbol: "\u0025",
  },
];

const DashboardTemp = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333B53",
        height: "18vh",
        width: "100%",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Grid container>
        {_.map(array_temp, (i) => {
          return (
            <Grid item md={4} sm={4} xs={4} xl={4} key={i.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2vmin",
                    color: "#ffffff",
                    fontWeight: 600,
                  }}
                >
                  {i.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    mt: 3,
                  }}
                >
                  <img
                    src={i.img}
                    alt={i.name}
                    style={{
                      width: "100%",
                      maxWidth: "7vh",
                      height: "auto",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "5vmin",
                      color: "#ffffff",
                      ml: 1,
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    {i.value}
                    {i.symbol}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardTemp;
