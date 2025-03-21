import React from "react";
import { Box, Card, CardContent, Grid, Typography, CardActions, Button, IconButton, Chip } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ダミーデータ
const caseData = [
  { id: 1, name: "株式会社フューチャー", user: "加藤翔", amount: "¥920,000", date: "2024/05/27", hot: "低", status: "リード" },
  { id: 2, name: "有限会社ブレイン", user: "山本遥", amount: "¥4,580,000", date: "2024/05/26", hot: "高", status: "アプローチ" },
  { id: 3, name: "株式会社クリエイト", user: "高橋美咲", amount: "¥1,790,000", date: "2024/05/11", hot: "低", status: "商談" },
  { id: 4, name: "株式会社インサイト", user: "鈴木俊", amount: "¥3,000,000", date: "2024/06/01", hot: "高", status: "検討中" },
];

const CaseList = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {caseData.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <Card sx={{
            boxShadow: 2,
            borderRadius: 2,
            bgcolor: item.hot === "高" ? '#1976d2' : '#e3f2fd', // 状態による色変更
            height: '100%',
          }}>
            {/* ステータス表示（カードの一番上に追加） */}
            <Box sx={{
              backgroundColor: item.hot === "高" ? '#1565c0' : '#bbdefb', // ステータスによる色変更
              color: '#fff',
              padding: 1,
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              textAlign: 'center',
            }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {item.status}
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
              <Typography color="textSecondary">{item.user}</Typography>
              <Typography variant="body2" color="textSecondary">契約金額: {item.amount}</Typography>
              <Typography variant="body2" color="textSecondary">登録日: {item.date}</Typography>
              <Chip label={item.hot} color={item.hot === "高" ? "error" : "default"} size="small" sx={{ mt: 1 }} />
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: '#1976d2' }}>詳細</Button>
              <IconButton size="small" sx={{ ml: 'auto' }}>
                <ArrowForwardIcon sx={{ color: '#1976d2' }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Box>
  );
};

export default CaseList;