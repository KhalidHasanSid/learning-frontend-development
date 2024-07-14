const URL="https://quranenc.com/api/v1/translation/aya/english_saheeh/1/1";
let quran_trans=async ()=>{
    const res= await fetch(URL);
    console.log(res)
    let translations= await res.json();
    console.log(translations)
    console.log(translations.result.arabic_text)
    console.log(translations.result.translation)}