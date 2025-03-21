import React from 'react';
import { Box, Button, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ログアウト処理を行う（例: ローカルストレージやセッションストレージからの削除など）
    // ログインページにリダイレクト
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          ログアウトしました
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          ログイン画面に戻る
        </Button>
      </Paper>
    </Container>
  );
};

export default Logout;
