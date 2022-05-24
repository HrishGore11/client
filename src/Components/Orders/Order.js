import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

export default function Order() {
  return (
    <tr class="MuiTableRow-root css-1kuqfbs" role="row">
      <td class="MuiBox-root css-1nos2st">
        <div class="MuiBox-root css-ekdnj9">
          <div class="MuiBox-root css-1xcjrx8">
            <span class="MuiTypography-root MuiTypography-button css-j9ywh2">
              Spotify
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
            $14,000
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
          <button
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
          </button>
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
  );
}
