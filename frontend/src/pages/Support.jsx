import React, { useState } from 'react';
import { Mail, MessageCircle, PlaySquare, HelpCircle, AlertCircle, ChevronDown, ListVideo, Twitter } from 'lucide-react';

function Support() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How do I upload a video to my channel?",
            answer: "Click the 'Upload' icon at the top of the interface. You can drag and drop your video file (up to 100MB supported natively). Be sure to add an engaging title, description, and an eye-catching thumbnail. Once processed by our Cloudinary integration, it will instantly appear on your channel!",
            icon: <PlaySquare className="w-5 h-5 text-blue-500" />
        },
        {
            question: "How do the 'Tweets' work here?",
            answer: "VideoTube isn't just for videos! You can engage with your audience by posting text updates. Navigate to a channel profile or the dedicated community tab and write a tweet. Your subscribers can read, like, and comment on your thoughts.",
            icon: <Twitter className="w-5 h-5 text-cyan-500" />
        },
        {
            question: "Can I organize my videos into Playlists?",
            answer: "Absolutely. Playlists are a core feature of VideoTube. When you find a video you want to save, click 'Save to Playlist'. You can create public or private collections of videos to easily curate content for yourself or your audience.",
            icon: <ListVideo className="w-5 h-5 text-purple-500" />
        },
        {
            question: "I forgot my password, how do I reset it?",
            answer: "While we don't have an automated email recovery yet in this developer build, you can always ask your database administrator to reset your hash, or simply create a new account! (Passwords are securely hashed using bcrypt).",
            icon: <HelpCircle className="w-5 h-5 text-green-500" />
        },
        {
            question: "Why is my video lagging or buffering constantly?",
            answer: "Video execution heavily depends on your internet connection and our media provider, Cloudinary. Check your network, or try refreshing the page. If the issue persists, the backend server might be performing maintenance.",
            icon: <AlertCircle className="w-5 h-5 text-red-500" />
        }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-[#121212] dark:text-white pb-20">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950/20 dark:to-blue-900/20 py-16 px-4 border-b border-gray-200 dark:border-gray-800">
                <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.2))]"></div>
                <div className="relative mx-auto max-w-4xl text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        VideoTube Support Center
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Welcome to the official help hub for VideoTube. Whether you're struggling to upload your first masterpiece or organize your playlists, we've got you covered.
                    </p>
                </div>
            </div>

            <section className="mx-auto max-w-5xl px-4 py-12">
                {/* Contact Cards */}
                <div className="grid gap-6 md:grid-cols-2 mb-16">
                    <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-500/50">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Email Support</h3>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            Drop us an email anytime. Our moderation and dev teams usually reply within 24 hours to help resolve technical backend issues.
                        </p>
                        <a href="mailto:support@videotube.com" className="inline-flex font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            support@videotube.com →
                        </a>
                    </div>
                    
                    <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] p-8 shadow-sm transition-all hover:shadow-md hover:border-indigo-500/50">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                            <MessageCircle className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Community Forum</h3>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            Use the community Tweets tab on active channels to ask your peers for advice, video collaboration, or to drop some feedback!
                        </p>
                        <button className="inline-flex font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                            Browse Tweets →
                        </button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mx-auto max-w-3xl">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-500 dark:text-gray-400">Everything you need to know about using the VideoTube platform effectively.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`rounded-xl border transition-all duration-200 ${openFaq === index ? 'border-blue-500 bg-blue-50/50 dark:border-blue-500/50 dark:bg-blue-900/10' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a]'}`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0">
                                            {faq.icon}
                                        </div>
                                        <span className="font-semibold text-lg">{faq.question}</span>
                                    </div>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openFaq === index ? 'rotate-180 text-blue-500' : ''}`} 
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-5 pt-0 ml-9">
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Support;
