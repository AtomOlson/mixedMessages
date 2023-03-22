let nouns = ['people', 'history', 'art', 'world', 'information', 'map', 'family', 'government', 'health', 'system', 'computer', 'meat', 'year', 'thanks', 'music', 'person', 'reading', 'method', 'data', 'food', 'law', 'bird', 'literature', 'problem', 'software', 'control', 'knowledge', 'power', 'ability', 'economics', 'love', 'internet', 'television', 'science', 'library', 'nature', 'fact', 'product', 'idea', 'temperature', 'investment', 'area', 'society', 'activity', 'story', 'industry', 'media', 'thing', 'oven', 'community', 'definition', 'safety', 'quality', 'development', 'language', 'management', 'player', 'variety', 'video', 'week', 'security', 'country', 'exam', 'movie', 'organizationequipment', 'physics', 'analysis', 'policy', 'series', 'thought', 'basis', 'boyfriend', 'direction', 'strategy', 'technology', 'army', 'camera', 'freedom', 'paper', 'environment', 'child', 'instance', 'month', 'truth', 'marketing', 'university', 'writing', 'article', 'department', 'difference', 'goal', 'news', 'audience', 'fishing', 'growth', 'income', 'marriage' ];
let adverbs = ['abnormally', 'absentmindedly', 'accidentally', 'actually', 'adventurously', 'afterwards', 'almost', 'always', 'annually', 'anxiously', 'arrogantly', 'awkwardly', 'bashfully', 'beautifully', 'bitterly', 'bleakly', 'blindly', 'blissfully', 'boastfully', 'boldly', 'bravely', 'briefly', 'brightly', 'briskly', 'broadly', 'busily', 'calmly', 'carefully', 'carelessly', 'cautiously', 'certainly', 'cheerfully', 'clearly', 'cleverly', 'closely', 'coaxingly', 'colorfully', 'commonly', 'continually', 'coolly', 'correctly', 'courageously', 'crossly', 'cruelly', 'curiously', 'daily', 'daintily', 'dearly', 'deceivingly', 'deeply', 'defiantly', 'deliberately', 'delightfully', 'diligently', 'dimly', 'doubtfully', 'dreamily', 'easily', 'elegantly', 'energetically', 'enormously', 'enthusiastically', 'equally', 'especially', 'even', 'evenly', 'eventually', 'exactly', 'excitedly', 'extremely', 'fairly', 'faithfully', 'famously', 'far', 'fast', 'fatally', 'ferociously', 'fervently', 'fiercely', 'fondly', 'foolishly', 'fortunately', 'frankly', 'frantically', 'freely', 'frenetically', 'frightfully', 'fully', 'furiously', 'generally', 'generously', 'gently', 'gladly', 'gleefully', 'gracefully', 'gratefully', 'greatly', 'greedily', 'happily', 'hastily', 'healthily', 'heavily', 'helpfully', 'helplessly', 'highly', 'honestly', 'hopelessly', 'hourly', 'hungrily', 'immediately', 'innocently', 'inquisitively', 'instantly', 'intensely', 'intently', 'interestingly', 'inwardly', 'irritably', 'jaggedly', 'jealously', 'jovially', 'joyfully', 'joyously', 'jubilantly', 'judgmentally', 'justly', 'keenly', 'kiddingly', 'kindheartedly', 'kindly', 'knavishly', 'knowingly', 'knowledgeably', 'kookily', 'lazily', 'les', 'lightly', 'likely', 'limply', 'lively', 'loftily', 'longingly', 'loosely', 'loudly', 'lovingly', 'loyally', 'madly', 'majestically', 'meaningfully', 'mechanically', 'merrily', 'miserably', 'mockingly', 'monthly', 'more', 'mortally', 'mostly', 'mysteriously', 'naturally', 'hopelessly', 'hourly', 'hungrily', 'immediately', 'innocently', 'inquisitively', 'instantly', 'intensely', 'intently', 'interestingly', 'inwardly', 'irritably', 'jaggedly', 'jealously', 'jovially', 'joyfully', 'joyously', 'jubilantly', 'judgmentally', 'justly', 'keenly', 'kiddingly', 'kindheartedly', 'kindly', 'knavishly', 'knowingly', 'knowledgeably', 'kookily', 'lazily', 'less', 'lightly', 'likely', 'limply', 'lively', 'loftily', 'longingly', 'loosely', 'loudly', 'lovingly', 'loyally', 'madly', 'majestically', 'meaningfully', 'mechanically', 'merrily', 'miserably', 'mockingly', 'monthly', 'more', 'mortally', 'mostly', 'mysteriously', 'naturally', 'nearly', 'neatly', 'nervously', 'never', 'nicely', 'noisily', 'not', 'obediently', 'obnoxiously', 'oddly', 'offensively', 'officially', 'often', 'only', 'openly', 'optimistically', 'overconfidently', 'painfully', 'partially', 'patiently', 'perfectly', 'physically', 'playfully', 'politely', 'poorly', 'positively', 'potentially', 'powerfully', 'promptly', 'properly', 'punctually', 'quaintly', 'queasily', 'queerly', 'questionably', 'quicker', 'quickly', 'quietly', 'quirkily', 'quizzically', 'randomly', 'rapidly', 'rarely', 'readily', 'really', 'reassuringly', 'recklessly', 'regularly', 'reluctantly', 'repeatedly', 'reproachfully', 'restfully', 'righteously', 'rightfully', 'rigidly', 'roughly', 'rudely', 'safely', 'scarcely', 'scarily', 'searchingly', 'sedately', 'seemingly', 'seldom', 'selfishly', 'separately', 'seriously', 'shakily', 'sharply', 'sheepishly', 'shrilly', 'shyly', 'silently', 'sleepily', 'slowly', 'smoothly', 'softly', 'solemnly', 'solidly', 'sometimes', 'soon', 'speedily', 'stealthily', 'sternly', 'strictly', 'successfully', 'suddenly', 'supposedly', 'surprisingly', 'suspiciously', 'sweetly', 'swiftly', 'sympathetically', 'tenderly', 'tensely', 'terribly', 'thankfully', 'thoroughly', 'thoughtfully', 'tightly', 'tomorrow', 'too', 'tremendously', 'triumphantly', 'truly', 'truthfully', 'rightfully', 'scarcely', 'searchingly', 'sedately', 'seemingly', 'selfishly', 'separately', 'seriously', 'sheepishly', 'smoothly', 'solemnly', 'sometimes', 'speedily', 'stealthily', 'successfully', 'suddenly', 'supposedly', 'surprisingly', 'suspiciously', 'sympathetically', 'tenderly', 'thankfully', 'thoroughly', 'thoughtfully', 'tomorrow', 'tremendously', 'triumphantly', 'truthfully', 'ultimately', 'unabashedly', 'unaccountably', 'unbearably', 'unethically', 'unexpectedly', 'unfortunately', 'unimpressively', 'unnaturally', 'unnecessarily', 'upbeat', 'upright', 'upside-down', 'upward', 'urgently', 'usefully', 'uselessly', 'usually', 'utterly', 'vacantly', 'vaguely', 'vainly', 'valiantly', 'vastly', 'verbally', 'very', 'viciously', 'victoriously', 'violently', 'vivaciously', 'voluntarily', 'warmly', 'weakly', 'wearily', 'well', 'wetly', 'wholly', 'wildly', 'willfully', 'wisely', 'woefully', 'wonderfully', 'worriedly', 'wrongly', 'yawningly', 'yearly', 'yearningly', 'yesterday', 'yieldingly', 'youthfully', 'zealously', 'zestfully', 'zestily'];
let actionVerbs = ['ran', 'jumped', 'killed', 'destroyed', 'flew', 'ate', 'walked', 'swam', 'programmed', 'wrote', 'gamed', 'hiked', 'drove', 'biked', 'aimed', 'sang', 'read', 'slept'];

// Picks a random element from the provided list
function selectRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// Generates the message with the lists provided
function generateMessage(format) {
    let message = []; 
    format.forEach(type => {
        let word = '';
        switch(type) {
            case 'noun':
                word = selectRandom(nouns);
                break;
            case 'adverb':
                word = selectRandom(adverbs);
                break;
            case 'actionverb':
                word = selectRandom(actionVerbs);
                break;
            default:
                word = `(${type} is an invalid type)`;
                break;
        }
        message += word + ' ';
    });
    return message;
}

let format = [];

// i = 2 to exclude the first two filepath elements of process.argv
for(let i = 2; i < process.argv.length; i++) {
    format.push(process.argv[i]);
}

console.log(generateMessage(format));