import store from './helpers/index.cjs.js'
import test from 'ava'
import wait from './helpers/wait'

const box = store.state.pokemonBox
const boxRef = store.getters['pokemonBox/dbRef']

test('[COLLECTION] sync: fillables & guard', async t => {
  const id = boxRef.doc().id
  store.dispatch('pokemonBox/insert', {name: 'Squirtle', id, type: ['water'], fillable: true, guarded: true, unmentionedProp: true})
    .catch(console.error)
  t.truthy(box.pokemon[id])
  t.is(box.pokemon[id].name, 'Squirtle')
  t.is(box.pokemon[id].fillable, true)
  t.is(box.pokemon[id].guarded, true) // no prop filtering on local changes
  t.is(box.pokemon[id].unmentionedProp, true) // no prop filtering on local changes
  // fetch from server to check if guarded is undefined or not
  await wait(2)
  const docR = await boxRef.doc(id).get()
  // console.log('doc Reference → ', docR)
  const doc = docR.data()
  console.log('doc → ', doc)
  t.truthy(doc)
  t.is(doc.name, 'Squirtle')
  t.is(doc.fillable, true)
  t.falsy(doc.guarded)
  t.falsy(doc.unmentionedProp)
  t.is(doc.guarded, undefined)
  t.is(doc.unmentionedProp, undefined)
})

test('[DOC] sync: fillables & guard', async t => {
  t.pass()
})

test('[COLLECTION] sync: insertHook & patchHook', async t => {
  const id = boxRef.doc().id
  store.dispatch('pokemonBox/set', {name: 'Horsea', id, type: ['water']})
  t.truthy(box.pokemon[id])
  t.is(box.pokemon[id].name, 'Horsea')
  t.is(box.pokemon[id].addedBeforeInsert, true)
  t.is(box.pokemon[id].addedBeforePatch, undefined)
  store.dispatch('pokemonBox/set', {id, name: 'James'})
  t.is(box.pokemon[id].addedBeforeInsert, true)
  t.is(box.pokemon[id].addedBeforePatch, true)
  store.dispatch('pokemonBox/delete', id)
  t.falsy(box.pokemon[id])
})

test('[COLLECTION] sync: deleteHook', async t => {
  const id = 'stopBeforeDelete'
  store.dispatch('pokemonBox/set', {name: 'Ditto', id, type: ['normal']})
  t.truthy(box.pokemon[id])
  store.dispatch('pokemonBox/delete', id)
  t.truthy(box.pokemon[id])
})

test('[DOC] sync: patchHook', async t => {
  t.pass()
})
