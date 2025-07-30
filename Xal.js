import crypto from 'crypto'; 


const MOBILE_NAVIGATOR_PROPERTY_LIST = [
    "vendorSub", "productSub", "vendor", "maxTouchPoints", "scheduling", "userActivation", "doNotTrack",
    "geolocation", "connection", "plugins", "mimeTypes", "pdfViewerEnabled", "webkitTemporaryStorage",
    "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion",
    "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getGamepads",
    "javaEnabled", "sendBeacon", "vibrate", "deprecatedRunAdAuctionEnforcesKAnonymity", "protectedAudience",
    "bluetooth", "storageBuckets", "clipboard", "credentials", "keyboard", "managed", "mediaDevices", "storage",
    "serviceWorker", "virtualKeyboard", "wakeLock", "deviceMemory", "userAgentData", "contacts", "login", "ink",
    "mediaCapabilities", "devicePosture", "locks", "gpu", "mediaSession", "permissions", "presentation", "usb",
    "xr", "adAuctionComponents", "runAdAuction", "canLoadAdAuctionFencedFrame", "canShare", "share",
    "clearAppBadge", "getBattery", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess",
    "setAppBadge", "webkitGetUserMedia", "clearOriginJoinedAdInterestGroups", "createAuctionNonce",
    "joinAdInterestGroup", "leaveAdInterestGroup", "updateAdInterestGroups", "deprecatedReplaceInURN",
    "deprecatedURNToURL", "getInstalledRelatedApps", "getInterestGroupAdAuctionData"
];

const MOBILE_WINDOW_PROPERTY_LIST = [
    "0", "1", "2", "window", "self", "document", "name", "location", "customElements", "history", "navigation",
    "locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status", "closed", "frames",
    "length", "top", "opener", "parent", "frameElement", "navigator", "origin", "external", "screen", "innerWidth",
    "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "visualViewport", "screenX", "screenY",
    "outerWidth", "outerHeight", "devicePixelRatio", "event", "clientInformation", "screenLeft", "screenTop",
    "styleMedia", "onsearch", "trustedTypes", "performance", "onappinstalled", "onbeforeinstallprompt", "crypto",
    "indexedDB", "sessionStorage", "localStorage", "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch",
    "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose",
    "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange",
    "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop",
    "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid",
    "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown",
    "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel",
    "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll",
    "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit",
    "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend",
    "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick",
    "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate",
    "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave",
    "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart",
    "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "onafterprint",
    "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror",
    "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage",
    "onunhandledrejection", "onunload", "isSecureContext", "crossOriginIsolated", "scheduler", "alert", "atob",
    "blur", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "captureEvents", "clearInterval", "clearTimeout",
    "close", "confirm", "createImageBitmap", "fetch", "find", "focus", "getComputedStyle", "getSelection",
    "matchMedia", "moveBy", "moveTo", "open", "postMessage", "print", "prompt", "queueMicrotask", "releaseEvents",
    "reportError", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "resizeTo", "scroll", "scrollBy",
    "scrollTo", "setInterval", "setTimeout", "stop", "structuredClone", "webkitCancelAnimationFrame",
    "webkitRequestAnimationFrame", "originAgentCluster", "onorientationchange", "orientation", "onpageswap",
    "onpagereveal", "credentialless", "fence", "speechSynthesis", "oncommand", "onscrollend", "onscrollsnapchange",
    "onscrollsnapchanging", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "chrome", "caches",
    "cookieStore", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute", "sharedStorage",
    "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "fetchLater", "getDigitalGoodsService",
    "getScreenDetails", "showDirectoryPicker", "showOpenFilePicker", "showSaveFilePicker", "AppInit",
    "_epicEnableCookieGuard", "__tracking_base", "_epicTrackingCookieDomainId", "_epicTrackingCountryCode",
    "regeneratorRuntime", "_epicTracking", "_sentryDebugIds", "_sentryDebugIdIdentifier", "SENTRY_RELEASE",
    "__axiosInstance", "__core-js_shared__", "core", "__axiosInstanceCached", "IMask", "__store", "__SENTRY__",
    "MotionHandoffIsComplete", "clearImmediate", "setImmediate", "a0_0xaf08", "a0_0x2760", "talon", "hCaptchaLoaded",
    "hCaptchaReady", "Raven", "hcaptcha", "grecaptcha", "k", "i", "TEMPORARY", "PERSISTENT", "addEventListener",
    "dispatchEvent", "removeEventListener", "when"
];


