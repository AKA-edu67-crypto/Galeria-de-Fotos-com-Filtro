# 📸 Photo Gallery with Album Filter

A JavaScript project created to practice API consumption using `fetch`, `async/await`, and dynamic URL parameters.

## 🚀 Goal

Build a photo gallery where users can switch between different albums by clicking buttons. When an album is selected, the application fetches its photos from an API and displays them dynamically on the page.

---

## 🧠 Concepts Practiced

- Async/Await
- Fetch API
- Query Parameters
- Template Strings
- Click Events
- DOM Manipulation
- Dynamic Rendering
- Loops
- REST APIs

---

## 📂 Project Structure

### HTML

```html
<button id="album1">Album 1</button>
<button id="album2">Album 2</button>
<button id="album3">Album 3</button>

<div class="photos"></div>
```

### JavaScript

```
for (let i = 1; i <= 3; i++) {
    const botao = document.querySelector(`#album${i}`)
    if (botao) {
        botao.addEventListener("click", () => carregarAlbum(i))
    }
}
```

---

## 🔄 Application Flow

1. The user clicks an album button.
2. The button calls the `loadAlbum()` function.
3. The selected album ID is passed as a parameter.
4. A dynamic URL is created.
5. A request is sent to the API.
6. The response is converted to JSON.
7. The photo container is cleared.
8. The selected album's photos are rendered on the screen.

---

## 🔗 API Used

JSONPlaceholder

Endpoint:

```txt
https://jsonplaceholder.typicode.com/photos?albumId=1
```

Example:

```txt
https://jsonplaceholder.typicode.com/photos?albumId=2
```

---

## 💡 What I Learned

This project helped reinforce several important concepts used in real-world applications:

- Dynamic URLs
- Filtered API requests
- User interactions
- Dynamic HTML generation
- Data flow organization

---

## 📚 Example API Response

```json
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```

---

## 🎯 Final Result

Users can switch between albums and view different photo collections without reloading the page.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- JSONPlaceholder

---

## 👨‍💻 Author

Created as part of my JavaScript Advanced studies to practice API consumption and dynamic DOM manipulation.
