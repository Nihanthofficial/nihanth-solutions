import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  UserPlus, 
  Settings, 
  HelpCircle,
  Search,
  Bell,
  Clock,
  MessageSquare
} from 'lucide-react';

export default function App() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="p-6">
          <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <h1 className="text-lg font-bold text-white tracking-tight leading-none">NIHANTH COMPANY</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">HCM Enterprise</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem icon={<Users size={18} />} label="Employee Directory" />
          <NavItem icon={<CreditCard size={18} />} label="Payroll & Benefits" />
          <NavItem icon={<UserPlus size={18} />} label="Recruiting" />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<HelpCircle size={18} />} label="Support" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="search" 
              placeholder="Search employees, files, or reports..." 
              className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-sky-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">Nihanth Alexander</p>
                <p className="text-[11px] text-slate-500 mt-1">System Administrator</p>
              </div>
              <div className="w-9 h-9 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Welcome back, Nihanth</h2>
              <p className="text-slate-500">Here's a summary of your organization's status today.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Headcount</p>
                <h3 className="text-3xl font-bold text-slate-900">1,248</h3>
                <p className="text-[11px] font-semibold mt-2 text-emerald-600">+12 this month</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Retention Rate</p>
                <h3 className="text-3xl font-bold text-slate-900">94.2%</h3>
                <p className="text-[11px] font-semibold mt-2 text-emerald-600">Benchmark: 88%</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Open Positions</p>
                <h3 className="text-3xl font-bold text-slate-900">42</h3>
                <p className="text-[11px] font-semibold mt-2 text-amber-600">8 urgent priority</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 p-12 shadow-sm text-center">
              <LayoutDashboard className="text-slate-200 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-semibold text-slate-900">Dashboard Loaded</h3>
              <p className="text-slate-500 mt-2">The core HCM shell is active and ready for module integration.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
      active 
        ? 'bg-sky-600 text-white shadow-md' 
        : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}>
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}
