import React from "react";

export default function NavButtonHelpCenter() {
  return (
    <li className="nav-item py-2">
      <a
        className="nav-link ps-2"
        href="#navbar-layout">
        <span className="nav-link-icon d-md-none d-lg-inline-block">
          <svg
            className="icon icon-tabler icon-tabler-headphones-filled"
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
              d="M21 18a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a3 3 0 0 1 2.824 -2.995l.176 -.005h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .24v.17c.25 -.088 .516 -.144 .791 -.163l.209 -.007h1a3 3 0 0 1 2.995 2.824l.005 .176v3a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a9 9 0 0 1 17.996 -.265l.004 .265v6z"
              strokeWidth={0}
              fill="currentColor"
            />
          </svg>
        </span>
        <button className="btn w-100">Help Center</button>
      </a>
    </li>
  );
}
