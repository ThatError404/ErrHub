# ErrHub API
![image](./images/vercel.svg)

## User Info

**POST: `https://errhub.dev/api/roblox/user/status?type={type}&{type}={id}`**

**INFO: `{type}` can be either `id` or `username` | `{id}` is *always* the player id**

**Ex:**
```js
const fetch = require('node-fetch');
const url = 'https://errhub.dev/api/roblox/user/status?type=id&id=3588216323';
fetch(url)
    .then(res => res.json())
    .then(json => {
        if (json.IsOnline === false) {
            console.log('User is offline');
        } else {
            console.log('User is online');
        }
    });
```
**Output:**
```
User Is: Offline
```

## User's Games

**POST: `https://errhub.dev/api/roblox/user/games/get?id={id}`**


**INFO: Only gets the first 50 (Rate Limit) | `{id}` is *always* the player id**

**Ex:**
```js
const fetch = require('node-fetch');
const url = 'https://errhub.dev/api/roblox/user/games/get?id=3588216323';
fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
    });
```

**Output:**
```json
{"previousPageCursor":null,"nextPageCursor":null,"data":[{"id":3902478814,"name":"NoTax Verification","description":null,"creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":10797507686,"type":"Place"},"created":"2022-09-02T20:43:07.143Z","updated":"2022-09-02T23:04:23.01Z","placeVisits":1},{"id":3806861670,"name":"Anti-Cheat Tester","description":null,"creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":10445250395,"type":"Place"},"created":"2022-08-01T22:38:06.05Z","updated":"2022-08-01T22:43:13.853Z","placeVisits":32},{"id":3799530488,"name":"Script Tester","description":null,"creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":10417823790,"type":"Place"},"created":"2022-07-30T17:20:28.523Z","updated":"2022-07-30T17:30:58.893Z","placeVisits":0},{"id":3792214907,"name":"Untitled Game","description":null,"creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":10394908161,"type":"Place"},"created":"2022-07-28T22:12:06.303Z","updated":"2022-07-28T22:12:49.93Z","placeVisits":0},{"id":3749225796,"name":"Rank Testinh","description":null,"creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":10234659183,"type":"Place"},"created":"2022-07-15T15:13:46.223Z","updated":"2022-07-15T15:14:09.443Z","placeVisits":1},{"id":3628074887,"name":"404 Hub","description":null,"creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":9804689758,"type":"Place"},"created":"2022-06-03T09:12:08.01Z","updated":"2022-07-03T20:08:55.177Z","placeVisits":0},{"id":3623166511,"name":"Untitled Game","description":null,"creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":9787129282,"type":"Place"},"created":"2022-06-01T05:54:36.167Z","updated":"2022-07-03T20:09:25.8Z","placeVisits":0},{"id":3622985738,"name":"ThatError_404's Place","description":"This is your very first Roblox creation. Check it out, then make it your own with Roblox Studio!","creator":{"id":3588216323,"type":"User"},"rootPlace":{"id":9786532749,"type":"Place"},"created":"2022-06-01T03:36:40.17Z","updated":"2022-06-01T03:36:40.21Z","placeVisits":0}]}
```

## User's Friends

**POST: `https://errhub.dev/api/roblox/user/friends/get?id={id}&sort={sort order}`**

**INFO: `{id}` is *always* the player id** | `{sort order}` can be `Alphabetical`, `StatusAlphabetical`, or `StatusFrequents`**

**Ex:**
```js
const fetch = require('node-fetch');
const url = 'https://errhub.dev/api/roblox/user/friends/get?id=3588216323&sort=Alphabetical';
fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
    });
```

**Output:**
```json
{"data":[{"isOnline":true,"presenceType":1,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3208626133,"name":"Ahnaf16094","displayName":"Ahnaf16094"},{"isOnline":true,"presenceType":1,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3122356748,"name":"AlexanderSouI","displayName":"Rush"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1110243772,"name":"B1u6r","displayName":"Itachi"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2413250531,"name":"bigfoot1222w","displayName":"bigfoot1222w"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1662383842,"name":"BlessedHokage","displayName":"BlessedHokage"},{"isOnline":true,"presenceType":2,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1513868412,"name":"BoredMxghty","displayName":"BoredMxghty"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3376845136,"name":"CakeruralOnXbox","displayName":"CakeruralOnXbox"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2206072783,"name":"coolkid282013","displayName":"coolkid282013"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":116567202,"name":"CraftPiano","displayName":"Craft"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2037742902,"name":"Doomtaker302765","displayName":"DeathStar"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2269990476,"name":"Ducks4Life1098","displayName":"BOB_ROSS"},{"isOnline":true,"presenceType":2,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":730825408,"name":"EspialWhite","displayName":"divine"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":387593841,"name":"etipufhu","displayName":"etipufhu"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3154144196,"name":"Exzaggerating","displayName":"Nini"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2536381726,"name":"fernando925p","displayName":"Edp"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":30848671,"name":"finessedchloe","displayName":"chloe"},{"isOnline":true,"presenceType":2,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1712363618,"name":"george08363","displayName":"AH_HYUG"},{"isOnline":true,"presenceType":2,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3197116658,"name":"hankiins12","displayName":"hankiins12"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2283462551,"name":"himeishi12","displayName":"himeishi12"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3474735150,"name":"HttpsTimeout","displayName":"HttpsTimeout"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2681050299,"name":"Junior2games","displayName":"Junior2games"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3767562299,"name":"KevinPlayzCLDK","displayName":"KevinPlayzCLDK"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3688056154,"name":"kvzkqf","displayName":"kvzkqf"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1576199592,"name":"lifesslonelyy","displayName":"scy"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3710965927,"name":"Lil_blnt1","displayName":"Lil_blnt1"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1705462536,"name":"llolljay","displayName":"Sh3LuvMir"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1026093941,"name":"MissRita1021","displayName":"Daisy"},{"isOnline":true,"presenceType":2,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2706677972,"name":"monkeyboy_hi","displayName":"D219Mod_Soul"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":200557872,"name":"Monse15forever","displayName":"Trxks"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3379380988,"name":"MoshiiMoshiie","displayName":"Moo"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":655805863,"name":"nickygarage","displayName":"asdasd"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1595674548,"name":"Patrickthekiller5838","displayName":"Mushroom"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":1122989482,"name":"Ronnie_milton1223","displayName":"Reckless_Texan"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":244131858,"name":"SamuelNewman59","displayName":"Monkey"},{"isOnline":true,"presenceType":1,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":3813670158,"name":"ThatBigMuffin","displayName":"Muffin"},{"isOnline":false,"presenceType":0,"isDeleted":false,"friendFrequentScore":0,"friendFrequentRank":1,"hasVerifiedBadge":false,"description":null,"created":"0001-01-01T06:00:00Z","isBanned":false,"externalAppDisplayName":null,"id":2245391856,"name":"TPK1954","displayName":"James"}]}
```

## User's Online Friends (Roblox Deprecated)

**POST: `https://errhub.dev/api/roblox/user/friends/online/get?id={id}`**

**INFO: `{id}` is *always* the player id**

**Ex:**
```js
const fetch = require('node-fetch');
const url = 'https://errhub.dev/api/roblox/user/friends/online/get?id=3588216323';
fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
    });
```

**Output:**
```json
{"errors":[{"code":0,"message":"Authorization has been denied for this request."}]}
```