class XalUtility {
    static fnv1a(data) {
        let hash = 2166136261;

        const processValue = (value) => {
            let str;
            if (typeof value === 'object' && value !== null) {
                str = JSON.stringify(value) + ';';
            } else {
                str = String(value) + ';';
            }
            
            for (let i = 0; i < str.length; i++) {
                hash = 4294967295 & (hash ^ str.charCodeAt(i));
                hash = Math.imul(hash, 16777619);
            }
        };

        data.forEach(processValue);
        return hash >>> 0;
    }


    static generateMathRand() {
        return Math.floor(Math.pow(10, 16) * Math.random()).toString(16);
    }

    static async checkWebAssembly() {
        try {
            if (typeof WebAssembly !== "object" || typeof WebAssembly.instantiate !== "function") {
                return false;
            }
            const wasmModuleBytes = Buffer.from("AGFzbQEAAAA=", 'base64');
            const module = new WebAssembly.Module(wasmModuleBytes);
            if (!(module instanceof WebAssembly.Module)) {
                return false;
            }
            const instance = await WebAssembly.instantiate(module);
            return instance instanceof WebAssembly.Instance;
        } catch (e) {
            return false;
        }
    }

    static randomMd5Hash() {
        return crypto.createHash('md5').update(crypto.randomBytes(16)).digest('hex');
    }

    static randomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static RC4Cipher(a) {
        const inputStr = JSON.stringify(a);
        const inputBytes = Buffer.from(inputStr, 'utf-8');

        const key = "¨8/VI{ÇbÍßtÊZðJ3ÒecOÆJâ¶Qÿ7ïs";
        const keyCodes = Array.from(key, c => c.charCodeAt(0));
        const keyLen = keyCodes.length;

        let s = Array.from({ length: 256 }, (_, i) => i);
        let j = 0;

        for (let i = 0; i < 256; i++) {
            j = (j + s[i] + keyCodes[i % keyLen]) % 256;
            [s[i], s[j]] = [s[j], s[i]];
        }

        let i = 0;
        j = 0;
        const resBytes = [];

        for (const byteVal of inputBytes) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            [s[i], s[j]] = [s[j], s[i]];
            const k = s[(s[i] + s[j]) % 256];
            resBytes.push(byteVal ^ k);
        }

        return Buffer.from(resBytes).toString('base64');
    }
}

