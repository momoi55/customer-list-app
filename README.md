
日本語ページ
# 顧客管理アプリ

このリポジトリは、Reactを使用して構築した顧客管理アプリです。ログインページから案件ボードに遷移し、顧客リストを管理できます。
さらに、カードビューを使って案件のステータスを視覚的に管理する機能も実装しています。

## セットアップ手順
以下の手順でプロジェクトをセットアップし、ローカル環境で実行できます。
1. **リポジトリをクローンする**:
    ```bash
    git clone https://github.com/yourusername/customer-list-app.git
    ```

2. **プロジェクトディレクトリに移動**:
    ```bash
    cd customer-list-app
    ```

3. **依存関係をインストール**:
    ```bash
    npm install
    ```

4. **アプリケーションを起動**:
    ```bash
    npm start
    ```

    上記コマンドで、ローカルサーバーが起動し、ブラウザでアプリケーションが表示されます。通常、`http://localhost:3000` でアクセスできます。

## 使用した技術・ライブラリ

- **React**: ユーザーインターフェースの作成
- **React Router DOM**: ページ遷移のためのライブラリ
- **Material UI**: UIコンポーネントのためのライブラリ
- **TypeScript**: 型安全なコードの実装
- **@mui/icons-material**: アイコンライブラリ

## 実装した機能の説明

- **ログインページ**: ユーザーがログインできる画面です。IDは「Admin」、パスワードは「password」でログインできます。
- **サイドバー**: アプリケーションのナビゲーションを提供するサイドバーがあり、案件ボードや顧客一覧に移動できる。
　　- **案件ボード**: 顧客の案件状態（リード、アプローチ、商談、検討中）を視覚的に管理できるボードです。案件のホット度（高/低）を表示する機能も搭載しています。
　　- **顧客リスト**: 顧客の情報をテーブル形式で表示します。情報には会社名、担当者名、契約金額、登録日などが含まれます。
　　- **顧客登録**: 新しい顧客情報を登録することができます。
　　- **ログアウト機能**: 案件ボード（CaseList）ページにログイン後、サイドバーやヘッダーに表示される「ログアウト」ボタンをクリックすることで、ログアウトし、再度ログインページに戻ることができます。
- **レスポンシブデザイン**: モバイルとPCで適切に表示されるレスポンシブデザインを採用しています。

## 動作確認方法

1. ログイン画面で以下のIDとパスワードを使用してください:
   - **ID**: Admin
   - **パスワード**: password

2. ログイン後、以下の機能を確認できます:
   - **案件ボード**: 各案件の状態が視覚的に管理されており、カードの色と状態が連動します。
   - **顧客リスト**: 顧客の情報がリスト表示され、詳細情報を見ることができます。

## その他

- **問題が発生した場合**:
    - GitHubでのIssueの作成をお願いします。
    - [GitHub リポジトリのリンク](https://github.com/yourusername/customer-list-app)
 
