import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  name: {
    marginBottom: theme.spacing(5), // Double spacing between name and job titles
    fontSize: '2.5rem', // Half size of job text (h1 is typically 6rem, so 3rem)
    "@media (max-width: 768px)": {
      fontSize: '1.2rem',
    },
  },
  jobs: {
    display: 'flex',
    flexDirection: 'column',
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
  jobLine: {
    lineHeight: 1.2, // Tighter line height to keep AI/ML and Programmer closer
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h3" component="h2" className={classes.name}>
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
            <div className={classes.jobLine}>
                <TextDecrypt text={`${Resume.basics.job1} +`} />
            </div>
            <div className={classes.jobLine}>
                <TextDecrypt text={`${Resume.basics.job2}`} />
            </div>
        </Typography>
      </div>
    </Container>
  );
};
