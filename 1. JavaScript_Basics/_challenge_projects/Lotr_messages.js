const collectiveMessages = {
    Character: [
        "Frodo Baggins",
        "Gandalf the Grey",
        "Aragorn",
        "Legolas",
        "Gimli",
        "Gollum",
        "Samwise Gamgee",
        "Galadriel",
        "Boromir"
    ],
    motivational_speak: {
        "Frodo Baggins": [
            "Even the smallest person can change the course of the future.",
            "The journey is long, but every step you take makes a difference.",
            "You may be weary, but you are not defeated. Keep moving forward.",
            "Do not give up, the light of hope shines even in the darkest of times."
        ],
        "Gandalf the Grey": [
            "All we have to decide is what to do with the time that is given us.",
            "In the darkest of moments, light will always find a way.",
            "There is no such thing as fate. We shape our own destiny.",
            "Do not despair. Even the smallest act of kindness can change the world."
        ],
        "Aragorn": [
            "There is always hope, even when it seems all is lost.",
            "A leader is not one who leads by fear, but by the strength of their heart.",
            "The strength of a man lies not in his sword, but in his courage to fight for what is right.",
            "The road ahead is difficult, but together we shall face it."
        ],
        "Legolas": [
            "The path of the brave is never easy, but it is always worth it.",
            "Keep your eyes on the horizon, and you will find your way.",
            "Even in the deepest shadows, there is always light to guide you.",
            "Do not fear the unknown, for it is in the unknown that we find our greatest strength."
        ],
        "Gimli": [
            "The world is full of dangers, but with courage, we can face them.",
            "Strength comes not from the body, but from the will to keep going.",
            "Even the hardest battles can be won with loyalty and friendship.",
            "Stand tall, for your heart is mightier than any weapon."
        ],
        "Gollum": [
            "The past may haunt you, but it does not define you.",
            "You must overcome your inner darkness to find your true strength.",
            "The path to redemption is long, but it starts with the first step.",
            "You are not lost, there is always a way forward, no matter how dark it seems."
        ],
        "Samwise Gamgee": [
            "There’s some good in this world, Mr. Frodo, and it’s worth fighting for.",
            "You can carry the weight of the world, as long as you never give up.",
            "Every little step forward counts, no matter how small.",
            "When the world seems bleak, remember that courage comes from within."
        ],
        "Galadriel": [
            "The light of the stars may seem far away, but it is always within reach.",
            "Even in the darkest times, the seed of hope can blossom.",
            "Your actions, no matter how small, can change the fate of the world.",
            "Trust in your strength and in the goodness of your heart."
        ],
        "Boromir": [
            "The strength of the heart is what defines a true warrior.",
            "Even when the odds are against you, never surrender.",
            "Your courage will be your guide when all else fails.",
            "A true leader does not lead for power, but for the good of all."
        ]
    },
    goodbye_speak: {
        "Frodo Baggins": [
            "Farewell, brave soul, may your journey be as meaningful as the smallest step.",
            "Goodbye, fellow traveler. Your courage will remain in my heart.",
            "Take heart, friend, for even in parting, hope endures.",
            "May the road rise to meet you, as it did for me, with the strength to carry on."
        ],
        "Gandalf the Grey": [
            "Farewell, for now. We shall meet again when the time is right.",
            "May the stars guide you, and the light of wisdom ever shine on your path.",
            "Goodbye, my friend, and remember—time is ever in our hands.",
            "The road ahead is yours to take, with courage and wisdom as your guide."
        ],
        "Aragorn": [
            "May the wind carry you swiftly, and your heart remain steadfast.",
            "Farewell, noble friend, until the day we stand together again.",
            "Your courage will echo in the lands we leave behind. Farewell.",
            "So long, fellow warrior. Your strength will forever inspire."
        ],
        "Legolas": [
            "Farewell, and may the path of the brave always be clear.",
            "The forest whispers its thanks to you, friend. Until we meet again.",
            "Take your bow and walk with pride, knowing that light will always guide you.",
            "May your journey be long and your strength unshaken, farewell."
        ],
        "Gimli": [
            "May your axes always find their mark. Farewell, my friend.",
            "In every stone, there is strength. Take it with you on your journey. Farewell.",
            "Goodbye, and may your courage be as unyielding as the mountains.",
            "Farewell, noble heart, for your friendship has been the mightiest of weapons."
        ],
        "Gollum": [
            "Goodbye, precious friend... may you never be lost in the shadows.",
            "We part now, but our paths are intertwined. Farewell... for now.",
            "May the light guide you, precious, even as the darkness seeks to pull you away.",
            "Farewell, and remember, we all have a choice. Make yours wisely."
        ],
        "Samwise Gamgee": [
            "Goodbye, Mr. Frodo. I’ll carry you in my heart always.",
            "Even in parting, I’ll hold on to the hope that light will return.",
            "Farewell, and remember, there’s always good in the world, no matter the odds.",
            "Goodbye, friend, and know that my heart will always be with you."
        ],
        "Galadriel": [
            "Farewell, and may the light of the stars guide your journey.",
            "Goodbye, friend. Your strength shall be the light in the dark places.",
            "Farewell, and remember—hope shines brightest when the night is darkest.",
            "May your journey be as eternal as the stars themselves. Farewell."
        ],
        "Boromir": [
            "Farewell, friend. Your courage is an example to all.",
            "The road before us is long, but we shall meet again, in time.",
            "Goodbye, warrior. Your strength will never be forgotten.",
            "May your path be noble, and your heart ever steadfast. Farewell."
        ]
    }
};

function generateMessage() {
    const randomCharacter = collectiveMessages.Character[Math.floor(Math.random() * collectiveMessages.Character.length)];
    const randomMotivationalSpeech = collectiveMessages.motivational_speak[randomCharacter][Math.floor(Math.random() * collectiveMessages.motivational_speak[randomCharacter].length)];
    const randomGoodbye = collectiveMessages.goodbye_speak[randomCharacter][Math.floor(Math.random() * collectiveMessages.goodbye_speak[randomCharacter].length)];

    console.log(`${randomCharacter} says: "${randomMotivationalSpeech}"`);
    console.log(`${randomCharacter} bids farewell: "${randomGoodbye}"`);
}

generateMessage();
