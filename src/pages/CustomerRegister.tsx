import { useState } from "react";
import { TextField, Button, Container, Paper, Avatar, Typography } from "@mui/material";

export default function CustomerRegister() {
  const [formData, setFormData] = useState<{
    companyName: string;
    email: string;
    lastName: string;
    firstName: string;
    position: string;
    phone: string;
    notes: string;
    image?: string; // `undefined` を許容
  }>({
    companyName: "",
    email: "",
    lastName: "",
    firstName: "",
    position: "",
    phone: "",
    notes: "",
    image: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
        <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
          顧客情報を入力して登録
        </Typography>

        <TextField
          label="会社名"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          fullWidth
          required
          margin="dense"
        />
        <TextField
          label="メールアドレス"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />

        <div style={{ display: "flex", gap: 8 }}>
          <TextField
            label="名字 (姓)"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
            margin="dense"
          />
          <TextField
            label="名前 (名)"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            margin="dense"
          />
        </div>

        <TextField
          label="役職"
          name="position"
          value={formData.position}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="電話番号"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="備考欄"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          fullWidth
          multiline
          rows={2}
          margin="dense"
        />

        <div style={{ display: "flex", alignItems: "center", margin: "8px 0" }}>
          <Avatar src={formData.image} sx={{ width: 60, height: 60, marginRight: 2 }} />
          <Button variant="contained" component="label" size="small">
            画像を選択
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
        </div>

        <Button variant="contained" color="primary" fullWidth size="large">
          登録
        </Button>
      </Paper>
    </Container>
  );
}
