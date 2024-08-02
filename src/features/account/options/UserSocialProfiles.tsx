import React from "react";
import { SocialMediaInput } from "../controllers/socialMediaInput.tsx";

export const UserSocialProfiles = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <div>
        <div className="flex">
          <div>
            <p>Social Profiles</p>
          </div>
          <div>cross Sign</div>
        </div>
        <div className="flex flex-col">
          {/* here we are gonna to define the user Social Media Fields input */}
          <div>
            <SocialMediaInput />
          </div>
          <div>
            <SocialMediaInput />
          </div>
          <div>
            <SocialMediaInput />
          </div>
          <div>
            <SocialMediaInput />
          </div>
        </div>
      </div>
    </div>
  );
};
