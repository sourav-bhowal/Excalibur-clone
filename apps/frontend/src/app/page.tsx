"use client";
import {
  Sword,
  Pencil,
  Layers,
  Share2,
  Download,
  Users,
  Zap,
  CheckCircle,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sword className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">Excalibur Draw</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => {
                router.push("/signin");
              }}
            >
              Sign in
            </button>
            <button
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Sign Up Free
            </button>
          </div>

          <button className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Unleash Your Creativity with{" "}
            <span className="text-indigo-600">Excalibur Draw</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The most powerful and intuitive drawing tool for artists, designers,
            and creative professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-lg font-medium">
              Get Started — It&apos;s Free
            </button>
            <button className="px-8 py-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-lg font-medium">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Creative Minds
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to bring your ideas to life, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-50 rounded-xl p-8">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Pencil className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Precision Drawing Tools
              </h3>
              <p className="text-gray-600">
                Professional-grade brushes, pens, and shapes with customizable
                properties for pixel-perfect artwork.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced Layering
              </h3>
              <p className="text-gray-600">
                Create complex compositions with unlimited layers, groups, and
                blending modes.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Share2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-time Collaboration
              </h3>
              <p className="text-gray-600">
                Work together with your team in real-time, no matter where they
                are in the world.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Download className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Export Flexibility
              </h3>
              <p className="text-gray-600">
                Export your work in multiple formats including PNG, SVG, PDF,
                and more with custom settings.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Templates
              </h3>
              <p className="text-gray-600">
                Access thousands of community-created templates to jumpstart
                your projects.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI-Powered Assistance
              </h3>
              <p className="text-gray-600">
                Let our AI help you perfect your artwork with smart suggestions
                and auto-enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by Creatives Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied artists and designers who&apos;ve
              elevated their work with Excalibur Draw.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                {/* <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Freelance Illustrator</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Excalibur Draw has completely transformed my workflow. The
                intuitive interface and powerful tools have helped me create my
                best work yet.&quot;
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                {/* <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="David Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h4 className="font-semibold text-gray-900">David Chen</h4>
                  <p className="text-gray-500 text-sm">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;The collaboration features are game-changing. My team can
                work together seamlessly, and the export options make handoff to
                developers a breeze.&quot;
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                {/* <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Maria Rodriguez" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Maria Rodriguez
                  </h4>
                  <p className="text-gray-500 text-sm">Art Director</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;As someone who manages multiple creative projects,
                Excalibur Draw&apos;s organization features and template system
                have saved me countless hours.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for you or your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 mb-6">
                Perfect for beginners and hobbyists
              </p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                $0
                <span className="text-lg text-gray-500 font-normal">
                  /month
                </span>
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Basic drawing tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">5 layers per project</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Basic export options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Community templates</span>
                </li>
              </ul>

              <button className="w-full py-3 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors font-medium">
                Get Started
              </button>
            </div>

            <div className="border-2 border-indigo-600 rounded-xl p-8 bg-white shadow-lg relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">
                For serious artists and designers
              </p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                $12
                <span className="text-lg text-gray-500 font-normal">
                  /month
                </span>
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">All drawing tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Unlimited layers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Advanced export options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Cloud storage (10GB)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">AI-powered features</span>
                </li>
              </ul>

              <button className="w-full py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium">
                Start 14-Day Free Trial
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Team</h3>
              <p className="text-gray-600 mb-6">
                For creative teams and studios
              </p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                $29
                <span className="text-lg text-gray-500 font-normal">
                  /user/month
                </span>
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Real-time collaboration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Team libraries & assets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Cloud storage (100GB)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Admin controls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>

              <button className="w-full py-3 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Creative Process?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of artists and designers who&apos;ve already
            discovered the power of Excalibur Draw.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition-colors text-lg font-medium">
              Start Your Free Trial
            </button>
            <button className="px-8 py-4 rounded-lg border border-white text-white hover:bg-indigo-700 transition-colors text-lg font-medium">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Excalibur Draw.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial of our Pro plan with no credit
                card required. You can also use our Free plan indefinitely.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I use Excalibur Draw on multiple devices?
              </h3>
              <p className="text-gray-600">
                Absolutely! Your subscription works across all your devices -
                desktop, tablet, and mobile. Your work syncs automatically so
                you can switch between devices seamlessly.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does the team collaboration work?
              </h3>
              <p className="text-gray-600">
                With our Team plan, multiple users can work on the same project
                simultaneously. Changes appear in real-time, and you can leave
                comments, assign tasks, and manage permissions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What file formats can I export to?
              </h3>
              <p className="text-gray-600">
                Excalibur Draw supports exporting to PNG, JPG, SVG, PDF, and
                more. Pro and Team plans include additional formats and higher
                resolution exports.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Yes, we take security seriously. All your data is encrypted both
                in transit and at rest. We use industry-standard security
                practices and regular audits to ensure your work stays safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sword className="h-6 w-6 text-indigo-400" />
                <h3 className="text-lg font-bold">Excalibur Draw</h3>
              </div>
              <p className="text-gray-400 mb-4">
                The ultimate creative tool for artists and designers.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Licenses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Excalibur Draw. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
