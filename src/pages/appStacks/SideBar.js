import { Avatar, Button } from "@material-ui/core";
import { HomeOutlined, AccountCircleOutlined, Twitter, MoreHoriz } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className='d-flex flex-column justify-content-between h-100'>
      <div>
        <Twitter style={{ fontSize: "30px" }} />
        <div className='py-4' />
        <div>
          <Link to='/' className='d-flex align-items-center'>
            <HomeOutlined style={{ marginRight: "1rem", color: "101419" }} /> <span>Home</span>
          </Link>
        </div>
        <div className='mt-3'>
          <Link to='/profile' className='d-flex align-items-center'>
            <AccountCircleOutlined style={{ marginRight: "1rem", color: "101419" }} />
            <span>Profile</span>
          </Link>
        </div>
        <div className='py-4' />
        <div className='w-75'>
          <Button
            variant='contained'
            fullWidth
            size='large'
            style={{
              borderRadius: "50px",
              textTransform: "none",
              background: "#101419",
            }}
            disableElevation
            disableRipple
          >
            <p style={{ color: "#fff" }}>Tweet</p>
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-between w-75 align-items-center mb-4" >
          <div className="d-flex align-items-center">
              <Avatar style={{marginRight: "1rem"}}/>
              <div>
                  <p>name</p>
                  <p>@name</p>
              </div>
          </div>
          <div>
              <MoreHoriz/>
          </div>
      </div>
    </div>
  );
}
