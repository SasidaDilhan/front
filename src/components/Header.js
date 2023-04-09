import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setvalue] = useState(); //this one use to link button and tabs to another pages
  return (
    <AppBar
      position="sticky" //this is for showing other letter, ignoring them in to the behind
      sx={{
        background:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)", // changing background color using gradients
      }}
    >
      <Toolbar>
        {/*using import  AppBar Button Tab Tabs Toolbar Typography  from "@mui/material"*/}

        <Typography variant="h4">BlogsApp</Typography>
        {/*"Typography is the key word for add text to mui metirial" */}
        {isLoggedIn && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setvalue(val)}
            >
              {/*this is for changing color between tabs by pressing it*/}
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
              {/*LinkComponent={Link} to="/blogs" use to redirect to the mantion page by clicking it */}
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
                LinkComponent={Link}
                to="/blogs"
              >
                LogIn
              </Button>
              <Button
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
                LinkComponent={Link}
                to="/auth"
              >
                SignUp
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
              LinkComponent={Link}
              to="/login"
            >
              LogOut
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
