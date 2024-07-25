// Sliders
const slider1 = document.getElementById('value1');
const slider2 = document.getElementById('value2');
const slider3 = document.getElementById('value3');
const slider4 = document.getElementById('value4');

const display1 = document.getElementById('value1_display');
const display2 = document.getElementById('value2_display');
const display3 = document.getElementById('value3_display');
const display4 = document.getElementById('value4_display');

function updatePair(changedSlider, otherSlider, changedDisplay, otherDisplay, label1, label2) {
    const total = 100;
    const changedValue = parseInt(changedSlider.value);
    const remaining = total - changedValue;

    if (remaining >= 0) {
        otherSlider.value = remaining;
        changedDisplay.innerText = `${label1}: ${changedValue}`;
        otherDisplay.innerText = `${label2}: ${remaining}`;
    }
}

slider1.addEventListener('input', () => updatePair(slider1, slider2, display1, display2, 'Strength', 'Speed'));
slider2.addEventListener('input', () => updatePair(slider2, slider1, display2, display1, 'Speed', 'Strength'));
slider3.addEventListener('input', () => updatePair(slider3, slider4, display3, display4, 'Charisma', 'Intelligence'));
slider4.addEventListener('input', () => updatePair(slider4, slider3, display4, display3, 'Intelligence', 'Charisma'));

// Initialize display values
display1.innerText = `Strength: ${slider1.value}`;
display2.innerText = `Speed: ${100 - slider1.value}`; // Correct initialization
display3.innerText = `Charisma: ${slider3.value}`;
display4.innerText = `Intelligence: ${100 - slider3.value}`; // Correct initialization


// Gender Buttons
const maleButton = document.getElementById('male_button');
const femaleButton = document.getElementById('female_button');
const iconic_sentence = document.getElementById('iconic_sentence');
let gender = Math.round(Math.random());

function selectGender(selectedGender) {
    gender = selectedGender === 'male' ? 0 : 1;
    console.log(gender)

    if (selectedGender === 'male') {
        maleButton.style.backgroundColor = '#4CAF50';
        femaleButton.style.backgroundColor = '';
    } else {
        maleButton.style.backgroundColor = '';
        femaleButton.style.backgroundColor = '#4CAF50';
    }
}

maleButton.addEventListener('click', () => selectGender('male'));
femaleButton.addEventListener('click', () => selectGender('female'));

// Navigation
const submitButton = document.getElementById('submit');
const prevButton = document.getElementById('prev');
const finalSubmitButton = document.getElementById('finalSubmit');
const playerSubmit = document.getElementById('playerSubmit');
const automatic_character = document.getElementById('automatic_character');
const logo_animated = document.getElementById('logo_animated');

let page = 1;

submitButton.addEventListener('click', () => {
    if (page == 1) {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
        prevButton.style.display = 'block';
        page = 2;
    } else {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
        prevButton.style.display = 'block';
        submitButton.style.display = 'none';
        finalSubmitButton.style.display = 'block';
        automatic_character.style.display = "none";
        page = 3;
    }
});

prevButton.addEventListener('click', () => {
    if (page == 2) {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page1').style.display = 'block';
        prevButton.style.display = 'none';
        automatic_character.style.display = "block";
        page = 1;
    } else {
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
        prevButton.style.display = 'block';
        submitButton.style.display = 'block';
        finalSubmitButton.style.display = 'none';
        automatic_character.style.display = "block";
        page = 2;
    }
});



// Changing Names
const name_input = document.getElementById('name');
const shuffle_button = document.getElementById('shuffle_button');

shuffle_button.addEventListener('click', () => {
    name_input.value = generateRandomName();
});

