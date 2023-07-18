export default function App() {
  return (
    <>
      {/* Sidebar */}
      <aside
        className="navbar navbar-vertical navbar-expand-lg"
        data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar-menu"
            aria-controls="sidebar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <h1 className="navbar-brand navbar-brand-autodark">
            <a href=".">
              <img
                src="./static/logo.svg"
                alt="Tabler"
                className="navbar-brand-image"
                width={110}
                height={32}
              />
            </a>
          </h1>
          <div className="navbar-nav flex-row d-lg-none">
            <div className="nav-item d-none d-lg-flex me-3">
              <div className="btn-list">
                <a
                  href="https://github.com/tabler/tabler"
                  className="btn"
                  target="_blank"
                  rel="noreferrer">
                  {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}
                  <svg
                    className="icon"
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
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                  Source code
                </a>
                <a
                  href="https://github.com/sponsors/codecalm"
                  className="btn"
                  target="_blank"
                  rel="noreferrer">
                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                  <svg
                    className="icon text-pink"
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
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  Sponsor
                </a>
              </div>
            </div>
            <div className="d-none d-lg-flex">
              <a
                href="?theme=dark"
                className="nav-link px-0 hide-theme-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                aria-label="Enable dark mode"
                data-bs-original-title="Enable dark mode">
                {/* Download SVG icon from http://tabler-icons.io/i/moon */}
                <svg
                  className="icon"
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
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
              </a>
              <a
                href="?theme=light"
                className="nav-link px-0 hide-theme-light"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                aria-label="Enable light mode"
                data-bs-original-title="Enable light mode">
                {/* Download SVG icon from http://tabler-icons.io/i/sun */}
                <svg
                  className="icon"
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
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                </svg>
              </a>
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <a
                  href="#"
                  className="nav-link px-0"
                  data-bs-toggle="dropdown"
                  tabIndex={-1}
                  aria-label="Show notifications">
                  {/* Download SVG icon from http://tabler-icons.io/i/bell */}
                  <svg
                    className="icon"
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
                    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <span className="badge bg-red" />
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Last updates</h3>
                    </div>
                    <div className="list-group list-group-flush list-group-hoverable">
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot status-dot-animated bg-red d-block" />
                          </div>
                          <div className="col text-truncate">
                            <a
                              href="#"
                              className="text-body d-block">
                              Example 1
                            </a>
                            <div className="d-block text-muted text-truncate mt-n1">
                              Change deprecated html tags to text decoration classes (#29604)
                            </div>
                          </div>
                          <div className="col-auto">
                            <a
                              href="#"
                              className="list-group-item-actions">
                              {/* Download SVG icon from http://tabler-icons.io/i/star */}
                              <svg
                                className="icon text-muted"
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
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot d-block" />
                          </div>
                          <div className="col text-truncate">
                            <a
                              href="#"
                              className="text-body d-block">
                              Example 2
                            </a>
                            <div className="d-block text-muted text-truncate mt-n1">
                              justify-content:between ⇒ justify-content:space-between (#29734)
                            </div>
                          </div>
                          <div className="col-auto">
                            <a
                              href="#"
                              className="list-group-item-actions show">
                              {/* Download SVG icon from http://tabler-icons.io/i/star */}
                              <svg
                                className="icon text-yellow"
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
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot d-block" />
                          </div>
                          <div className="col text-truncate">
                            <a
                              href="#"
                              className="text-body d-block">
                              Example 3
                            </a>
                            <div className="d-block text-muted text-truncate mt-n1">Update change-version.js (#29736)</div>
                          </div>
                          <div className="col-auto">
                            <a
                              href="#"
                              className="list-group-item-actions">
                              {/* Download SVG icon from http://tabler-icons.io/i/star */}
                              <svg
                                className="icon text-muted"
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
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot status-dot-animated bg-green d-block" />
                          </div>
                          <div className="col text-truncate">
                            <a
                              href="#"
                              className="text-body d-block">
                              Example 4
                            </a>
                            <div className="d-block text-muted text-truncate mt-n1">Regenerate package-lock.json (#29730)</div>
                          </div>
                          <div className="col-auto">
                            <a
                              href="#"
                              className="list-group-item-actions">
                              {/* Download SVG icon from http://tabler-icons.io/i/star */}
                              <svg
                                className="icon text-muted"
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
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link d-flex lh-1 text-reset p-0"
                data-bs-toggle="dropdown"
                aria-label="Open user menu">
                <span
                  className="avatar avatar-sm"
                  style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
                />
                <div className="d-none d-xl-block ps-2">
                  <div>Paweł Kuna</div>
                  <div className="mt-1 small text-muted">UI Designer</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a
                  href="#"
                  className="dropdown-item">
                  Status
                </a>
                <a
                  href="./profile.html"
                  className="dropdown-item">
                  Profile
                </a>
                <a
                  href="#"
                  className="dropdown-item">
                  Feedback
                </a>
                <div className="dropdown-divider" />
                <a
                  href="./settings.html"
                  className="dropdown-item">
                  Settings
                </a>
                <a
                  href="./sign-in.html"
                  className="dropdown-item">
                  Logout
                </a>
              </div>
            </div>
          </div>
          <div
            className="collapse navbar-collapse"
            id="sidebar-menu">
            <ul className="navbar-nav pt-lg-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="./">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/home */}
                    <svg
                      className="icon"
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
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                  </span>
                  <span className="nav-link-title">Home</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#navbar-base"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/package */}
                    <svg
                      className="icon"
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
                      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                      <path d="M12 12l8 -4.5" />
                      <path d="M12 12l0 9" />
                      <path d="M12 12l-8 -4.5" />
                      <path d="M16 5.25l-8 4.5" />
                    </svg>
                  </span>
                  <span className="nav-link-title">Interface</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <a
                        className="dropdown-item"
                        href="./accordion.html">
                        Accordion
                      </a>
                      <a
                        className="dropdown-item"
                        href="./blank.html">
                        Blank page
                      </a>
                      <a
                        className="dropdown-item"
                        href="./badges.html">
                        Badges
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./buttons.html">
                        Buttons
                      </a>
                      <div className="dropend">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#sidebar-cards"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="false"
                          role="button"
                          aria-expanded="false">
                          Cards
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <div className="dropdown-menu">
                          <a
                            href="./cards.html"
                            className="dropdown-item">
                            Sample cards
                          </a>
                          <a
                            href="./card-actions.html"
                            className="dropdown-item">
                            Card actions
                            <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                          </a>
                          <a
                            href="./cards-masonry.html"
                            className="dropdown-item">
                            Cards Masonry
                          </a>
                        </div>
                      </div>
                      <a
                        className="dropdown-item"
                        href="./colors.html">
                        Colors
                      </a>
                      <a
                        className="dropdown-item"
                        href="./datagrid.html">
                        Data grid
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./datatables.html">
                        Datatables
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./dropdowns.html">
                        Dropdowns
                      </a>
                      <a
                        className="dropdown-item"
                        href="./modals.html">
                        Modals
                      </a>
                      <a
                        className="dropdown-item"
                        href="./maps.html">
                        Maps
                      </a>
                      <a
                        className="dropdown-item"
                        href="./map-fullsize.html">
                        Map fullsize
                      </a>
                      <a
                        className="dropdown-item"
                        href="./maps-vector.html">
                        Vector maps
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./navigation.html">
                        Navigation
                      </a>
                      <a
                        className="dropdown-item"
                        href="./charts.html">
                        Charts
                      </a>
                      <a
                        className="dropdown-item"
                        href="./pagination.html">
                        {/* Download SVG icon from http://tabler-icons.io/i/pie-chart */}
                        Pagination
                      </a>
                    </div>
                    <div className="dropdown-menu-column">
                      <a
                        className="dropdown-item"
                        href="./placeholder.html">
                        Placeholder
                      </a>
                      <a
                        className="dropdown-item"
                        href="./steps.html">
                        Steps
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./stars-rating.html">
                        Stars rating
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./tabs.html">
                        Tabs
                      </a>
                      <a
                        className="dropdown-item"
                        href="./tables.html">
                        Tables
                      </a>
                      <a
                        className="dropdown-item"
                        href="./carousel.html">
                        Carousel
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./lists.html">
                        Lists
                      </a>
                      <a
                        className="dropdown-item"
                        href="./typography.html">
                        Typography
                      </a>
                      <a
                        className="dropdown-item"
                        href="./offcanvas.html">
                        Offcanvas
                      </a>
                      <a
                        className="dropdown-item"
                        href="./markdown.html">
                        Markdown
                      </a>
                      <a
                        className="dropdown-item"
                        href="./dropzone.html">
                        Dropzone
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./lightbox.html">
                        Lightbox
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./tinymce.html">
                        TinyMCE
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./inline-player.html">
                        Inline player
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <div className="dropend">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#sidebar-authentication"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="false"
                          role="button"
                          aria-expanded="false">
                          Authentication
                        </a>
                        <div className="dropdown-menu">
                          <a
                            href="./sign-in.html"
                            className="dropdown-item">
                            Sign in
                          </a>
                          <a
                            href="./sign-in-link.html"
                            className="dropdown-item">
                            Sign in link
                          </a>
                          <a
                            href="./sign-in-illustration.html"
                            className="dropdown-item">
                            Sign in with illustration
                          </a>
                          <a
                            href="./sign-in-cover.html"
                            className="dropdown-item">
                            Sign in with cover
                          </a>
                          <a
                            href="./sign-up.html"
                            className="dropdown-item">
                            Sign up
                          </a>
                          <a
                            href="./forgot-password.html"
                            className="dropdown-item">
                            Forgot password
                          </a>
                          <a
                            href="./terms-of-service.html"
                            className="dropdown-item">
                            Terms of service
                          </a>
                          <a
                            href="./auth-lock.html"
                            className="dropdown-item">
                            Lock screen
                          </a>
                        </div>
                      </div>
                      <div className="dropend">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#sidebar-error"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="false"
                          role="button"
                          aria-expanded="false">
                          {/* Download SVG icon from http://tabler-icons.io/i/file-minus */}
                          <svg
                            className="icon icon-inline me-1"
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
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 14l6 0" />
                          </svg>
                          Error pages
                        </a>
                        <div className="dropdown-menu">
                          <a
                            href="./error-404.html"
                            className="dropdown-item">
                            404 page
                          </a>
                          <a
                            href="./error-500.html"
                            className="dropdown-item">
                            500 page
                          </a>
                          <a
                            href="./error-maintenance.html"
                            className="dropdown-item">
                            Maintenance page
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="./form-elements.html">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg
                      className="icon"
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
                      <path d="M9 11l3 3l8 -8" />
                      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                  </span>
                  <span className="nav-link-title">Forms</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#navbar-extra"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/star */}
                    <svg
                      className="icon"
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
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  </span>
                  <span className="nav-link-title">Extra</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <a
                        className="dropdown-item"
                        href="./empty.html">
                        Empty page
                      </a>
                      <a
                        className="dropdown-item"
                        href="./cookie-banner.html">
                        Cookie banner
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./activity.html">
                        Activity
                      </a>
                      <a
                        className="dropdown-item"
                        href="./gallery.html">
                        Gallery
                      </a>
                      <a
                        className="dropdown-item"
                        href="./invoice.html">
                        Invoice
                      </a>
                      <a
                        className="dropdown-item"
                        href="./search-results.html">
                        Search results
                      </a>
                      <a
                        className="dropdown-item"
                        href="./pricing.html">
                        Pricing cards
                      </a>
                      <a
                        className="dropdown-item"
                        href="./pricing-table.html">
                        Pricing table
                      </a>
                      <a
                        className="dropdown-item"
                        href="./faq.html">
                        FAQ
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./users.html">
                        Users
                      </a>
                      <a
                        className="dropdown-item"
                        href="./license.html">
                        License
                      </a>
                    </div>
                    <div className="dropdown-menu-column">
                      <a
                        className="dropdown-item"
                        href="./logs.html">
                        Logs
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./music.html">
                        Music
                      </a>
                      <a
                        className="dropdown-item"
                        href="./photogrid.html">
                        Photogrid
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./tasks.html">
                        Tasks
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./uptime.html">
                        Uptime monitor
                      </a>
                      <a
                        className="dropdown-item"
                        href="./widgets.html">
                        Widgets
                      </a>
                      <a
                        className="dropdown-item"
                        href="./wizard.html">
                        Wizard
                      </a>
                      <a
                        className="dropdown-item"
                        href="./settings.html">
                        Settings
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./trial-ended.html">
                        Trial ended
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./job-listing.html">
                        Job listing
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="./page-loader.html">
                        Page loader
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item active dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#navbar-layout"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="true">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/layout-2 */}
                    <svg
                      className="icon"
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
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                    </svg>
                  </span>
                  <span className="nav-link-title">Layout</span>
                </a>
                <div className="dropdown-menu show">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      <a
                        className="dropdown-item"
                        href="./layout-horizontal.html">
                        Horizontal
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-boxed.html">
                        Boxed
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                      </a>
                      <a
                        className="dropdown-item active"
                        href="./layout-vertical.html">
                        Vertical
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-vertical-transparent.html">
                        Vertical transparent
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-vertical-right.html">
                        Right vertical
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-condensed.html">
                        Condensed
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-combo.html">
                        Combined
                      </a>
                    </div>
                    <div className="dropdown-menu-column">
                      <a
                        className="dropdown-item"
                        href="./layout-navbar-dark.html">
                        Navbar dark
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-navbar-sticky.html">
                        Navbar sticky
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-navbar-overlap.html">
                        Navbar overlap
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-rtl.html">
                        RTL mode
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-fluid.html">
                        Fluid
                      </a>
                      <a
                        className="dropdown-item"
                        href="./layout-fluid-vertical.html">
                        Fluid vertical
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="./icons.html">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/ghost */}
                    <svg
                      className="icon"
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
                      <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                      <path d="M10 10l.01 0" />
                      <path d="M14 10l.01 0" />
                      <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                    </svg>
                  </span>
                  <span className="nav-link-title">4158 icons</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#navbar-help"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {/* Download SVG icon from http://tabler-icons.io/i/lifebuoy */}
                    <svg
                      className="icon"
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
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M15 15l3.35 3.35" />
                      <path d="M9 15l-3.35 3.35" />
                      <path d="M5.65 5.65l3.35 3.35" />
                      <path d="M18.35 5.65l-3.35 3.35" />
                    </svg>
                  </span>
                  <span className="nav-link-title">Help</span>
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="https://tabler.io/docs"
                    target="_blank"
                    rel="noopener">
                    Documentation
                  </a>
                  <a
                    className="dropdown-item"
                    href="./changelog.html">
                    Changelog
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/tabler/tabler"
                    target="_blank"
                    rel="noopener">
                    Source code
                  </a>
                  <a
                    className="dropdown-item text-pink"
                    href="https://github.com/sponsors/codecalm"
                    target="_blank"
                    rel="noopener">
                    {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                    <svg
                      className="icon icon-inline me-1"
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
                      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    Sponsor project!
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="page-wrapper">
        {/* Page header */}
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                {/* Page pre-title */}
                <div className="page-pretitle">Overview</div>
                <h2 className="page-title">Vertical layout</h2>
              </div>
              {/* Page title actions */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <span className="d-none d-sm-inline">
                    <a
                      href="#"
                      className="btn">
                      New view
                    </a>
                  </span>
                  <a
                    href="#"
                    className="btn btn-primary d-none d-sm-inline-block"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-report">
                    {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                    <svg
                      className="icon"
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
                    Create new report
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary d-sm-none btn-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-report"
                    aria-label="Create new report">
                    {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                    <svg
                      className="icon"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page body */}
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Sales</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              className="dropdown-item active"
                              href="#">
                              Last 7 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 30 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h1 mb-3">75%</div>
                    <div className="d-flex mb-2">
                      <div>Conversion rate</div>
                      <div className="ms-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          7% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                          <svg
                            className="icon ms-1"
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
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: "75%" }}
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="75% Complete">
                        <span className="visually-hidden">75% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Revenue</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              className="dropdown-item active"
                              href="#">
                              Last 7 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 30 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">$4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                          <svg
                            className="icon ms-1"
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
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    id="chart-revenue-bg"
                    className="chart-sm"
                    style={{ minHeight: "40px" }}>
                    <div
                      id="apexcharts7lqzxlb6"
                      className="apexcharts-canvas apexcharts7lqzxlb6 apexcharts-theme-light"
                      style={{ width: "308px", height: "40px" }}>
                      <svg
                        id="SvgjsSvg1001"
                        width={308}
                        height={40}
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}>
                        <foreignObject
                          x={0}
                          y={0}
                          width={308}
                          height={40}>
                          <div
                            className="apexcharts-legend"
                            style={{ maxHeight: "20px" }}
                          />
                        </foreignObject>
                        <rect
                          id="SvgjsRect1006"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                        />
                        <g
                          id="SvgjsG1069"
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(-18, 0)"
                        />
                        <g
                          id="SvgjsG1003"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(0, 0)">
                          <defs id="SvgjsDefs1002">
                            <clipPath id="gridRectMask7lqzxlb6">
                              <rect
                                id="SvgjsRect1038"
                                width={314}
                                height={42}
                                x={-3}
                                y={-1}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMask7lqzxlb6" />
                            <clipPath id="nonForecastMask7lqzxlb6" />
                            <clipPath id="gridRectMarkerMask7lqzxlb6">
                              <rect
                                id="SvgjsRect1039"
                                width={312}
                                height={44}
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                          </defs>
                          <line
                            id="SvgjsLine1007"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={40}
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            strokeLinecap="butt"
                            className="apexcharts-xcrosshairs"
                            x={0}
                            y={0}
                            width={1}
                            height={40}
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <g
                            id="SvgjsG1046"
                            className="apexcharts-grid">
                            <g
                              id="SvgjsG1047"
                              className="apexcharts-gridlines-horizontal"
                              style={{ display: "none" }}>
                              <line
                                id="SvgjsLine1050"
                                x1={0}
                                y1={0}
                                x2={308}
                                y2={0}
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1051"
                                x1={0}
                                y1={8}
                                x2={308}
                                y2={8}
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1052"
                                x1={0}
                                y1={16}
                                x2={308}
                                y2={16}
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1053"
                                x1={0}
                                y1={24}
                                x2={308}
                                y2={24}
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1054"
                                x1={0}
                                y1={32}
                                x2={308}
                                y2={32}
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1055"
                                x1={0}
                                y1={40}
                                x2={308}
                                y2={40}
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              id="SvgjsG1048"
                              className="apexcharts-gridlines-vertical"
                              style={{ display: "none" }}
                            />
                            <line
                              id="SvgjsLine1057"
                              x1={0}
                              y1={40}
                              x2={308}
                              y2={40}
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                            <line
                              id="SvgjsLine1056"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2={40}
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                          </g>
                          <g
                            id="SvgjsG1040"
                            className="apexcharts-area-series apexcharts-plot-series">
                            <g
                              id="SvgjsG1041"
                              className="apexcharts-series"
                              seriesname="Profits"
                              rel={1}>
                              <path
                                id="SvgjsPath1044"
                                d="M 0 40 L 0 25.2C 3.717241379310345 25.2 6.90344827586207 26 10.620689655172415 26C 14.337931034482759 26 17.524137931034485 22.4 21.24137931034483 22.4C 24.958620689655174 22.4 28.144827586206898 28.8 31.862068965517242 28.8C 35.57931034482759 28.8 38.765517241379314 25.6 42.48275862068966 25.6C 46.2 25.6 49.38620689655173 30.4 53.10344827586207 30.4C 56.820689655172416 30.4 60.00689655172414 14 63.724137931034484 14C 67.44137931034483 14 70.62758620689655 27.6 74.34482758620689 27.6C 78.06206896551724 27.6 81.24827586206897 25.2 84.96551724137932 25.2C 88.68275862068965 25.2 91.86896551724139 24.4 95.58620689655173 24.4C 99.30344827586207 24.4 102.4896551724138 15.2 106.20689655172414 15.2C 109.92413793103448 15.2 113.11034482758622 19.6 116.82758620689656 19.6C 120.54482758620689 19.6 123.73103448275863 26 127.44827586206897 26C 131.16551724137932 26 134.35172413793103 23.6 138.06896551724137 23.6C 141.7862068965517 23.6 144.97241379310344 26 148.68965517241378 26C 152.40689655172412 26 155.59310344827585 29.2 159.3103448275862 29.2C 163.02758620689656 29.2 166.21379310344827 2.799999999999997 169.93103448275863 2.799999999999997C 173.64827586206897 2.799999999999997 176.8344827586207 18.8 180.55172413793105 18.8C 184.26896551724138 18.8 187.45517241379312 15.600000000000001 191.17241379310346 15.600000000000001C 194.8896551724138 15.600000000000001 198.07586206896553 29.2 201.79310344827587 29.2C 205.5103448275862 29.2 208.69655172413795 18.4 212.41379310344828 18.4C 216.13103448275862 18.4 219.31724137931036 22.8 223.0344827586207 22.8C 226.75172413793103 22.8 229.93793103448277 32.4 233.6551724137931 32.4C 237.37241379310345 32.4 240.55862068965519 21.6 244.27586206896552 21.6C 247.99310344827586 21.6 251.1793103448276 24.4 254.89655172413794 24.4C 258.6137931034483 24.4 261.8 15.2 265.51724137931035 15.2C 269.2344827586207 15.2 272.4206896551724 19.6 276.13793103448273 19.6C 279.85517241379307 19.6 283.04137931034484 26 286.7586206896552 26C 290.4758620689655 26 293.6620689655172 23.6 297.37931034482756 23.6C 301.0965517241379 23.6 304.28275862068966 13.2 308 13.2C 308 13.2 308 13.2 308 40M 308 13.2z"
                                fill="rgba(32,107,196,0.16)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMask7lqzxlb6)"
                                pathto="M 0 40 L 0 25.2C 3.717241379310345 25.2 6.90344827586207 26 10.620689655172415 26C 14.337931034482759 26 17.524137931034485 22.4 21.24137931034483 22.4C 24.958620689655174 22.4 28.144827586206898 28.8 31.862068965517242 28.8C 35.57931034482759 28.8 38.765517241379314 25.6 42.48275862068966 25.6C 46.2 25.6 49.38620689655173 30.4 53.10344827586207 30.4C 56.820689655172416 30.4 60.00689655172414 14 63.724137931034484 14C 67.44137931034483 14 70.62758620689655 27.6 74.34482758620689 27.6C 78.06206896551724 27.6 81.24827586206897 25.2 84.96551724137932 25.2C 88.68275862068965 25.2 91.86896551724139 24.4 95.58620689655173 24.4C 99.30344827586207 24.4 102.4896551724138 15.2 106.20689655172414 15.2C 109.92413793103448 15.2 113.11034482758622 19.6 116.82758620689656 19.6C 120.54482758620689 19.6 123.73103448275863 26 127.44827586206897 26C 131.16551724137932 26 134.35172413793103 23.6 138.06896551724137 23.6C 141.7862068965517 23.6 144.97241379310344 26 148.68965517241378 26C 152.40689655172412 26 155.59310344827585 29.2 159.3103448275862 29.2C 163.02758620689656 29.2 166.21379310344827 2.799999999999997 169.93103448275863 2.799999999999997C 173.64827586206897 2.799999999999997 176.8344827586207 18.8 180.55172413793105 18.8C 184.26896551724138 18.8 187.45517241379312 15.600000000000001 191.17241379310346 15.600000000000001C 194.8896551724138 15.600000000000001 198.07586206896553 29.2 201.79310344827587 29.2C 205.5103448275862 29.2 208.69655172413795 18.4 212.41379310344828 18.4C 216.13103448275862 18.4 219.31724137931036 22.8 223.0344827586207 22.8C 226.75172413793103 22.8 229.93793103448277 32.4 233.6551724137931 32.4C 237.37241379310345 32.4 240.55862068965519 21.6 244.27586206896552 21.6C 247.99310344827586 21.6 251.1793103448276 24.4 254.89655172413794 24.4C 258.6137931034483 24.4 261.8 15.2 265.51724137931035 15.2C 269.2344827586207 15.2 272.4206896551724 19.6 276.13793103448273 19.6C 279.85517241379307 19.6 283.04137931034484 26 286.7586206896552 26C 290.4758620689655 26 293.6620689655172 23.6 297.37931034482756 23.6C 301.0965517241379 23.6 304.28275862068966 13.2 308 13.2C 308 13.2 308 13.2 308 40M 308 13.2z"
                                pathfrom="M -1 40 L -1 40 L 10.620689655172415 40 L 21.24137931034483 40 L 31.862068965517242 40 L 42.48275862068966 40 L 53.10344827586207 40 L 63.724137931034484 40 L 74.34482758620689 40 L 84.96551724137932 40 L 95.58620689655173 40 L 106.20689655172414 40 L 116.82758620689656 40 L 127.44827586206897 40 L 138.06896551724137 40 L 148.68965517241378 40 L 159.3103448275862 40 L 169.93103448275863 40 L 180.55172413793105 40 L 191.17241379310346 40 L 201.79310344827587 40 L 212.41379310344828 40 L 223.0344827586207 40 L 233.6551724137931 40 L 244.27586206896552 40 L 254.89655172413794 40 L 265.51724137931035 40 L 276.13793103448273 40 L 286.7586206896552 40 L 297.37931034482756 40 L 308 40"
                              />
                              <path
                                id="SvgjsPath1045"
                                d="M 0 25.2C 3.717241379310345 25.2 6.90344827586207 26 10.620689655172415 26C 14.337931034482759 26 17.524137931034485 22.4 21.24137931034483 22.4C 24.958620689655174 22.4 28.144827586206898 28.8 31.862068965517242 28.8C 35.57931034482759 28.8 38.765517241379314 25.6 42.48275862068966 25.6C 46.2 25.6 49.38620689655173 30.4 53.10344827586207 30.4C 56.820689655172416 30.4 60.00689655172414 14 63.724137931034484 14C 67.44137931034483 14 70.62758620689655 27.6 74.34482758620689 27.6C 78.06206896551724 27.6 81.24827586206897 25.2 84.96551724137932 25.2C 88.68275862068965 25.2 91.86896551724139 24.4 95.58620689655173 24.4C 99.30344827586207 24.4 102.4896551724138 15.2 106.20689655172414 15.2C 109.92413793103448 15.2 113.11034482758622 19.6 116.82758620689656 19.6C 120.54482758620689 19.6 123.73103448275863 26 127.44827586206897 26C 131.16551724137932 26 134.35172413793103 23.6 138.06896551724137 23.6C 141.7862068965517 23.6 144.97241379310344 26 148.68965517241378 26C 152.40689655172412 26 155.59310344827585 29.2 159.3103448275862 29.2C 163.02758620689656 29.2 166.21379310344827 2.799999999999997 169.93103448275863 2.799999999999997C 173.64827586206897 2.799999999999997 176.8344827586207 18.8 180.55172413793105 18.8C 184.26896551724138 18.8 187.45517241379312 15.600000000000001 191.17241379310346 15.600000000000001C 194.8896551724138 15.600000000000001 198.07586206896553 29.2 201.79310344827587 29.2C 205.5103448275862 29.2 208.69655172413795 18.4 212.41379310344828 18.4C 216.13103448275862 18.4 219.31724137931036 22.8 223.0344827586207 22.8C 226.75172413793103 22.8 229.93793103448277 32.4 233.6551724137931 32.4C 237.37241379310345 32.4 240.55862068965519 21.6 244.27586206896552 21.6C 247.99310344827586 21.6 251.1793103448276 24.4 254.89655172413794 24.4C 258.6137931034483 24.4 261.8 15.2 265.51724137931035 15.2C 269.2344827586207 15.2 272.4206896551724 19.6 276.13793103448273 19.6C 279.85517241379307 19.6 283.04137931034484 26 286.7586206896552 26C 290.4758620689655 26 293.6620689655172 23.6 297.37931034482756 23.6C 301.0965517241379 23.6 304.28275862068966 13.2 308 13.2"
                                fill="none"
                                fillOpacity={1}
                                stroke="#206bc4"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={2}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMask7lqzxlb6)"
                                pathto="M 0 25.2C 3.717241379310345 25.2 6.90344827586207 26 10.620689655172415 26C 14.337931034482759 26 17.524137931034485 22.4 21.24137931034483 22.4C 24.958620689655174 22.4 28.144827586206898 28.8 31.862068965517242 28.8C 35.57931034482759 28.8 38.765517241379314 25.6 42.48275862068966 25.6C 46.2 25.6 49.38620689655173 30.4 53.10344827586207 30.4C 56.820689655172416 30.4 60.00689655172414 14 63.724137931034484 14C 67.44137931034483 14 70.62758620689655 27.6 74.34482758620689 27.6C 78.06206896551724 27.6 81.24827586206897 25.2 84.96551724137932 25.2C 88.68275862068965 25.2 91.86896551724139 24.4 95.58620689655173 24.4C 99.30344827586207 24.4 102.4896551724138 15.2 106.20689655172414 15.2C 109.92413793103448 15.2 113.11034482758622 19.6 116.82758620689656 19.6C 120.54482758620689 19.6 123.73103448275863 26 127.44827586206897 26C 131.16551724137932 26 134.35172413793103 23.6 138.06896551724137 23.6C 141.7862068965517 23.6 144.97241379310344 26 148.68965517241378 26C 152.40689655172412 26 155.59310344827585 29.2 159.3103448275862 29.2C 163.02758620689656 29.2 166.21379310344827 2.799999999999997 169.93103448275863 2.799999999999997C 173.64827586206897 2.799999999999997 176.8344827586207 18.8 180.55172413793105 18.8C 184.26896551724138 18.8 187.45517241379312 15.600000000000001 191.17241379310346 15.600000000000001C 194.8896551724138 15.600000000000001 198.07586206896553 29.2 201.79310344827587 29.2C 205.5103448275862 29.2 208.69655172413795 18.4 212.41379310344828 18.4C 216.13103448275862 18.4 219.31724137931036 22.8 223.0344827586207 22.8C 226.75172413793103 22.8 229.93793103448277 32.4 233.6551724137931 32.4C 237.37241379310345 32.4 240.55862068965519 21.6 244.27586206896552 21.6C 247.99310344827586 21.6 251.1793103448276 24.4 254.89655172413794 24.4C 258.6137931034483 24.4 261.8 15.2 265.51724137931035 15.2C 269.2344827586207 15.2 272.4206896551724 19.6 276.13793103448273 19.6C 279.85517241379307 19.6 283.04137931034484 26 286.7586206896552 26C 290.4758620689655 26 293.6620689655172 23.6 297.37931034482756 23.6C 301.0965517241379 23.6 304.28275862068966 13.2 308 13.2"
                                pathfrom="M -1 40 L -1 40 L 10.620689655172415 40 L 21.24137931034483 40 L 31.862068965517242 40 L 42.48275862068966 40 L 53.10344827586207 40 L 63.724137931034484 40 L 74.34482758620689 40 L 84.96551724137932 40 L 95.58620689655173 40 L 106.20689655172414 40 L 116.82758620689656 40 L 127.44827586206897 40 L 138.06896551724137 40 L 148.68965517241378 40 L 159.3103448275862 40 L 169.93103448275863 40 L 180.55172413793105 40 L 191.17241379310346 40 L 201.79310344827587 40 L 212.41379310344828 40 L 223.0344827586207 40 L 233.6551724137931 40 L 244.27586206896552 40 L 254.89655172413794 40 L 265.51724137931035 40 L 276.13793103448273 40 L 286.7586206896552 40 L 297.37931034482756 40 L 308 40"
                                fillRule="evenodd"
                              />
                              <g
                                id="SvgjsG1042"
                                className="apexcharts-series-markers-wrap">
                                <g className="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle1073"
                                    r={0}
                                    cx={0}
                                    cy={0}
                                    className="apexcharts-marker wccyt0pv no-pointer-events"
                                    stroke="#ffffff"
                                    fill="#206bc4"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1043"
                              className="apexcharts-datalabels"
                            />
                          </g>
                          <g
                            id="SvgjsG1049"
                            className="apexcharts-grid-borders"
                            style={{ display: "none" }}
                          />
                          <line
                            id="SvgjsLine1058"
                            x1={0}
                            y1={0}
                            x2={308}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1059"
                            x1={0}
                            y1={0}
                            x2={308}
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1060"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)">
                            <g
                              id="SvgjsG1061"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            />
                          </g>
                          <g
                            id="SvgjsG1070"
                            className="apexcharts-yaxis-annotations"
                          />
                          <g
                            id="SvgjsG1071"
                            className="apexcharts-xaxis-annotations"
                          />
                          <g
                            id="SvgjsG1072"
                            className="apexcharts-point-annotations"
                          />
                        </g>
                      </svg>
                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                        <div
                          className="apexcharts-tooltip-title"
                          style={{ fontFamily: "inherit", fontSize: "12px" }}
                        />
                        <div
                          className="apexcharts-tooltip-series-group"
                          style={{ order: 1 }}>
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(32, 107, 196)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{ fontFamily: "inherit", fontSize: "12px" }}>
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label" />
                              <span className="apexcharts-tooltip-text-y-value" />
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">New clients</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              className="dropdown-item active"
                              href="#">
                              Last 7 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 30 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">6,782</div>
                      <div className="me-auto">
                        <span className="text-yellow d-inline-flex align-items-center lh-1">
                          0% {/* Download SVG icon from http://tabler-icons.io/i/minus */}
                          <svg
                            className="icon ms-1"
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
                            <path d="M5 12l14 0" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      id="chart-new-clients"
                      className="chart-sm"
                      style={{ minHeight: "40px" }}>
                      <div
                        id="apexcharts66vnsif6"
                        className="apexcharts-canvas apexcharts66vnsif6 apexcharts-theme-light"
                        style={{ width: "260px", height: "40px" }}>
                        <svg
                          id="SvgjsSvg1074"
                          width={260}
                          height={40}
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="apexcharts-svg"
                          xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}>
                          <foreignObject
                            x={0}
                            y={0}
                            width={260}
                            height={40}>
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: "20px" }}
                            />
                          </foreignObject>
                          <rect
                            id="SvgjsRect1079"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                          />
                          <g
                            id="SvgjsG1144"
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(-18, 0)"
                          />
                          <g
                            id="SvgjsG1076"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(0, 0)">
                            <defs id="SvgjsDefs1075">
                              <clipPath id="gridRectMask66vnsif6">
                                <rect
                                  id="SvgjsRect1111"
                                  width={266}
                                  height={42}
                                  x={-3}
                                  y={-1}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMask66vnsif6" />
                              <clipPath id="nonForecastMask66vnsif6" />
                              <clipPath id="gridRectMarkerMask66vnsif6">
                                <rect
                                  id="SvgjsRect1112"
                                  width={264}
                                  height={44}
                                  x={-2}
                                  y={-2}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <line
                              id="SvgjsLine1080"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={40}
                              stroke="#b6b6b6"
                              strokeDasharray={3}
                              strokeLinecap="butt"
                              className="apexcharts-xcrosshairs"
                              x={0}
                              y={0}
                              width={1}
                              height={40}
                              fill="#b1b9c4"
                              filter="none"
                              fillOpacity="0.9"
                              strokeWidth={1}
                            />
                            <g
                              id="SvgjsG1122"
                              className="apexcharts-grid">
                              <g
                                id="SvgjsG1123"
                                className="apexcharts-gridlines-horizontal"
                                style={{ display: "none" }}>
                                <line
                                  id="SvgjsLine1126"
                                  x1={0}
                                  y1={0}
                                  x2={260}
                                  y2={0}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1127"
                                  x1={0}
                                  y1={8}
                                  x2={260}
                                  y2={8}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1128"
                                  x1={0}
                                  y1={16}
                                  x2={260}
                                  y2={16}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1129"
                                  x1={0}
                                  y1={24}
                                  x2={260}
                                  y2={24}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1130"
                                  x1={0}
                                  y1={32}
                                  x2={260}
                                  y2={32}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1131"
                                  x1={0}
                                  y1={40}
                                  x2={260}
                                  y2={40}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG1124"
                                className="apexcharts-gridlines-vertical"
                                style={{ display: "none" }}
                              />
                              <line
                                id="SvgjsLine1133"
                                x1={0}
                                y1={40}
                                x2={260}
                                y2={40}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine1132"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2={40}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              id="SvgjsG1113"
                              className="apexcharts-line-series apexcharts-plot-series">
                              <g
                                id="SvgjsG1114"
                                className="apexcharts-series"
                                seriesname="May"
                                data:longestseries="true"
                                rel={1}>
                                <path
                                  id="SvgjsPath1117"
                                  d="M 0 25.2C 3.137931034482759 25.2 5.8275862068965525 26 8.965517241379311 26C 12.103448275862071 26 14.793103448275865 22.4 17.931034482758623 22.4C 21.06896551724138 22.4 23.758620689655174 28.8 26.896551724137932 28.8C 30.03448275862069 28.8 32.724137931034484 25.6 35.862068965517246 25.6C 39 25.6 41.689655172413794 30.4 44.827586206896555 30.4C 47.96551724137932 30.4 50.65517241379311 14 53.793103448275865 14C 56.931034482758626 14 59.62068965517242 27.6 62.75862068965518 27.6C 65.89655172413794 27.6 68.58620689655173 25.2 71.72413793103449 25.2C 74.86206896551725 25.2 77.55172413793103 24.4 80.6896551724138 24.4C 83.82758620689656 24.4 86.51724137931035 15.2 89.65517241379311 15.2C 92.79310344827587 15.2 95.48275862068967 19.6 98.62068965517243 19.6C 101.75862068965519 19.6 104.44827586206897 26 107.58620689655173 26C 110.72413793103449 26 113.41379310344828 23.6 116.55172413793105 23.6C 119.68965517241381 23.6 122.3793103448276 26 125.51724137931036 26C 128.6551724137931 26 131.34482758620692 29.2 134.48275862068968 29.2C 137.62068965517244 29.2 140.31034482758622 2.799999999999997 143.44827586206898 2.799999999999997C 146.58620689655174 2.799999999999997 149.27586206896552 18.8 152.41379310344828 18.8C 155.55172413793105 18.8 158.24137931034483 15.600000000000001 161.3793103448276 15.600000000000001C 164.51724137931035 15.600000000000001 167.20689655172416 29.2 170.34482758620692 29.2C 173.48275862068968 29.2 176.17241379310346 18.4 179.31034482758622 18.4C 182.44827586206898 18.4 185.13793103448276 22.8 188.27586206896552 22.8C 191.41379310344828 22.8 194.1034482758621 38.4 197.24137931034485 38.4C 200.37931034482762 38.4 203.0689655172414 21.6 206.20689655172416 21.6C 209.34482758620692 21.6 212.0344827586207 24.4 215.17241379310346 24.4C 218.31034482758622 24.4 221.00000000000003 15.2 224.1379310344828 15.2C 227.27586206896555 15.2 229.96551724137933 19.6 233.1034482758621 19.6C 236.24137931034485 19.6 238.93103448275863 26 242.0689655172414 26C 245.20689655172416 26 247.89655172413796 23.6 251.03448275862073 23.6C 254.17241379310346 23.6 256.86206896551727 13.2 260 13.2"
                                  fill="none"
                                  fillOpacity={1}
                                  stroke="rgba(32,107,196,1)"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-line"
                                  index={0}
                                  clipPath="url(#gridRectMask66vnsif6)"
                                  pathto="M 0 25.2C 3.137931034482759 25.2 5.8275862068965525 26 8.965517241379311 26C 12.103448275862071 26 14.793103448275865 22.4 17.931034482758623 22.4C 21.06896551724138 22.4 23.758620689655174 28.8 26.896551724137932 28.8C 30.03448275862069 28.8 32.724137931034484 25.6 35.862068965517246 25.6C 39 25.6 41.689655172413794 30.4 44.827586206896555 30.4C 47.96551724137932 30.4 50.65517241379311 14 53.793103448275865 14C 56.931034482758626 14 59.62068965517242 27.6 62.75862068965518 27.6C 65.89655172413794 27.6 68.58620689655173 25.2 71.72413793103449 25.2C 74.86206896551725 25.2 77.55172413793103 24.4 80.6896551724138 24.4C 83.82758620689656 24.4 86.51724137931035 15.2 89.65517241379311 15.2C 92.79310344827587 15.2 95.48275862068967 19.6 98.62068965517243 19.6C 101.75862068965519 19.6 104.44827586206897 26 107.58620689655173 26C 110.72413793103449 26 113.41379310344828 23.6 116.55172413793105 23.6C 119.68965517241381 23.6 122.3793103448276 26 125.51724137931036 26C 128.6551724137931 26 131.34482758620692 29.2 134.48275862068968 29.2C 137.62068965517244 29.2 140.31034482758622 2.799999999999997 143.44827586206898 2.799999999999997C 146.58620689655174 2.799999999999997 149.27586206896552 18.8 152.41379310344828 18.8C 155.55172413793105 18.8 158.24137931034483 15.600000000000001 161.3793103448276 15.600000000000001C 164.51724137931035 15.600000000000001 167.20689655172416 29.2 170.34482758620692 29.2C 173.48275862068968 29.2 176.17241379310346 18.4 179.31034482758622 18.4C 182.44827586206898 18.4 185.13793103448276 22.8 188.27586206896552 22.8C 191.41379310344828 22.8 194.1034482758621 38.4 197.24137931034485 38.4C 200.37931034482762 38.4 203.0689655172414 21.6 206.20689655172416 21.6C 209.34482758620692 21.6 212.0344827586207 24.4 215.17241379310346 24.4C 218.31034482758622 24.4 221.00000000000003 15.2 224.1379310344828 15.2C 227.27586206896555 15.2 229.96551724137933 19.6 233.1034482758621 19.6C 236.24137931034485 19.6 238.93103448275863 26 242.0689655172414 26C 245.20689655172416 26 247.89655172413796 23.6 251.03448275862073 23.6C 254.17241379310346 23.6 256.86206896551727 13.2 260 13.2"
                                  pathfrom="M -1 40 L -1 40 L 8.965517241379311 40 L 17.931034482758623 40 L 26.896551724137932 40 L 35.862068965517246 40 L 44.827586206896555 40 L 53.793103448275865 40 L 62.75862068965518 40 L 71.72413793103449 40 L 80.6896551724138 40 L 89.65517241379311 40 L 98.62068965517243 40 L 107.58620689655173 40 L 116.55172413793105 40 L 125.51724137931036 40 L 134.48275862068968 40 L 143.44827586206898 40 L 152.41379310344828 40 L 161.3793103448276 40 L 170.34482758620692 40 L 179.31034482758622 40 L 188.27586206896552 40 L 197.24137931034485 40 L 206.20689655172416 40 L 215.17241379310346 40 L 224.1379310344828 40 L 233.1034482758621 40 L 242.0689655172414 40 L 251.03448275862073 40 L 260 40"
                                  fillRule="evenodd"
                                />
                                <g
                                  id="SvgjsG1115"
                                  className="apexcharts-series-markers-wrap">
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle1148"
                                      r={0}
                                      cx={0}
                                      cy={0}
                                      className="apexcharts-marker wdar1w01ui no-pointer-events"
                                      stroke="#ffffff"
                                      fill="#206bc4"
                                      fillOpacity={1}
                                      strokeWidth={2}
                                      strokeOpacity="0.9"
                                      default-marker-size={0}
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG1118"
                                className="apexcharts-series"
                                seriesname="April"
                                data:longestseries="true"
                                rel={2}>
                                <path
                                  id="SvgjsPath1121"
                                  d="M 0 2.799999999999997C 3.137931034482759 2.799999999999997 5.8275862068965525 18.4 8.965517241379311 18.4C 12.103448275862071 18.4 14.793103448275865 19.6 17.931034482758623 19.6C 21.06896551724138 19.6 23.758620689655174 30.4 26.896551724137932 30.4C 30.03448275862069 30.4 32.724137931034484 26 35.862068965517246 26C 39 26 41.689655172413794 26 44.827586206896555 26C 47.96551724137932 26 50.65517241379311 27.6 53.793103448275865 27.6C 56.931034482758626 27.6 59.62068965517242 13.2 62.75862068965518 13.2C 65.89655172413794 13.2 68.58620689655173 32.4 71.72413793103449 32.4C 74.86206896551725 32.4 77.55172413793103 22.8 80.6896551724138 22.8C 83.82758620689656 22.8 86.51724137931035 28.8 89.65517241379311 28.8C 92.79310344827587 28.8 95.48275862068967 25.6 98.62068965517243 25.6C 101.75862068965519 25.6 104.44827586206897 15.2 107.58620689655173 15.2C 110.72413793103449 15.2 113.41379310344828 15.600000000000001 116.55172413793105 15.600000000000001C 119.68965517241381 15.600000000000001 122.3793103448276 29.2 125.51724137931036 29.2C 128.6551724137931 29.2 131.34482758620692 24.4 134.48275862068968 24.4C 137.62068965517244 24.4 140.31034482758622 26 143.44827586206898 26C 146.58620689655174 26 149.27586206896552 23.6 152.41379310344828 23.6C 155.55172413793105 23.6 158.24137931034483 29.2 161.3793103448276 29.2C 164.51724137931035 29.2 167.20689655172416 26 170.34482758620692 26C 173.48275862068968 26 176.17241379310346 19.6 179.31034482758622 19.6C 182.44827586206898 19.6 185.13793103448276 21.6 188.27586206896552 21.6C 191.41379310344828 21.6 194.1034482758621 15.2 197.24137931034485 15.2C 200.37931034482762 15.2 203.0689655172414 25.2 206.20689655172416 25.2C 209.34482758620692 25.2 212.0344827586207 22.4 215.17241379310346 22.4C 218.31034482758622 22.4 221.00000000000003 18.8 224.1379310344828 18.8C 227.27586206896555 18.8 229.96551724137933 23.6 233.1034482758621 23.6C 236.24137931034485 23.6 238.93103448275863 14 242.0689655172414 14C 245.20689655172416 14 247.89655172413796 24.4 251.03448275862073 24.4C 254.17241379310346 24.4 256.86206896551727 25.2 260 25.2"
                                  fill="none"
                                  fillOpacity={1}
                                  stroke="rgba(102,115,130,1)"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={1}
                                  strokeDasharray={3}
                                  className="apexcharts-line"
                                  index={1}
                                  clipPath="url(#gridRectMask66vnsif6)"
                                  pathto="M 0 2.799999999999997C 3.137931034482759 2.799999999999997 5.8275862068965525 18.4 8.965517241379311 18.4C 12.103448275862071 18.4 14.793103448275865 19.6 17.931034482758623 19.6C 21.06896551724138 19.6 23.758620689655174 30.4 26.896551724137932 30.4C 30.03448275862069 30.4 32.724137931034484 26 35.862068965517246 26C 39 26 41.689655172413794 26 44.827586206896555 26C 47.96551724137932 26 50.65517241379311 27.6 53.793103448275865 27.6C 56.931034482758626 27.6 59.62068965517242 13.2 62.75862068965518 13.2C 65.89655172413794 13.2 68.58620689655173 32.4 71.72413793103449 32.4C 74.86206896551725 32.4 77.55172413793103 22.8 80.6896551724138 22.8C 83.82758620689656 22.8 86.51724137931035 28.8 89.65517241379311 28.8C 92.79310344827587 28.8 95.48275862068967 25.6 98.62068965517243 25.6C 101.75862068965519 25.6 104.44827586206897 15.2 107.58620689655173 15.2C 110.72413793103449 15.2 113.41379310344828 15.600000000000001 116.55172413793105 15.600000000000001C 119.68965517241381 15.600000000000001 122.3793103448276 29.2 125.51724137931036 29.2C 128.6551724137931 29.2 131.34482758620692 24.4 134.48275862068968 24.4C 137.62068965517244 24.4 140.31034482758622 26 143.44827586206898 26C 146.58620689655174 26 149.27586206896552 23.6 152.41379310344828 23.6C 155.55172413793105 23.6 158.24137931034483 29.2 161.3793103448276 29.2C 164.51724137931035 29.2 167.20689655172416 26 170.34482758620692 26C 173.48275862068968 26 176.17241379310346 19.6 179.31034482758622 19.6C 182.44827586206898 19.6 185.13793103448276 21.6 188.27586206896552 21.6C 191.41379310344828 21.6 194.1034482758621 15.2 197.24137931034485 15.2C 200.37931034482762 15.2 203.0689655172414 25.2 206.20689655172416 25.2C 209.34482758620692 25.2 212.0344827586207 22.4 215.17241379310346 22.4C 218.31034482758622 22.4 221.00000000000003 18.8 224.1379310344828 18.8C 227.27586206896555 18.8 229.96551724137933 23.6 233.1034482758621 23.6C 236.24137931034485 23.6 238.93103448275863 14 242.0689655172414 14C 245.20689655172416 14 247.89655172413796 24.4 251.03448275862073 24.4C 254.17241379310346 24.4 256.86206896551727 25.2 260 25.2"
                                  pathfrom="M -1 40 L -1 40 L 8.965517241379311 40 L 17.931034482758623 40 L 26.896551724137932 40 L 35.862068965517246 40 L 44.827586206896555 40 L 53.793103448275865 40 L 62.75862068965518 40 L 71.72413793103449 40 L 80.6896551724138 40 L 89.65517241379311 40 L 98.62068965517243 40 L 107.58620689655173 40 L 116.55172413793105 40 L 125.51724137931036 40 L 134.48275862068968 40 L 143.44827586206898 40 L 152.41379310344828 40 L 161.3793103448276 40 L 170.34482758620692 40 L 179.31034482758622 40 L 188.27586206896552 40 L 197.24137931034485 40 L 206.20689655172416 40 L 215.17241379310346 40 L 224.1379310344828 40 L 233.1034482758621 40 L 242.0689655172414 40 L 251.03448275862073 40 L 260 40"
                                  fillRule="evenodd"
                                />
                                <g
                                  id="SvgjsG1119"
                                  className="apexcharts-series-markers-wrap">
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle1149"
                                      r={0}
                                      cx={0}
                                      cy={0}
                                      className="apexcharts-marker wswem4bez no-pointer-events"
                                      stroke="#ffffff"
                                      fill="#667382"
                                      fillOpacity={1}
                                      strokeWidth={2}
                                      strokeOpacity="0.9"
                                      default-marker-size={0}
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG1116"
                                className="apexcharts-datalabels"
                              />
                              <g
                                id="SvgjsG1120"
                                className="apexcharts-datalabels"
                              />
                            </g>
                            <g
                              id="SvgjsG1125"
                              className="apexcharts-grid-borders"
                              style={{ display: "none" }}
                            />
                            <line
                              id="SvgjsLine1134"
                              x1={0}
                              y1={0}
                              x2={260}
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine1135"
                              x1={0}
                              y1={0}
                              x2={260}
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG1136"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)">
                              <g
                                id="SvgjsG1137"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              />
                            </g>
                            <g
                              id="SvgjsG1145"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG1146"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG1147"
                              className="apexcharts-point-annotations"
                            />
                          </g>
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-dark">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{ fontFamily: "inherit", fontSize: "12px" }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}>
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(32, 107, 196)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "inherit", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 2 }}>
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(102, 115, 130)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "inherit", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Active users</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              className="dropdown-item active"
                              href="#">
                              Last 7 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 30 days
                            </a>
                            <a
                              className="dropdown-item"
                              href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">2,986</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          4% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                          <svg
                            className="icon ms-1"
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
                            <path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      id="chart-active-users"
                      className="chart-sm"
                      style={{ minHeight: "40px" }}>
                      <div
                        id="apexchartsgms8yd9l"
                        className="apexcharts-canvas apexchartsgms8yd9l apexcharts-theme-light"
                        style={{ width: "260px", height: "40px" }}>
                        <svg
                          id="SvgjsSvg1150"
                          width={260}
                          height={40}
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="apexcharts-svg"
                          xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}>
                          <foreignObject
                            x={0}
                            y={0}
                            width={260}
                            height={40}>
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: "20px" }}
                            />
                          </foreignObject>
                          <g
                            id="SvgjsG1278"
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(-18, 0)"
                          />
                          <g
                            id="SvgjsG1152"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(11.988505747126437, 0)">
                            <defs id="SvgjsDefs1151">
                              <linearGradient
                                id="SvgjsLinearGradient1155"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={1}>
                                <stop
                                  id="SvgjsStop1156"
                                  stopOpacity="0.4"
                                  stopColor="rgba(216,227,240,0.4)"
                                  offset={0}
                                />
                                <stop
                                  id="SvgjsStop1157"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                                <stop
                                  id="SvgjsStop1158"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                              </linearGradient>
                              <clipPath id="gridRectMaskgms8yd9l">
                                <rect
                                  id="SvgjsRect1190"
                                  width={264}
                                  height={40}
                                  x="-9.988505747126437"
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMaskgms8yd9l" />
                              <clipPath id="nonForecastMaskgms8yd9l" />
                              <clipPath id="gridRectMarkerMaskgms8yd9l">
                                <rect
                                  id="SvgjsRect1191"
                                  width="248.02298850574712"
                                  height={44}
                                  x={-2}
                                  y={-2}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <rect
                              id="SvgjsRect1159"
                              width="4.207292905271502"
                              height={40}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              strokeDasharray={3}
                              fill="url(#SvgjsLinearGradient1155)"
                              className="apexcharts-xcrosshairs"
                              y2={40}
                              filter="none"
                              fillOpacity="0.9"
                            />
                            <g
                              id="SvgjsG1256"
                              className="apexcharts-grid">
                              <g
                                id="SvgjsG1257"
                                className="apexcharts-gridlines-horizontal"
                                style={{ display: "none" }}>
                                <line
                                  id="SvgjsLine1260"
                                  x1="-7.988505747126437"
                                  y1={0}
                                  x2="252.01149425287355"
                                  y2={0}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1261"
                                  x1="-7.988505747126437"
                                  y1={8}
                                  x2="252.01149425287355"
                                  y2={8}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1262"
                                  x1="-7.988505747126437"
                                  y1={16}
                                  x2="252.01149425287355"
                                  y2={16}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1263"
                                  x1="-7.988505747126437"
                                  y1={24}
                                  x2="252.01149425287355"
                                  y2={24}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1264"
                                  x1="-7.988505747126437"
                                  y1={32}
                                  x2="252.01149425287355"
                                  y2={32}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1265"
                                  x1="-7.988505747126437"
                                  y1={40}
                                  x2="252.01149425287355"
                                  y2={40}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG1258"
                                className="apexcharts-gridlines-vertical"
                                style={{ display: "none" }}
                              />
                              <line
                                id="SvgjsLine1267"
                                x1={0}
                                y1={40}
                                x2="244.02298850574712"
                                y2={40}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine1266"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2={40}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              id="SvgjsG1192"
                              className="apexcharts-bar-series apexcharts-plot-series">
                              <g
                                id="SvgjsG1193"
                                className="apexcharts-series"
                                rel={1}
                                seriesname="Profits">
                                <path
                                  id="SvgjsPath1197"
                                  d="M -2.103646452635751 40.001 L -2.103646452635751 25.201 L 2.103646452635751 25.201 L 2.103646452635751 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M -2.103646452635751 40.001 L -2.103646452635751 25.201 L 2.103646452635751 25.201 L 2.103646452635751 40.001 Z"
                                  pathfrom="M -2.103646452635751 40.001 L -2.103646452635751 40.001 L 2.103646452635751 40.001 L 2.103646452635751 40.001 L 2.103646452635751 40.001 L 2.103646452635751 40.001 L 2.103646452635751 40.001 L -2.103646452635751 40.001 Z"
                                  cy="25.2"
                                  cx="2.103646452635751"
                                  j={0}
                                  val={37}
                                  barheight="14.8"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1199"
                                  d="M 6.3109393579072535 40.001 L 6.3109393579072535 26.001 L 10.518232263178756 26.001 L 10.518232263178756 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 6.3109393579072535 40.001 L 6.3109393579072535 26.001 L 10.518232263178756 26.001 L 10.518232263178756 40.001 Z"
                                  pathfrom="M 6.3109393579072535 40.001 L 6.3109393579072535 40.001 L 10.518232263178756 40.001 L 10.518232263178756 40.001 L 10.518232263178756 40.001 L 10.518232263178756 40.001 L 10.518232263178756 40.001 L 6.3109393579072535 40.001 Z"
                                  cy={26}
                                  cx="10.518232263178756"
                                  j={1}
                                  val={35}
                                  barheight={14}
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1201"
                                  d="M 14.725525168450257 40.001 L 14.725525168450257 22.401 L 18.93281807372176 22.401 L 18.93281807372176 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 14.725525168450257 40.001 L 14.725525168450257 22.401 L 18.93281807372176 22.401 L 18.93281807372176 40.001 Z"
                                  pathfrom="M 14.725525168450257 40.001 L 14.725525168450257 40.001 L 18.93281807372176 40.001 L 18.93281807372176 40.001 L 18.93281807372176 40.001 L 18.93281807372176 40.001 L 18.93281807372176 40.001 L 14.725525168450257 40.001 Z"
                                  cy="22.4"
                                  cx="18.93281807372176"
                                  j={2}
                                  val={44}
                                  barheight="17.6"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1203"
                                  d="M 23.14011097899326 40.001 L 23.14011097899326 28.801000000000002 L 27.34740388426476 28.801000000000002 L 27.34740388426476 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 23.14011097899326 40.001 L 23.14011097899326 28.801000000000002 L 27.34740388426476 28.801000000000002 L 27.34740388426476 40.001 Z"
                                  pathfrom="M 23.14011097899326 40.001 L 23.14011097899326 40.001 L 27.34740388426476 40.001 L 27.34740388426476 40.001 L 27.34740388426476 40.001 L 27.34740388426476 40.001 L 27.34740388426476 40.001 L 23.14011097899326 40.001 Z"
                                  cy="28.8"
                                  cx="27.34740388426476"
                                  j={3}
                                  val={28}
                                  barheight="11.2"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1205"
                                  d="M 31.554696789536266 40.001 L 31.554696789536266 25.601000000000003 L 35.76198969480777 25.601000000000003 L 35.76198969480777 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 31.554696789536266 40.001 L 31.554696789536266 25.601000000000003 L 35.76198969480777 25.601000000000003 L 35.76198969480777 40.001 Z"
                                  pathfrom="M 31.554696789536266 40.001 L 31.554696789536266 40.001 L 35.76198969480777 40.001 L 35.76198969480777 40.001 L 35.76198969480777 40.001 L 35.76198969480777 40.001 L 35.76198969480777 40.001 L 31.554696789536266 40.001 Z"
                                  cy="25.6"
                                  cx="35.76198969480777"
                                  j={4}
                                  val={36}
                                  barheight="14.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1207"
                                  d="M 39.96928260007927 40.001 L 39.96928260007927 30.401 L 44.17657550535077 30.401 L 44.17657550535077 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 39.96928260007927 40.001 L 39.96928260007927 30.401 L 44.17657550535077 30.401 L 44.17657550535077 40.001 Z"
                                  pathfrom="M 39.96928260007927 40.001 L 39.96928260007927 40.001 L 44.17657550535077 40.001 L 44.17657550535077 40.001 L 44.17657550535077 40.001 L 44.17657550535077 40.001 L 44.17657550535077 40.001 L 39.96928260007927 40.001 Z"
                                  cy="30.4"
                                  cx="44.17657550535077"
                                  j={5}
                                  val={24}
                                  barheight="9.6"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1209"
                                  d="M 48.38386841062227 40.001 L 48.38386841062227 14.001 L 52.59116131589377 14.001 L 52.59116131589377 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 48.38386841062227 40.001 L 48.38386841062227 14.001 L 52.59116131589377 14.001 L 52.59116131589377 40.001 Z"
                                  pathfrom="M 48.38386841062227 40.001 L 48.38386841062227 40.001 L 52.59116131589377 40.001 L 52.59116131589377 40.001 L 52.59116131589377 40.001 L 52.59116131589377 40.001 L 52.59116131589377 40.001 L 48.38386841062227 40.001 Z"
                                  cy={14}
                                  cx="52.59116131589377"
                                  j={6}
                                  val={65}
                                  barheight={26}
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1211"
                                  d="M 56.79845422116528 40.001 L 56.79845422116528 27.601000000000003 L 61.00574712643678 27.601000000000003 L 61.00574712643678 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 56.79845422116528 40.001 L 56.79845422116528 27.601000000000003 L 61.00574712643678 27.601000000000003 L 61.00574712643678 40.001 Z"
                                  pathfrom="M 56.79845422116528 40.001 L 56.79845422116528 40.001 L 61.00574712643678 40.001 L 61.00574712643678 40.001 L 61.00574712643678 40.001 L 61.00574712643678 40.001 L 61.00574712643678 40.001 L 56.79845422116528 40.001 Z"
                                  cy="27.6"
                                  cx="61.00574712643678"
                                  j={7}
                                  val={31}
                                  barheight="12.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1213"
                                  d="M 65.21304003170827 40.001 L 65.21304003170827 25.201 L 69.42033293697978 25.201 L 69.42033293697978 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 65.21304003170827 40.001 L 65.21304003170827 25.201 L 69.42033293697978 25.201 L 69.42033293697978 40.001 Z"
                                  pathfrom="M 65.21304003170827 40.001 L 65.21304003170827 40.001 L 69.42033293697978 40.001 L 69.42033293697978 40.001 L 69.42033293697978 40.001 L 69.42033293697978 40.001 L 69.42033293697978 40.001 L 65.21304003170827 40.001 Z"
                                  cy="25.2"
                                  cx="69.42033293697978"
                                  j={8}
                                  val={37}
                                  barheight="14.8"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1215"
                                  d="M 73.62762584225128 40.001 L 73.62762584225128 24.401 L 77.83491874752278 24.401 L 77.83491874752278 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 73.62762584225128 40.001 L 73.62762584225128 24.401 L 77.83491874752278 24.401 L 77.83491874752278 40.001 Z"
                                  pathfrom="M 73.62762584225128 40.001 L 73.62762584225128 40.001 L 77.83491874752278 40.001 L 77.83491874752278 40.001 L 77.83491874752278 40.001 L 77.83491874752278 40.001 L 77.83491874752278 40.001 L 73.62762584225128 40.001 Z"
                                  cy="24.4"
                                  cx="77.83491874752278"
                                  j={9}
                                  val={39}
                                  barheight="15.6"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1217"
                                  d="M 82.04221165279428 40.001 L 82.04221165279428 15.200999999999999 L 86.24950455806578 15.200999999999999 L 86.24950455806578 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 82.04221165279428 40.001 L 82.04221165279428 15.200999999999999 L 86.24950455806578 15.200999999999999 L 86.24950455806578 40.001 Z"
                                  pathfrom="M 82.04221165279428 40.001 L 82.04221165279428 40.001 L 86.24950455806578 40.001 L 86.24950455806578 40.001 L 86.24950455806578 40.001 L 86.24950455806578 40.001 L 86.24950455806578 40.001 L 82.04221165279428 40.001 Z"
                                  cy="15.2"
                                  cx="86.24950455806578"
                                  j={10}
                                  val={62}
                                  barheight="24.8"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1219"
                                  d="M 90.45679746333728 40.001 L 90.45679746333728 19.601000000000003 L 94.66409036860878 19.601000000000003 L 94.66409036860878 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 90.45679746333728 40.001 L 90.45679746333728 19.601000000000003 L 94.66409036860878 19.601000000000003 L 94.66409036860878 40.001 Z"
                                  pathfrom="M 90.45679746333728 40.001 L 90.45679746333728 40.001 L 94.66409036860878 40.001 L 94.66409036860878 40.001 L 94.66409036860878 40.001 L 94.66409036860878 40.001 L 94.66409036860878 40.001 L 90.45679746333728 40.001 Z"
                                  cy="19.6"
                                  cx="94.66409036860878"
                                  j={11}
                                  val={51}
                                  barheight="20.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1221"
                                  d="M 98.87138327388028 40.001 L 98.87138327388028 26.001 L 103.07867617915178 26.001 L 103.07867617915178 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 98.87138327388028 40.001 L 98.87138327388028 26.001 L 103.07867617915178 26.001 L 103.07867617915178 40.001 Z"
                                  pathfrom="M 98.87138327388028 40.001 L 98.87138327388028 40.001 L 103.07867617915178 40.001 L 103.07867617915178 40.001 L 103.07867617915178 40.001 L 103.07867617915178 40.001 L 103.07867617915178 40.001 L 98.87138327388028 40.001 Z"
                                  cy={26}
                                  cx="103.07867617915178"
                                  j={12}
                                  val={35}
                                  barheight={14}
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1223"
                                  d="M 107.2859690844233 40.001 L 107.2859690844233 23.601000000000003 L 111.4932619896948 23.601000000000003 L 111.4932619896948 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 107.2859690844233 40.001 L 107.2859690844233 23.601000000000003 L 111.4932619896948 23.601000000000003 L 111.4932619896948 40.001 Z"
                                  pathfrom="M 107.2859690844233 40.001 L 107.2859690844233 40.001 L 111.4932619896948 40.001 L 111.4932619896948 40.001 L 111.4932619896948 40.001 L 111.4932619896948 40.001 L 111.4932619896948 40.001 L 107.2859690844233 40.001 Z"
                                  cy="23.6"
                                  cx="111.4932619896948"
                                  j={13}
                                  val={41}
                                  barheight="16.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1225"
                                  d="M 115.7005548949663 40.001 L 115.7005548949663 26.001 L 119.9078478002378 26.001 L 119.9078478002378 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 115.7005548949663 40.001 L 115.7005548949663 26.001 L 119.9078478002378 26.001 L 119.9078478002378 40.001 Z"
                                  pathfrom="M 115.7005548949663 40.001 L 115.7005548949663 40.001 L 119.9078478002378 40.001 L 119.9078478002378 40.001 L 119.9078478002378 40.001 L 119.9078478002378 40.001 L 119.9078478002378 40.001 L 115.7005548949663 40.001 Z"
                                  cy={26}
                                  cx="119.9078478002378"
                                  j={14}
                                  val={35}
                                  barheight={14}
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1227"
                                  d="M 124.1151407055093 40.001 L 124.1151407055093 29.201 L 128.32243361078082 29.201 L 128.32243361078082 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 124.1151407055093 40.001 L 124.1151407055093 29.201 L 128.32243361078082 29.201 L 128.32243361078082 40.001 Z"
                                  pathfrom="M 124.1151407055093 40.001 L 124.1151407055093 40.001 L 128.32243361078082 40.001 L 128.32243361078082 40.001 L 128.32243361078082 40.001 L 128.32243361078082 40.001 L 128.32243361078082 40.001 L 124.1151407055093 40.001 Z"
                                  cy="29.2"
                                  cx="128.32243361078082"
                                  j={15}
                                  val={27}
                                  barheight="10.8"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1229"
                                  d="M 132.5297265160523 40.001 L 132.5297265160523 2.800999999999997 L 136.73701942132382 2.800999999999997 L 136.73701942132382 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 132.5297265160523 40.001 L 132.5297265160523 2.800999999999997 L 136.73701942132382 2.800999999999997 L 136.73701942132382 40.001 Z"
                                  pathfrom="M 132.5297265160523 40.001 L 132.5297265160523 40.001 L 136.73701942132382 40.001 L 136.73701942132382 40.001 L 136.73701942132382 40.001 L 136.73701942132382 40.001 L 136.73701942132382 40.001 L 132.5297265160523 40.001 Z"
                                  cy="2.799999999999997"
                                  cx="136.73701942132382"
                                  j={16}
                                  val={93}
                                  barheight="37.2"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1231"
                                  d="M 140.9443123265953 40.001 L 140.9443123265953 18.801000000000002 L 145.15160523186682 18.801000000000002 L 145.15160523186682 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 140.9443123265953 40.001 L 140.9443123265953 18.801000000000002 L 145.15160523186682 18.801000000000002 L 145.15160523186682 40.001 Z"
                                  pathfrom="M 140.9443123265953 40.001 L 140.9443123265953 40.001 L 145.15160523186682 40.001 L 145.15160523186682 40.001 L 145.15160523186682 40.001 L 145.15160523186682 40.001 L 145.15160523186682 40.001 L 140.9443123265953 40.001 Z"
                                  cy="18.8"
                                  cx="145.15160523186682"
                                  j={17}
                                  val={53}
                                  barheight="21.2"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1233"
                                  d="M 149.3588981371383 40.001 L 149.3588981371383 15.601 L 153.56619104240983 15.601 L 153.56619104240983 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 149.3588981371383 40.001 L 149.3588981371383 15.601 L 153.56619104240983 15.601 L 153.56619104240983 40.001 Z"
                                  pathfrom="M 149.3588981371383 40.001 L 149.3588981371383 40.001 L 153.56619104240983 40.001 L 153.56619104240983 40.001 L 153.56619104240983 40.001 L 153.56619104240983 40.001 L 153.56619104240983 40.001 L 149.3588981371383 40.001 Z"
                                  cy="15.600000000000001"
                                  cx="153.56619104240983"
                                  j={18}
                                  val={61}
                                  barheight="24.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1235"
                                  d="M 157.7734839476813 40.001 L 157.7734839476813 29.201 L 161.98077685295283 29.201 L 161.98077685295283 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 157.7734839476813 40.001 L 157.7734839476813 29.201 L 161.98077685295283 29.201 L 161.98077685295283 40.001 Z"
                                  pathfrom="M 157.7734839476813 40.001 L 157.7734839476813 40.001 L 161.98077685295283 40.001 L 161.98077685295283 40.001 L 161.98077685295283 40.001 L 161.98077685295283 40.001 L 161.98077685295283 40.001 L 157.7734839476813 40.001 Z"
                                  cy="29.2"
                                  cx="161.98077685295283"
                                  j={19}
                                  val={27}
                                  barheight="10.8"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1237"
                                  d="M 166.18806975822432 40.001 L 166.18806975822432 18.401 L 170.39536266349583 18.401 L 170.39536266349583 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 166.18806975822432 40.001 L 166.18806975822432 18.401 L 170.39536266349583 18.401 L 170.39536266349583 40.001 Z"
                                  pathfrom="M 166.18806975822432 40.001 L 166.18806975822432 40.001 L 170.39536266349583 40.001 L 170.39536266349583 40.001 L 170.39536266349583 40.001 L 170.39536266349583 40.001 L 170.39536266349583 40.001 L 166.18806975822432 40.001 Z"
                                  cy="18.4"
                                  cx="170.39536266349583"
                                  j={20}
                                  val={54}
                                  barheight="21.6"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1239"
                                  d="M 174.60265556876732 40.001 L 174.60265556876732 22.801000000000002 L 178.80994847403883 22.801000000000002 L 178.80994847403883 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 174.60265556876732 40.001 L 174.60265556876732 22.801000000000002 L 178.80994847403883 22.801000000000002 L 178.80994847403883 40.001 Z"
                                  pathfrom="M 174.60265556876732 40.001 L 174.60265556876732 40.001 L 178.80994847403883 40.001 L 178.80994847403883 40.001 L 178.80994847403883 40.001 L 178.80994847403883 40.001 L 178.80994847403883 40.001 L 174.60265556876732 40.001 Z"
                                  cy="22.8"
                                  cx="178.80994847403883"
                                  j={21}
                                  val={43}
                                  barheight="17.2"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1241"
                                  d="M 183.01724137931032 40.001 L 183.01724137931032 32.400999999999996 L 187.22453428458184 32.400999999999996 L 187.22453428458184 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 183.01724137931032 40.001 L 183.01724137931032 32.400999999999996 L 187.22453428458184 32.400999999999996 L 187.22453428458184 40.001 Z"
                                  pathfrom="M 183.01724137931032 40.001 L 183.01724137931032 40.001 L 187.22453428458184 40.001 L 187.22453428458184 40.001 L 187.22453428458184 40.001 L 187.22453428458184 40.001 L 187.22453428458184 40.001 L 183.01724137931032 40.001 Z"
                                  cy="32.4"
                                  cx="187.22453428458184"
                                  j={22}
                                  val={19}
                                  barheight="7.6"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1243"
                                  d="M 191.43182718985332 40.001 L 191.43182718985332 21.601000000000003 L 195.63912009512484 21.601000000000003 L 195.63912009512484 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 191.43182718985332 40.001 L 191.43182718985332 21.601000000000003 L 195.63912009512484 21.601000000000003 L 195.63912009512484 40.001 Z"
                                  pathfrom="M 191.43182718985332 40.001 L 191.43182718985332 40.001 L 195.63912009512484 40.001 L 195.63912009512484 40.001 L 195.63912009512484 40.001 L 195.63912009512484 40.001 L 195.63912009512484 40.001 L 191.43182718985332 40.001 Z"
                                  cy="21.6"
                                  cx="195.63912009512484"
                                  j={23}
                                  val={46}
                                  barheight="18.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1245"
                                  d="M 199.84641300039632 40.001 L 199.84641300039632 24.401 L 204.05370590566784 24.401 L 204.05370590566784 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 199.84641300039632 40.001 L 199.84641300039632 24.401 L 204.05370590566784 24.401 L 204.05370590566784 40.001 Z"
                                  pathfrom="M 199.84641300039632 40.001 L 199.84641300039632 40.001 L 204.05370590566784 40.001 L 204.05370590566784 40.001 L 204.05370590566784 40.001 L 204.05370590566784 40.001 L 204.05370590566784 40.001 L 199.84641300039632 40.001 Z"
                                  cy="24.4"
                                  cx="204.05370590566784"
                                  j={24}
                                  val={39}
                                  barheight="15.6"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1247"
                                  d="M 208.26099881093933 40.001 L 208.26099881093933 15.200999999999999 L 212.46829171621084 15.200999999999999 L 212.46829171621084 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 208.26099881093933 40.001 L 208.26099881093933 15.200999999999999 L 212.46829171621084 15.200999999999999 L 212.46829171621084 40.001 Z"
                                  pathfrom="M 208.26099881093933 40.001 L 208.26099881093933 40.001 L 212.46829171621084 40.001 L 212.46829171621084 40.001 L 212.46829171621084 40.001 L 212.46829171621084 40.001 L 212.46829171621084 40.001 L 208.26099881093933 40.001 Z"
                                  cy="15.2"
                                  cx="212.46829171621084"
                                  j={25}
                                  val={62}
                                  barheight="24.8"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1249"
                                  d="M 216.67558462148236 40.001 L 216.67558462148236 19.601000000000003 L 220.88287752675387 19.601000000000003 L 220.88287752675387 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 216.67558462148236 40.001 L 216.67558462148236 19.601000000000003 L 220.88287752675387 19.601000000000003 L 220.88287752675387 40.001 Z"
                                  pathfrom="M 216.67558462148236 40.001 L 216.67558462148236 40.001 L 220.88287752675387 40.001 L 220.88287752675387 40.001 L 220.88287752675387 40.001 L 220.88287752675387 40.001 L 220.88287752675387 40.001 L 216.67558462148236 40.001 Z"
                                  cy="19.6"
                                  cx="220.88287752675387"
                                  j={26}
                                  val={51}
                                  barheight="20.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1251"
                                  d="M 225.09017043202536 40.001 L 225.09017043202536 26.001 L 229.29746333729688 26.001 L 229.29746333729688 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 225.09017043202536 40.001 L 225.09017043202536 26.001 L 229.29746333729688 26.001 L 229.29746333729688 40.001 Z"
                                  pathfrom="M 225.09017043202536 40.001 L 225.09017043202536 40.001 L 229.29746333729688 40.001 L 229.29746333729688 40.001 L 229.29746333729688 40.001 L 229.29746333729688 40.001 L 229.29746333729688 40.001 L 225.09017043202536 40.001 Z"
                                  cy={26}
                                  cx="229.29746333729688"
                                  j={27}
                                  val={35}
                                  barheight={14}
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1253"
                                  d="M 233.50475624256836 40.001 L 233.50475624256836 23.601000000000003 L 237.71204914783988 23.601000000000003 L 237.71204914783988 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 233.50475624256836 40.001 L 233.50475624256836 23.601000000000003 L 237.71204914783988 23.601000000000003 L 237.71204914783988 40.001 Z"
                                  pathfrom="M 233.50475624256836 40.001 L 233.50475624256836 40.001 L 237.71204914783988 40.001 L 237.71204914783988 40.001 L 237.71204914783988 40.001 L 237.71204914783988 40.001 L 237.71204914783988 40.001 L 233.50475624256836 40.001 Z"
                                  cy="23.6"
                                  cx="237.71204914783988"
                                  j={28}
                                  val={41}
                                  barheight="16.4"
                                  barwidth="4.207292905271502"
                                />
                                <path
                                  id="SvgjsPath1255"
                                  d="M 241.91934205311136 40.001 L 241.91934205311136 13.200999999999999 L 246.12663495838288 13.200999999999999 L 246.12663495838288 40.001 Z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskgms8yd9l)"
                                  pathto="M 241.91934205311136 40.001 L 241.91934205311136 13.200999999999999 L 246.12663495838288 13.200999999999999 L 246.12663495838288 40.001 Z"
                                  pathfrom="M 241.91934205311136 40.001 L 241.91934205311136 40.001 L 246.12663495838288 40.001 L 246.12663495838288 40.001 L 246.12663495838288 40.001 L 246.12663495838288 40.001 L 246.12663495838288 40.001 L 241.91934205311136 40.001 Z"
                                  cy="13.2"
                                  cx="246.12663495838288"
                                  j={29}
                                  val={67}
                                  barheight="26.8"
                                  barwidth="4.207292905271502"
                                />
                                <g
                                  id="SvgjsG1195"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}>
                                  <g
                                    id="SvgjsG1196"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1198"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1200"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1202"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1204"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1206"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1208"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1210"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1212"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1214"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1216"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1218"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1220"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1222"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1224"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1226"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1228"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1230"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1232"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1234"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1236"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1238"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1240"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1242"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1244"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1246"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1248"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1250"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1252"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                  <g
                                    id="SvgjsG1254"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskgms8yd9l)"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1194"
                                className="apexcharts-datalabels"
                              />
                            </g>
                            <g
                              id="SvgjsG1259"
                              className="apexcharts-grid-borders"
                              style={{ display: "none" }}
                            />
                            <line
                              id="SvgjsLine1268"
                              x1="-7.988505747126437"
                              y1={0}
                              x2="252.01149425287355"
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine1269"
                              x1="-7.988505747126437"
                              y1={0}
                              x2="252.01149425287355"
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG1270"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)">
                              <g
                                id="SvgjsG1271"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              />
                            </g>
                            <g
                              id="SvgjsG1279"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG1280"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG1281"
                              className="apexcharts-point-annotations"
                            />
                          </g>
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-dark">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{ fontFamily: "inherit", fontSize: "12px" }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}>
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(32, 107, 196)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "inherit", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row row-cards">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-primary text-white avatar">
                              {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                              <svg
                                className="icon"
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
                                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                <path d="M12 3v3m0 12v3" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">132 Sales</div>
                            <div className="text-muted">12 waiting payments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-green text-white avatar">
                              {/* Download SVG icon from http://tabler-icons.io/i/shopping-cart */}
                              <svg
                                className="icon"
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
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">78 Orders</div>
                            <div className="text-muted">32 shipped</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-twitter text-white avatar">
                              {/* Download SVG icon from http://tabler-icons.io/i/brand-twitter */}
                              <svg
                                className="icon"
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
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">623 Shares</div>
                            <div className="text-muted">16 today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-facebook text-white avatar">
                              {/* Download SVG icon from http://tabler-icons.io/i/brand-facebook */}
                              <svg
                                className="icon"
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
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                              </svg>
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">132 Likes</div>
                            <div className="text-muted">21 today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Traffic summary</h3>
                    <div
                      id="chart-mentions"
                      className="chart-lg"
                      style={{ minHeight: "240px" }}>
                      <div
                        id="apexchartsdi0xxvsb"
                        className="apexcharts-canvas apexchartsdi0xxvsb apexcharts-theme-light"
                        style={{ width: "586px", height: "240px" }}>
                        <svg
                          id="SvgjsSvg1282"
                          width={586}
                          height={240}
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="apexcharts-svg apexcharts-zoomable"
                          xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}>
                          <foreignObject
                            x={0}
                            y={0}
                            width={586}
                            height={240}>
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: "120px" }}
                            />
                          </foreignObject>
                          <g
                            id="SvgjsG1574"
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(20, 0)">
                            <g
                              id="SvgjsG1575"
                              className="apexcharts-yaxis-texts-g">
                              <text
                                id="SvgjsText1577"
                                fontFamily="inherit"
                                x={4}
                                y="11.5"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}>
                                <tspan id="SvgjsTspan1578">100</tspan>
                                <title>100</title>
                              </text>
                              <text
                                id="SvgjsText1580"
                                fontFamily="inherit"
                                x={4}
                                y="51.46"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}>
                                <tspan id="SvgjsTspan1581">80</tspan>
                                <title>80</title>
                              </text>
                              <text
                                id="SvgjsText1583"
                                fontFamily="inherit"
                                x={4}
                                y="91.42"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}>
                                <tspan id="SvgjsTspan1584">60</tspan>
                                <title>60</title>
                              </text>
                              <text
                                id="SvgjsText1586"
                                fontFamily="inherit"
                                x={4}
                                y="131.38"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}>
                                <tspan id="SvgjsTspan1587">40</tspan>
                                <title>40</title>
                              </text>
                              <text
                                id="SvgjsText1589"
                                fontFamily="inherit"
                                x={4}
                                y="171.34"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}>
                                <tspan id="SvgjsTspan1590">20</tspan>
                                <title>20</title>
                              </text>
                              <text
                                id="SvgjsText1592"
                                fontFamily="inherit"
                                x={4}
                                y="211.3"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}>
                                <tspan id="SvgjsTspan1593">0</tspan>
                                <title>0</title>
                              </text>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1284"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(48.111111111111114, 10)">
                            <defs id="SvgjsDefs1283">
                              <linearGradient
                                id="SvgjsLinearGradient1288"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={1}>
                                <stop
                                  id="SvgjsStop1289"
                                  stopOpacity="0.4"
                                  stopColor="rgba(216,227,240,0.4)"
                                  offset={0}
                                />
                                <stop
                                  id="SvgjsStop1290"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                                <stop
                                  id="SvgjsStop1291"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                              </linearGradient>
                              <clipPath id="gridRectMaskdi0xxvsb">
                                <rect
                                  id="SvgjsRect1299"
                                  width={556}
                                  height="199.8"
                                  x="-12.11111111111111"
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMaskdi0xxvsb" />
                              <clipPath id="nonForecastMaskdi0xxvsb" />
                              <clipPath id="gridRectMarkerMaskdi0xxvsb">
                                <rect
                                  id="SvgjsRect1300"
                                  width="535.7777777777778"
                                  height="203.8"
                                  x={-2}
                                  y={-2}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <rect
                              id="SvgjsRect1292"
                              width="7.385802469135802"
                              height="199.8"
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              strokeDasharray={3}
                              fill="url(#SvgjsLinearGradient1288)"
                              className="apexcharts-xcrosshairs"
                              y2="199.8"
                              filter="none"
                              fillOpacity="0.9"
                            />
                            <line
                              id="SvgjsLine1538"
                              x1="44.31481481481482"
                              y1="200.8"
                              x2="44.31481481481482"
                              y2="206.8"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1540"
                              x1="147.71604938271605"
                              y1="200.8"
                              x2="147.71604938271605"
                              y2="206.8"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1542"
                              x1="251.1172839506172"
                              y1="200.8"
                              x2="251.1172839506172"
                              y2="206.8"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1544"
                              x1="369.29012345678996"
                              y1="200.8"
                              x2="369.29012345678996"
                              y2="206.8"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine1546"
                              x1="487.4629629629627"
                              y1="200.8"
                              x2="487.4629629629627"
                              y2="206.8"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <g
                              id="SvgjsG1533"
                              className="apexcharts-grid">
                              <g
                                id="SvgjsG1534"
                                className="apexcharts-gridlines-horizontal">
                                <line
                                  id="SvgjsLine1548"
                                  x1="-10.11111111111111"
                                  y1="39.96"
                                  x2="541.8888888888889"
                                  y2="39.96"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1549"
                                  x1="-10.11111111111111"
                                  y1="79.92"
                                  x2="541.8888888888889"
                                  y2="79.92"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1550"
                                  x1="-10.11111111111111"
                                  y1="119.88"
                                  x2="541.8888888888889"
                                  y2="119.88"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1551"
                                  x1="-10.11111111111111"
                                  y1="159.84"
                                  x2="541.8888888888889"
                                  y2="159.84"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG1535"
                                className="apexcharts-gridlines-vertical">
                                <line
                                  id="SvgjsLine1537"
                                  x1="44.31481481481482"
                                  y1={0}
                                  x2="44.31481481481482"
                                  y2="199.8"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1539"
                                  x1="147.71604938271605"
                                  y1={0}
                                  x2="147.71604938271605"
                                  y2="199.8"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1541"
                                  x1="251.1172839506172"
                                  y1={0}
                                  x2="251.1172839506172"
                                  y2="199.8"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1543"
                                  x1="369.29012345678996"
                                  y1={0}
                                  x2="369.29012345678996"
                                  y2="199.8"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1545"
                                  x1="487.4629629629627"
                                  y1={0}
                                  x2="487.4629629629627"
                                  y2="199.8"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <line
                                id="SvgjsLine1554"
                                x1={0}
                                y1="199.8"
                                x2="531.7777777777778"
                                y2="199.8"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine1553"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2="199.8"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              id="SvgjsG1301"
                              className="apexcharts-bar-series apexcharts-plot-series">
                              <g
                                id="SvgjsG1302"
                                className="apexcharts-series"
                                seriesname="Web"
                                rel={1}>
                                <path
                                  id="SvgjsPath1306"
                                  d="M -3.692901234567901 199.80100000000002 L -3.692901234567901 197.80300000000003 L 3.692901234567901 197.80300000000003 L 3.692901234567901 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M -3.692901234567901 199.80100000000002 L -3.692901234567901 197.80300000000003 L 3.692901234567901 197.80300000000003 L 3.692901234567901 199.80100000000002 z"
                                  pathfrom="M -3.692901234567901 199.80100000000002 L -3.692901234567901 199.80100000000002 L 3.692901234567901 199.80100000000002 L 3.692901234567901 199.80100000000002 L 3.692901234567901 199.80100000000002 L 3.692901234567901 199.80100000000002 L 3.692901234567901 199.80100000000002 L -3.692901234567901 199.80100000000002 z"
                                  cy="197.80200000000002"
                                  cx="3.692901234567902"
                                  j={0}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1308"
                                  d="M 11.078703703703706 199.80100000000002 L 11.078703703703706 199.80100000000002 L 18.464506172839506 199.80100000000002 L 18.464506172839506 199.80100000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 11.078703703703706 199.80100000000002 L 11.078703703703706 199.80100000000002 L 18.464506172839506 199.80100000000002 L 18.464506172839506 199.80100000000002 z"
                                  pathfrom="M 11.078703703703706 199.80100000000002 L 11.078703703703706 199.80100000000002 L 18.464506172839506 199.80100000000002 L 18.464506172839506 199.80100000000002 L 18.464506172839506 199.80100000000002 L 18.464506172839506 199.80100000000002 L 18.464506172839506 199.80100000000002 L 11.078703703703706 199.80100000000002 z"
                                  cy="199.8"
                                  cx="18.464506172839506"
                                  j={1}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1310"
                                  d="M 25.85030864197531 199.80100000000002 L 25.85030864197531 199.80100000000002 L 33.236111111111114 199.80100000000002 L 33.236111111111114 199.80100000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 25.85030864197531 199.80100000000002 L 25.85030864197531 199.80100000000002 L 33.236111111111114 199.80100000000002 L 33.236111111111114 199.80100000000002 z"
                                  pathfrom="M 25.85030864197531 199.80100000000002 L 25.85030864197531 199.80100000000002 L 33.236111111111114 199.80100000000002 L 33.236111111111114 199.80100000000002 L 33.236111111111114 199.80100000000002 L 33.236111111111114 199.80100000000002 L 33.236111111111114 199.80100000000002 L 25.85030864197531 199.80100000000002 z"
                                  cy="199.8"
                                  cx="33.236111111111114"
                                  j={2}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1312"
                                  d="M 40.621913580246925 199.80100000000002 L 40.621913580246925 199.80100000000002 L 48.00771604938273 199.80100000000002 L 48.00771604938273 199.80100000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 40.621913580246925 199.80100000000002 L 40.621913580246925 199.80100000000002 L 48.00771604938273 199.80100000000002 L 48.00771604938273 199.80100000000002 z"
                                  pathfrom="M 40.621913580246925 199.80100000000002 L 40.621913580246925 199.80100000000002 L 48.00771604938273 199.80100000000002 L 48.00771604938273 199.80100000000002 L 48.00771604938273 199.80100000000002 L 48.00771604938273 199.80100000000002 L 48.00771604938273 199.80100000000002 L 40.621913580246925 199.80100000000002 z"
                                  cy="199.8"
                                  cx="48.00771604938273"
                                  j={3}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1314"
                                  d="M 55.393518518518526 199.80100000000002 L 55.393518518518526 199.80100000000002 L 62.77932098765433 199.80100000000002 L 62.77932098765433 199.80100000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 55.393518518518526 199.80100000000002 L 55.393518518518526 199.80100000000002 L 62.77932098765433 199.80100000000002 L 62.77932098765433 199.80100000000002 z"
                                  pathfrom="M 55.393518518518526 199.80100000000002 L 55.393518518518526 199.80100000000002 L 62.77932098765433 199.80100000000002 L 62.77932098765433 199.80100000000002 L 62.77932098765433 199.80100000000002 L 62.77932098765433 199.80100000000002 L 62.77932098765433 199.80100000000002 L 55.393518518518526 199.80100000000002 z"
                                  cy="199.8"
                                  cx="62.77932098765432"
                                  j={4}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1316"
                                  d="M 70.16512345679014 199.80100000000002 L 70.16512345679014 197.80300000000003 L 77.55092592592594 197.80300000000003 L 77.55092592592594 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 70.16512345679014 199.80100000000002 L 70.16512345679014 197.80300000000003 L 77.55092592592594 197.80300000000003 L 77.55092592592594 199.80100000000002 z"
                                  pathfrom="M 70.16512345679014 199.80100000000002 L 70.16512345679014 199.80100000000002 L 77.55092592592594 199.80100000000002 L 77.55092592592594 199.80100000000002 L 77.55092592592594 199.80100000000002 L 77.55092592592594 199.80100000000002 L 77.55092592592594 199.80100000000002 L 70.16512345679014 199.80100000000002 z"
                                  cy="197.80200000000002"
                                  cx="77.55092592592594"
                                  j={5}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1318"
                                  d="M 84.93672839506175 199.80100000000002 L 84.93672839506175 197.80300000000003 L 92.32253086419755 197.80300000000003 L 92.32253086419755 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 84.93672839506175 199.80100000000002 L 84.93672839506175 197.80300000000003 L 92.32253086419755 197.80300000000003 L 92.32253086419755 199.80100000000002 z"
                                  pathfrom="M 84.93672839506175 199.80100000000002 L 84.93672839506175 199.80100000000002 L 92.32253086419755 199.80100000000002 L 92.32253086419755 199.80100000000002 L 92.32253086419755 199.80100000000002 L 92.32253086419755 199.80100000000002 L 92.32253086419755 199.80100000000002 L 84.93672839506175 199.80100000000002 z"
                                  cy="197.80200000000002"
                                  cx="92.32253086419755"
                                  j={6}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1320"
                                  d="M 99.70833333333334 199.80100000000002 L 99.70833333333334 199.80100000000002 L 107.09413580246914 199.80100000000002 L 107.09413580246914 199.80100000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 99.70833333333334 199.80100000000002 L 99.70833333333334 199.80100000000002 L 107.09413580246914 199.80100000000002 L 107.09413580246914 199.80100000000002 z"
                                  pathfrom="M 99.70833333333334 199.80100000000002 L 99.70833333333334 199.80100000000002 L 107.09413580246914 199.80100000000002 L 107.09413580246914 199.80100000000002 L 107.09413580246914 199.80100000000002 L 107.09413580246914 199.80100000000002 L 107.09413580246914 199.80100000000002 L 99.70833333333334 199.80100000000002 z"
                                  cy="199.8"
                                  cx="107.09413580246914"
                                  j={7}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1322"
                                  d="M 114.47993827160495 199.80100000000002 L 114.47993827160495 199.80100000000002 L 121.86574074074075 199.80100000000002 L 121.86574074074075 199.80100000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 114.47993827160495 199.80100000000002 L 114.47993827160495 199.80100000000002 L 121.86574074074075 199.80100000000002 L 121.86574074074075 199.80100000000002 z"
                                  pathfrom="M 114.47993827160495 199.80100000000002 L 114.47993827160495 199.80100000000002 L 121.86574074074075 199.80100000000002 L 121.86574074074075 199.80100000000002 L 121.86574074074075 199.80100000000002 L 121.86574074074075 199.80100000000002 L 121.86574074074075 199.80100000000002 L 114.47993827160495 199.80100000000002 z"
                                  cy="199.8"
                                  cx="121.86574074074075"
                                  j={8}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1324"
                                  d="M 129.25154320987656 199.80100000000002 L 129.25154320987656 199.80100000000002 L 136.63734567901236 199.80100000000002 L 136.63734567901236 199.80100000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 129.25154320987656 199.80100000000002 L 129.25154320987656 199.80100000000002 L 136.63734567901236 199.80100000000002 L 136.63734567901236 199.80100000000002 z"
                                  pathfrom="M 129.25154320987656 199.80100000000002 L 129.25154320987656 199.80100000000002 L 136.63734567901236 199.80100000000002 L 136.63734567901236 199.80100000000002 L 136.63734567901236 199.80100000000002 L 136.63734567901236 199.80100000000002 L 136.63734567901236 199.80100000000002 L 129.25154320987656 199.80100000000002 z"
                                  cy="199.8"
                                  cx="136.63734567901236"
                                  j={9}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1326"
                                  d="M 144.02314814814818 199.80100000000002 L 144.02314814814818 195.805 L 151.40895061728398 195.805 L 151.40895061728398 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 144.02314814814818 199.80100000000002 L 144.02314814814818 195.805 L 151.40895061728398 195.805 L 151.40895061728398 199.80100000000002 z"
                                  pathfrom="M 144.02314814814818 199.80100000000002 L 144.02314814814818 199.80100000000002 L 151.40895061728398 199.80100000000002 L 151.40895061728398 199.80100000000002 L 151.40895061728398 199.80100000000002 L 151.40895061728398 199.80100000000002 L 151.40895061728398 199.80100000000002 L 144.02314814814818 199.80100000000002 z"
                                  cy="195.804"
                                  cx="151.40895061728398"
                                  j={10}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1328"
                                  d="M 158.79475308641977 199.80100000000002 L 158.79475308641977 175.82500000000002 L 166.18055555555557 175.82500000000002 L 166.18055555555557 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 158.79475308641977 199.80100000000002 L 158.79475308641977 175.82500000000002 L 166.18055555555557 175.82500000000002 L 166.18055555555557 199.80100000000002 z"
                                  pathfrom="M 158.79475308641977 199.80100000000002 L 158.79475308641977 199.80100000000002 L 166.18055555555557 199.80100000000002 L 166.18055555555557 199.80100000000002 L 166.18055555555557 199.80100000000002 L 166.18055555555557 199.80100000000002 L 166.18055555555557 199.80100000000002 L 158.79475308641977 199.80100000000002 z"
                                  cy="175.824"
                                  cx="166.18055555555557"
                                  j={11}
                                  val={12}
                                  barheight="23.976000000000003"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1330"
                                  d="M 173.5663580246914 199.80100000000002 L 173.5663580246914 189.811 L 180.9521604938272 189.811 L 180.9521604938272 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 173.5663580246914 199.80100000000002 L 173.5663580246914 189.811 L 180.9521604938272 189.811 L 180.9521604938272 199.80100000000002 z"
                                  pathfrom="M 173.5663580246914 199.80100000000002 L 173.5663580246914 199.80100000000002 L 180.9521604938272 199.80100000000002 L 180.9521604938272 199.80100000000002 L 180.9521604938272 199.80100000000002 L 180.9521604938272 199.80100000000002 L 180.9521604938272 199.80100000000002 L 173.5663580246914 199.80100000000002 z"
                                  cy="189.81"
                                  cx="180.9521604938272"
                                  j={12}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1332"
                                  d="M 188.337962962963 199.80100000000002 L 188.337962962963 183.817 L 195.7237654320988 183.817 L 195.7237654320988 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 188.337962962963 199.80100000000002 L 188.337962962963 183.817 L 195.7237654320988 183.817 L 195.7237654320988 199.80100000000002 z"
                                  pathfrom="M 188.337962962963 199.80100000000002 L 188.337962962963 199.80100000000002 L 195.7237654320988 199.80100000000002 L 195.7237654320988 199.80100000000002 L 195.7237654320988 199.80100000000002 L 195.7237654320988 199.80100000000002 L 195.7237654320988 199.80100000000002 L 188.337962962963 199.80100000000002 z"
                                  cy="183.816"
                                  cx="195.7237654320988"
                                  j={13}
                                  val={8}
                                  barheight="15.984000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1334"
                                  d="M 203.10956790123458 199.80100000000002 L 203.10956790123458 155.845 L 210.49537037037038 155.845 L 210.49537037037038 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 203.10956790123458 199.80100000000002 L 203.10956790123458 155.845 L 210.49537037037038 155.845 L 210.49537037037038 199.80100000000002 z"
                                  pathfrom="M 203.10956790123458 199.80100000000002 L 203.10956790123458 199.80100000000002 L 210.49537037037038 199.80100000000002 L 210.49537037037038 199.80100000000002 L 210.49537037037038 199.80100000000002 L 210.49537037037038 199.80100000000002 L 210.49537037037038 199.80100000000002 L 203.10956790123458 199.80100000000002 z"
                                  cy="155.844"
                                  cx="210.49537037037038"
                                  j={14}
                                  val={22}
                                  barheight="43.956"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1336"
                                  d="M 217.8811728395062 199.80100000000002 L 217.8811728395062 187.81300000000002 L 225.266975308642 187.81300000000002 L 225.266975308642 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 217.8811728395062 199.80100000000002 L 217.8811728395062 187.81300000000002 L 225.266975308642 187.81300000000002 L 225.266975308642 199.80100000000002 z"
                                  pathfrom="M 217.8811728395062 199.80100000000002 L 217.8811728395062 199.80100000000002 L 225.266975308642 199.80100000000002 L 225.266975308642 199.80100000000002 L 225.266975308642 199.80100000000002 L 225.266975308642 199.80100000000002 L 225.266975308642 199.80100000000002 L 217.8811728395062 199.80100000000002 z"
                                  cy="187.812"
                                  cx="225.266975308642"
                                  j={15}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1338"
                                  d="M 232.6527777777778 199.80100000000002 L 232.6527777777778 183.817 L 240.0385802469136 183.817 L 240.0385802469136 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 232.6527777777778 199.80100000000002 L 232.6527777777778 183.817 L 240.0385802469136 183.817 L 240.0385802469136 199.80100000000002 z"
                                  pathfrom="M 232.6527777777778 199.80100000000002 L 232.6527777777778 199.80100000000002 L 240.0385802469136 199.80100000000002 L 240.0385802469136 199.80100000000002 L 240.0385802469136 199.80100000000002 L 240.0385802469136 199.80100000000002 L 240.0385802469136 199.80100000000002 L 232.6527777777778 199.80100000000002 z"
                                  cy="183.816"
                                  cx="240.0385802469136"
                                  j={16}
                                  val={8}
                                  barheight="15.984000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1340"
                                  d="M 247.42438271604942 199.80100000000002 L 247.42438271604942 187.81300000000002 L 254.81018518518522 187.81300000000002 L 254.81018518518522 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 247.42438271604942 199.80100000000002 L 247.42438271604942 187.81300000000002 L 254.81018518518522 187.81300000000002 L 254.81018518518522 199.80100000000002 z"
                                  pathfrom="M 247.42438271604942 199.80100000000002 L 247.42438271604942 199.80100000000002 L 254.81018518518522 199.80100000000002 L 254.81018518518522 199.80100000000002 L 254.81018518518522 199.80100000000002 L 254.81018518518522 199.80100000000002 L 254.81018518518522 199.80100000000002 L 247.42438271604942 199.80100000000002 z"
                                  cy="187.812"
                                  cx="254.81018518518522"
                                  j={17}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1342"
                                  d="M 262.195987654321 199.80100000000002 L 262.195987654321 191.80900000000003 L 269.5817901234568 191.80900000000003 L 269.5817901234568 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 262.195987654321 199.80100000000002 L 262.195987654321 191.80900000000003 L 269.5817901234568 191.80900000000003 L 269.5817901234568 199.80100000000002 z"
                                  pathfrom="M 262.195987654321 199.80100000000002 L 262.195987654321 199.80100000000002 L 269.5817901234568 199.80100000000002 L 269.5817901234568 199.80100000000002 L 269.5817901234568 199.80100000000002 L 269.5817901234568 199.80100000000002 L 269.5817901234568 199.80100000000002 L 262.195987654321 199.80100000000002 z"
                                  cy="191.80800000000002"
                                  cx="269.5817901234568"
                                  j={18}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1344"
                                  d="M 276.9675925925926 199.80100000000002 L 276.9675925925926 197.80300000000003 L 284.3533950617284 197.80300000000003 L 284.3533950617284 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 276.9675925925926 199.80100000000002 L 276.9675925925926 197.80300000000003 L 284.3533950617284 197.80300000000003 L 284.3533950617284 199.80100000000002 z"
                                  pathfrom="M 276.9675925925926 199.80100000000002 L 276.9675925925926 199.80100000000002 L 284.3533950617284 199.80100000000002 L 284.3533950617284 199.80100000000002 L 284.3533950617284 199.80100000000002 L 284.3533950617284 199.80100000000002 L 284.3533950617284 199.80100000000002 L 276.9675925925926 199.80100000000002 z"
                                  cy="197.80200000000002"
                                  cx="284.3533950617284"
                                  j={19}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1346"
                                  d="M 291.73919753086426 199.80100000000002 L 291.73919753086426 183.817 L 299.12500000000006 183.817 L 299.12500000000006 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 291.73919753086426 199.80100000000002 L 291.73919753086426 183.817 L 299.12500000000006 183.817 L 299.12500000000006 199.80100000000002 z"
                                  pathfrom="M 291.73919753086426 199.80100000000002 L 291.73919753086426 199.80100000000002 L 299.12500000000006 199.80100000000002 L 299.12500000000006 199.80100000000002 L 299.12500000000006 199.80100000000002 L 299.12500000000006 199.80100000000002 L 299.12500000000006 199.80100000000002 L 291.73919753086426 199.80100000000002 z"
                                  cy="183.816"
                                  cx="299.12500000000006"
                                  j={20}
                                  val={8}
                                  barheight="15.984000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1348"
                                  d="M 306.51080246913585 199.80100000000002 L 306.51080246913585 151.84900000000002 L 313.89660493827165 151.84900000000002 L 313.89660493827165 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 306.51080246913585 199.80100000000002 L 306.51080246913585 151.84900000000002 L 313.89660493827165 151.84900000000002 L 313.89660493827165 199.80100000000002 z"
                                  pathfrom="M 306.51080246913585 199.80100000000002 L 306.51080246913585 199.80100000000002 L 313.89660493827165 199.80100000000002 L 313.89660493827165 199.80100000000002 L 313.89660493827165 199.80100000000002 L 313.89660493827165 199.80100000000002 L 313.89660493827165 199.80100000000002 L 306.51080246913585 199.80100000000002 z"
                                  cy="151.848"
                                  cx="313.89660493827165"
                                  j={21}
                                  val={24}
                                  barheight="47.952000000000005"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1350"
                                  d="M 321.28240740740745 199.80100000000002 L 321.28240740740745 141.859 L 328.66820987654324 141.859 L 328.66820987654324 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 321.28240740740745 199.80100000000002 L 321.28240740740745 141.859 L 328.66820987654324 141.859 L 328.66820987654324 199.80100000000002 z"
                                  pathfrom="M 321.28240740740745 199.80100000000002 L 321.28240740740745 199.80100000000002 L 328.66820987654324 199.80100000000002 L 328.66820987654324 199.80100000000002 L 328.66820987654324 199.80100000000002 L 328.66820987654324 199.80100000000002 L 328.66820987654324 199.80100000000002 L 321.28240740740745 199.80100000000002 z"
                                  cy="141.858"
                                  cx="328.66820987654324"
                                  j={22}
                                  val={29}
                                  barheight="57.94200000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1352"
                                  d="M 336.05401234567904 199.80100000000002 L 336.05401234567904 97.903 L 343.43981481481484 97.903 L 343.43981481481484 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 336.05401234567904 199.80100000000002 L 336.05401234567904 97.903 L 343.43981481481484 97.903 L 343.43981481481484 199.80100000000002 z"
                                  pathfrom="M 336.05401234567904 199.80100000000002 L 336.05401234567904 199.80100000000002 L 343.43981481481484 199.80100000000002 L 343.43981481481484 199.80100000000002 L 343.43981481481484 199.80100000000002 L 343.43981481481484 199.80100000000002 L 343.43981481481484 199.80100000000002 L 336.05401234567904 199.80100000000002 z"
                                  cy="97.902"
                                  cx="343.43981481481484"
                                  j={23}
                                  val={51}
                                  barheight="101.89800000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1354"
                                  d="M 350.8256172839507 199.80100000000002 L 350.8256172839507 119.881 L 358.2114197530865 119.881 L 358.2114197530865 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 350.8256172839507 199.80100000000002 L 350.8256172839507 119.881 L 358.2114197530865 119.881 L 358.2114197530865 199.80100000000002 z"
                                  pathfrom="M 350.8256172839507 199.80100000000002 L 350.8256172839507 199.80100000000002 L 358.2114197530865 199.80100000000002 L 358.2114197530865 199.80100000000002 L 358.2114197530865 199.80100000000002 L 358.2114197530865 199.80100000000002 L 358.2114197530865 199.80100000000002 L 350.8256172839507 199.80100000000002 z"
                                  cy="119.88"
                                  cx="358.2114197530865"
                                  j={24}
                                  val={40}
                                  barheight="79.92000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1356"
                                  d="M 365.5972222222223 199.80100000000002 L 365.5972222222223 105.89500000000001 L 372.9830246913581 105.89500000000001 L 372.9830246913581 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 365.5972222222223 199.80100000000002 L 365.5972222222223 105.89500000000001 L 372.9830246913581 105.89500000000001 L 372.9830246913581 199.80100000000002 z"
                                  pathfrom="M 365.5972222222223 199.80100000000002 L 365.5972222222223 199.80100000000002 L 372.9830246913581 199.80100000000002 L 372.9830246913581 199.80100000000002 L 372.9830246913581 199.80100000000002 L 372.9830246913581 199.80100000000002 L 372.9830246913581 199.80100000000002 L 365.5972222222223 199.80100000000002 z"
                                  cy="105.894"
                                  cx="372.9830246913581"
                                  j={25}
                                  val={47}
                                  barheight="93.906"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1358"
                                  d="M 380.3688271604939 199.80100000000002 L 380.3688271604939 153.847 L 387.7546296296297 153.847 L 387.7546296296297 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 380.3688271604939 199.80100000000002 L 380.3688271604939 153.847 L 387.7546296296297 153.847 L 387.7546296296297 199.80100000000002 z"
                                  pathfrom="M 380.3688271604939 199.80100000000002 L 380.3688271604939 199.80100000000002 L 387.7546296296297 199.80100000000002 L 387.7546296296297 199.80100000000002 L 387.7546296296297 199.80100000000002 L 387.7546296296297 199.80100000000002 L 387.7546296296297 199.80100000000002 L 380.3688271604939 199.80100000000002 z"
                                  cy="153.846"
                                  cx="387.7546296296297"
                                  j={26}
                                  val={23}
                                  barheight="45.95400000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1360"
                                  d="M 395.1404320987655 199.80100000000002 L 395.1404320987655 147.853 L 402.52623456790127 147.853 L 402.52623456790127 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 395.1404320987655 199.80100000000002 L 395.1404320987655 147.853 L 402.52623456790127 147.853 L 402.52623456790127 199.80100000000002 z"
                                  pathfrom="M 395.1404320987655 199.80100000000002 L 395.1404320987655 199.80100000000002 L 402.52623456790127 199.80100000000002 L 402.52623456790127 199.80100000000002 L 402.52623456790127 199.80100000000002 L 402.52623456790127 199.80100000000002 L 402.52623456790127 199.80100000000002 L 395.1404320987655 199.80100000000002 z"
                                  cy="147.852"
                                  cx="402.52623456790127"
                                  j={27}
                                  val={26}
                                  barheight="51.94800000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1362"
                                  d="M 409.91203703703707 199.80100000000002 L 409.91203703703707 99.901 L 417.29783950617286 99.901 L 417.29783950617286 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 409.91203703703707 199.80100000000002 L 409.91203703703707 99.901 L 417.29783950617286 99.901 L 417.29783950617286 199.80100000000002 z"
                                  pathfrom="M 409.91203703703707 199.80100000000002 L 409.91203703703707 199.80100000000002 L 417.29783950617286 199.80100000000002 L 417.29783950617286 199.80100000000002 L 417.29783950617286 199.80100000000002 L 417.29783950617286 199.80100000000002 L 417.29783950617286 199.80100000000002 L 409.91203703703707 199.80100000000002 z"
                                  cy="99.89999999999999"
                                  cx="417.29783950617286"
                                  j={28}
                                  val={50}
                                  barheight="99.90000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1364"
                                  d="M 424.6836419753087 199.80100000000002 L 424.6836419753087 147.853 L 432.0694444444445 147.853 L 432.0694444444445 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 424.6836419753087 199.80100000000002 L 424.6836419753087 147.853 L 432.0694444444445 147.853 L 432.0694444444445 199.80100000000002 z"
                                  pathfrom="M 424.6836419753087 199.80100000000002 L 424.6836419753087 199.80100000000002 L 432.0694444444445 199.80100000000002 L 432.0694444444445 199.80100000000002 L 432.0694444444445 199.80100000000002 L 432.0694444444445 199.80100000000002 L 432.0694444444445 199.80100000000002 L 424.6836419753087 199.80100000000002 z"
                                  cy="147.852"
                                  cx="432.0694444444445"
                                  j={29}
                                  val={26}
                                  barheight="51.94800000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1366"
                                  d="M 439.4552469135803 199.80100000000002 L 439.4552469135803 117.88300000000001 L 446.8410493827161 117.88300000000001 L 446.8410493827161 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 439.4552469135803 199.80100000000002 L 439.4552469135803 117.88300000000001 L 446.8410493827161 117.88300000000001 L 446.8410493827161 199.80100000000002 z"
                                  pathfrom="M 439.4552469135803 199.80100000000002 L 439.4552469135803 199.80100000000002 L 446.8410493827161 199.80100000000002 L 446.8410493827161 199.80100000000002 L 446.8410493827161 199.80100000000002 L 446.8410493827161 199.80100000000002 L 446.8410493827161 199.80100000000002 L 439.4552469135803 199.80100000000002 z"
                                  cy="117.882"
                                  cx="446.8410493827161"
                                  j={30}
                                  val={41}
                                  barheight="81.918"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1368"
                                  d="M 454.2268518518519 199.80100000000002 L 454.2268518518519 155.845 L 461.6126543209877 155.845 L 461.6126543209877 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 454.2268518518519 199.80100000000002 L 454.2268518518519 155.845 L 461.6126543209877 155.845 L 461.6126543209877 199.80100000000002 z"
                                  pathfrom="M 454.2268518518519 199.80100000000002 L 454.2268518518519 199.80100000000002 L 461.6126543209877 199.80100000000002 L 461.6126543209877 199.80100000000002 L 461.6126543209877 199.80100000000002 L 461.6126543209877 199.80100000000002 L 461.6126543209877 199.80100000000002 L 454.2268518518519 199.80100000000002 z"
                                  cy="155.844"
                                  cx="461.6126543209877"
                                  j={31}
                                  val={22}
                                  barheight="43.956"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1370"
                                  d="M 468.9984567901235 199.80100000000002 L 468.9984567901235 107.893 L 476.3842592592593 107.893 L 476.3842592592593 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 468.9984567901235 199.80100000000002 L 468.9984567901235 107.893 L 476.3842592592593 107.893 L 476.3842592592593 199.80100000000002 z"
                                  pathfrom="M 468.9984567901235 199.80100000000002 L 468.9984567901235 199.80100000000002 L 476.3842592592593 199.80100000000002 L 476.3842592592593 199.80100000000002 L 476.3842592592593 199.80100000000002 L 476.3842592592593 199.80100000000002 L 476.3842592592593 199.80100000000002 L 468.9984567901235 199.80100000000002 z"
                                  cy="107.892"
                                  cx="476.3842592592593"
                                  j={32}
                                  val={46}
                                  barheight="91.90800000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1372"
                                  d="M 483.77006172839515 199.80100000000002 L 483.77006172839515 105.89500000000001 L 491.15586419753095 105.89500000000001 L 491.15586419753095 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 483.77006172839515 199.80100000000002 L 483.77006172839515 105.89500000000001 L 491.15586419753095 105.89500000000001 L 491.15586419753095 199.80100000000002 z"
                                  pathfrom="M 483.77006172839515 199.80100000000002 L 483.77006172839515 199.80100000000002 L 491.15586419753095 199.80100000000002 L 491.15586419753095 199.80100000000002 L 491.15586419753095 199.80100000000002 L 491.15586419753095 199.80100000000002 L 491.15586419753095 199.80100000000002 L 483.77006172839515 199.80100000000002 z"
                                  cy="105.894"
                                  cx="491.15586419753095"
                                  j={33}
                                  val={47}
                                  barheight="93.906"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1374"
                                  d="M 498.54166666666674 199.80100000000002 L 498.54166666666674 37.96299999999999 L 505.92746913580254 37.96299999999999 L 505.92746913580254 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 498.54166666666674 199.80100000000002 L 498.54166666666674 37.96299999999999 L 505.92746913580254 37.96299999999999 L 505.92746913580254 199.80100000000002 z"
                                  pathfrom="M 498.54166666666674 199.80100000000002 L 498.54166666666674 199.80100000000002 L 505.92746913580254 199.80100000000002 L 505.92746913580254 199.80100000000002 L 505.92746913580254 199.80100000000002 L 505.92746913580254 199.80100000000002 L 505.92746913580254 199.80100000000002 L 498.54166666666674 199.80100000000002 z"
                                  cy="37.96199999999999"
                                  cx="505.92746913580254"
                                  j={34}
                                  val={81}
                                  barheight="161.83800000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1376"
                                  d="M 513.3132716049383 199.80100000000002 L 513.3132716049383 107.893 L 520.6990740740741 107.893 L 520.6990740740741 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 513.3132716049383 199.80100000000002 L 513.3132716049383 107.893 L 520.6990740740741 107.893 L 520.6990740740741 199.80100000000002 z"
                                  pathfrom="M 513.3132716049383 199.80100000000002 L 513.3132716049383 199.80100000000002 L 520.6990740740741 199.80100000000002 L 520.6990740740741 199.80100000000002 L 520.6990740740741 199.80100000000002 L 520.6990740740741 199.80100000000002 L 520.6990740740741 199.80100000000002 L 513.3132716049383 199.80100000000002 z"
                                  cy="107.892"
                                  cx="520.6990740740741"
                                  j={35}
                                  val={46}
                                  barheight="91.90800000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1378"
                                  d="M 528.0848765432099 199.80100000000002 L 528.0848765432099 187.81300000000002 L 535.4706790123457 187.81300000000002 L 535.4706790123457 199.80100000000002 z"
                                  fill="rgba(32,107,196,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 528.0848765432099 199.80100000000002 L 528.0848765432099 187.81300000000002 L 535.4706790123457 187.81300000000002 L 535.4706790123457 199.80100000000002 z"
                                  pathfrom="M 528.0848765432099 199.80100000000002 L 528.0848765432099 199.80100000000002 L 535.4706790123457 199.80100000000002 L 535.4706790123457 199.80100000000002 L 535.4706790123457 199.80100000000002 L 535.4706790123457 199.80100000000002 L 535.4706790123457 199.80100000000002 L 528.0848765432099 199.80100000000002 z"
                                  cy="187.812"
                                  cx="535.4706790123457"
                                  j={36}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <g
                                  id="SvgjsG1304"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}>
                                  <g
                                    id="SvgjsG1305"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1307"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1309"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1311"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1313"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1315"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1317"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1319"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1321"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1323"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1325"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1327"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1329"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1331"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1333"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1335"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1337"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1339"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1341"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1343"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1345"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1347"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1349"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1351"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1353"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1355"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1357"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1359"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1361"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1363"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1365"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1367"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1369"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1371"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1373"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1375"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1377"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1379"
                                className="apexcharts-series"
                                seriesname="Social"
                                rel={2}>
                                <path
                                  id="SvgjsPath1383"
                                  d="M -3.692901234567901 197.80400000000003 L -3.692901234567901 193.80800000000002 L 3.692901234567901 193.80800000000002 L 3.692901234567901 197.80400000000003 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M -3.692901234567901 197.80400000000003 L -3.692901234567901 193.80800000000002 L 3.692901234567901 193.80800000000002 L 3.692901234567901 197.80400000000003 z"
                                  pathfrom="M -3.692901234567901 197.80400000000003 L -3.692901234567901 197.80400000000003 L 3.692901234567901 197.80400000000003 L 3.692901234567901 197.80400000000003 L 3.692901234567901 197.80400000000003 L 3.692901234567901 197.80400000000003 L 3.692901234567901 197.80400000000003 L -3.692901234567901 197.80400000000003 z"
                                  cy="193.80700000000002"
                                  cx="3.692901234567902"
                                  j={0}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1385"
                                  d="M 11.078703703703706 199.80200000000002 L 11.078703703703706 189.812 L 18.464506172839506 189.812 L 18.464506172839506 199.80200000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 11.078703703703706 199.80200000000002 L 11.078703703703706 189.812 L 18.464506172839506 189.812 L 18.464506172839506 199.80200000000002 z"
                                  pathfrom="M 11.078703703703706 199.80200000000002 L 11.078703703703706 199.80200000000002 L 18.464506172839506 199.80200000000002 L 18.464506172839506 199.80200000000002 L 18.464506172839506 199.80200000000002 L 18.464506172839506 199.80200000000002 L 18.464506172839506 199.80200000000002 L 11.078703703703706 199.80200000000002 z"
                                  cy="189.811"
                                  cx="18.464506172839506"
                                  j={1}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1387"
                                  d="M 25.85030864197531 199.80200000000002 L 25.85030864197531 191.81000000000003 L 33.236111111111114 191.81000000000003 L 33.236111111111114 199.80200000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 25.85030864197531 199.80200000000002 L 25.85030864197531 191.81000000000003 L 33.236111111111114 191.81000000000003 L 33.236111111111114 199.80200000000002 z"
                                  pathfrom="M 25.85030864197531 199.80200000000002 L 25.85030864197531 199.80200000000002 L 33.236111111111114 199.80200000000002 L 33.236111111111114 199.80200000000002 L 33.236111111111114 199.80200000000002 L 33.236111111111114 199.80200000000002 L 33.236111111111114 199.80200000000002 L 25.85030864197531 199.80200000000002 z"
                                  cy="191.80900000000003"
                                  cx="33.236111111111114"
                                  j={2}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1389"
                                  d="M 40.621913580246925 199.80200000000002 L 40.621913580246925 193.80800000000002 L 48.00771604938273 193.80800000000002 L 48.00771604938273 199.80200000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 40.621913580246925 199.80200000000002 L 40.621913580246925 193.80800000000002 L 48.00771604938273 193.80800000000002 L 48.00771604938273 199.80200000000002 z"
                                  pathfrom="M 40.621913580246925 199.80200000000002 L 40.621913580246925 199.80200000000002 L 48.00771604938273 199.80200000000002 L 48.00771604938273 199.80200000000002 L 48.00771604938273 199.80200000000002 L 48.00771604938273 199.80200000000002 L 48.00771604938273 199.80200000000002 L 40.621913580246925 199.80200000000002 z"
                                  cy="193.80700000000002"
                                  cx="48.00771604938273"
                                  j={3}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1391"
                                  d="M 55.393518518518526 199.80200000000002 L 55.393518518518526 193.80800000000002 L 62.77932098765433 193.80800000000002 L 62.77932098765433 199.80200000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 55.393518518518526 199.80200000000002 L 55.393518518518526 193.80800000000002 L 62.77932098765433 193.80800000000002 L 62.77932098765433 199.80200000000002 z"
                                  pathfrom="M 55.393518518518526 199.80200000000002 L 55.393518518518526 199.80200000000002 L 62.77932098765433 199.80200000000002 L 62.77932098765433 199.80200000000002 L 62.77932098765433 199.80200000000002 L 62.77932098765433 199.80200000000002 L 62.77932098765433 199.80200000000002 L 55.393518518518526 199.80200000000002 z"
                                  cy="193.80700000000002"
                                  cx="62.77932098765432"
                                  j={4}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1393"
                                  d="M 70.16512345679014 197.80400000000003 L 70.16512345679014 195.80600000000004 L 77.55092592592594 195.80600000000004 L 77.55092592592594 197.80400000000003 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 70.16512345679014 197.80400000000003 L 70.16512345679014 195.80600000000004 L 77.55092592592594 195.80600000000004 L 77.55092592592594 197.80400000000003 z"
                                  pathfrom="M 70.16512345679014 197.80400000000003 L 70.16512345679014 197.80400000000003 L 77.55092592592594 197.80400000000003 L 77.55092592592594 197.80400000000003 L 77.55092592592594 197.80400000000003 L 77.55092592592594 197.80400000000003 L 77.55092592592594 197.80400000000003 L 70.16512345679014 197.80400000000003 z"
                                  cy="195.80500000000004"
                                  cx="77.55092592592594"
                                  j={5}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1395"
                                  d="M 84.93672839506175 197.80400000000003 L 84.93672839506175 189.81200000000004 L 92.32253086419755 189.81200000000004 L 92.32253086419755 197.80400000000003 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 84.93672839506175 197.80400000000003 L 84.93672839506175 189.81200000000004 L 92.32253086419755 189.81200000000004 L 92.32253086419755 197.80400000000003 z"
                                  pathfrom="M 84.93672839506175 197.80400000000003 L 84.93672839506175 197.80400000000003 L 92.32253086419755 197.80400000000003 L 92.32253086419755 197.80400000000003 L 92.32253086419755 197.80400000000003 L 92.32253086419755 197.80400000000003 L 92.32253086419755 197.80400000000003 L 84.93672839506175 197.80400000000003 z"
                                  cy="189.81100000000004"
                                  cx="92.32253086419755"
                                  j={6}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1397"
                                  d="M 99.70833333333334 199.80200000000002 L 99.70833333333334 185.81600000000003 L 107.09413580246914 185.81600000000003 L 107.09413580246914 199.80200000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 99.70833333333334 199.80200000000002 L 99.70833333333334 185.81600000000003 L 107.09413580246914 185.81600000000003 L 107.09413580246914 199.80200000000002 z"
                                  pathfrom="M 99.70833333333334 199.80200000000002 L 99.70833333333334 199.80200000000002 L 107.09413580246914 199.80200000000002 L 107.09413580246914 199.80200000000002 L 107.09413580246914 199.80200000000002 L 107.09413580246914 199.80200000000002 L 107.09413580246914 199.80200000000002 L 99.70833333333334 199.80200000000002 z"
                                  cy="185.81500000000003"
                                  cx="107.09413580246914"
                                  j={7}
                                  val={7}
                                  barheight="13.986000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1399"
                                  d="M 114.47993827160495 199.80200000000002 L 114.47993827160495 189.812 L 121.86574074074075 189.812 L 121.86574074074075 199.80200000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 114.47993827160495 199.80200000000002 L 114.47993827160495 189.812 L 121.86574074074075 189.812 L 121.86574074074075 199.80200000000002 z"
                                  pathfrom="M 114.47993827160495 199.80200000000002 L 114.47993827160495 199.80200000000002 L 121.86574074074075 199.80200000000002 L 121.86574074074075 199.80200000000002 L 121.86574074074075 199.80200000000002 L 121.86574074074075 199.80200000000002 L 121.86574074074075 199.80200000000002 L 114.47993827160495 199.80200000000002 z"
                                  cy="189.811"
                                  cx="121.86574074074075"
                                  j={8}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1401"
                                  d="M 129.25154320987656 199.80200000000002 L 129.25154320987656 197.80400000000003 L 136.63734567901236 197.80400000000003 L 136.63734567901236 199.80200000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 129.25154320987656 199.80200000000002 L 129.25154320987656 197.80400000000003 L 136.63734567901236 197.80400000000003 L 136.63734567901236 199.80200000000002 z"
                                  pathfrom="M 129.25154320987656 199.80200000000002 L 129.25154320987656 199.80200000000002 L 136.63734567901236 199.80200000000002 L 136.63734567901236 199.80200000000002 L 136.63734567901236 199.80200000000002 L 136.63734567901236 199.80200000000002 L 136.63734567901236 199.80200000000002 L 129.25154320987656 199.80200000000002 z"
                                  cy="197.80300000000003"
                                  cx="136.63734567901236"
                                  j={9}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1403"
                                  d="M 144.02314814814818 195.806 L 144.02314814814818 191.81 L 151.40895061728398 191.81 L 151.40895061728398 195.806 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 144.02314814814818 195.806 L 144.02314814814818 191.81 L 151.40895061728398 191.81 L 151.40895061728398 195.806 z"
                                  pathfrom="M 144.02314814814818 195.806 L 144.02314814814818 195.806 L 151.40895061728398 195.806 L 151.40895061728398 195.806 L 151.40895061728398 195.806 L 151.40895061728398 195.806 L 151.40895061728398 195.806 L 144.02314814814818 195.806 z"
                                  cy="191.809"
                                  cx="151.40895061728398"
                                  j={10}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1405"
                                  d="M 158.79475308641977 175.82600000000002 L 158.79475308641977 165.836 L 166.18055555555557 165.836 L 166.18055555555557 175.82600000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 158.79475308641977 175.82600000000002 L 158.79475308641977 165.836 L 166.18055555555557 165.836 L 166.18055555555557 175.82600000000002 z"
                                  pathfrom="M 158.79475308641977 175.82600000000002 L 158.79475308641977 175.82600000000002 L 166.18055555555557 175.82600000000002 L 166.18055555555557 175.82600000000002 L 166.18055555555557 175.82600000000002 L 166.18055555555557 175.82600000000002 L 166.18055555555557 175.82600000000002 L 158.79475308641977 175.82600000000002 z"
                                  cy="165.835"
                                  cx="166.18055555555557"
                                  j={11}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1407"
                                  d="M 173.5663580246914 189.812 L 173.5663580246914 183.818 L 180.9521604938272 183.818 L 180.9521604938272 189.812 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 173.5663580246914 189.812 L 173.5663580246914 183.818 L 180.9521604938272 183.818 L 180.9521604938272 189.812 z"
                                  pathfrom="M 173.5663580246914 189.812 L 173.5663580246914 189.812 L 180.9521604938272 189.812 L 180.9521604938272 189.812 L 180.9521604938272 189.812 L 180.9521604938272 189.812 L 180.9521604938272 189.812 L 173.5663580246914 189.812 z"
                                  cy="183.817"
                                  cx="180.9521604938272"
                                  j={12}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1409"
                                  d="M 188.337962962963 183.818 L 188.337962962963 179.822 L 195.7237654320988 179.822 L 195.7237654320988 183.818 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 188.337962962963 183.818 L 188.337962962963 179.822 L 195.7237654320988 179.822 L 195.7237654320988 183.818 z"
                                  pathfrom="M 188.337962962963 183.818 L 188.337962962963 183.818 L 195.7237654320988 183.818 L 195.7237654320988 183.818 L 195.7237654320988 183.818 L 195.7237654320988 183.818 L 195.7237654320988 183.818 L 188.337962962963 183.818 z"
                                  cy="179.821"
                                  cx="195.7237654320988"
                                  j={13}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1411"
                                  d="M 203.10956790123458 155.846 L 203.10956790123458 143.858 L 210.49537037037038 143.858 L 210.49537037037038 155.846 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 203.10956790123458 155.846 L 203.10956790123458 143.858 L 210.49537037037038 143.858 L 210.49537037037038 155.846 z"
                                  pathfrom="M 203.10956790123458 155.846 L 203.10956790123458 155.846 L 210.49537037037038 155.846 L 210.49537037037038 155.846 L 210.49537037037038 155.846 L 210.49537037037038 155.846 L 210.49537037037038 155.846 L 203.10956790123458 155.846 z"
                                  cy="143.857"
                                  cx="210.49537037037038"
                                  j={14}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1413"
                                  d="M 217.8811728395062 187.81400000000002 L 217.8811728395062 173.82800000000003 L 225.266975308642 173.82800000000003 L 225.266975308642 187.81400000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 217.8811728395062 187.81400000000002 L 217.8811728395062 173.82800000000003 L 225.266975308642 173.82800000000003 L 225.266975308642 187.81400000000002 z"
                                  pathfrom="M 217.8811728395062 187.81400000000002 L 217.8811728395062 187.81400000000002 L 225.266975308642 187.81400000000002 L 225.266975308642 187.81400000000002 L 225.266975308642 187.81400000000002 L 225.266975308642 187.81400000000002 L 225.266975308642 187.81400000000002 L 217.8811728395062 187.81400000000002 z"
                                  cy="173.82700000000003"
                                  cx="225.266975308642"
                                  j={15}
                                  val={7}
                                  barheight="13.986000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1415"
                                  d="M 232.6527777777778 183.818 L 232.6527777777778 169.83200000000002 L 240.0385802469136 169.83200000000002 L 240.0385802469136 183.818 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 232.6527777777778 183.818 L 232.6527777777778 169.83200000000002 L 240.0385802469136 169.83200000000002 L 240.0385802469136 183.818 z"
                                  pathfrom="M 232.6527777777778 183.818 L 232.6527777777778 183.818 L 240.0385802469136 183.818 L 240.0385802469136 183.818 L 240.0385802469136 183.818 L 240.0385802469136 183.818 L 240.0385802469136 183.818 L 232.6527777777778 183.818 z"
                                  cy="169.83100000000002"
                                  cx="240.0385802469136"
                                  j={16}
                                  val={7}
                                  barheight="13.986000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1417"
                                  d="M 247.42438271604942 187.81400000000002 L 247.42438271604942 185.81600000000003 L 254.81018518518522 185.81600000000003 L 254.81018518518522 187.81400000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 247.42438271604942 187.81400000000002 L 247.42438271604942 185.81600000000003 L 254.81018518518522 185.81600000000003 L 254.81018518518522 187.81400000000002 z"
                                  pathfrom="M 247.42438271604942 187.81400000000002 L 247.42438271604942 187.81400000000002 L 254.81018518518522 187.81400000000002 L 254.81018518518522 187.81400000000002 L 254.81018518518522 187.81400000000002 L 254.81018518518522 187.81400000000002 L 254.81018518518522 187.81400000000002 L 247.42438271604942 187.81400000000002 z"
                                  cy="185.81500000000003"
                                  cx="254.81018518518522"
                                  j={17}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1419"
                                  d="M 262.195987654321 191.81000000000003 L 262.195987654321 181.82000000000002 L 269.5817901234568 181.82000000000002 L 269.5817901234568 191.81000000000003 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 262.195987654321 191.81000000000003 L 262.195987654321 181.82000000000002 L 269.5817901234568 181.82000000000002 L 269.5817901234568 191.81000000000003 z"
                                  pathfrom="M 262.195987654321 191.81000000000003 L 262.195987654321 191.81000000000003 L 269.5817901234568 191.81000000000003 L 269.5817901234568 191.81000000000003 L 269.5817901234568 191.81000000000003 L 269.5817901234568 191.81000000000003 L 269.5817901234568 191.81000000000003 L 262.195987654321 191.81000000000003 z"
                                  cy="181.81900000000002"
                                  cx="269.5817901234568"
                                  j={18}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1421"
                                  d="M 276.9675925925926 197.80400000000003 L 276.9675925925926 187.81400000000002 L 284.3533950617284 187.81400000000002 L 284.3533950617284 197.80400000000003 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 276.9675925925926 197.80400000000003 L 276.9675925925926 187.81400000000002 L 284.3533950617284 187.81400000000002 L 284.3533950617284 197.80400000000003 z"
                                  pathfrom="M 276.9675925925926 197.80400000000003 L 276.9675925925926 197.80400000000003 L 284.3533950617284 197.80400000000003 L 284.3533950617284 197.80400000000003 L 284.3533950617284 197.80400000000003 L 284.3533950617284 197.80400000000003 L 284.3533950617284 197.80400000000003 L 276.9675925925926 197.80400000000003 z"
                                  cy="187.81300000000002"
                                  cx="284.3533950617284"
                                  j={19}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1423"
                                  d="M 291.73919753086426 183.818 L 291.73919753086426 179.822 L 299.12500000000006 179.822 L 299.12500000000006 183.818 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 291.73919753086426 183.818 L 291.73919753086426 179.822 L 299.12500000000006 179.822 L 299.12500000000006 183.818 z"
                                  pathfrom="M 291.73919753086426 183.818 L 291.73919753086426 183.818 L 299.12500000000006 183.818 L 299.12500000000006 183.818 L 299.12500000000006 183.818 L 299.12500000000006 183.818 L 299.12500000000006 183.818 L 291.73919753086426 183.818 z"
                                  cy="179.821"
                                  cx="299.12500000000006"
                                  j={20}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1425"
                                  d="M 306.51080246913585 151.85000000000002 L 306.51080246913585 127.87400000000002 L 313.89660493827165 127.87400000000002 L 313.89660493827165 151.85000000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 306.51080246913585 151.85000000000002 L 306.51080246913585 127.87400000000002 L 313.89660493827165 127.87400000000002 L 313.89660493827165 151.85000000000002 z"
                                  pathfrom="M 306.51080246913585 151.85000000000002 L 306.51080246913585 151.85000000000002 L 313.89660493827165 151.85000000000002 L 313.89660493827165 151.85000000000002 L 313.89660493827165 151.85000000000002 L 313.89660493827165 151.85000000000002 L 313.89660493827165 151.85000000000002 L 306.51080246913585 151.85000000000002 z"
                                  cy="127.87300000000002"
                                  cx="313.89660493827165"
                                  j={21}
                                  val={12}
                                  barheight="23.976000000000003"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1427"
                                  d="M 321.28240740740745 141.86 L 321.28240740740745 133.86800000000002 L 328.66820987654324 133.86800000000002 L 328.66820987654324 141.86 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 321.28240740740745 141.86 L 321.28240740740745 133.86800000000002 L 328.66820987654324 133.86800000000002 L 328.66820987654324 141.86 z"
                                  pathfrom="M 321.28240740740745 141.86 L 321.28240740740745 141.86 L 328.66820987654324 141.86 L 328.66820987654324 141.86 L 328.66820987654324 141.86 L 328.66820987654324 141.86 L 328.66820987654324 141.86 L 321.28240740740745 141.86 z"
                                  cy="133.86700000000002"
                                  cx="328.66820987654324"
                                  j={22}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1429"
                                  d="M 336.05401234567904 97.90400000000001 L 336.05401234567904 85.91600000000001 L 343.43981481481484 85.91600000000001 L 343.43981481481484 97.90400000000001 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 336.05401234567904 97.90400000000001 L 336.05401234567904 85.91600000000001 L 343.43981481481484 85.91600000000001 L 343.43981481481484 97.90400000000001 z"
                                  pathfrom="M 336.05401234567904 97.90400000000001 L 336.05401234567904 97.90400000000001 L 343.43981481481484 97.90400000000001 L 343.43981481481484 97.90400000000001 L 343.43981481481484 97.90400000000001 L 343.43981481481484 97.90400000000001 L 343.43981481481484 97.90400000000001 L 336.05401234567904 97.90400000000001 z"
                                  cy="85.915"
                                  cx="343.43981481481484"
                                  j={23}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1431"
                                  d="M 350.8256172839507 119.882 L 350.8256172839507 83.918 L 358.2114197530865 83.918 L 358.2114197530865 119.882 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 350.8256172839507 119.882 L 350.8256172839507 83.918 L 358.2114197530865 83.918 L 358.2114197530865 119.882 z"
                                  pathfrom="M 350.8256172839507 119.882 L 350.8256172839507 119.882 L 358.2114197530865 119.882 L 358.2114197530865 119.882 L 358.2114197530865 119.882 L 358.2114197530865 119.882 L 358.2114197530865 119.882 L 350.8256172839507 119.882 z"
                                  cy="83.917"
                                  cx="358.2114197530865"
                                  j={24}
                                  val={18}
                                  barheight="35.964000000000006"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1433"
                                  d="M 365.5972222222223 105.89600000000002 L 365.5972222222223 99.90200000000002 L 372.9830246913581 99.90200000000002 L 372.9830246913581 105.89600000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 365.5972222222223 105.89600000000002 L 365.5972222222223 99.90200000000002 L 372.9830246913581 99.90200000000002 L 372.9830246913581 105.89600000000002 z"
                                  pathfrom="M 365.5972222222223 105.89600000000002 L 365.5972222222223 105.89600000000002 L 372.9830246913581 105.89600000000002 L 372.9830246913581 105.89600000000002 L 372.9830246913581 105.89600000000002 L 372.9830246913581 105.89600000000002 L 372.9830246913581 105.89600000000002 L 365.5972222222223 105.89600000000002 z"
                                  cy="99.90100000000001"
                                  cx="372.9830246913581"
                                  j={25}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1435"
                                  d="M 380.3688271604939 153.848 L 380.3688271604939 143.858 L 387.7546296296297 143.858 L 387.7546296296297 153.848 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 380.3688271604939 153.848 L 380.3688271604939 143.858 L 387.7546296296297 143.858 L 387.7546296296297 153.848 z"
                                  pathfrom="M 380.3688271604939 153.848 L 380.3688271604939 153.848 L 387.7546296296297 153.848 L 387.7546296296297 153.848 L 387.7546296296297 153.848 L 387.7546296296297 153.848 L 387.7546296296297 153.848 L 380.3688271604939 153.848 z"
                                  cy="143.857"
                                  cx="387.7546296296297"
                                  j={26}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1437"
                                  d="M 395.1404320987655 147.854 L 395.1404320987655 143.858 L 402.52623456790127 143.858 L 402.52623456790127 147.854 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 395.1404320987655 147.854 L 395.1404320987655 143.858 L 402.52623456790127 143.858 L 402.52623456790127 147.854 z"
                                  pathfrom="M 395.1404320987655 147.854 L 395.1404320987655 147.854 L 402.52623456790127 147.854 L 402.52623456790127 147.854 L 402.52623456790127 147.854 L 402.52623456790127 147.854 L 402.52623456790127 147.854 L 395.1404320987655 147.854 z"
                                  cy="143.857"
                                  cx="402.52623456790127"
                                  j={27}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1439"
                                  d="M 409.91203703703707 99.902 L 409.91203703703707 73.928 L 417.29783950617286 73.928 L 417.29783950617286 99.902 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 409.91203703703707 99.902 L 409.91203703703707 73.928 L 417.29783950617286 73.928 L 417.29783950617286 99.902 z"
                                  pathfrom="M 409.91203703703707 99.902 L 409.91203703703707 99.902 L 417.29783950617286 99.902 L 417.29783950617286 99.902 L 417.29783950617286 99.902 L 417.29783950617286 99.902 L 417.29783950617286 99.902 L 409.91203703703707 99.902 z"
                                  cy="73.92699999999999"
                                  cx="417.29783950617286"
                                  j={28}
                                  val={13}
                                  barheight="25.974000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1441"
                                  d="M 424.6836419753087 147.854 L 424.6836419753087 117.88400000000001 L 432.0694444444445 117.88400000000001 L 432.0694444444445 147.854 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 424.6836419753087 147.854 L 424.6836419753087 117.88400000000001 L 432.0694444444445 117.88400000000001 L 432.0694444444445 147.854 z"
                                  pathfrom="M 424.6836419753087 147.854 L 424.6836419753087 147.854 L 432.0694444444445 147.854 L 432.0694444444445 147.854 L 432.0694444444445 147.854 L 432.0694444444445 147.854 L 432.0694444444445 147.854 L 424.6836419753087 147.854 z"
                                  cy="117.88300000000001"
                                  cx="432.0694444444445"
                                  j={29}
                                  val={15}
                                  barheight="29.970000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1443"
                                  d="M 439.4552469135803 117.88400000000001 L 439.4552469135803 77.924 L 446.8410493827161 77.924 L 446.8410493827161 117.88400000000001 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 439.4552469135803 117.88400000000001 L 439.4552469135803 77.924 L 446.8410493827161 77.924 L 446.8410493827161 117.88400000000001 z"
                                  pathfrom="M 439.4552469135803 117.88400000000001 L 439.4552469135803 117.88400000000001 L 446.8410493827161 117.88400000000001 L 446.8410493827161 117.88400000000001 L 446.8410493827161 117.88400000000001 L 446.8410493827161 117.88400000000001 L 446.8410493827161 117.88400000000001 L 439.4552469135803 117.88400000000001 z"
                                  cy="77.923"
                                  cx="446.8410493827161"
                                  j={30}
                                  val={20}
                                  barheight="39.96000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1445"
                                  d="M 454.2268518518519 155.846 L 454.2268518518519 61.93999999999999 L 461.6126543209877 61.93999999999999 L 461.6126543209877 155.846 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 454.2268518518519 155.846 L 454.2268518518519 61.93999999999999 L 461.6126543209877 61.93999999999999 L 461.6126543209877 155.846 z"
                                  pathfrom="M 454.2268518518519 155.846 L 454.2268518518519 155.846 L 461.6126543209877 155.846 L 461.6126543209877 155.846 L 461.6126543209877 155.846 L 461.6126543209877 155.846 L 461.6126543209877 155.846 L 454.2268518518519 155.846 z"
                                  cy="61.93899999999999"
                                  cx="461.6126543209877"
                                  j={31}
                                  val={47}
                                  barheight="93.906"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1447"
                                  d="M 468.9984567901235 107.894 L 468.9984567901235 71.93 L 476.3842592592593 71.93 L 476.3842592592593 107.894 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 468.9984567901235 107.894 L 468.9984567901235 71.93 L 476.3842592592593 71.93 L 476.3842592592593 107.894 z"
                                  pathfrom="M 468.9984567901235 107.894 L 468.9984567901235 107.894 L 476.3842592592593 107.894 L 476.3842592592593 107.894 L 476.3842592592593 107.894 L 476.3842592592593 107.894 L 476.3842592592593 107.894 L 468.9984567901235 107.894 z"
                                  cy="71.929"
                                  cx="476.3842592592593"
                                  j={32}
                                  val={18}
                                  barheight="35.964000000000006"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1449"
                                  d="M 483.77006172839515 105.89600000000002 L 483.77006172839515 75.92600000000002 L 491.15586419753095 75.92600000000002 L 491.15586419753095 105.89600000000002 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 483.77006172839515 105.89600000000002 L 483.77006172839515 75.92600000000002 L 491.15586419753095 75.92600000000002 L 491.15586419753095 105.89600000000002 z"
                                  pathfrom="M 483.77006172839515 105.89600000000002 L 483.77006172839515 105.89600000000002 L 491.15586419753095 105.89600000000002 L 491.15586419753095 105.89600000000002 L 491.15586419753095 105.89600000000002 L 491.15586419753095 105.89600000000002 L 491.15586419753095 105.89600000000002 L 483.77006172839515 105.89600000000002 z"
                                  cy="75.92500000000001"
                                  cx="491.15586419753095"
                                  j={33}
                                  val={15}
                                  barheight="29.970000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1451"
                                  d="M 498.54166666666674 37.963999999999984 L 498.54166666666674 15.985999999999985 L 505.92746913580254 15.985999999999985 L 505.92746913580254 37.963999999999984 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 498.54166666666674 37.963999999999984 L 498.54166666666674 15.985999999999985 L 505.92746913580254 15.985999999999985 L 505.92746913580254 37.963999999999984 z"
                                  pathfrom="M 498.54166666666674 37.963999999999984 L 498.54166666666674 37.963999999999984 L 505.92746913580254 37.963999999999984 L 505.92746913580254 37.963999999999984 L 505.92746913580254 37.963999999999984 L 505.92746913580254 37.963999999999984 L 505.92746913580254 37.963999999999984 L 498.54166666666674 37.963999999999984 z"
                                  cy="15.984999999999985"
                                  cx="505.92746913580254"
                                  j={34}
                                  val={11}
                                  barheight="21.978"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1453"
                                  d="M 513.3132716049383 107.894 L 513.3132716049383 87.914 L 520.6990740740741 87.914 L 520.6990740740741 107.894 z"
                                  fill="rgba(32, 107, 196, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 513.3132716049383 107.894 L 513.3132716049383 87.914 L 520.6990740740741 87.914 L 520.6990740740741 107.894 z"
                                  pathfrom="M 513.3132716049383 107.894 L 513.3132716049383 107.894 L 520.6990740740741 107.894 L 520.6990740740741 107.894 L 520.6990740740741 107.894 L 520.6990740740741 107.894 L 520.6990740740741 107.894 L 513.3132716049383 107.894 z"
                                  cy="87.913"
                                  cx="520.6990740740741"
                                  j={35}
                                  val={10}
                                  barheight="19.980000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1455"
                                  d="M 528.0848765432099 187.81400000000002 L 528.0848765432099 187.81400000000002 L 535.4706790123457 187.81400000000002 L 535.4706790123457 187.81400000000002 z"
                                  fill="none"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 528.0848765432099 187.81400000000002 L 528.0848765432099 187.81400000000002 L 535.4706790123457 187.81400000000002 L 535.4706790123457 187.81400000000002 z"
                                  pathfrom="M 528.0848765432099 187.81400000000002 L 528.0848765432099 187.81400000000002 L 535.4706790123457 187.81400000000002 L 535.4706790123457 187.81400000000002 L 535.4706790123457 187.81400000000002 L 535.4706790123457 187.81400000000002 L 535.4706790123457 187.81400000000002 L 528.0848765432099 187.81400000000002 z"
                                  cy="187.81300000000002"
                                  cx="535.4706790123457"
                                  j={36}
                                  val={0}
                                  barheight={0}
                                  barwidth="7.385802469135802"
                                />
                                <g
                                  id="SvgjsG1381"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}>
                                  <g
                                    id="SvgjsG1382"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1384"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1386"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1388"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1390"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1392"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1394"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1396"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1398"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1400"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1402"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1404"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1406"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1408"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1410"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1412"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1414"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1416"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1418"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1420"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1422"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1424"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1426"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1428"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1430"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1432"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1434"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1436"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1438"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1440"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1442"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1444"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1446"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1448"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1450"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1452"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1454"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1456"
                                className="apexcharts-series"
                                seriesname="Other"
                                rel={3}>
                                <path
                                  id="SvgjsPath1460"
                                  d="M -3.692901234567901 193.80900000000003 L -3.692901234567901 189.81300000000002 L 3.692901234567901 189.81300000000002 L 3.692901234567901 193.80900000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M -3.692901234567901 193.80900000000003 L -3.692901234567901 189.81300000000002 L 3.692901234567901 189.81300000000002 L 3.692901234567901 193.80900000000003 z"
                                  pathfrom="M -3.692901234567901 193.80900000000003 L -3.692901234567901 193.80900000000003 L 3.692901234567901 193.80900000000003 L 3.692901234567901 193.80900000000003 L 3.692901234567901 193.80900000000003 L 3.692901234567901 193.80900000000003 L 3.692901234567901 193.80900000000003 L -3.692901234567901 193.80900000000003 z"
                                  cy="189.812"
                                  cx="3.692901234567902"
                                  j={0}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1462"
                                  d="M 11.078703703703706 189.81300000000002 L 11.078703703703706 171.83100000000002 L 18.464506172839506 171.83100000000002 L 18.464506172839506 189.81300000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 11.078703703703706 189.81300000000002 L 11.078703703703706 171.83100000000002 L 18.464506172839506 171.83100000000002 L 18.464506172839506 189.81300000000002 z"
                                  pathfrom="M 11.078703703703706 189.81300000000002 L 11.078703703703706 189.81300000000002 L 18.464506172839506 189.81300000000002 L 18.464506172839506 189.81300000000002 L 18.464506172839506 189.81300000000002 L 18.464506172839506 189.81300000000002 L 18.464506172839506 189.81300000000002 L 11.078703703703706 189.81300000000002 z"
                                  cy="171.83"
                                  cx="18.464506172839506"
                                  j={1}
                                  val={9}
                                  barheight="17.982000000000003"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1464"
                                  d="M 25.85030864197531 191.81100000000004 L 25.85030864197531 189.81300000000005 L 33.236111111111114 189.81300000000005 L 33.236111111111114 191.81100000000004 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 25.85030864197531 191.81100000000004 L 25.85030864197531 189.81300000000005 L 33.236111111111114 189.81300000000005 L 33.236111111111114 191.81100000000004 z"
                                  pathfrom="M 25.85030864197531 191.81100000000004 L 25.85030864197531 191.81100000000004 L 33.236111111111114 191.81100000000004 L 33.236111111111114 191.81100000000004 L 33.236111111111114 191.81100000000004 L 33.236111111111114 191.81100000000004 L 33.236111111111114 191.81100000000004 L 25.85030864197531 191.81100000000004 z"
                                  cy="189.81200000000004"
                                  cx="33.236111111111114"
                                  j={2}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1466"
                                  d="M 40.621913580246925 193.80900000000003 L 40.621913580246925 179.82300000000004 L 48.00771604938273 179.82300000000004 L 48.00771604938273 193.80900000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 40.621913580246925 193.80900000000003 L 40.621913580246925 179.82300000000004 L 48.00771604938273 179.82300000000004 L 48.00771604938273 193.80900000000003 z"
                                  pathfrom="M 40.621913580246925 193.80900000000003 L 40.621913580246925 193.80900000000003 L 48.00771604938273 193.80900000000003 L 48.00771604938273 193.80900000000003 L 48.00771604938273 193.80900000000003 L 48.00771604938273 193.80900000000003 L 48.00771604938273 193.80900000000003 L 40.621913580246925 193.80900000000003 z"
                                  cy="179.82200000000003"
                                  cx="48.00771604938273"
                                  j={3}
                                  val={7}
                                  barheight="13.986000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1468"
                                  d="M 55.393518518518526 193.80900000000003 L 55.393518518518526 177.82500000000002 L 62.77932098765433 177.82500000000002 L 62.77932098765433 193.80900000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 55.393518518518526 193.80900000000003 L 55.393518518518526 177.82500000000002 L 62.77932098765433 177.82500000000002 L 62.77932098765433 193.80900000000003 z"
                                  pathfrom="M 55.393518518518526 193.80900000000003 L 55.393518518518526 193.80900000000003 L 62.77932098765433 193.80900000000003 L 62.77932098765433 193.80900000000003 L 62.77932098765433 193.80900000000003 L 62.77932098765433 193.80900000000003 L 62.77932098765433 193.80900000000003 L 55.393518518518526 193.80900000000003 z"
                                  cy="177.824"
                                  cx="62.77932098765432"
                                  j={4}
                                  val={8}
                                  barheight="15.984000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1470"
                                  d="M 70.16512345679014 195.80700000000004 L 70.16512345679014 189.81300000000005 L 77.55092592592594 189.81300000000005 L 77.55092592592594 195.80700000000004 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 70.16512345679014 195.80700000000004 L 70.16512345679014 189.81300000000005 L 77.55092592592594 189.81300000000005 L 77.55092592592594 195.80700000000004 z"
                                  pathfrom="M 70.16512345679014 195.80700000000004 L 70.16512345679014 195.80700000000004 L 77.55092592592594 195.80700000000004 L 77.55092592592594 195.80700000000004 L 77.55092592592594 195.80700000000004 L 77.55092592592594 195.80700000000004 L 77.55092592592594 195.80700000000004 L 70.16512345679014 195.80700000000004 z"
                                  cy="189.81200000000004"
                                  cx="77.55092592592594"
                                  j={5}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1472"
                                  d="M 84.93672839506175 189.81300000000005 L 84.93672839506175 177.82500000000005 L 92.32253086419755 177.82500000000005 L 92.32253086419755 189.81300000000005 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 84.93672839506175 189.81300000000005 L 84.93672839506175 177.82500000000005 L 92.32253086419755 177.82500000000005 L 92.32253086419755 189.81300000000005 z"
                                  pathfrom="M 84.93672839506175 189.81300000000005 L 84.93672839506175 189.81300000000005 L 92.32253086419755 189.81300000000005 L 92.32253086419755 189.81300000000005 L 92.32253086419755 189.81300000000005 L 92.32253086419755 189.81300000000005 L 92.32253086419755 189.81300000000005 L 84.93672839506175 189.81300000000005 z"
                                  cy="177.82400000000004"
                                  cx="92.32253086419755"
                                  j={6}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1474"
                                  d="M 99.70833333333334 185.81700000000004 L 99.70833333333334 175.82700000000003 L 107.09413580246914 175.82700000000003 L 107.09413580246914 185.81700000000004 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 99.70833333333334 185.81700000000004 L 99.70833333333334 175.82700000000003 L 107.09413580246914 175.82700000000003 L 107.09413580246914 185.81700000000004 z"
                                  pathfrom="M 99.70833333333334 185.81700000000004 L 99.70833333333334 185.81700000000004 L 107.09413580246914 185.81700000000004 L 107.09413580246914 185.81700000000004 L 107.09413580246914 185.81700000000004 L 107.09413580246914 185.81700000000004 L 107.09413580246914 185.81700000000004 L 99.70833333333334 185.81700000000004 z"
                                  cy="175.82600000000002"
                                  cx="107.09413580246914"
                                  j={7}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1476"
                                  d="M 114.47993827160495 189.81300000000002 L 114.47993827160495 179.823 L 121.86574074074075 179.823 L 121.86574074074075 189.81300000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 114.47993827160495 189.81300000000002 L 114.47993827160495 179.823 L 121.86574074074075 179.823 L 121.86574074074075 189.81300000000002 z"
                                  pathfrom="M 114.47993827160495 189.81300000000002 L 114.47993827160495 189.81300000000002 L 121.86574074074075 189.81300000000002 L 121.86574074074075 189.81300000000002 L 121.86574074074075 189.81300000000002 L 121.86574074074075 189.81300000000002 L 121.86574074074075 189.81300000000002 L 114.47993827160495 189.81300000000002 z"
                                  cy="179.822"
                                  cx="121.86574074074075"
                                  j={8}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1478"
                                  d="M 129.25154320987656 197.80500000000004 L 129.25154320987656 189.81300000000005 L 136.63734567901236 189.81300000000005 L 136.63734567901236 197.80500000000004 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 129.25154320987656 197.80500000000004 L 129.25154320987656 189.81300000000005 L 136.63734567901236 189.81300000000005 L 136.63734567901236 197.80500000000004 z"
                                  pathfrom="M 129.25154320987656 197.80500000000004 L 129.25154320987656 197.80500000000004 L 136.63734567901236 197.80500000000004 L 136.63734567901236 197.80500000000004 L 136.63734567901236 197.80500000000004 L 136.63734567901236 197.80500000000004 L 136.63734567901236 197.80500000000004 L 129.25154320987656 197.80500000000004 z"
                                  cy="189.81200000000004"
                                  cx="136.63734567901236"
                                  j={9}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1480"
                                  d="M 144.02314814814818 191.811 L 144.02314814814818 179.823 L 151.40895061728398 179.823 L 151.40895061728398 191.811 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 144.02314814814818 191.811 L 144.02314814814818 179.823 L 151.40895061728398 179.823 L 151.40895061728398 191.811 z"
                                  pathfrom="M 144.02314814814818 191.811 L 144.02314814814818 191.811 L 151.40895061728398 191.811 L 151.40895061728398 191.811 L 151.40895061728398 191.811 L 151.40895061728398 191.811 L 151.40895061728398 191.811 L 144.02314814814818 191.811 z"
                                  cy="179.822"
                                  cx="151.40895061728398"
                                  j={10}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1482"
                                  d="M 158.79475308641977 165.83700000000002 L 158.79475308641977 157.84500000000003 L 166.18055555555557 157.84500000000003 L 166.18055555555557 165.83700000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 158.79475308641977 165.83700000000002 L 158.79475308641977 157.84500000000003 L 166.18055555555557 157.84500000000003 L 166.18055555555557 165.83700000000002 z"
                                  pathfrom="M 158.79475308641977 165.83700000000002 L 158.79475308641977 165.83700000000002 L 166.18055555555557 165.83700000000002 L 166.18055555555557 165.83700000000002 L 166.18055555555557 165.83700000000002 L 166.18055555555557 165.83700000000002 L 166.18055555555557 165.83700000000002 L 158.79475308641977 165.83700000000002 z"
                                  cy="157.84400000000002"
                                  cx="166.18055555555557"
                                  j={11}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1484"
                                  d="M 173.5663580246914 183.81900000000002 L 173.5663580246914 181.82100000000003 L 180.9521604938272 181.82100000000003 L 180.9521604938272 183.81900000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 173.5663580246914 183.81900000000002 L 173.5663580246914 181.82100000000003 L 180.9521604938272 181.82100000000003 L 180.9521604938272 183.81900000000002 z"
                                  pathfrom="M 173.5663580246914 183.81900000000002 L 173.5663580246914 183.81900000000002 L 180.9521604938272 183.81900000000002 L 180.9521604938272 183.81900000000002 L 180.9521604938272 183.81900000000002 L 180.9521604938272 183.81900000000002 L 180.9521604938272 183.81900000000002 L 173.5663580246914 183.81900000000002 z"
                                  cy="181.82000000000002"
                                  cx="180.9521604938272"
                                  j={12}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1486"
                                  d="M 188.337962962963 179.823 L 188.337962962963 161.841 L 195.7237654320988 161.841 L 195.7237654320988 179.823 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 188.337962962963 179.823 L 188.337962962963 161.841 L 195.7237654320988 161.841 L 195.7237654320988 179.823 z"
                                  pathfrom="M 188.337962962963 179.823 L 188.337962962963 179.823 L 195.7237654320988 179.823 L 195.7237654320988 179.823 L 195.7237654320988 179.823 L 195.7237654320988 179.823 L 195.7237654320988 179.823 L 188.337962962963 179.823 z"
                                  cy="161.84"
                                  cx="195.7237654320988"
                                  j={13}
                                  val={9}
                                  barheight="17.982000000000003"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1488"
                                  d="M 203.10956790123458 143.859 L 203.10956790123458 137.865 L 210.49537037037038 137.865 L 210.49537037037038 143.859 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 203.10956790123458 143.859 L 203.10956790123458 137.865 L 210.49537037037038 137.865 L 210.49537037037038 143.859 z"
                                  pathfrom="M 203.10956790123458 143.859 L 203.10956790123458 143.859 L 210.49537037037038 143.859 L 210.49537037037038 143.859 L 210.49537037037038 143.859 L 210.49537037037038 143.859 L 210.49537037037038 143.859 L 203.10956790123458 143.859 z"
                                  cy="137.864"
                                  cx="210.49537037037038"
                                  j={14}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1490"
                                  d="M 217.8811728395062 173.82900000000004 L 217.8811728395062 161.84100000000004 L 225.266975308642 161.84100000000004 L 225.266975308642 173.82900000000004 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 217.8811728395062 173.82900000000004 L 217.8811728395062 161.84100000000004 L 225.266975308642 161.84100000000004 L 225.266975308642 173.82900000000004 z"
                                  pathfrom="M 217.8811728395062 173.82900000000004 L 217.8811728395062 173.82900000000004 L 225.266975308642 173.82900000000004 L 225.266975308642 173.82900000000004 L 225.266975308642 173.82900000000004 L 225.266975308642 173.82900000000004 L 225.266975308642 173.82900000000004 L 217.8811728395062 173.82900000000004 z"
                                  cy="161.84000000000003"
                                  cx="225.266975308642"
                                  j={15}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1492"
                                  d="M 232.6527777777778 169.83300000000003 L 232.6527777777778 155.84700000000004 L 240.0385802469136 155.84700000000004 L 240.0385802469136 169.83300000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 232.6527777777778 169.83300000000003 L 232.6527777777778 155.84700000000004 L 240.0385802469136 155.84700000000004 L 240.0385802469136 169.83300000000003 z"
                                  pathfrom="M 232.6527777777778 169.83300000000003 L 232.6527777777778 169.83300000000003 L 240.0385802469136 169.83300000000003 L 240.0385802469136 169.83300000000003 L 240.0385802469136 169.83300000000003 L 240.0385802469136 169.83300000000003 L 240.0385802469136 169.83300000000003 L 232.6527777777778 169.83300000000003 z"
                                  cy="155.84600000000003"
                                  cx="240.0385802469136"
                                  j={16}
                                  val={7}
                                  barheight="13.986000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1494"
                                  d="M 247.42438271604942 185.81700000000004 L 247.42438271604942 175.82700000000003 L 254.81018518518522 175.82700000000003 L 254.81018518518522 185.81700000000004 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 247.42438271604942 185.81700000000004 L 247.42438271604942 175.82700000000003 L 254.81018518518522 175.82700000000003 L 254.81018518518522 185.81700000000004 z"
                                  pathfrom="M 247.42438271604942 185.81700000000004 L 247.42438271604942 185.81700000000004 L 254.81018518518522 185.81700000000004 L 254.81018518518522 185.81700000000004 L 254.81018518518522 185.81700000000004 L 254.81018518518522 185.81700000000004 L 254.81018518518522 185.81700000000004 L 247.42438271604942 185.81700000000004 z"
                                  cy="175.82600000000002"
                                  cx="254.81018518518522"
                                  j={17}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1496"
                                  d="M 262.195987654321 181.82100000000003 L 262.195987654321 177.82500000000002 L 269.5817901234568 177.82500000000002 L 269.5817901234568 181.82100000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 262.195987654321 181.82100000000003 L 262.195987654321 177.82500000000002 L 269.5817901234568 177.82500000000002 L 269.5817901234568 181.82100000000003 z"
                                  pathfrom="M 262.195987654321 181.82100000000003 L 262.195987654321 181.82100000000003 L 269.5817901234568 181.82100000000003 L 269.5817901234568 181.82100000000003 L 269.5817901234568 181.82100000000003 L 269.5817901234568 181.82100000000003 L 269.5817901234568 181.82100000000003 L 262.195987654321 181.82100000000003 z"
                                  cy="177.824"
                                  cx="269.5817901234568"
                                  j={18}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1498"
                                  d="M 276.9675925925926 187.81500000000003 L 276.9675925925926 171.83100000000002 L 284.3533950617284 171.83100000000002 L 284.3533950617284 187.81500000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 276.9675925925926 187.81500000000003 L 276.9675925925926 171.83100000000002 L 284.3533950617284 171.83100000000002 L 284.3533950617284 187.81500000000003 z"
                                  pathfrom="M 276.9675925925926 187.81500000000003 L 276.9675925925926 187.81500000000003 L 284.3533950617284 187.81500000000003 L 284.3533950617284 187.81500000000003 L 284.3533950617284 187.81500000000003 L 284.3533950617284 187.81500000000003 L 284.3533950617284 187.81500000000003 L 276.9675925925926 187.81500000000003 z"
                                  cy="171.83"
                                  cx="284.3533950617284"
                                  j={19}
                                  val={8}
                                  barheight="15.984000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1500"
                                  d="M 291.73919753086426 179.823 L 291.73919753086426 171.83100000000002 L 299.12500000000006 171.83100000000002 L 299.12500000000006 179.823 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 291.73919753086426 179.823 L 291.73919753086426 171.83100000000002 L 299.12500000000006 171.83100000000002 L 299.12500000000006 179.823 z"
                                  pathfrom="M 291.73919753086426 179.823 L 291.73919753086426 179.823 L 299.12500000000006 179.823 L 299.12500000000006 179.823 L 299.12500000000006 179.823 L 299.12500000000006 179.823 L 299.12500000000006 179.823 L 291.73919753086426 179.823 z"
                                  cy="171.83"
                                  cx="299.12500000000006"
                                  j={20}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1502"
                                  d="M 306.51080246913585 127.87500000000003 L 306.51080246913585 109.89300000000003 L 313.89660493827165 109.89300000000003 L 313.89660493827165 127.87500000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 306.51080246913585 127.87500000000003 L 306.51080246913585 109.89300000000003 L 313.89660493827165 109.89300000000003 L 313.89660493827165 127.87500000000003 z"
                                  pathfrom="M 306.51080246913585 127.87500000000003 L 306.51080246913585 127.87500000000003 L 313.89660493827165 127.87500000000003 L 313.89660493827165 127.87500000000003 L 313.89660493827165 127.87500000000003 L 313.89660493827165 127.87500000000003 L 313.89660493827165 127.87500000000003 L 306.51080246913585 127.87500000000003 z"
                                  cy="109.89200000000002"
                                  cx="313.89660493827165"
                                  j={21}
                                  val={9}
                                  barheight="17.982000000000003"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1504"
                                  d="M 321.28240740740745 133.86900000000003 L 321.28240740740745 131.87100000000004 L 328.66820987654324 131.87100000000004 L 328.66820987654324 133.86900000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 321.28240740740745 133.86900000000003 L 321.28240740740745 131.87100000000004 L 328.66820987654324 131.87100000000004 L 328.66820987654324 133.86900000000003 z"
                                  pathfrom="M 321.28240740740745 133.86900000000003 L 321.28240740740745 133.86900000000003 L 328.66820987654324 133.86900000000003 L 328.66820987654324 133.86900000000003 L 328.66820987654324 133.86900000000003 L 328.66820987654324 133.86900000000003 L 328.66820987654324 133.86900000000003 L 321.28240740740745 133.86900000000003 z"
                                  cy="131.87000000000003"
                                  cx="328.66820987654324"
                                  j={22}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1506"
                                  d="M 336.05401234567904 85.91700000000002 L 336.05401234567904 81.92100000000002 L 343.43981481481484 81.92100000000002 L 343.43981481481484 85.91700000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 336.05401234567904 85.91700000000002 L 336.05401234567904 81.92100000000002 L 343.43981481481484 81.92100000000002 L 343.43981481481484 85.91700000000002 z"
                                  pathfrom="M 336.05401234567904 85.91700000000002 L 336.05401234567904 85.91700000000002 L 343.43981481481484 85.91700000000002 L 343.43981481481484 85.91700000000002 L 343.43981481481484 85.91700000000002 L 343.43981481481484 85.91700000000002 L 343.43981481481484 85.91700000000002 L 336.05401234567904 85.91700000000002 z"
                                  cy="81.92000000000002"
                                  cx="343.43981481481484"
                                  j={23}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1508"
                                  d="M 350.8256172839507 83.91900000000001 L 350.8256172839507 71.93100000000001 L 358.2114197530865 71.93100000000001 L 358.2114197530865 83.91900000000001 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 350.8256172839507 83.91900000000001 L 350.8256172839507 71.93100000000001 L 358.2114197530865 71.93100000000001 L 358.2114197530865 83.91900000000001 z"
                                  pathfrom="M 350.8256172839507 83.91900000000001 L 350.8256172839507 83.91900000000001 L 358.2114197530865 83.91900000000001 L 358.2114197530865 83.91900000000001 L 358.2114197530865 83.91900000000001 L 358.2114197530865 83.91900000000001 L 358.2114197530865 83.91900000000001 L 350.8256172839507 83.91900000000001 z"
                                  cy="71.93"
                                  cx="358.2114197530865"
                                  j={24}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1510"
                                  d="M 365.5972222222223 99.90300000000002 L 365.5972222222223 85.91700000000002 L 372.9830246913581 85.91700000000002 L 372.9830246913581 99.90300000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 365.5972222222223 99.90300000000002 L 365.5972222222223 85.91700000000002 L 372.9830246913581 85.91700000000002 L 372.9830246913581 99.90300000000002 z"
                                  pathfrom="M 365.5972222222223 99.90300000000002 L 365.5972222222223 99.90300000000002 L 372.9830246913581 99.90300000000002 L 372.9830246913581 99.90300000000002 L 372.9830246913581 99.90300000000002 L 372.9830246913581 99.90300000000002 L 372.9830246913581 99.90300000000002 L 365.5972222222223 99.90300000000002 z"
                                  cy="85.91600000000001"
                                  cx="372.9830246913581"
                                  j={25}
                                  val={7}
                                  barheight="13.986000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1512"
                                  d="M 380.3688271604939 143.859 L 380.3688271604939 133.869 L 387.7546296296297 133.869 L 387.7546296296297 143.859 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 380.3688271604939 143.859 L 380.3688271604939 133.869 L 387.7546296296297 133.869 L 387.7546296296297 143.859 z"
                                  pathfrom="M 380.3688271604939 143.859 L 380.3688271604939 143.859 L 387.7546296296297 143.859 L 387.7546296296297 143.859 L 387.7546296296297 143.859 L 387.7546296296297 143.859 L 387.7546296296297 143.859 L 380.3688271604939 143.859 z"
                                  cy="133.868"
                                  cx="387.7546296296297"
                                  j={26}
                                  val={5}
                                  barheight="9.990000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1514"
                                  d="M 395.1404320987655 143.859 L 395.1404320987655 141.86100000000002 L 402.52623456790127 141.86100000000002 L 402.52623456790127 143.859 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 395.1404320987655 143.859 L 395.1404320987655 141.86100000000002 L 402.52623456790127 141.86100000000002 L 402.52623456790127 143.859 z"
                                  pathfrom="M 395.1404320987655 143.859 L 395.1404320987655 143.859 L 402.52623456790127 143.859 L 402.52623456790127 143.859 L 402.52623456790127 143.859 L 402.52623456790127 143.859 L 402.52623456790127 143.859 L 395.1404320987655 143.859 z"
                                  cy="141.86"
                                  cx="402.52623456790127"
                                  j={27}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1516"
                                  d="M 409.91203703703707 73.929 L 409.91203703703707 57.94499999999999 L 417.29783950617286 57.94499999999999 L 417.29783950617286 73.929 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 409.91203703703707 73.929 L 409.91203703703707 57.94499999999999 L 417.29783950617286 57.94499999999999 L 417.29783950617286 73.929 z"
                                  pathfrom="M 409.91203703703707 73.929 L 409.91203703703707 73.929 L 417.29783950617286 73.929 L 417.29783950617286 73.929 L 417.29783950617286 73.929 L 417.29783950617286 73.929 L 417.29783950617286 73.929 L 409.91203703703707 73.929 z"
                                  cy="57.943999999999996"
                                  cx="417.29783950617286"
                                  j={28}
                                  val={8}
                                  barheight="15.984000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1518"
                                  d="M 424.6836419753087 117.88500000000002 L 424.6836419753087 111.89100000000002 L 432.0694444444445 111.89100000000002 L 432.0694444444445 117.88500000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 424.6836419753087 117.88500000000002 L 424.6836419753087 111.89100000000002 L 432.0694444444445 111.89100000000002 L 432.0694444444445 117.88500000000002 z"
                                  pathfrom="M 424.6836419753087 117.88500000000002 L 424.6836419753087 117.88500000000002 L 432.0694444444445 117.88500000000002 L 432.0694444444445 117.88500000000002 L 432.0694444444445 117.88500000000002 L 432.0694444444445 117.88500000000002 L 432.0694444444445 117.88500000000002 L 424.6836419753087 117.88500000000002 z"
                                  cy="111.89000000000001"
                                  cx="432.0694444444445"
                                  j={29}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1520"
                                  d="M 439.4552469135803 77.92500000000001 L 439.4552469135803 73.92900000000002 L 446.8410493827161 73.92900000000002 L 446.8410493827161 77.92500000000001 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 439.4552469135803 77.92500000000001 L 439.4552469135803 73.92900000000002 L 446.8410493827161 73.92900000000002 L 446.8410493827161 77.92500000000001 z"
                                  pathfrom="M 439.4552469135803 77.92500000000001 L 439.4552469135803 77.92500000000001 L 446.8410493827161 77.92500000000001 L 446.8410493827161 77.92500000000001 L 446.8410493827161 77.92500000000001 L 446.8410493827161 77.92500000000001 L 446.8410493827161 77.92500000000001 L 439.4552469135803 77.92500000000001 z"
                                  cy="73.92800000000001"
                                  cx="446.8410493827161"
                                  j={30}
                                  val={2}
                                  barheight="3.9960000000000004"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1522"
                                  d="M 454.2268518518519 61.94099999999999 L 454.2268518518519 55.94699999999999 L 461.6126543209877 55.94699999999999 L 461.6126543209877 61.94099999999999 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 454.2268518518519 61.94099999999999 L 454.2268518518519 55.94699999999999 L 461.6126543209877 55.94699999999999 L 461.6126543209877 61.94099999999999 z"
                                  pathfrom="M 454.2268518518519 61.94099999999999 L 454.2268518518519 61.94099999999999 L 461.6126543209877 61.94099999999999 L 461.6126543209877 61.94099999999999 L 461.6126543209877 61.94099999999999 L 461.6126543209877 61.94099999999999 L 461.6126543209877 61.94099999999999 L 454.2268518518519 61.94099999999999 z"
                                  cy="55.94599999999999"
                                  cx="461.6126543209877"
                                  j={31}
                                  val={3}
                                  barheight="5.994000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1524"
                                  d="M 468.9984567901235 71.93100000000001 L 468.9984567901235 63.939 L 476.3842592592593 63.939 L 476.3842592592593 71.93100000000001 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 468.9984567901235 71.93100000000001 L 468.9984567901235 63.939 L 476.3842592592593 63.939 L 476.3842592592593 71.93100000000001 z"
                                  pathfrom="M 468.9984567901235 71.93100000000001 L 468.9984567901235 71.93100000000001 L 476.3842592592593 71.93100000000001 L 476.3842592592593 71.93100000000001 L 476.3842592592593 71.93100000000001 L 476.3842592592593 71.93100000000001 L 476.3842592592593 71.93100000000001 L 468.9984567901235 71.93100000000001 z"
                                  cy="63.938"
                                  cx="476.3842592592593"
                                  j={32}
                                  val={4}
                                  barheight="7.992000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1526"
                                  d="M 483.77006172839515 75.92700000000002 L 483.77006172839515 57.945000000000014 L 491.15586419753095 57.945000000000014 L 491.15586419753095 75.92700000000002 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 483.77006172839515 75.92700000000002 L 483.77006172839515 57.945000000000014 L 491.15586419753095 57.945000000000014 L 491.15586419753095 75.92700000000002 z"
                                  pathfrom="M 483.77006172839515 75.92700000000002 L 483.77006172839515 75.92700000000002 L 491.15586419753095 75.92700000000002 L 491.15586419753095 75.92700000000002 L 491.15586419753095 75.92700000000002 L 491.15586419753095 75.92700000000002 L 491.15586419753095 75.92700000000002 L 483.77006172839515 75.92700000000002 z"
                                  cy="57.94400000000002"
                                  cx="491.15586419753095"
                                  j={33}
                                  val={9}
                                  barheight="17.982000000000003"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1528"
                                  d="M 498.54166666666674 15.986999999999984 L 498.54166666666674 2.000999999999982 L 505.92746913580254 2.000999999999982 L 505.92746913580254 15.986999999999984 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 498.54166666666674 15.986999999999984 L 498.54166666666674 2.000999999999982 L 505.92746913580254 2.000999999999982 L 505.92746913580254 15.986999999999984 z"
                                  pathfrom="M 498.54166666666674 15.986999999999984 L 498.54166666666674 15.986999999999984 L 505.92746913580254 15.986999999999984 L 505.92746913580254 15.986999999999984 L 505.92746913580254 15.986999999999984 L 505.92746913580254 15.986999999999984 L 505.92746913580254 15.986999999999984 L 498.54166666666674 15.986999999999984 z"
                                  cy="1.9999999999999822"
                                  cx="505.92746913580254"
                                  j={34}
                                  val={7}
                                  barheight="13.986000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1530"
                                  d="M 513.3132716049383 87.915 L 513.3132716049383 85.917 L 520.6990740740741 85.917 L 520.6990740740741 87.915 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 513.3132716049383 87.915 L 513.3132716049383 85.917 L 520.6990740740741 85.917 L 520.6990740740741 87.915 z"
                                  pathfrom="M 513.3132716049383 87.915 L 513.3132716049383 87.915 L 520.6990740740741 87.915 L 520.6990740740741 87.915 L 520.6990740740741 87.915 L 520.6990740740741 87.915 L 520.6990740740741 87.915 L 513.3132716049383 87.915 z"
                                  cy="85.916"
                                  cx="520.6990740740741"
                                  j={35}
                                  val={1}
                                  barheight="1.9980000000000002"
                                  barwidth="7.385802469135802"
                                />
                                <path
                                  id="SvgjsPath1532"
                                  d="M 528.0848765432099 187.81500000000003 L 528.0848765432099 175.82700000000003 L 535.4706790123457 175.82700000000003 L 535.4706790123457 187.81500000000003 z"
                                  fill="rgba(47, 179, 68, 0.8)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={2}
                                  clipPath="url(#gridRectMaskdi0xxvsb)"
                                  pathto="M 528.0848765432099 187.81500000000003 L 528.0848765432099 175.82700000000003 L 535.4706790123457 175.82700000000003 L 535.4706790123457 187.81500000000003 z"
                                  pathfrom="M 528.0848765432099 187.81500000000003 L 528.0848765432099 187.81500000000003 L 535.4706790123457 187.81500000000003 L 535.4706790123457 187.81500000000003 L 535.4706790123457 187.81500000000003 L 535.4706790123457 187.81500000000003 L 535.4706790123457 187.81500000000003 L 528.0848765432099 187.81500000000003 z"
                                  cy="175.82600000000002"
                                  cx="535.4706790123457"
                                  j={36}
                                  val={6}
                                  barheight="11.988000000000001"
                                  barwidth="7.385802469135802"
                                />
                                <g
                                  id="SvgjsG1458"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}>
                                  <g
                                    id="SvgjsG1459"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1461"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1463"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1465"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1467"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1469"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1471"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1473"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1475"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1477"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1479"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1481"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1483"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1485"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1487"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1489"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1491"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1493"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1495"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1497"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1499"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1501"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1503"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1505"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1507"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1509"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1511"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1513"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1515"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1517"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1519"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1521"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1523"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1525"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1527"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1529"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                  <g
                                    id="SvgjsG1531"
                                    classname="apexcharts-bar-goals-groups"
                                    className
                                    clipPath="url(#gridRectMarkerMaskdi0xxvsb)"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1303"
                                className="apexcharts-datalabels"
                              />
                              <g
                                id="SvgjsG1380"
                                className="apexcharts-datalabels"
                              />
                              <g
                                id="SvgjsG1457"
                                className="apexcharts-datalabels"
                              />
                            </g>
                            <g
                              id="SvgjsG1536"
                              className="apexcharts-grid-borders">
                              <line
                                id="SvgjsLine1547"
                                x1="-10.11111111111111"
                                y1={0}
                                x2="541.8888888888889"
                                y2={0}
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1552"
                                x1="-10.11111111111111"
                                y1="199.8"
                                x2="541.8888888888889"
                                y2="199.8"
                                stroke="#e0e0e0"
                                strokeDasharray={4}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <line
                              id="SvgjsLine1555"
                              x1="-10.11111111111111"
                              y1={0}
                              x2="541.8888888888889"
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine1556"
                              x1="-10.11111111111111"
                              y1={0}
                              x2="541.8888888888889"
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG1557"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)">
                              <g
                                id="SvgjsG1558"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)">
                                <text
                                  id="SvgjsText1560"
                                  fontFamily="inherit"
                                  x="44.31481481481482"
                                  y="228.8"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}>
                                  <tspan id="SvgjsTspan1561">24 Jun</tspan>
                                  <title>24 Jun</title>
                                </text>
                                <text
                                  id="SvgjsText1563"
                                  fontFamily="inherit"
                                  x="147.71604938271605"
                                  y="228.8"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}>
                                  <tspan id="SvgjsTspan1564">Jul '20</tspan>
                                  <title>Jul '20</title>
                                </text>
                                <text
                                  id="SvgjsText1566"
                                  fontFamily="inherit"
                                  x="251.1172839506172"
                                  y="228.8"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}>
                                  <tspan id="SvgjsTspan1567">08 Jul</tspan>
                                  <title>08 Jul</title>
                                </text>
                                <text
                                  id="SvgjsText1569"
                                  fontFamily="inherit"
                                  x="369.29012345678996"
                                  y="228.8"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}>
                                  <tspan id="SvgjsTspan1570">16 Jul</tspan>
                                  <title>16 Jul</title>
                                </text>
                                <text
                                  id="SvgjsText1572"
                                  fontFamily="inherit"
                                  x="487.4629629629627"
                                  y="228.8"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}>
                                  <tspan id="SvgjsTspan1573">24 Jul</tspan>
                                  <title>24 Jul</title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1594"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG1595"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG1596"
                              className="apexcharts-point-annotations"
                            />
                            <rect
                              id="SvgjsRect1597"
                              width={0}
                              height={0}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fefefe"
                              className="apexcharts-zoom-rect"
                            />
                            <rect
                              id="SvgjsRect1598"
                              width={0}
                              height={0}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fefefe"
                              className="apexcharts-selection-rect"
                            />
                          </g>
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-dark">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{ fontFamily: "inherit", fontSize: "12px" }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}>
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(32, 107, 196)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "inherit", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 2 }}>
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgba(32, 107, 196, 0.8)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "inherit", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 3 }}>
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgba(47, 179, 68, 0.8)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "inherit", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Locations</h3>
                    <div className="ratio ratio-21x9">
                      <div>
                        <div
                          id="map-world"
                          className="w-100 h-100 jvm-container"
                          style={{ backgroundColor: "transparent" }}>
                          <svg
                            width={586}
                            height={251}>
                            <defs />
                            <g
                              id="jvm-regions-group"
                              transform="scale(0.5695402899409049) translate(64.44999620729465, 0)">
                              <path
                                d="M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z"
                                data-code="BD"
                                fill="#182536"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z"
                                data-code="BE"
                                fill="#192a3f"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z"
                                data-code="BF"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z"
                                data-code="BG"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z"
                                data-code="BA"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z"
                                data-code="BN"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z"
                                data-code="BO"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z"
                                data-code="JP"
                                fill="#2067bb"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z"
                                data-code="BI"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z"
                                data-code="BJ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z"
                                data-code="BT"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z"
                                data-code="JM"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z"
                                data-code="BW"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z"
                                data-code="BR"
                                fill="#1b3d66"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z"
                                data-code="BS"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z"
                                data-code="BY"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z"
                                data-code="BZ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z"
                                data-code="RU"
                                fill="#1a3658"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z"
                                data-code="RW"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z"
                                data-code="RS"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z"
                                data-code="LT"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z"
                                data-code="LU"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z"
                                data-code="LR"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z"
                                data-code="RO"
                                fill="#182637"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z"
                                data-code="GW"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z"
                                data-code="GT"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z"
                                data-code="GR"
                                fill="#18283b"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z"
                                data-code="GQ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z"
                                data-code="GY"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z"
                                data-code="GE"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z"
                                data-code="GB"
                                fill="#1b406c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z"
                                data-code="GA"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z"
                                data-code="GN"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z"
                                data-code="GM"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z"
                                data-code="GL"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z"
                                data-code="KW"
                                fill="#182536"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z"
                                data-code="GH"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z"
                                data-code="OM"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z"
                                data-code="_2"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z"
                                data-code="_1"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z"
                                data-code="_0"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z"
                                data-code="JO"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z"
                                data-code="HR"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z"
                                data-code="HT"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z"
                                data-code="HU"
                                fill="#182636"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z"
                                data-code="HN"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z"
                                data-code="PR"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z"
                                data-code="PS"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z"
                                data-code="PT"
                                fill="#182739"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z"
                                data-code="PY"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z"
                                data-code="PA"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z"
                                data-code="PG"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z"
                                data-code="PE"
                                fill="#182637"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z"
                                data-code="PK"
                                fill="#182637"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z"
                                data-code="PH"
                                fill="#182638"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z"
                                data-code="PL"
                                fill="#19293e"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z"
                                data-code="ZM"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z"
                                data-code="EH"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z"
                                data-code="EE"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z"
                                data-code="EG"
                                fill="#182738"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z"
                                data-code="ZA"
                                fill="#18283c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z"
                                data-code="EC"
                                fill="#182535"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z"
                                data-code="AL"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z"
                                data-code="AO"
                                fill="#182535"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z"
                                data-code="KZ"
                                fill="#182636"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z"
                                data-code="ET"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z"
                                data-code="ZW"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z"
                                data-code="ES"
                                fill="#1a3556"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z"
                                data-code="ER"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z"
                                data-code="ME"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z"
                                data-code="MD"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z"
                                data-code="MG"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z"
                                data-code="MA"
                                fill="#182535"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z"
                                data-code="UZ"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z"
                                data-code="MM"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z"
                                data-code="ML"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z"
                                data-code="MN"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z"
                                data-code="MK"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z"
                                data-code="MW"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z"
                                data-code="MR"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z"
                                data-code="UG"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z"
                                data-code="MY"
                                fill="#182739"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z"
                                data-code="MX"
                                fill="#19304c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z"
                                data-code="VU"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z"
                                data-code="FR"
                                fill="#1c4473"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z"
                                data-code="FI"
                                fill="#182739"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z"
                                data-code="FJ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z"
                                data-code="FK"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z"
                                data-code="NI"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z"
                                data-code="NL"
                                fill="#192e46"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z"
                                data-code="NO"
                                fill="#19293d"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z"
                                data-code="NA"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z"
                                data-code="NC"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z"
                                data-code="NE"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z"
                                data-code="NG"
                                fill="#182738"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z"
                                data-code="NZ"
                                fill="#182636"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z"
                                data-code="NP"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z"
                                data-code="CI"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z"
                                data-code="CH"
                                fill="#192a40"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z"
                                data-code="CO"
                                fill="#18273a"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z"
                                data-code="CN"
                                fill="#206bc4"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z"
                                data-code="CM"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z"
                                data-code="CL"
                                fill="#182638"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z"
                                data-code="CA"
                                fill="#1a375a"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z"
                                data-code="CG"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z"
                                data-code="CF"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z"
                                data-code="CD"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z"
                                data-code="CZ"
                                fill="#182638"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z"
                                data-code="CY"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z"
                                data-code="CR"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z"
                                data-code="CU"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z"
                                data-code="SZ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z"
                                data-code="SY"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z"
                                data-code="KG"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z"
                                data-code="KE"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z"
                                data-code="SS"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z"
                                data-code="SR"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z"
                                data-code="KH"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z"
                                data-code="SV"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z"
                                data-code="SK"
                                fill="#182535"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z"
                                data-code="KR"
                                fill="#19304c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z"
                                data-code="SI"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z"
                                data-code="KP"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z"
                                data-code="SO"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z"
                                data-code="SN"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z"
                                data-code="SL"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z"
                                data-code="SB"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z"
                                data-code="SA"
                                fill="#19293e"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z"
                                data-code="SE"
                                fill="#19293e"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z"
                                data-code="SD"
                                fill="#182535"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z"
                                data-code="DO"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z"
                                data-code="DJ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z"
                                data-code="DK"
                                fill="#18283b"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z"
                                data-code="DE"
                                fill="#1d4d86"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z"
                                data-code="YE"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z"
                                data-code="AT"
                                fill="#19293c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z"
                                data-code="DZ"
                                fill="#182637"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z"
                                data-code="US"
                                fill="#1e5da8"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z"
                                data-code="LV"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z"
                                data-code="UY"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z"
                                data-code="LB"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z"
                                data-code="LA"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z"
                                data-code="TW"
                                fill="#19293e"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z"
                                data-code="TT"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z"
                                data-code="TR"
                                fill="#192d45"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z"
                                data-code="LK"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z"
                                data-code="TN"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z"
                                data-code="TL"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z"
                                data-code="TM"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z"
                                data-code="TJ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z"
                                data-code="LS"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z"
                                data-code="TH"
                                fill="#18283b"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z"
                                data-code="TF"
                                fill="#151f2c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z"
                                data-code="TG"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z"
                                data-code="TD"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z"
                                data-code="LY"
                                fill="#182535"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z"
                                data-code="AE"
                                fill="#182739"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z"
                                data-code="VE"
                                fill="#18283a"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z"
                                data-code="AF"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z"
                                data-code="IQ"
                                fill="#182535"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z"
                                data-code="IS"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z"
                                data-code="IR"
                                fill="#18283c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z"
                                data-code="AM"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z"
                                data-code="IT"
                                fill="#1b3d66"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z"
                                data-code="VN"
                                fill="#182536"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z"
                                data-code="AR"
                                fill="#18283c"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z"
                                data-code="AU"
                                fill="#1a3352"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z"
                                data-code="IL"
                                fill="#182638"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z"
                                data-code="IN"
                                fill="#1a3657"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z"
                                data-code="TZ"
                                fill="#182434"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z"
                                data-code="AZ"
                                fill="#182534"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z"
                                data-code="IE"
                                fill="#182738"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z"
                                data-code="ID"
                                fill="#192d45"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z"
                                data-code="UA"
                                fill="#182636"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z"
                                data-code="QA"
                                fill="#182636"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                              <path
                                d="M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z"
                                data-code="MZ"
                                fill="#182433"
                                fillOpacity={1}
                                stroke="#1f2e41"
                                strokeWidth={2}
                                fillRule="evenodd"
                                className="jvm-region jvm-element"
                              />
                            </g>
                            <g id="jvm-regions-labels-group" />
                            <g id="jvm-lines-group" />
                            <g id="jvm-markers-group" />
                            <g id="jvm-markers-labels-group" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row row-cards">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <p className="mb-3">
                          Using Storage <strong>6854.45 MB </strong>of 8 GB
                        </p>
                        <div className="progress progress-separated mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "44%" }}
                            aria-label="Regular"
                          />
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "19%" }}
                            aria-label="System"
                          />
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "9%" }}
                            aria-label="Shared"
                          />
                        </div>
                        <div className="row">
                          <div className="col-auto d-flex align-items-center pe-2">
                            <span className="legend me-2 bg-primary" />
                            <span>Regular</span>
                            <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">915MB</span>
                          </div>
                          <div className="col-auto d-flex align-items-center px-2">
                            <span className="legend me-2 bg-info" />
                            <span>System</span>
                            <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">415MB</span>
                          </div>
                          <div className="col-auto d-flex align-items-center px-2">
                            <span className="legend me-2 bg-success" />
                            <span>Shared</span>
                            <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">201MB</span>
                          </div>
                          <div className="col-auto d-flex align-items-center ps-2">
                            <span className="legend me-2" />
                            <span>Free</span>
                            <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">612MB</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="card"
                      style={{ height: "28rem" }}>
                      <div className="card-body card-body-scrollable card-body-scrollable-shadow">
                        <div className="divide-y">
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span className="avatar">JL</span>
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Jeffie Lewzey</strong> commented on your <strong>"I'm not a witch."</strong> post.
                                </div>
                                <div className="text-muted">yesterday</div>
                              </div>
                              <div className="col-auto align-self-center">
                                <div className="badge bg-primary" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/002m.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  It's <strong>Mallory Hulme</strong>'s birthday. Wish him well!
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                              <div className="col-auto align-self-center">
                                <div className="badge bg-primary" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Dunn Slane</strong> posted <strong>"Well, what do you want?"</strong>.
                                </div>
                                <div className="text-muted">today</div>
                              </div>
                              <div className="col-auto align-self-center">
                                <div className="badge bg-primary" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/000f.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Emmy Levet</strong> created a new project <strong>Morning alarm clock</strong>.
                                </div>
                                <div className="text-muted">4 days ago</div>
                              </div>
                              <div className="col-auto align-self-center">
                                <div className="badge bg-primary" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/001f.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Maryjo Lebarree</strong> liked your photo.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span className="avatar">EP</span>
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Egan Poetz</strong> registered new client as <strong>Trilia</strong>.
                                </div>
                                <div className="text-muted">yesterday</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/002f.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Kellie Skingley</strong> closed a new deal on project{" "}
                                  <strong>Pen Pineapple Apple Pen</strong>.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/003f.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Christabel Charlwood</strong> created a new project for <strong>Wikibox</strong>.
                                </div>
                                <div className="text-muted">4 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span className="avatar">HS</span>
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Haskel Shelper</strong> change status of <strong>Tabler Icons</strong> from{" "}
                                  <strong>open</strong> to <strong>closed</strong>.
                                </div>
                                <div className="text-muted">today</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/006m.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Lorry Mion</strong> liked <strong>Tabler UI Kit</strong>.
                                </div>
                                <div className="text-muted">yesterday</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/004f.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Leesa Beaty</strong> posted new video.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/007m.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Perren Keemar</strong> and 3 others followed you.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span className="avatar">SA</span>
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Sunny Airey</strong> upload 3 new photos to category <strong>Inspirations</strong>.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/009m.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Geoffry Flaunders</strong> made a <strong>$10</strong> donation.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/010m.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Thatcher Keel</strong> created a profile.
                                </div>
                                <div className="text-muted">3 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/005f.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Dyann Escala</strong> hosted the event <strong>Tabler UI Birthday</strong>.
                                </div>
                                <div className="text-muted">4 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span
                                  className="avatar"
                                  style={{ backgroundImage: "url(./static/avatars/006f.jpg)" }}
                                />
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Avivah Mugleston</strong> mentioned you on <strong>Best of 2020</strong>.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col-auto">
                                <span className="avatar">AA</span>
                              </div>
                              <div className="col">
                                <div className="text-truncate">
                                  <strong>Arlie Armstead</strong> sent a Review Request to <strong>Amanda Blake</strong>.
                                </div>
                                <div className="text-muted">2 days ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="card-title">Development activity</div>
                  </div>
                  <div className="position-relative">
                    <div className="position-absolute top-0 left-0 px-3 mt-1 w-75">
                      <div className="row g-2">
                        <div className="col-auto">
                          <div
                            className="chart-sparkline chart-sparkline-square"
                            id="sparkline-activity"
                            style={{ minHeight: "41px" }}>
                            <div
                              id="apexchartsax7jqnmh"
                              className="apexcharts-canvas apexchartsax7jqnmh apexcharts-theme-light"
                              style={{ width: "40px", height: "41px" }}>
                              <svg
                                id="SvgjsSvg1599"
                                width={40}
                                height={41}
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                className="apexcharts-svg"
                                xmlns:data="ApexChartsNS"
                                transform="translate(0, 0)"
                                style={{ background: "transparent" }}>
                                <foreignObject
                                  x={0}
                                  y={0}
                                  width={40}
                                  height={41}>
                                  <div className="apexcharts-legend" />
                                </foreignObject>
                                <g
                                  id="SvgjsG1601"
                                  className="apexcharts-inner apexcharts-graphical"
                                  transform="translate(0, 0)">
                                  <defs id="SvgjsDefs1600">
                                    <clipPath id="gridRectMaskax7jqnmh">
                                      <rect
                                        id="SvgjsRect1602"
                                        width={46}
                                        height={42}
                                        x={-3}
                                        y={-1}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                    <clipPath id="forecastMaskax7jqnmh" />
                                    <clipPath id="nonForecastMaskax7jqnmh" />
                                    <clipPath id="gridRectMarkerMaskax7jqnmh">
                                      <rect
                                        id="SvgjsRect1603"
                                        width={44}
                                        height={44}
                                        x={-2}
                                        y={-2}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <g
                                    id="SvgjsG1604"
                                    className="apexcharts-radialbar">
                                    <g id="SvgjsG1605">
                                      <g
                                        id="SvgjsG1606"
                                        className="apexcharts-tracks">
                                        <g
                                          id="SvgjsG1607"
                                          className="apexcharts-radialbar-track apexcharts-track"
                                          rel={1}>
                                          <path
                                            id="apexcharts-radialbarTrack-0"
                                            d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 19.99723301461454 4.1463417048796565"
                                            fill="none"
                                            fillOpacity={1}
                                            stroke="rgba(242,242,242,0.85)"
                                            strokeOpacity={1}
                                            strokeLinecap="butt"
                                            strokeWidth="2.3658536585365857"
                                            strokeDasharray={0}
                                            className="apexcharts-radialbar-area"
                                            data:pathorig="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 19.99723301461454 4.1463417048796565"
                                          />
                                        </g>
                                      </g>
                                      <g id="SvgjsG1609">
                                        <g
                                          id="SvgjsG1611"
                                          className="apexcharts-series apexcharts-radial-series"
                                          seriesname="series-1"
                                          rel={1}>
                                          <path
                                            id="SvgjsPath1612"
                                            d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 0 1 32.82587917911502 29.31854668268555"
                                            fill="none"
                                            fillOpacity="0.85"
                                            stroke="rgba(32,107,196,0.85)"
                                            strokeOpacity={1}
                                            strokeLinecap="butt"
                                            strokeWidth="2.439024390243903"
                                            strokeDasharray={0}
                                            className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                            data:angle={126}
                                            data:value={35}
                                            index={0}
                                            j={0}
                                            data:pathorig="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 0 1 32.82587917911502 29.31854668268555"
                                          />
                                        </g>
                                        <circle
                                          id="SvgjsCircle1610"
                                          r="14.670731707317076"
                                          cx={20}
                                          cy={20}
                                          className="apexcharts-radialbar-hollow"
                                          fill="transparent"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                  <line
                                    id="SvgjsLine1613"
                                    x1={0}
                                    y1={0}
                                    x2={40}
                                    y2={0}
                                    stroke="#b6b6b6"
                                    strokeDasharray={0}
                                    strokeWidth={1}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs"
                                  />
                                  <line
                                    id="SvgjsLine1614"
                                    x1={0}
                                    y1={0}
                                    x2={40}
                                    y2={0}
                                    strokeDasharray={0}
                                    strokeWidth={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs-hidden"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div>Today's Earning: $4,262.40</div>
                          <div className="text-muted">
                            {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                            <svg
                              className="icon icon-inline text-green"
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
                              <path d="M3 17l6 -6l4 4l8 -8" />
                              <path d="M14 7l7 0l0 7" />
                            </svg>
                            +5% more than yesterday
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="chart-development-activity"
                      style={{ minHeight: "192px" }}>
                      <div
                        id="apexchartspflk057l"
                        className="apexcharts-canvas apexchartspflk057l apexcharts-theme-light"
                        style={{ width: "634px", height: "192px" }}>
                        <svg
                          id="SvgjsSvg1615"
                          width={634}
                          height={192}
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="apexcharts-svg"
                          xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}>
                          <foreignObject
                            x={0}
                            y={0}
                            width={634}
                            height={192}>
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: "96px" }}
                            />
                          </foreignObject>
                          <rect
                            id="SvgjsRect1620"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                          />
                          <g
                            id="SvgjsG1688"
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(-18, 0)"
                          />
                          <g
                            id="SvgjsG1617"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(0, 0)">
                            <defs id="SvgjsDefs1616">
                              <clipPath id="gridRectMaskpflk057l">
                                <rect
                                  id="SvgjsRect1652"
                                  width={640}
                                  height={194}
                                  x={-3}
                                  y={-1}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMaskpflk057l" />
                              <clipPath id="nonForecastMaskpflk057l" />
                              <clipPath id="gridRectMarkerMaskpflk057l">
                                <rect
                                  id="SvgjsRect1653"
                                  width={638}
                                  height={196}
                                  x={-2}
                                  y={-2}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <line
                              id="SvgjsLine1621"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={192}
                              stroke="#b6b6b6"
                              strokeDasharray={3}
                              strokeLinecap="butt"
                              className="apexcharts-xcrosshairs"
                              x={0}
                              y={0}
                              width={1}
                              height={192}
                              fill="#b1b9c4"
                              filter="none"
                              fillOpacity="0.9"
                              strokeWidth={1}
                            />
                            <g
                              id="SvgjsG1660"
                              className="apexcharts-grid">
                              <g
                                id="SvgjsG1661"
                                className="apexcharts-gridlines-horizontal"
                                style={{ display: "none" }}>
                                <line
                                  id="SvgjsLine1664"
                                  x1={0}
                                  y1={0}
                                  x2={634}
                                  y2={0}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1665"
                                  x1={0}
                                  y1={48}
                                  x2={634}
                                  y2={48}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1666"
                                  x1={0}
                                  y1={96}
                                  x2={634}
                                  y2={96}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1667"
                                  x1={0}
                                  y1={144}
                                  x2={634}
                                  y2={144}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1668"
                                  x1={0}
                                  y1={192}
                                  x2={634}
                                  y2={192}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG1662"
                                className="apexcharts-gridlines-vertical"
                                style={{ display: "none" }}
                              />
                              <line
                                id="SvgjsLine1670"
                                x1={0}
                                y1={192}
                                x2={634}
                                y2={192}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine1669"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2={192}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              id="SvgjsG1654"
                              className="apexcharts-area-series apexcharts-plot-series">
                              <g
                                id="SvgjsG1655"
                                className="apexcharts-series"
                                seriesname="Purchases"
                                data:longestseries="true"
                                rel={1}>
                                <path
                                  id="SvgjsPath1658"
                                  d="M 0 192 L 0 184.8C 7.651724137931034 184.8 14.210344827586209 180 21.862068965517242 180C 29.513793103448275 180 36.07241379310345 182.4 43.724137931034484 182.4C 51.37586206896552 182.4 57.934482758620696 177.6 65.58620689655173 177.6C 73.23793103448276 177.6 79.79655172413794 175.2 87.44827586206897 175.2C 95.1 175.2 101.65862068965518 180 109.3103448275862 180C 116.96206896551725 180 123.52068965517242 177.6 131.17241379310346 177.6C 138.8241379310345 177.6 145.38275862068966 172.8 153.0344827586207 172.8C 160.68620689655174 172.8 167.2448275862069 134.4 174.89655172413794 134.4C 182.54827586206898 134.4 189.10689655172413 175.2 196.75862068965517 175.2C 204.41034482758621 175.2 210.96896551724137 163.2 218.6206896551724 163.2C 226.27241379310345 163.2 232.8310344827586 180 240.48275862068965 180C 248.1344827586207 180 254.69310344827588 177.6 262.3448275862069 177.6C 269.99655172413793 177.6 276.5551724137931 184.8 284.2068965517241 184.8C 291.8586206896552 184.8 298.4172413793103 172.8 306.0689655172414 172.8C 313.7206896551724 172.8 320.2793103448276 182.4 327.9310344827586 182.4C 335.5827586206897 182.4 342.1413793103448 158.4 349.7931034482759 158.4C 357.4448275862069 158.4 364.00344827586207 120 371.6551724137931 120C 379.30689655172415 120 385.8655172413793 151.2 393.51724137931035 151.2C 401.16896551724136 151.2 407.72758620689655 146.4 415.37931034482756 146.4C 423.0310344827586 146.4 429.58965517241376 156 437.2413793103448 156C 444.89310344827584 156 451.451724137931 158.4 459.10344827586204 158.4C 466.7551724137931 158.4 473.31379310344823 132 480.9655172413793 132C 488.61724137931037 132 495.1758620689655 115.2 502.82758620689657 115.2C 510.47931034482764 115.2 517.0379310344828 96 524.6896551724138 96C 532.3413793103449 96 538.9 60 546.551724137931 60C 554.2034482758621 60 560.7620689655172 48 568.4137931034483 48C 576.0655172413793 48 582.6241379310344 76.80000000000001 590.2758620689655 76.80000000000001C 597.9275862068965 76.80000000000001 604.4862068965517 67.2 612.1379310344828 67.2C 619.7896551724139 67.2 626.3482758620689 24 634 24C 634 24 634 24 634 192M 634 24z"
                                  fill="rgba(32,107,196,0.16)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskpflk057l)"
                                  pathto="M 0 192 L 0 184.8C 7.651724137931034 184.8 14.210344827586209 180 21.862068965517242 180C 29.513793103448275 180 36.07241379310345 182.4 43.724137931034484 182.4C 51.37586206896552 182.4 57.934482758620696 177.6 65.58620689655173 177.6C 73.23793103448276 177.6 79.79655172413794 175.2 87.44827586206897 175.2C 95.1 175.2 101.65862068965518 180 109.3103448275862 180C 116.96206896551725 180 123.52068965517242 177.6 131.17241379310346 177.6C 138.8241379310345 177.6 145.38275862068966 172.8 153.0344827586207 172.8C 160.68620689655174 172.8 167.2448275862069 134.4 174.89655172413794 134.4C 182.54827586206898 134.4 189.10689655172413 175.2 196.75862068965517 175.2C 204.41034482758621 175.2 210.96896551724137 163.2 218.6206896551724 163.2C 226.27241379310345 163.2 232.8310344827586 180 240.48275862068965 180C 248.1344827586207 180 254.69310344827588 177.6 262.3448275862069 177.6C 269.99655172413793 177.6 276.5551724137931 184.8 284.2068965517241 184.8C 291.8586206896552 184.8 298.4172413793103 172.8 306.0689655172414 172.8C 313.7206896551724 172.8 320.2793103448276 182.4 327.9310344827586 182.4C 335.5827586206897 182.4 342.1413793103448 158.4 349.7931034482759 158.4C 357.4448275862069 158.4 364.00344827586207 120 371.6551724137931 120C 379.30689655172415 120 385.8655172413793 151.2 393.51724137931035 151.2C 401.16896551724136 151.2 407.72758620689655 146.4 415.37931034482756 146.4C 423.0310344827586 146.4 429.58965517241376 156 437.2413793103448 156C 444.89310344827584 156 451.451724137931 158.4 459.10344827586204 158.4C 466.7551724137931 158.4 473.31379310344823 132 480.9655172413793 132C 488.61724137931037 132 495.1758620689655 115.2 502.82758620689657 115.2C 510.47931034482764 115.2 517.0379310344828 96 524.6896551724138 96C 532.3413793103449 96 538.9 60 546.551724137931 60C 554.2034482758621 60 560.7620689655172 48 568.4137931034483 48C 576.0655172413793 48 582.6241379310344 76.80000000000001 590.2758620689655 76.80000000000001C 597.9275862068965 76.80000000000001 604.4862068965517 67.2 612.1379310344828 67.2C 619.7896551724139 67.2 626.3482758620689 24 634 24C 634 24 634 24 634 192M 634 24z"
                                  pathfrom="M -1 192 L -1 192 L 21.862068965517242 192 L 43.724137931034484 192 L 65.58620689655173 192 L 87.44827586206897 192 L 109.3103448275862 192 L 131.17241379310346 192 L 153.0344827586207 192 L 174.89655172413794 192 L 196.75862068965517 192 L 218.6206896551724 192 L 240.48275862068965 192 L 262.3448275862069 192 L 284.2068965517241 192 L 306.0689655172414 192 L 327.9310344827586 192 L 349.7931034482759 192 L 371.6551724137931 192 L 393.51724137931035 192 L 415.37931034482756 192 L 437.2413793103448 192 L 459.10344827586204 192 L 480.9655172413793 192 L 502.82758620689657 192 L 524.6896551724138 192 L 546.551724137931 192 L 568.4137931034483 192 L 590.2758620689655 192 L 612.1379310344828 192 L 634 192"
                                />
                                <path
                                  id="SvgjsPath1659"
                                  d="M 0 184.8C 7.651724137931034 184.8 14.210344827586209 180 21.862068965517242 180C 29.513793103448275 180 36.07241379310345 182.4 43.724137931034484 182.4C 51.37586206896552 182.4 57.934482758620696 177.6 65.58620689655173 177.6C 73.23793103448276 177.6 79.79655172413794 175.2 87.44827586206897 175.2C 95.1 175.2 101.65862068965518 180 109.3103448275862 180C 116.96206896551725 180 123.52068965517242 177.6 131.17241379310346 177.6C 138.8241379310345 177.6 145.38275862068966 172.8 153.0344827586207 172.8C 160.68620689655174 172.8 167.2448275862069 134.4 174.89655172413794 134.4C 182.54827586206898 134.4 189.10689655172413 175.2 196.75862068965517 175.2C 204.41034482758621 175.2 210.96896551724137 163.2 218.6206896551724 163.2C 226.27241379310345 163.2 232.8310344827586 180 240.48275862068965 180C 248.1344827586207 180 254.69310344827588 177.6 262.3448275862069 177.6C 269.99655172413793 177.6 276.5551724137931 184.8 284.2068965517241 184.8C 291.8586206896552 184.8 298.4172413793103 172.8 306.0689655172414 172.8C 313.7206896551724 172.8 320.2793103448276 182.4 327.9310344827586 182.4C 335.5827586206897 182.4 342.1413793103448 158.4 349.7931034482759 158.4C 357.4448275862069 158.4 364.00344827586207 120 371.6551724137931 120C 379.30689655172415 120 385.8655172413793 151.2 393.51724137931035 151.2C 401.16896551724136 151.2 407.72758620689655 146.4 415.37931034482756 146.4C 423.0310344827586 146.4 429.58965517241376 156 437.2413793103448 156C 444.89310344827584 156 451.451724137931 158.4 459.10344827586204 158.4C 466.7551724137931 158.4 473.31379310344823 132 480.9655172413793 132C 488.61724137931037 132 495.1758620689655 115.2 502.82758620689657 115.2C 510.47931034482764 115.2 517.0379310344828 96 524.6896551724138 96C 532.3413793103449 96 538.9 60 546.551724137931 60C 554.2034482758621 60 560.7620689655172 48 568.4137931034483 48C 576.0655172413793 48 582.6241379310344 76.80000000000001 590.2758620689655 76.80000000000001C 597.9275862068965 76.80000000000001 604.4862068965517 67.2 612.1379310344828 67.2C 619.7896551724139 67.2 626.3482758620689 24 634 24"
                                  fill="none"
                                  fillOpacity={1}
                                  stroke="#206bc4"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskpflk057l)"
                                  pathto="M 0 184.8C 7.651724137931034 184.8 14.210344827586209 180 21.862068965517242 180C 29.513793103448275 180 36.07241379310345 182.4 43.724137931034484 182.4C 51.37586206896552 182.4 57.934482758620696 177.6 65.58620689655173 177.6C 73.23793103448276 177.6 79.79655172413794 175.2 87.44827586206897 175.2C 95.1 175.2 101.65862068965518 180 109.3103448275862 180C 116.96206896551725 180 123.52068965517242 177.6 131.17241379310346 177.6C 138.8241379310345 177.6 145.38275862068966 172.8 153.0344827586207 172.8C 160.68620689655174 172.8 167.2448275862069 134.4 174.89655172413794 134.4C 182.54827586206898 134.4 189.10689655172413 175.2 196.75862068965517 175.2C 204.41034482758621 175.2 210.96896551724137 163.2 218.6206896551724 163.2C 226.27241379310345 163.2 232.8310344827586 180 240.48275862068965 180C 248.1344827586207 180 254.69310344827588 177.6 262.3448275862069 177.6C 269.99655172413793 177.6 276.5551724137931 184.8 284.2068965517241 184.8C 291.8586206896552 184.8 298.4172413793103 172.8 306.0689655172414 172.8C 313.7206896551724 172.8 320.2793103448276 182.4 327.9310344827586 182.4C 335.5827586206897 182.4 342.1413793103448 158.4 349.7931034482759 158.4C 357.4448275862069 158.4 364.00344827586207 120 371.6551724137931 120C 379.30689655172415 120 385.8655172413793 151.2 393.51724137931035 151.2C 401.16896551724136 151.2 407.72758620689655 146.4 415.37931034482756 146.4C 423.0310344827586 146.4 429.58965517241376 156 437.2413793103448 156C 444.89310344827584 156 451.451724137931 158.4 459.10344827586204 158.4C 466.7551724137931 158.4 473.31379310344823 132 480.9655172413793 132C 488.61724137931037 132 495.1758620689655 115.2 502.82758620689657 115.2C 510.47931034482764 115.2 517.0379310344828 96 524.6896551724138 96C 532.3413793103449 96 538.9 60 546.551724137931 60C 554.2034482758621 60 560.7620689655172 48 568.4137931034483 48C 576.0655172413793 48 582.6241379310344 76.80000000000001 590.2758620689655 76.80000000000001C 597.9275862068965 76.80000000000001 604.4862068965517 67.2 612.1379310344828 67.2C 619.7896551724139 67.2 626.3482758620689 24 634 24"
                                  pathfrom="M -1 192 L -1 192 L 21.862068965517242 192 L 43.724137931034484 192 L 65.58620689655173 192 L 87.44827586206897 192 L 109.3103448275862 192 L 131.17241379310346 192 L 153.0344827586207 192 L 174.89655172413794 192 L 196.75862068965517 192 L 218.6206896551724 192 L 240.48275862068965 192 L 262.3448275862069 192 L 284.2068965517241 192 L 306.0689655172414 192 L 327.9310344827586 192 L 349.7931034482759 192 L 371.6551724137931 192 L 393.51724137931035 192 L 415.37931034482756 192 L 437.2413793103448 192 L 459.10344827586204 192 L 480.9655172413793 192 L 502.82758620689657 192 L 524.6896551724138 192 L 546.551724137931 192 L 568.4137931034483 192 L 590.2758620689655 192 L 612.1379310344828 192 L 634 192"
                                  fillRule="evenodd"
                                />
                                <g
                                  id="SvgjsG1656"
                                  className="apexcharts-series-markers-wrap">
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle1692"
                                      r={0}
                                      cx={0}
                                      cy={0}
                                      className="apexcharts-marker wsgkutbtsj no-pointer-events"
                                      stroke="#ffffff"
                                      fill="#206bc4"
                                      fillOpacity={1}
                                      strokeWidth={2}
                                      strokeOpacity="0.9"
                                      default-marker-size={0}
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG1657"
                                className="apexcharts-datalabels"
                              />
                            </g>
                            <g
                              id="SvgjsG1663"
                              className="apexcharts-grid-borders"
                              style={{ display: "none" }}
                            />
                            <line
                              id="SvgjsLine1671"
                              x1={0}
                              y1={0}
                              x2={634}
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine1672"
                              x1={0}
                              y1={0}
                              x2={634}
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG1673"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)">
                              <g
                                id="SvgjsG1674"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              />
                            </g>
                            <g
                              id="SvgjsG1689"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG1690"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG1691"
                              className="apexcharts-point-annotations"
                            />
                          </g>
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-dark">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{ fontFamily: "inherit", fontSize: "12px" }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}>
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(32, 107, 196)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "inherit", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-table table-responsive">
                    <table className="table table-vcenter">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Commit</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">Fix dart Sass compatibility (#29755)</div>
                          </td>
                          <td className="text-nowrap text-muted">28 Nov 2019</td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span className="avatar avatar-sm">JL</span>
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">Change deprecated html tags to text decoration classes (#29604)</div>
                          </td>
                          <td className="text-nowrap text-muted">27 Nov 2019</td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/002m.jpg)" }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">
                              justify-content:between ⇒ justify-content:space-between (#29734)
                            </div>
                          </td>
                          <td className="text-nowrap text-muted">26 Nov 2019</td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">Update change-version.js (#29736)</div>
                          </td>
                          <td className="text-nowrap text-muted">26 Nov 2019</td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/000f.jpg)" }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">Regenerate package-lock.json (#29730)</div>
                          </td>
                          <td className="text-nowrap text-muted">25 Nov 2019</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card card-md">
                  <div className="card-stamp card-stamp-lg">
                    <div className="card-stamp-icon bg-primary">
                      {/* Download SVG icon from http://tabler-icons.io/i/ghost */}
                      <svg
                        className="icon"
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
                        <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                        <path d="M10 10l.01 0" />
                        <path d="M14 10l.01 0" />
                        <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                      </svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-10">
                        <h3 className="h1">Tabler Icons</h3>
                        <div className="markdown text-muted">
                          All icons come from the Tabler Icons set and are MIT-licensed. Visit
                          <a
                            href="https://tabler-icons.io"
                            target="_blank"
                            rel="noopener">
                            tabler-icons.io
                          </a>
                          , download any of the 4158 icons in SVG, PNG or&nbsp;React and use them in your favourite design
                          tools.
                        </div>
                        <div className="mt-3">
                          <a
                            href="https://tabler-icons.io"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener">
                            Download icons
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Most Visited Pages</h3>
                  </div>
                  <div className="card-table table-responsive">
                    <table className="table table-vcenter">
                      <thead>
                        <tr>
                          <th>Page name</th>
                          <th>Visitors</th>
                          <th>Unique</th>
                          <th colSpan={2}>Bounce rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            /
                            <a
                              href="#"
                              className="ms-1"
                              aria-label="Open website">
                              {/* Download SVG icon from http://tabler-icons.io/i/link */}
                              <svg
                                className="icon"
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
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">4,896</td>
                          <td className="text-muted">3,654</td>
                          <td className="text-muted">82.54%</td>
                          <td className="text-end w-1">
                            <div
                              className="chart-sparkline chart-sparkline-sm"
                              id="sparkline-bounce-rate-1"
                              style={{ minHeight: "24px" }}>
                              <div
                                id="apexcharts3hiv1y0q"
                                className="apexcharts-canvas apexcharts3hiv1y0q apexcharts-theme-light"
                                style={{ width: "64px", height: "24px" }}>
                                <svg
                                  id="SvgjsSvg1693"
                                  width={64}
                                  height={24}
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  className="apexcharts-svg"
                                  xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}>
                                  <foreignObject
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={24}>
                                    <div
                                      className="apexcharts-legend"
                                      style={{ maxHeight: "12px" }}
                                    />
                                  </foreignObject>
                                  <rect
                                    id="SvgjsRect1698"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1731"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1695"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)">
                                    <defs id="SvgjsDefs1694">
                                      <clipPath id="gridRectMask3hiv1y0q">
                                        <rect
                                          id="SvgjsRect1700"
                                          width={70}
                                          height={26}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMask3hiv1y0q" />
                                      <clipPath id="nonForecastMask3hiv1y0q" />
                                      <clipPath id="gridRectMarkerMask3hiv1y0q">
                                        <rect
                                          id="SvgjsRect1701"
                                          width={68}
                                          height={28}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1699"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={24}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={24}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1707"
                                      className="apexcharts-grid">
                                      <g
                                        id="SvgjsG1708"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}>
                                        <line
                                          id="SvgjsLine1711"
                                          x1={0}
                                          y1={0}
                                          x2={64}
                                          y2={0}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1712"
                                          x1={0}
                                          y1={6}
                                          x2={64}
                                          y2={6}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1713"
                                          x1={0}
                                          y1={12}
                                          x2={64}
                                          y2={12}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1714"
                                          x1={0}
                                          y1={18}
                                          x2={64}
                                          y2={18}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1715"
                                          x1={0}
                                          y1={24}
                                          x2={64}
                                          y2={24}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1709"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1717"
                                        x1={0}
                                        y1={24}
                                        x2={64}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1716"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1702"
                                      className="apexcharts-line-series apexcharts-plot-series">
                                      <g
                                        id="SvgjsG1703"
                                        className="apexcharts-series"
                                        seriesname="series-1"
                                        data:longestseries="true"
                                        rel={1}>
                                        <path
                                          id="SvgjsPath1706"
                                          d="M 0 7 L 8 0 L 16 4 L 24 14 L 32 19 L 40 23 L 48 20 L 56 6 L 64 11"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(32,107,196,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="round"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMask3hiv1y0q)"
                                          pathto="M 0 7 L 8 0 L 16 4 L 24 14 L 32 19 L 40 23 L 48 20 L 56 6 L 64 11"
                                          pathfrom="M -1 24 L -1 24 L 8 24 L 16 24 L 24 24 L 32 24 L 40 24 L 48 24 L 56 24 L 64 24"
                                          fillRule="evenodd"
                                        />
                                        <g
                                          id="SvgjsG1704"
                                          className="apexcharts-series-markers-wrap"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1705"
                                        className="apexcharts-datalabels"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1710"
                                      className="apexcharts-grid-borders"
                                      style={{ display: "none" }}
                                    />
                                    <line
                                      id="SvgjsLine1718"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1719"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1720"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)">
                                      <g
                                        id="SvgjsG1721"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1732"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1733"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1734"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /form-elements.html
                            <a
                              href="#"
                              className="ms-1"
                              aria-label="Open website">
                              {/* Download SVG icon from http://tabler-icons.io/i/link */}
                              <svg
                                className="icon"
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
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">3,652</td>
                          <td className="text-muted">3,215</td>
                          <td className="text-muted">76.29%</td>
                          <td className="text-end w-1">
                            <div
                              className="chart-sparkline chart-sparkline-sm"
                              id="sparkline-bounce-rate-2"
                              style={{ minHeight: "24px" }}>
                              <div
                                id="apexchartsvhorq20wl"
                                className="apexcharts-canvas apexchartsvhorq20wl apexcharts-theme-light"
                                style={{ width: "64px", height: "24px" }}>
                                <svg
                                  id="SvgjsSvg1735"
                                  width={64}
                                  height={24}
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  className="apexcharts-svg"
                                  xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}>
                                  <foreignObject
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={24}>
                                    <div
                                      className="apexcharts-legend"
                                      style={{ maxHeight: "12px" }}
                                    />
                                  </foreignObject>
                                  <rect
                                    id="SvgjsRect1740"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1774"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1737"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)">
                                    <defs id="SvgjsDefs1736">
                                      <clipPath id="gridRectMaskvhorq20wl">
                                        <rect
                                          id="SvgjsRect1742"
                                          width={70}
                                          height={26}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskvhorq20wl" />
                                      <clipPath id="nonForecastMaskvhorq20wl" />
                                      <clipPath id="gridRectMarkerMaskvhorq20wl">
                                        <rect
                                          id="SvgjsRect1743"
                                          width={68}
                                          height={28}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1741"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={24}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={24}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1749"
                                      className="apexcharts-grid">
                                      <g
                                        id="SvgjsG1750"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}>
                                        <line
                                          id="SvgjsLine1753"
                                          x1={0}
                                          y1={0}
                                          x2={64}
                                          y2={0}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1754"
                                          x1={0}
                                          y1="4.8"
                                          x2={64}
                                          y2="4.8"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1755"
                                          x1={0}
                                          y1="9.6"
                                          x2={64}
                                          y2="9.6"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1756"
                                          x1={0}
                                          y1="14.399999999999999"
                                          x2={64}
                                          y2="14.399999999999999"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1757"
                                          x1={0}
                                          y1="19.2"
                                          x2={64}
                                          y2="19.2"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1758"
                                          x1={0}
                                          y1={24}
                                          x2={64}
                                          y2={24}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1751"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1760"
                                        x1={0}
                                        y1={24}
                                        x2={64}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1759"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1744"
                                      className="apexcharts-line-series apexcharts-plot-series">
                                      <g
                                        id="SvgjsG1745"
                                        className="apexcharts-series"
                                        seriesname="series-1"
                                        data:longestseries="true"
                                        rel={1}>
                                        <path
                                          id="SvgjsPath1748"
                                          d="M 0 11.520000000000001 L 8 13.440000000000001 L 16 5.760000000000002 L 24 2.8800000000000026 L 32 12.48 L 40 17.28 L 48 10.56 L 56 21.12 L 64 3.84"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(32,107,196,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="round"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskvhorq20wl)"
                                          pathto="M 0 11.520000000000001 L 8 13.440000000000001 L 16 5.760000000000002 L 24 2.8800000000000026 L 32 12.48 L 40 17.28 L 48 10.56 L 56 21.12 L 64 3.84"
                                          pathfrom="M -1 24 L -1 24 L 8 24 L 16 24 L 24 24 L 32 24 L 40 24 L 48 24 L 56 24 L 64 24"
                                          fillRule="evenodd"
                                        />
                                        <g
                                          id="SvgjsG1746"
                                          className="apexcharts-series-markers-wrap"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1747"
                                        className="apexcharts-datalabels"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1752"
                                      className="apexcharts-grid-borders"
                                      style={{ display: "none" }}
                                    />
                                    <line
                                      id="SvgjsLine1761"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1762"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1763"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)">
                                      <g
                                        id="SvgjsG1764"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1775"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1776"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1777"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /index.html
                            <a
                              href="#"
                              className="ms-1"
                              aria-label="Open website">
                              {/* Download SVG icon from http://tabler-icons.io/i/link */}
                              <svg
                                className="icon"
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
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">3,256</td>
                          <td className="text-muted">2,865</td>
                          <td className="text-muted">72.65%</td>
                          <td className="text-end w-1">
                            <div
                              className="chart-sparkline chart-sparkline-sm"
                              id="sparkline-bounce-rate-3"
                              style={{ minHeight: "24px" }}>
                              <div
                                id="apexchartsxse8cspz"
                                className="apexcharts-canvas apexchartsxse8cspz apexcharts-theme-light"
                                style={{ width: "64px", height: "24px" }}>
                                <svg
                                  id="SvgjsSvg1778"
                                  width={64}
                                  height={24}
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  className="apexcharts-svg"
                                  xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}>
                                  <foreignObject
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={24}>
                                    <div
                                      className="apexcharts-legend"
                                      style={{ maxHeight: "12px" }}
                                    />
                                  </foreignObject>
                                  <rect
                                    id="SvgjsRect1783"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1817"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1780"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)">
                                    <defs id="SvgjsDefs1779">
                                      <clipPath id="gridRectMaskxse8cspz">
                                        <rect
                                          id="SvgjsRect1785"
                                          width={70}
                                          height={26}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskxse8cspz" />
                                      <clipPath id="nonForecastMaskxse8cspz" />
                                      <clipPath id="gridRectMarkerMaskxse8cspz">
                                        <rect
                                          id="SvgjsRect1786"
                                          width={68}
                                          height={28}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1784"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={24}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={24}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1792"
                                      className="apexcharts-grid">
                                      <g
                                        id="SvgjsG1793"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}>
                                        <line
                                          id="SvgjsLine1796"
                                          x1={0}
                                          y1={0}
                                          x2={64}
                                          y2={0}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1797"
                                          x1={0}
                                          y1="4.8"
                                          x2={64}
                                          y2="4.8"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1798"
                                          x1={0}
                                          y1="9.6"
                                          x2={64}
                                          y2="9.6"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1799"
                                          x1={0}
                                          y1="14.399999999999999"
                                          x2={64}
                                          y2="14.399999999999999"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1800"
                                          x1={0}
                                          y1="19.2"
                                          x2={64}
                                          y2="19.2"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1801"
                                          x1={0}
                                          y1={24}
                                          x2={64}
                                          y2={24}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1794"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1803"
                                        x1={0}
                                        y1={24}
                                        x2={64}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1802"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1787"
                                      className="apexcharts-line-series apexcharts-plot-series">
                                      <g
                                        id="SvgjsG1788"
                                        className="apexcharts-series"
                                        seriesname="series-1"
                                        data:longestseries="true"
                                        rel={1}>
                                        <path
                                          id="SvgjsPath1791"
                                          d="M 0 14.4 L 8 11.520000000000001 L 16 14.4 L 24 20.16 L 32 7.68 L 40 21.12 L 48 1.9200000000000017 L 56 2.8800000000000026 L 64 5.760000000000002"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(32,107,196,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="round"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskxse8cspz)"
                                          pathto="M 0 14.4 L 8 11.520000000000001 L 16 14.4 L 24 20.16 L 32 7.68 L 40 21.12 L 48 1.9200000000000017 L 56 2.8800000000000026 L 64 5.760000000000002"
                                          pathfrom="M -1 24 L -1 24 L 8 24 L 16 24 L 24 24 L 32 24 L 40 24 L 48 24 L 56 24 L 64 24"
                                          fillRule="evenodd"
                                        />
                                        <g
                                          id="SvgjsG1789"
                                          className="apexcharts-series-markers-wrap"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1790"
                                        className="apexcharts-datalabels"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1795"
                                      className="apexcharts-grid-borders"
                                      style={{ display: "none" }}
                                    />
                                    <line
                                      id="SvgjsLine1804"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1805"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1806"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)">
                                      <g
                                        id="SvgjsG1807"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1818"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1819"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1820"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /icons.html
                            <a
                              href="#"
                              className="ms-1"
                              aria-label="Open website">
                              {/* Download SVG icon from http://tabler-icons.io/i/link */}
                              <svg
                                className="icon"
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
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">986</td>
                          <td className="text-muted">865</td>
                          <td className="text-muted">44.89%</td>
                          <td className="text-end w-1">
                            <div
                              className="chart-sparkline chart-sparkline-sm"
                              id="sparkline-bounce-rate-4"
                              style={{ minHeight: "24px" }}>
                              <div
                                id="apexchartspx0y0ijj"
                                className="apexcharts-canvas apexchartspx0y0ijj apexcharts-theme-light"
                                style={{ width: "64px", height: "24px" }}>
                                <svg
                                  id="SvgjsSvg1821"
                                  width={64}
                                  height={24}
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  className="apexcharts-svg"
                                  xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}>
                                  <foreignObject
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={24}>
                                    <div
                                      className="apexcharts-legend"
                                      style={{ maxHeight: "12px" }}
                                    />
                                  </foreignObject>
                                  <rect
                                    id="SvgjsRect1826"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1859"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1823"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)">
                                    <defs id="SvgjsDefs1822">
                                      <clipPath id="gridRectMaskpx0y0ijj">
                                        <rect
                                          id="SvgjsRect1828"
                                          width={70}
                                          height={26}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskpx0y0ijj" />
                                      <clipPath id="nonForecastMaskpx0y0ijj" />
                                      <clipPath id="gridRectMarkerMaskpx0y0ijj">
                                        <rect
                                          id="SvgjsRect1829"
                                          width={68}
                                          height={28}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1827"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={24}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={24}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1835"
                                      className="apexcharts-grid">
                                      <g
                                        id="SvgjsG1836"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}>
                                        <line
                                          id="SvgjsLine1839"
                                          x1={0}
                                          y1={0}
                                          x2={64}
                                          y2={0}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1840"
                                          x1={0}
                                          y1={6}
                                          x2={64}
                                          y2={6}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1841"
                                          x1={0}
                                          y1={12}
                                          x2={64}
                                          y2={12}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1842"
                                          x1={0}
                                          y1={18}
                                          x2={64}
                                          y2={18}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1843"
                                          x1={0}
                                          y1={24}
                                          x2={64}
                                          y2={24}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1837"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1845"
                                        x1={0}
                                        y1={24}
                                        x2={64}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1844"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1830"
                                      className="apexcharts-line-series apexcharts-plot-series">
                                      <g
                                        id="SvgjsG1831"
                                        className="apexcharts-series"
                                        seriesname="series-1"
                                        data:longestseries="true"
                                        rel={1}>
                                        <path
                                          id="SvgjsPath1834"
                                          d="M 0 21 L 8 7.5 L 16 10.5 L 24 10.5 L 32 22.5 L 40 19.5 L 48 4.5 L 56 0 L 64 1.5"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(32,107,196,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="round"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskpx0y0ijj)"
                                          pathto="M 0 21 L 8 7.5 L 16 10.5 L 24 10.5 L 32 22.5 L 40 19.5 L 48 4.5 L 56 0 L 64 1.5"
                                          pathfrom="M -1 30 L -1 30 L 8 30 L 16 30 L 24 30 L 32 30 L 40 30 L 48 30 L 56 30 L 64 30"
                                          fillRule="evenodd"
                                        />
                                        <g
                                          id="SvgjsG1832"
                                          className="apexcharts-series-markers-wrap"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1833"
                                        className="apexcharts-datalabels"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1838"
                                      className="apexcharts-grid-borders"
                                      style={{ display: "none" }}
                                    />
                                    <line
                                      id="SvgjsLine1846"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1847"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1848"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)">
                                      <g
                                        id="SvgjsG1849"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1860"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1861"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1862"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /docs/
                            <a
                              href="#"
                              className="ms-1"
                              aria-label="Open website">
                              {/* Download SVG icon from http://tabler-icons.io/i/link */}
                              <svg
                                className="icon"
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
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">912</td>
                          <td className="text-muted">822</td>
                          <td className="text-muted">41.12%</td>
                          <td className="text-end w-1">
                            <div
                              className="chart-sparkline chart-sparkline-sm"
                              id="sparkline-bounce-rate-5"
                              style={{ minHeight: "24px" }}>
                              <div
                                id="apexchartsldnyi9duk"
                                className="apexcharts-canvas apexchartsldnyi9duk apexcharts-theme-light"
                                style={{ width: "64px", height: "24px" }}>
                                <svg
                                  id="SvgjsSvg1863"
                                  width={64}
                                  height={24}
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  className="apexcharts-svg"
                                  xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}>
                                  <foreignObject
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={24}>
                                    <div
                                      className="apexcharts-legend"
                                      style={{ maxHeight: "12px" }}
                                    />
                                  </foreignObject>
                                  <rect
                                    id="SvgjsRect1868"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1903"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1865"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)">
                                    <defs id="SvgjsDefs1864">
                                      <clipPath id="gridRectMaskldnyi9duk">
                                        <rect
                                          id="SvgjsRect1870"
                                          width={70}
                                          height={26}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskldnyi9duk" />
                                      <clipPath id="nonForecastMaskldnyi9duk" />
                                      <clipPath id="gridRectMarkerMaskldnyi9duk">
                                        <rect
                                          id="SvgjsRect1871"
                                          width={68}
                                          height={28}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1869"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={24}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={24}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1877"
                                      className="apexcharts-grid">
                                      <g
                                        id="SvgjsG1878"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}>
                                        <line
                                          id="SvgjsLine1881"
                                          x1={0}
                                          y1={0}
                                          x2={64}
                                          y2={0}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1882"
                                          x1={0}
                                          y1="4.8"
                                          x2={64}
                                          y2="4.8"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1883"
                                          x1={0}
                                          y1="9.6"
                                          x2={64}
                                          y2="9.6"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1884"
                                          x1={0}
                                          y1="14.399999999999999"
                                          x2={64}
                                          y2="14.399999999999999"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1885"
                                          x1={0}
                                          y1="19.2"
                                          x2={64}
                                          y2="19.2"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1886"
                                          x1={0}
                                          y1={24}
                                          x2={64}
                                          y2={24}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1879"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1888"
                                        x1={0}
                                        y1={24}
                                        x2={64}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1887"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1872"
                                      className="apexcharts-line-series apexcharts-plot-series">
                                      <g
                                        id="SvgjsG1873"
                                        className="apexcharts-series"
                                        seriesname="series-1"
                                        data:longestseries="true"
                                        rel={1}>
                                        <path
                                          id="SvgjsPath1876"
                                          d="M 0 22.08 L 7.111111111111111 13.440000000000001 L 14.222222222222221 9.600000000000001 L 21.333333333333332 10.56 L 28.444444444444443 3.84 L 35.55555555555556 4.800000000000001 L 42.666666666666664 16.32 L 49.77777777777778 1.9200000000000017 L 56.888888888888886 6.720000000000002 L 64 10.56"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(32,107,196,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="round"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskldnyi9duk)"
                                          pathto="M 0 22.08 L 7.111111111111111 13.440000000000001 L 14.222222222222221 9.600000000000001 L 21.333333333333332 10.56 L 28.444444444444443 3.84 L 35.55555555555556 4.800000000000001 L 42.666666666666664 16.32 L 49.77777777777778 1.9200000000000017 L 56.888888888888886 6.720000000000002 L 64 10.56"
                                          pathfrom="M -1 24 L -1 24 L 7.111111111111111 24 L 14.222222222222221 24 L 21.333333333333332 24 L 28.444444444444443 24 L 35.55555555555556 24 L 42.666666666666664 24 L 49.77777777777778 24 L 56.888888888888886 24 L 64 24"
                                          fillRule="evenodd"
                                        />
                                        <g
                                          id="SvgjsG1874"
                                          className="apexcharts-series-markers-wrap"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1875"
                                        className="apexcharts-datalabels"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1880"
                                      className="apexcharts-grid-borders"
                                      style={{ display: "none" }}
                                    />
                                    <line
                                      id="SvgjsLine1889"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1890"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1891"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)">
                                      <g
                                        id="SvgjsG1892"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1904"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1905"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1906"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /accordion.html
                            <a
                              href="#"
                              className="ms-1"
                              aria-label="Open website">
                              {/* Download SVG icon from http://tabler-icons.io/i/link */}
                              <svg
                                className="icon"
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
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">855</td>
                          <td className="text-muted">798</td>
                          <td className="text-muted">32.65%</td>
                          <td className="text-end w-1">
                            <div
                              className="chart-sparkline chart-sparkline-sm"
                              id="sparkline-bounce-rate-6"
                              style={{ minHeight: "24px" }}>
                              <div
                                id="apexcharts43efbj6g"
                                className="apexcharts-canvas apexcharts43efbj6g apexcharts-theme-light"
                                style={{ width: "64px", height: "24px" }}>
                                <svg
                                  id="SvgjsSvg1907"
                                  width={64}
                                  height={24}
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  className="apexcharts-svg"
                                  xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}>
                                  <foreignObject
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={24}>
                                    <div
                                      className="apexcharts-legend"
                                      style={{ maxHeight: "12px" }}
                                    />
                                  </foreignObject>
                                  <rect
                                    id="SvgjsRect1912"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1947"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1909"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)">
                                    <defs id="SvgjsDefs1908">
                                      <clipPath id="gridRectMask43efbj6g">
                                        <rect
                                          id="SvgjsRect1914"
                                          width={70}
                                          height={26}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMask43efbj6g" />
                                      <clipPath id="nonForecastMask43efbj6g" />
                                      <clipPath id="gridRectMarkerMask43efbj6g">
                                        <rect
                                          id="SvgjsRect1915"
                                          width={68}
                                          height={28}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1913"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={24}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={24}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1921"
                                      className="apexcharts-grid">
                                      <g
                                        id="SvgjsG1922"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}>
                                        <line
                                          id="SvgjsLine1925"
                                          x1={0}
                                          y1={0}
                                          x2={64}
                                          y2={0}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1926"
                                          x1={0}
                                          y1="4.8"
                                          x2={64}
                                          y2="4.8"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1927"
                                          x1={0}
                                          y1="9.6"
                                          x2={64}
                                          y2="9.6"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1928"
                                          x1={0}
                                          y1="14.399999999999999"
                                          x2={64}
                                          y2="14.399999999999999"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1929"
                                          x1={0}
                                          y1="19.2"
                                          x2={64}
                                          y2="19.2"
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1930"
                                          x1={0}
                                          y1={24}
                                          x2={64}
                                          y2={24}
                                          stroke="#e0e0e0"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1923"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1932"
                                        x1={0}
                                        y1={24}
                                        x2={64}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1931"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={24}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1916"
                                      className="apexcharts-line-series apexcharts-plot-series">
                                      <g
                                        id="SvgjsG1917"
                                        className="apexcharts-series"
                                        seriesname="series-1"
                                        data:longestseries="true"
                                        rel={1}>
                                        <path
                                          id="SvgjsPath1920"
                                          d="M 0 2.8800000000000026 L 7.111111111111111 12.48 L 14.222222222222221 17.28 L 21.333333333333332 10.56 L 28.444444444444443 21.12 L 35.55555555555556 3.84 L 42.666666666666664 16.32 L 49.77777777777778 1.9200000000000017 L 56.888888888888886 6.720000000000002 L 64 10.56"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(32,107,196,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="round"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMask43efbj6g)"
                                          pathto="M 0 2.8800000000000026 L 7.111111111111111 12.48 L 14.222222222222221 17.28 L 21.333333333333332 10.56 L 28.444444444444443 21.12 L 35.55555555555556 3.84 L 42.666666666666664 16.32 L 49.77777777777778 1.9200000000000017 L 56.888888888888886 6.720000000000002 L 64 10.56"
                                          pathfrom="M -1 24 L -1 24 L 7.111111111111111 24 L 14.222222222222221 24 L 21.333333333333332 24 L 28.444444444444443 24 L 35.55555555555556 24 L 42.666666666666664 24 L 49.77777777777778 24 L 56.888888888888886 24 L 64 24"
                                          fillRule="evenodd"
                                        />
                                        <g
                                          id="SvgjsG1918"
                                          className="apexcharts-series-markers-wrap"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1919"
                                        className="apexcharts-datalabels"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1924"
                                      className="apexcharts-grid-borders"
                                      style={{ display: "none" }}
                                    />
                                    <line
                                      id="SvgjsLine1933"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1934"
                                      x1={0}
                                      y1={0}
                                      x2={64}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1935"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)">
                                      <g
                                        id="SvgjsG1936"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1948"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1949"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1950"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <a
                  href="https://github.com/sponsors/codecalm"
                  className="card card-sponsor"
                  target="_blank"
                  rel="noopener"
                  style={{ backgroundImage: "url(./static/sponsor-banner-homepage.svg)" }}
                  aria-label="Sponsor Tabler!">
                  <div className="card-body" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Social Media Traffic</h3>
                  </div>
                  <table className="table card-table table-vcenter">
                    <thead>
                      <tr>
                        <th>Network</th>
                        <th colSpan={2}>Visitors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Instagram</td>
                        <td>3,550</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "71.0%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Twitter</td>
                        <td>1,798</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "35.96%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Facebook</td>
                        <td>1,245</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "24.9%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>TikTok</td>
                        <td>986</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "19.72%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Pinterest</td>
                        <td>854</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "17.08%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>VK</td>
                        <td>650</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "13.0%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Pinterest</td>
                        <td>420</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "8.4%" }}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Tasks</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter">
                      <tbody>
                        <tr>
                          <td className="w-1 pe-0">
                            <input
                              type="checkbox"
                              className="form-check-input m-0 align-middle"
                              aria-label="Select task"
                              defaultChecked
                            />
                          </td>
                          <td className="w-100">
                            <a
                              href="#"
                              className="text-reset">
                              Extend the data model.
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
                            {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                            <svg
                              className="icon"
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
                              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                              <path d="M16 3v4" />
                              <path d="M8 3v4" />
                              <path d="M4 11h16" />
                              <path d="M11 15h1" />
                              <path d="M12 15v3" />
                            </svg>
                            August 05, 2021
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/check */}
                              <svg
                                className="icon"
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              2/7
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/message */}
                              <svg
                                className="icon"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                              </svg>
                              3
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pe-0">
                            <input
                              type="checkbox"
                              className="form-check-input m-0 align-middle"
                              aria-label="Select task"
                            />
                          </td>
                          <td className="w-100">
                            <a
                              href="#"
                              className="text-reset">
                              Verify the event flow.
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
                            {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                            <svg
                              className="icon"
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
                              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                              <path d="M16 3v4" />
                              <path d="M8 3v4" />
                              <path d="M4 11h16" />
                              <path d="M11 15h1" />
                              <path d="M12 15v3" />
                            </svg>
                            January 01, 2019
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/check */}
                              <svg
                                className="icon"
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              3/10
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/message */}
                              <svg
                                className="icon"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                              </svg>
                              6
                            </a>
                          </td>
                          <td>
                            <span className="avatar avatar-sm">JL</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pe-0">
                            <input
                              type="checkbox"
                              className="form-check-input m-0 align-middle"
                              aria-label="Select task"
                            />
                          </td>
                          <td className="w-100">
                            <a
                              href="#"
                              className="text-reset">
                              Database backup and maintenance
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
                            {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                            <svg
                              className="icon"
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
                              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                              <path d="M16 3v4" />
                              <path d="M8 3v4" />
                              <path d="M4 11h16" />
                              <path d="M11 15h1" />
                              <path d="M12 15v3" />
                            </svg>
                            December 28, 2018
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/check */}
                              <svg
                                className="icon"
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              0/6
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/message */}
                              <svg
                                className="icon"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                              </svg>
                              1
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/002m.jpg)" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pe-0">
                            <input
                              type="checkbox"
                              className="form-check-input m-0 align-middle"
                              aria-label="Select task"
                              defaultChecked
                            />
                          </td>
                          <td className="w-100">
                            <a
                              href="#"
                              className="text-reset">
                              Identify the implementation team.
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
                            {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                            <svg
                              className="icon"
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
                              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                              <path d="M16 3v4" />
                              <path d="M8 3v4" />
                              <path d="M4 11h16" />
                              <path d="M11 15h1" />
                              <path d="M12 15v3" />
                            </svg>
                            November 11, 2020
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/check */}
                              <svg
                                className="icon"
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              6/10
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/message */}
                              <svg
                                className="icon"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                              </svg>
                              12
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pe-0">
                            <input
                              type="checkbox"
                              className="form-check-input m-0 align-middle"
                              aria-label="Select task"
                            />
                          </td>
                          <td className="w-100">
                            <a
                              href="#"
                              className="text-reset">
                              Define users and workflow
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
                            {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                            <svg
                              className="icon"
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
                              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                              <path d="M16 3v4" />
                              <path d="M8 3v4" />
                              <path d="M4 11h16" />
                              <path d="M11 15h1" />
                              <path d="M12 15v3" />
                            </svg>
                            November 14, 2021
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/check */}
                              <svg
                                className="icon"
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              3/7
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/message */}
                              <svg
                                className="icon"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                              </svg>
                              5
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/000f.jpg)" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pe-0">
                            <input
                              type="checkbox"
                              className="form-check-input m-0 align-middle"
                              aria-label="Select task"
                              defaultChecked
                            />
                          </td>
                          <td className="w-100">
                            <a
                              href="#"
                              className="text-reset">
                              Check Pull Requests
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
                            {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                            <svg
                              className="icon"
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
                              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                              <path d="M16 3v4" />
                              <path d="M8 3v4" />
                              <path d="M4 11h16" />
                              <path d="M11 15h1" />
                              <path d="M12 15v3" />
                            </svg>
                            February 11, 2021
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/check */}
                              <svg
                                className="icon"
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              2/9
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a
                              href="#"
                              className="text-muted">
                              {/* Download SVG icon from http://tabler-icons.io/i/message */}
                              <svg
                                className="icon"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                              </svg>
                              3
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar avatar-sm"
                              style={{ backgroundImage: "url(./static/avatars/001f.jpg)" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Invoices</h3>
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="text-muted">
                        Show
                        <div className="mx-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            defaultValue={8}
                            size={3}
                            aria-label="Invoices count"
                          />
                        </div>
                        entries
                      </div>
                      <div className="ms-auto text-muted">
                        Search:
                        <div className="ms-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            aria-label="Search invoice"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th className="w-1">
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all invoices"
                            />
                          </th>
                          <th className="w-1">
                            No. {/* Download SVG icon from http://tabler-icons.io/i/chevron-up */}
                            <svg
                              className="icon icon-sm icon-thick"
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
                              <path d="M6 15l6 -6l6 6" />
                            </svg>
                          </th>
                          <th>Invoice Subject</th>
                          <th>Client</th>
                          <th>VAT No.</th>
                          <th>Created</th>
                          <th>Status</th>
                          <th>Price</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001401</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              Design Works
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-us" />
                            Carlson Limited
                          </td>
                          <td>87956621</td>
                          <td>15 Dec 2017</td>
                          <td>
                            <span className="badge bg-success me-1" /> Paid
                          </td>
                          <td>$887</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001402</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              UX Wireframes
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-gb" />
                            Adobe
                          </td>
                          <td>87956421</td>
                          <td>12 Apr 2017</td>
                          <td>
                            <span className="badge bg-warning me-1" /> Pending
                          </td>
                          <td>$1200</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001403</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              New Dashboard
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-de" />
                            Bluewolf
                          </td>
                          <td>87952621</td>
                          <td>23 Oct 2017</td>
                          <td>
                            <span className="badge bg-warning me-1" /> Pending
                          </td>
                          <td>$534</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001404</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              Landing Page
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-br" />
                            Salesforce
                          </td>
                          <td>87953421</td>
                          <td>2 Sep 2017</td>
                          <td>
                            <span className="badge bg-secondary me-1" /> Due in 2 Weeks
                          </td>
                          <td>$1500</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001405</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              Marketing Templates
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-pl" />
                            Printic
                          </td>
                          <td>87956621</td>
                          <td>29 Jan 2018</td>
                          <td>
                            <span className="badge bg-danger me-1" /> Paid Today
                          </td>
                          <td>$648</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001406</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              Sales Presentation
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-br" />
                            Tabdaq
                          </td>
                          <td>87956621</td>
                          <td>4 Feb 2018</td>
                          <td>
                            <span className="badge bg-secondary me-1" /> Due in 3 Weeks
                          </td>
                          <td>$300</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001407</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              Logo &amp; Print
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-us" />
                            Apple
                          </td>
                          <td>87956621</td>
                          <td>22 Mar 2018</td>
                          <td>
                            <span className="badge bg-success me-1" /> Paid Today
                          </td>
                          <td>$2500</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">001408</span>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="text-reset"
                              tabIndex={-1}>
                              Icons
                            </a>
                          </td>
                          <td>
                            <span className="flag flag-country-pl" />
                            Tookapic
                          </td>
                          <td>87956621</td>
                          <td>13 May 2018</td>
                          <td>
                            <span className="badge bg-success me-1" /> Paid Today
                          </td>
                          <td>$940</td>
                          <td className="text-end">
                            <span className="dropdown">
                              <button
                                className="btn dropdown-toggle align-text-top"
                                data-bs-boundary="viewport"
                                data-bs-toggle="dropdown">
                                Actions
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Action
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#">
                                  Another action
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer d-flex align-items-center">
                    <p className="m-0 text-muted">
                      Showing <span>1</span> to <span>8</span> of <span>16</span> entries
                    </p>
                    <ul className="pagination m-0 ms-auto">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true">
                          {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
                          <svg
                            className="icon"
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
                            <path d="M15 6l-6 6l6 6" />
                          </svg>
                          prev
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a
                          className="page-link"
                          href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="#">
                          next {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
                          <svg
                            className="icon"
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
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer footer-transparent d-print-none">
          <div className="container-xl">
            <div className="row text-center align-items-center flex-row-reverse">
              <div className="col-lg-auto ms-lg-auto">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item">
                    <a
                      href="https://tabler.io/docs"
                      target="_blank"
                      className="link-secondary"
                      rel="noopener">
                      Documentation
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="./license.html"
                      className="link-secondary">
                      License
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/tabler/tabler"
                      target="_blank"
                      className="link-secondary"
                      rel="noopener">
                      Source code
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/sponsors/codecalm"
                      target="_blank"
                      className="link-secondary"
                      rel="noopener">
                      {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                      <svg
                        className="icon text-pink icon-filled icon-inline"
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
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                      Sponsor
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item">
                    Copyright © 2023
                    <a
                      href="."
                      className="link-secondary">
                      Tabler
                    </a>
                    . All rights reserved.
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="./changelog.html"
                      className="link-secondary"
                      rel="noopener">
                      v1.0.0-beta19
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
