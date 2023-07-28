import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At Booklandia, our mission is to ignite a passion for reading and
            cultivate a vibrant community of book lovers. We aim to curate a
            diverse selection of books that cater to all interests and ages,
            fostering a love for literature and lifelong learning.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Our Vision</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our vision is to be the ultimate destination for all book lovers, a
            place where literary exploration knows no bounds. We envision
            Booklandia as a haven that sparks curiosity, celebrates diversity,
            and nurtures a lifelong relationship with books.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
