const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイルの提供
app.use(express.static(__dirname));

// ルートアクセス時にWordPressデザインを表示
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'rakuruma-wordpress-design.html'));
});

// ラクルマLP（WordPressデザイン維持版）
app.get('/rakuruma', (req, res) => {
    res.sendFile(path.join(__dirname, 'rakuruma-wordpress-design.html'));
});

// 完全版（プレースホルダー画像版）
app.get('/complete', (req, res) => {
    res.sendFile(path.join(__dirname, 'rakuruma-complete.html'));
});

// その他のHTMLファイルへのルート
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/original', (req, res) => {
    res.sendFile(path.join(__dirname, 'rakuruma-index.html'));
});

// サーバー開始
app.listen(PORT, () => {
    console.log(`🚗 ラクルマサーバーが起動しました！`);
    console.log(`📍 メインサイト: http://localhost:${PORT}`);
    console.log(`👤 プロフィール: http://localhost:${PORT}/profile`);
    console.log(`📄 オリジナル: http://localhost:${PORT}/original`);
    console.log(`\n🏅 権威性タグ付きのサイトをご確認ください！`);
});

// エラーハンドリング
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('サーバーエラーが発生しました');
});

// 404エラーハンドリング
app.use((req, res) => {
    res.status(404).send('ページが見つかりません');
});