import "./Orders.css";
import Order from "./Order";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

export default function Orders() {
  return (
    <div class="MuiBox-root css-aim41u">
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionSticky css-lbx5nu">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-nof13">
          <div class="MuiBox-root css-1n8f1nf">
            <div class="MuiBox-root css-1fdwtd7">
              <nav class="MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root css-uohygl">
                <ol class="MuiBreadcrumbs-ol css-nhb8h9">
                  <li class="MuiBreadcrumbs-li">
                    <Link to="/Home">
                      <span class="MuiTypography-root MuiTypography-body2 css-12axuq1">
                        <span
                          class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
                          aria-hidden="true"
                        >
                          <HomeIcon />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li
                    aria-hidden="true"
                    class="MuiBreadcrumbs-separator css-1csyvuc"
                  >
                    /
                  </li>
                  <li class="MuiBreadcrumbs-li">
                    <span class="MuiTypography-root MuiTypography-button css-md43ih">
                      Orders
                    </span>
                  </li>
                </ol>
              </nav>
              <h6 class="MuiTypography-root MuiTypography-h6 MuiTypography-noWrap css-krrgm2">
                Orders
              </h6>
            </div>
          </div>
          <div class="MuiBox-root css-1lybv8m">
            <div class="MuiBox-root css-10fw84t">
              <div class="MuiFormControl-root MuiTextField-root css-1675v7s">
                <label
                  class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1hiu5rg"
                  data-shrink="false"
                  for="mui-34"
                  id="mui-34-label"
                >
                  Search Order here
                </label>
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1ij7x0a">
                  <input
                    aria-invalid="false"
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1pvpzft"
                    value=""
                    id="mui-34"
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-at8z4h"
                  >
                    <legend class="css-173wfxe">
                      <span>Search here</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="MuiBox-root css-5fx0ti">
              <a href="#/authentication/sign-in/basic">
                <button
                  class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1b8wzv7"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-15v3pu7"
                    aria-hidden="true"
                  >
                    <AccountCircleIcon />
                  </span>
                </button>
              </a>
              {/* <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-u2vdid"
                tabindex="0"
                type="button"
              > */}
              {/* <span
                  class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeMedium css-wbf7z4"
                  aria-hidden="true"
                >
                  menu
                </span>
              </button>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-1ghcb7i"
                tabindex="0"
                type="button"
              > */}
            </div>
          </div>
        </div>
      </header>
      <div class="MuiBox-root css-19ho8hn">
        <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6 css-sayu3r">
          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1uo6sxl">
            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-sa3w6d">
              <div class="MuiBox-root css-99a237">
                {/* <h6 class="MuiTypography-root MuiTypography-h6 css-11c9emy">
                  Orders Table
                </h6>
                <button
                  class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButtonBase-root css-139fp5x"
                  tabindex="0"
                  type="button"
                >
                  view all<span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button> */}
                <Grid container spacing={4}>
                  <Grid item xs={10}>
                    <h6 class="MuiTypography-root MuiTypography-h6 css-11c9emy">
                      Orders Table
                    </h6>
                  </Grid>
                  <Grid item xs={2}>
                    <button
                      class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButtonBase-root css-139fp5x"
                      tabindex="0"
                      type="button"
                    >
                      ADD &nbsp;
                      <AddIcon />
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                  </Grid>
                </Grid>
              </div>
              <div class="MuiBox-root css-1f19gdh">
                <div class="MuiTableContainer-root css-1r8h6m1">
                  <table role="table" class="MuiTable-root css-11rbhr">
                    <thead class="MuiBox-root css-1ircn5c">
                      <tr class="MuiTableRow-root css-1kuqfbs" role="row">
                        <th class="MuiBox-root css-11ev4cw">
                          <div
                            class="MuiBox-root css-w614i4"
                            colspan="1"
                            role="columnheader"
                          >
                            Orders
                          </div>
                        </th>
                        <th class="MuiBox-root css-1qbdd0n">
                          <div
                            class="MuiBox-root css-w614i4"
                            colspan="1"
                            role="columnheader"
                          >
                            budget
                          </div>
                        </th>
                        <th class="MuiBox-root css-1qbdd0n">
                          <div
                            class="MuiBox-root css-1kcj9bb"
                            colspan="1"
                            role="columnheader"
                          >
                            status
                          </div>
                        </th>
                        <th class="MuiBox-root css-1qbdd0n">
                          <div
                            class="MuiBox-root css-1kcj9bb"
                            colspan="1"
                            role="columnheader"
                          >
                            completion
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
                    <tbody
                      class="MuiTableBody-root css-1xnox0e"
                      role="rowgroup"
                    >
                      <Order />
                    </tbody>
                  </table>
                  <div class="MuiBox-root css-w6xrhl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
