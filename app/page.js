// app/page.js

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-8 sm:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
            AI Finance Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Track your budgets, expenses, and savings with AI-driven insights.
          </p>
        </header>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Smart Budgeting</h2>
            <p className="text-gray-500">AI-generated monthly budget plans tailored to you.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Expense Tracking</h2>
            <p className="text-gray-500">Visualize and control your spending habits.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Investment Insights</h2>
            <p className="text-gray-500">Get personalized investment suggestions using AI.</p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full transition"
          >
            Go to Dashboard →
          </a>
        </div>
      </div>
    </main>
  );
}
