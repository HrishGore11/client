import "./dashboard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import GroupIcon from "@mui/icons-material/Group";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { Link } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div class="MuiDrawer-root MuiDrawer-docked css-achccn">
      <div class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-166o8s3">
        <div class="MuiBox-root css-1b98hg2">
          <div class="MuiBox-root css-g10jdo">
            <h6 class="MuiTypography-root MuiTypography-h6 css-i4qfl5">
              <span
                class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-kyh2wa"
                aria-hidden="true"
              >
                close
              </span>
            </h6>
          </div>
          <a sx="[object Object]" class="MuiBox-root css-cz6ae8" href="#/">
            <img
              class="MuiBox-root css-7txj2x"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAFjZJREFUeAHtnQu0HVV5x0kjIghEXgUEAyEm4gMCAUtdIEZcRbvqAyyFurpqwRgE0gIBqvVFtSIQqhIxvnhJl6xiC9UuH6AiIFLksYC8KYaHVgoloAYCAQkk6e9/mLmce3PPOXvuPefMd2b+31r/zLkz3+z59v/b/5nZeyZ7NtvMZgbMgBkwA2bADJgBM2AGzIAZMANmwAyYATNgBsyAGTADZsAMmAEzYAbMgBkwA2bADLzIwIQXf6b/2rhx40S8twHTwW5gSzCmstjP9gIDf8DiFRkZj7PckP32YmwMbGS3Z8BDYCV4csKECetZFrLCjRpxSBjvAHPB3uClQOUULot9bMMZ0IlHVjiRL+zmf5sYkECEdeAe8GXwQ0TyJMtke0myJ46IY2sW88D7wR6g0P7428xAGQzswEF3B6+lDX8BkTyVGoQu60lGwfI9HBwNpgCLAxJsA8GA2qrarNru4VlbTgo8WSCUplur2UD9jiL74W4zA6UzoDartqs2rLacZEUa+lRK3BNsnlSyncxAPAbUdvcEastJVkQgO1KiRqtsZmCQGVAbVltOsiIC0WjVxKRS7WQG4jKgNqy2nGRFBJJUoJ3MQJUYsECqlE3XpesM9GKoVk+BfwlWAz8NHj1lehCoh6yvAp1OUuLwQaCHXb7FhYRRTBxuBzSUm7+NMIpb8VW9EMivCeMSsAg8WzykWuyhRn8qOAZs0aHGz7H9RrAAdBJTh6Iqu1kc7g+OB+EFoqeUevdlCbBAIGEU0ysQq0ZZ32qVfJeCCa0car5eAnk5SH5CnspXL64gOrYawHoe6T+fGkjd/Hiaqyo3/ulQ94bPWF6061BuZTbDpdpxCpeF69yrS7bPdIVT4R3GyUBP2lyvBDLOunp3MxCDAQskRh4cRVAGLJCgiXFYMRiwQGLkwVEEZcACCZoYhxWDAQskRh4cRVAGLJCgiXFYMRiwQGLkwVEEZcACCZoYhxWDAQskRh4cRVAGLJCgiXFYMRiwQGLkwVEEZcACCZoYhxWDAQskRh4cRVAGLJCgiXFYMRiwQGLkwVEEZcACCZoYhxWDAQskRh4cRVAGLJCgiXFYMRjo1aQNIWrHf+bXFJOvA5q0+J6iH08JUYkgQcDltoTyerAGHlcECavnYVRSICRzK5j7C3A62AnoP/SvY/31LM8BK0lyT2bBoOzKGHyJtylgPvgjoOl1NrD+UZZXgC/C4+9ZVtYqJxCStzPZ0qRsx4E/BEpybn/Jj5ngOPwWkVzP/JgzM2IJP5rFUVxdDiSS5s9eiGPNCjkNv0/B4//yu5JWqT4IydqVLOmqoRn2lMRmcfBn4wyo24SLwQz8K1V/VbAb1iSOf6G8aaBZHDqEeNse6ItN/4R/V2czpMwwVpkGQpL0tV2J44NAyWtlqvO+4BtgP4tkOE0ZHwew9jKg+YNHnmRYNWT6UtN7wEnst8PQ2gr9qIRAmsTxAXKjSYw7meq9D/CVpImpTBzqa2hu5U7iyPfUyWgekEjU36uUDbxAmsRxLJlJEUeeQNV9BrhIy6xx5Ntqt8zqfxAVvxBo5K9I29AXm04Gc6smkiIkUP9YRjJeSUSngWNBEXHg3jDVf3/wVVBbkcCjOuR/DL4C1EcbS7uQSOYKVRLJWIiAg/KNJOxCFPlo1VjEkVdCHLwRLAS165Nk4ngTdf8SUN9sPG2iciIZDxlwWY5lZ6hTOPpsMB5x5BUQD7q9OB/sT/kDyUtemdRlJo5D8P882A90o965SE6g/IHvuHeDkNR8dMUvE4fud+eAdqNVRY+n24yDgR6Kzay6SDJxHJrV90CW3WwLEoly9CGOM9BDwN0kBT56a5A9nSN8AfwdSD073Y7vMqAvNXUyiWQW0CjOURyvcg9SqddmmThm8VMDFKniEH+LwQqQYhLJh8H5HG/3lB0i+gyMQCB5KgR+HGjcfVIimXfgp1dLJCi9ZrIOdDKJ5A3gE+C9VRNJJo43U7ezwF5A9e1k63G4DojH88B9IMWUp/eCT3NcPbgdOBsIgUCuEilxHAm2SWT5Yfz+GVwL/gt8LFumiES8aDRHIjmyKiLJxHEwddJtpAYm2j0EZHPDJI6fgo+AW8B3wbngfpBi2+J0FJBIBu45SXiBQOoUyG2czVmmiuMRfD8Hfsx7QmuBkqzbgzPAzSDlHaxcJJ/Ef+A77pk4NJT7eXAASL1y6OQyDywXj+Bxfn8b6MpcRCTvw18i6cagCkX1x0ILBDL3ggY10CNA6m2V3jRV8i4HT4CGkViJYgk4HdwFiojks/gP7BBwJg49If8SmAlSxXErvieDFRl//GxYLpKz+Sv1dktXEonkLOJJzWXjYGX+E1YgkDgVYiSOI0HqWecxfD8D/hX8hqQOe6W9SSQnsH0pSBXJLHx1RRq4h4nwqByrI/51xQ9Sci5eNLihB3+6cgzjKeNVIvkO0O2WfqfYK3DSG9VnD4pIUshKqXhXfSBvOgWeCY4AIjXFfoPTp8C3wG9HioN1DcuSvYg/ZgONyAxLfsNp0382Z9Uh4AIwMCLJxKG+xsVAfaqUfOfiOAn/ZSPFwbqGNYlEfRLxsvqFLR3/1ckuF8n2Hb1LdkghrK8hklQND6pD/m5QRBy62lwBWoqDbQ3Lkr6YP/4G3A1SRaJ7eL2OEf52KxOH+hqXgteBlFyLh9vAiWBpK3GwrWGZSHRi+hpYAH7b2ND+Hw0MSCT57VbojnsKae2r28WtJHUHijsVvAekikO3VaeBy0nY6ixp/NnelHygK8mfg2UgRSQvwU9P3C8Dr88aIT9jWRaXRHEVSBXHenzVIT8OLBE/LDua+Ab/h6OuIuqTKB+dLBfJX+M4n3jDXknCCASSRNrbwPFgEkgxnb3mgatI0lMpO4z0Yb+VrDsaLAUpjUJx7gMk5Khnv62JTX2DySDFnsfpRjAHPn4BhvXdUgpgn8fx062cRPJoyj74KM53Ab2WEqYtNsceKahdCUxXDpGWYhKHGul/kJxnUnZo5cP+Eoku+YtBikhU1AfArtESm8WzN7H9qYJMsOfwuR6ckPGQsMvoLuy/hi0XAY36rRrda5O1Gt1S/27aJlsCrIgkkK3gQ2c8dYg7mS7junJIHL/v5JyynXLuwe+vwJ0gVSS74RuJQ8JpDOFKICn2LE4/AXOp/70pO3TyoZy1+FwCUkUi/tTvfBUIZ5GSq8u8bpM6NU6J43TQNXFQVsMykRzLH+qodopD+yjewrcj2rGHpnhWA90KtrPn2PgjcDL1vq+dY9FtmUguZb8UkSheCXVMt8hFYyvqH0kgSqrO3iKrlT3ChjOA+hzjuq1qdQDK1ajWHHALUMe1lf2SDQ+BFCG1KqMX6xWz+lPtbnEU813g9G6LgzIb1iSSTh13nRh/Be5v7BjsnzACgdAn4OZKsATo7DbSHmTFR8GV+PZEHPkBKX8Fv08EPwWjxaIOqc6OD+Mb6gqSxaNRpflAfYKRJgH9HJyJb1evHCMPRPn57ZZE8vDI7fwtcfw3+Dd8U0a/Rimit6s0bBnJdObTS4WfBBqe3BJIDDpbLwA/gMiu9Dkoq61xnGV0eE/C6e/BYWB7oIQq0d8Cuoo9zTKcEZcmyfs6gW0HjgQ7g82BBjbuAAvwuZ1lz43jrCWWCzmQ7hDE5x5gC/AkkDguxuf7LENaKIFAlM7GN0Hoh1geBHYCvwPXgVXZdn72xzjeSmKZy9HeDqYD3SffDO5mW7RbK8J60YjvGWL/NGv+ExwAXg6Wg9vYpnr0zTje08TyTQ6ooeS3gB3Br4Fi0TKshRJIzhKk6YohlG7Eso4gvld6IGMIgNgl4kUZxlBC93bJYvkVJQoDY2H6IAPDmAOtFQMWSK3S7coWZcACKcqY/WvFgAVSq3S7skUZsECKMmb/WjFggdQq3a5sUQYskKKM2b9WDFggtUq3K1uUAQukKGP2rxUDFkit0u3KFmXAAinKmP1rxYAFUqt0u7JFGbBAijJm/1oxYIHUKt2ubFEGLJCijNm/VgxYILVKtytblAELpChj9q8VAxZIrdLtyhZlwAIpypj9a8VALwSiiRcEmxnoJwM9aXe9mrRBwU5kJgtNNRPBNMtgjgjxKIYis6JsgMuXRQk8iyNvkBFOhhOJqSdx9EIgmoPpHWAK0KRraphlmo6v+aE01Yzm2erFVZNiC5nEcShI4V8+fwI0l1SE2AmjIW7NCaZ5tjSJXk8aJ+WmmI6tE/FrgNpeVy0lQUUPOJkdPgg0XU6ZxOVxSyAvBaqrzjRlC5YQGrwoqSn8y2df8FoQIXbCaMSvGRp1AhTKznOe462IpauWkqCiB1RjFGzdY0B56kWuuhdhRUuKcsmuKL2u1qAzUFQgZV9KB51vx18+A4XacBGBPEPddN9pMwODzIDasNpykhURiL7N0ddJj5NqYCczUIwBtWG15SQrIpAHKHE5SFZfUgR2MgP9Y0BtV21YbTnJighE3+VYCBaD0T4qk3RAO5mBkhhQm1XbVRtO/sZM8tAh09fzMHejPrqij6FIWG8AevAWZWyeUIYsYkxDwVX8R6FOcB+4UDz5lUNt93a15dTjjqkhIZQ3cYDjwQywDZDQkg+Kby9NDwP1NSh9MKZT/fQ9xOSzCb69tvyEpS9ZRTK95qIn+e1M+X8K6EtSEQZzlHvxqC9Z6bN+FyKMW1gWsk4NqGVhiET7Tgd7gK1bOvZ3wwYOtyM4BhwKOj2wvBWfG4Ge+pdtuiqrIcokWtUlgkkYh4EDOwSjk83PwBVAIlF9yjYJ9n/AyiJXjbKD7unxEe5O4CKgb+N1snNwyBtlT+Ma1MLFD1jQiUi2i++vAL33VhmLoPJuk6kznuqVcnXUFUa3ZLbWDIjPTlfifG/dIsq/MlZFgVQmOa5I+QxYIOXnwBEEZsACCZwch1Y+AxZI+TlwBIEZsEACJ8ehlc+ABVJ+DhxBYAYskMDJcWjlM2CBlJ8DRxCYAQskcHIcWvkMWCDl58ARBGbAAgmcHIdWPgMWSPk5cASBGbBAAifHoZXPgAVSfg4cQWAGLJDAyXFo5TNggZSfA0cQmAELJHByHFr5DFgg5efAEQRmwAIJnByHVj4DFkj5OXAEgRmwQLqYHGb0CMMnsegTeCkTV3SRgeoVlU9UVr2a9alGNEJxOAlobrBt+fsxlmuZh0kTlvXdOL5i0aR5O4Pf8bfiWEM80SajI6z4ZoGMI0c0Pk2HMwOcAvYGmvJmNbiabZfRKB/hd1+M4+nqtQs4CeibhhKJJqBbDi5g+3LiiTBBHuEMjlkg48vVIex+LtgfNHOpeYv3o1HOY/kIDbOn07Jm4pjOsT4H3gy2BbkplqngTHBDvtLLNAbC3DOnhRvHi0apM/SHwUzQLA4FqdkFjwALwG749qwvkJUtcXwRvB00i4M/G1e1g1j+Lb66DbQVYMACKUDWCFcJQ1+ebcWhbrdykexB42zlN6LY9D+zMqewxwXgMDBSqHlhWq9Y98tXeJnGQNeTlnbYSnhp0m71QdpdHbT93UBXklfToNv54pJumThezR5fBW8FrcSRF6pPJO+W/+FlGgOdSE0rpZ5eD1JtdYLVv2jX8PU99HcCzQE8h4a9arx9EspQWRoU0G2VxNHpRKcYNdP5Q8BWgIFOxBYoqnaui6jxvSBl+FQN+s/AR8Du2dmfn8Ut21cjZwvB20BKDjV6tRIsBbYCDKSQW6C4+rhyFVhDbc8HvwApItFV5lQgkUwei0iyfaawv447C6SYPj0mYSzMYk7Zxz4ZAxbIOJoCDe4adlf/4n6Q+lWlufhq9GvPIiLBV1ehqeBjQB8HSjEJ925wPrFen7KDfYYz4D7IcD4K/0XDu4TGq3t8NXp1mtWQO9mJOIj789j1Acpo+zWpTBzT8P8oeD9IMYlDDwnPofx/T9nBPpsy4CvIppwUXkMDvJSdzgP3gdQryRx8/wHshQBa5iETx2vw+wQoIo4V+FsckDAe8xVkPOw17SuR0Jj13tMZQM8bNMTbyWbjMAmcy75LKUP9hSFjncp4I1C/5V1DG9r/0Mja7WA+5V3d3tVbOzHQ8szVaUdv35QBGuSVrNXrHotA6ntPR+Gr27N9EMTQCSsTx4Gs11WmiDjuxP88iwMWumBDCelCWS7iBQa+zUIjVqeBA0AKx0fjp36MPiqqfoNOXDOB+hx6hpJiunJIHOcijh+k7GCfzgykJK9zKfYYYoDGuZ5G/p1shYZ1dbu15ZBD6x/HsEmd9S8DvaZyCkgVh27tbgMayv0+S1uXGLBAukRkczE00ucQyVWs0+vuugq8BaSI5H34qUOukbAZIMWexumHQH0OXUFsXWTAAukimc1F0Vg3IJKbWXdOtj5VJLq1SjWJ43qgPofFkcpaAT930guQVdSVRqshX4nkbHAD0LOJbpnE8RPwGXBXtwp1OcMZsECG89H1vzKR3ELBEole+eiGSNZSzrXgs+BOXa1Y2nrAgAXSA1JHFkkDlihuBfPBEjAekehZyY+ArhwSR+qDSdxtRRmwQIoyNkb/rCF/l93VJ9FzkrGIRM9W7gBngcUWByz02CyQHhPcXDwNWs8qvgfUwNVvGPbknL/b2bNs1BNy7aun7r5ytGOrS9s8itUlIlOLoWGvY3TravwljjOBHiZuDtqZxKFbNPU5brA42lHV3W0WSHf5TCqNBv48IvkxzrrN+keg961avbulq87PgfocN1kcsNBHs0D6SHbzobKGfi1C0QjUx8FBYAuQ3/ZqvUarNEyst3JvYmnrMwMWSJ8JH3k4Gv51iOQJ1uvVkn3ATkDieBSoQ67XR5axtJXAgAVSAukjD4kA7kAks1l/ONgXSCDqxF/HNnfGIaIss0DKYn7EcRGChnD1oqFfNhzBTZl/5ve7ZcbgY5uBsAxYIGFT48AiMGCBRMiCYwjLgAUSNjUOLAIDFkiELDiGsAxYIGFT48AiMGCBRMiCYwjLgAUSNjUOLAIDFkiELDiGsAxYIGFT48AiMGCBRMiCYwjLgAUSNjUOLAIDFkiELDiGsAxYIGFT48AiMGCBRMiCYwjLgAUSNjUOLAIDFkiELDiGsAxYIGFT48AiMFB3gWwkCYKtNQP6//G15aju/yf9ZSR/EhMmtJqTqnWzqc+WramqpiOqpdVdIHuTdX3ZKfV7gnVsJPrwz7Q6Vlx1rrtA9LGayUC3EbbRGdBtuObqqqXVXSDbkXXBZgZGZaCqnXR9ZdbWfwYqx3sVBaIRl1qPvPRfF0NH1CyQlRrxqqJA1OFeA9yvGGq3ffkhvjXHcJFvnvQlsPEcpIoCeQpC7gNj+YLTeLis+74ShnjXjPSVsSoKRN/T0Kzo+mBmpc5mgVudeF4CxHulhswrJxAmgdY98D3gcqBPCFTqnpj6RDP1Ox4A3wT3ZvxHi3HM8VROIGKCJKkPcg34BpBY/AkBSOiB6Tb2brAQXAPvur2tlFVuWC7PDq+PqG6vBLPAwWAy2ApMBLbxMaATjvoaD4KfAZ2M1lTt6kGdNqusQFS5TCQShJ4E7wIkkEpeNalXP00jVhLIKvAYwvCASD/Z97HMgBkwA2bADJgBM2AGzIAZMANmwAyYATNgBsyAGTADZsAMmAEzYAbMgBkwA2bADJTGwP8DGJwzYPBu7Q0AAAAASUVORK5CYII="
              alt="Brand"
            />
            <div class="MuiBox-root css-1clnuci">
              <h6 class="MuiTypography-root MuiTypography-button css-1mlmzpc">
                Inventory Management
              </h6>
            </div>
          </a>
        </div>
        <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-light css-6vm7vh" />
        <ul class="MuiList-root MuiList-padding css-zws9p5">
          <Link class="" href="/Home">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    <DashboardIcon />
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Dashboard
                  </span>
                </div>
              </div>
            </li>
          </Link>
          <Link class="" href="/Products">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    <CategoryIcon />
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Products
                  </span>
                </div>
              </div>
            </li>
          </Link>
          <Link class="" href="/Orders">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    <LocalMallIcon />
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Orders
                  </span>
                </div>
              </div>
            </li>
          </Link>
          <Link class="" href="/Customers">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    <GroupIcon />
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Customers
                  </span>
                </div>
              </div>
            </li>
          </Link>
          {/* <a class="" href="#/notifications">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    notifications
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Notifications
                  </span>
                </div>
              </div>
            </li>
          </a>
          <a class="" href="#/profile">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    person
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Profile
                  </span>
                </div>
              </div>
            </li>
          </a> */}
          <a class="" href="/Login">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    <LoginIcon />
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Sign In
                  </span>
                </div>
              </div>
            </li>
          </a>
          <Link class="" href="/Signup">
            <li class="MuiListItem-root MuiListItem-padding css-13sbe1j">
              <div class="MuiBox-root css-mvs481">
                <div class="MuiListItemIcon-root css-13slygp">
                  <span
                    class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeSmall css-c6zp6d"
                    aria-hidden="true"
                  >
                    <PersonAddAltRoundedIcon />
                  </span>
                </div>
                <div class="MuiListItemText-root css-1siuh5p">
                  <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u">
                    Sign Up
                  </span>
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
