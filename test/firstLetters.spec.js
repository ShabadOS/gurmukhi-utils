const { expect } = require( 'chai' )

const { firstLetters } = require( '../index' )


describe( 'firstLetters()', () => {
  const lines = [
    [ 'hir hir nwmu jphu mn myry muiK gurmuiK pRIiq lgwqI ]', 'hhnjmmmgpl]' ],
    [ 'iZir&qym sMdUk* drIXw AmIk* ]', 'ZsdA]' ],
    [ 'ijs no ik®pw krih iqin nwmu rqnu pwieAw ]', 'jnkkqnrp]' ],
    [ 'sbid mrY. so mir rhY; iPir. mrY n, dUjI vwr ]', 'sm.smr;P.mn,dv]' ],
  ]

  lines.map( ( [ line, expectedFirstLetters ] ) => it( `should generate first letters for '${line}' as '${expectedFirstLetters}'`, () => {
    expect( firstLetters( line ) ).to.equal( expectedFirstLetters )
  } ) )
} )


describe( 'firstLetters() with unicode strings', () => {
  const lines = [
    [ 'ਗੁਰਮੁਖਿ ਲਾਧਾ ਮਨਮੁਖਿ ਗਵਾਇਆ ॥', 'ਗਲਮਗ॥' ],
    [ 'ਜਿਨਿ ਹਰਿ ਸੇਵਿਆ ਤਿਨਿ ਸੁਖੁ ਪਾਇਆ ॥', 'ਜਹਸਤਸਪ॥' ],
    [ 'ਗ਼ੈਰਿ ਹਮਦਿ ਹੱਕ ਨਿਆਇਦ ਬਰ ਜ਼ਬਾਨਮ ਹੀਚ ਗਾਹ', 'ਗ਼ਹਹਨਬਜ਼ਹਗ' ],
    [ 'ਸਬਦਿ ਮਰੈ. ਸੋ ਮਰਿ ਰਹੈ; ਫਿਰਿ. ਮਰੈ ਨ, ਦੂਜੀ ਵਾਰ ॥', 'ਸਮ.ਸਮਰ;ਫ.ਮਨ,ਦਵ॥' ],
  ]

  lines.map( ( [ line, expectedFirstLetters ] ) => it( `should generate first letters for '${line}' as '${expectedFirstLetters}'`, () => {
    expect( firstLetters( line ) ).to.equal( expectedFirstLetters )
  } ) )
} )
