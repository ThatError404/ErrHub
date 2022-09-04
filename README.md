# ErrHub API
![image](./images/vercel.svg)


# POST

## User Info
------
**POST: `https://errhub.dev/api/roblox/user/status?type={type}&{type}={id}`**

**ENCODED: JSON**

**INFO: `{type}` can be either `id` or `username` | `{id}` is the player id**

**Ex:**
```js
const fetch = require('node-fetch');

const url = 'https://errhub.dev/api/roblox/user/status?type=id&id=3588216323';

fetch(url).then(res => res.json())
let data = res.json()
console.log("User Is: " + data.isOnline)
```
**Output:**
```
User Is: Offline
```

**[Test it]()**
