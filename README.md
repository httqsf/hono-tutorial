```
npm install
npm run dev
```

```
npm run deploy
```
# API ドキュメント

## ベースURL
- **ベースURL**: `/`

---

## エンドポイント

### 一般

#### `GET /`
- **説明**: ウェルカムメッセージまたはブログ記事のJSONオブジェクトを返します（アプリケーションのロジックに応じて変わります）。
- **レスポンス**:
  - `200 OK`:
    ```json
    {
      "posts": [
        {
          "id": "1",
          "title": "Blog1",
          "content": "Blog1 Posts"
        },
        {
          "id": "2",
          "title": "Blog2",
          "content": "Blog2 Posts"
        }
      ]
    }
    ```

---

### ページ認証

#### `GET /page`
- **説明**: 認証が成功したことを示すメッセージを返します。
- **レスポンス**:
  - `200 OK`: `You are authorized`

---

### ブログ投稿の管理

#### `GET /posts`
- **説明**: すべてのブログ記事を取得します。
- **レスポンス**:
  - `200 OK`:
    ```json
    [
      {
        "id": "1",
        "title": "Blog1",
        "content": "Blog1 Posts"
      },
      {
        "id": "2",
        "title": "Blog2",
        "content": "Blog2 Posts"
      }
    ]
    ```

#### `GET /posts/:id`
- **説明**: 指定されたIDのブログ記事を取得します。
- **レスポンス**:
  - `200 OK`:
    ```json
    {
      "id": "1",
      "title": "Blog1",
      "content": "Blog1 Posts"
    }
    ```
  - `404 Not Found`:
    ```json
    {
      "message": "not found this page"
    }
    ```

#### `POST /posts`
- **説明**: 新しいブログ記事を作成します。
- **リクエストボディ**:
  ```json
  {
    "title": "New Blog",
    "content": "This is a new blog post."
  }
