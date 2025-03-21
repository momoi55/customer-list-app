import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SideBar from '../common/SideBar';

const drawerWidth = 240;

export default function AppLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* ヘッダー */}
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            顧客管理アプリ
          </Typography>
          <Button color="inherit" sx={{ ml: 'auto' }} component={Link} to="/logout">
            ログアウト
          </Button>
        </Toolbar>
      </AppBar>

      {/* サイドバー */}
      <SideBar drawerWidth={drawerWidth} mobileOpen={false} handleDrawerToggle={() => {}} />

      {/* メインコンテンツ */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
