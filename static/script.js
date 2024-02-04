const trendingTopics = [
    "Tech Innovations", "TikTok Ads", "PCVR", "Digital Twin", 
    "Environmental Solutions", "Sustainable Aviation Fuel", "Regenerative Agriculture",
    "Health & Wellness", "Anc Earbuds", "Moringa Tea", "Psychological Safety", "CBG Gummies",
    "Consumer Tech", "MagSafe power bank", "Gaming Earbuds",
    "E-commerce & Online Platforms", "Gumroad", "Shopify Developer", "Creator Marketplace",
    "Beauty & Personal Care", "Discoloration serum", "Plum face wash", "Niacinamide Dew Drops",
    "Food & Beverage Innovations", "Brightwheel", "Ryze Coffee", "Simply Mixology",
    "Finance & Investment", "GPT Trading", "Kroo Bank",
    "Artificial Intelligence & Machine Learning", "Perplexity AI", "AI Glasses",
    "Fashion & Apparel", "Huarache Craft", "Bamboo Pajamas", "Permanent Jewelry",
    "Entertainment & Media", "Booktok", "Digital Content Creation",
    "Global Events", "Hurricane Hilary", "Jimmy Buffett Death",
    "Sports & Fitness", "Padel Racket", "Ice Pod Bath",
    "Cultural Phenomena", "Connections NYT", "Google’s 25th Birthday",
    "Emerging Diets", "Bryan Johnson Diet", "Health Supplements",
    "Home & Lifestyle", "Japandi", "Minimalist Lifestyle",
    "Educational Technology", "Edtech", "Cybersecurity Bootcamp",
    "Gaming & Esports", "Esports Trends",
    "Travel & Exploration", "Sustainable Travel",
    "Creative Arts & DIY", "Crochet Plushies", "Artistic Expression Trends",
    "Public Safety & Awareness", "Cybersecurity", "Zero Trust Security",
]

const Nouns_Noun_Phrases  = [
  "apple", "mountain", "river", "spaceship", "robot",
  "castle", "dinosaur", "wizard", "pirate", "telescope",
  "ice cream", "dragon", "notebook", "unicorn", "galaxy",
  "forest", "beach", "skateboard", "treasure", "ghost",
  "alien", "detective", "vampire", "knight", "chocolate",
  "zoo", "museum", "garden", "volcano", "waterfall",
  "striped zebra", "haunted mansion", "mysterious island", "golden retriever", "ancient ruins",
  "electric guitar", "chocolate cake", "sparkling river", "abandoned spaceship", "enchanted forest",
  "roaring lion", "silver moon", "hidden treasure", "icy mountain", "fiery dragon",
  "talking parrot", "pirate ship", "flying carpet", "magical wand", "sunken ship",
  "thunderous waterfall", "colorful coral reef", "deserted beach", "snowy owl", "wild jungle",
  "Amazon River", "Mount Everest", "The Great Wall of China", "Leonardo da Vinci", "Eiffel Tower",
  "Harry Potter", "The Sahara Desert", "The Grand Canyon", "Shakespeare", "The Colosseum in Rome",
  "The Pyramids of Giza", "The Statue of Liberty", "Big Ben", "The Louvre", "Albert Einstein",
  "Yellowstone National Park", "The Great Barrier Reef", "Machu Picchu", "The Taj Mahal", "The Mona Lisa",
  "Stonehenge", "The Kremlin", "The Empire State Building", "The Leaning Tower of Pisa", "Niagara Falls"
];


