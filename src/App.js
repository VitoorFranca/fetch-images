import Header from './Header'
import Section from './Section'
import Footer from './Footer'

import "./styles/Global.css"
import "./styles/SectionImages.css"
import "./styles/Form.css"
import "./styles/Header.css"

const App = () => {
  return (
    <div id="app">
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App