export default function FarmohWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-slate-950 to-blue-950"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
              🌾 Smart Agri-Tech Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              FARMOH
              <span className="block text-green-400 mt-2">
                Digital Labour Marketplace
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-8 max-w-xl">
              Connecting farmers and workers through smart bidding,
              transparent hiring, and real-time agricultural workforce management.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-green-500/20">
                Get Started
              </button>

              <button className="border border-slate-700 hover:border-green-400 hover:text-green-400 transition px-8 py-4 rounded-2xl font-semibold text-lg">
                View Demo
              </button>
            </div>

            <div className="flex gap-10 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-green-400">10K+</h3>
                <p className="text-slate-400 mt-1">Farmers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-400">25K+</h3>
                <p className="text-slate-400 mt-1">Workers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-400">50K+</h3>
                <p className="text-slate-400 mt-1">Jobs Completed</p>
              </div>
            </div>
          </div>

          <div className="mt-20 lg:mt-0 relative">
            <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-4 shadow-2xl shadow-green-500/10 w-[340px]">
              <div className="bg-slate-950 rounded-[30px] overflow-hidden">
                <div className="bg-green-600 px-5 py-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">FARMOH</h3>
                    <p className="text-xs opacity-80">Farmer Dashboard</p>
                  </div>
                  <div className="text-2xl">🌾</div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Paddy Harvesting</h4>
                      <span className="text-green-400 text-sm">6 bids</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">Budget ₹500/day</p>
                    <button className="w-full bg-green-500 py-2 rounded-xl font-medium">
                      Compare Bids
                    </button>
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Murugan K.</h4>
                        <p className="text-slate-400 text-sm">Top Rated Worker</p>
                      </div>
                      <div className="text-green-400 text-xl font-bold">₹420</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-400 font-semibold uppercase tracking-widest mb-3">
              Platform Features
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">
              Everything Farmers Need
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              FARMOH simplifies labour hiring with a modern digital workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📍',
                title: 'Nearby Job Discovery',
                desc: 'Workers can instantly discover nearby agricultural jobs using GPS.'
              },
              {
                icon: '💰',
                title: 'Transparent Bidding',
                desc: 'Farmers compare bids and choose the best worker based on wage and rating.'
              },
              {
                icon: '⭐',
                title: 'Worker Ratings',
                desc: 'Trust-based ecosystem with reviews and worker performance tracking.'
              },
              {
                icon: '📲',
                title: 'Real-Time Notifications',
                desc: 'Instant alerts for new bids, approvals, and attendance confirmation.'
              },
              {
                icon: '🧾',
                title: 'Digital Deal Closure',
                desc: 'Close labour deals digitally with secure confirmations.'
              },
              {
                icon: '📊',
                title: 'Analytics Dashboard',
                desc: 'Track worker attendance, wage analytics, and hiring insights.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-green-500/40 transition"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-7">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-400 font-semibold uppercase tracking-widest mb-3">
              User Journey
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              How FARMOH Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-green-500/10 to-green-900/10 border border-green-500/20 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-green-400">
                🌾 Farmer Flow
              </h3>

              <div className="space-y-5">
                {[
                  'Login to FARMOH',
                  'Post agricultural job',
                  'Receive worker bids',
                  'Compare wages & ratings',
                  'Hire best worker',
                  'Track work progress'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/60 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-900/10 border border-blue-500/20 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-blue-400">
                👷 Worker Flow
              </h3>

              <div className="space-y-5">
                {[
                  'Login to platform',
                  'View nearby jobs',
                  'Submit wage bid',
                  'Receive approval',
                  'Confirm attendance',
                  'Complete work & earn'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/60 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-400 font-semibold uppercase tracking-widest mb-3">
              Technology
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Modern Tech Architecture
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'React.js',
              'Node.js',
              'Express API',
              'MongoDB'
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-3xl py-12 text-center hover:border-green-500/40 transition"
              >
                <h3 className="text-3xl font-bold text-green-400 mb-3">
                  {tech}
                </h3>
                <p className="text-slate-400">Enterprise Ready</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-[40px] p-16 text-center shadow-2xl shadow-green-500/20">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Agriculture?
            </h2>

            <p className="text-green-50 text-xl max-w-2xl mx-auto leading-8 mb-10">
              FARMOH empowers farmers and workers with smart digital hiring,
              transparent bidding, and scalable workforce management.
            </p>

            <button className="bg-white text-green-700 hover:bg-slate-100 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-lg">
              Launch Platform
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-green-400">FARMOH</h3>
            <p className="text-slate-500 mt-1">
              Smart Agricultural Labour Marketplace
            </p>
          </div>

          <div className="flex gap-8 text-slate-400">
            <a href="#" className="hover:text-green-400 transition">Home</a>
            <a href="#" className="hover:text-green-400 transition">Features</a>
            <a href="#" className="hover:text-green-400 transition">Pricing</a>
            <a href="#" className="hover:text-green-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
