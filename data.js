/**
 * CHAPTER US — OUR LITTLE UNIVERSE
 * Central Content, Media & Story Data Store
 */

const UniverseData = {
  // Confirmed anniversary date for friendship counter (YYYY-MM-DD)
  friendshipStartDate: "2025-04-02",

  // Timeline Stories
  timeline: [
    {
      id: "ch-1",
      number: "Chapter 01",
      title: "Before We Became Best Friends",
      date: "Late 2024 / Early 2025",
      narrative:
        "Before we became best friends, we already knew each other. We talked, shared little everyday moments, and slowly discovered how naturally our vibes matched. We weren't strangers who suddenly collided — we were two familiar lives that gradually found comfort in each other's presence.",
      image: "assets/gallery/photo1.jpg",
      tag: "Familiar Strangers"
    },
    {
      id: "ch-2",
      number: "Chapter 02",
      title: "It Started With a Little Mango and a Lot of Conversations",
      date: "April 2, 2025",
      narrative:
        "A slice of raw mango tossed with salt and red chili. There was no theatrical spark or formal vow — just effortless laughter, genuine conversations, and an unspoken realization that sitting right here, being completely ourselves, was the easiest thing in the world.",
      image: "assets/gallery/photo2.jpg",
      tag: "The Spark"
    },
    {
      id: "ch-3",
      number: "Chapter 03",
      title: "When We Became Each Other's Comfort Zone",
      date: "Spring 2025",
      narrative:
        "The shift was subtle: we started turning to each other for the big highs, the quiet lows, and every trivial random thought in between. We learned that true closeness doesn't demand daily attendance or non-stop messages; even after days of silence, we pick up right where we left off.",
      image: "assets/gallery/photo3.jpg",
      tag: "Safe Harbor"
    },
    {
      id: "ch-4",
      number: "Chapter 04",
      title: "Best Friends: The Wedding & Beyond",
      date: "May 2025",
      narrative:
        "By the time of the wedding celebrations in May 2025, our bond was set in stone. Through the rush, the rituals, and the celebrations, having each other around felt like family. Certified best friends — two people who just click.",
      image: "assets/gallery/photo4.jpg",
      tag: "Family by Choice"
    },
    {
      id: "ch-5",
      number: "Chapter 05",
      title: "The Story That Is Still Being Written",
      date: "Present & Future",
      narrative:
        "From spontaneous inside jokes to quiet support on long days, the chapter isn't closed. It expands with every laugh, every shared track, and every new memory we carry forward.",
      image: "assets/gallery/photo5.jpg",
      tag: "Unwritten"
    }
  ],

  // Soundtrack items (Har song ke liye alag photo cover)
  soundtrack: [
    {
      id: "track-1",
      title: "Yaar Na Mile",
      artist: "The Masters",
      cover: "assets/gallery/photo6.jpg",
      src: "assets/audio/song2.mp3",
      externalUrl: "https://open.spotify.com",
      note: "Dukh hove sukh hove, tu hamesha naal khadeya hai — tere jeha yaar hor koi na mile."
    },
    {
      id: "track-2",
      title: "Sochan Tere Baare",
      artist: "Harjot Randhawa",
      cover: "assets/gallery/photo2.jpg",
      src: "assets/audio/song3.mp3",
      externalUrl: "https://open.spotify.com",
      note: "Pani de kinare baith ke bas teriyan gallan — khwab vich vi tu hi naal hove."
    },
    {
      id: "track-3",
      title: "Teriyan Yaadan",
      artist: "Prince Sandhu",
      cover: "assets/gallery/photo7.jpg",
      src: "assets/audio/song4.mp3",
      externalUrl: "https://open.spotify.com",
      note: "Pehle pyaar di pehli kahani wargi yaari, jo kade bhuli nahi jaa sakdi."
    },
    {
      id: "track-4",
      title: "Woh Noor",
      artist: "Harsh Gahlot",
      cover: "assets/gallery/photo8.jpg",
      src: "assets/audio/song6.mp3",
      externalUrl: "https://open.spotify.com",
      note: "Wo noor jo dekha chehre ka, hui roshan meri nigahein."
    },
    {
      id: "track-5",
      title: "Jadon Kol Tu Hovein",
      artist: "Prince Sandhu",
      cover: "assets/gallery/photo5.jpg",
      src: "assets/audio/song5.mp3",
      externalUrl: "https://open.spotify.com",
      note: "Jadon kol tu hovein, din change lagde ne te change ne halaat."
    },
    {
      id: "track-6",
      title: "Har Saah Naal",
      artist: "Prince Sandhu",
      cover: "assets/gallery/photo9.jpg",
      src: "assets/audio/song1.mp3",
      externalUrl: "https://open.spotify.com",
      note: "Subah te shaam, har mod te bas ek sachi dosti da sahara."
    }
  ],

  // Gallery Photos (Pure 14 photos bina kisi title ya caption ke)
  gallery: [
    { id: "photo-1", src: "assets/gallery/photo1.jpg" },
    { id: "photo-2", src: "assets/gallery/photo2.jpg" },
    { id: "photo-3", src: "assets/gallery/photo3.jpg" },
    { id: "photo-4", src: "assets/gallery/photo4.jpg" },
    { id: "photo-5", src: "assets/gallery/photo5.jpg" },
    { id: "photo-6", src: "assets/gallery/photo6.jpg" },
    { id: "photo-7", src: "assets/gallery/photo7.jpg" },
    { id: "photo-8", src: "assets/gallery/photo8.jpg" },
    { id: "photo-9", src: "assets/gallery/photo9.jpg" },
    { id: "photo-10", src: "assets/gallery/photo10.jpg" },
    { id: "photo-11", src: "assets/gallery/photo11.jpg" },
    { id: "photo-12", src: "assets/gallery/photo12.jpg" },
    { id: "photo-13", src: "assets/gallery/photo13.jpg" },
    { id: "photo-14", src: "assets/gallery/photo14.jpg" }
  ],

  // Untold Letters (Digital Envelopes)
  letters: [
    {
      id: "letter-1",
      tag: "Things I Want You to Know",
      title: "Family By Heart, Not Just By Chance",
      preview: "Some bonds are too special to be explained in words...",
      content: `Hey Awwlie,\n\nKuch rishte aise hote hain jinhe lafzon mein baandhna namumkin sa lagta hai, aur sach kahun toh humara bond unhi mein se ek hai.\n\nShayad main yeh roz-roz nahi keh pata, na hi har waqt jatata hoon, par dil se ek baat kehna chahta hoon—I care for you more than words could ever show. Aur yeh baat main us sabse pavitra aur sacche tareeqe se kehta hoon, jaise ek bhai apni behen ki hifazat aur khushi chahta hai. Tumhari muskurahat mere liye sach mein bohot maayine rakhti hai. Jab tum khush hoti ho toh sab theek lagta hai, aur jab tum kisi baat se pareshan ya udaas hoti ho, toh uska asar mujh par bhi utna hi padta hai. Meri har dua mein hamesha yahi rehta hai ki zindagi tumhe wo saari khushiyan aur sukoon de jiski tum haqdaar ho.\n\nShayad hum ek hi parivaar mein paida nahi huye the, par waqt ke kisi mod par, bina kisi shart ke, tum mere liye mera parivaar ban gayi. Zindagi chahe kitni bhi badal jaye, waqt chahe kitna bhi aage nikal jaye, main chahta hoon ki tum yeh hamesha yaad rakho—tumhare paas ek aisa bhai hai jo hamesha tumhari khushi ke liye khada rahega, jo bina kisi matlab ke tumhari fikar karta hai, aur jo aakhri waqt tak tumhe bas muskurate huye dekhna chahta hai.\n\nHumne bohot saare chhote-bade pal jiye hain, par yeh toh bas shuruat hai. Abhi bohot saari yaadein banna baaki hain, bohot saari baatein hona baaki hain, aur bohot saari nayi kahaniyan aana baaki hain.\n\nAlways here for you, no matter what.\n\n— Manthan`
    },
    {
      id: "letter-2",
      tag: "Open When You Need a Smile",
      title: "A Gentle Reminder of Your Strength",
      preview: "Whenever the world feels a little too loud...",
      content: `Hey Awwlie,\n\nJab bhi kabhi self-doubt ho ya lage ki cheezein thodi mushkil ho rahi hain, bas ek gehra saans lena. Tumhare andar ek aisi warmth aur strength hai jo aas-paas ke logo ko sukoon deti hai.\n\nKabhi mat bhoolna ki tum kitni resilient ho. Aur agar kabhi tumhara khud ka hausla thoda kam pad jaye, toh yaad rakhna ki tumhara bhai hamesha tumhare saath hai, tumhe remind karwane ke liye ki tum kitni special ho.\n\nKeep smiling — it suits you best.`
    },
    {
      id: "letter-3",
      tag: "A Little Reminder",
      title: "No Attendance Necessary",
      preview: "Even when life gets busy...",
      content: `Hey,\n\nBas ek chhota sa reminder: humari dosti kabhi sharton par nahi tiki. Humein roz baat karne ki ya lambe texts bhejte rehne ki zaroorat nahi padti. Chahe din nikal jayein humare apne routine mein, jis pal bhi hum baat karte hain, sab kuch wahi se shuru hota hai jahan chhuta tha.\n\nYeh sukoon aur bharosa bohot keemti hai.`
    },
    {
      id: "letter-4",
      tag: "For the Days You Feel Low",
      title: "You Never Walk Alone",
      preview: "When things get heavy...",
      content: `Awwlie,\n\nTumhe har waqt strong dikhne ki zaroorat nahi hai. Agar kabhi thak jao, ya bina wajah udaas lago, toh tum bina kisi jhijhak ke bol sakti ho.\n\nNo judgment, no unsolicited lectures — bas ek sunne wala dost aur bhai jo hamesha tumhari side khada rahega.`
    }
  ],

  // Private-safe Conversations (Zero Screenshot Exposure)
  conversations: [
    {
      id: "chat-1",
      title: "The Salt & Chili Mango Moment",
      date: "April 2, 2025",
      category: "The Beginning",
      description: "Ek aam sa din, kaccha aam, namak aur mirchi... aur baaton-baaton mein pata hi nahi chala kab ek ordinary din humari yaari ka sabse khoobsurat chapter ban gaya.",
      note: "Where the comfort zone actually started."
    },
    {
      id: "chat-2",
      title: "The Zero-Attendance Check-In",
      date: "Spontaneous",
      category: "Deep Bond",
      description: "Bina kisi formality ke dino baad ek doosre ka haal poochna, aur aage badh jana jaise hum kal hi mile the.",
      note: "True comfort needs no daily attendance."
    },
    {
      id: "chat-3",
      title: "Random Banter & Shared Laughter",
      date: "Everyday Us",
      category: "Inside Jokes",
      description: "Aisi baatein jo sirf hum dono samajh sakte hain, jahan bina pura sentence bole agla insaan baat samajh jaye.",
      note: "The little things only we get."
    }
  ],

  // Little Things Cards
  littleThings: [
    {
      badge: "The Nickname",
      title: "Awwlie",
      description: "A name reserved only for my best friend — affectionate, playful, and uniquely ours."
    },
    {
      badge: "The Space",
      title: "Our Comfort Zone",
      description: "Where vulnerabilities aren't judged, opinions are honest, and pretense is left at the door."
    },
    {
      badge: "The Rule",
      title: "Zero Attendance Required",
      description: "We can go days without talking and pick right back up without hesitation or guilt."
    },
    {
      badge: "The Bond",
      title: "Sibling-Like Loyalty",
      description: "An authentic, deeply grounded friendship that stands like family through thick and thin."
    },
    {
      badge: "The Vibe",
      title: "Home Is a Feeling",
      description: "Certain people don't just stay in your memories; they become a sanctuary your heart recognizes."
    }
  ]
};
