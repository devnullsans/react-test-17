import HeaderToggleAction from "./HeaderToggleAction";
import HeaderToggleNotification from "./HeaderToggleNotification";
import HeaderToggleSearch from "./HeaderToggleSearch";
import HeaderToggleTheme from "./HeaderToggleTheme";
import NavButtonHelpCenter from "./NavButtonHelpCenter";
import NavButtonSettings from "./NavButtonSettings";
import NavMenuChats from "./NavMenuChats";
import NavMenuDashboard from "./NavMenuDashboard";
import shoe from "./img/shoe.png";
import video from "./img/video.png";

export default function App() {
  return (
    <>
      {/* Sidebar */}
      <aside
        className="navbar navbar-vertical navbar-expand-lg"
        data-bs-theme="dark">
        <div className="container-fluid">
          <h1 className="navbar-brand navbar-brand-autodark">LOGO</h1>
          <div className="navbar-nav flex-row d-lg-none"></div>
          <div
            className="collapse navbar-collapse"
            id="sidebar-menu">
            <ul className="navbar-nav flex-grow-1 pt-lg-3">
              <NavMenuDashboard />
              <NavMenuDashboard />
              <NavMenuDashboard />
              <NavMenuDashboard />
              <NavMenuDashboard />
              <NavMenuDashboard />
              <NavMenuChats />
              <NavMenuChats />
              <NavMenuChats />
              <NavMenuChats />
              <NavMenuChats />
              <NavMenuChats />
            </ul>
            <div className="mb-2">
              <NavButtonHelpCenter />
              <NavButtonSettings />
            </div>
          </div>
        </div>
      </aside>
      <div className="page-wrapper">
        {/* Page header */}
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="navbar row g-2 align-items-center">
              <div className="col"></div>
              {/* Page title actions */}
              <div className="navbar-nav col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <HeaderToggleSearch />
                  <HeaderToggleTheme />
                  <HeaderToggleNotification />
                  <HeaderToggleAction />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page body */}
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="card col-12">
                <div className="card-header justify-content-between">
                  <div className="h1 mb-3">
                    File Manager{" "}
                    <svg
                      className="icon icon-tabler icon-tabler-info-circle-filled"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      />
                      <path
                        d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                        strokeWidth={0}
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="d-flex mb-2">
                    <a
                      href="#connect"
                      className="nav-link mx-2">
                      <b>Connect Storage</b>
                    </a>
                    <a
                      href="#addnew"
                      className="btn btn-indigo mx-2">
                      <svg
                        className="icon icon-tabler icon-tabler-plus"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                      </svg>
                      Add New
                    </a>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="avatar">
                              <svg
                                className="icon icon-tabler icon-tabler-affiliate-filled"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z"
                                  strokeWidth={0}
                                  fill="#afa4f8"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="h1 mb-3">Company Space</div>
                          </div>
                        </div>
                        <div className="d-flex mb-2">
                          <div>Storage</div>
                          <div className="ms-auto">
                            <span className="text-green d-inline-flex align-items-center lh-1">30GB / 100GB</span>
                          </div>
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "30%" }}
                            role="progressbar"
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="avatar">
                              <svg viewBox="0 0 87.3 78">
                                <path
                                  d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                                  fill="#0066da"
                                />
                                <path
                                  d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                                  fill="#00ac47"
                                />
                                <path
                                  d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                                  fill="#ea4335"
                                />
                                <path
                                  d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                                  fill="#00832d"
                                />
                                <path
                                  d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                                  fill="#2684fc"
                                />
                                <path
                                  d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                                  fill="#ffba00"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="h1 mb-3">Google Drive</div>
                          </div>
                        </div>
                        <div className="d-flex mb-2">
                          <div>Storage</div>
                          <div className="ms-auto">
                            <span className="text-green d-inline-flex align-items-center lh-1">12GB / 15GB</span>
                          </div>
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "80%" }}
                            role="progressbar"
                            aria-valuenow={12}
                            aria-valuemin={0}
                            aria-valuemax={15}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="avatar">
                              <svg
                                viewBox="0 0 43 40"
                                version="1.1"
                                height="40px">
                                <path
                                  d="m12.5 0l-12.5 8.1 8.7 7 12.5-7.8-8.7-7.3zm-12.5 21.9l12.5 8.2 8.7-7.3-12.5-7.7-8.7 6.8zm21.2 0.9l8.8 7.3 12.4-8.1-8.6-6.9-12.6 7.7zm21.2-14.7l-12.4-8.1-8.8 7.3 12.6 7.8 8.6-7zm-21.1 16.3l-8.8 7.3-3.7-2.5v2.8l12.5 7.5 12.5-7.5v-2.8l-3.8 2.5-8.7-7.3z"
                                  fill="#007EE5"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="h1 mb-3">Dropbox</div>
                          </div>
                        </div>
                        <div className="d-flex mb-2">
                          <div>Storage</div>
                          <div className="ms-auto">
                            <span className="text-green d-inline-flex align-items-center lh-1">12GB / 30GB</span>
                          </div>
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "40%" }}
                            role="progressbar"
                            aria-valuenow={12}
                            aria-valuemin={0}
                            aria-valuemax={30}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="avatar">
                              <svg viewBox="0 5.5 32 20.5">
                                <g id="STYLE_COLOR">
                                  <path
                                    d="M12.20245,11.19292l.00031-.0011,6.71765,4.02379,4.00293-1.68451.00018.00068A6.4768,6.4768,0,0,1,25.5,13c.14764,0,.29358.0067.43878.01639a10.00075,10.00075,0,0,0-18.041-3.01381C7.932,10.00215,7.9657,10,8,10A7.96073,7.96073,0,0,1,12.20245,11.19292Z"
                                    fill="#0364b8"
                                  />
                                  <path
                                    d="M12.20276,11.19182l-.00031.0011A7.96073,7.96073,0,0,0,8,10c-.0343,0-.06805.00215-.10223.00258A7.99676,7.99676,0,0,0,1.43732,22.57277l5.924-2.49292,2.63342-1.10819,5.86353-2.46746,3.06213-1.28859Z"
                                    fill="#0078d4"
                                  />
                                  <path
                                    d="M25.93878,13.01639C25.79358,13.0067,25.64764,13,25.5,13a6.4768,6.4768,0,0,0-2.57648.53178l-.00018-.00068-4.00293,1.68451,1.16077.69528L23.88611,18.19l1.66009.99438,5.67633,3.40007a6.5002,6.5002,0,0,0-5.28375-9.56805Z"
                                    fill="#1490df"
                                  />
                                  <path
                                    d="M25.5462,19.18437,23.88611,18.19l-3.80493-2.2791-1.16077-.69528L15.85828,16.5042,9.99475,18.97166,7.36133,20.07985l-5.924,2.49292A7.98889,7.98889,0,0,0,8,26H25.5a6.49837,6.49837,0,0,0,5.72253-3.41556Z"
                                    fill="#28a8ea"
                                  />
                                </g>
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="h1 mb-3">One Drive</div>
                          </div>
                        </div>
                        <div className="d-flex mb-2">
                          <div>Storage</div>
                          <div className="ms-auto">
                            <span className="text-green d-inline-flex align-items-center lh-1">12GB / 30GB</span>
                          </div>
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "40%" }}
                            role="progressbar"
                            aria-valuenow={12}
                            aria-valuemin={0}
                            aria-valuemax={30}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12">
                <div className="row g-2">
                  <div className="col">
                    <div className="card-header justify-content-around">
                      <a
                        className="nav-link"
                        href="./">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                          <svg
                            className="icon icon-tabler icon-tabler-category"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            />
                            <path d="M4 4h6v6h-6z" />
                            <path d="M14 4h6v6h-6z" />
                            <path d="M4 14h6v6h-6z" />
                            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          </svg>
                        </span>
                        <span className="nav-link-title">All Files</span>
                      </a>
                      <a
                        className="nav-link"
                        href="./">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                          <svg
                            className="icon icon-tabler icon-tabler-folder-open"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            />
                            <path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" />
                          </svg>
                        </span>
                        <span className="nav-link-title">Folder</span>
                      </a>
                      <a
                        className="nav-link"
                        href="./">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                          <svg
                            className="icon icon-tabler icon-tabler-photo"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            />
                            <path d="M15 8h.01" />
                            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                          </svg>
                        </span>
                        <span className="nav-link-title">Images</span>
                      </a>
                      <a
                        className="nav-link"
                        href="./">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                          <svg
                            className="icon icon-tabler icon-tabler-brand-zoom"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            />
                            <path d="M17.011 9.385v5.128l3.989 3.487v-12z" />
                            <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z" />
                          </svg>
                        </span>
                        <span className="nav-link-title">Videos</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="card-header justify-content-center">
                      <a
                        href="#search"
                        className="nav-link mx-2">
                        <svg
                          className="icon icon-tabler icon-tabler-search"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          />
                          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                          <path d="M21 21l-6 -6" />
                        </svg>{" "}
                        Search
                      </a>
                      <a
                        href="#category"
                        className="nav-link dropdown-toggle mx-2">
                        Category
                      </a>
                      <a
                        href="#search"
                        className="nav-link mx-2">
                        Sort{" "}
                        <svg
                          className="icon icon-tabler icon-tabler-sort-descending"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          />
                          <path d="M4 6l9 0" />
                          <path d="M4 12l7 0" />
                          <path d="M4 18l7 0" />
                          <path d="M15 15l3 3l3 -3" />
                          <path d="M18 6l0 12" />
                        </svg>
                      </a>
                      <a
                        href="#search"
                        className="nav-link bg-muted mx-2 p-1">
                        <svg
                          className="icon icon-tabler icon-tabler-category"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          />
                          <path d="M4 4h6v6h-6z" />
                          <path d="M14 4h6v6h-6z" />
                          <path d="M4 14h6v6h-6z" />
                          <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        </svg>
                      </a>
                      <a
                        href="#search"
                        className="nav-link mx-2">
                        <svg
                          className="icon icon-tabler icon-tabler-menu-2"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          />
                          <path d="M4 6l16 0" />
                          <path d="M4 12l16 0" />
                          <path d="M4 18l16 0" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body col-12">
                  <div className="d-flex justify-content-between">
                    <div className="h1 mb-3">
                      Folders{" "}
                      <svg
                        className="icon icon-tabler icon-tabler-info-circle-filled"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path
                          d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                          strokeWidth={0}
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="d-flex mb-2">
                      <a
                        href="#seeall"
                        className="nav-link">
                        See All
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-3">
                      <div className="row m-2">
                        <div className="col-auto">
                          <span className="avatar">
                            <svg
                              className="icon icon-tabler icon-tabler-folder-filled"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path
                                d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                                strokeWidth={0}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <strong>Brand Assets</strong>
                          </div>
                          <div className="text-muted">10 Items</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                      <div className="row m-2">
                        <div className="col-auto">
                          <span className="avatar">
                            <svg
                              className="icon icon-tabler icon-tabler-folder-filled"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path
                                d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                                strokeWidth={0}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <strong>Products</strong>
                          </div>
                          <div className="text-muted">10 Items</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                      <div className="row m-2">
                        <div className="col-auto">
                          <span className="avatar">
                            <svg
                              className="icon icon-tabler icon-tabler-folder-filled"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path
                                d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                                strokeWidth={0}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <strong>Videos</strong>
                          </div>
                          <div className="text-muted">10 Items</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                      <div className="row m-2">
                        <div className="col-auto">
                          <span className="avatar">
                            <svg
                              className="icon icon-tabler icon-tabler-folder-filled"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path
                                d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                                strokeWidth={0}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <strong>Banners</strong>
                          </div>
                          <div className="text-muted">10 Items</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                      <div className="row m-2">
                        <div className="col-auto">
                          <span className="avatar">
                            <svg
                              className="icon icon-tabler icon-tabler-folder-filled"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path
                                d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                                strokeWidth={0}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <strong>Campaign Shoot</strong>
                          </div>
                          <div className="text-muted">10 Items</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                      <div className="row m-2">
                        <div className="col-auto">
                          <span className="avatar">
                            <svg
                              className="icon icon-tabler icon-tabler-folder-filled"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path
                                d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                                strokeWidth={0}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="text-truncate">
                            <strong>GIF</strong>
                          </div>
                          <div className="text-muted">10 Items</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body col-12">
                  <div className="d-flex justify-content-between">
                    <div className="h1 mb-3">
                      Images{" "}
                      <svg
                        className="icon icon-tabler icon-tabler-info-circle-filled"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path
                          d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                          strokeWidth={0}
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="d-flex mb-2">
                      <a
                        href="#seeall"
                        className="nav-link">
                        See All
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={shoe}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Images_products_1</strong>
                          </div>
                          <div className="text-muted">
                            <span className="badge bg-green me-2" />
                            JPG . 456kb
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={shoe}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Images_products_1</strong>
                          </div>
                          <div className="text-muted">
                            <span className="badge bg-green me-2" />
                            JPG . 456kb
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={shoe}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Images_products_1</strong>
                          </div>
                          <div className="text-muted">JPG . 456kb</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={shoe}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Images_products_1</strong>
                          </div>
                          <div className="text-muted">JPG . 456kb</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={shoe}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Images_products_1</strong>
                          </div>
                          <div className="text-muted">
                            <span className="badge bg-green me-2" />
                            JPG . 456kb
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={shoe}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Images_products_1</strong>
                          </div>
                          <div className="text-muted">JPG . 456kb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body col-12">
                  <div className="d-flex justify-content-between">
                    <div className="h1 mb-3">
                      Videos{" "}
                      <svg
                        className="icon icon-tabler icon-tabler-info-circle-filled"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path
                          d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                          strokeWidth={0}
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="d-flex mb-2">
                      <a
                        href="#seeall"
                        className="nav-link">
                        See All
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={video}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                            <button className="play-button">
                              <svg
                                className="icon icon-tabler icon-tabler-player-play-filled"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                  strokeWidth={0}
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Product 1 Video</strong>
                          </div>
                          <div className="text-muted">
                            <span className="badge bg-green me-2" />
                            mp4 . 4mb
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={video}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                            <button className="play-button">
                              <svg
                                className="icon icon-tabler icon-tabler-player-play-filled"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                  strokeWidth={0}
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Product 1 Video</strong>
                          </div>
                          <div className="text-muted">
                            <span className="badge bg-green me-2" />
                            mp4 . 4mb
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={video}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                            <button className="play-button">
                              <svg
                                className="icon icon-tabler icon-tabler-player-play-filled"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                  strokeWidth={0}
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Product 1 Video</strong>
                          </div>
                          <div className="text-muted">mp4 . 4mb</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={video}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                            <button className="play-button">
                              <svg
                                className="icon icon-tabler icon-tabler-player-play-filled"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                  strokeWidth={0}
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Product 1 Video</strong>
                          </div>
                          <div className="text-muted">mp4 . 4mb</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={video}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                            <button className="play-button">
                              <svg
                                className="icon icon-tabler icon-tabler-player-play-filled"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                  strokeWidth={0}
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Product 1 Video</strong>
                          </div>
                          <div className="text-muted">
                            <span className="badge bg-green me-2" />
                            mp4 . 4mb
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                      <div className="row text-center p-1 m-2">
                        <div className="col-12">
                          <div className="card">
                            <img
                              src={video}
                              className="w-100 h-100 object-cover card-img-start"
                              alt="product"
                            />
                            <button className="play-button">
                              <svg
                                className="icon icon-tabler icon-tabler-player-play-filled"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                  strokeWidth={0}
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-truncate">
                            <strong>Product 1 Video</strong>
                          </div>
                          <div className="text-muted">mp4 . 4mb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
