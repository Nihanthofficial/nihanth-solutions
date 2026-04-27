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
import { routes } from './routes';

export default function App() {
  const [activeRoute, setActiveRoute] = React.useState(routes.dashboard);

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
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            active={activeRoute === routes.dashboard}
            onClick={() => setActiveRoute(routes.dashboard)}
          />
          <NavItem 
            icon={<Users size={18} />} 
            label="Employee Directory" 
            active={activeRoute === routes.employees}
            onClick={() => setActiveRoute(routes.employees)}
          />
          <NavItem 
            icon={<CreditCard size={18} />} 
            label="Payroll & Benefits" 
            active={activeRoute === routes.payroll}
            onClick={() => setActiveRoute(routes.payroll)}
          />
          <NavItem 
            icon={<UserPlus size={18} />} 
            label="Recruiting" 
            active={activeRoute === routes.recruiting}
            onClick={() => setActiveRoute(routes.recruiting)}
          />
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
          <div className="flex items-center gap-2 ml-4">
            <HeaderAction icon={<Bell size={20} />} hasBadge />
            <HeaderAction icon={<Clock size={20} />} />
            <HeaderAction icon={<MessageSquare size={20} />} />
            
            <div className="flex items-center gap-3 border-l border-slate-200 pl-4 ml-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">Nihanth Alexander</p>
                <p className="text-[11px] text-slate-500 mt-1">System Administrator</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80" 
                alt="Profile" 
                className="w-9 h-9 rounded-full ring-2 ring-slate-100 object-cover"
              />
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
              <StatCard title="Total Headcount" value="1,248" change="+12 this month" trend="up" />
              <StatCard title="Retention Rate" value="94.2%" change="Benchmark: 88%" trend="up" />
              <StatCard title="Open Positions" value="42" change="8 urgent priority" trend="down" />
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 p-12 shadow-sm text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <LayoutDashboard className="text-slate-300" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Module View Placeholder</h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto">
                Currently viewing: <span className="font-medium text-sky-600 uppercase tracking-wider">{activeRoute.replace('/', '') || 'Dashboard'}</span>. 
                In a full application, the corresponding module component would render here.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
        active 
          ? 'bg-sky-600 text-white shadow-md shadow-sky-900/40' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
      }`}
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

function HeaderAction({ icon, hasBadge = false }) {
  return (
    <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
      {icon}
      {hasBadge && (
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
      )}
    </button>
}

function StatCard({ title, value, change, trend }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
      </div>
      <p className={`text-[11px] font-semibold mt-2 ${trend === 'up' ? 'text-emerald-600' : 'text-amber-600'}`}>
        {change}
      </p>
    </div>
  );
}
