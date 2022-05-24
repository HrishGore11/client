import "./Products.css";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
export default function Products() {
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
                      Inventory
                    </span>
                  </li>
                </ol>
              </nav>
              <h6 class="MuiTypography-root MuiTypography-h6 MuiTypography-noWrap css-krrgm2">
                Inventory
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
                  Search Product here
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
                <Grid container spacing={4}>
                  <Grid item xs={10}>
                    <h6 class="MuiTypography-root MuiTypography-h6 css-11c9emy">
                      Inventory List
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
                        <th class="MuiBox-root css-1p0dxn5">
                          <div
                            class="MuiBox-root css-w614i4"
                            colspan="1"
                            role="columnheader"
                          >
                            Product Name / ID
                          </div>
                        </th>
                        <th class="MuiBox-root css-1qbdd0n">
                          <div
                            class="MuiBox-root css-w614i4"
                            colspan="1"
                            role="columnheader"
                          >
                            Price/Stock
                          </div>
                        </th>
                        <th class="MuiBox-root css-1qbdd0n">
                          <div
                            class="MuiBox-root css-1kcj9bb"
                            colspan="1"
                            role="columnheader"
                          >
                            Inventory Value
                          </div>
                        </th>
                        <th class="MuiBox-root css-1qbdd0n">
                          <div
                            class="MuiBox-root css-1kcj9bb"
                            colspan="1"
                            role="columnheader"
                          >
                            Vendor Name
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
                      <Product />
                    </tbody>
                  </table>
                  <div class="MuiBox-root css-w6xrhl"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1uo6sxl">
            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-sa3w6d">
              <div class="MuiBox-root css-99a237">
                <h6 class="MuiTypography-root MuiTypography-h6 css-11c9emy">
                  Projects Table
                </h6>
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
                            project
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
                      <tr class="MuiTableRow-root css-1kuqfbs" role="row">
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-1xcjrx8">
                              <div
                                class="MuiAvatar-root MuiAvatar-rounded css-sksax1"
                                name="Asana"
                              >
                                <img
                                  src="/material-dashboard-react/static/media/logo-asana.d758f410d82760a61d1eabcb03409de6.svg"
                                  class="MuiAvatar-img css-u226zh"
                                />
                              </div>
                              <span class="MuiTypography-root MuiTypography-button css-j9ywh2">
                                Asana
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              $2,500
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              working
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-cz6ae8">
                              <span class="MuiTypography-root MuiTypography-caption css-k33355">
                                60%
                              </span>
                              <div class="MuiBox-root css-j05n21">
                                <span
                                  class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-d4m8au"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span
                                    class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-1jaua5b"
                                    style={{ transform: "translateX(-40%)" }}
                                  ></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-body1 css-y1wtqo"
                              href="#"
                            >
                              <span
                                class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
                                aria-hidden="true"
                              >
                                more_vert
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr class="MuiTableRow-root css-1kuqfbs" role="row">
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-1xcjrx8">
                              <div
                                class="MuiAvatar-root MuiAvatar-rounded css-sksax1"
                                name="Github"
                              >
                                <img
                                  src="/material-dashboard-react/static/media/github.067f80f311bc16bd0d1216457d09bdb3.svg"
                                  class="MuiAvatar-img css-u226zh"
                                />
                              </div>
                              <span class="MuiTypography-root MuiTypography-button css-j9ywh2">
                                Github
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              $5,000
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              done
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-cz6ae8">
                              <span class="MuiTypography-root MuiTypography-caption css-k33355">
                                100%
                              </span>
                              <div class="MuiBox-root css-j05n21">
                                <span
                                  class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-12bt7vc"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span
                                    class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-1jaua5b"
                                    style={{ transform: "translateX(0%)" }}
                                  ></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-body1 css-y1wtqo"
                              href="#"
                            >
                              <span
                                class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
                                aria-hidden="true"
                              >
                                more_vert
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr class="MuiTableRow-root css-1kuqfbs" role="row">
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-1xcjrx8">
                              <div
                                class="MuiAvatar-root MuiAvatar-rounded css-sksax1"
                                name="Atlassian"
                              >
                                <img
                                  src="/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg"
                                  class="MuiAvatar-img css-u226zh"
                                />
                              </div>
                              <span class="MuiTypography-root MuiTypography-button css-j9ywh2">
                                Atlassian
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-1nos2st">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-button css-pyw3di"
                              href="#"
                            >
                              $3,400
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-caption css-k33355"
                              href="#"
                            >
                              canceled
                            </a>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <div class="MuiBox-root css-cz6ae8">
                              <span class="MuiTypography-root MuiTypography-caption css-k33355">
                                30%
                              </span>
                              <div class="MuiBox-root css-j05n21">
                                <span
                                  class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-rix94q"
                                  role="progressbar"
                                  aria-valuenow="30"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span
                                    class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-1jaua5b"
                                    style={{ transform: "translateX(-100%)" }}
                                  ></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="MuiBox-root css-15jcv17">
                          <div class="MuiBox-root css-ekdnj9">
                            <a
                              class="MuiTypography-root MuiTypography-body1 css-y1wtqo"
                              href="#"
                            >
                              <span
                                class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
                                aria-hidden="true"
                              >
                                more_vert
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> 
                   <div class="MuiBox-root css-w6xrhl"></div>
                </div> 
              </div>
            </div>
          </div>*/}
        </div>
      </div>
      <div class="MuiBox-root css-14x1f45">
        <div class="MuiBox-root css-14byaag">
          © 2022, made with
          {/* <div class="MuiBox-root css-1hbhp6h">
            <span
              class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds"
              aria-hidden="true"
            >
              favorite
            </span>
          </div> */}
          by
          {/* <a
            class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1qeofn3"
            href="https://www.creative-tim.com/"
            target="_blank"
          >
            <span class="MuiTypography-root MuiTypography-button css-1ac3nod">
              &nbsp;Creative Tim &nbsp;
            </span>
          </a> */}
          for a better web.
        </div>
        <ul class="MuiBox-root css-9ecu6">
          {/* <li class="MuiBox-root css-mnv3sn">
            <a
              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1qeofn3"
              href="https://www.creative-tim.com/"
              target="_blank"
            >
              <span class="MuiTypography-root MuiTypography-button css-v4qhfh">
                Creative Tim
              </span>
            </a>
          </li> */}
          {/* <li class="MuiBox-root css-mnv3sn">
            <a
              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1qeofn3"
              href="https://www.creative-tim.com/presentation"
              target="_blank"
            >
              <span class="MuiTypography-root MuiTypography-button css-v4qhfh">
                About Us
              </span>
            </a>
          </li> */}
          {/* <li class="MuiBox-root css-mnv3sn">
            <a
              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1qeofn3"
              href="https://www.creative-tim.com/blog"
              target="_blank"
            >
              <span class="MuiTypography-root MuiTypography-button css-v4qhfh">
                Blog
              </span>
            </a>
          </li> */}
          {/* <li class="MuiBox-root css-mnv3sn">
            <a
              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1qeofn3"
              href="https://www.creative-tim.com/license"
              target="_blank"
            >
              <span class="MuiTypography-root MuiTypography-button css-v4qhfh">
                License
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