function generateRandomName() {
    const names = [
        "Aurelius Maximus",
        "Cassianus Brutus",
        "Domitian Corvus",
        "Fabianus Drusus",
        "Hadrianus Severus",
        "Julius Valerius",
        "Lucianus Quintillus",
        "Maximus Decimus",
        "Nero Fabius",
        "Ovidius Regulus",
        "Petronius Marcellus",
        "Quintilianus Varro",
        "Romanus Scipio",
        "Silvanus Vitus",
        "Tacitus Gallus",
        "Urbanus Calvus",
        "Valerianus Livius",
        "Xanthus Helvius",
        "Zenon Flavius",
        "Aemilianus Probus",
        "Brutus Albinus",
        "Caius Rufus",
        "Decimus Piso",
        "Equitius Sulla",
        "Fuscus Tullius",
        "Gallus Cato",
        "Horatius Lepidus",
        "Ignatius Rufinus",
        "Justinianus Seneca",
        "Livius Aurelian",
        "Marius Agrippa",
        "Nautius Salvius",
        "Octavianus Varian",
        "Pompeius Magnus",
        "Quinctius Nerva",
        "Rutilius Praetorius",
        "Sextus Carbo",
        "Tiberius Capito",
        "Ulpius Sabinus",
        "Vergilius Pollio",
        "Amulius Corvinus",
        "Balbinus Vespasian",
        "Caelus Maro",
        "Drusus Verrucosus",
        "Egnatius Macrinus",
        "Fabius Verus",
        "Gnaeus Aemilius",
        "Helvius Vinicius",
        "Iovinus Pacuvius",
        "Jovius Lentulus",
        "Lactantius Rufius",
        "Marcellus Albus",
        "Numerius Terentius",
        "Opimius Rubrius",
        "Porcius Mamercus",
        "Quirinius Plinius",
        "Rubellius Caepio",
        "Servius Curio",
        "Terentius Festus",
        "Umbrianus Domitianus",
        "Vopiscus Lucretius",
        "Aventinus Papirius",
        "Bellicus Senecio",
        "Calvus Orontius",
        "Dalmatius Priscus",
        "Emilianus Frontinus",
        "Firmus Trebonius",
        "Gaius Appius",
        "Heraclianus Falco",
        "Innocentius Denter",
        "Jovinianus Oppius",
        "Licinianus Mucius",
        "Mansuetus Rutilianus",
        "Norbanus Didius",
        "Orontius Trogus",
        "Proculus Spurinna",
        "Quadratus Statilius",
        "Remus Vibius",
        "Sabinus Allius",
        "Titianus Bibulus",
        "Vettius Crispus",
        "Agrippa Spurinna",
        "Bellator Norbanus",
        "Celsus Volusius",
        "Dacius Afer",
        "Epaphroditus Ursinus",
        "Fulgentius Plancius",
        "Gallienus Pomponius",
        "Herminius Fundanus",
        "Iulianus Scaurus",
        "Jovius Gallus",
        "Lentulus Balbus",
        "Minervius Gallienus",
        "Novatianus Aufidius",
        "Orbilius Titurius",
        "Piso Catullus",
        "Quintus Allectus",
        "Regulus Fundilius",
        "Silanus Manlius",
        "Tullius Torquatus",
        "Vulcanus Quintillius",
        "Albinius Maxentius",
        "Bacchus Severus",
        "Cato Varian",
        "Decimus Trajan",
        "Egnatius Brutus",
        "Faustus Hadrianus",
        "Germanicus Plinius",
        "Horatius Licinius",
        "Ignatius Urbanus",
        "Julius Cicero",
        "Kassianus Valerian",
        "Lucullus Drusus",
        "Marcus Publius",
        "Nero Tacitus",
        "Octavianus Fabian",
        "Pius Aurelius",
        "Quintilianus Carinus",
        "Rufinus Maximus",
        "Sextus Lucian",
        "Tiberius Fuscus",
        "Ursinus Decimus",
        "Vespasianus Caelus",
        "Xanthus Cornelius",
        "Zenon Fabius",
        "Aemilius Varro",
        "Balbinus Magnus",
        "Cassius Paulus",
        "Drusus Domitian",
        "Emilianus Dacius",
        "Fabricius Gallus",
        "Gratianus Marius",
        "Herennius Flavian",
        "Iovinus Silvanus",
        "Jovinus Celsus",
        "Livius Rufinus",
        "Mansuetus Appius",
        "Nerva Vitellius",
        "Orontius Macrinus",
        "Piso Falco",
        "Quirinius Galerius",
        "Rutilius Helvidius",
        "Servius Horatian",
        "Tullius Gnaeus",
        "Urbanus Aquila",
        "Valentinus Balbus",
        "Xenophon Corvinus",
        "Aurelianus Ulpius",
        "Blaesius Maximinus",
        "Crispus Norbanus",
        "Domitianus Serranus",
        "Euphranor Octavian",
        "Firmus Helvius",
        "Gracchus Priscus",
        "Herminius Claudian",
        "Iulianus Brutus",
        "Jovianus Gaius",
        "Licinius Seneca",
        "Magnus Corvus",
        "Nautius Valens",
        "Ovidius Albinus",
        "Palladius Marcellus",
        "Quintilianus Gratian",
        "Remigius Cicero",
        "Septimus Flavius",
        "Tertullianus Urbanus",
        "Valerius Cornutus",
        "Vitruvius Probus",
        "Aventinus Calvus",
        "Bacchus Cicero",
        "Celerinus Rufus",
        "Decimus Petronius",
        "Egnatius Scipio",
        "Fabius Pulcher",
        "Gallus Crassus",
        "Heraclius Rufinus",
        "Iovinus Manlius",
        "Justinian Varro",
        "Lucianus Magnus",
        "Marius Paulus",
        "Nerva Scaurus",
        "Opimius Appius",
        "Porcius Lepidus",
        "Quadratus Maro",
        "Rufius Silvanus",
        "Servilius Torquatus",
        "Tranquillus Didius",
        "Urbanus Sallustius",
        "Verus Flavian",
        "Xanthus Maximinus",
        "Zenon Corvinus",
        "Annius Severus",
        "Blaesus Valerian",
        "Cicero Nerva",
        "Decimus Scipio",
        "Equitius Drusus",
        "Fulgentius Ovidius",
        "Gratianus Helvidius",
        "Heraclianus Antonius",
        "Iulianus Regulus",
        "Justinianus Aquilius",
        "Lucullus Drusus",
        "Maxentius Albinus",
        "Novatianus Seneca",
        "Piso Calpurnius",
        "Quadratus Cicero",
        "Remus Trajan",
        "Sabinus Corvinus",
        "Tiberius Varian",
        "Urbanus Gallus",
        "Valens Octavianus",
        "Vulcanius Regulus",
        "Aventinus Norbanus",
        "Balbinus Pius",
        "Celsus Galerius",
        "Drusus Vitellius",
        "Euphranor Scipio",
        "Firmus Celsus",
        "Gallienus Magnus",
        "Herennius Trajan",
        "Iovinus Helvidius",
        "Jovianus Vitellius",
        "Lucullus Priscus",
        "Manlius Corvinus",
        "Nerva Appius",
        "Opimius Trajan",
        "Piso Fabius",
        "Quintilianus Pulcher",
        "Remigius Octavian",
        "Silanus Maximinus",
        "Tacitus Silvanus",
        "Urbanus Valens",
        "Vitruvius Scaurus",
        "Xanthus Rufinus",
        "Zeno Urbanus",
        "Aventinus Gallus",
        "Balbinus Maxentius",
        "Cassius Helvidius",
        "Decimus Galerius",
        "Equitius Crassus",
        "Fabius Severus",
        "Gratianus Appius",
        "Heraclius Regulus",
        "Iovinus Didius",
        "Jovianus Priscus",
        "Licinius Maximus",
        "Manlius Pulcher",
        "Novatianus Cicero",
        "Piso Magnus",
        "Quadratus Regulus",
        "Remus Trajan",
        "Sabinus Drusus",
        "Tiberius Scaurus",
        "Urbanus Helvidius",
        "Valens Regulus",
        "Vitruvius Maximus",
        "Xanthus Scipio",
        "Zeno Severus",
        "Aventinus Helvidius",
        "Balbinus Gallus",
        "Cassius Drusus",
        "Decimus Severus",
        "Equitius Maximus",
        "Fabius Cicero",
        "Gratianus Trajan",
        "Heraclius Maximus",
        "Iovinus Priscus",
        "Jovianus Gallus",
        "Licinius Severus",
        "Manlius Severus",
        "Novatianus Priscus",
        "Piso Gallus",
        "Quadratus Severus",
        "Remus Severus",
        "Sabinus Gallus",
        "Tiberius Severus",
        "Urbanus Severus",
        "Valens Severus",
        "Vitruvius Severus",
        "Xanthus Severus",
        "Zeno Severus",
        "Aventinus Severus",
        "Balbinus Severus",
        "Cassius Severus",
        "Decimus Severus",
        "Equitius Severus",
        "Fabius Severus",
        "Gratianus Severus",
        "Heraclius Severus",
        "Iovinus Severus",
        "Jovianus Severus",
        "Licinius Severus",
        "Manlius Severus",
        "Novatianus Severus",
        "Piso Severus",
        "Quadratus Severus",
        "Remus Severus",
        "Sabinus Severus",
        "Tiberius Severus",
        "Urbanus Severus",
        "Valens Severus",
        "Vitruvius Severus",
        "Xanthus Severus",
        "Zeno Severus"
    ];
    return names[Math.floor(Math.random() * names.length)];
}