const offers = [
`Hi {},
I am {}, a content creator specializing in {} with a growing audience of {} on {}. I've been a fan of {} for a long time, particularly your products/services in {}. I believe a collaboration between {} and my channel could offer mutual benefits, including increased brand awareness for you and fresh content for my viewers.
I propose creating a series of videos where I can showcase {}, highlighting its features, benefits, and my personal experience using it. This could include {}.
Looking forward to discussing this further.
Best regards,
{}
`,
`Dear {},
My name is {}, and I run a {} channel focused on {}. I'm reaching out to explore a potential collaboration with {} to create a series of educational videos on {}.
Our goal would be to combine {}'s creative approach to content delivery with the expertise of {} to produce engaging and informative content that can make {} accessible and interesting to a wide audience.
I'm excited about the possibility of working together to make a positive impact on educational content online.
Warm regards,
{}
`,
`Hey {},
It's {} here from {}. I've been following your work on {} and really admire how you {}. I think a collaboration between us could really resonate with both our audiences.
I'm reaching out to suggest a collaborative video series on {}, where we can combine our unique styles and perspectives. I believe our combined efforts could create something truly special and engaging for our viewers.
Let me know if you're interested, and we can brainstorm some ideas together!

Best,
{}
`,
`Dear {},
I am {}, a content creator focused on {} looking to make a difference. I've been inspired by the work your organization does in {} and am interested in collaborating on a video campaign to raise awareness and support for your cause.
I believe that through a series of impactful videos, we can highlight the important work {} is doing, share stories of the people you've helped, and encourage my audience to get involved.
I look forward to the possibility of working together for a great cause.

Sincerely,
{}
`,
`Hello {},
My name is {}, and I specialize in creating {} content on {}. I'm reaching out because I'm currently developing a project titled {}, and I think your unique style and vision could greatly contribute to its success.
The project involves {}, and I believe your expertise in {} would make a significant impact. I'd love to discuss how we could collaborate on this creative venture and bring something truly unique to both our audiences.
Looking forward to hearing your thoughts.
Regards,
{}
`
]

const phrases = [
    "Breaking News: {}",
    "How {} is Changing the World",
    "The Secret Life of {}",
    "{}: The Untold Story",
    "Why {} Matters in 2024",
    "The Future of {} in Our Lives",
    "Inside the Revolution: {}",
    "The Rise and Rise of {}",
    "{} and Its Impact on Society",
    "Navigating the World of {}",
    "Exploring the Phenomenon of {}",
    "The {} Effect: From Trend to Mainstream",
    "What {} Tells Us About Tomorrow",
    "{}: Behind the Buzz",
    "Decoding the Mysteries of {}",
    "The Real Story Behind {}",
    "{}: A New Era Unfolds",
    "From Niche to Necessity: The Journey of {}",
    "The Transformative Power of {}",
    "Breaking the Mold: The {} Movement",
    "{}: Innovations and Insights",
    "The Comprehensive Guide to {}",
    "{}: Challenges and Opportunities",
    "The {} Revolution: What You Need to Know",
    "How {} is Shaping the Future of Technology",
    "The Evolution of {}",
    "{}: A Global Perspective",
    "Redefining {} in the Modern World",
    "The Hidden World of {}",
    "Unveiling the Secrets of {}",
];

const play_button_svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
    <path d="M 45 90 C 20.187 90 0 69.813 0 45 c 31.16 -8.812 61.257 -9.555 90 0 C 90 69.813 69.813 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(187,26,26); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 45 0 C 20.187 0 0 20.187 0 45 h 90 C 90 20.187 69.813 0 45 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(221,34,34); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 63.885 47.325 l -14.816 8.554 l -14.816 8.554 c -1.79 1.033 -4.026 -0.258 -4.026 -2.325 V 45 c 10.606 -4.196 22.359 -3.855 35 0 C 65.227 45.904 64.78 46.808 63.885 47.325 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,240,240); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 63.885 42.675 l -14.816 -8.554 l -14.816 -8.554 c -1.79 -1.033 -4.026 0.258 -4.026 2.325 V 45 h 35 C 65.227 44.096 64.78 43.192 63.885 42.675 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>`

