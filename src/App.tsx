import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Account } from "./features/account/pages/Account.tsx";
import { AuthUser } from "./features/auth/pages/AuthUser.tsx";
import { LoginUser } from "./features/auth/pages/LoginUser.tsx";
import { PasswordReset } from "./features/auth/pages/PasswordReset.tsx";
import { SignUpUser } from "./features/auth/pages/SignUpUser.tsx";
import { Chatting } from "./features/chatting/pages/Chatting.tsx";
import { HomeScreen } from "./features/homeScreen/pages/HomeScreen.tsx";
import { AllTeams } from "./features/Teams/pages/AllTeams.tsx";
import { CreateTeam } from "./features/Teams/pages/CreateTeam.tsx";
import { ErrorPage } from "./features/Processing/pages/ErrorPage.tsx";
import { FriendRequests } from "./features/Friends/pages/FriendRequests.tsx";
import { GetQrCode } from "./features/Friends/pages/GetQrCode.tsx";
import { UploadPosts } from "./features/Post/pages/UploadPosts.tsx";
import { AllPosts } from "./features/Post/pages/AllPosts.tsx";
import { Setting } from "./features/account/pages/Setting.tsx";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/user/auth" element={<AuthUser />} />
          <Route path="/user/login" element={<LoginUser />} />
          <Route path="/user/signup" element={<SignUpUser />} />
          <Route path="/password/reset" element={<PasswordReset />} />
          <Route path="/chat" element={<Chatting />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/post/all" element={<AllPosts />} />
          <Route path="/post/upload" element={<UploadPosts />}/>
          <Route path="/qr/get" element={<GetQrCode />}  />
          <Route path="/friend" element={<FriendRequests />} />
          <Route path="/team/all" element={<AllTeams />} />
          <Route path="/team/create" element={<CreateTeam />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;