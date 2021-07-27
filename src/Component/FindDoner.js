import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  Paper: {
    textAlign: "center",
    padding: 30,
  },
  table: {
    marginTop: 20,
    minWidth: 100,
  },
  text: {
    color: "#e82d2a"
  }
});

function createData(name, Address, PhoneNo) {
  return { name, Address, PhoneNo };
}

const rows = [
  createData(
    "American Red Cross Blood Donation Center",
    "Blood donation center in Dearborn, Michigan, U.S.",
    "+1 800-733-2767"
  ),
  createData(
    "American Red Cross Blood Donor Center",
    "100 Promenade Pkwy, Fayetteville, GA 30214, U.S.",
    "+1 770-308-0483"
  ),
  createData(
    "Howell Donor Center - NYBC",
    "4068 U.S. 9, Howell Township, NJ 07731, U.S.",
    "+1 800-933-2566"
  ),
  createData(
    "Lifeblood Bartlet Donor Center",
    "7505 US-64, Bartlett, TN 38133, U.S.",
    "+1 901-271-1220"
  ),
  createData(
    "Carter BloodCare: Mansfield Donor Center",
    "920, 210 US-287 N Suite, Mansfield, TX 76063, U.S.",
    "+1 817-539-0244"
  ),
  createData(
    "American Red Cross Blood Donation Center",
    "Blood donation center in Dearborn, Michigan, U.S.",
    "+1 800-733-2767"
  ),
  createData(
    "American Red Cross Blood Donor Center",
    "100 Promenade Pkwy, Fayetteville, GA 30214, U.S.",
    "+1 770-308-0483"
  ),
  createData(
    "Howell Donor Center - NYBC",
    "4068 U.S. 9, Howell Township, NJ 07731, U.S.",
    "+1 800-933-2566"
  ),
  createData(
    "Lifeblood Bartlet Donor Center",
    "7505 US-64, Bartlett, TN 38133, U.S.",
    "+1 901-271-1220"
  ),
  createData(
    "Carter BloodCare: Mansfield Donor Center",
    "920, 210 US-287 N Suite, Mansfield, TX 76063, U.S.",
    "+1 817-539-0244"
  ),
  createData(
    "American Red Cross Blood Donation Center",
    "Blood donation center in Dearborn, Michigan, U.S.",
    "+1 800-733-2767"
  ),
  createData(
    "American Red Cross Blood Donor Center",
    "100 Promenade Pkwy, Fayetteville, GA 30214, U.S.",
    "+1 770-308-0483"
  ),
  createData(
    "Howell Donor Center - NYBC",
    "4068 U.S. 9, Howell Township, NJ 07731, U.S.",
    "+1 800-933-2566"
  ),
  createData(
    "Lifeblood Bartlet Donor Center",
    "7505 US-64, Bartlett, TN 38133, U.S.",
    "+1 901-271-1220"
  ),
  createData(
    "Carter BloodCare: Mansfield Donor Center",
    "920, 210 US-287 N Suite, Mansfield, TX 76063, U.S.",
    "+1 817-539-0244"
  ),
];

function FindDoner() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.Paper}>
      <Typography variant="h3" className={classes.text}>Blood Donation Center</Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.Address}</TableCell>
              <TableCell>{row.PhoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FindDoner;
