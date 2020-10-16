const { expect } = require( 'chai' )

const { toSyllabicSymbols } = require( '../index' )

const tests = [
  [ 'ਕਸਰਤ', '1111' ],
  [ 'ਬਰਕਤ', '1111' ],
  [ 'ਮਿਹਨਤ', '1111' ],
  [ 'ਮੁਜਰਮ', '1111' ],
  [ 'ਗੁਰਮੁਖ', '1111' ],
  [ 'ਕਾਕੀਏ', '222' ],
  [ 'ਕਾਕੀ\u0A0F', '222' ], // ਏ = u0A0F
  [ 'ਕਾਕੀ\u0A72\u0A47', '222' ], // ਏ = u0A72 + u0A47
  [ 'ਤੌਲੀਆ', '222' ],
  [ 'ਤੋਰੀਆ', '222' ],
  [ 'ਚੀਰੀਏ', '222' ],
  [ 'ਤੰਬੂਰਾ', '222' ],
  [ 'ਲੰਮਾਈ', '222' ],
  [ 'ਬੱਚੀਏ', '222' ],
  [ 'ਸਾਗ', '21' ],
  [ 'ਦੌੜ', '21' ],
  [ 'ਪੀੜ', '21' ],
  [ 'ਹਿੱਲ', '21' ],
  [ 'ਵਿਚੋਂ', '12' ],
  [ 'ਤਲਾ', '12' ],
  [ 'ਸਿਰੀ', '12' ],
  [ 'ਗੁਆ', '12' ],
  [ 'ਸਰਲ', '111' ],
  [ 'ਹਿਕਮਤ', '1111' ],
  [ 'ਉਜਰਤ', '1111' ],
  [ 'ਸਾਰ', '21' ],
  [ 'ਸਾਰਾ ਸਾਰੇ', '22 22' ],
  [ 'ਕੂਲਾ ਕੂਲੀ', '22 22' ],
  [ 'ਗੁਲਾਈ', '122' ],
  [ 'ਚੁੜਾਈ', '122' ],
  [ 'ਜੋੜੀਆਂ', '222' ],
  [ 'ਵੱਟਿਆਂ', '212' ],
  [ 'v`itAW', '212' ],
  [ 'v~itAW', '212' ],
  [ 'ਵੱਟੀਆਂ', '222' ],
  [ 'ਅੰਮ੍ਰਿਤ', '211' ],
  [ 'ਅੰਮ੍ਰਿਤਸਰ', '21111' ],
  [ 'ਦੇਵਿੰਦਰ', '2211' ],
  [ 'ਕਿਰਪਾਲਤਾ', '11212' ],
  [ 'ਪ੍ਰਭੂ ਪ੍ਰੇਮੀ ਪੜ੍ਹ ਚੜ੍ਹ ਦ੍ਵੈਤ', '12 22 11 11 21' ],
  [ 'pRBU pRymI pVH cVH dÍYq', '12 22 11 11 21' ],
  [ 'AYsw', '22' ],
  [ 'ਹਫ਼ਤੇ ਵਿਚ 7 ਦਿਨ', '112 11 11' ],
]

describe( 'toSyllabicSymbols()', () => {
  tests.map( ( [ input, output ] ) => it( `should convert '${input}' to '${output}'`, () => {
    expect( toSyllabicSymbols( input ) ).to.equal( output )
  } ) )
} )
