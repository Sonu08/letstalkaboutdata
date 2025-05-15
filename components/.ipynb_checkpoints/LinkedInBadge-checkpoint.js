import React, { useEffect } from 'react';

const LinkedInBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="linkedin-badge">
      <div className="LI-profile-badge"
           data-version="v1"
           data-size="medium"
           data-locale="en_US"
           data-type="vertical"
           data-theme="light"
           data-vanity="sonutheanalyst">
      </div>
    </div>
  );
};

export default LinkedInBadge;