// Cards (Suggestions)
descriptionTextarea = document.getElementById('description');
// Cards (Suggestions)
const actual_suggestions_container = document.getElementById('actual_suggestions_container');

const cardTemplate = `
    <div id="card-{id}" class="card suggestions" style="margin-bottom:10px">
        <span class="yes-no-buttons">
            <button class="yes-button">✅</button>
            <button class="no-button">❌</button>
        </span>
        <h3 class="suggestions_header">Suggestion</h3>
        <p>{content}</p>
    </div>
`;

function generateRandomCard() {
    const { cardId, content } = generateRandomCardContent();
    return cardTemplate.replace('{id}', cardId).replace('{content}', content);
}

function generateRandomCardContent() {
    const cardId = Math.floor(Math.random() * 1000);
    const contentList = [
        "Your family is renowned for its olive oil production, instilling in you a deep connection to the land.",
        "You are born into the legacy of a famed gladiator who won his freedom, inheriting both strength and violence.",
        "Your family has trained with the best rhetoricians in Rome, giving you a heritage of sharp minds and making you quite loquacious.",
        "Your family possesses an uncanny ability to predict the weather, a gift that will make you beloved among farmers and sailors.",
        "You come from a lineage known for exquisite mosaics, passing down a tradition of beauty and patience.",
        "Raised by a retired centurion, your upbringing instills a sense of duty and strategic thinking.",
        "You descend from one of Rome's founders, carrying the weight of history and a legacy to uphold.",
        "Your family has mastered the art of negotiation, navigating the fine line between diplomacy and manipulation.",
        "Inheriting knowledge of herbs and remedies, you are set to become a sought-after healer, blending science and mysticism.",
        "Your family is famous for throwing extravagant feasts, embedding a sense of hospitality and excess in your blood.",
        "Owning one of the largest vineyards in Italy, your heritage includes a deep knowledge of wine and its secrets.",
        "Your family has spent years studying the stars, guiding you with the wisdom of the night sky.",
        "Known for quick wit and humor, your family lineage promises a life filled with joy and deeper thoughts.",
        "You inherit a mysterious amulet said to protect you, offering both comfort and superstition.",
        "Your family has an innate talent for architecture, passing down the ability to blend functionality with artistry.",
        "Known for their ability to mimic voices, your family gives you the skills of a popular entertainer.",
        "Trained in the arts of espionage, your heritage involves a life of shadows and secrets.",
        "Your family's strategic minds make you a natural leader, always thinking several steps ahead.",
        "Surviving numerous assassination attempts, your lineage is marked by resilience and caution.",
        "Your family is known for fairness and wisdom, promising a future of justice in a turbulent world.",
        "Owning a renowned school for gladiators, your upbringing is steeped in strength and skill.",
        "As a master blacksmith family, you inherit the ability to create both beautiful and deadly weapons.",
        "Blessed by the gods with extraordinary singing voices, your family promises enchantment and allure.",
        "With a long history in the Senate, your family infuses politics and power into your future.",
        "Extensive travels by your family bring you a heritage of exotic goods and multicultural stories.",
        "Exceptional cooking skills are a family tradition, turning meals into memorable experiences.",
        "A keen sense of justice runs in your family, guiding you to mediate disputes with law and empathy.",
        "Your family's prowess in chariot racing gives you a thrilling legacy of speed and danger.",
        "An uncanny ability to read people is a family trait, allowing you to see through facades to true intentions.",
        "Tied to a sacred relic, your family's legacy instills faith and mystery into your life.",
        "Expertise in Roman law is a family tradition, guiding you as a guardian of justice.",
        "Charisma and charm are hallmarks of your family, ensuring a magnetic presence in any room.",
        "Your family holds a secret map to hidden treasures, promising a life of adventure and discovery.",
        "Musical talent with the lyre is a family legacy, making you a beloved performer.",
        "Your family is renowned for unyielding honesty, setting you as a beacon of integrity.",
        "Tactical brilliance is in your family's blood, guiding you to military victories and strategic successes.",
        "A deep understanding of Roman mythology is a family trait, ensuring you keep ancient tales alive.",
        "Possessing a rare book of spells is a family heritage, granting you knowledge and power.",
        "Your family excels in training and handling horses, promising leadership and connection with animals.",
        "Your family estate is famed for its beautiful gardens, providing you a sanctuary of peace and beauty.",
        "Known for relentless pursuit of knowledge, your family instills in you a desire for hidden truths.",
        "A secret potion recipe runs in your family, blending science and alchemy in your future.",
        "Architectural innovations are a family legacy, promising a future of creativity and controversy.",
        "Exceptional memory is a family trait, allowing you to recall even the smallest details.",
        "Crafting beautiful jewelry is a family tradition, promising a life of elegance and intricacy.",
        "Your family has a long tradition of being oracles and seers, granting you a heritage of visionaries.",
        "Strategic minds run in your family, guiding you to see the bigger picture.",
        "Inventions that improve daily life are a family tradition, blending practicality and innovation.",
        "A charm bracelet believed to bring good luck is a family heirloom, offering hope and superstition.",
        "Your family's wealth comes from successful trade in exotic spices, ensuring a legacy of commerce and exploration.",
        "Faith in the gods is a family trait, inspiring those around you with spiritual strength.",
        "Diplomatic skills are a family tradition, guiding you to prevent conflicts and maintain peace.",
        "Excellence in craftsmanship is synonymous with your family name, ensuring a legacy of skill and pride.",
        "A rare talent for storytelling runs in your family, captivating audiences with engaging tales.",
        "Exploration and discovery are family traits, ensuring you a future as a pioneer.",
        "Natural talent for healing is a family heritage, blending science and magic in your future.",
        "Renowned for baking, your family promises a tradition of taste and warmth.",
        "A deep connection with animals is a family trait, allowing you to understand their needs and instincts.",
        "Celebrated poetry is a family tradition, capturing the human experience through verse.",
        "Uncovering hidden truths is a family trait, guiding you as a seeker of mysteries and revelations.",
        "Your family estate houses rare and ancient texts, providing a treasure trove of knowledge.",
        "A ring that grants persuasion is a family heirloom, offering influence and charm.",
        "Your family's Strategic minds have helped win battles for Rome, ensuring a future of warfare and diplomacy.",
        "Inspiring and leading others is a family trait, promising you a natural-born leadership.",
        "Producing fine wines is a family tradition, ensuring a legacy of taste and tradition.",
        "A master of disguise runs in your family, promising you a future of blending into any situation.",
        "Your family name is revered for contributions to Roman architecture, ensuring a legacy of building.",
        "Musical talent is a family trait, promising you a life of celebrated performances.",
        "Your family estate is famous for its gladiator training school, ensuring strength and skill in your future.",
        "Fairness and justice are family traditions, guiding you to balance law and compassion.",
        "Strategic brilliance runs in your family, ensuring key roles in Rome's victories.",
        "Deep understanding of herbalism is a family trait, creating potions that heal and enhance.",
        "Oratory skills are a family tradition, promising you a lineage of voices that move crowds.",
        "Exceptional skills in combat are a family trait, ensuring a warrior's heart.",
        "Wealth from mining operations is a family tradition, promising industry and perseverance.",
        "An eye for art is a family trait, curating valuable collections and appreciating beauty.",
        "Your family estate is renowned for serene gardens, providing a haven of tranquility.",
        "Talent for reading the stars is a family heritage, ensuring a stargazer's insights.",
        "Excellence in engineering is a family tradition, ensuring a lineage of inventors.",
        "A rare scroll of ancient knowledge is a family heirloom, providing a repository of wisdom.",
        "Strategic insights have expanded the empire's borders, promising a visionary future.",
        "Appreciation for philosophy is a family trait, ensuring engaging debates and deep thinking.",
        "Protecting a sacred temple is a family legacy, guiding you as a guardian of faith.",
        "Finding hidden treasures is a family trait, ensuring a future as a seeker of the lost.",
        "Wealth from a trade network is a family tradition, ensuring a legacy of commerce.",
        "Mastery of culinary arts is a family tradition, creating exquisite dishes and renowned chef status.",
        "Horse breeding is a family heritage, ensuring a lineage of equestrians.",
        "Mending and healing is a family trait, promising respect as a bringer of health.",
        "Revered for literature is a family tradition, ensuring a lineage of writers.",
        "Crafting beautiful pottery is a family trait, creating delicate art and promising a creator's life.",
        "Navigating political intrigues is a family trait, ensuring strategic roles in power.",
        "Understanding rituals is a family tradition, ensuring a keeper of ancient ceremonies.",
        "Wealth from a textile business is a family legacy, promising fabric and fashion expertise.",
        "Influencing fashion and design is a family trait, ensuring a trendsetter's future.",
        "Exotic animal collection is a family heritage, ensuring a legacy of the wild.",
        "Negotiation skills are a family trait, brokering important deals and guiding as a skilled diplomat.",
        "Bravery and valor are synonymous with your family name, ensuring a lineage of heroes.",
        "Your family passed onto you a rare artifact, offering wisdom and clarity as a relic of insight.",
        "Strategic advice is a family tradition, ensuring key roles in guiding leaders.",
        "You are a slave sold from the invasion of Carthage.",
        "You enjoy good company and lavish parties.",
        "You are wanted by all of Rome's women.",
        "You enjoy Greek culture and philosophy.",
        "Your family runs a bustling marketplace in Rome.",
        "You come from a lineage of gladiators.",
        "Your family is known for their culinary skills.",
        "You often feel isolated despite being surrounded by people. You only value strong relationships.",
        "Your family is heavily involved in Roman politics.",
        "You have a talent for music and play the lyre beautifully.",
        "Your family is originally from Egypt.",
        "You are known for your quick wit and sharp tongue.",
        "Your family breeds and trains horses.",
        "You are known for your lavish and extravagant lifestyle.",
        "Your family is wealthy and influential in Rome.",
        "You prefer solitude and the peace of nature.",
        "Your family owns a vineyard in the countryside.",
        "You have a keen interest in astronomy and the stars.",
        "Your family is deeply religious and devout.",
        "You are an excellent storyteller and captivate your audience.",
        "Your family is originally from Gaul.",
        "You are a talented painter and artist.",
        "Your family owns several slaves.",
        "You have a love for books and ancient texts.",
        "You have a natural talent for public speaking.",
        "Your family has a dark secret that haunts them.",
        "You are fascinated by the mysteries of the human mind.",
        "You have a passion for hunting and the outdoors.",
        "Your family is originally from Germania.",
        "You enjoy the thrill of chariot racing.",
        "Your family is known for their architectural achievements.",
        "You are skilled in crafting intricate jewelry.",
        "Your family runs a successful business in Rome.",
        "You have a reputation for being a skilled fighter.",
        "Your family is known for their intelligence and wisdom.",
        "You are a master of disguise and deception.",
        "Your family has a history of rebellion against authority.",
        "You are fascinated by the history and culture of Rome.",
        "Your family owns a large estate outside the city.",
        "You are known for your hospitality and generosity.",
        "Your family has a collection of rare and valuable artifacts.",
        "You enjoy the art of fencing and swordsmanship.",
        "You are a skilled healer and know many herbal remedies.",
        "You have a love for the sea and sailing.",
        "Your family is originally from Hispania.",
        "You are known for your charming and persuasive nature.",
        "Your family is wealthy but often faces envy and resentment.",
        "You enjoy the company of intellectuals and philosophers.",
        "Your family has a history of political intrigue.",
        "You are known for your physical strength and endurance.",
        "Your family is involved in the textile industry.",
        "Your family has a long history of legal expertise.",
        "You have a passion for gardening and botany.",
        "You are known for your loyalty and dedication.",
        "You have a natural talent for acting and drama.",
        "Your family is known for their hospitality and feasts.",
        "You are skilled in the use of a bow and arrow.",
        "You enjoy the thrill of gambling and games of chance.",
        "Your family is involved in the building and construction industry.",
        "You are skilled in the art of pottery and ceramics.",
        "You have a talent for weaving and textiles.",
        "Your family is involved in the production of olive oil.",
        "You have a fascination with ancient myths and legends.",
        "Your family has a strong tradition of education and scholarship.",
        "You are known for your musical talent and play multiple instruments.",
        "You have a passion for exploring new lands and cultures.",
        "Your family is known for their skilled craftsmanship.",
        "You enjoy the peace and tranquility of rural life.",
        "Your family is involved in the trade of exotic goods.",
        "You have a deep respect for the traditions and customs of Rome.",
        "Your family has a tradition of public service and leadership.",
        "You enjoy the excitement and challenge of political debates.",
        "You have a talent for storytelling and captivating audiences."
    ];
    const randomIndex = Math.floor(Math.random() * contentList.length);
    const content = contentList.splice(randomIndex, 1)[0];
    return { cardId, content };
}