document.addEventListener('DOMContentLoaded', async () => {
    // await fetchTrendingTopics(); // Preload trending topics on page load
    let subscriberCount = 0;
    let totalWatchTime = 0; // Initialize total watch time
    let totalViews = 0;
    let videos = []; // Array to store videos
    let particles = [];
    let ColobParterners = [];
    var timeoutId;
    var chanalbost = 1.00;
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    subscriberMilestonesButton = {
        100000:['rgb(0,128,0)', 'rgb(0,0,255)'],
        1000000:['rgb(0,0,255)', 'rgb(0,128,0)'],
        10000000:['rgb(0,128,0)', 'rgb(0,128,60)'],
        100000000:['rgb(0,0,255)', 'rgb(50,0,255)'],
    }

    const subscriberMilestones = [100000, 1000000, 10000000, 100000000];
    let achievedMilestones = []; // To keep track of which milestones have been reached

    let leaderboardData = [
        { channelName: "T-Series", subscribers: 258000000 },
        { channelName: "MrBeast", subscribers: 236000000 },
        { channelName: "YouTube Movies", subscribers: 178000000 },
        { channelName: "Cocomelon - Nursery Rhymes", subscribers: 171000000 },
        { channelName: "SET India", subscribers: 168000000 },
        { channelName: "Music", subscribers: 120000000 },
        { channelName: "✿ Kids Diana Show", subscribers: 118000000 },
        { channelName: "Like Nastya", subscribers: 112000000 },
        { channelName: "PewDiePie", subscribers: 111000000 },
        { channelName: "Vlad and Niki", subscribers: 109000000 },
        { channelName: "Zee Music Company", subscribers: 104000000 },
        { channelName: "WWE", subscribers: 99300000 },
        { channelName: "Goldmines", subscribers: 93900000 },
        { channelName: "Gaming", subscribers: 93500000 },
        { channelName: "BLACKPINK", subscribers: 92800000 },
        { channelName: "Sony SAB", subscribers: 89100000 },
        { channelName: "5-Minute Crafts", subscribers: 80600000 },
        { channelName: "BANGTANTV", subscribers: 77400000 },
        { channelName: "Zee TV", subscribers: 77000000 },
        { channelName: "Sports", subscribers: 74900000 },
        { channelName: "HYBE LABELS", subscribers: 73900000 },
        { channelName: "Justin Bieber", subscribers: 72500000 },
        { channelName: "Pinkfong Baby Shark", subscribers: 72500000 },
        { channelName: "Colors TV", subscribers: 70200000 },
        { channelName: "ChuChu TV Nursery Rhymes", subscribers: 69800000 },
        { channelName: "Shemaroo Filmi Gaane", subscribers: 67400000 },
        { channelName: "Canal KondZilla", subscribers: 66900000 },
        { channelName: "T-Series Bhakti Sagar", subscribers: 65700000 },
        { channelName: "Tips Official", subscribers: 63500000 },
        { channelName: "El Reino Infantil", subscribers: 62300000 },
        { channelName: "Aaj Tak", subscribers: 61900000 },
        { channelName: "Movieclips", subscribers: 60600000 },
        { channelName: "Wave Music", subscribers: 60500000 },
        { channelName: "Dude Perfect", subscribers: 60000000 },
        { channelName: "Infobells - Hindi", subscribers: 59200000 },
        { channelName: "Sony Music India", subscribers: 59200000 },
        { channelName: "EminemMusic", subscribers: 58800000 },
        { channelName: "YRF", subscribers: 58200000 },
        { channelName: "Marshmello", subscribers: 56800000 },
        { channelName: "Taylor Swift", subscribers: 56200000 },
        { channelName: "LooLoo Kids", subscribers: 56000000 },
        { channelName: "BillionSurpriseToys", subscribers: 55200000 },
        { channelName: "Ed Sheeran", subscribers: 54100000 },
        { channelName: "Ariana Grande", subscribers: 53500000 },
        { channelName: "Shemaroo", subscribers: 51400000 },
        { channelName: "Toys and Colors", subscribers: 51100000 },
        { channelName: "A4", subscribers: 50500000 },
        { channelName: "ARY Digital HD", subscribers: 50500000 },
        { channelName: "HAR PAL GEO", subscribers: 50100000 },
        { channelName: "Get Movies", subscribers: 49400000 },
        { channelName: "JuegaGerman", subscribers: 49200000 },
        { channelName: "Billie Eilish", subscribers: 49100000 },
        { channelName: "SonyMusicIndiaVEVO", subscribers: 49000000 },
        { channelName: "Bad Bunny", subscribers: 47500000 },
        { channelName: "Mikecrack", subscribers: 47400000 },
        { channelName: "Badabun", subscribers: 47200000 },
        { channelName: "Voot Kids", subscribers: 47100000 },
        { channelName: "Fernanfloo", subscribers: 46900000 },
        { channelName: "ABS-CBN Entertainment", subscribers: 46700000 },
        { channelName: "Маша и Медведь", subscribers: 46500000 },
        { channelName: "Masha and The Bear", subscribers: 46200000 },
        { channelName: "Felipe Neto", subscribers: 46100000 },
        { channelName: "Shakira", subscribers: 45400000 },
        { channelName: "Você Sabia?", subscribers: 45200000 },
        { channelName: "Jess No Limit", subscribers: 45200000 },
        { channelName: "Alan Walker", subscribers: 44900000 },
        { channelName: "ZAMZAM ELECTRONICS TRADING", subscribers: 44900000 },
        { channelName: "Katy Perry", subscribers: 44700000 },
        { channelName: "BRIGHT SIDE", subscribers: 44500000 },
        { channelName: "whinderssonnunes", subscribers: 44500000 },
        { channelName: "Kimberly Loaiza", subscribers: 44200000 },
        { channelName: "BETER BÖCÜK", subscribers: 44100000 },
        { channelName: "Ishtar Music", subscribers: 43800000 },
        { channelName: "HolaSoyGerman.", subscribers: 43600000 },
        { channelName: "YOLO AVENTURAS", subscribers: 43500000 },
        { channelName: "Speed Records", subscribers: 43300000 },
        { channelName: "Like Nastya Show", subscribers: 42900000 },
        { channelName: "Rihanna", subscribers: 42700000 },
        { channelName: "Ricis Official", subscribers: 42500000 },
        { channelName: "shfa2 - شفا ", subscribers: 42200000 },
        { channelName: "LUCCAS NETO - LUCCAS TOON", subscribers: 41800000 },
        { channelName: "Luisito Comunica", subscribers: 41700000 },
        { channelName: "MrBeast Gaming", subscribers: 41600000 },
        { channelName: "CarryMinati", subscribers: 41300000 },
        { channelName: "Sony PAL", subscribers: 41300000 },
        { channelName: "Super Simple Songs - Kids Songs", subscribers: 41000000 },
        { channelName: "Little Baby Bum - Nursery Rhymes &…", subscribers: 40900000 },
        { channelName: "Goldmines Gaane Sune Ansune", subscribers: 40700000 },
        { channelName: "shfa", subscribers: 40600000 },
        { channelName: "Fede Vigevani", subscribers: 40500000 },
        { channelName: "elrubiusOMG", subscribers: 40300000 },
        { channelName: "WorkpointOfficial", subscribers: 40200000 },
        { channelName: "ABP NEWS", subscribers: 40200000 },
        { channelName: "GR6 EXPLODE", subscribers: 40100000 },
        { channelName: "TEDx Talks", subscribers: 40000000 },
        { channelName: "XXXTENTACION", subscribers: 39900000 },
        { channelName: "Vlad và Niki", subscribers: 39900000 },
        { channelName: "Like Nastya ESP", subscribers: 39500000 },
        { channelName: "Total Gaming", subscribers: 39300000 },
        { channelName: "Maria Clara & JP", subscribers: 39300000 },
        { channelName: "Mark Rober", subscribers: 29800000 },
        { channelName: "Safety Third", subscribers: 256000},
        { channelName: "William Osman", subscribers: 2980000 },
        { channelName: "TheBackyardScientist", subscribers: 5850000 },
        { channelName: "Allen Pan", subscribers: 2140000 },
        { channelName: "NileRed", subscribers: 5900000 },
        { channelName: "Michael Reeves", subscribers: 7140000 },
    ];

    function generateVideoTitle() {
        if (trendingTopics.length === 0) {
            return "Default Video Title"; // Fallback title if no topics are available
        }
        // Select a random trend and phrase
        const trend = trendingTopics[Math.floor(Math.random() * trendingTopics.length)];
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];

        // Replace {} with the selected trend``
        return phrase.replace("{}", trend);
    }


    function generateRandomSVGThumbnail() {
        // Define colors and letters for the thumbnail
        const baseColors = ["#FFC0CB", "#ADD8E6", "#90EE90", "#FFB6C1", "#FFA07A"];
        const accentColors = ["#800080", "#FFD700", "#FF6347", "#20B2AA", "#9400D3"];
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        // Randomly select attributes
        const baseColor = baseColors[Math.floor(Math.random() * baseColors.length)];
        const primaryLetter = letters[Math.floor(Math.random() * letters.length)];
        const accentLettersCount = Math.floor(Math.random() * 4); // 0 to 3 accent letters

        const accentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
        const accentLetter = letters[Math.floor(Math.random() * letters.length)];


        // Start SVG
        let svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`;

        // Add base rectangle
        svgContent += `<rect width="100%" height="100%" fill="${baseColor}" />`;

        // Add primary letter
        svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="black">${primaryLetter}</text>`;

        // Add accent letters
        for (let i = 0; i < accentLettersCount; i++) {
            const accentLetter = letters[Math.floor(Math.random() * letters.length)];
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            svgContent += `<text x="${x}%" y="${y}%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${accentColor}">${accentLetter}</text>`;
        }

        // Close SVG
        svgContent += `</svg>`;

        return svgContent;
    }

    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function scrollToRecord(recordId) {
        // const element = document.getElementById(recordId);
        // if (element) {
        //     element.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        // }
    }


    function minMaxNormalizeObjectsOnlyValues(arr, property) {
        const values = arr.map(item => item[property]);
        const min = 0;
        const max = Math.max(...values);

        return arr.map(item => (item[property] - min) / (max - min));
    }


    function updateLeaderboard() {
        // Sort the leaderboard data by subscribers in descending order
        leaderboardData.sort((a, b) => b.subscribers - a.subscribers);
        
        // Clear the existing leaderboard entries
        const leaderboardBody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
        leaderboardBody.innerHTML = '';
        
        // Add the sorted entries to the leaderboard
        leaderboardData.forEach((entry, index) => {
            const row = leaderboardBody.insertRow();
            const rankCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const subsCell = row.insertCell(2);
            row.id = `rank_${index + 1}`
            rankCell.textContent = index + 1;
            nameCell.textContent = entry.channelName;
            subsCell.textContent = entry.subscribers.toLocaleString();
        });
    }

    // Example: Update leaderboard after subscriber count change
    function checkAndUpdateLeaderboardForCurrentPlayer() {
        let parterner = Math.floor(Math.random() * leaderboardData.length-2)+2

        // Assuming 'currentPlayerChannel' and 'subscriberCount' represent your player's data
        const currentPlayerIndex = leaderboardData.findIndex(entry => entry.channelName === "Your Channel");
        if (currentPlayerIndex >= 0) {
            leaderboardData[currentPlayerIndex].subscribers = subscriberCount;
            if (currentPlayerIndex != leaderboardData.length-1){
                ColobParterners = [leaderboardData[currentPlayerIndex+1].channelName, leaderboardData[currentPlayerIndex+1].channelName, leaderboardData[leaderboardData.length-1].channelName,leaderboardData[leaderboardData.length-1].channelName,leaderboardData[currentPlayerIndex-parterner].channelName]
            }else{
                ColobParterners = [leaderboardData[leaderboardData.length-2].channelName, leaderboardData[leaderboardData.length-2].channelName, leaderboardData[parterner].channelName]
            }

        } else {
            ColobParterners = [leaderboardData[leaderboardData.length-2].channelName, leaderboardData[leaderboardData.length-2].channelName, leaderboardData[parterner].channelName]
            leaderboardData.push({ channelName: "Your Channel", subscribers: subscriberCount });
        }
        updateLeaderboard();
        scrollToRecord(currentPlayerIndex+1);
        document.getElementById('subscriberCount').innerText = `Subscribers: ${subscriberCount.toLocaleString()}`;
        document.getElementById('watchTime').innerText = `Total Watch Time: ${Number(totalWatchTime.toFixed(0)).toLocaleString()} hours \nTotal Views: ${totalViews.toLocaleString()}`;
        document.getElementById('Boost').innerText = `Channel Booster: ${chanalbost.toLocaleString()}`;

    }

    function svgToURL(svg){
        const encodedSVG = encodeURIComponent(svg).replace(/'/g, "%27").replace(/"/g, "%22");
        return `url('data:image/svg+xml,${encodedSVG}')`;
    }

    function addSVGPlayButtonCSS(stone) {
        const rewardsContainer = document.getElementById('milestoneRewards');
        const div = document.createElement('div');
        div.className = 'play-button-reward';
        const playTest = play_button_svg.replace(/rgb\(221,34,34\)/g, stone[0]) // Replace red with green
                        .replace(/rgb\(187,26,26\)/g, stone[1]); // Replace another red with blue

        div.style.backgroundImage = svgToURL(playTest);
        rewardsContainer.appendChild(div);
    }

    function checkAndAwardMilestones() {
        subscriberMilestones.forEach(milestone => {
            if (subscriberCount >= milestone && !achievedMilestones.includes(milestone)) {
                alert(`Congratulations! You've reached ${milestone} subscribers and earned a new play button!`);
                achievedMilestones.push(milestone); // Mark this milestone as achieved
                // Append SVG to the milestone rewards container
                addSVGPlayButtonCSS(subscriberMilestonesButton[milestone]);
            }
        });
        checkAndUpdateLeaderboardForCurrentPlayer();
    }

    function createFirework(x, y) {
        const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE'];
        const numParticles = 60;
        
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: x,
                y: y,
                radius: Math.random() * 2 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                velocityX: Math.random() * 6 - 3,
                velocityY: Math.random() * 6 - 3,
                life: Math.random() * 60 + 40
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index) => {
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;
                particle.life--;
                
                if (particle.life <= 0) {
                    particles.splice(index, 1);
                } else {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                }
            });
            
            if (particles.length > 0) {
                requestAnimationFrame(animate);
            }
        }
        
        animate();
        updateVideoList(); // Update the UI with new views
    }

    function getRandomDateAsStringFormatted(startYear, endYear) {
        // Array of month names
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        // Generate a random year between startYear and endYear
        const year = Math.floor(Math.random() * (endYear - startYear + 1) + startYear);
        
        // Generate a random month (1-12)
        const monthIndex = Math.floor(Math.random() * 12);
        
        // Calculate the number of days in the month
        let daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        
        // Generate a random day based on daysInMonth
        const day = Math.floor(Math.random() * daysInMonth + 1);
        
        // Construct the date string in "Jan 30, 2024" format
        return `${months[monthIndex]} ${day}, ${year}`;
    }


    // Function to handle the creation of a new video
    document.getElementById('createButton').addEventListener('click', createVideo);

    function createVideo() {
        const button = document.getElementById('createButton');
        button.disabled = true;

        const videoTitle = generateVideoTitle(); // Use the async function to generate a title
        const svgThumbnail = generateRandomSVGThumbnail();
        const currentPlayerIndex = leaderboardData.findIndex(entry => entry.channelName === "Your Channel");
        const minMaxNormalizedData = minMaxNormalizeObjectsOnlyValues(leaderboardData, 'subscribers');    
        const bost = minMaxNormalizedData[currentPlayerIndex]*100000;
        const newSubscribers = Math.floor(Math.random() * (bost-10 + 1) + 10);
        subscriberCount += newSubscribers;

        const newVideo = {
            title: videoTitle,
            thumbnail: svgThumbnail, // Store the SVG thumbnail data
            views: 0, // Initial views for the video
            viewDriver: newSubscribers * chanalbost,
            date: getRandomDateAsStringFormatted(2020, 2023)
            // Include other necessary properties
        };
        videos.unshift(newVideo); // Add the new video to the videos array

        updateVideoList();
        document.getElementById('subscriberCount').innerText = `Subscribers: ${subscriberCount}`;

        // Calculate a random cooldown duration between, for example, 2 and 5 seconds
        const cooldownDuration = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);

        setTimeout(() => {
            button.disabled = false; // Re-enable the button after the cooldown
        }, cooldownDuration);
        checkAndAwardMilestones(); // Check for milestones after updating subscriber count
    }


    // Function to update the video list in the UI
    function updateVideoList() {
        const videosElement = document.getElementById('video_list');
        if (videos.length == 0) {return}
        videosElement.innerHTML = ''; // Clear existing video list
        totalViews = 0
        videos.forEach(video => {
            // Create a container for each video
            const videoEntry = document.createElement('div');
            videoEntry.classList.add('video-entry');

            // Append the video entry to the videos element
            videosElement.appendChild(videoEntry);
            // Increase views for each video and potentially subscribers, and calculate watch time
            const viewIncrease = Math.floor(Math.random() * video.viewDriver + 1);
            video.views += viewIncrease; // Increment views by a random number
            totalViews += video.views
            // Assuming each view adds an average of 0.1 hours to the watch time
            const watchTimeIncrease = viewIncrease * 0.1;
            totalWatchTime += watchTimeIncrease;

            // Chance to gain subscribers from views
            if (Math.random() < 0.01) { // 1% chance to gain additional subscribers
                const additionalSubscribers = Math.floor(Math.random() * 50 + 1);
                subscriberCount += additionalSubscribers;
            }
            videoEntry.innerHTML = `
                <div class="video-item">
                    <div class="thumbnail">
                      ${video.thumbnail}
                    </div>
                    <div class="video-info">
                      <h2>${video.title}</h2>
                      <p>Published ${video.date} - ${video.views.toLocaleString()} Views</p>
                    </div>
                </div>
            `;

        });
        checkAndAwardMilestones(); // Check for milestones after potentially updating subscriber count
    }

    // Generate a random number between min (inclusive) and max (exclusive)
    function getRandomArbitrary(min, max) {
      var randomNumber =  Math.random() * (max - min) + min;
      randomNumber = Math.round(randomNumber * 100) / 100;
      return randomNumber;
    }

    // Function to count occurrences of "{}"
    function countPlaceholders(str) {
        return (str.match(/{}/g) || []).length;
    }

    // Generate a random list of replacements
    function getRandomReplacements(count, possibleReplacements) {
        let replacements = [];
        for (let i = 0; i < count; i++) {
            // Select a random replacement from the possible replacements
            let randomIndex = Math.floor(Math.random() * possibleReplacements.length);
            replacements.push(possibleReplacements[randomIndex]);
        }
        return replacements;
    }

    function chatTest() {
        // Count the placeholders
        let text = offers[Math.floor(Math.random() * offers.length)];
        let count = countPlaceholders(text);
        console.log(count)
        // Generate replacements
        let replacements = getRandomReplacements(count, Nouns_Noun_Phrases);
        // Replace "{}" in the text
        let index = 0;
        let newText = text.replace(/{}/g, () => replacements[index++] || "");
        let partner = ColobParterners[Math.floor(Math.random() * ColobParterners.length)];
        openForm(partner, newText);
    }
    function openForm(From, msg) {
        document.getElementById("myChatPopup").style.display = "block";
        document.getElementById("chat_msg").placeholder=msg;
        document.getElementById("chat_from").innerText = `New Msg: ${From}`
        document.getElementById("AcceptForm").disabled = true;
        timeoutId = setTimeout(() => {
          document.getElementById("AcceptForm").disabled = false;
        }, 10000);
    }

    function closeForm() {
        document.getElementById("myChatPopup").style.display = "none";
        clearTimeout(timeoutId);
        RandomChat();
    }

    function AcceptForm(){
        document.getElementById("myChatPopup").style.display = "none";
        clearTimeout(timeoutId);
        console.log("Accepted Form");
        chanalbost = getRandomArbitrary(0.01, 4.00);
        console.log(chanalbost);
        bostTime = getRandomArbitrary(5000, 60000);
        timeoutId = setTimeout(() => {
          chanalbost = 1.00
        }, bostTime);
        RandomChat();
    }


    // Attach events
    document.getElementById('createButton').addEventListener('click', createVideo);
    window.addEventListener('click', (e) => {
        createFirework(e.clientX, e.clientY);
    });

    // document.getElementById('openButton').addEventListener('click', chatTest);
    document.getElementById('AcceptForm').addEventListener('click', AcceptForm);
    document.getElementById('closeForm').addEventListener('click', closeForm);

    function RandomChat(){
        setTimeout(() => {
            chatTest();
        }, getRandomArbitrary(5000, 60000));
    }

    document.getElementById('profile-placeholder').innerHTML = generateRandomSVGThumbnail();
    checkAndUpdateLeaderboardForCurrentPlayer();
    RandomChat();
});

