import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Product() {
  return (
    <tr class="MuiTableRow-root css-1kuqfbs" role="row">
      <td class="MuiBox-root css-1nos2st">
        <div class="MuiBox-root css-ekdnj9">
          <div class="MuiBox-root css-1xcjrx8">
            <div class="MuiBox-root css-1yu3g53">
              <span class="MuiTypography-root MuiTypography-button css-10g2m6j">
                Alexa Liras
              </span>
              <span class="MuiTypography-root MuiTypography-caption css-sv17n2">
                alexa@creative-tim.com
              </span>
            </div>
          </div>
        </div>
      </td>
      <td class="MuiBox-root css-1nos2st">
        <div class="MuiBox-root css-ekdnj9">
          <div class="MuiBox-root css-fhbeib">
            <span class="MuiTypography-root MuiTypography-caption css-14lhfkl">
              Programator
            </span>
            <span class="MuiTypography-root MuiTypography-caption css-sv17n2">
              Developer
            </span>
          </div>
        </div>
      </td>
      <td class="MuiBox-root css-15jcv17">
        <div class="MuiBox-root css-ekdnj9">
          <div class="MuiBox-root css-1tguw1f">
            <span class="MuiBadge-root css-1q4cxkd">
              <span class="MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight css-1thnnqk">
                offline
              </span>
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
            23/04/18
          </a>
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
