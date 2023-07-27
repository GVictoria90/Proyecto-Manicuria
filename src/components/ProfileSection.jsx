// ProfileSection.js
import React from "react";

const ProfileSection = () => {
  return (
    <div className="row mt-4">
      <div className="col-12 d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => console.log("Perfil de Usuario")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
