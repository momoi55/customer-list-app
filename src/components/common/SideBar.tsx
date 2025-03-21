import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/ExitToApp';

const SideBar = ({ drawerWidth, mobileOpen, handleDrawerToggle }: any) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {/* 案件ボード */}
        <ListItem>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="案件ボード" />
          </ListItemButton>
        </ListItem>

        {/* 顧客管理 */}
        <ListItem>
          <ListItemButton component={Link} to="/customerlist">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="顧客管理" />
          </ListItemButton>
        </ListItem>

        {/* 顧客登録 */}
        <ListItem>
          <ListItemButton component={Link} to="/customerregister">
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="顧客登録" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        {/* ログアウト */}
        <ListItem>
          <ListItemButton component={Link} to="/logout">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
