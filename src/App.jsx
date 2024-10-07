import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, Calendar, Microscope, Users, FileText, Mail, Menu } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Component() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home', icon: Beaker },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'career', label: 'Career', icon: Microscope },
    { id: 'team', label: 'Our Team', icon: Users },
    { id: 'editorial', label: 'Publications', icon: FileText },
    { id: 'contact', label: 'Contact Us', icon: Mail },
  ];

  const events = [
    {
      title: "Event 1",
      description: "Exciting event details here!",
      image: "event1.svg",
      date: "12th October 2024",
    },
    {
      title: "Event 2",
      description: "Another great event!",
      image: "event2.svg",
      date: "15th November 2024",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden">
      <div className="pattern-animation">
        <div className="holder">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="arm">
              {[...Array(40)].map((_, j) => (
                <div key={j} className="a"></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-opacity-70 bg-green-900 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">ChESS IIT Roorkee</h1>
            <nav className="hidden md:flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'hover:bg-green-700'
                  }`}
                >
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-green-800 text-white"
          >
            <div className="container mx-auto px-4 py-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 hover:bg-green-700"
                >
                  <tab.icon size={16} className="inline-block mr-2" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Welcome to Chemical Engineering Student's Society</h2>
                <p className="text-lg mb-4">
                  We are a vibrant community of chemical engineering students at IIT Roorkee dedicated to fostering academic and professional growth.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Latest News</h3>
                    <ul className="space-y-2">
                      <li>Register now!</li>
                      <li>New committee members elected for 2023-24</li>
                      <li>Industry Connect Webinar series announced</li>
                    </ul>
                  </div>
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
                    <ul className="space-y-2">
                      <li>Competition</li>
                      <li>Guest Lecture: Sustainable Chemical Engineering</li>
                      <li>Industry Visit: Pharmaceutical Manufacturing Plant</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

{activeTab === 'events' && (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
                <Slider {...sliderSettings}>
                  {events.map((event, index) => (
                    <div key={index} className="px-2">
                      <div className="bg-green-700 rounded-lg overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-sm mb-2">{event.description}</p>
                          <p className="text-sm font-semibold">{event.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </motion.div>
            )}

            {activeTab === 'career' && (
              <motion.div
                key="career"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Career Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Internship Opportunities</h3>
                    <p>Explore summer internships and co-op positions with leading chemical engineering companies.</p>
                  </div>
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Resume Workshop</h3>
                    <p>Join our monthly resume review sessions to perfect your job application materials.</p>
                  </div>
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Industry Mentorship Program</h3>
                    <p>Connect with experienced professionals for career guidance and networking opportunities.</p>
                  </div>
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Job Board</h3>
                    <p>Access exclusive job postings for chemical engineering graduates and students.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'team' && (
              <motion.div
                key="team"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { name: "", role: "President", image: ".svg" },
                    { name: "", role: "President", image: ".svg" },
                    { name: "", role: "President", image: ".svg" },
                    { name: "", role: "President", image: ".svg" },
                    { name: "", role: "President", image: ".svg" }
                    ].map((member, index) => (
                    <div key={index} className="bg-green-700 rounded-lg overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-32 object-cover" />
                      <div className="p-2 text-center">
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'editorial' && (
              <motion.div
                key="editorial"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Publications</h2>
                <div className="space-y-4">
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">ChemE Insights Magazine</h3>
                    <p>Our quarterly publication featuring student research, industry trends, and alumni spotlights.</p>
                  </div>
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Technical Paper Series</h3>
                    <p>A collection of peer-reviewed papers authored by our students and faculty members.</p>
                  </div>
                  <div className="bg-green-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">ChemE Blog</h3>
                    <p>Regular updates on department news, events, and student experiences.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <div className="bg-green-700 rounded-lg p-4">
                  <p className="mb-2"><strong>Address:</strong> Chemical Engineering Department, IIT Roorkee, Civil Lines, Roorkee - 247667</p>
                  <p className="mb-2"><strong>Email:</strong> </p>
                  <p className="mb-2"><strong>Phone:</strong> </p>
                  <h3 className="text-xl font-semibold mt-4 mb-2">Connect with us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-green-300">Facebook</a>
                    <a href="#" className="hover:text-green-300">Twitter</a>
                    <a href="#" className="hover:text-green-300">LinkedIn</a>
                    <a href="#" className="hover:text-green-300">Instagram</a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="bg-green-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Chemical Engineering Society, IIT Roorkee. All rights reserved.</p>
          <div className="mt-2">
            <p><strong>Address:</strong> Chemical Engineering Department, IIT Roorkee, Civil Lines, Roorkee - 247667</p>
            <p><strong>Email:</strong> chess@iitr.ac.in</p>
            <p><strong>Phone:</strong> +91-1332-285311</p>
          </div>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-green-300">Facebook</a>
            <a href="#" className="hover:text-green-300">Twitter</a>
            <a href="#" className="hover:text-green-300">LinkedIn</a>
            <a href="#" className="hover:text-green-300">Instagram</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .pattern-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .holder {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .arm {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .arm:nth-child(1) { transform: rotate(0deg); }
        .arm:nth-child(2) { transform: rotate(90deg); }
        .arm:nth-child(3) { transform: rotate(180deg); }
        .arm:nth-child(4) { transform: rotate(270deg); }

        .a {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.1);
          margin: 10px;
        }

        @keyframes animate {
          0% { transform: scale(1); }
          50% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
