"use client";

import Image from "next/image";
import React from "react";
import "./style.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="tic-tac-toe-section">
        <h1 className="tic-tac-toe-title">
          Tic-<span>tac-</span>toe
        </h1>
        <div className="tic-tac-toe-board">
          <div className="row">
            <div className="cell">O</div>
            <div className="cell">O</div>
            <div className="cell">X</div>
          </div>
          <div className="row">
            <div className="cell">X</div>
            <div className="cell">X</div>
            <div className="cell">O</div>
          </div>
          <div className="row">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
        </div>
      </div>

      <div className="login-section">
        <div className="user-thumbnails">
          <Image src="/user1.png" alt="User 1" width={100} height={100} />
          <Image src="/user2.png" alt="User 2" width={100} height={100} />
          <Image src="/user3.png" alt="User 3" width={100} height={100} />
          <Image src="/user4.png" alt="User 4" width={100} height={100} />
        </div>

        <button className="login-button" onClick={() => window.location.href = "/api/auth/login"}>
          LOGIN
        </button>
      </div>
    </div>
  );
}
