import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

import { SocketContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "1170px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {/* Our video */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item className="orvid" md={6}>
            <Typography variant="h5" className="orvna" gutterBottom>
              {name || "You"}
            </Typography>
            <video playsInline muted ref={myVideo} autoPlay className="hdvd" />
          </Grid>
        </Paper>
      )}

      {/* USER VIDEO */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="orvna" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
