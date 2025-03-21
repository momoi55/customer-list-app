import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    // ログインのバリデーション (簡単なチェック)
    if (username === 'admin' && password === 'password') {
      // ログイン成功した場合、案件ボードに遷移
      navigate('/');
    } else {
      alert('ユーザー名またはパスワードが間違っています');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          ログイン
        </Typography>
        <form onSubmit={handleLogin}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="ユーザー名"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <TextField
              label="パスワード"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              ログイン
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
