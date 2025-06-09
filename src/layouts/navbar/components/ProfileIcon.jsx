import { Avatar } from "@mui/material";
import actGetUserDetails from "@/store/user/actions/userDetails.js";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { actLogoutUser } from "@/store/user/actions/signIn.js";

export default function ProfileIcon() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.data);
  const loading = useSelector((state) => state.userDetails.loading);
  const error = useSelector((state) => state.userDetails.error);

  useEffect(() => {
    dispatch(actGetUserDetails());
  }, [dispatch]);

  console.log("user data", userDetails);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return dispatch(actLogoutUser());
  }

  return (
    <>
      <Avatar style={{ cursor: "pointer" }} onClick={() => console.log("avatar click")}></Avatar>
      {/*<p>{userDetails.username}</p>*/}
    </>
  );
}
