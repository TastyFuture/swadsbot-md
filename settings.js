const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api (jgn diganti)
global.APIs = {
	alfa: 'https://alphabot-api.herokuapp.com', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti 'LPGJZruR' dgn apikey baru)
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'LPGJZruR',  // 👉 login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false //auto read message
global.autobio = false //ubah jadi true biar bagus, klo ga mau ya gpp
global.userRegister = false //ubah jadi true kalo mau aktifin fitur register
global.autoblok212 = true //auto block nmr 212

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.jumlha = '999'
global.jumhal = '100000000000000'
global.botname = "꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁׅ"//namabot kalian
global.ownername = "꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁׅ" //nama kalian
global.myweb ="https://instagram.com/tasty_futuree" //bebas asal jgn hapus
global.youtube = "https://youtube.com/c/ZeeoneOfc" //bebas asal jgn hapus
global.myweb2 = "https://instagram.com/tasty_futuree" //bebas terserah kalian
global.email = "yugopama@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6288293742724'] //premium user, kalo ga bisa pake botnya aja ketik .addprem @user(tag orangnya)
global.owner = ["6288293742724"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6288293742724" // nomor wa kalian
global.ownernomerr = "+6288293742724" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = 'https://telegra.ph/file/e90bef3779d3c5812a5d1.mp4'
global.packname = '2022'//sticker wm ubah
global.author = '꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁׅ'//sticker wm ganti nama kalian
global.sessionName = 'session'//ini jgn diganti biar ga error
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
    premium: "10000",
    free: 100
}

global.adventureRPG = 'https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg'
global.bankRPG = 'https://telegra.ph/file/ce47dca98cfdb34162abb.png'
global.bansosRPG = 'https://telegra.ph/file/646af753f38fbf7bbbccc.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/ba18a18aac022170c8056.jpg'
global.berburuRPG = 'https://telegra.ph/file/95a202f631ab7172c3f25.jpg'
global.inventoryRPG = 'https://telegra.ph/file/507395e2edbd1d740a0fd.png'
global.cooldownRPG = 'https://telegra.ph/file/5e1e191a47028d9648ffa.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flaaa = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.fliii = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.fluuu = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

