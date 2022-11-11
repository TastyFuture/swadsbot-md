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
global.shio = {
    "result": {
        "data": [
            {
                "index": "1",
		"shio": "tikus",    
                "nama": "Shio Tikus",
		"lahir": "1972, 1984, 1996, 2008, 2020",
		"nomor": "02, 15, 27, 39, 51, 63, 75, 87, 99",    
                "gambar": "https://telegra.ph/file/b6354cfd9d90456eeaf87.jpg",
                "keterangan": "Orang-orang Tikus dilahirkan dibawah tanda yang menunjukkan daya tarik dan usaha yang tidak kenal lelah. Mereka adalah orang-orang yang hangat dengan kepribadian yang penuh semangat, yang selalu ingin menghasilkan sesuatu. Hal ini berarti bahwa Tikus bersifat rakus akan kehidupan dan ingin memanfaatkan setiap kesempatan semaksimal mungkin. Para Tikus adalah oportunis sejati yang hanya memikirkan kehidupan pada saat ini dan jarang merencanakan hari esok. Kebanyakan Tikus menghasilkan lebih banyak dalam 24 jam daripada yang kebanyakan orang hasilkan dalam beberapa hari. Cerdas dan pandai bergaul, mereka menyukai perkumpulan besar dan klub-klub eksklusif dimana mereka dapat memperluas kesempatan dengan relasi mereka. Cepat tanggap dan suka berbicara, Tikus jarang perlu mencari pengagum.\n\nSeorang Tikus biasanya memiliki lebih banyak kenalan daripada teman sejati. Meskipun mereka tahu sesuatu tentang hampir semua orang di kota, mereka bersikap protektif bila menyangkut perasaan mereka dan bila harus memperlihatkan perasaan terdalam kepada beberapa orang saja. Di lain pihak, Tikus yang lihai dapat dengan mudah mengorek informasi dari orang lain dan tidak ragu untuk menggunakan bocoran informasi dari suatu sumber atau mengambil keuntungan dari kesalahan orang lain. Lagi pula, jika ia tidak memanfaatkan kesempatan tersebut, orang lain pasti melakukannya. Walaupun warga Tikus mungkin murah hati dengan waktu dan nasehat serta memperlihatkan perhatian yang besar terhadap orang-orang disekitarnya, akan jarang ditemukan seorang Tikus yang memberikan uang atau hadiah dengan mudah kepada mereka yang bukan termasuk dalam keluarga atau mereka yang benar-benar disukainya. Jika anda mendapatkan hadiah yang mahal dari seorang Tikus, anda seharusnya bersyukur bahwa anda telah mendapat nilai lebih dalam pandangannya. Walaupun Tikus umumnya tidak dikenal sebagai orang yang romantis, tetapi mereka sangat sentimental terhadap keluarga dan sangat setia terhadap orang tua dan anak-anak mereka. Meskipun saudara lain, mertua, atau teman dekat menggantungkan diri pada dirinya, ia biasanya tidak keberatan. Bahkan, Tikus yang cerdik akan selalu menemukan sesuatu yang dapat dikerjakan mereka demi keuntungan rumahtangganya sendiri.\n\nJika rencana tidak berjalan lancar atau ia mengalami suatu kemunduran, Tikus yang biasanya ramah akan memperlihatkan sisi kepribadiaan yang dangkal dan terobsesi dengan hal-hal yang sepele. Oleh karena Tikus sendiri begitu rajin, ia akan sangat jengkel terhadap orang yang tampak malas dan boros. Semua Tikus memiliki potensi untuk bersikap agresif, dan sifat ini biasanya diekspresikan dengan meributkan hal-hal kecil dan terlalu mempedulikan hal-hal yang remeh. Dalam keadaan luar biasa, seorang Tikus yang dalam kesulitan dapat terobsesi dengan rencana-rencana yang harus dijalankan apa pun yang terjadi. Pada saat ini pesona dan sikap mereka yang santai digantikan oleh sikap keras kepala yang tidak dapat diubah. Sifat negatif lain yang ditunjukkan oleh beberapa Tikus termasuk juga kegemaran terhadap gosip dan suatu kecenderungan untuk terlalu banyak mencampuri urusan orang lain (meskipun biasanya dilakukan dengan maksud baik). Warga Tikus lain lemah terhadap segala macam penawaran sehingga akan memenuhi rumah mereka dengan tanda mata dan benda-benda sentimental yang tidak benar-benar mereka perlukan tetapi tidak sanggup mereka lepaskan.\n\nPara tikus bukanlah orang-orang yang dilahirkan untuk bekerja keras. Biasanya mereka lebih suka menghasilkan uang dengan kepandaian mereka. Variasi sangat diperlukan, dan kebanyakan Tikus akan lebih memilih jadwal yang fleksibel daripada rutinitas jam kantor. Tikus teliti terhadap hal-hal yang mendetail, dan sifat ini merupakan suatu kelebihan dalam bidang bisnis. Mereka adalah kritikus sejati yang mampu memberikan penilaian yang jelas dan obyektif. Warga tikus yang tidak dibingungkan oleh harapan yang terlalu muluk terhadap segala macam tugas mampu memahami inti permasalahan dengan cepat.\n\nBila ambisi Tikus menjadi tidak terkendali, ia dapat menanggung terlalu banyak seorang diri sehingga perhatiannya menjadi terpencar-pencar. Jika ia dapat belajar untuk menyelesaikan apa yang dimulai sebelum melaksanakan proyek lain, Tikus pasti akan berakhir dalam kemakmuran, karena dia cerdik, mampu beradaptasi dan menggemari tantangan."
            },
            {
                "index": "2",
	        "shio": "kerbau",
                "nama": "Shio Kerbau",
                "lahir": "1973, 1985, 1997, 2009, 2021",
	        "nomor": "02, 14, 26, 38, 50, 62, 74, 86, 98",
                "gambar": "https://telegra.ph/file/b15125c15624be294e066.jpg",
                "keterangan": "Kerbau melambangkan kemakmuran lewat keuletan dan kerja keras. Orang yang lahir di bawah shio ini dapat diandalkan, dan bersifat tenang dan metodis. Mereka sabar dan pekerja keras, pula berpegang terus pada hal-hal rutin yang sudah menjadi tradisi umum. Meskipun ia biasanya memperlakukan orang lain secara adil dan merupakan pendengar yang baik, adakalanya sulit buat merubah pendapatnya sebab ia keras kepala dan kerap memiliki prasangka kuat. Namun, karena karakternya yang mantap, orang bershio Kerbau dipercaya untuk memegang jabatan tinggi yang membutuhkan tanggungjawab. Dalam hal memenuhi kewajiban, prestasinya tak akan mengecewakan. Namun, ia perlu berhati-hati supaya jangan mudah terbawa sikap yang terlampau serius.\n\nDibalik penampilannya yang bersahaja tetapi rapi, Kerbau berakal tajam dan berhati tetap. Kecerdasan dan kecakapannya tersembunyi di balik sifat pendiamnya dan sikapnya yang tidak memperlihatkan banyak perasaan. Tapi meski pada dasarnya ia seorang introvert, wataknya yang kuat dapat mengubahnya menjadi pembicara yang fasih dan bernada memerintah, begitu keadaan menuntut demikian. Pada waktu kekacauan timbul, pendiriannya yang kuat dan rasa percaya dirinya yang besar dapat membuat situasinya tertib kembali. Ia mampu tetap berjalan dengan kepala tegak.\n\nOrang yang lahir di bawah shio ini sitematis. Ia patuh terhadap pola-pola yang sudah mapan dan rasa penghargaannya terhadap tradisi besar sekali. Pada dasarnya, ia cenderung buat melakukan apa yang diharapkan dari dirinya. Bahkan pribadinya sedemikian dapat ditebak, hingga orang kerap mengkritiknya sebagai pribadi yang kurang berimajinasi. Namun Kerbau yang mengerti kewajiban tahu, bahwa sukses yang langgeng hanya dapat dicapai dengan mengerjakan segala sesuatu menurut cara yang benar. Pikirannya tidak menerawang ke mana-mana. Anda tak bakal melihatnya mengatasi kemelut dalam hidupnya hanya dengan menunggu sampai nasib merubah keadaannya. Kalau orang bershio lain mencapainya lewat tipu muslihat dan akal bulus, maka orang bershio Kerbau mencapainya lewat kegigihan dan dedikasinya yang luar biasa.\n\nWaspadalah terhadap batas kesabaran Kerbau, karena bila ia sampai naik darah, ia patut diperhitungkan. Tak ada lagi pertimbangan dalam dirinya: ia akan bertindak bagai banteng dan menyerang setiap orang yang berdiri di depannya. Satu-satunya cara adalah menyingkir sampai amarahnya reda kembali. Pendek kata, ia jarang meledak kecuali kalau situasinya tak tertahankan lagi olehnya.Kerbau dapat bersikap sangat polos kalau sudah menyangkut soal asmara. Ia tak dapat sepenuhnya memahami rayuan cinta dan tidak pandai pula mengembangkan strategi membujuk dan daya pikat lainnya buat membangkitkan perasaan kekasihnya. Jangan berharap lirik-lirik puisi dan kata-kata romantis dari mulutnya, karena ia tak punya ramuan yang tepat bagi hal-hal semacam ini. Hadiah yang diberikannya pun bakal bersifat seperti ia sendiri: bersahaja, namun langgeng."
            },
	    {
                "index": "3",
	        "shio": "macan",
                "nama": "Shio Macan",
	        "lahir": "1974, 1986, 1998, 2010, 2022",
	        "nomor": "01, 13, 25, 37, 49, 61, 73, 85, 97",
                "gambar": "https://telegra.ph/file/acb904f5f31be48a5df29.jpg",
                "keterangan": "Di Timur, Macan melambangkan kekuasaan, hawa nafsu dan keperkasaan. Sebagai pribadi yang suka berontak, beranekaragam dan tak dapat diramalkan, ia memegang kendali kekaguman dan kehormatan dari segala penjuru. Ia adalah pejuang yang ganas dan tak mengenal takut.\n\nMacan adalah pribadi yang menyenangkan buat diajak bergaul, asal saja anda siap-sedia buat segala macam aktivitas yang datang bersama kepribadian dinamisnya. Vitalitas dan semangat hidup orang bershio Macan ternyata mudah menular. Ia pandai membangkitkan seluruh perasaan dalam diri orang, keculai ketidak acuhan. Dan tidak dapat dipungkiri, Macan yang memikat ini memang senang menjadi pusat perhatian.\n\nPembawaan Macan yang resah dan tak dapat berdiam diri menyebabkannya selalu tak sabar untuk bertindak. Namun, karena wataknya yang juga mudah curiga, ia terkadang menjadi ragu-ragu atau tergesa-gesa mengambil keputusan. Baginya sulit buat mempercayai orang lain atau menaklukkan pergolakan emosinya. Namun, walaupun temperamennya panas, ia juga tulus, penuh kasih sayang dan murah hati. Di samping itu ia punya selera humor yang mengagumkan. Dalam kehidupan Macan mestilah ada suatu saat dimana ia akan bertindak hanya berdasarkan dorongan hatinya agar dapat memerankan semua peran fantastis yang diinginkannya. Yaitu, suatu kesempatan saat dimana ia dapat mencibir pada apa yang tak disetujuinya, mencaci masyarakat yang kolot dan mengejek tradisi yang terlalu mengikat. Macan harus mengekspresikan dirinya, menegakkan identitasnya dan membentuk kepribadiannya. Maka seandainya pemberontakan atau kesempatan untuk menyatakan pendapat secara blak-blakan ditawarkan padanya, maka jalan itulah yang akan dipilihnya untuk menyatakan, Inilah diriku! Walaupun demikian, sembilan dari sepuluh orang di antara kita bahkan cenderung buat menjagoinya. Kita boleh saja menggelengkan kepala melihat keberaniannya atau menahan napas melihat tindakannya yang gila, namun pada saat yang sama kita juga tak lupa memanjatkan doa dalam hati masing-masing baginya, dan bahkan kita ikut membagi kemenangan bersamanya waktu kita lihat dia sukses.\n\nKalau Macan sedang kesal, ia akan membutuhkan segerobak simpati dari anda. Jangan memperdebatkan siapa yang benar dan siapa yang salah. Pada saat seperti ini logika tak berarti apa-apa baginya. Jangan segan-segan menghiburnya, sebab ia akan menghibur anda dua kali lebih banyak bila situasinya terbalik. Si Macan akan senang mendengarkan kata-kata bijak anda dan akan memperhatikan setiap nasihat. Namun, itu bukan berarti ia akan mengikutinya. Setelah anda pergi, yah, ada kemungkin besar Macan akan pergi juga dan melaksanaan apa yang telah direncanakannya semula!\n\nMeskipun intensitas perasaannya terkadang membuatnya agak sulit diandalkan pada saat-saat yang menekan baginya, Macan masih dikenal mampu buat menyentuh perasaan publik. Kalau sedang berkepala dingin, pribadinya terasa hangat, sensitif dan simpatik. Sebaliknya, kalau sedang kumat, ia keras kepala, tak bisa ditolerir dan hanya tunduk pada kehendaknya sendiri.\n\nSeperti juga Naga dan Ayam, warga Macan mempunyai ego yang amat besar. Uang, kekuasaan dan ketenaran tak akan berarti apa-apa baginya apabila egonya terluka. Dalam keadaan ini, Macan dapat menjadi pengacau yang paling busuk yang pernah anda temui. Ia akan melakukan apa saja untuk membalaskan dendamnya, meski harus ditebus dengan membakar rumahnya sendiri. Kata-kata yang tampak sepele bagi orang lain bisa saja membakar emosinya, padahal hal-hal besar dibiarkan lewat tanpa digubris. Ingatlah: Macan paling benci kalau diabaikan!\n\nDua kelemahannya dalam hidup ini adalah ketergesaannya di satu pihak, dan ketidak becusannya mengambil keputusan di lain pihak. Andainya ia belajar buat mengambil jalan tengah, Macan akan merupakan pribadi yang luar biasa sukses.\n\nDi lubuk hati, Macan adalah orang yang amat romantis. Ia senang melucu, namun juga mesra dan sentimental sekaligus, makanya asyik juga jika kebetulan anda berpacaran atau menikah dengan seorang Macan. Namun, perlu diingat ia sangat posesif dan suka mencari gara-gara bila sedang cemburu.\n\nSecara keseluruhan, kehidupan Macan memang berubah-ubah, diwarnai oleh tawa-ria, air mata, sakit hati, kegembiraan, putus asa dan oleh setiap perasaan lain yang dikenal manusia. Meskipun demikian, jangan sekali-kali mengasihani dirinya. Ia tak memerlukannya. Ia hanya dapat mencintai kehidupan apabila ia diperbolehkan buat mereguk isinya hingga puas, tentu berdasarkan cara yang dipilihnya sendiri. Macan adalah pribadi yang luar biasa optimis, yang akan selalu siap kembali bagi tantangan baru."
            },
	    {
                "index": "4",
	        "shio": "kelinci",
                "nama": "Shio Kelinci",
	        "lahir": "1975, 1987, 1999, 2011, 2023",
	        "nomor": "12, 24, 36, 48, 60, 72, 84, 96",
                "gambar": "https://telegra.ph/file/674b73aba8ccd4bec7584.jpg",
                "keterangan": "Kelinci dalam mitologi Cina adalah lambang umur panjang dan dikatakan sebagai turunan Bulan, maka tidak mengherankan bila orang yang lahir pada tahun Kelinci tergolong paling beruntung di antara kedua belas shio lainnya. Kelinci juga melambangkan keanggunan, sopan-santun, nasihat baik, kebaikan dan kepekaan terhadap segala bentuk keindahan. Perkataannya yang lemah-lembut, dan gerak-geriknya yang luwes tetapi cekatan justru membentuk tipe watak yang diperlukan bagi diplomat yang sukses atau politikus yang piawai.\n\nKonon, orang yang lahir di bawah shio Kelinci (yang juga dikenal sebagai shio Kucing) akan mengenyam kehidupan yang tenteram, damai, tenang dan amat menyenangkan. Wataknya pendiam, artistik dan memiliki penilaian yang baik. Kecermatannya sanggup menjadikannya cendekiawan yang baik. Ia juga dapat cemerlang dalam bidang hukum atau pemerintahan.\n\nNamun ia juga memiliki perasaan yang cenderung berubah-ubah, alias moody. Bahkan, pada waktu-waktu tertentu tampaknya ia tersisih dari lingkungannya atau acuh tak acuh terhadap orang lain. Kelinci amat beruntung dalam bisnis dan transaksi finansial. Ia lihai melakukan tawar-menawar dan selalu sanggup muncul dengan usul atau pilihat yang dapat menguntungkan bagi dirinya. Kepandaiannya bernegosiasi pasti akan mempercepat keberhasilannya dalam karir apa pun.\n\nSementara orang sampai jatuh-bangun buat mengejar tujuannya, Kelinci tahu betul bahwa dunia masih di sini besok pagi. Jadi, mengapa buru-buru? Mengapa tidak duduk dulu? Bahkan mungkin ia akan membuatkan teh dulu buat Anda dan membantu Anda melupakan persaingan yang gila-gilaan di luar.\n\nTingkah laku Kelinci biasanya tak tercela. Jarang ia menggunakan kata-kata kasar dan hampir tak pernah menerapkan kata-kata jorok atau tak pantas dalam mengemukakan pendapatnya. Ia memiliki teknik tersendiri, lantas untuk apa cara seperti itu? Kelinci sanggup menyembunyikan diri di balik jubah kesopanannya untuk meluluhkan iman lawannya. Kepercayaan yang diraihnya dari orang juga biasanya tiada tara atau setidak-tidaknya amat baik. Ia akan mengundang Anda makan malam di tempat-tempat nomor satu, menjamu Anda dengan arak terlezat dan melayani setiap kehendak Anda, bila ia sedang mengininkan sesuatu dari Anda. Kemudian, begitu Anda selesai melahap semuanya dan sudah mengepulkan asap cerutu yang mahal dengan rasa puas, ia akan menarik keluar lembaran kontrak untuk Anda tandatangani. Sebelum Anda menyadari, Anda sudah harus bertekuk lutut di hadapannya. Ia sedemikian licin, tak sedikit pun Anda merasa tersinggung apalagi sakit hati. Semuanya cukup disapu dengan mata pena!\n\nKalau suasana hatinya sedang baik, Kelinci dikagumi karena kelemah-lembutannya, kecerdasannya dan seringkali pula ia dicara orang bagi nasihat-nasihatnya yang masuk akal. Kalau sedang murung, ia terlalu jauh berkhayal, terlalu sensitif atau terlalu acuh. Ia tak mau tahu pada penderitaan atau kesedihan orang lain, seolah-olah itu merupakan penyakit menular baginya. Tambahan pula, semua warga Kelinci biasanya tetap menilai kenyamanannya lebih tinggi dari kepentingan orang lain. Dan tidak dapat dipungkiri, kecintaannya pada perdamaian dibarengi dengan kebenciannya pada konflik terkadang menyebabkan Kelinci dikenal sebagai pribadi yang lembek, bermuka dua, opportunis, dan terlalu suka memanjakan diri sendiri.\n\nBerbeda dengan Naga, Anjing, Macan atau pun Ayam, yang senang bertarung sekali-sekali, Kelinci sama sekali tak suka berperang. Ia bukan tipe orang yang dilahirkan untuk menjadi pejuang. Ia jaug lebih efektif di belakang layar. Anda tidak usah terlalu memperdulikan keselamatannya, sebab Kelinci gesit, cerdik, dan dilengkapi dengan indra yang baik buat meloloskan diri dari bahaya. Berbeda dengan shio-shio lainnya, yang gemar mengejar cita-cita setinggi bintang, tujuan utamanya dalam hidup hanyalah kesejahteraan yang baik dan langgeng."
            },
	    {
                "index": "5",
		"shio": "naga",	
                "nama": "Shio Naga",
		"lahir": "1976, 1988, 2000, 2012, 2024",
		"nomor": "11, 23, 35, 47, 59, 71, 83, 95",    
                "gambar": "https://telegra.ph/file/a27baed8ee144b71aec68.jpg",
                "keterangan": "Warga Naga terkenal murah hati, penuh semangat hidup dan perkasa. Bagi Naga, hidup ini laksana panorama yang berwarna-warni dan ia harus selalu ambil bagian. Meskipun egois, nyentrik, fanatik, banyak tingkah, suka menuntut dan terkadang tak dapat ditolerir, ia tak pernah kekurangan pengagum. Sebagai pribadi yang angkuh, aristokratis dan tanpa tedeng aling-aling, Naga biasanya menyusun cita-citanya dalam usia muda dan menuntut standard tinggi serta kesempurnaan dari sesamanya, sama seperti yang disandangnya sendiri.\n\nNaga benar-benar merupakan gudang energi sejati. Ketidaksabarannya, hasratnya yang menyala-nyala serta semangatnya yang hampir-hampir menyerupai kesaktian, dapat berkobar bagi lidah api yang sering dilukiskan sedang desemburkan dari mulutnya. Naga senang melaksanakan segala sesuatu dalam skala besar, dan seringkali ia berhasil mencapai tujuan yang diinginkannya. Apapun yang dilakukan Naga, baik atau buruk, tampaknya selalu akan menjadi berita utama. Namun, kecuali ia dapat belajar untuk tidak terjun terlalu dini, Naga bisa juga menguras habis semangat berapi-api yang ada padanya sampai akhirnya tinggal asap saja. Warga Naga juga termasuk mereka yang cepat menjadi fanatik terhadap sesuatu hal. Orang Cina menamakan Naga sebagai pelindung kekayaan dan kekuasaan, dan tentunya juga merupakan lambang kemakmuran. Namun, Naga juga merupakan tanda binatang yang paling mudah terkena penyakit megalomania, alias terlalu mengagungkan diri sendiri. Namun, Naga juga cukup sering mengabdi kepada keluarganya. Apa pun bentuk perbedaan antara dirinya dengan orang tua atau kakak-adik, akan langsung terlupakan begitu mereka memerlukan bantuannya. Naga bisa segera mengesampingkan rasa dendamnya dan langsung menyelamatkan mereka tepat pada waktunya, tanpa mengharapkan imbalan jasa. Akan tetapi, keluarganya juga akan memperoleh kuliah yang panjang dan pedas begitu krisis berakhir. Naga jarang memoles kata-katanya. Dikemukakan pandangannya bagai membacakan Maklumat Kekaisaran. Meski ia bisa membual tentang kebebasan berbicara dan demokrasi, jangan pernah memandang serius, sebab ia sendiri menganggap dirinya di atas hukum dan tak selalu mempraktekkan apa yang dikuliahkannya.\n\nWalaupun emosinya sering terlihat meletup-letup, Naga tidak dapat dikatakan sentimental, sensitif atau pun romantis. Segala bentuk cinta-kasih dan puja-puji yang dilontarkan ke hadapannya dianggapnya sudah sewarjarnya: semua itu sudah menjadi haknya. Namun meski ia terkenal keras-kepala, kurang rasional dan tak dapat ditolerir bila sedang jengkel, Naga bisa langsung memaafkan Anda begitu ledakan amarahnya lenyap. Dan karena kita juga harus saling memaafkan, Naga juga mengharapkan pengampunan Anda bagi kesalahan-kesalahan yang diperbuatnya. Tak dapat dipungkiri, Naga sendiri kadang-kadang lalai meminta maaf. Namun, ini terjadi bukan karena ia tebal muka atau tak punya perasaan, tapi hanya karena Naga tak punya waktu buat menjelaskan dirinya sendiri atau pun memang tak mau diganggu oleh rasa dendam dan hal-hal yang remeh; ia hanya ingin melanjutkan pekerjaannya.\n\nBagi orang berhio Naga, memiliki maksud tertentu atau misi khusus dalam hidup adalah vital. Tak sehat baginya buat bergoleran saja tanpa berbuat apa-apa. Ia harus selalu punya motif buat diperjuangkan; punya tujuan buat dicapai; punya prinsip buat dipertahankan dan dibela. Jika tidak, bagaimana Anda bisa mengharapkan supaya api di dalam hatinya selalu membara?\n\nOrang bershio Naga biasanya super positif. Tak ada yang dapat menahannya lama-lama, bahkan sekalipun ia dihadapkan pada persoalan yang menjemukan, semangat hidupnya selalu lebih cepat membangkit kembali dibandingkan orang lain.\n\nTerlebih lagi, Naga itu pribadi yang amat terbuka. Anda dapat membacakanya seperti buku. Sulit baginya berpura-pura memperlihatkan emosi yang saat itu tak dirasakannya. Dan memang hampir tak pernah ia mencoba berbuat demikian. Ia juga tak suka menyimpan rahasia, bahkan tidak jarang ia secara tidak sadar membongkar rahasia yang telah dipercayainya oleh orang lain!\n\nUntungnya, perasaan Naga selalu datang dari lubuk hatinya. Bila ia menyatakan mencintai Anda, maka Anda boleh merasa yakin bahwa pernyataannya itu tulus."
            },
	    {
                "index": "6",
		"shio": "ular",	
                "nama": "Shio Ular",
		"lahir": "1977, 1989, 2001, 2013, 2025",
		"nomor": "10, 22, 34, 46, 58, 70, 82, 94",
                "gambar": "https://telegra.ph/file/76bfd276dbd224d17058f.jpg",
                "keterangan": "Filosuf, ahli teologi, kampiun politik dan ahli moneter yang kesohor -- itulah jabatan-jabatan yang cocok bagi Ular, yang memang merupakan pemikir yang paling dalam dan paling misterius dari semua siklus perbintangan Cina. Ia dikaruniai kebijaksanaan lahiriah, dan ia sendiri tidak jarang tampak di mata orang sebagai mistik. Pribadi yang anggun dan lemah-lembut dalam berbicara ini, mencintai buku-buku mermutu, makanan lezat, musik merdu dan teater sekaligus. Pendeknya, Ular cenderung menyukai semua yang halus dan indah dalam kehidupan.\n\nOrang di bawah shio ini biasanya mengandalkan penilainnya sendiri dan tak bisa berkomunikasi baik dengan yang lainnya. Ia bisa menjadi sedemikian relijius atau menyenangi hal-hal yang berbau kejiwaan, namun bisa juga memuja paham kehidupan yang mencari kesengan diniawi semata. Jalan manapun yang dipilihnya, ia akan selalu mempercayai perasaannya sendiri daripada nasihat-nasihat dari luar. Seperti Naga, Ular adalah tanda yang sangat berkaitan dengan hukum Karma. Kehidupannya dapat berakhir dengan kemenangan atau tragedi, tergantung pada apa yang diperbuatnya pada masa lampau. Dan walaupun seringkali menyangkal, Ular memang masih percaya pada takhyul di balik penampilannya yang intelek. Orang yang lahir di bawah shio lain bisa saja menunda iurannya bagi kehidupan di akhirat, namun tampaknya Ular justru bertekad buat membayar hutang-piutangnya sebelum meninggalkan dunia ini. Mungkin juga ini merupakan pilihannya, sebab orang yang lahir di bawah shio ini biasanya memiliki pribadi yang intens dan sepertinya mereka selalu terdorong (baik secara sadar maupun tidak) untuk merampungkan masalah lama yang dirasakannya belum selasai.\n\nWarga Ular biasanya tak mendapat gangguan dalam masalah keuangan. Ia beruntung mempunyai apa yang diperlukannya. Andaikata dananya rendah, Ular pasti akan mampu memulihkan situasinya. Tetapi bagaimanapun, warga Ular sebiaknya jangan berjudi, sebab pada akhirnya ia malah akan lebih melarat. Seandainya terjadi hal yang membuatnya rugi besar, mungkin kejadiannya hanya akan berlangsung sekali saja, sebab Ular biasanya cepat memahami kesalahannya. Ia dapat memulihkan dan mengejar kekeliruannya dengan kecepatan yang mengagumkan, sebab dalam hal bisnis ia cenderung bijaksana dan lihai.\n\nOrang yang lahir di bahwa shio ini sering anggun dalam berbicara, berpakaian dan bertingkah laku, dan mereka jarang menyenangi pembicaraan yang remeh dan tak ada gunanya. Ular bisa saja dermawan, namun juga terkenal kejam kalau sedang berusaha mencapai kepentingannya sendiri. Ia tak ragu-ragu buat melenyapkan siapa saja yang menghalangi jalannya.\n\nDalam menjalin hubungan dengan yang lain, Ular cenderung posesif dan suka menuntut. Namun pada saat yang bersamaan, ia cenderung tidak percaya pada rekan-rekannya. Ia takkan pernah memaafkan siapa saja yang melanggar janjinya. Bahkan, bisa saja syaraf atau daya khayalnya terganggu akan hal yang bukan-bukan apabila ketakutan dan kecurigaannya sedang memuncak.\n\nJika amarahnya terpancing, kebenciaan Ular tak terbayangkan. Cara perlawanannya adalah dengan menutup mulut dan menyimpannya di dalam hati. Citra ketidak-senangannya adalah lewat sikap bermusuhan yang dingin dan bukannya lewat rentetan kata-kata pedas. Tipe yang lebih mematikan bahkan sanggup menghancurkan musuhnya secara total. Tak ada yang dapat meramalkan gerakan Ular. Otaknya bagai mesin hitung dan ia sendiri memiliki kesabaran yang luar biasa dalam menunggu saat yang baik buat membalas dendam.\n\nWarga Ular terkenal sebagai pacar yang romantis dan kekasih yang menghanyutkan; mereka juga sering diberi predikat mata keranjang. Sebenarnya, reputasi yang diperolehnya ini keliru, disebabkan oleh sensualitas mereka yang selalu menonjol dalam hal apa saja yang dilakukannya. Pria atau wanita Ular memperlihatkan semangat yang sama dalam mengejar transaksi bisnis yang didambakan, sama seperti kalau sedang berusaha meraih simpati seorang kekasih baru."
            },
	    {
                "index": "7",
		"shio": "kuda",	
                "nama": "Shio Kuda",
		"lahir": "1978, 1990, 2002, 2014, 2026",
		"nomor": "09, 21, 33, 45, 57, 69, 81, 93",
                "gambar": "https://telegra.ph/file/ee88e12e58b07651399b5.jpg",
                "keterangan": "Konon, orang yang lahir pada tahun ini bersifat periang, cukup populer di lingkungannya, dan memiliki daya tangkap kilat. Meskipun wajahnya belum tentu tampan/cantik menurut penilaian umum, Kuda memiliki daya tarik tersendiri yang terletak pada semangat hidup yang dipancarkannya. Pendekatannya hangat dan membumi. Di samping itu ia suka berbicara dan biasanya mudah bergaul. Ia adalah pribadi yang suka mengandalkan diri sendiri. Segi negatifnya, wataknya yang berubah-ubah kadangkala menjadikannya suka naik darah, bertindak gegabah, atau bersikap semau gue. Kuda yang sukar ditebak bisa saja jatuh cinta secara serampangan dan kemudian mengakhirinya begitu saja.\n\nWarga Kuda condong buat meninggalkan rumah orang tuanya sejak masih muda-belia. Andaikata ia tetap tinggal dengan orang tua, semangatnya yang cinta kebebasan pasti akan mendorongnya buat segera mulai bekerja atau memulai karirnya pada usia muda. Pada dasarnya, Kuda adalah orang mandiri yang tak mau tunduk pada norma-norma sosial. Ia tak dapat mematuhi jadwal yang tidak dibuatnya sendiri dan kurang menghormati presedur-prosedur yang telah ditentukan oleh angkatan lama.\n\nKuda kerap mempunyai jam-jam kerja yang tidak menentu. Kalau sedang mendapat ide, ia bisa bekerja siang-malam tanpa makan dan tidur. Sebaliknya, kalau di kantor kebetulan sedang tidak banyak pekerjaan, ia tidak segan-segan melarikan diri untuk bersenang-senang. Untuk menghindari kesulitan di sini, semua warga Kuda sebaiknya mencari pekerjaan yang penuh variasi untuk memperlihatkan kemampuannya. Meski berjiwa petualang, ia juga terkenal berotak tajam dan sering pandai dalam mengelola keuangan. Kuda yang gesit dan luwes dapat mencium situasi dengan tajam dan sanggup memanfaatkan orang maupun kejadian demi kepentingannya.\n\nKuda juga terampil dalam bercinta. Ia kerap dijuluki playboy atau playgirl, mungkin dikarenakan adanya beberapa di antara warga ini yang menganut pola pikiran Bila tak dapat berdampingan dengan orang yang dicintai, mengapa tidak mencintai orang yang ada di depan mata?. Namun, hal ini bukan berarti semua Kuda tidak bisa setia, terutama bila pasangannya dapat memahami kebutuhan dasarnya akan kebebasan. Kebanyakan Kuda dapat belajar untuk setia asalkan mereka tidak terlalu dikekang oleh pasangannya. Masalahnya, Kuda menyenangi keramaian dan tidak mau ketinggalan kalau ada pawai atau yang sebangsanya. Ia juga senang menyanjung orang, di samping menerima sanjungan orang lain. Segi baiknya, Kuda sendiri biasanya cukup fair terhadap pasangannya. Ia bukan tipe orang yang posesif, curiga, atau iri hati.\n\nKalau suasana hatinya sedang buruk, orang bershio Kuda bisa menjadi keras kepala dan hanya mau tunduk pada dorangan hatinya sendiri. Hatinya mudah terbakar, tetapi meski ia bisa cepat melupakan ledakan amarahnya, belum tentu orang lain dapat cepat memulihkan rasa sakit hati yang disebabkan oleh perlakuan yang diterimanya. Acapkali tingkah yang seperti ini dapat menyebabkan Kuda kehilangan respek dan kepercayaan orang. Ia condong mengajak orang bertindak buru-buru dan tidak sabar melihat mereka kerja tidak secepat dan seefisien dirinya sendiri. Ia doyan menuntut tapi hanya mau mengorbankan sedikit dari pihaknya, terutama kalau itu sudah menyangkut kebebasannya yang dinilainya paling penting. Tak jarang ia bersikap kekanak-kanakan dan adakalanya berpikiran sempit dalam memuaskan lagak-lagunya dan kehendaknya yang tak menentu.\n\nSemangat 45 yang dimiliki warga Kuda mudah terlihat dalam berbagai hal. Ia cenderung berpakaian perlente, dan senang pada desain yang paten dan berwarna-warni, bahkan kadangkala serba menyolok. Ia juga menyenangi olahraga, baik olahraga otak maupun olahraga fisik. Anda akan langsung mengenal Kuda dari lenggang-lenggoknya yang luwes, daya reaksinya yang spontan, dan gaya bicaranya yang cepat. Pikirannya bekerja dengan kecepatan penuh dan meskipun kesabaran, kestabilan emosi dan kegigihannya terkadang dinilai kurang, namun hal itu dapat ditutupi dengan keterbukaannya dan kepandaiannya mengatasi masalah dengan langkah-langkah yang berani serta pendekatan yang orisinil."
            },
	    {
                "index": "8",
		"shio": "kambing",	
                "nama": "Shio Kambing",
		"lahir": "1979, 1991, 2003, 2015, 2027",
		"nomor": "08, 20, 32, 44, 56, 68, 80, 92",    
                "gambar": "https://telegra.ph/file/6d02e05844df532834cc2.jpg",
                "keterangan": "Kambing terkenal karena kelembutannya dan sifat tidak teganya terhadap sesama. Umumnya dia budiman, tulus, dan gampang tersentuh oleh cerita-cerita sedih. Kalau suasana hatinya sedang baik, ia artistik, moderen dalam penampilan, dan juga seorang pekerja yang kreatif. Namun kalau suasana hatinya sedang kebalikannya, ia condong dikuasai oleh emosinya, pesimistis dan suka menyendiri.\n\nKonon, warga Kambing gampang memaafkan orang dan mudah menerima kekurangan-kekurangan orang lain. Oleh karena temperamennya yang berubah-ubah, terasa sulit baginya untuk bekerja di bawah tekanan atau buat bersikap obyektif. Ia tak begitu menyukai jadwal yang terlampau ketat, tak dapat mengikuti terlalu banyak disiplin dan tak mampu menerima terlalu banyak kritik tajam. Meski demikian, Kambing adalah tipe orang yang penuh kasih sayang terhadap anak-anak dan binatang, senang dengan pemandangan alami, dan merasa amat nyaman di dalam suasana rumahnya sendiri. Bahkan Kambing terkadang menyerupai seorang Ibu yang selalu ingin melimpahi sesamanya dengan kasih-sayangnya. Baik pria maupun wanita Kambing akan selalu amat dekat dengan keluarganya dan bahkan condong buat terlalu memanjakan mereka. Orang Cina percaya, bahwa Dewi Fortuna akan selalu memamerkan senyumnya yang menawan kepada Kambing, karena kepolosan dan kebaikan hatinya. Padanya selalu tersedia tiga hal terpenting dalam hidup ini: makanan, tempat bernaung, dan pakaian. Kemana pun dia pergi, dia selalu bertemu dengan orang-orang yang bisa dan mau menolongnya. Warga shio ini akan berusaha keras supaya bisa menikah dengan baik untuk mencukupi kebutuhannya, namun di sini ia juga biasanya sangat disayangi, bukan saja oleh pasangan hidupnya, tapi juga oleh ipar-iparnya. Maklumlah, Kambing jarang kikir dengan waktu maupun uangnya. Andaikata Anda tak punya tempat tinggal dan tak berduit, Kambing takkan menelantarkan Anda.\n\nSemua warga Kambing dari usia sembilan sampai sembilan puluh sembilan adalah orang-orang yang amat romantis. Musik lembut, bulan purnama dan jamuan makan berlilin dalam suasana intim tak pernah gagal buat mengikat pesona mereka.\n\nBanyak orang yang lahir pada tahun ini akan memiliki bakat memperdaya yang mungkin tampak agak licik. Kambing biasanya muncul dengan permohonan yang gila-gilaan, yang hampir mendekati pemerasan atau perampasan jalanan. Dan begitu Anda siap buat menghardiknya dengan perkataan Tidak yang keras, Anda akan melihat ekspresinya yang sedemikian polos dan murni, bersamaan dengan setetes air yang menggenangi sudut matanya, belum lagi ditambah dengan sedikit getaran pada bibirnya. Tba-tiba saja Anda merasa diri sebagai makluk raksasa yang baru saja menggiring seekor Kambing buat disembelih. Dan saat itu juga hati Anda pasti mencair, sehingga Anda akan langsung mengabulkan tuntutannya yang tak masuk akal itu! Sementara itu, muncullah pertanyaan: Tidakkah Anda curiga? Jawaban: Bagaimana bisa curiga terhadap makluk yang tampak sedemikian lemah dan sedemikian tak berbahaya!\n\nSanjungan terhadap bakat yang dimilikinya akan membuat kepribadian Kambing berkembang dengan luar biasa. Ia sangat membutuhkan kasih sayang, perhatian dan persetujuan. Seharusnya ia terjun ke dalam bidang yang kreatif, sebab di samping memiliki jiwa seni yang cemerlang, ia dapat memperoleh kebebasan untuk melakukan apa saja yang paling disukainya. Dalam hal apa saja yang menyangkut keindahan, jangan khawatir -- Kambing takkan mengecewakan Anda. Seleranya kelas tinggi dan pilihannya selalu tepat. Meski demikian, bila Anda ingin memelihara seekor Kambing perlu diingat bahwa dia juga mudah menjadi pemboros dan amat tidak praktis dalam segala hal yang merangsang indranya yang halus.\n\nBiasanya menguntungkan bagi Kambing kalau sampai mempunyai beberapa rekan yang lebih kuat dan lebih tegas dibandingkan dirinya sendiri. Misalnya, seorang menejer yang akan bisa mendisiplinkan dia dan memanfaatkan bakatnya. Atau seorang sekretaris yang tangguh, yang tak segan-segan menolak segala permintaan dari orang yang hanya ingin memanfaatkan kebaikan si Kambing, sekaligus bisa menolak segala tuntutan aneh yang muncul dari watak yang sedemikian lembut itu.\n\nSudah dapat disimpulkan, warga Kambing tidak dilahirkan sebagai orang yang suka mengambil keputusan dengan tegas. Ia lebih suka mengekor atau mengeluh kalau segalanya tak sesuai dengan yang diharapkan. Ia juga mudah khawatir dan acapkali membayangkan yang terburuk sebelum mulai berjuang. Tapi toh selalu terdapat orang yang ingin meyakinkannya dan menyayanginya dengan tulus sebab sikap Kambing yang baik dan demawan mengundang tanggapan yang serupa dari orang lain."
            },
	    {
                "index": "9",
		"shio": "monyet",	
                "nama": "Shio Monyet",
		"lahir": "1980, 1992, 2004, 2016, 2028",
		"nomor": "07, 19, 31, 43, 55, 67, 79, 81",	
                "gambar": "https://telegra.ph/file/8c06852cbf31532213eb1.jpg",
                "keterangan": "Di antara semua binatang dalam zodiak Cina, Monyet merupakan binatang yang paling mirip dengan Monyet Tak Berbulu, alias Manusia. Oleh karena itu, tidak mengherankan bila binatang ini juga mewarisi kecerdasan dan kesanggupannya untuk menipu!\n\nMonyet adalah lambang penemu. Ia penuh inovasi, pandai berimprovisasi dan sanggup menarik perhatian orang terhadapnya lewat akalnya yang seribu satu macam dan daya pikatnya yang tak dapat ditiru. Monyet mampu memecahkan masalah yang ruwet-ruwet dengan gampang dan dapat belajar dengan cepat. Sejak berusia dini, ia sudah memupuk keahlian bermasyarakat. Ia mengerti bagaimana cara bergaul yang baik dan bagaimana cara membujuk orang lain untuk memperoleh apa yang diperlukannya secara tepat. Segi negatifnya, di antara binatang shio lainnya justru Monyet yang paling sering terkena superiority complex, alias terlalu mengagungkan diri sendiri. Ia bisa menjadi orang yang egois, angkuh, dan sombong. Tidak jarang Monyet juga dihinggapi rasa iri setiap kali ada orang yang naik pangkat atau baru saja berhasil memiliki apa yang kebetulan belum dimiliknya. Ia mempunyai rasa bersaing yang bukan main, namun amat mahir dalam menyembunyikannya dan dalam merencanakan tindakannya yang licik. Namun kesemua ini menjadikan Monyet tak tertandingi dalam usahanya mengejar uang, sukses, atau kekuasaan.\n\nDengan kepandaian lahiriahnya yang seribu satu macam, orang kelahiran tahun Monyet bisa menjadi aktor, penulis, diplomat, pengacara, pemegang saham, atau guru yang jempolan. Ia merupakan karakter yang teramat supel, yang memiliki bakat istimewa buat menjadikan Anda suka padanya, padahal sesaat sebelumnya ia pernah mengakali Anda.\n\nDaya cipta warga Monyet tidak hanya mengarah pada ketrampilan atau keahlian pikiran, tetapi juga mengarah pada kecenderungan untuk membelokan kebenaran demi keuntungan mereka pada situasi tertentu. Seringkali dalam bermacam hal, batas antara angan-angan dan kenyataan menjadi kabur, fakta dicampur dengan fiksi, dan kebenaran dan kebohongan beriringan. Andaikata standar moral Monyet yang tidak terlalu tinggi membuatnya menjerumuskan diri dalam suatu kesulitan, maka kecerdasan, kelincahan, dan kelicikannya akan membuatnya mudah memutar-balikkan kenyataan untuk menyelamatkan mukanya dan mencari dalih untuk kepentingan diri sendiri.\n\nOleh karena Monyet pandai mendapatkan apa yang diinginkannya tanpa susah-payah, maka ia cenderung untuk cepat bosan dan kurang menghargai apa yang sudah dimilikinya. Tentu saja, sikap ini juga dapat mengganggu asmaranya. Supaya tetap menarik bagi Monyet, sebuah hubungan harus ada sedikit intrik dan banyak variasi. Terutama di waktu muda, Monyet yang selalu ingin mencoba pengalaman baru mungkin kurang sanggup mempertahankan sebuah hubungan serius jangka panjang. Bahkan ada beberapa antaranya yang suka mengganggu hubungan orang lain dan menikmati kekacauan akibat ulah mereka -- persis seperti binatang lambang mereka!\n\nDalam kepribadian Monyet yang beraneka warna itu, satu-satunya yang tak pernah ketinggalan dalam dirinya adalah rasa percaya diri. Tak peduli betapa pemalu atau jinaknya pun tampangnya, ia akan berusaha sebaik-baiknya untuk memperlihatkan tingkah laku yang baik, kesopanan yang terlatih, dan ketenangan yang meyakinkan. Ia percaya sepenuhnya pada kemampuannya untuk menghadapi tantangan apa saja, dan oleh karenanya mudah mencapai sukses dalam bidang apapun yang dipilihnya."
            },
	    {
                "index": "10",
		"shio": "ayam",	
		"nama": "Shio Ayam",	
		"lahir": "1981, 1993, 2005, 2017, 2029",
		"nomor": "06, 18, 30, 42, 54, 66, 78, 90",
                "gambar": "https://telegra.ph/file/7cc34f10ebee0d53e94a8.jpg",
                "keterangan": "Ayam tergolong binatang yang paling tidak dimengerti dan paling eksentrik dalam zodiak Cina. Walau dia sering tampak sebagai simbol keyakinan dan keberanian, namun di hatinya dia cenderung bersifat konservatif, bahkan agak kuno.\n\nSekilas, ada dua tipe Ayam yang sepertinya bertolak-belakang: tipe yang mudah terbakar dan amat cerewet, dan tipe yang diam-diam suka mengawasi, yang matanya seolah memancarkan sinar X. Walaupun demikian, warga shio ini (terutama pria) biasanya mudah dikenal dari penampilannya yang perlente dan penuh gaya. Keluarga unggas yang berlagak bagai pangeran dan bangga pada bulu-bulunya yang cantik ini memang memiliki pembawaan tak tercela. Anda takkan melihat ada Ayam yang berjalan dengan terbungkuk-bungkuk; posisi tubuhnya selalu tegak dan terlihat pongah. Sebagai pribadi yang senang menarik perhatian orang, ia bisa mengejar sukses dalam karir macam apapun yang menghadapkannya dengan orang banyak. Namun, sifat yang sama terkadang membuat Ayam terlalu melebih-lebihkan dekorasi rumah, kantor, atau dirinya sendiri. Dia juga amat terkesan dengan segala jenis penghargaan, medali, dan gelar-gelar kehormatan. Setidak-tidaknya setiap warga Ayam ingin memenangkan satu penghargaan atau menggondol satu ijazah profesional sebagai tanda pengakuan masyarakat bagi dirinya.\n\nAyam memang memiliki sejumlah sifat yang patut dibanggakan. Dia berotak tajam, berpenampilan rapi, teliti, teratur, pandai mengambil keputusan, tegas, waspada dan berbicara terus-terang. Dia lincah sekali dalam mengekspresikan dirinya, baik dalam percakapan maupun tulisan. Ia juga pandai bersilat lidah dan berdebat. Kalau Anda berniat menantangnya dalam masalah-masalah yang cukup kontroversial, bersiap-siaplah buat pedebatan yang lama dan sulit sebab Ayam memang punya stamina yang mengagumkan dan sanggup membuat Anda jemu.\n\nSebaliknya, jika dirinyalah yang dibikin malu sampai bulu-bulunya yang cantik itu menjadi kuyup, Ayam bisa menjadi amat menyebalkan. Ia tidak punya potongan diplomat. Situasi yang membutuhkan keluwesan dan kearifan bertolak belakang dengan wataknya. Bahkan, kepandaiannya mengkritik terkadang menyerupai kebrutalan. Untuk menciptakan kemajuan yang lancar dan tak terhalang dalam masyarakat, Ayam harus menyadari, bahwa orang lain tidak akan begitu cepat menolak nasehat-nasehatnya yang jempolan apabila disampaikan dengan cara yang lebih halus.\n\nJarang ada warga Ayam yang menghamburkan uang di luar batas (kecuali hal itu dilakukan demi gengsi). Mereka terpukau oleh akuntansi, pandai mengelola keuangan dan senang mengawasi peti uang. Seumpama Anda punya masalah yang menyangkut keuangan Anda, serahkan saja pada kebijaksanaan Ayam. Dia sanggup membuat anggaran yang ketat bagi Anda dan akan tak ragu-ragu mencekal tangan Anda setiap kali Anda menyentuh lebih dari jumlah yang sudah ditentukan. Namun, kalau menyangkut uangnya sendiri, perlu dicatat bahwa orang bershio Ayam biasanya hanya bermurah hati dengan keluarga dekatnya saja atau untuk mendapatkan rasa cinta dan kekaguman dari para pengikutnya. (Satu-satunya yang pasti bisa Anda dapat secara gratis darinya adalah nasihat!)\n\nDi samping uang, Ayam pandai mengatur segala sesuatu, termasuk waktunya sendiri, waktu Anda, waktu tukang pos, waktu perusahaan, dan lain-lainnya yang tak terbatas hanya sampai di situ saja. Tak bakal Anda menemukan orang lain yang begitu pandai melaksanakan hal-hal yang penting secara tegas, kecuali dirinya. Dia memang mencintai tugas-tugas yang rumit. Tapi di sini jangan mengharapkan dia akan mampu berimprovisasi. Ayam adalah tipe yang tegas dan lugas, dan karenanya Anda juga harus memberikan perintah-perintah yang sama.\n\nAyam adalah perfeksionis. Ia memiliki mata yang jeli bagi hal yang kecil-kecil ditambah dengan kemampuan untuk bepikir secara teoritis. Namun, ide-idenya terkadang tampak lebih cemerlang di atas kertas daripada dalam penerapan yang nyata. Soalnya, di tengah-tengah fantasinya yang teoritis, Ayam seringkali lupa memperhitungkan segala kekurangan manusia serta faktor-faktor lain yang sulit diduga. Terkadang warga shio ini gagal untuk memahami mengapa orang lain tak bisa hidup dengan rumus tetap seperti yang mereka lakukan.\n\nHampir semua warga shio Ayam adalah pekerja yang bereputasi baik. Ia biasanya tahu bagaimana menyenangkan hati atasannya, yang sebaliknya terkesan pada kecerdasannya dan keefisienan kerjanya. Namun meskipun dia memiliki tenaga tak terbatas dan kemauan yang keras buat mencapai sukses, warga Ayam terkadang terlalu yakin pada waktu sedang kumat sehingga ia salah mengarahkan usahanya atau menanggung tugas-tugas yang di luar kemampuannya.\n\nIroni semuanya itu adalah bahwa warga Ayam dapat menemui sukses maupun duit pada tempat-tempat yang sangat umum. Seperti yang sering dikatakan orang Cina, Ayam masih bisa mencari makan dengan paruhnya yang kokoh-kuat dan cakarnya yang tajam, sekalipun di tanah yang paling keras."
            },
	    {
                "index": "11",
		"shio": "anjing",
                "nama": "Shio Anjing",
		"lahir": "1982, 1994, 2006, 2018, 2030",
		"nomor": "05, 17, 29, 41, 53, 65, 77, 89",    
                "gambar": "https://telegra.ph/file/a64b0686c6020aa616597.jpg",
                "keterangan": "Menurut leluhur Tionghoa, orang kelahiran tahun Anjing umumnya jujur, cerdas, dan terus-terang. Ia adalah manusia yang tidak sombong, yang memiliki naluri kemanusiaan yang amat mendalam. Rasa kesetiaannya dan kecenderungannya untuk memprioritaskan persamaan hak dan memperjuangkan keadilan membuatnya sangat populer, terutama di kalangan kaum lemah. Watak dasarnya ramah, rendah hati, dan tidak terlalu menuntut, dan semua ini membuat Anjing mudah bergaul dengan orang lain. Ia selalu bersedia kompromi dan dapat dipercaya untuk mengerjakan tugas-tugas yang telah menjadi tanggung jawabnya.\n\nSeperti juga kawannya yang manusiawi, Macan, maka Anjing juga jarang menunjukkan amarahnya secara pribadi kepada seseorang. Yang penting bagi Anjing adalah prinsip keadilan. Jika perbuatan Anda sampai melukai hatinya, perbuatan itulah yang akan ditunjukkan oleh dia, tanpa dembel-embeli maksud tidak baik, tanpa dendam atau iri hati. Kalau semuanya sudah selesai ditumpahkan dan perbaikan yang layak sudah dikerjakan, maka dia bisa saja berdamai lagi dengan Anda seolah tidak ada apa-apa. Sekalipun dalam usia muda, anak Anjing sudah belajar untuk mencium mana orang yang baik dan mana orang yang jahat. Bahkan setiap warga Anjing, apakah dia sendiri mengakui atau tidak, cenderung membagi orang ke dalam dua kategori, yaitu musuh atau teman, hitam atau putih. Baginya, tak ada warna kelabu atau campuran antara kedua warna itu. Namun, sekalipun Anda berhasil memenangkan kepercayaannya, Anjing akan setia untuk selamanya.\n\nWalaupun kekayaan, kekuasaan, dan kesuksesan mungkin sangat berarti bagi orang lain, hal-hal tersebut tidak berarti apa-apa bagi Anjing bila tanpa kekasih, teman, atau keluarga yang bisa ikut menikmatinya. Sangatlah beruntung orang yang kebetulan mempunyai teman bershio Anjing, sebab warga Anjing umumnya tidak tega mengabaikan suara teman memohon pertolongan.\n\nNamun, adakalanya Anjing malah bisa melindungi kepentingan orang lain lebih daripada kepentingannya sendiri. Seperti binatang lambang shio ini, Anjing berpegang teguh pada orang yang dikasihinya, tak peduli betapa tidak bermutunya pun orang itu. Anjing yang setia lebih cenderung mempertahankan situasi yang sama tak peduli betapa tidak menyenangkannya daripada harus menghadapi sesuatu yang tidak dikenal dan harus mulai lagi dari nol. Dan seumpamanya dia terpaksa dengan hati yang berat untuk meninggalkan rumah, yaah, jangan salahkan dia. Tempat itu barangkali benar-benar menyedihkan baginya kalau dia sampai melakukan hal itu.\n\nTidak jarang Anjing sulit menyesuaikan diri terhadap perubahan. Meskipun penampilannya biasanya ramah dan riang, pada dasarnya dia adalah binatang yang pesimis. Situasi yang tidak terduga bisa membuatnya cemas tanpa sebab yang jelas. Oleh karena dia sering melihat sesuatu dari segi negatifnya, dia bisa mengundang kesulitan atau merusak kenikmatan yang sebenarnya dapat diperoleh dari hal itu. Kalau dia dapat belajar berpikir lebih positif, gangguannya biasanya sangat berkurang.\n\nSecara umum, Anjing adalah manusia yang tidak materialistis dan tak menyenangi kemegahan. Kata-kata dan bahasa yang muluk-muluk malah mencurigakan baginya. Dia lebih suka pembicaraan maupun gaya hidup yang tidak dibuat-buat. Dan walaupun dia tidak begitu mempedulikan uang, namun umpamanya dia sedang membutuhkan, tak ada yang lebih lengkap sarananya untuk mendapatkan itu, selain dia. Sekalipun dia terlahir dalam keluarga pas-pasan, Anjing yang bermoral tinggi mampu meningkatkan statusnya dalam hidup atas upayanya sendiri tanpa berusaha menyembunyikan asal-usulnya."
            },	
            {
                "index": "12",
		"shio": "babi",	
                "nama": "Shio Babi",
		"lahir": "1983, 1995, 2007, 2019, 2031",
		"nomor": "04, 16, 28, 40, 52, 64, 76, 88, 00",    
                "gambar": "https://telegra.ph/file/cb5b87d3a53ef9d259dc8.jpg",
                "keterangan": "Babi adalah lambang kejujuran, kesederhanaan dan keuletan yang luar biasa. Gagah dan kuat, Babi akan mengabdikan dirinya pada tugas-tugas yang menjadi bagiannya dengan sekuat tenaga dan dapat diandalkan untuk menyelesaikannya. Namun, dia adalah manusia paling wajar yang pernah Anda temui. Warga shio ini populer dan banyak dicari orang, karena sebagaimana juga Kambing dan Kelinci, Babi ingin mewujudkan keharmonisan antar sesama. Babi yang setia dan bijak mudah sekali membina persahabatan yang langgeng dan bermanfaat. Dia gemar pada segala macam bentuk pertemuan, gemar menyelenggarakan pesta-pesta dan menjadi tuan rumah perayaan-perayaan, juga senang menggabungkan diri dengan klub-klub dan segala macam perkumpulan. Dia membenci perdebatan dan pertengkaran mulut dan mampu menciptakan suasana yang membuat semua orang merasa santai.\n\nKepercayaan orang terhadap dirinya dan ketulusannya merupakan kelebihannya yang utama. Babi yang baik hati jarang memiliki maksud tersembunyi. Tetapi toh, kadang dia bisa terlalu ramah dan sok akrab, dan dia juga berharap orang lain dapat mentolerir kelemahannya. Kepolosan dan keluguannya juga menjadikanya sebagai mangsa favorit para penipu. Sudah jadi rahasia umum, Babi dan duitnya gampang dipisahkan. Babi yang terlalu murah hati sebaiknya minta pendapat orang yang lebih obyektif sebelum sebelum mengeluarkan dompetnya. Walaupun warga shio ini dapat dikatakan materialistis, namun toh dia gemar membagi-bagikan apa yang dimilikinya. Lebih banyak yang diberikannya, lebih banyak pula yang didapatnya. Sifatnya yang tidak mementingkan diri sendiri dan suka bergaul menjadikannya selalu dikelilingi oleh lingkaran teman yang semakin meluas, yang diperkenankan mengambil manfaat sepuas-puasnya dari dirinya.\n\nNamun, Babi juga lekat terhadap pepatah Milikku adalah milik Anda juga, dan milik Anda adalah milikku juga. Jika kebetulan kawan Anda yang bershio Babi datang bertandang ke rumah, maka tanpa malu-malu dia akan melahap makanan Anda, mencobai baju Anda, perangkat golf Anda, kamera model terakhir Anda, mobil terbaru Anda dengan gaya yang santai. Bila Anda melarangnya berbuat begitu maka dia akan menanggapinya dengan rasa tidak percaya dan hatinya akan terluka. Dia takkan bisa memahami ataupun menerima pikiran orang yang mau menang sendiri. Sebagai makhluk yang benar-benar menikmati hal-hal yang duniawi, Babi memiliki nafsu besar. Namun, jika dia tidak pandai-pandai mengawasi seleranya yang kuat dan tidak mampu menerapkan kontrol diri, Babi bisa terlalu mudah dimanfaatkan oleh orang-orang yang tahu bagiamana menggunakan kelemahannya. Kecerobohannya dalam mengejar kenikmatan bahkan dapat membuatnya sampai terjerumus ke dalam lembah kebejatan moral, kalau dia terlalu terbawa arus negatifnya.\n\nSebagai kekasih, Babi yang jujur mencintai dengan segenap hatinya. Dia sangat perhatian terhadapat kebutuhan orang lain dan tak tahu bagaimana menyembunyikan perasaannya. Dalam petualangan asmara, baik warga Babi yang laki-laki maupun perempuan cenderung mengakhirinya sebagai pihak yang terluka. Dia sulit untuk melupakan seseorang yang pernah ia cintai, dan sanggup bertepuk sebelah tangan sampai bertahun-tahun. Bisa dikatakan, kelemahan utama warga shio ini adalah ketidaksanggupannya buat berkata Tidak dengan tegas terhadap dirinya sendiri, keluarganya maupun teman-temannya. Seandainya dia mampu menahan keinginannya untuk berbuat terlau banyak bagi orang lain dan untuk tidak menjanjikan sesuatu yang melebihi kemampuannya, maka kesulitannya akan sangat berkurang."
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
