import React from "react";
import MyResume from '../resources/Danish_Resume.pdf'
import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  return (
    <div className="p-2">
      <Button variant="contained" color="inherit"> <a href={MyResume} download={MyResume} > <DownloadIcon/> Download Resume </a> </Button>
    </div>
  );
};

export default Resume;
