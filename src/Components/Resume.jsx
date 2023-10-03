import React from "react";
import NewResume from '../resources/Danish_Resume FSD.pdf'
import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  return (
    <div className="p-2">
      <Button variant="contained" color="inherit"> <a href={NewResume} download={NewResume} > <DownloadIcon/> Download Resume </a> </Button>
    </div>
  );
};

export default Resume;
