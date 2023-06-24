import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import React from "react";

const array_weather = [
  {
    id: 1,
    time: "NOW",
    value: 34,
    img: "/images/cloud.png",
  },
  {
    id: 2,
    time: "11:00",
    value: 30,
    img: "/images/rain.png",
  },
  {
    id: 3,
    time: "12:00",
    value: 30,
    img: "/images/rain.png",
  },
  {
    id: 4,
    time: "13:00",
    value: 30,
    img: "/images/rain.png",
  },
  {
    id: 5,
    time: "14:00",
    value: 33,
    img: "/images/cloud.png",
  },
  {
    id: 6,
    time: "15:00",
    value: 33,
    img: "/images/cloud.png",
  },
];
const DashboardWeather = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333B53",
        height: "38vh",
        width: "100%",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Grid container>
        <Grid item md={6} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <img
              src="/images/cloud.png"
              alt="cloud"
              style={{
                width: "100%",
                maxWidth: "20vh",
                height: "auto",
              }}
            />
            <Typography
              sx={{
                fontSize: "4vmin",
                color: "#ffffff",
                lineHeight: 1,
                fontWeight: 600,
                textAlign: "left",
                zIndex: 4,
                ml: -3,
              }}
            >
              34
              {"\u00b0"}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "2vmin",
                color: "#ffffff",
                lineHeight: 1,
                fontWeight: 600,
                textAlign: "left",
              }}
            >
              Mostly Sunny
            </Typography>
            <Typography
              sx={{
                fontSize: "2vmin",
                color: "#ffffff",
                mt: 2,
                textAlign: "left",
              }}
            >
              H:37 L:29
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5vmin",
                color: "#ffffff",
                mt: 2,
                textAlign: "left",
              }}
            >
              Precipitation: 4%
              <br /> Humidity: 51% <br />
              Wind: 14 km/h
            </Typography>
          </Box>
        </Grid>
        {_.map(array_weather, (i) => {
          return (
            <Grid item md={2} sm={2} xs={2}>
              <Typography
                sx={{
                  fontSize: "1.5vmin",
                  color: "#ffffff",
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {i.time}
              </Typography>

              <img
                src={i.img}
                alt={i.time}
                style={{
                  width: "100%",
                  maxWidth: "7vh",
                  height: "auto",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1.5vmin",
                  color: "#ffffff",
                  lineHeight: 1,
                  mt: 1,
                }}
              >
                {i.value}
                {"\u00b0"}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardWeather;
