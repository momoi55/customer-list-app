import React, { useState } from "react";
import { Box, Grid, Typography, Pagination, Paper } from "@mui/material";

// 顧客データ（25名分）
const customerData = [
  { id: 1, company: "株式会社ファン", name: "田中太郎", phone: "090-1111-2222", email: "tanaka@fan.com", registerDate: "2024/01/15" },
  { id: 2, company: "株式会社パワー", name: "佐藤花子", phone: "090-3333-4444", email: "sato@power.com", registerDate: "2024/02/20" },
  { id: 3, company: "株式会社シード", name: "鈴木一郎", phone: "090-5555-6666", email: "suzuki@seed.com", registerDate: "2024/03/10" },
  { id: 4, company: "株式会社インサイト", name: "高橋美紀", phone: "090-7777-8888", email: "takahashi@insight.com", registerDate: "2024/03/25" },
  { id: 5, company: "株式会社ファーム", name: "加藤翔", phone: "090-9999-0000", email: "kato@farm.com", registerDate: "2024/04/15" },
  { id: 6, company: "株式会社テック", name: "山本遥", phone: "090-1111-1234", email: "yamamoto@tech.com", registerDate: "2024/04/17" },
  { id: 7, company: "株式会社グロース", name: "鈴木俊", phone: "090-5555-9876", email: "suzuki@growth.com", registerDate: "2024/05/01" },
  { id: 8, company: "株式会社エッジ", name: "高橋美咲", phone: "090-1234-5678", email: "takahashi@edge.com", registerDate: "2024/05/10" },
  { id: 9, company: "株式会社ライジング", name: "田中花子", phone: "090-7777-6666", email: "tanaka@rising.com", registerDate: "2024/05/25" },
  { id: 10, company: "株式会社サクセス", name: "佐藤太郎", phone: "090-2345-6789", email: "sato@success.com", registerDate: "2024/06/01" },
  { id: 11, company: "株式会社スマイル", name: "鈴木花子", phone: "090-3456-7890", email: "suzuki@smile.com", registerDate: "2024/06/10" },
  { id: 12, company: "株式会社リーダー", name: "加藤美紀", phone: "090-4567-8901", email: "kato@leader.com", registerDate: "2024/06/20" },
  { id: 13, company: "株式会社メガ", name: "山本一郎", phone: "090-5678-9012", email: "yamamoto@mega.com", registerDate: "2024/07/01" },
  { id: 14, company: "株式会社フューチャー", name: "田中太郎", phone: "090-6789-0123", email: "tanaka@future.com", registerDate: "2024/07/10" },
  { id: 15, company: "株式会社ネクスト", name: "佐藤花子", phone: "090-7890-1234", email: "sato@next.com", registerDate: "2024/07/15" },
  { id: 16, company: "株式会社アイデア", name: "鈴木一郎", phone: "090-8901-2345", email: "suzuki@idea.com", registerDate: "2024/08/01" },
  { id: 17, company: "株式会社アドバンス", name: "高橋美咲", phone: "090-9012-3456", email: "takahashi@advance.com", registerDate: "2024/08/05" },
  { id: 18, company: "株式会社イノベーション", name: "加藤翔", phone: "090-0123-4567", email: "kato@innovation.com", registerDate: "2024/08/10" },
  { id: 19, company: "株式会社オリジン", name: "山本遥", phone: "090-1234-5678", email: "yamamoto@origin.com", registerDate: "2024/09/01" },
  { id: 20, company: "株式会社グローバル", name: "鈴木俊", phone: "090-2345-6789", email: "suzuki@global.com", registerDate: "2024/09/10" },
  { id: 21, company: "株式会社ダイナミクス", name: "高橋美紀", phone: "090-3456-7890", email: "takahashi@dynamics.com", registerDate: "2024/09/15" },
  { id: 22, company: "株式会社スピード", name: "田中花子", phone: "090-4567-8901", email: "tanaka@speed.com", registerDate: "2024/09/20" },
  { id: 23, company: "株式会社トライ", name: "佐藤太郎", phone: "090-5678-9012", email: "sato@try.com", registerDate: "2024/10/01" },
  { id: 24, company: "株式会社ブレイン", name: "鈴木花子", phone: "090-6789-0123", email: "suzuki@brain.com", registerDate: "2024/10/10" },
  { id: 25, company: "株式会社スタート", name: "加藤美紀", phone: "090-7890-1234", email: "kato@start.com", registerDate: "2024/10/15" },
];

const CustomerList = () => {
  const [page, setPage] = useState(1);
  const customersPerPage = 10;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // 現在のページに表示する顧客データを取得
  const currentCustomers = customerData.slice((page - 1) * customersPerPage, page * customersPerPage);

  return (
    <Box sx={{ width: '100%' }}>
      {/* 顧客リストのヘッダー */}
      <Box sx={{ backgroundColor: '#1976d2', padding: 2 }}>
        <Grid container>
          <Grid item xs={3}><Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>会社名</Typography></Grid>
          <Grid item xs={2}><Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>名前</Typography></Grid>
          <Grid item xs={2}><Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>電話番号</Typography></Grid>
          <Grid item xs={3}><Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>メールアドレス</Typography></Grid>
          <Grid item xs={2}><Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>登録日</Typography></Grid>
        </Grid>
      </Box>

      {/* 顧客情報 */}
      {currentCustomers.map((customer) => (
        <Paper key={customer.id} sx={{ marginBottom: 1, padding: 2, backgroundColor: '#e3f2fd' }}>
          <Grid container alignItems="center">
            <Grid item xs={3}><Typography variant="body2" sx={{ color: '#000' }}>{customer.company}</Typography></Grid>
            <Grid item xs={2}><Typography variant="body2" sx={{ color: '#000' }}>{customer.name}</Typography></Grid>
            <Grid item xs={2}><Typography variant="body2" sx={{ color: '#000' }}>{customer.phone}</Typography></Grid>
            <Grid item xs={3}><Typography variant="body2" sx={{ color: '#000' }}>{customer.email}</Typography></Grid>
            <Grid item xs={2}><Typography variant="body2" sx={{ color: '#000' }}>{customer.registerDate}</Typography></Grid>
          </Grid>
        </Paper>
      ))}

      {/* ページネーション */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={Math.ceil(customerData.length / customersPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default CustomerList;
