let tierBreakpoints = [
    {
        tier: 'EX',
        breakpoint: 9.5
    },
    {
        tier: 'SS',
        breakpoint: 9
    },
    {
        tier: 'S',
        breakpoint: 8.7
    },
    {
        tier: 'App',
        breakpoint: 8.5
    },
    {
        tier: 'Ap',
        breakpoint: 8.1
    },
    {
        tier: 'A',
        breakpoint: 8
    },
    {
        tier: 'Bp',
        breakpoint: 7.6
    },
    {
        tier: 'B',
        breakpoint: 7.5
    },
    {
        tier: 'Bm',
        breakpoint: 7
    },
    {
        tier: 'C',
        breakpoint: 6
    },
    {
        tier: 'D',
        breakpoint: 0
    }
]

const getAnimeTier = (score) => {
    if (score === 0) {
        return 'unranked'
    }

    for (let i = 0; i < tierBreakpoints.length; i++) {
        if (score >= tierBreakpoints[i].breakpoint) {
            return tierBreakpoints[i].tier
        } 
    }
}

/**
 * Tallying animes with attached tier list 
 * metadata under a single object containing tiers
 * @param {AnimeList[]} animes 
 */
const tallyAnimeScores = (animes) => {
    return animes.reduce((state, anime) => {
        const { tier } = anime; //Grabs anime.tier

        // the updated array, empty if we never added an anime of this tier before
        const newTier = state[tier] || []; 
        
        newTier.push(anime);
        
        return {
            ...state,
            [tier]: newTier
        }
    }, {});
}

module.exports = {
    getAnimeTier,
    tallyAnimeScores,
    tierBreakpoints
}
