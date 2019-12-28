const { expect } = require( 'chai' )

const { toEnglish } = require( '../index' )

// Test lines
const transliterations = [
  [ 'ਕਿਵ ਸਚਿਆਰਾ ਹੋਈਐ ਕਿਵ ਕੂੜੈ ਤੁਟੈ ਪਾਲਿ ॥', 'kiv sachiaaraa hoeeai kiv koorrai tuttai paal |' ],
  [ 'ਕਨਕੰ ਦੁਤਿ ਉਜਲ ਅੰਗ ਸਨੇ ॥', 'kankan dut ujal ang sane |' ],
  [ 'ਗੁਨ ਮ੍ਰਿਗਹਾ ਕੋ ਚਿਤ ਬੀਚ ਲੀਆ ॥੩੮੫॥', 'gun mrighaa ko chit beech leeaa |385|' ],
  [ 'ਗਣ ਗੰਧ੍ਰਬ ਭੂਤ ਪਿਸਾਚ ਤਬੈ ॥੩੮੮॥', 'gan gandhrab bhoot pisaach tabai |388|' ],
  [ 'ਅਬ੍ਰਯਕਤ ਅੰਗ ॥', 'abrayakat ang ||' ],
  [ 'ਜਗੰਨਾਥ ਜਗਦੀਸੁਰ ਕਰਤੇ ਸਭ ਵਸਗਤਿ ਹੈ ਹਰਿ ਕੇਰੀ ॥', 'jaganaath jagdeesur karte sabh vasgat hai har keree |' ],
  [ 'ਆਦਿ ਸਚੁ ਜੁਗਾਦਿ ਸਚੁ ॥', 'aad sach jugaad sach |' ],
  [ 'ਸਹਸ ਸਿਆਣਪਾ ਲਖ ਹੋਹਿ ਤ ਇਕ ਨ ਚਲੈ ਨਾਲਿ ॥', 'sehas siaanpaa lakh hohi ta ik na chalai naal |' ],
  [ 'ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰਪ੍ਰਸਾਦਿ ॥', 'ik oankaar sat naam kartaa purakh nirbhau nirvair akaal moorat ajoonee saibhan gur prasaad |' ],
  [ 'ਹੁਕਮੀ ਹੁਕਮੁ ਚਲਾਏ ਰਾਹੁ ॥', 'hukmee hukam chalaae raahu |' ],
  [ 'ਤਿਨ ਕੇ ਨਾਮ ਅਨੇਕ ਅਨੰਤ ॥', 'tin ke naam anek anant |' ],
  [ 'ਭਾਂਡਾ ਭਾਉ ਅੰਮ੍ਰਿਤੁ ਤਿਤੁ ਢਾਲਿ ॥', 'bhaanddaa bhaau amrit tith dtaal |' ],
  [ 'ਕ੍ਰਿਪਾ', 'kripaa' ],
  [ 'ਮਃ', 'mahalaa' ],
  [ 'ਜਿਸ ਨੋ ਕ੍ਰਿਪਾ ਕਰਹਿ ਤਿਨਿ ਨਾਮੁ ਰਤਨੁ ਪਾਇਆ ॥', 'jis no kripaa kareh tin naam ratan paaeaa |' ],
  [ 'ਆਵਣੁ ਵੰਞਣੁ ਡਾਖੜੋ ਛੋਡੀ ਕੰਤਿ ਵਿਸਾਰਿ ॥੪॥', 'aavan vanyan ddaakhrro chhoddee kant visaar |4|' ],
  [ 'ਘੜੀ ਮੂਰਤ ਸਿਮਰਤ ਪਲ ਵੰਞਹਿ ਜੀਵਣੁ ਸਫਲੁ ਤਿਥਾਈ ਜੀਉ ॥੧॥', 'gharree moorat simrat pal vanyeh jeevan safal tithaaee jeeo |1|' ],
  [ 'ਹਰਿ ਹਰਿ ਹਰਿ ਗੁਨ ਗਾਵਹੁ ॥', 'har har har gun gaavhu |' ],
  [ 'ਹੁਕਮੈ ਅੰਦਰਿ. ਸਭੁ ਕੋ; ਬਾਹਰਿ ਹੁਕਮ. ਨ ਕੋਇ ॥', 'hukmai andar. sabh ko; bhaahar hukam. na koe |' ],
]

describe( 'toEnglish()', () => {
  transliterations.map( ( [ gurmukhi, transliteration ] ) => it( `should transliterate '${gurmukhi}' to '${transliteration}'`, () => {
    expect( toEnglish( gurmukhi ) ).to.equal( transliteration )
  } ) )
} )
