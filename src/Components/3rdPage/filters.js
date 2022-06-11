import React, { useEffect, useState } from "react";
import axios from "axios";

import "./filters.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const Filters = () => {
  const [row1, setrow1] = useState([]);
  const [file, setFile] = useState("");

  const showdata1 = async () => {
    try {
      await axios
        .get("http://localhost:9045/api/CSVData/getCSVData")
        .then((data) => {
          console.log(data.data.result);
          setrow1(data.data.result);
          console.log(row1);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handlesubmit1 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("excel", file);
    axios
      .post("http://localhost:9045/api/excelData/postexcelData", formData)
      .then((response) => {
        console.log(response.formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
      height: 27,
      width: 27,
      backgroundColor: "#fff",
      border: "1px solid currentColor",
      "&:hover": {
        boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
      },
      "& .airbnb-bar": {
        height: 9,
        width: 1,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    "& .MuiSlider-track": {
      height: 3,
    },
    "& .MuiSlider-rail": {
      color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: 3,
    },
  }));
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }

  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };
  return (
    <div className="Filters">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <form enctype="multipart/form-data">
            <label for="excel">BrowseFile</label>
            <input type="file" class="form-control" name="excel" required />
            <br></br>
            <Button size="small" type="submit" value="submit">
              Submit
            </Button>{" "}
          </form>{" "}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={showdata1}>
            Show Data
          </Button>
        </CardActions>
      </Card>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper elevation={3} className="paper">
            <Typography gutterBottom>Airbnb</Typography>
            <AirbnbSlider
              components={{ Thumb: AirbnbThumbComponent }}
              getAriaLabel={(index) =>
                index === 0 ? "Minimum price" : "Maximum price"
              }
              defaultValue={[20, 40]}
            />
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-multiple-checkbox-label">
                Choose Brand
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={3} className="paper">
            <div class="MuiBox-root css-1f19gdh">
              <div class="MuiTableContainer-root css-1r8h6m1">
                <table role="table" class="MuiTable-root css-11rbhr">
                  <thead class="MuiBox-root css-1ircn5c">
                    <tr class="MuiTableRow-root css-1kuqfbs" role="row">
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Region
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Country
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Item Type
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Sales Channel
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          OrderPriority
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          OrderDate
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          OrderID
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          ShipDate
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Units Sold
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Unit Price
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Unit Cost
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Total Revenue
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Total Cost
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-w614i4"
                          colspan="1"
                          role="columnheader"
                        >
                          Total Profit
                        </div>
                      </th>
                      <th class="MuiBox-root css-1qbdd0n">
                        <div
                          class="MuiBox-root css-1kcj9bb"
                          colspan="1"
                          role="columnheader"
                        >
                          action
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="MuiTableBody-root css-1xnox0e" role="rowgroup">
                    {row1.reverse().map((rows) => (
                      <tr class="MuiTableRow-root css-1kuqfbs" role="row">
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-1xcjrx8">
                              <span class="MuiTypography-root MuiTypography-button css-j9ywh2">
                                {rows.Region}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-1xcjrx8">
                              <span class="MuiTypography-root MuiTypography-button css-j9ywh2">
                                {rows.Country}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              {rows["Item Type"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              {rows["Sales Channel"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              {rows["Order Priority"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              {rows["Order Date"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              {rows["Order ID"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              {rows["Ship Date"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              {rows["Units Sold"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              {rows["Unit Price"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              {rows["Unit Cost"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              {rows["Total Revenue"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              {rows["Total Cost"]}
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              {rows["Total Profit"]}
                            </a>
                          </div>
                        </td>

                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-cz6ae8">
                              <span class="MuiTypography-root MuiTypography-caption css-k33355">
                                80%
                              </span>
                              <div class="MuiBox-root css-j05n21">
                                <span
                                  class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-173c2mk"
                                  role="progressbar"
                                  aria-valuenow="80"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span
                                    class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-1jaua5b"
                                    style={{ transform: "translateX(-20%)" }}
                                  ></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ql19x3">
                            {/* <button
                            class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-h3pk101"
                            tabindex="0"
                            type="button"
                          >
                            <span
                              class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
                              aria-hidden="true"
                            >
                              <VisibilityIcon />
                            </span>
                            &nbsp;View
                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                          </button> */}
                            <button
                              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-1u89yhd"
                              tabindex="0"
                              type="button"
                            >
                              <span
                                class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
                                aria-hidden="true"
                              >
                                <EditIcon />
                              </span>
                              &nbsp;edit
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </button>

                            <div class="MuiBox-root css-nk2l5f">
                              <button
                                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-h3pk10"
                                tabindex="0"
                                type="button"
                              >
                                <span
                                  class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
                                  aria-hidden="true"
                                >
                                  <DeleteIcon />
                                </span>
                                &nbsp;delete
                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div class="MuiBox-root css-w6xrhl"></div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
