import {Home} from './pages/home.jsx'
import {Home} from './pages/about-us.jsx'
import {Home} from './pages/book-index.jsx'


export function App() {
    return <section className="app">
        <header className="app-header">
            <h1>My App</h1>
        </header>
        <main>
            <Home/>
            <aboutUs/>
            <bookIndex/>
        </main>
    </section>
}