global.prefa = ['!','','.','#','&']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.asmaulhusna = {
    "result": {
        "data": [
            {
                "index": "1",
                "latin": "Ar Rahman",
                "arabic": "الرَّحْمَنُ",
                "translation_id": "Yang Memiliki Mutlak sifat Pemurah",
                "translation_en": "The All Beneficent"
            },
            {
                "index": "2",
                "latin": "Ar Rahiim",
                "arabic": "الرَّحِيمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Penyayang",
                "translation_en": "The Most Merciful"
            },
            {
                "index": "3",
                "latin": "Al Malik",
                "arabic": "الْمَلِكُ",
                "translation_id": "Yang Memiliki Mutlak sifat Merajai/Memerintah",
                "translation_en": "The King, The Sovereign"
            },
            {
                "index": "4",
                "latin": "Al Quddus",
                "arabic": "الْقُدُّوسُ",
                "translation_id": "Yang Memiliki Mutlak sifat Suci",
                "translation_en": "The Most Holy"
            },
            {
                "index": "5",
                "latin": "As Salaam",
                "arabic": "السَّلاَمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
                "translation_en": "Peace and Blessing"
            },
            {
                "index": "6",
                "latin": "Al Mu’min",
                "arabic": "الْمُؤْمِنُ",
                "translation_id": "Yang Memiliki Mutlak sifat Memberi Keamanan",
                "translation_en": "The Guarantor"
            },
            {
                "index": "7",
                "latin": "Al Muhaimin",
                "arabic": "الْمُهَيْمِنُ",
                "translation_id": "Yang Memiliki Mutlak sifat Pemelihara",
                "translation_en": "The Guardian, the Preserver"
            },
            {
                "index": "8",
                "latin": "Al ‘Aziiz",
                "arabic": "الْعَزِيزُ",
                "translation_id": "Yang Memiliki Mutlak Kegagahan",
                "translation_en": "The Almighty, the Self Sufficient"
            },
            {
                "index": "9",
                "latin": "Al Jabbar",
                "arabic": "الْجَبَّارُ",
                "translation_id": "Yang Memiliki Mutlak sifat Perkasa",
                "translation_en": "The Powerful, the Irresistible"
            },
            {
                "index": "10",
                "latin": "Al Mutakabbir",
                "arabic": "الْمُتَكَبِّرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
                "translation_en": "The Tremendous"
            },
            {
                "index": "11",
                "latin": "Al Khaliq",
                "arabic": "الْخَالِقُ",
                "translation_id": "Yang Memiliki Mutlak sifat Pencipta",
                "translation_en": "The Creator"
            },
            {
                "index": "12",
                "latin": "Al Baari’",
                "arabic": "الْبَارِئُ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
                "translation_en": "The Maker"
            },
            {
                "index": "13",
                "latin": "Al Mushawwir",
                "arabic": "الْمُصَوِّرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Membentuk Rupa (makhluknya)",
                "translation_en": "The Fashioner of Forms"
            },
            {
                "index": "14",
                "latin": "Al Ghaffaar",
                "arabic": "الْغَفَّارُ",
                "translation_id": "Yang Memiliki Mutlak sifat Pengampun",
                "translation_en": "The Ever Forgiving"
            },
            {
                "index": "15",
                "latin": "Al Qahhaar",
                "arabic": "الْقَهَّارُ",
                "translation_id": "Yang Memiliki Mutlak sifat Memaksa",
                "translation_en": "The All Compelling Subduer"
            },
            {
                "index": "16",
                "latin": "Al Wahhaab",
                "arabic": "الْوَهَّابُ",
                "translation_id": "Yang Memiliki Mutlak sifat Pemberi Karunia",
                "translation_en": "The Bestower"
            },
            {
                "index": "17",
                "latin": "Ar Razzaaq",
                "arabic": "الرَّزَّاقُ",
                "translation_id": "Yang Memiliki Mutlak sifat Pemberi Rejeki",
                "translation_en": "The Ever Providing"
            },
            {
                "index": "18",
                "latin": "Al Fattaah",
                "arabic": "الْفَتَّاحُ",
                "translation_id": "Yang Memiliki Mutlak sifat Pembuka Rahmat",
                "translation_en": "The Opener, the Victory Giver"
            },
            {
                "index": "19",
                "latin": "Al ‘Aliim",
                "arabic": "اَلْعَلِيْمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Mengetahui (Memiliki Ilmu)",
                "translation_en": "The All Knowing, the Omniscient"
            },
            {
                "index": "20",
                "latin": "Al Qaabidh",
                "arabic": "الْقَابِضُ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Menyempitkan (makhluknya)",
                "translation_en": "The Restrainer, the Straightener"
            },
            {
                "index": "21",
                "latin": "Al Baasith",
                "arabic": "الْبَاسِطُ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Melapangkan (makhluknya)",
                "translation_en": "The Expander, the Munificent"
            },
            {
                "index": "22",
                "latin": "Al Khaafidh",
                "arabic": "الْخَافِضُ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Merendahkan (makhluknya)",
                "translation_en": "The Abaser"
            },
            {
                "index": "23",
                "latin": "Ar Raafi’",
                "arabic": "الرَّافِعُ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Meninggikan (makhluknya)",
                "translation_en": "The Exalter"
            },
            {
                "index": "24",
                "latin": "Al Mu’izz",
                "arabic": "الْمُعِزُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Memuliakan (makhluknya)",
                "translation_en": "The Giver of Honor"
            },
            {
                "index": "25",
                "latin": "Al Mudzil",
                "arabic": "المُذِلُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Yang Menghinakan (makhluknya)",
                "translation_en": "The Giver of Dishonor"
            },
            {
                "index": "26",
                "latin": "Al Samii’",
                "arabic": "السَّمِيعُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mendengar",
                "translation_en": "The All Hearing"
            },
            {
                "index": "27",
                "latin": "Al Bashiir",
                "arabic": "الْبَصِيرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Melihat",
                "translation_en": "The All Seeing"
            },
            {
                "index": "28",
                "latin": "Al Hakam",
                "arabic": "الْحَكَمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Menetapkan",
                "translation_en": "The Judge, the Arbitrator"
            },
            {
                "index": "29",
                "latin": "Al ‘Adl",
                "arabic": "الْعَدْلُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Adil",
                "translation_en": "The Utterly Just"
            },
            {
                "index": "30",
                "latin": "Al Lathiif",
                "arabic": "اللَّطِيفُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Lembut",
                "translation_en": "The Subtly Kind"
            },
            {
                "index": "31",
                "latin": "Al Khabiir",
                "arabic": "الْخَبِيرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mengetahui Rahasia",
                "translation_en": "The All Aware"
            },
            {
                "index": "32",
                "latin": "Al Haliim",
                "arabic": "الْحَلِيمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Penyantun",
                "translation_en": "The Forbearing, the Indulgent"
            },
            {
                "index": "33",
                "latin": "Al ‘Azhiim",
                "arabic": "الْعَظِيمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Agung",
                "translation_en": "The Magnificent, the Infinite"
            },
            {
                "index": "34",
                "latin": "Al Ghafuur",
                "arabic": "الْغَفُورُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pengampun",
                "translation_en": "The All Forgiving"
            },
            {
                "index": "35",
                "latin": "As Syakuur",
                "arabic": "الشَّكُورُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pembalas Budi (Menghargai)",
                "translation_en": "The Grateful"
            },
            {
                "index": "36",
                "latin": "Al ‘Aliy",
                "arabic": "الْعَلِيُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Tinggi",
                "translation_en": "The Sublimely Exalted"
            },
            {
                "index": "37",
                "latin": "Al Kabiir",
                "arabic": "الْكَبِيرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Besar",
                "translation_en": "The Great"
            },
            {
                "index": "38",
                "latin": "Al Hafizh",
                "arabic": "الْحَفِيظُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Menjaga",
                "translation_en": "The Preserver"
            },
            {
                "index": "39",
                "latin": "Al Muqiit",
                "arabic": "المُقيِت",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
                "translation_en": "The Nourisher"
            },
            {
                "index": "40",
                "latin": "Al Hasiib",
                "arabic": "الْحسِيبُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Membuat Perhitungan",
                "translation_en": "The Reckoner"
            },
            {
                "index": "41",
                "latin": "Al Jaliil",
                "arabic": "الْجَلِيلُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mulia",
                "translation_en": "The Majestic"
            },
            {
                "index": "42",
                "latin": "Al Kariim",
                "arabic": "الْكَرِيمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pemurah",
                "translation_en": "The Bountiful, the Generous"
            },
            {
                "index": "43",
                "latin": "Ar Raqiib",
                "arabic": "الرَّقِيبُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mengawasi",
                "translation_en": "The Watchful"
            },
            {
                "index": "44",
                "latin": "Al Mujiib",
                "arabic": "الْمُجِيبُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mengabulkan",
                "translation_en": "The Responsive, the Answerer"
            },
            {
                "index": "45",
                "latin": "Al Waasi’",
                "arabic": "الْوَاسِعُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Luas",
                "translation_en": "The Vast, the All Encompassing"
            },
            {
                "index": "46",
                "latin": "Al Hakiim",
                "arabic": "الْحَكِيمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maka Bijaksana",
                "translation_en": "The Wise"
            },
            {
                "index": "47",
                "latin": "Al Waduud",
                "arabic": "الْوَدُودُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pencinta",
                "translation_en": "The Loving, the Kind One"
            },
            {
                "index": "48",
                "latin": "Al Majiid",
                "arabic": "الْمَجِيدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mulia",
                "translation_en": "The All Glorious"
            },
            {
                "index": "49",
                "latin": "Al Baa’its",
                "arabic": "الْبَاعِثُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Membangkitkan",
                "translation_en": "The Raiser of the Dead"
            },
            {
                "index": "50",
                "latin": "As Syahiid",
                "arabic": "الشَّهِيدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Menyaksikan",
                "translation_en": "The Witness"
            },
            {
                "index": "51",
                "latin": "Al Haqq",
                "arabic": "الْحَقُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Benar",
                "translation_en": "The Truth, the Real"
            },
            {
                "index": "52",
                "latin": "Al Wakiil",
                "arabic": "الْوَكِيلُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Memelihara",
                "translation_en": "The Trustee, the Dependable"
            },
            {
                "index": "53",
                "latin": "Al Qawiyyu",
                "arabic": "الْقَوِيُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Kuat",
                "translation_en": "The Strong"
            },
            {
                "index": "54",
                "latin": "Al Matiin",
                "arabic": "الْمَتِينُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Kokoh",
                "translation_en": "The Firm, the Steadfast"
            },
            {
                "index": "55",
                "latin": "Al Waliyy",
                "arabic": "الْوَلِيُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Melindungi",
                "translation_en": "The Protecting Friend, Patron, and Helper"
            },
            {
                "index": "56",
                "latin": "Al Hamiid",
                "arabic": "الْحَمِيدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Terpuji",
                "translation_en": "The All Praiseworthy"
            },
            {
                "index": "57",
                "latin": "Al Mushii",
                "arabic": "الْمُحْصِي",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
                "translation_en": "The Accounter, the Numberer of All"
            },
            {
                "index": "58",
                "latin": "Al Mubdi’",
                "arabic": "الْمُبْدِئُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Memulai",
                "translation_en": "The Producer, Originator, and Initiator of all"
            },
            {
                "index": "59",
                "latin": "Al Mu’iid",
                "arabic": "الْمُعِيدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mengembalikan Kehidupan",
                "translation_en": "The Reinstater Who Brings Back All"
            },
            {
                "index": "60",
                "latin": "Al Muhyii",
                "arabic": "الْمُحْيِي",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Menghidupkan",
                "translation_en": "The Giver of Life"
            },
            {
                "index": "61",
                "latin": "Al Mumiitu",
                "arabic": "اَلْمُمِيتُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mematikan",
                "translation_en": "The Bringer of Death, the Destroyer"
            },
            {
                "index": "62",
                "latin": "Al Hayyu",
                "arabic": "الْحَيُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Hidup",
                "translation_en": "The Ever Living"
            },
            {
                "index": "63",
                "latin": "Al Qayyuum",
                "arabic": "الْقَيُّومُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mandiri",
                "translation_en": "The Self Subsisting Sustainer of All"
            },
            {
                "index": "64",
                "latin": "Al Waajid",
                "arabic": "الْوَاجِدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Penemu",
                "translation_en": "The Perceiver, the Finder, the Unfailing"
            },
            {
                "index": "65",
                "latin": "Al Maajid",
                "arabic": "الْمَاجِدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mulia",
                "translation_en": "The Illustrious, the Magnificent"
            },
            {
                "index": "66",
                "latin": "Al Wahiid",
                "arabic": "الْواحِدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Tunggal",
                "translation_en": "The One, The Unique, Manifestation of Unity"
            },
            {
                "index": "67",
                "latin": "Al ‘Ahad",
                "arabic": "اَلاَحَدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Esa",
                "translation_en": "The One, the All Inclusive, the Indivisible"
            },
            {
                "index": "68",
                "latin": "As Shamad",
                "arabic": "الصَّمَدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Dibutuhkan, Tempat Meminta",
                "translation_en": "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
            },
            {
                "index": "69",
                "latin": "Al Qaadir",
                "arabic": "الْقَادِرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Menentukan, Maha Menyeimbangkan",
                "translation_en": "The All Able"
            },
            {
                "index": "70",
                "latin": "Al Muqtadir",
                "arabic": "الْمُقْتَدِرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Berkuasa",
                "translation_en": "The All Determiner, the Dominant"
            },
            {
                "index": "71",
                "latin": "Al Muqaddim",
                "arabic": "الْمُقَدِّمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mendahulukan",
                "translation_en": "The Expediter, He who brings forward"
            },
            {
                "index": "72",
                "latin": "Al Mu’akkhir",
                "arabic": "الْمُؤَخِّرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
                "translation_en": "The Delayer, He who puts far away"
            },
            {
                "index": "73",
                "latin": "Al Awwal",
                "arabic": "الأوَّلُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Awal",
                "translation_en": "The First"
            },
            {
                "index": "74",
                "latin": "Al Aakhir",
                "arabic": "الآخِرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Akhir",
                "translation_en": "The Last"
            },
            {
                "index": "75",
                "latin": "Az Zhaahir",
                "arabic": "الظَّاهِرُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Nyata",
                "translation_en": "The Manifest; the All Victorious"
            },
            {
                "index": "76",
                "latin": "Al Baathin",
                "arabic": "الْبَاطِنُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Ghaib",
                "translation_en": "The Hidden; the All Encompassing"
            },
            {
                "index": "77",
                "latin": "Al Waali",
                "arabic": "الْوَالِي",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Memerintah",
                "translation_en": "The Patron"
            },
            {
                "index": "78",
                "latin": "Al Muta’aalii",
                "arabic": "الْمُتَعَالِي",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Tinggi",
                "translation_en": "The Self Exalted"
            },
            {
                "index": "79",
                "latin": "Al Barri",
                "arabic": "الْبَرُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Penderma",
                "translation_en": "The Most Kind and Righteous"
            },
            {
                "index": "80",
                "latin": "At Tawwaab",
                "arabic": "التَّوَابُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
                "translation_en": "The Ever Returning, Ever Relenting"
            },
            {
                "index": "81",
                "latin": "Al Muntaqim",
                "arabic": "الْمُنْتَقِمُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
                "translation_en": "The Avenger"
            },
            {
                "index": "82",
                "latin": "Al Afuww",
                "arabic": "العَفُوُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pemaaf",
                "translation_en": "The Pardoner, the Effacer of Sins"
            },
            {
                "index": "83",
                "latin": "Ar Ra`uuf",
                "arabic": "الرَّؤُوفُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pengasih",
                "translation_en": "The Compassionate, the All Pitying"
            },
            {
                "index": "84",
                "latin": "Malikul Mulk",
                "arabic": "مَالِكُ الْمُلْكِ",
                "translation_id": "Yang Memiliki Mutlak sifat Penguasa Kerajaan (Semesta)",
                "translation_en": "The Owner of All Sovereignty"
            },
            {
                "index": "85",
                "latin": "Dzul JalaaliWal Ikraam",
                "arabic": "ذُوالْجَلاَلِوَالإكْرَامِ",
                "translation_id": "Yang Memiliki Mutlak sifat Pemilik Kebesaran dan Kemuliaan",
                "translation_en": "The Lord of Majesty and Generosity"
            },
            {
                "index": "86",
                "latin": "Al Muqsith",
                "arabic": "الْمُقْسِطُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Adil",
                "translation_en": "The Equitable, the Requiter"
            },
            {
                "index": "87",
                "latin": "Al Jamii’",
                "arabic": "الْجَامِعُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
                "translation_en": "The Gatherer, the Unifier"
            },
            {
                "index": "88",
                "latin": "Al Ghaniyy",
                "arabic": "الْغَنِيُّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Berkecukupan",
                "translation_en": "The All Rich, the Independent"
            },
            {
                "index": "89",
                "latin": "Al Mughnii",
                "arabic": "الْمُغْنِي",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
                "translation_en": "The Enricher, the Emancipator"
            },
            {
                "index": "90",
                "latin": "Al Maani",
                "arabic": "اَلْمَانِعُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Mencegah",
                "translation_en": "The Withholder, the Shielder, the Defender"
            },
            {
                "index": "91",
                "latin": "Ad Dhaar",
                "arabic": "الضَّارَّ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Memberi Derita",
                "translation_en": "The Distressor, the Harmer"
            },
            {
                "index": "92",
                "latin": "An Nafii’",
                "arabic": "النَّافِعُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
                "translation_en": "The Propitious, the Benefactor"
            },
            {
                "index": "93",
                "latin": "An Nuur",
                "arabic": "النُّورُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Bercahaya (Menerangi dan Memberi Cahaya)",
                "translation_en": "The Light"
            },
            {
                "index": "94",
                "latin": "Al Haadii",
                "arabic": "الْهَادِي",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
                "translation_en": "The Guide"
            },
            {
                "index": "95",
                "latin": "Al Baadii",
                "arabic": "الْبَدِيعُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pencipta",
                "translation_en": "Incomparable, the Originator"
            },
            {
                "index": "96",
                "latin": "Al Baaqii",
                "arabic": "اَلْبَاقِي",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Kekal",
                "translation_en": "The Ever Enduring and Immutable"
            },
            {
                "index": "97",
                "latin": "Al Waarits",
                "arabic": "الْوَارِثُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pewaris",
                "translation_en": "The Heir, the Inheritor of All"
            },
            {
                "index": "98",
                "latin": "Ar Rasyiid",
                "arabic": "الرَّشِيدُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Pandai",
                "translation_en": "The Guide, Infallible Teacher, and Knower"
            },
            {
                "index": "99",
                "latin": "As Shabuur",
                "arabic": "الصَّبُورُ",
                "translation_id": "Yang Memiliki Mutlak sifat Maha Sabar",
                "translation_en": "The Patient"
            }
        ]
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
