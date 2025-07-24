// Data extracted from the provided text file
const allTeamData = {
    g: [
        { name: 'Team Dark Recoil', email: 'tanvirrahmannabil@gmail.com', username: 'tanvirrahmannabil@gmail.com' },
        { name: 'HOUSE OF BLOOD', email: 'mdahasanhabib059@gmail.com', username: 'mdahasanhabib059@gmail.com' },
        { name: 'CB-Esports', email: 'mdahosanrafi680@gmail.com', username: 'mdahosanrafi680@gmail.com' },
        { name: 'One Punch', email: 'debrajbinu@gmail.com', username: 'debrajbinu@gmail.com' },
        { name: 'never give up', email: 'kazimreza2018@gmail.com', username: 'kazimreza2018@gmail.com' },
        { name: 'DLG E-SPORTS', email: 'dlptuhin1330@gmail.com', username: 'dlptuhin1330@gmail.com' },
        { name: 'Br', email: 'uttomkumar00000@gamil.com', username: 'uttomkumar00000@gamil.com' },
        { name: 'Royal Force', email: 'syeasir723@gmail.com', username: 'syeasir723@gmail.com' },
        { name: 'Titanium Valor was squad', email: 'mdsadman2500@gmail.com', username: 'mdsadman2500@gmail.com' },
        { name: 'Black Cobra', email: 'jakiyajannat014@gmail.com', username: 'jakiyajannat014@gmail.com' },
        { name: 'ROYAL ARMY OFFICIAL', email: 'abulmonsur389@gmail.com', username: 'abulmonsur389@gmail.com' },
        { name: 'Team Shadow', email: 'abrahimsheikh029@gmail.com', username: 'abrahimsheikh029@gmail.com' }
    ],
    h: [
        { name: 'TMS E-SPORTS', email: 'sudiptabanik503@gmail.com', username: 'sudiptabanik503@gmail.com' },
        { name: 'SKH ESPORTS', email: 'mizanurislamremon@gmail.com', username: 'mizanurislamremon@gmail.com' },
        { name: 'IQ Esports', email: 'sayemsaidulislam3@gmail.com', username: 'sayemsaidulislam3@gmail.com' },
        { name: 'BV ESPORTS', email: 'mahmudulislamantor35@gmail.com', username: 'mahmudulislamantor35@gmail.com' },
        { name: 'PHANTOM REALM', email: 'ymia33081@gmail.com', username: 'ymia33081@gmail.com' },
        { name: 'UNDERTAKER', email: 'xaberulkhan@gmail.com', username: 'xaberulkhan@gmail.com' },
        { name: 'JAWBREAKER TOW', email: 'mdresat000@gmail.com', username: 'mdresat000@gmail.com' },
        { name: 'BOSS', email: 'mueedkhannafew@gmail.com', username: 'mueedkhannafew@gmail.com' },
        { name: 'BIN LADEN TEAM', email: 'mahbub6400@gmail.com', username: 'mahbub6400@gmail.com' },
        { name: 'SAVAGE HUNTER', email: 'mdshakibulhossainshakin@gmail.com', username: 'mdshakibulhossainshakin@gmail.com' },
        { name: 'TEM RIOT', email: 'sazenkhan3@gmail.com', username: 'sazenkhan3@gmail.com' },
        { name: 'TEAM BENGAL', email: 'nokibulislam2007@gmail.com', username: 'nokibulislam2007@gmail.com' }
    ],
    i: [
        { name: 'Team Death Note', email: 'nirjoymahmud3@gmail.com', username: 'nirjoymahmud3@gmail.com' },
        { name: 'Team warriors', email: '8kabidislam@gmail.com', username: '8kabidislam@gmail.com' },
        { name: 'Ruthless Hunter', email: 'kawsarfree69@gmail.com', username: 'kawsarfree69@gmail.com' },
        { name: 'MDS ELITE', email: 'ahmedtashin38@gmail.com', username: 'ahmedtashin38@gmail.com' },
        { name: 'REIGN FALCON eSPORTS', email: 'imranossain07@gmail.com', username: 'imranossain07@gmail.com' },
        { name: 'BURGAR KING', email: 'habib1474rahman@gmail.com', username: 'habib1474rahman@gmail.com' },
        { name: 'NaYeem', email: 'nayeemchowdhury001@gmail.com', username: 'nayeemchowdhury001@gmail.com' },
        { name: 'Furious 7', email: 'mehedialomshuvo@gmail.com', username: 'mehedialomshuvo@gmail.com' },
        { name: 'Zero 7', email: 'abir.karim011@gmail.com', username: 'abir.karim011@gmail.com' },
        { name: 'JT Culers', email: 'alfashasan59@gmail.com', username: 'alfashasan59@gmail.com' },
        { name: 'Ces eSports', email: 'rumanajoy2023@gmail.com', username: 'rumanajoy2023@gmail.com' },
        { name: 'Gamer Shohag', email: 'emonshmed787m@gmail.com', username: 'emonshmed787m@gmail.com' }
    ],
    j: [
        { name: 'DARK REIGN', email: 'sabrinasima924@gmail.com', username: 'sabrinasima924@gmail.com' },
        { name: 'EXE', email: 'anotherid950@gmail.com', username: 'anotherid950@gmail.com' },
        { name: 'Thunder eSports', email: 'BiplobAhamed2035@gmail.com', username: 'BiplobAhamed2035@gmail.com' },
        { name: 'GRS-Esports', email: 'adnanuddintushar@gmail.com', username: 'adnanuddintushar@gmail.com' },
        { name: 'TL E-SPORTS', email: 'zimeditz9@gmail.com', username: 'zimeditz9@gmail.com' },
        { name: 'Black Ghost', email: 'jnsiam69@gmail.com', username: 'jnsiam69@gmail.com' },
        { name: 'TEAM 7X', email: 'arafatislamoyon1991@gmail.com', username: 'arafatislamoyon1991@gmail.com' },
        { name: 'The BUETians', email: 'taninmahamud847@gmail.com', username: 'taninmahamud847@gmail.com' },
        { name: 'BLAZE REAPERS', email: 'ri339051@gmail.com', username: 'ri339051@gmail.com' },
        { name: 'Jaw brakers', email: 'mahidulmunsi12@gmail.com', username: 'mahidulmunsi12@gmail.com' },
        { name: 'ROYAL NOVA ESP', email: 'infoarifhasan69@gmail.com', username: 'infoarifhasan69@gmail.com' },
        { name: 'RBF', email: 'tssakib831@gmail.com', username: 'tssakib831@gmail.com' }
    ],
    k: [
        { name: 'ROAD 2 HELL', email: 'asrowdy123@gmail.com', username: 'asrowdy123@gmail.com' },
        { name: 'TEAM RN UP', email: 'dybro5535@gmail.com', username: 'dybro5535@gmail.com' },
        { name: 'AURORA ESP', email: 'msrenterprise1975@gmail.com', username: 'msrenterprise1975@gmail.com' },
        { name: 'UNITY CRASHER', email: 'rubayetk500@gmail.com', username: 'rubayetk500@gmail.com' },
        { name: 'The Rhythms', email: 'trsflex47@gmail.com', username: 'trsflex47@gmail.com' },
        { name: 'Team Fox', email: 'ovijeetsikder0@gmail.com', username: 'ovijeetsikder0@gmail.com' },
        { name: 'WreckZone', email: 'mosfiqurpabon4444@gmail.com', username: 'mosfiqurpabon4444@gmail.com' },
        { name: 'Jod esport', email: 'smgaming116@gmail.com', username: 'smgaming116@gmail.com' },
        { name: 'DC', email: 'hmahi0920@gmail.com', username: 'hmahi0920@gmail.com' },
        { name: 'Black Dragon', email: 'mdisanrakib218@gmail.com', username: 'mdisanrakib218@gmail.com' },
        { name: 'Conquerors', email: 'mdbabugaming@gmail.com', username: 'mdbabugaming@gmail.com' },
        { name: 'PH ESPORTS', email: 'mdyasinrahman9@gmail.com', username: 'mdyasinrahman9@gmail.com' }
    ],
    l: [
        { name: 'Over power', email: 'sakilalomr@gmail.com', username: 'sakilalomr@gmail.com' },
        { name: 'Night hex', email: 'teamnighthex@gmail.com', username: 'teamnighthex@gmail.com' },
        { name: 'BLOODSEEKERS', email: 'sojibmolla96265@gmail.com', username: 'sojibmolla96265@gmail.com' },
        { name: 'ElitesX', email: 'elitesx01@gmail.com', username: 'elitesx01@gmail.com' },
        { name: 'GAME CHANGERS', email: 'sksoaibsarker@gmail.com', username: 'sksoaibsarker@gmail.com' },
        { name: 'LTZ Esports', email: 'ashifurtashin123@gmail.com', username: 'ashifurtashin123@gmail.com' },
        { name: 'HRD Titan', email: 'blfnjaris@gmail.com', username: 'blfnjaris@gmail.com' },
        { name: 'AURA XTREME', email: 'safayetff05@gmail.com', username: 'safayetff05@gmail.com' },
        { name: 'REVENGERS', email: 'myn50446@gmail.com', username: 'myn50446@gmail.com' },
        { name: 'TEAM SYNDICATE', email: 'shahedismail6250@gmail.com', username: 'shahedismail6250@gmail.com' },
        { name: 'TEAM AG', email: 'alif54327@gmail.com', username: 'alif54327@gmail.com' },
        { name: 'DESTRUCTION X', email: 'ariffaisal728@gmail.com', username: 'ariffaisal728@gmail.com' }
    ],
    m: [
        { name: 'UNDERGROUND SOLDIER', email: 'mmh826578@gmail.com', username: 'mmh826578@gmail.com' },
        { name: 'INSANE E-SPORTS', email: 'zaberahmedkafi24@gmail.com', username: 'zaberahmedkafi24@gmail.com' },
        { name: 'AXC E-SPORTS', email: 'sadidshahariar1@gmail.com', username: 'sadidshahariar1@gmail.com' },
        { name: 'TERROR XT', email: 'Jahidulislam692787@gmail.com', username: 'Jahidulislam692787@gmail.com' },
        { name: 'SYL CAT F8R', email: 'akmsaifullah24bd@gmail.com', username: 'akmsaifullah24bd@gmail.com' },
        { name: 'TL E-SPORTS', email: 'jh917456@gmail.com', username: 'jh917456@gmail.com' },
        { name: 'Team Cheetah', email: 'trsamir117@gmail.com', username: 'trsamir117@gmail.com' },
        { name: 'CROXEN ESP', email: 'adrahmantorikul@gmail.com', username: 'adrahmantorikul@gmail.com' },
        { name: 'Jod esport', email: 'smgaming116@gmail.com', username: 'smgaming116@gmail.com' },
        { name: 'TEAM MASTER', email: 'mdssalman13@gmail.com', username: 'mdssalman13@gmail.com' },
        { name: '4MUSKETEERS', email: 'mhasif281@gmail.com', username: 'mhasif281@gmail.com' },
        { name: 'EVE ESPORTS', email: 'fahimterminator6@gmail.com', username: 'fahimterminator6@gmail.com' }
    ],
    n: [
        { name: 'Novastrike', email: 'mdh655839@gmail.com', username: 'mdh655839@gmail.com' },
        { name: 'Fire Fox', email: 'captincold1@gmail.com', username: 'captincold1@gmail.com' },
        { name: 'Avengers', email: 'sksamiun56@gmail.com', username: 'sksamiun56@gmail.com' },
        { name: 'X-23 Esports', email: 'saifulrodro1234@gmail.com', username: 'saifulrodro1234@gmail.com' },
        { name: 'x-pros', email: 'fjmarufislam@gmail.com', username: 'fjmarufislam@gmail.com' },
        { name: 'R.A.R', email: 'bdrahat9966@gmail.com', username: 'bdrahat9966@gmail.com' },
        { name: 'TEAM SYLHET', email: 'imdadulffid@gmail.com', username: 'imdadulffid@gmail.com' },
        { name: 'INF ESPORTS', email: 'itzshimulobayed@gmail.com', username: 'itzshimulobayed@gmail.com' }
    ]
};

// Initialize the Vue application using the Composition API
const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // Reactive state for the search input
        const searchQuery = ref('');

        // Computed property that filters the teams based on the searchQuery
        // It returns an object where keys are group names and values are arrays of filtered teams
        const filteredGroupsData = computed(() => {
            const query = searchQuery.value.toLowerCase().trim();
            const result = {};

            // If the search query is empty, return all original data
            if (!query) {
                return allTeamData;
            }

            // Iterate over each group in the original data
            for (const groupName in allTeamData) {
                // Filter teams within the current group by name (case-insensitive)
                const filteredTeams = allTeamData[groupName].filter(team =>
                    team.name.toLowerCase().includes(query)
                );

                // If any teams match the search query in this group, add it to the result object
                if (filteredTeams.length > 0) {
                    result[groupName] = filteredTeams;
                }
            }
            return result;
        });

        // Return reactive data and computed properties to be used in the template
        return {
            searchQuery,
            filteredGroupsData // This will be used in v-for in the template
        };
    }
}).mount('#app');