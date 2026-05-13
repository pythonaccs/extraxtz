const topics = document.querySelectorAll(".topic");
const themeBtn = document.getElementById("themeBtn");
const searchInput = document.getElementById("searchInput");

const randomVerseBtn = document.getElementById("randomVerseBtn");
const verseText = document.querySelector(".daily .verse");
const verseReference = document.querySelector(".daily span");

/* ACCORDION */

topics.forEach(topic => {
  const button = topic.querySelector(".topic-btn");

  button.addEventListener("click", () => {
    topic.classList.toggle("active");
  });
});

/* THEME */

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  themeBtn.textContent = document.body.classList.contains("light")
    ? "Dark"
    : "Light";
});

/* SEARCH */

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  topics.forEach(topic => {
    const text = topic.innerText.toLowerCase();
    topic.style.display = text.includes(value) ? "block" : "none";
  });
});

/* DAILY VERSES */

const verses = [
  {
    text: "“The LORD is my shepherd; I shall not want.”",
    reference: "Psalm 23:1"
  },
  {
    text: "“I can do all things through Christ which strengtheneth me.”",
    reference: "Philippians 4:13"
  },
  {
    text: "“Fear thou not; for I am with thee.”",
    reference: "Isaiah 41:10"
  },
  {
    text: "“Be still, and know that I am God.”",
    reference: "Psalm 46:10"
  },
  {
    text: "“Submit yourselves therefore to God. Resist the devil, and he will flee from you.”",
    reference: "James 4:7"
  },
  {
    text: "“The joy of the LORD is your strength.”",
    reference: "Nehemiah 8:10"
  },
  {
    text: "“Create in me a clean heart, O God; and renew a right spirit within me.”",
    reference: "Psalm 51:10"
  },
  {
    text: "“Cast thy burden upon the LORD, and he shall sustain thee.”",
    reference: "Psalm 55:22"
  },
  {
    text: "“Trust in the LORD with all thine heart; and lean not unto thine own understanding.”",
    reference: "Proverbs 3:5"
  },
  {
    text: "“In all thy ways acknowledge him, and he shall direct thy paths.”",
    reference: "Proverbs 3:6"
  },
  {
    text: "“The LORD is my light and my salvation; whom shall I fear?”",
    reference: "Psalm 27:1"
  },
  {
    text: "“The LORD is nigh unto them that are of a broken heart.”",
    reference: "Psalm 34:18"
  },
  {
    text: "“Delight thyself also in the LORD; and he shall give thee the desires of thine heart.”",
    reference: "Psalm 37:4"
  },
  {
    text: "“Wait on the LORD: be of good courage, and he shall strengthen thine heart.”",
    reference: "Psalm 27:14"
  },
  {
    text: "“Thy word is a lamp unto my feet, and a light unto my path.”",
    reference: "Psalm 119:105"
  },
  {
    text: "“This is the day which the LORD hath made; we will rejoice and be glad in it.”",
    reference: "Psalm 118:24"
  },
  {
    text: "“Come unto me, all ye that labour and are heavy laden, and I will give you rest.”",
    reference: "Matthew 11:28"
  },
  {
    text: "“Blessed are the pure in heart: for they shall see God.”",
    reference: "Matthew 5:8"
  },
  {
    text: "“Seek ye first the kingdom of God, and his righteousness.”",
    reference: "Matthew 6:33"
  },
  {
    text: "“With God all things are possible.”",
    reference: "Matthew 19:26"
  },
  {
    text: "“For God so loved the world, that he gave his only begotten Son.”",
    reference: "John 3:16"
  },
  {
    text: "“If the Son therefore shall make you free, ye shall be free indeed.”",
    reference: "John 8:36"
  },
  {
    text: "“I am the way, the truth, and the life.”",
    reference: "John 14:6"
  },
  {
    text: "“Peace I leave with you, my peace I give unto you.”",
    reference: "John 14:27"
  },
  {
    text: "“There is therefore now no condemnation to them which are in Christ Jesus.”",
    reference: "Romans 8:1"
  },
  {
    text: "“To be spiritually minded is life and peace.”",
    reference: "Romans 8:6"
  },
  {
    text: "“If God be for us, who can be against us?”",
    reference: "Romans 8:31"
  },
  {
    text: "“Be not overcome of evil, but overcome evil with good.”",
    reference: "Romans 12:21"
  },
  {
    text: "“God is faithful, who will not suffer you to be tempted above that ye are able.”",
    reference: "1 Corinthians 10:13"
  },
  {
    text: "“For we walk by faith, not by sight.”",
    reference: "2 Corinthians 5:7"
  },
  {
    text: "“If any man be in Christ, he is a new creature.”",
    reference: "2 Corinthians 5:17"
  },
  {
    text: "“My grace is sufficient for thee: for my strength is made perfect in weakness.”",
    reference: "2 Corinthians 12:9"
  },
  {
    text: "“Stand fast therefore in the liberty wherewith Christ hath made us free.”",
    reference: "Galatians 5:1"
  },
  {
    text: "“Be ye angry, and sin not: let not the sun go down upon your wrath.”",
    reference: "Ephesians 4:26"
  },
  {
    text: "“Neither give place to the devil.”",
    reference: "Ephesians 4:27"
  },
  {
    text: "“Put on the whole armour of God.”",
    reference: "Ephesians 6:11"
  },
  {
    text: "“Whatsoever things are true, honest, just, pure, lovely… think on these things.”",
    reference: "Philippians 4:8"
  },
  {
    text: "“Be careful for nothing; but in every thing by prayer and supplication… let your requests be made known unto God.”",
    reference: "Philippians 4:6"
  },
  {
    text: "“The peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.”",
    reference: "Philippians 4:7"
  },
  {
    text: "“Set your affection on things above, not on things on the earth.”",
    reference: "Colossians 3:2"
  },
  {
    text: "“For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.”",
    reference: "2 Timothy 1:7"
  },
  {
    text: "“Draw nigh to God, and he will draw nigh to you.”",
    reference: "James 4:8"
  },
  {
    text: "“Humble yourselves in the sight of the Lord, and he shall lift you up.”",
    reference: "James 4:10"
  },
  {
    text: "“Casting all your care upon him; for he careth for you.”",
    reference: "1 Peter 5:7"
  },
  {
    text: "“Be sober, be vigilant; because your adversary the devil… walketh about, seeking whom he may devour.”",
    reference: "1 Peter 5:8"
  },
  {
    text: "“If we confess our sins, he is faithful and just to forgive us our sins.”",
    reference: "1 John 1:9"
  },
  {
    text: "“Greater is he that is in you, than he that is in the world.”",
    reference: "1 John 4:4"
  },
  {
    text: "“The LORD shall fight for you, and ye shall hold your peace.”",
    reference: "Exodus 14:14"
  },
  {
    text: "“As for me and my house, we will serve the LORD.”",
    reference: "Joshua 24:15"
  },
  {
    text: "“The name of the LORD is a strong tower: the righteous runneth into it, and is safe.”",
    reference: "Proverbs 18:10"
  },
  {
    text: "“A soft answer turneth away wrath: but grievous words stir up anger.”",
    reference: "Proverbs 15:1"
  },
  {
    text: "“Pride goeth before destruction, and an haughty spirit before a fall.”",
    reference: "Proverbs 16:18"
  }
];

/* LOAD VERSE OF THE DAY */

function loadVerseOfTheDay() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const todaysVerse = verses[dayOfYear % verses.length];

  verseText.textContent = todaysVerse.text;
  verseReference.textContent = todaysVerse.reference;
}

/* RANDOM VERSE BUTTON */

randomVerseBtn.addEventListener("click", () => {
  const random = verses[Math.floor(Math.random() * verses.length)];

  verseText.textContent = random.text;
  verseReference.textContent = random.reference;
});

/* RUN WHEN PAGE LOADS */

loadVerseOfTheDay();
