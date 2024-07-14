let surah_list = [
    "al-fatiha", "al-baqara", "aal-e-imran", "an-nisa", "al-maidah", "al-anam", "al-araf", "al-anfal", "at-tawba", "yunus", "hud", "yusuf", "ar-rad", "ibrahim", "al-hijr", "an-nahl", "al-isra", "al-kahf", "maryam", "taha", "al-anbiya", "al-hajj", "al-mu'minun", "an-nur", "al-furqan", "ash-shu'ara", "an-naml", "al-qasas", "al-ankabut", "ar-rum", "luqman", "as-sajda", "al-ahzab", "saba", "fatir", "ya-sin", "as-saffat", "sad", "az-zumar", "ghafir", "fussilat", "ash-shura", "az-zukhruf", "ad-dukhan", "al-jathiya", "al-ahqaf",
    "fatir", "ya-sin", "as-saffat", "sad", "az-zumar", "ghafir", "fussilat", "ash-shura", "az-zukhruf", "ad-dukhan", "al-jathiya", "al-ahqaf", "muhammad", "al-fath", "al-hujurat", "qaf", "adh-dhariyat", "at-tur", "an-najm", "al-qamar", "ar-rahman", "al-waqia", "al-hadid", "almujadila", "al-hashr", "al-mumtahina", "as-saff", "al-jumua", "al-munafiqun", "at-taghabun", "at-talaq", "at-tahrim", "al-mulk", "al-qalam", "al-aaqqa", "al-maarij", "nuh", "al-jinn", "al-muzzammil", "al-muddathir", "al-qiyama", "al-insan", "al-mursalat", "an-naba", "an-naziat", "abasa", "at-takwir", "al-infitar", "al-mutaffifin", "al-inshiqaq", "al-buruj", "at-tariq", "al-ala", "al-ghashiya", "al-fajr", "al-balad",
    "ash-shams", "al-lail", "ad-duha", "ash-sharh", "at-tin", "al-alaq", "al-qadr", "al-bayyina", "az-zalzala", "al-adiyat", "al-qaria", "at-takathur", "al-asr", "al-humaza", "al-fil", "quraish", "al-ma'un", "al-kawthar", "al-kafiroon", "an-nasr", "al-masad", "al-ikhlas", "al-falaq", "an-nas"];

let surahNo;
let ayatNo;
let arabic = document.getElementById("arabic-text");
let t = document.getElementById("translation");

let search = document.getElementById("search");
search.onclick = () => {
    surahNo = document.getElementById("surahno");
    let valueeee = surahNo.value;
    let indexno = surah_list.indexOf(valueeee.toLowerCase());
    indexno = indexno + 1;
    ayatNo = document.getElementById("ayatno");

    const URL = `https://quranenc.com/api/v1/translation/aya/english_saheeh/${indexno}/${ayatNo.value}`;
    let quran_trans = async () => {
        const res = await fetch(URL);
        let translations = await res.json();
        t.innerText = translations.result.translation;
        arabic.innerText = translations.result.arabic_text;
    }
    quran_trans();
}

function reset() {
    surahNo.value = "";
    ayatNo.value = "";
    t.innerText = "";
    arabic.innerText = "";
}

document.getElementById("save").onclick = () => {
    let data = {
        surah_number: surahNo.value,
        ayat_number: ayatNo.value,
        translation: t.innerText,
        arabic_text: arabic.innerText
    };
    fetch('/r', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.text())
      .then(data => alert(data))
      .catch(error => console.error('Error:', error));
};