function yes_card(cardId, content) {
    const descriptionTextarea = document.getElementById('description');
    const card = document.getElementById(`card-${cardId}`);
    if (card) {
        if (descriptionTextarea.value.length > 1000) {
            alert('Character limit exceeded!');
            descriptionTextarea.value = descriptionTextarea.value.slice(0, 1000);
        } else {
            if (descriptionTextarea.value === '') {
                descriptionTextarea.value += card.querySelector('p').innerText;
            } else if (!descriptionTextarea.value.endsWith('\n')) {
                descriptionTextarea.value += '\n' + card.querySelector('p').innerText;
            } else {
                descriptionTextarea.value += card.querySelector('p').innerText;
            }
            removeCard(cardId);
        }
    }
}

function no_card(cardId) {
    removeCard(cardId);
}

function removeCard(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    if (card) {
        card.style.opacity = 0;
        setTimeout(() => {
            card.remove();
            const newCard = generateRandomCard();
            actual_suggestions_container.innerHTML += newCard;
            attachEventListeners();
        }, 150);
    }
}

function attachEventListeners() {
    const suggestionCards = document.querySelectorAll('.suggestions');
    suggestionCards.forEach(card => {
        const cardId = card.id.split('-')[1];
        const content = card.querySelector('p')?.innerText;
        const yesButton = card.querySelector('.yes-button');
        const noButton = card.querySelector('.no-button');

        if (yesButton && noButton) {
            yesButton.addEventListener('click', () => yes_card(cardId, content));
            noButton.addEventListener('click', () => no_card(cardId));
        }
    });
}

