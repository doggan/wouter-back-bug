import './App.css'
import {Link, Route, Switch, useRoute} from "wouter";

function CharacterCreationPage() {
    console.log("### CharacterCreationPage")

    return <>CharacterCreationPage - <Link href={'/characters/123456'}>go to CharacterPage</Link></>
}

function CharacterPage() {
    const [match, params] = useRoute('/characters/:id')
    const characterId = params?.id

    console.log("### CharacterPage: ", match, characterId)

    // my other hooks here that make use of characterId
    // ...

    if (!match) {
        return null
    }

    return <>CharacterPage - <Link href={'/characters/new'}>go to CharacterCreationPage</Link></>
}

function App() {

  return (
    <>
        <Switch>
            <Route path='/characters/new' component={CharacterCreationPage} />
            <Route path='/characters/:id' component={CharacterPage} />
        </Switch>
    </>
  )
}

export default App
