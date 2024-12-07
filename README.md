```
npm install
npm run dev
```

```
npm run deploy
```

# API Documentation

## Base URL
- **Base URL**: `/`

---

## Endpoints

### General

#### `GET /`
- **Description**: Returns a welcome message or a JSON object with blog posts (depending on the specific application logic).
- **Response**:
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

### Page Authorization

#### `GET /page`
- **Description**: Returns a message indicating successful authorization.
- **Response**:
  - `200 OK`: `You are authorized`

---

### Posts Management

#### `GET /posts`
- **Description**: Retrieves all blog posts.
- **Response**:
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
- **Description**: Retrieves a blog post by its ID.
- **Response**:
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
- **Description**: Creates a new blog post.
- **Request Body**:
  ```json
  {
    "title": "New Blog",
    "content": "This is a new blog post."
  }
