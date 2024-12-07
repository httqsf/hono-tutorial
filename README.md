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
- **説明**: ウェルカムメッセージを返します（アプリケーションのロジックに応じて変わります）。
- **レスポンス**:
  - Hello Hono!

---

### ページ認証

#### `GET /auth/page`
- **説明**: 認証が成功したことを示すメッセージを返します。
- **レスポンス**:
  - `200 OK`: `You are authorized`

- username: "hono",
- password: "password",
---

### ブログ投稿の管理

以下のダミーデータがあります。
```
    {
      "id": "1",
      "title": "Blog1",
      "content": "Blog1 Posts"
    },
    {
      "id": "2", 
      "title": "Blog2",
      "content": "Blog2 Posts"
    },
    {
      "id": "3",
      "title": "Blog3", 
      "content": "Blog3 Posts"
    },
```

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
      },
      {
        "id": "3",
        "title": "Blog3", 
        "content": "Blog3 Posts"
      },
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
  - `404 Not Found`:
    ```json
    {
      "message": "not found this page"
    }


#### `POST /posts`
- **説明**: リクエストボディを追加することで新しいブログ記事を作成します。
- **リクエストボディ**:
  ```json
  {
    "title": "New Blog",
    "content": "This is a new blog post."
  }
- **レスポンス**:
  ```json
  {
    "id": "4" // 既存のデータの後ろに追加します
    "title": "New Blog",
    "content": "This is a new blog post."
  }


#### `PUT /posts/:id`
- **説明**: 指定されたIDのブログ記事を更新します。
- **パスパラメータ**:
  - `id` (string): 更新対象のブログ記事のID
- **リクエストボディ**:
  ```json
  {
    "title": "Updated Blog",
    "content": "Updated blog content."
  }
- **レスポンス**:
  ```json
  {
    "id": "1",
    "title": "Updated Blog",
    "content": "Updated blog content."
  },


---

### ブログ記事の削除

#### `DELETE /posts/:id`
- **説明**: 指定されたIDのブログ記事を削除します。
- **パスパラメータ**:
  - `id` (string): 削除対象のブログ記事のID
- **レスポンス**:
  - `200 OK`:
    ```json
    {
      "message": "Blog Post Deleted"
    }
    ```
  - `404 Not Found`:
    ```json
    {
      "message": "Post not found"
    }
    ```
