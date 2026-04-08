export const LOGO = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
export const LOGIN_BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_TOKEN
    }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
export const lang_options = [
    {
        value: "en",
        label: "English",
    },
    {
        value: "hi",
        label: "Hindi",
    },
    {
        value: "spanish",
        label: "Spanish",
    }
]