// Initial card setup
const initialCard = generateRandomCard();
actual_suggestions_container.innerHTML = initialCard;

// if (!window.matchMedia("(max-width: 600px)").matches) {
//     const initialCard2 = generateRandomCard();
//     actual_suggestions_container.innerHTML += initialCard2;
// }

attachEventListeners();


descriptionTextarea.addEventListener('input', () => {
    if (descriptionTextarea.value.length > 1000) {
        alert('Character limit exceeded!');
        descriptionTextarea.value = descriptionTextarea.value.slice(0, 1000);
    }
});

name_input.addEventListener('input', () => {
    if (name_input.value.length > 30) {
        alert('Character limit exceeded!');
        name_input.value = name_input.value.slice(0, 30);
    }
});


automatic_character.addEventListener('click', () => {
    const confirmMessage = "Are you sure? This is not reversible. It only takes 3 minutes to create one for yourself";
    if (confirm(confirmMessage)) {
        const name = generateRandomName();
        const gender = Math.round(Math.random());
        const strength = Math.floor(Math.random() * 100);
        const speed = 100 - strength;
        const charisma = Math.floor(Math.random() * 100);
        const intelligence = 100 - charisma;
        const values = {
            strength: strength,
            speed: speed,
            charisma: charisma,
            intelligence: intelligence
        };
        const description = generateRandomCardContent().content;

        character = {
            name: name,
            gender: gender,
            values: values,
            description: description
        };

        submit(character);
    }
});

