/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Video, Users, ExternalLink, Sparkles, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { UPCOMING_SESSION } from '../data';
import { SubmittedQuestion } from '../types';

export const SessionSection: React.FC = () => {
  const [registered, setRegistered] = useState<boolean>(false);
  const [regName, setRegName] = useState<string>('');
  const [regEmail, setRegEmail] = useState<string>('');
  const [questionText, setQuestionText] = useState<string>('');
  const [questions, setQuestions] = useState<SubmittedQuestion[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Load questions and registration from localStorage
  useEffect(() => {
    const savedReg = localStorage.getItem('hcsl_registered');
    if (savedReg === 'true') {
      setRegistered(true);
    }
    const savedQs = localStorage.getItem('hcsl_questions');
    if (savedQs) {
      try {
        setQuestions(JSON.parse(savedQs));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim()) return;

    localStorage.setItem('hcsl_registered', 'true');
    localStorage.setItem('hcsl_reg_name', regName);
    localStorage.setItem('hcsl_reg_email', regEmail);
    setRegistered(true);
    showToast('Registration successful! Google Calendar invite ready.');

    // Automatically open Google Calendar invite in a new tab
    const calendarUrl = getCalendarUrl();
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    const name = localStorage.getItem('hcsl_reg_name') || 'Anonymous Volunteer';
    const email = localStorage.getItem('hcsl_reg_email') || 'anonymous@streetcause.org';

    const newQ: SubmittedQuestion = {
      id: Date.now().toString(),
      name,
      email,
      question: questionText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [newQ, ...questions];
    setQuestions(updated);
    localStorage.setItem('hcsl_questions', JSON.stringify(updated));
    setQuestionText('');
    showToast('Your question was successfully sent to Sree Charith!');
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const getCalendarUrl = () => {
    // Session: Saturday July 11, 2026 at 8:00 PM IST (20:00 IST)
    // 8:00 PM IST is 2:30 PM UTC (14:30). Let's schedule it from 20:00 to 21:30 IST.
    const start = '20260711T143000Z';
    const end = '20260711T160000Z';
    const title = encodeURIComponent('Street Cause HCSL: Masters in Abroad with Sree Charith');
    const details = encodeURIComponent(
      `Join Sree Charith (Columbia University Alumnus & Project Engineer) for a career guidance webinar on masters admissions.\n\n` +
      `📌 Registration Form: ${UPCOMING_SESSION.registrationLink}\n` +
      `🎥 Google Meet: ${UPCOMING_SESSION.googleMeetLink}`
    );
    const location = encodeURIComponent('Online via Google Meet');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  return (
    <section id="session" className="relative py-24 bg-brand-black overflow-hidden border-t border-zinc-900">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toast Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 border border-brand-red text-white px-6 py-3 rounded-full shadow-[0_0_20px_rgba(200,16,46,0.3)] flex items-center gap-2 text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-red animate-pulse" />
              <span>{notification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">UPCOMING SESSION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Masters in <span className="text-brand-red italic">Abroad</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {UPCOMING_SESSION.subtitle}
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Event Details Poster card */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Visual Red Banner strip inside */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red to-rose-600" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-900">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">SPEAKER PROFILE</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">{UPCOMING_SESSION.speaker.name}</h3>
                <p className="text-brand-red font-semibold text-xs tracking-wider uppercase mt-1">
                  ★ SC CEB ALUMNUS ★
                </p>
              </div>
              
              {/* Profile avatar representation with Columbia details */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-display text-lg font-bold text-brand-red">
                  SC
                </div>
                <div className="text-left">
                  <p className="text-xs text-zinc-400 font-medium font-mono">Columbia Graduate</p>
                  <p className="text-[10px] text-zinc-500">M.S. Constr. Admin</p>
                </div>
              </div>
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-900 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Date</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{UPCOMING_SESSION.date}</p>
                </div>
              </div>

              <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-900 flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Time</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{UPCOMING_SESSION.time}</p>
                </div>
              </div>

              <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-900 flex items-start gap-3">
                <Video className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Mode</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{UPCOMING_SESSION.mode}</p>
                </div>
              </div>

              <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-900 flex items-start gap-3">
                <Users className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Eligibility</p>
                  <p className="text-sm font-semibold text-white mt-0.5">All SC Volunteers</p>
                </div>
              </div>
            </div>

            {/* Speaker Bio bullet points */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-mono tracking-wider text-brand-red uppercase font-semibold">ABOUT THE SPEAKER</h4>
              <ul className="space-y-3">
                {UPCOMING_SESSION.speaker.bio.map((paragraph, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 flex-shrink-0" />
                    <span>{paragraph}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Register Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={UPCOMING_SESSION.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-medium text-sm transition-all shadow-[0_4px_20px_rgba(200,16,46,0.25)] hover:shadow-[0_4px_25px_rgba(200,16,46,0.4)]"
              >
                <span>Register with Google Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={UPCOMING_SESSION.googleMeetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium text-sm transition-all"
              >
                <span>Google Meet URL</span>
                <Video className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Volunteer RSVP & Q&A Board */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Registration Box */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-4 right-4 text-zinc-800">
                <Sparkles className="w-8 h-8" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-2">Instant RSVP Reminder</h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Add this event automatically to your Google Calendar and get reminder templates by leaving your details.
              </p>

              {registered ? (
                <div className="p-6 bg-brand-red/5 border border-brand-red/20 rounded-2xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-brand-red mx-auto mb-3" />
                  <h4 className="font-display font-bold text-white text-lg">You are RSVP&apos;ed!</h4>
                  <p className="text-xs text-zinc-400 mt-2 max-w-xs mx-auto">
                    The session is scheduled for 11th July, Saturday at 8:00 PM.
                  </p>
                  
                  <button
                    onClick={() => {
                      window.open(getCalendarUrl(), '_blank');
                    }}
                    className="mt-6 w-full py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-brand-red text-white text-xs font-semibold tracking-wide uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-brand-red" />
                    Open Google Calendar Invite
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Volunteer Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sree Vardhan"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="volunteer@streetcause.org"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold tracking-wide uppercase transition-all"
                  >
                    RSVP & Generate Calendar Link
                  </button>
                </form>
              )}
            </div>

            {/* Q&A Interactive Forum Box */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-red" />
                <span>Ask Sree Charith</span>
              </h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Submit questions regarding construction administration, Ivy League admissions, portfolio building, or Columbia life. We will compile and ask them during the live Q&A!
              </p>

              <form onSubmit={handleAddQuestion} className="space-y-4 mb-6">
                <textarea
                  required
                  placeholder="Ask your question here... (e.g. What is the minimum GRE score or GPA recommended for Columbia construction management?)"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  className="w-full h-24 px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all resize-none placeholder-zinc-600"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  Submit Question
                </button>
              </form>

              {/* Questions List */}
              <div className="space-y-4 max-h-[220px] overflow-y-auto pr-1">
                <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">SUBMITTED QUESTIONS ({questions.length})</h4>
                
                {questions.length === 0 ? (
                  <p className="text-xs text-zinc-600 italic">No questions submitted yet. Be the first to ask!</p>
                ) : (
                  <div className="space-y-3">
                    {questions.map((q) => (
                      <div key={q.id} className="p-3 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-brand-red">{q.name}</span>
                          <span className="text-[10px] text-zinc-600 font-mono">{q.timestamp}</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-normal">{q.question}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