class Xal {
    static async createFingerprint() {
        const fixed_web_gl_data = { renderer: "Mali-G52", vendor: "ARM" };
        
        const navigatorData = {
            "user_agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
            "platform": "Linux armv81",
            "language": "fr-FR", // Locale: França
            "languages": [
                "fr-FR", // Locale: França
                "fr",    // Locale: França
                "en-US",
                "en"
            ], 
            "hardware_concurrency": 8,
            "device_memory": 4,
            "product": "Gecko",
            "product_sub": "20030107",
            "vendor": "Google Inc.",
            "vendor_sub": "",
            "webdriver": false,
            "max_touch_points": 5,
            "cookie_enabled": true,
            "connection_rtt": 150
        };
        navigatorData.property_list = MOBILE_NAVIGATOR_PROPERTY_LIST;
        const windowData = {
            "location": {
                "origin": "https://www.epicgames.com",
                "pathname": "/id/login",
                // URL de href ajustada para França e com a mesma estrutura do exemplo
                "href": `https://www.epicgames.com/id/login?lang=fr&redirect_uri=https%3A%2F%2Fstore.epicgames.com%2Ffr%2F&client_id=875a3b57d3a640a6b7f9b4e883463ab4&prompt=select_account&display=guided` 
            },
            "history": {
                "length": 3 // Valor fixo do exemplo
            },
            "screen": {
                "avail_height": 857, // Valor fixo do exemplo
                "avail_width": 384,  // Valor fixo do exemplo
                "avail_top": 0,      // Valor fixo do exemplo
                "height": 857,       // Valor fixo do exemplo
                "width": 384,        // Valor fixo do exemplo
                "color_depth": 24 // Valor fixo
            },
            "performance": {
                "memory": {
                    // Valores fixos do seu exemplo
                    "js_heap_size_limit": 997195776,
                    "total_js_heap_size": 117531488,
                    "used_js_heap_size": 105718728
                },
                "resources": [
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DiyD7qCi.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-CTGxZpYh.css",
                    "https://tracking.epicgames.com/tracking.js",
                    // track.png com detalhes do mobile e locale FR (timestamp dinâmico)
                    `https://tracking.epicgames.com/track.png?referringUrl=https%3A%2F%2Fstore.epicgames.com%2Ffr%2F&location=https%3A%2F%2Fwww.epicgames.com%2Fid%2Flogin%3Flang%3Dfr%26noHostRedirect%3Dtrue%26redirectUrl%3Dhttps%253A%252F%252Fstore.epicgames.com%252Ffr%2F%26client_id%3D875a3b57d3a640a6b7f9b4e883463ab4&now=${Date.now()}&eventType=pageView`,
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/ie11-DiOFOuaa.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/es.array.from-CaqxSCHn.js",
                    "https://www.epicgames.com/id/api/i18n?ns=messages&lang=fr", // Locale FR
                    "https://www.epicgames.com/id/api/i18n?ns=epic-consent-dialog&lang=fr", // Locale FR
                    "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.118.0",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/Inter-Regular-CKDp9E3C.woff2",
                    "https://www.epicgames.com/id/api/location",
                    "https://www.epicgames.com/id/api/analytics",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/manifest.json",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/stable-h4PyhkTO.js",
                    "https://www.epicgames.com/id/api/analytics",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DcD5F-D4.js",
                    "https://www.epicgames.com/id/api/analytics",
                    "https://www.epicgames.com/id/api/client/875a3b57d3a640a6b7f9b4e883463ab4?redirectUrl=https%3A%2F%2Fstore.epicgames.com%2Ffr%2F", // Locale FR
                    "https://www.epicgames.com/id/api/authenticate",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/polyfill-Bm50S9Wh.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/epic_logo.png", // Presente no exemplo
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/serviceWorker-DaF-HbUu.js",
                    "https://www.epicgames.com/id/api/analytics",
                    "https://www.epicgames.com/id/api/analytics",
                    // Outro track.png com detalhes do mobile e locale FR (timestamp dinâmico)
                    `https://tracking.epicgames.com/track.png?referringUrl=https%3A%2F%2Fstore.epicgames.com%2Ffr%2F&location=https%3A%2F%2Fwww.epicgames.com%2Fid%2Flogin%3Flang%3Dfr%26redirect_uri%3Dhttps%253A%252F%252Fstore.epicgames.com%252Ffr%2F%26client_id%3D875a3b57d3a640a6b7f9b4e883463ab4%26prompt%3Dselect_account%26display%3Dguided&now=${Date.now()}&eventType=pageView`,
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/ModalBasePage-CEJa3qki.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/LoginPage-cPJeVZcI.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/AlternativeBar-DK-oRpzz.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/TrackedListItemButton-CauPuHBl.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/disney-logo-small-Dc2EcWRa.js",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/InterTight-Bold-CPdZBAQJ.woff2",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/Inter-Medium-P1cOs5ep.woff2",
                    "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.118.0",
                    "https://static-assets-prod.unrealengine.com/account-portal/static/assets/Inter-Bold-CuhepTt8.woff2",
                    "https://talon-website-prod.ecosec.on.epicgames.com/talon_sdk.js",
                    "https://talon-service-prod.ecosec.on.epicgames.com/v1/init",
                    "https://js.hcaptcha.com/1/api.js?onload=hCaptchaLoaded&render=explicit",
                    "https://talon-service-prod.ecosec.on.epicgames.com/v1/phaser/batch",
                    "https://newassets.hcaptcha.com/captcha/v1/4acd3638bdfbae76bd112ec288dfb86bd574a186/static/i18n/fr.json", // Locale FR
                    // hcaptcha URLs com locale FR
                    "https://newassets.hcaptcha.com/captcha/v1/4acd3638bdfbae76bd112ec288dfb86bd574a186/static/hcaptcha.html#frame=challenge&id=0kp7lijsxbs&host=www.epicgames.com&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=true&custom=false&hl=fr&tplinks=on&andint=off&pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&sitekey=91e4137f-95af-4bc9-97af-cdcedce21c8c&theme=light&size=invisible&challenge-container=h_captcha_challenge_login_prod&orientation=portrait&origin=https%3A%2F%2Fwww.epicgames.com", 
                    "https://newassets.hcaptcha.com/captcha/v1/4acd3638bdfbae76bd112ec288dfb86bd574a186/static/hcaptcha.html#frame=checkbox-invisible",
                    "https://talon-service-prod.ecosec.on.epicgames.com/v1/phaser/batch" 
                ]
            },
            "device_pixel_ratio": 2.8125, // Valor fixo do exemplo
            "dark_mode": false, // Valor fixo do exemplo
            "chrome": true // Valor fixo
        };
        windowData.property_list = MOBILE_WINDOW_PROPERTY_LIST; // Lista de propriedades fixa

        const fp = {
            "fingerprint_version": 43, // Valor fixo
            "timestamp": new Date().toISOString(), // Único valor DINÂMICO
            "math_rand": "1805c898696172", // Valor FIXO do exemplo
            "webasm": true, // Valor fixo
            "document": {
                // Título em francês
                "title": "Connectez-vous à votre compte Epic Games | Epic Games", 
                // Referrer ajustado para o domínio francês
                "referrer": "https://store.epicgames.com/fr/" 
            },
            "navigator": navigatorData,
            "web_gl": {
                "canvas_fingerprint": {
                    "length": 36058, // Valor fixo do exemplo
                    "num_colors": 5117, // Valor fixo do exemplo
                    "md5": "b32d8482631c0f3882c911a81e8e2fc2", // Valor FIXO do exemplo
                    "tlsh": "2EF2F236652119CF78F04A0C65BC3427F154D6AA08EBCD873549AC9D14F7F37C4BA929" // Valor FIXO do exemplo
                },
                "parameters": {
                    "renderer": fixed_web_gl_data.renderer, // Valor FIXO do exemplo
                    "vendor": fixed_web_gl_data.vendor     // Valor FIXO do exemplo
                }
            },
            "window": windowData,
            "date": {
                // Fuso horário para Paris (UTC+1 ou UTC+2 no verão). -120 minutos = UTC+2.
                "timezone_offset": -120, 
                "format": {
                    "calendar": "gregory",
                    "day": "2-digit",   
                    "locale": "fr-FR",  // Locale: França
                    "month": "2-digit", 
                    "numbering_system": "latn",
                    "time_zone": "Europe/Paris", // Fuso horário de Paris
                    "year": "numeric"
                }
            },
            "runtime": {
                "sd_recurse": false
            },
            "fpjs": {
                "version": "3.4.2", // Valor fixo
                "visitor_id": "70fbe6fdc7665970903b11d14258b53f", // Valor FIXO do exemplo
                "confidence": 0.4, // Valor fixo do exemplo
                "hashes": {
                    "fonts": "bcaa7d02546f4fc7e0079ed785b765c0", // Valor FIXO do exemplo
                    "plugins": "5de3eae3e636fecbdca3d97cb8843337", // Valor FIXO do exemplo
                    "audio": "87771518bb4431edc1da356b5c99e752", // Valor FIXO do exemplo
                    "canvas": "492529a26176a9055640592e4b3200f5", // Valor FIXO do exemplo
                    "screen": "939b1238d83d17b66ff6b0d675e7974c" // Valor FIXO do exemplo
                }
            },
            "motion": {
                // **Valores COPIADOS DIRETAMENTE do exemplo de fingerprint mobile para realismo**
                "mousemove": [
                    {"t":22654.5,"x":205,"y":334},{"t":29281.300000000745,"x":257,"y":542},{"t":32419.60000000149,"x":190,"y":509}
                ],
                "mousedown": [
                    {"t":22654.5,"x":205,"y":334},{"t":29281.300000000745,"x":257,"y":542}
                ],
                "mouseup": [
                    {"t":22654.5,"x":205,"y":334},{"t":29281.300000000745,"x":257,"y":542}
                ],
                "wheel": [],
                "touchstart": [ 
                    {"t":22579.5,"id":0,"x":205.32101440429688,"y":341.5140380859375,"sx":205.32101440429688,"sy":341.5140380859375,"n":1},
                    {"t":27871,"id":0,"x":216.33303833007812,"y":314.8584289550781,"sx":216.33303833007812,"sy":314.8584289550781,"n":1},
                    {"t":29264.89999999851,"id":0,"x":257.1841125488281,"y":542.46826171875,"sx":257.1841125488281,"sy":542.46826171875,"n":1},
                    {"t":32336.5,"id":0,"x":190.40147399902344,"y":509.0599365234375,"sx":190.40147399902344,"sy":509.0599365234375,"n":1}
                ],
                "touchend": [ 
                    {"t":22654.5,"id":0,"x":205.32101440429688,"y":341.5140380859375,"sx":205.32101440429688,"sy":341.5140380859375,"n":0},
                    {"t":28188,"id":0,"x":257.1841125488281,"y":277.9349365234375,"sx":257.1841125488281,"sy":277.9349365234375,"n":0},
                    {"t":29281.300000000745,"id":0,"x":257.1841125488281,"y":542.46826171875,"sx":257.1841125488281,"sy":542.46826171875,"n":0},
                    {"t":32419.60000000149,"id":0,"x":190.40147399902344,"y":509.0599365234375,"sx":190.40147399902344,"sy":509.0599365234375,"n":0}
                ],
                "touchmove": [ 
                    {"t":28021.199999999255,"id":0,"x":224.14801025390625,"y":293.88934326171875,"sx":224.14801025390625,"sy":293.88934326171875,"n":1},
                    {"t":28071.199999999255,"id":0,"x":238.00184631347656,"y":284.3074951171875,"sx":238.00184631347656,"sy":284.3074951171875,"n":1},
                    {"t":28121.39999999851,"id":0,"x":241.1988983154297,"y":297.4711608886719,"sx":241.1988983154297,"sy":297.4711608886719,"n":1},
                    {"t":28171.39999999851,"id":0,"x":250.434814453125,"y":284.3269958496094,"sx":250.434814453125,"sy":284.3269958496094,"n":1},
                    {"t":28179.800000000745,"id":0,"x":257.1841125488281,"y":277.9349365234375,"sx":257.1841125488281,"sy":277.9349365234375,"n":1}
                ],
                "scroll": [],
                "keydown": [
                    {"t":24671.5},{"t":24879.5},{"t":24990.5},{"t":25342.5},{"t":25527.5},{"t":25630.5},
                    {"t":25763.5},{"t":25869.5},{"t":25989.5},{"t":26141.5},{"t":26845.5},{"t":27015.5},
                    {"t":27151.5},{"t":27334.5}
                ],
                "keyup": [
                    {"t":24671.5},{"t":24879.5},{"t":24990.5},{"t":25342.5},{"t":25527.5},{"t":25630.5},
                    {"t":25763.5},{"t":25869.5},{"t":25989.5},{"t":26141.5},{"t":26845.5},{"t":27015.5},
                    {"t":27151.5},{"t":27334.5}
                ],
                "resize": [ 
                    {"t":23456.60000000149,"w":384,"h":857},{"t":23529.60000000149,"w":384,"h":857},
                    {"t":32692.60000000149,"w":384,"h":857}
                ],
                "paste": []
            },
            "sdk": {
                "caller_stack_trace": "Error\n    at https://talon-website-prod.ecosec.on.epicgames.com/talon_sdk.js:1:399679\n    at Object._0x5205d5 [as execute] (https://talon-website-prod.ecosec.on.epicgames.com/talon_sdk.js:1:399847)\n    at Talon.updateIfNeeded (https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DiyD7qCi.js:612:26288)\n    at Captcha.updateIfNeeded (https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DiyD7qCi.js:612:28808)\n    at LoginFormSplit.<anonymous> (https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DiyD7qCi.js:625:15705)\n    at Generator.next (<anonymous>)\n    at https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DiyD7qCi.js:2:975\n    at new Promise (<anonymous>)\n    at br (https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DiyD7qCi.js:2:764)\n    at https://static-assets-prod.unrealengine.com/account-portal/static/assets/index-DiyD7qCi.js:625:15485"
            },
            "solve_token": false
        };

        const s_components = [
            fp.timestamp,
            fp.math_rand,
            fp.document,
            fp.navigator,
            fp.web_gl,
            fp.window,
            fp.date,
            fp.runtime,
            fp.fpjs,
            fp.motion,
            fp.sdk
        ];
        fp.s = XalUtility.fnv1a(s_components); // Recalculado com base nos valores fixos e o timestamp dinâmico

        return fp;
    }

    static async generate() {
        const sig = await this.createFingerprint();
        return XalUtility.RC4Cipher(sig);
    }
}

export default Xal;