finalSubmitButton.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let values = {
        strength: slider1.value,
        speed: slider2.value,
        charisma: slider3.value,
        intelligence: slider4.value
    };
    let description = document.getElementById('description').value;

    if (name.length === 0) {
        name = generateRandomName();
    }
    if (name.gender != 0 || name.gender != 1) {
        gender = Math.round(Math.random());
    }
    if (description.length === 0) {
        description = generateRandomCardContent().content;
    }

    character = {
        name: name,
        gender: gender,
        values: values,
        description: description
    };
    submit(character);
});

// function check_submit(character) {
//     if (character.name == null) {
//         const name = generateRandomName();
//     }
//     if (character.gender == null) {
//         const gender = Math.round(Math.random());
//     }
//     if (character.description == null) {
//         const description = generateRandomCardContent().content;
//     }
//     const values = {
//         strength: slider1.value,
//         speed: slider2.value,
//         charisma: slider3.value,
//         intelligence: slider4.value
//     };
//     character = {
//         name: name,
//         gender: gender,
//         values: values,
//         description: description
//     };
//     submit(character);
// }

async function submit(character) {
    console.log('Submitting: ', character);
    prevButton.style.display = 'none';
    logo_animated.style.display = "block";
    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(character),
        });

        const data = await response.json();

        if (data.aiResponse) {
            console.log(data.aiResponse);
            showAIResponse(data.aiResponse, character);
        } else {
            console.log('An error occurred while generating the response.');
            console.error('Error:', data.aiResponse);
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred while generating the response.');
    }
}

function parseMarkdownText(text) {
    const parsedResult = {};
    const regex = /\*\*(.*?)\*\*:\s*([\s\S]*?)(?=\n\*\*|$)/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/\n\s*/g, ' ');
        parsedResult[key] = value;
    }

    return parsedResult;
}

