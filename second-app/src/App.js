
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Box from './Box';

const persons = [
  {
    name: 'Margit',
    title: 'CEO',
    age: 29,
    languages: [
      { name: 'english', id: 1 },
      { name: 'finnish', id: 2 },
      { name: 'russian', id: 3 },
    ],
  },
  {
    name: 'Kati',
    title: 'Developer',
    age: 25,
    languages: [
      { name: 'english', id: 1 },
      { name: 'finnish', id: 2 },
      { name: 'russian', id: 3 },
      { name: 'spanish', id: 4 },
    ],
  },
  {
    name: 'Karin',
    title: 'Designer',
    age: 45,
    languages: [
      { name: 'english', id: 1 },
      { name: 'russian', id: 2 },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {persons.map((person) => (
          < Box
            key={person.name}
            name={person.name}
            title={person.title}
            age={person.age}
            lang={person.languages.map((lang) => (<li key="lang.id">{lang.name}</li>))}
          />
        ))}
      </main>
      <Footer />
    </div>

  );
}

export default App;
