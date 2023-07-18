import React from "react";

export default function HeaderToggleAction() {
  return (
    <div className="nav-item dropdown">
      <a
        href="#user"
        className="nav-link d-flex lh-1 text-reset p-0">
        <div className="d-none d-xl-block ps-2">
          <div>Saniya Shaikh</div>
          <div className="mt-1 small text-muted">Super Admin</div>
        </div>
        <span
          className="avatar avatar-sm"
          style={{ backgroundImage: "url(./logo.svg)" }}
        />
      </a>
    </div>
  );
}
