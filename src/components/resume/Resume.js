import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import { TextDecrypt } from "../content/TextDecrypt";
// import ResumePDF from './../../assets/CV Benjamin Mehrdad.pdf';
import { ResumeIcon } from "../content/ResumeButton";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    position: "fixed",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    "&:hover": {
      color: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export const Resume = () => {
//   const classes = useStyles();

//   return (
//     <Link
//       color='inherit'
//       underline='none'
//       href= {`${ResumePDF}`}
//       target='_blank'
//       rel='noopener noreferrer'
//       className={classes.footerText}
//     >
//       <ResumeIcon />
//       <Typography component='span'>
//         <TextDecrypt text={' Resume'} />
//       </Typography>
//     </Link>
//   );
// };

export const Resume = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link
        color="inherit"
        underline="none"
        onClick={handleOpen}
        // href= {`${ResumePDF}`}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.footerText}>
        <ResumeIcon />
        <Typography component="span">
          <TextDecrypt text={" Resume"} />
        </Typography>
      </Link>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Please contact via Email</h2>
            <p id="transition-modal-description">benjaminmhrdd@gmail.com</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
