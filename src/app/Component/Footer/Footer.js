"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Company</h3>
                        <ul>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/careers"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a
                                    href="/services"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/support"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Follow Us
                        </h3>
                        <div className="flex space-x-6">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="text-white hover:text-blue-600 transition-colors"
                            >
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="text-white hover:text-pink-600 transition-colors"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="text-white hover:text-blue-700 transition-colors"
                            >
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Newsletter
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for updates.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 mb-4 text-gray-800 rounded-md"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Your Company. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
