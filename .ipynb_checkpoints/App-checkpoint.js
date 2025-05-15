import React from 'react';
import './App.css';
import YouTubeEmbed from './components/YouTubeEmbed';
import LinkedInBadge from './components/LinkedInBadge';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Let’s Talk About Data</h1>
        <p>Professional insights. Real-world data. AI-driven learning.</p>
      </header>
      <main>
        <YouTubeEmbed embedId="FuixsgxENhw" />
        <LinkedInBadge />
      </main>
      <Footer />
    </div>
  );
}

export default App;
