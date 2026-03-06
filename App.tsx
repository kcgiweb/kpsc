
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Philosophy from './pages/Philosophy';
import VisionMission from './pages/VisionMission';
import DirectorsSpeak from './pages/DirectorsSpeak';
import PrincipalsMessage from './pages/PrincipalsMessage';
import Faculty from './pages/Faculty';
import WhyKps from './pages/WhyKps';
import Campus from './pages/Campus';
import Curriculum from './pages/Curriculum';
import AcademicsOverview from './pages/AcademicsOverview';
import Academics from './pages/Academics';
import Assessment from './pages/Assessment';
import Holidays from './pages/Holidays';
import Library from './pages/Library';
import InfrastructureOverview from './pages/InfrastructureOverview';
import InfrastructureDetails from './pages/InfrastructureDetails';
import LearningProgram from './pages/LearningProgram';
import Transport from './pages/Transport';
import Security from './pages/Security';
import Wellness from './pages/Wellness';
import Timings from './pages/Timings';
import Conduct from './pages/Conduct';
import Uniform from './pages/Uniform';
import Kit from './pages/Kit';
import School from './pages/School';
import Media from './pages/Media';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Admissions from './pages/Admissions';
import Process from './pages/Process';
import Faqs from './pages/Faqs';
import Achievements from './pages/Achievements';
import Awards from './pages/Awards';
import Results from './pages/Results';
import CoCurricular from './pages/CoCurricular';
import Sports from './pages/Sports';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import GenericPage from './pages/GenericPage';
import AdmissionsPopup from './components/AdmissionsPopup';
import { PopupProvider } from './context/PopupContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <PopupProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans">
          <ScrollToTop />
          <AdmissionsPopup />
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Dedicated Pages */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/about/us" element={<AboutUs />} />
              <Route path="/about/philosophy" element={<Philosophy />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/directors-speak" element={<DirectorsSpeak />} />
              <Route path="/about/principals-message" element={<PrincipalsMessage />} />
              <Route path="/about/faculty" element={<Faculty />} />
              <Route path="/about/why-kps" element={<WhyKps />} />
              
              {/* Academics */}
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/overview" element={<AcademicsOverview />} />
              <Route path="/academics/curriculum" element={<Curriculum />} />
              <Route path="/academics/assessment" element={<Assessment />} />
              <Route path="/academics/holidays" element={<Holidays />} />
              <Route path="/academics/library" element={<Library />} />
              <Route path="/academics/*" element={<GenericPage />} />
              
              {/* Infrastructure */}
              <Route path="/infrastructure" element={<InfrastructureOverview />} />
              <Route path="/infrastructure/overview" element={<InfrastructureOverview />} />
              <Route path="/infrastructure/campus" element={<Campus />} />
              <Route path="/infrastructure/details" element={<InfrastructureDetails />} />
              <Route path="/infrastructure/lp" element={<LearningProgram />} />
              <Route path="/infrastructure/transport" element={<Transport />} />
              <Route path="/infrastructure/security" element={<Security />} />
              <Route path="/infrastructure/wellness" element={<Wellness />} />
              <Route path="/infrastructure/*" element={<GenericPage />} />
              
              {/* School Section Routes */}
              <Route path="/school" element={<School />} />
              <Route path="/school/timings" element={<Timings />} />
              <Route path="/school/conduct" element={<Conduct />} />
              <Route path="/school/uniform" element={<Uniform />} />
              <Route path="/school/kit" element={<Kit />} />
              <Route path="/school/*" element={<GenericPage />} />
              
              {/* Media Routes */}
              <Route path="/media" element={<Media />} />
              <Route path="/media/gallery" element={<Gallery />} />
              <Route path="/media/news" element={<News />} />
              <Route path="/media/*" element={<GenericPage />} />
              
              {/* Admission Routes */}
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions/process" element={<Process />} />
              <Route path="/admissions/faqs" element={<Faqs />} />
              <Route path="/admissions/*" element={<GenericPage />} />
              
              {/* Achievements Routes */}
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/achievements/awards" element={<Awards />} />
              <Route path="/achievements/results" element={<Results />} />
              <Route path="/achievements/co-curricular" element={<CoCurricular />} />
              <Route path="/achievements/sports" element={<Sports />} />
              <Route path="/achievements/*" element={<GenericPage />} />

              {/* Careers Route */}
              <Route path="/careers" element={<Careers />} />

              {/* Contact Route */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Catch-all for flat navigation items */}
              <Route path="/campus" element={<Campus />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/library" element={<GenericPage />} />
              
              {/* 404 handler */}
              <Route path="*" element={<GenericPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </PopupProvider>
  );
};

export default App;