function formatText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/- /g, '<br>- ')
        .replace(/\*/g, '');
}

let aiReply = "";
let savedtraits = "";
let savedappearance = "";
let savedsignatureSentence = "";
let savedhealth = "";

function showAIResponse(aiResponse, character) {
    document.getElementById("general_header").innerText = "Welcome " + character.name + "!";
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'flex';
    document.getElementById('iconic_sentence').style.display = 'block';
    prevButton.style.display = 'none';
    submitButton.style.display = 'none';
    finalSubmitButton.style.display = 'none';
    automatic_character.style.display = "none";
    logo_animated.style.display = "none";

    aiResponse = aiResponse.replace(/\*/g, '').replace(/- /g, ' ');

    // Extract and format the signature sentence
    // const signatureSentenceMatch = aiResponse.match(/\*\*Signature Sentence:\*\*\s*["“]([^"”]+)["”]/);
    // const signatureSentence = signatureSentenceMatch ? signatureSentenceMatch[1] : null;
    const signatureSentenceIndex = aiResponse.indexOf('Signature Sentence:');
    const signatureSentenceRegex = /Signature Sentence:\s*([^"]*?"[^"]*?")/;
    const signatureSentenceMatch = aiResponse.match(signatureSentenceRegex);
    const signatureSentence = signatureSentenceMatch ? signatureSentenceMatch[1].trim() : '';

    // Extract the relevant sections
    let coreDescription = "- " + signatureSentenceIndex !== -1 ? aiResponse.slice(0, signatureSentenceIndex).trim() : '';
    coreDescription = coreDescription
        .replace(/(Traits & Personality:)/, '<br>$1')
        .replace(/(Origin & Background:)/, '<br>$1')
        .replace(/(Origins & Background:)/, '<br>$1')
        .replace(/(Appearance:)/, '<br>$1')
        .replace(/(Traits \([^)]*\))/, '<br>$1');

    if (coreDescription.split(' ').length > 200) {
        const sentences = coreDescription.split('. ');
        let truncatedDescription = '';
        for (let sentence of sentences) {
            if ((truncatedDescription + sentence).split(' ').length > 300) break;
            truncatedDescription += sentence + '. ';
        }
        coreDescription = truncatedDescription.trim();
    }

    const traitsStartIndex = coreDescription.indexOf('Traits & Personality:');
    const traitsEndIndex = coreDescription.indexOf('Appearance:');
    const traits = traitsStartIndex !== -1 && traitsEndIndex !== -1 ? coreDescription.slice(traitsStartIndex, traitsEndIndex).trim() : '';

    const appearanceStartIndex = coreDescription.indexOf('Appearance:');
    const appearanceEndIndex = coreDescription.length;
    const appearance = appearanceStartIndex !== -1 && appearanceEndIndex !== -1 ? coreDescription.slice(appearanceStartIndex, appearanceEndIndex).trim() : '';

    const healthStartIndex = aiResponse.indexOf('Health:');
    const healthEndIndex = aiResponse.indexOf('Skills:');
    let health = healthStartIndex !== -1 && healthEndIndex !== -1 ? aiResponse.slice(healthStartIndex, healthEndIndex).trim() : '';
    if (health.length === 0 || !Number.isInteger(health)) {
        const healthRegex = /Health:\s*(\d{1,2})/;
        const healthMatch = aiResponse.match(healthRegex);
        health = healthMatch ? parseInt(healthMatch[1], 10) : Math.floor(Math.random() * 21) + 10;
    } else {
        health = health ? parseInt(health.replace('Health:', '').trim(), 10) : Math.floor(Math.random() * 21) + 10;
    }


    // Extract and format the skills based on the category name
    const skillsMatch = aiResponse.match(/Skills:\s*([\s\S]+?)(?=(Weaknesses:|$))/);
    const skills = skillsMatch ? skillsMatch[1].trim().replace(/\d+\.\s+/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;*').replace(/^\s*\*?/gm, '*') : '';

    // Extract and format the weaknesses based on the category name
    const weaknessesMatch = aiResponse.match(/Weaknesses:\s*([\s\S]+?)(?=(Objects:|$))/);
    const weaknesses = weaknessesMatch ? weaknessesMatch[1].trim().replace(/\d+\.\s+/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;*').replace(/^\s*\*?/gm, '*') : '';

    // Extract and format the objects based on the category nameif available
    // Extract the "Objects" section from the AI response

    const objectsStartIndex = aiResponse.indexOf('Objects');
    let object_1 = '';
    let firstEmoji = '';
    let emojiRegex;

    if (objectsStartIndex !== -1) {
        const objectsText = aiResponse.slice(objectsStartIndex);
        emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;
        const firstEmojiMatch = objectsText.match(emojiRegex);
        if (firstEmojiMatch) {
            firstEmoji = firstEmojiMatch[0];
        }
    } else {
        emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;
        const firstEmojiMatch = aiResponse.match(emojiRegex);
        if (firstEmojiMatch) {
            firstEmoji = firstEmojiMatch[0];
        }
    }
    let firstObjectText = '';
    if (objectsStartIndex !== -1) {

        // 3. Extract the first text after "Objects", after the first emoji, before the second emoji and longer than 5 characters
        if (objectsStartIndex !== -1) {
            const objectsText = aiResponse.slice(objectsStartIndex);
            const emojiRegexGlobal = new RegExp(emojiRegex, 'g');
            const emojiMatches = [...objectsText.matchAll(emojiRegexGlobal)];

            if (emojiMatches.length > 1) {
                const start = emojiMatches[0].index + emojiMatches[0][0].length;
                const end = emojiMatches[1].index;
                const potentialText = objectsText.slice(start, end).replace(/\*/g, '').trim();
                if (potentialText.length > 5) {
                    firstObjectText = potentialText;
                }
            }
        }
    } else {
        const emojiRegexGlobal = new RegExp(emojiRegex, 'g');
        const emojiMatches = [...aiResponse.matchAll(emojiRegexGlobal)];

        if (emojiMatches.length > 1) {
            const start = emojiMatches[0].index + emojiMatches[0][0].length;
            const end = emojiMatches[1].index;
            const potentialText = aiResponse.slice(start, end).replace(/\*/g, '').trim();
            if (potentialText.length > 5) {
                firstObjectText = potentialText;
            }
        }

    }
    // If firstEmoji is still empty, set a default emoji
    if (!firstEmoji || firstEmoji.length === 0) {
        firstEmoji = '💡';
    }


    aiReply = aiResponse;
    savedtraits = traits;
    savedappearance = appearance;
    savedsignatureSentence = signatureSentence;
    savedhealth = health;

    // Display formatted description and other details
    document.getElementById('character_description').innerHTML = formatText(traits);
    document.getElementById('character_appearance').innerHTML = formatText(appearance);
    assignCharacterImage(character);
    document.getElementById('iconic_sentence').innerHTML = signatureSentence ? `${signatureSentence}` : '"In the game of power, one must weave ambition with discretion to secure their legacy."';
    // document.getElementById('skills').innerHTML = `<strong>Skills:</strong>${formatText(skills)}`;
    // document.getElementById('weaknesses').innerHTML = `<strong>Weaknesses:</strong>${formatText(weaknesses)}`;
    document.getElementById('objects').innerHTML = `<strong><br>(Starting Object) </strong>${formatText(firstObjectText.replace(/\(Starting Object\)/g, ''))} `;
    document.getElementById('object_icon').innerHTML = `${firstEmoji} `;
    document.getElementById('health').innerHTML = `<strong><br>❤️ Health: </strong>${health} `;
    playerSubmit.style.display = "block";
}


function assignCharacterImage(character) {
    const gender = character.gender === 0 ? 'man' : 'woman';
    const images = {
        charisma: `images/profile/profile_${gender}_charisma.webp`,
        intelligence: `images/profile/profile_${gender}_intelligence.webp`,
        strength: `images/profile/profile_${gender}_strength.webp`,
        speed: `images/profile/profile_${gender}_speed.webp`
    };
    let highestValue = 0;
    let highestValueImage = '';

    for (const value in character.values) {
        if (character.values[value] > highestValue) {
            highestValue = character.values[value];
            highestValueImage = images[value];
        }
    }

    let allEqual = true;
    for (const value in character.values) {
        if (character.values[value] !== character.values.strength) {
            allEqual = false;
            break;
        }
    }

    if (allEqual) {
        highestValueImage = `images/profile/profile_${gender}.webp`;
    }

    document.getElementById('character-image').src = highestValueImage;
}

playerSubmit.addEventListener('click', async () => {
    console.log('Redirecting to game...');
    // Ensure all fields are not null
    const characterName = character.name || '';
    let characterGender = character.gender || '0';
    characterGender.toString();
    const characterDescription = character.description || '';
    const characterTraits = savedtraits || '';
    const characterAppearance = savedappearance || '';
    const characterSignatureSentence = savedsignatureSentence || '';
    const characterHealth = savedhealth || '';

    const characterData = {
        username: characterName,
        gender: characterGender,
        description: characterDescription,
        strength: slider1.value,
        speed: slider2.value,
        charisma: slider3.value,
        intelligence: slider4.value,
        aiReply: aiReply,
        traits: characterTraits,
        appearance: characterAppearance,
        signatureSentence: characterSignatureSentence,
        health: characterHealth
    };

    console.log('Character data:', characterData);
    console.log(characterData);

    try {
        const response = await fetch('/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(characterData),
        });

        if (response.ok) {
            console.log('Character saved successfully.');
            window.location.href = '/game';
        } else {
            const errorData = await response.json();
            console.error('Failed to save character:', errorData.error);
            alert('Failed to save character: ' + errorData.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while saving the character. Please try again.');
    }
});



// DEV Only
if (window.location.href.includes('page=3')) {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
    prevButton.style.display = 'block';
    submitButton.style.display = 'none';
    finalSubmitButton.style.display = 'block';
    automatic_character.style.display = "none";
    page = 3;
}

if (window.location.href.includes('page=4')) {
    document.getElementById("general_header").innerText = "Welcome" + " " + "Lorenzus" + "!";
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'flex';
    prevButton.style.display = 'none';
    submitButton.style.display = 'none';
    finalSubmitButton.style.display = 'none';
    automatic_character.style.display = "none";
    // document.getElementById('page4').innerText = "";
}