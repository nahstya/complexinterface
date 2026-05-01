import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Bell, 
  Settings, 
  ArrowLeft, 
  Info, 
  Power, 
  SunDim, 
  Sun, 
  BarChart3, 
  Activity, 
  Sparkles, 
  Lock, 
  Unlock, 
  ChevronRight, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  Shield, 
  Thermometer, 
  Speaker, 
  Wifi, 
  Utensils, 
  Scan, 
  Undo,
  Circle,
  MoreVertical,
  MoreHorizontal,
  Lightbulb,
  DoorOpen,
  DoorClosed,
  Warehouse,
  Moon,
  Accessibility,
  Key,
  ShieldAlert,
  Tv,
  Coffee,
  Wind,
  Archive,
  Fan,
  Radio,
  Check,
  Delete,
  Fingerprint,
  Camera,
  Cpu,
  AlertTriangle,
  Mic
} from 'lucide-react';

// --- Types ---
type Screen = 
  | 'DASHBOARD' 
  | 'NOTIFICATIONS' 
  | 'SETTINGS' 
  | 'LIGHTING' 
  | 'ADD_DEVICE_CATEGORIES' 
  | 'ADD_DEVICE_LEGAL' 
  | 'ADD_DEVICE_CONFIG' 
  | 'AUTOMATION_BUILDER' 
  | 'SYSTEM_ANALYSIS' 
  | 'AWAY_DEACTIVATE_1' 
  | 'AWAY_DEACTIVATE_2' 
  | 'AWAY_DEACTIVATE_3' 
  | 'AWAY_DEACTIVATE_4' 
  | 'AWAY_DEACTIVATE_5' 
  | 'AWAY_DEACTIVATE_6' 
  | 'AWAY_DEACTIVATE_7';

// --- Components ---

const Layout = ({ 
  children, 
  activeTab, 
  setTab, 
  title, 
  onBack, 
  isSyncing, 
  setIsSyncing 
}: { 
  children: React.ReactNode, 
  activeTab: string, 
  setTab: (t: Screen) => void, 
  title?: string, 
  onBack?: () => void,
  isSyncing: boolean,
  setIsSyncing: (b: boolean) => void
}) => {
  return (
    <div className="h-screen md:h-[812px] md:my-8 bg-surface flex flex-col max-w-md mx-auto relative overflow-hidden shadow-2xl md:rounded-[3rem] border-8 border-transparent">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg px-6 h-16 flex items-center justify-between border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 -ml-2 hover:bg-surface-container transition-colors rounded-full text-primary">
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="font-headline font-bold text-lg text-on-surface tracking-tight">{title || "Trust Lab"}</h1>
        </div>
        <div className="flex items-center gap-2">
          {activeTab === 'DASHBOARD' && (
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsSyncing(!isSyncing)}
                className={`p-2 rounded-full hover:bg-surface-container transition-all ${isSyncing ? 'animate-spin text-primary' : 'text-outline'}`}
              >
                <Undo size={20} />
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container shadow-sm border border-outline-variant/20">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
              </div>
            </div>
          )}
          {activeTab !== 'DASHBOARD' && <MoreVertical size={20} className="text-outline" />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-28 px-4 overflow-y-auto no-scrollbar">
        <div className="flex bg-surface-container-high/50 p-1 rounded-full mb-6 border border-outline-variant/10">
          <div className="flex-1 text-[8px] font-mono text-outline flex items-center justify-center border-r border-outline-variant/20 tracking-tighter uppercase p-1">CPU: 4% @ 1.4GHz</div>
          <div className="flex-1 text-[8px] font-mono text-primary flex items-center justify-center border-r border-outline-variant/20 tracking-tighter uppercase p-1">NET: 1.4KB/S</div>
          <div className="flex-1 text-[8px] font-mono text-tertiary flex items-center justify-center tracking-tighter uppercase p-1">RSSI: -64DBM</div>
        </div>
        {children}
      </main>

      {/* Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl px-4 pb-8 pt-3 flex justify-around items-center rounded-t-[2.5rem] shadow-[0px_-8px_24px_rgba(0,0,0,0.04)]">
        <button 
          onClick={() => setTab('DASHBOARD')}
          className={`flex flex-col items-center gap-1.5 px-6 py-2 rounded-2xl transition-all ${activeTab === 'DASHBOARD' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-400'}`}
        >
          <Home size={24} strokeWidth={activeTab === 'DASHBOARD' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Главная</span>
        </button>
        <button 
          onClick={() => setTab('NOTIFICATIONS')}
          className={`flex flex-col items-center gap-1.5 px-6 py-2 rounded-2xl transition-all ${activeTab === 'NOTIFICATIONS' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-400'}`}
        >
          <Bell size={24} strokeWidth={activeTab === 'NOTIFICATIONS' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Уведомления</span>
        </button>
        <button 
          onClick={() => setTab('SETTINGS')}
          className={`flex flex-col items-center gap-1.5 px-6 py-2 rounded-2xl transition-all ${activeTab === 'SETTINGS' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-400'}`}
        >
          <Settings size={24} strokeWidth={activeTab === 'SETTINGS' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Настройки</span>
        </button>
      </nav>
    </div>
  );
};

export default function App() {
  const [speakerAdded, setSpeakerAdded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [consents, setConsents] = useState({ data: false, update: false, analytics: false });
  const [showLegalError, setShowLegalError] = useState(false);

  const [pin, setPin] = useState('');
  const [riskAcknowledged, setRiskAcknowledged] = useState(false);

  const [automationConfig, setAutomationConfig] = useState<{
    ifDevice: string | null;
    ifEvent: string | null;
    andStartTime: string;
    andEndTime: string;
    thenDevice: string | null;
    thenAction: string | null;
    pwmValue: number;
    protocolId: string;
    description: string;
  }>({
    ifDevice: null,
    ifEvent: null,
    andStartTime: '00:00',
    andEndTime: '00:00',
    thenDevice: null,
    thenAction: null,
    pwmValue: 20,
    protocolId: 'NEW_PROTO_0x' + Math.floor(Math.random()*999).toString(16).toUpperCase(),
    description: 'Ожидание конфигурации...'
  });

  const [screen, setScreen] = useState<Screen>('DASHBOARD');
  const [awayMode, setAwayMode] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [brightness, setBrightness] = useState(85);
  const [tvOn, setTvOn] = useState(false);
  const [acOn, setAcOn] = useState(true);
  const [coffeeOn, setCoffeeOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);
  const [tempColor, setTempColor] = useState<'warm' | 'natural'>('warm');
  const [scaleType, setScaleType] = useState<'linear' | 'log'>('linear');

  // --- Screens ---

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-headline font-black text-3xl tracking-tight">Мой Дом</h2>
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
           СИСТЕМА OK
        </div>
      </div>

      <section className="flex gap-4 overflow-x-auto pb-2 snap-x hide-scrollbar">
        {[
          { icon: <Circle className="text-primary-container fill-primary-container" />, val: "18°C", label: "На улице" },
          { icon: <Circle className="text-tertiary-container fill-tertiary-container" />, val: "2.4", label: "кВт·ч сегодня" },
          { icon: <Shield className="text-primary fill-primary" />, val: awayMode ? "Тревога" : "Охрана", label: "Система" },
        ].map((item, i) => (
          <div key={i} className="snap-start shrink-0 w-32 h-32 rounded-[24px] bg-surface-container-lowest flex flex-col justify-between p-4 shadow-sm border border-outline-variant/5">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">{item.icon}</div>
            <div>
              <span className="text-2xl font-bold font-headline block">{item.val}</span>
              <span className="text-[10px] uppercase font-bold text-on-surface-variant opacity-60 tracking-wider">{item.label}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-surface-container-low rounded-[24px] p-2 border border-outline-variant/10">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-primary" />
            <h2 className="font-headline font-bold text-lg">Безопасность</h2>
          </div>
          <MoreHorizontal size={20} className="text-outline" />
        </div>
        <div className="bg-surface-container-lowest rounded-[20px] p-1 flex flex-col">
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 flex items-center justify-center text-primary"><Lock size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Входная дверь</p>
                <p className="text-[10px] text-outline">заряд: 87%</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-primary bg-primary-fixed/30 px-3 py-1 rounded-full">ЗАКРЫТО</span>
          </div>
          <div className="p-4 border-t border-outline-variant/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 flex items-center justify-center text-primary"><Warehouse size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Гараж</p>
                <p className="text-[10px] text-outline">закрыт</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-error bg-error-container/40 px-3 py-1 rounded-full">ОТКРЫТО</span>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[24px] p-2 border border-outline-variant/10">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Home size={18} className="text-primary" />
            <h2 className="font-headline font-bold text-lg">Гостиная</h2>
          </div>
          <MoreHorizontal size={20} className="text-outline" />
        </div>
        <div className="bg-surface-container-lowest rounded-[20px] p-4 space-y-4">
          <div 
            onClick={() => setScreen('LIGHTING')}
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 flex items-center justify-center text-primary"><Lightbulb size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Потолочный свет</p>
                <p className="text-[10px] text-primary font-bold">Вкл {brightness}% • 2700K</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-outline" />
          </div>

          <div className="flex gap-2 pl-[52px]">
            <button 
              onClick={(e) => { e.stopPropagation(); setTempColor('warm'); }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${tempColor === 'warm' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-surface-container-high text-outline border-outline-variant/10'}`}
            >
              Тёплый
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setTempColor('natural'); }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${tempColor === 'natural' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-surface-container-high text-outline border-outline-variant/10'}`}
            >
              Естеств.
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 flex items-center justify-center text-primary"><Tv size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Умный ТВ</p>
                <p className="text-[10px] text-outline">{tvOn ? 'Включен • YouTube' : 'Режим ожидания'}</p>
              </div>
            </div>
            <button 
              onClick={() => setTvOn(!tvOn)}
              className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${tvOn ? 'bg-primary' : 'bg-surface-container-high'}`}
            >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${tvOn ? 'translate-x-5' : ''}`}></div>
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 flex items-center justify-center text-primary"><Wind size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Кондиционер</p>
                <p className={`text-[10px] font-bold transition-colors ${acOn ? 'text-primary' : 'text-outline'}`}>{acOn ? 'Охлаждение • 22°C' : 'Выключен'}</p>
              </div>
            </div>
            <button 
              onClick={() => setAcOn(!acOn)}
              className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${acOn ? 'bg-primary' : 'bg-surface-container-high'}`}
            >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${acOn ? 'translate-x-5' : ''}`}></div>
            </button>
          </div>

          {speakerAdded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex justify-between items-center pt-2 border-t border-outline-variant/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 flex items-center justify-center text-primary"><Speaker size={20} /></div>
                <div>
                  <p className="font-semibold text-sm">Veridian Echo</p>
                  <p className="text-[10px] text-primary font-bold">Lo-fi Chill Radio • 45%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <div className="flex gap-0.5 items-end h-3">
                    {[1, 2, 3, 4].map(i => (
                      <motion.div 
                        key={i} 
                        animate={{ height: [4, 12, 6, 10, 4] }} 
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                        className="w-0.5 bg-primary rounded-full"
                      />
                    ))}
                 </div>
                 <button className="w-10 h-5 bg-primary rounded-full flex items-center px-0.5 justify-end">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                 </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Kitchen Section */}
      <section className="bg-surface-container-low rounded-[24px] p-2 border border-outline-variant/10">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Utensils size={18} className="text-secondary" />
            <h2 className="font-headline font-bold text-lg">Кухня</h2>
          </div>
          <MoreHorizontal size={20} className="text-outline" />
        </div>
        <div className="bg-surface-container-lowest rounded-[20px] p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary"><Archive size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Холодильник</p>
                <p className="text-[10px] text-outline">Температура: +4°C</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-secondary bg-secondary/20 px-3 py-1 rounded-full">OK</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary"><Coffee size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Кофеварка</p>
                <p className="text-[10px] text-outline">{coffeeOn ? 'Приготовление эспрессо...' : 'Готова к работе'}</p>
              </div>
            </div>
            <button 
              onClick={() => setCoffeeOn(!coffeeOn)}
              className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${coffeeOn ? 'bg-secondary' : 'bg-surface-container-high'}`}
            >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${coffeeOn ? 'translate-x-5' : ''}`}></div>
            </button>
          </div>
        </div>
      </section>

      {/* Bathroom Section */}
      <section className="bg-surface-container-low rounded-[24px] p-2 border border-outline-variant/10">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wind size={18} className="text-tertiary" />
            <h2 className="font-headline font-bold text-lg">Ванная</h2>
          </div>
          <MoreHorizontal size={20} className="text-outline" />
        </div>
        <div className="bg-surface-container-lowest rounded-[20px] p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary"><Fan size={20} /></div>
              <div>
                <p className="font-semibold text-sm">Вытяжка</p>
                <p className="text-[10px] text-outline transition-colors leading-tight">
                  <span className={fanOn ? 'text-tertiary font-bold' : 'text-outline'}>{fanOn ? 'Активна (2-я скор.)' : 'Выключена'}</span>
                </p>
              </div>
            </div>
            <button 
              onClick={() => setFanOn(!fanOn)}
              className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${fanOn ? 'bg-tertiary' : 'bg-surface-container-high'}`}
            >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${fanOn ? 'translate-x-5' : ''}`}></div>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[24px] p-6 border border-outline-variant/10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-outline">
            <Info size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Статус узлов</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { id: "0xAF", st: "OK" },
            { id: "0xBC", st: "WAIT" },
            { id: "0x12", st: "OK" },
            { id: "0xFF", st: "ERR" },
          ].map((node, i) => (
            <div key={i} className="p-2 bg-surface-container-lowest rounded-lg text-center">
              <p className="text-[8px] text-outline font-mono">{node.id}</p>
              <p className={`text-[10px] font-bold ${node.st === 'ERR' ? 'text-error' : node.st === 'OK' ? 'text-primary' : 'text-secondary'}`}>{node.st}</p>
            </div>
          ))}
        </div>
      </section>

      <section 
        onClick={() => setScreen('SYSTEM_ANALYSIS')}
        className="bg-surface-container-low rounded-[24px] p-6 border border-outline-variant/10 cursor-pointer"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-outline">
            <BarChart3 size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Аналитика системы</span>
          </div>
          <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full">АКТИВНО</span>
        </div>
        <div className="h-24 flex items-end justify-between gap-1">
          {[40, 60, 45, 90, 80, 50, 70, 40, 85, 30, 20].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
          ))}
        </div>
        <p className="mt-4 text-[10px] text-outline font-mono">Последний лог: [DEBUG] опрос_датчика_4: 142лк</p>
      </section>
    </div>
  );

  const LightingControl = () => (
    <div className="space-y-6">
      <section className="bg-surface-container-lowest rounded-2xl p-6 flex items-center justify-between relative overflow-hidden">
        <div className="z-10">
          <h2 className="font-headline font-bold text-3xl">Свет</h2>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,194,139,0.4)]"></div>
            <span>Включено</span>
          </div>
        </div>
        <button className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform">
          <Power size={32} />
        </button>
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl"></div>
      </section>

      <section className="bg-surface-container-lowest rounded-2xl p-6 space-y-6 shadow-sm border border-outline-variant/5">
        <div className="flex justify-between items-baseline">
          <h3 className="font-headline font-bold text-xl">Яркость</h3>
          <div className="text-2xl font-bold text-primary flex items-baseline">
            <span>{brightness}</span>
            <span className="text-sm ml-1 opacity-60">%</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-outline mb-2">
            <span>Тип шкалы</span>
            <div className="flex bg-surface-container-low rounded-lg p-1 gap-1">
              <button 
                onClick={() => setScaleType('linear')}
                className={`px-3 py-1.5 rounded-md transition-all ${scaleType === 'linear' ? 'bg-white text-primary shadow-sm' : ''}`}
              >Линейная</button>
              <button 
                onClick={() => setScaleType('log')}
                className={`px-3 py-1.5 rounded-md transition-all ${scaleType === 'log' ? 'bg-white text-primary shadow-sm' : ''}`}
              >Логарифм.</button>
            </div>
        </div>

        <div className="relative h-16 bg-surface-container-low rounded-3xl overflow-hidden cursor-pointer">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-container to-primary transition-all duration-300"
            style={{ width: `${brightness}%` }}
          ></div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={brightness} 
            onChange={(e) => setBrightness(parseInt(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="absolute inset-0 flex justify-between items-center px-6 pointer-events-none text-white/50">
            <SunDim size={18} />
            <Sun size={18} />
          </div>
        </div>

        <p className="text-[10px] text-outline leading-relaxed italic text-center px-4">
          При выборе логарифмической шкалы (dB) восприятие яркости соответствует закону Вебера-Фехнера. Текущее значение: {Math.round(Math.log10(brightness || 1) * 50)} мкд/м²
        </p>
      </section>

      <section className="bg-surface-container-low rounded-2xl p-1.5 space-y-1.5">
        <div className="bg-surface-container-lowest rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg text-primary"><Activity size={18}/></div>
            <span className="font-headline font-bold">Скорость затухания</span>
          </div>
          <div className="flex bg-surface-container-low p-1 rounded-xl">
            {['Медленно', 'Обычно', 'Быстро'].map((opt) => (
              <button key={opt} className={`flex-1 py-2 text-xs font-bold rounded-lg ${opt === 'Обычно' ? 'bg-white shadow-sm' : 'text-outline'}`}>{opt}</button>
            ))}
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-outline uppercase font-bold tracking-tighter">PWM Duty Cycle: {(brightness * 2.55).toFixed(0)}/255</p>
            <p className="text-[10px] text-outline uppercase font-bold tracking-tighter">Frequency: 1.2kHz (Stable)</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg text-primary"><Sparkles size={18}/></div>
            <span className="font-headline font-bold">Сценарии перехода</span>
          </div>
          <div className="space-y-2">
            {['Мягкий рассвет', 'Динамичный вечер', 'Мгновенное вкл/выкл'].map((s) => (
              <div key={s} className={`p-4 rounded-xl border flex justify-between items-center ${s === 'Динамичный вечер' ? 'border-primary ring-2 ring-primary/10 bg-primary/5' : 'border-outline-variant/20'}`}>
                <span className={`text-sm font-semibold ${s === 'Динамичный вечер' ? 'text-primary' : ''}`}>{s}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${s === 'Динамичный вечер' ? 'border-primary' : 'border-outline-variant/40'}`}>
                  {s === 'Динамичный вечер' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const SettingsScreen = () => (
    <div className="space-y-6">
      <section>
        <div className="flex justify-between items-baseline mb-4">
          <h2 className="font-headline font-bold text-2xl">Режимы</h2>
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">2 Настроено</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 space-y-4">
           <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary"><Moon size={20} /></div>
                <div>
                  <h3 className="font-bold">Вечерний режим</h3>
                  <p className="text-[10px] text-outline">Активируется при закате</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full translate-x-6"></div>
              </div>
           </div>

           <div className="bg-surface-container-low p-4 rounded-xl font-mono text-[11px] space-y-2">
              <div className="flex gap-2">
                <span className="text-primary font-bold">ЕСЛИ</span>
                <span className="bg-white px-2 rounded opacity-80">Время 18:00</span>
                <span className="text-primary font-bold">И</span>
                <span className="bg-white px-2 rounded opacity-80">Освещенность &lt; 150лк</span>
              </div>
              <div className="pl-4 border-l-2 border-primary/20 space-y-1">
                <div className="flex justify-between text-outline">
                  <span>Гостиная: Свет</span>
                  <span className="font-bold text-primary">60%</span>
                </div>
                <div className="flex justify-between text-outline">
                  <span>Температура</span>
                  <span className="font-bold text-primary">22°C</span>
                </div>
              </div>
           </div>

           <div className="flex justify-end pt-2">
              <button 
                onClick={() => setScreen('AUTOMATION_BUILDER')}
                className="text-primary text-[10px] font-bold flex items-center gap-1"
              >
                <Settings size={14} /> Настроить логику
              </button>
           </div>
        </div>

        <div className="mt-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary"><Accessibility size={20} /></div>
              <div>
                <h3 className="font-bold">Я ушел</h3>
                <p className="text-[10px] text-outline">Безопасность и экономия</p>
              </div>
            </div>
            <div 
              onClick={() => {
                if(awayMode) setScreen('AWAY_DEACTIVATE_1');
                else setAwayMode(true);
              }}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${awayMode ? 'bg-primary' : 'bg-surface-container-high'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${awayMode ? 'translate-x-6' : ''}`}></div>
            </div>
        </div>

        <button 
          onClick={() => {
            setAutomationConfig({
              ifDevice: null,
              ifEvent: null,
              andStartTime: '00:00',
              andEndTime: '00:00',
              thenDevice: null,
              thenAction: null,
              pwmValue: 20,
              protocolId: 'NEW_PROTO_0x' + Math.floor(Math.random()*999).toString(16).toUpperCase(),
              description: 'Ожидание конфигурации...'
            });
            setScreen('AUTOMATION_BUILDER');
          }}
          className="mt-6 w-full py-4 bg-surface-container-lowest text-primary font-bold rounded-xl border border-primary/20 shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Sparkles size={18} /> Создать автоматический режим
        </button>
      </section>

      <section className="space-y-4">
        <h2 className="font-headline font-bold text-2xl">Устройства</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { n: "Входная дверь", icons: <DoorOpen size={18} /> },
            { n: "Задняя дверь", icons: <DoorClosed size={18} /> },
            { n: "Гараж", icons: <Warehouse size={18} /> },
            { n: "Свет в гостиной", icons: <Lightbulb size={18} /> },
          ].map((d, i) => (
            <div key={i} className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 flex items-center gap-3">
              <div className="text-primary">{d.icons}</div>
              <span className="text-[11px] font-bold truncate">{d.n}</span>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setScreen('ADD_DEVICE_CATEGORIES')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          <Circle size={16} className="fill-white" /> Добавить устройство
        </button>
      </section>
    </div>
  );

  const AutomationBuilder = () => {
    const devices = [
      { id: 'NODE_0x14', name: 'Датчик: Коридор', type: 'PIR' },
      { id: 'NODE_0x08', name: 'Датчик: Гостиная', type: 'PIR' },
      { id: 'NODE_0x22', name: 'Датчик: Кухня', type: 'PIR' },
      { id: 'NODE_0x45', name: 'Датчик двери: Вход', type: 'MAG' },
      { id: 'NODE_0x33', name: 'Датчик протечки: Ванная', type: 'WATER' },
      { id: 'NODE_0x11', name: 'Датчик CO2: Кухня', type: 'GAS' },
    ];

    const actions = [
      { id: 'BATH_LIGHT', name: 'Свет: Ванная', type: 'ACTUATOR' },
      { id: 'LIVING_LIGHT', name: 'Свет: Гостиная', type: 'ACTUATOR' },
      { id: 'AC_UNIT', name: 'Кондиционер', type: 'ACTUATOR' },
      { id: 'SMART_PLUG_01', name: 'Умная розетка', type: 'PLUG' },
      { id: 'ALARM_SIREN', name: 'Сирена тревоги', type: 'ALARM' },
      { id: 'COFFEE_MAKER', name: 'Кофемашина', type: 'APPLIANCE' },
      { id: 'HUMIDIFIER_NODE', name: 'Увлажнитель', type: 'APPLIANCE' },
    ];

    const updateDesc = (config: any) => {
      const ifTxt = config.ifDevice ? `IF ${config.ifDevice}` : 'IF NULL';
      const andTxt = config.andStartTime !== config.andEndTime ? ` AND TIME IN [${config.andStartTime}-${config.andEndTime}]` : '';
      const thenTxt = config.thenDevice ? ` THEN ${config.thenDevice} = ${config.thenAction || 'ON'}` : ' THEN DO NOTHING';
      return `OBJECTIVE: ${ifTxt}${andTxt}${thenTxt}`.toUpperCase();
    };

    return (
      <div className="space-y-6">
        <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 space-y-2">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Протокол автоматизации: {automationConfig.protocolId}</p>
          <p className="text-[9px] text-outline font-mono leading-tight">{automationConfig.description}</p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-white px-2 py-0.5 rounded text-[10px] font-bold font-mono">IF (Логическое ЕСЛИ)</span>
            <div className="h-px flex-1 bg-outline-variant/20"></div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl space-y-3 border border-outline-variant/20 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1 bg-primary"></div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-[9px] text-outline font-bold">SOURCE_ID (Входной узел)</p>
                <select 
                  className="w-full bg-surface-container-low border-none rounded-lg text-xs font-mono font-bold p-3"
                  value={automationConfig.ifDevice || ''}
                  onChange={(e) => {
                    const newConfig = { ...automationConfig, ifDevice: e.target.value };
                    newConfig.description = updateDesc(newConfig);
                    setAutomationConfig(newConfig);
                  }}
                >
                  <option value="">-- ВЫБЕРИТЕ УЗЕЛ --</option>
                  {devices.map(d => <option key={d.id} value={d.id}>{d.id} // {d.name}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] text-outline font-bold">EVENT_CAPTURE (Триггер)</p>
                <select 
                  className="w-full bg-surface-container-low border-none rounded-lg text-xs font-bold p-3"
                  value={automationConfig.ifEvent || ''}
                  onChange={(e) => setAutomationConfig({...automationConfig, ifEvent: e.target.value})}
                >
                  <option value="">-- ВЫБЕРИТЕ СОБЫТИЕ --</option>
                  <option value="MOTION">ДВИЖЕНИЕ == TRUE</option>
                  <option value="TEMP_HIGH">ТЕМПЕРАТУРА &gt; 25°C</option>
                  <option value="DOOR_OPEN">ДОСТУП: ОТКРЫТО</option>
                  <option value="WATER_LEAK">ОБНАРУЖЕНА ВОДА</option>
                  <option value="CO2_CRITICAL">КРИТИЧЕСКИЙ CO2</option>
                  <option value="HUMIDITY_LOW">НИЗКАЯ ВЛАЖНОСТЬ</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold font-mono">AND (Доп. параметр)</span>
            <div className="h-px flex-1 bg-outline-variant/20"></div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl space-y-4 border border-outline-variant/20 shadow-sm">
            <div className="bg-surface-container-low p-3 rounded-lg flex gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shrink-0"><Moon size={20}/></div>
              <div className="flex-1">
                <p className="text-[8px] font-bold text-outline uppercase mb-1">TIME_DOMAIN_RESTRICTION (Окно работы)</p>
                <div className="flex items-center gap-2">
                  <input 
                    type="time" 
                    value={automationConfig.andStartTime}
                    onChange={(e) => {
                      const newConfig = { ...automationConfig, andStartTime: e.target.value };
                      newConfig.description = updateDesc(newConfig);
                      setAutomationConfig(newConfig);
                    }}
                    className="bg-white border-none rounded text-[11px] font-bold p-1 w-full" 
                  />
                  <span className="text-outline text-[10px]">→</span>
                  <input 
                    type="time" 
                    value={automationConfig.andEndTime}
                    onChange={(e) => {
                      const newConfig = { ...automationConfig, andEndTime: e.target.value };
                      newConfig.description = updateDesc(newConfig);
                      setAutomationConfig(newConfig);
                    }}
                    className="bg-white border-none rounded text-[11px] font-bold p-1 w-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-[10px] font-bold font-mono">THEN (Действие)</span>
            <div className="h-px flex-1 bg-outline-variant/20"></div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl space-y-4 border border-outline-variant/20 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1 bg-tertiary"></div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-[9px] text-outline font-bold">TARGET_CMD (Целевое устройство)</p>
                <select 
                  className="w-full bg-surface-container-low border-none rounded-lg text-xs font-bold p-3"
                  value={automationConfig.thenDevice || ''}
                  onChange={(e) => {
                    const newConfig = { ...automationConfig, thenDevice: e.target.value };
                    newConfig.description = updateDesc(newConfig);
                    setAutomationConfig(newConfig);
                  }}
                >
                  <option value="">-- ВЫБЕРИТЕ УСТРОЙСТВО --</option>
                  {actions.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] text-outline font-bold">EXECUTION_PARAMS (Параметры)</p>
                <div className="bg-surface-container-low p-4 rounded-xl space-y-3">
                  <div className="flex justify-between items-center text-[9px] font-bold text-outline uppercase">
                    <span>PWM_DUTY_CYCLE</span>
                    <span className="font-mono text-tertiary">{automationConfig.pwmValue}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={automationConfig.pwmValue}
                    onChange={(e) => setAutomationConfig({...automationConfig, pwmValue: parseInt(e.target.value)})}
                    className="w-full accent-tertiary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-surface-container-high text-outline px-2 py-0.5 rounded text-[10px] font-bold font-mono">ELSE (Логическое Иначе)</span>
            <div className="h-px flex-1 bg-outline-variant/20"></div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-dashed border-outline-variant/30 flex items-center justify-center">
             <p className="text-[10px] text-outline font-mono italic">NO OP: KEEP_CURRENT_STATE</p>
          </div>
        </section>

        <div className="pt-4 flex flex-col gap-3">
          <button 
            disabled={!automationConfig.ifDevice || !automationConfig.thenDevice}
            onClick={() => setScreen('DASHBOARD')}
            className={`w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-all ${(!automationConfig.ifDevice || !automationConfig.thenDevice) ? 'opacity-50 grayscale pointer-events-none' : ''}`}
          >
            <CheckCircle size={18} /> КОМПИЛИРОВАТЬ И ЗАПУСТИТЬ
          </button>
          <button className="w-full py-3 bg-surface-container-high text-outline font-bold rounded-xl text-xs flex items-center justify-center gap-2">
            <MoreHorizontal size={16} /> Расширенный конфиг скрипта (.js)
          </button>
        </div>
      </div>
    );
  };

  const SystemAnalysis = () => (
    <div className="space-y-6">
      <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg text-primary"><Info size={24} /></div>
          <div>
            <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Событие триггера</p>
            <h2 className="font-headline font-semibold text-lg leading-snug">Причина: Вечерний режим (18:00, освещенность &lt; 150лк)</h2>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low p-5 rounded-2xl space-y-4">
        <h3 className="text-[9px] font-bold text-outline uppercase tracking-[0.2em]">Метрики в реальном времени</h3>
        <div className="relative h-48 w-full bg-white rounded-xl border border-outline-variant/20 p-2 overflow-hidden flex items-center justify-center">
           <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,20 50,80 T100,30" fill="none" stroke="#00C28B" strokeWidth="0.5" />
              <path d="M0,80 Q30,10 60,70 T100,50" fill="none" stroke="#ba1a1a" strokeWidth="0.5" />
              <path d="M0,30 Q40,90 80,20 T100,60" fill="none" stroke="#7C5800" strokeWidth="0.5" />
           </svg>
           <span className="text-[40px] font-black text-outline/5 rotate-12 select-none uppercase">Активировано</span>
           <div className="absolute top-2 left-2 flex flex-wrap gap-1 text-[7px] font-mono opacity-60">
              <span className="bg-primary/10 p-1">LIGHT_LVL_01: 142.42лк</span>
              <span className="bg-error/10 p-1 text-error">ДЖИТТЕР: КРИТИЧНО</span>
              <span className="bg-tertiary/10 p-1">RSSI: -64дБм</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
            {[
              { l: "0x44_ТАЙМАУТ_ACK", v: "0.00412мс", c: "text-primary" },
              { l: "CRC_КОНТРОЛЬ_СУММА", v: "0xFEA291", c: "text-tertiary" },
              { l: "ИНТЕРВАЛ_ОПРОСА", v: "15.000", c: "text-on-surface" },
              { l: "ВРЕМЯ_РАБОТЫ_СИСТ", v: "432ч 12м", c: "text-on-surface" },
            ].map((m, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-outline-variant/10">
                <p className="text-[8px] font-mono text-outline uppercase">{m.l}</p>
                <p className={`text-xs font-bold mt-0.5 ${m.c}`}>{m.v}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-inverse-surface rounded-2xl p-4 overflow-hidden h-72 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[8px] font-mono text-white/40 uppercase tracking-widest">Системные логи (raw_output)</p>
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
        </div>
        <div className="flex-1 font-mono text-[9px] text-white/60 space-y-1 overflow-y-auto no-scrollbar">
          <p>18:00:00.001 [KERN] Wakeup from deep-sleep state 3</p>
          <p>18:00:00.004 [RADIO] Scanning for cluster nodes...</p>
          <p className="text-primary-fixed">18:00:00.012 [DEBUG] ping_sensor_4: 142 lux (VAL_STABLE)</p>
          <p className="text-primary-fixed">18:00:00.015 [DEBUG] ping_sensor_7: 112 lux (VAL_STABLE)</p>
          <p className="text-tertiary-fixed">18:00:00.022 [WARN] RETRY_EXHAUSTED_0x44 - Node 12</p>
          <p>18:00:00.045 [I2C] Master write command 0x11 to addr 0x33</p>
          <p className="text-primary-fixed">18:00:00.052 [STATE] TRIGGER_MATCH: "EVENING_LIGHTS"</p>
          <p>18:00:00.060 [GPIO] PIN_14 SET HIGH (LATCHED)</p>
          <p>18:00:00.088 [MEM] Heap allocated: 124kb (FRAG_LEVEL: low)</p>
          <p className="text-error">18:00:01.500 [CRIT] MEMORY_LEAK_WARNING: Block 0xFF21 orphaned</p>
          <p>18:00:02.044 [NET] MQTT Publish: 'home/diag/status' (QoS 1)</p>
        </div>
      </section>
    </div>
  );

  const AwayDeactivateFlow = () => {
    const steps: Screen[] = [
      'AWAY_DEACTIVATE_1',
      'AWAY_DEACTIVATE_2',
      'AWAY_DEACTIVATE_3',
      'AWAY_DEACTIVATE_4',
      'AWAY_DEACTIVATE_5',
      'AWAY_DEACTIVATE_6',
      'AWAY_DEACTIVATE_7',
    ];

    const currentIndex = steps.indexOf(screen);
    const progress = ((currentIndex + 1) / steps.length) * 100;

    return (
      <div className="space-y-8 py-4">
        <div className="space-y-4 text-center">
          <div className="w-20 h-20 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto shadow-sm">
            <ShieldAlert size={40} />
          </div>
          <h2 className="text-2xl font-bold font-headline tracking-tight text-on-surface">Отключение защиты</h2>
          <p className="text-xs text-outline leading-relaxed px-8">
            Это действие снизит уровень безопасности вашего дома. Необходимо пройти {steps.length} этапов подтверждения личности.
          </p>
        </div>

        <div className="bg-surface-container-low p-6 rounded-2xl space-y-6">
           <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-outline">
                <span>ЭТАП {currentIndex + 1} ИЗ {steps.length}</span>
                <span>{Math.round(progress)}% СЕРТИФИЦИРОВАНО</span>
              </div>
              <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }}></div>
              </div>
           </div>

           <AnimatePresence mode="wait">
              {currentIndex === 0 && (
                <motion.div key={1} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <p className="text-sm font-semibold text-center italic opacity-60">Введите 4-значный код безопасности</p>
                  <div className="flex justify-center gap-3">
                    {[0, 1, 2, 3].map(i => (
                      <div 
                        key={i} 
                        className={`w-12 h-14 rounded-xl border flex items-center justify-center text-xl font-bold transition-all ${pin.length > i ? 'bg-primary/5 border-primary text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.1)]' : 'bg-white border-outline-variant/30 text-outline/20'}`}
                      >
                        {pin[i] ? '•' : ''}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto pt-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((val, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (val === 'del') setPin(pin.slice(0, -1));
                          else if (typeof val === 'number' && pin.length < 4) {
                            const newPin = pin + val;
                            setPin(newPin);
                            if (newPin === '7843') {
                              setTimeout(() => {
                                setScreen(steps[1]);
                                setPin('');
                              }, 300);
                            }
                          }
                        }}
                        className={`h-12 rounded-xl flex items-center justify-center font-bold text-lg active:bg-primary/10 transition-colors ${val === '' ? 'pointer-events-none' : 'bg-surface-container-high/50 border border-outline-variant/10'}`}
                      >
                        {val === 'del' ? <Delete size={18} /> : val}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              {currentIndex === 1 && (
                <motion.div key={2} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <p className="text-sm font-semibold">Двухфакторная аутентификация (SMS)</p>
                  <input type="text" placeholder="Код из SMS" className="w-full bg-white border-outline-variant/20 rounded-xl p-4 text-sm" />
                </motion.div>
              )}
              {currentIndex === 2 && (
                <motion.div key={3} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <p className="text-sm font-semibold">Запрос на деактивацию сетевых узлов</p>
                  <div className="bg-surface-container-high p-4 rounded-xl text-[10px] font-mono text-outline space-y-1">
                    <p>SENDING SIG_STOP to NODE_01...</p>
                    <p className="text-primary font-bold">ACK RECEIVED</p>
                    <p>RELEASING KERN_LOCK_02...</p>
                  </div>
                </motion.div>
              )}
              {currentIndex === 3 && (
                <motion.div key={4} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <p className="text-sm font-semibold">Повторный ввод пароля мастер-ключа</p>
                  <div className="relative">
                    <input type="password" value="********" readOnly className="w-full bg-white border-outline-variant/20 rounded-xl p-4 text-sm" />
                    <Key size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-outline" />
                  </div>
                </motion.div>
              )}
              {currentIndex === 4 && (
                <motion.div key={5} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <p className="text-sm font-semibold">Биометрическая верификация</p>
                  <div className="flex flex-col items-center gap-4 py-4">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center">
                        <Camera size={32} className="text-outline/40" />
                      </div>
                      <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-primary/60 shadow-[0_0_8px_rgba(var(--color-primary),0.5)]"
                      />
                    </div>
                    <p className="text-[10px] text-primary font-bold animate-pulse uppercase tracking-tighter">Сканирование сетчатки глаз...</p>
                  </div>
                </motion.div>
              )}
              {currentIndex === 5 && (
                <motion.div key={6} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <p className="text-sm font-semibold">Валидация внешних контуров</p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {[
                      { label: "ПЕРИМЕТР", status: "OFFLINE", color: "text-error" },
                      { label: "ИК-ДАТЧИКИ", status: "DISARMED", color: "text-primary" },
                      { label: "CCTV_FEED", status: "STANDEBY", color: "text-primary" },
                      { label: "MESH_NODES", status: "DETACHED", color: "text-primary" },
                    ].map((item, i) => (
                      <div key={i} className="bg-surface-container p-2 rounded-lg border border-outline-variant/10 text-center">
                        <p className="text-[7px] font-mono text-outline">{item.label}</p>
                        <p className={`text-[9px] font-black ${item.color}`}>{item.status}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {currentIndex === 6 && (
                <motion.div key={7} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="p-4 bg-error/5 border border-error/20 rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-error">
                      <AlertTriangle size={18} />
                      <p className="font-black text-xs">КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ</p>
                    </div>
                    <p className="text-[10px] text-outline leading-relaxed italic">
                      Вы собираетесь полностью отключить автономную систему Veridian-Guard. Все гарантийные обязательства по сохранности имущества будут аннулированы.
                    </p>
                    <label 
                      onClick={() => setRiskAcknowledged(!riskAcknowledged)}
                      className="flex items-center gap-3 cursor-pointer pt-2"
                    >
                      <div className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${riskAcknowledged ? 'bg-error border-error' : 'border-error/40'}`}>
                        {riskAcknowledged && <Check size={10} className="text-white" />}
                      </div>
                      <span className="text-[9px] font-bold text-error uppercase">Я осознаю последствия</span>
                    </label>
                  </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

        <button 
          disabled={(currentIndex === 0 && pin !== '7843') || (currentIndex === 6 && !riskAcknowledged)}
          onClick={() => {
            if(currentIndex === steps.length - 1) {
              setAwayMode(false);
              setRiskAcknowledged(false);
              setScreen('DASHBOARD');
            } else {
              setScreen(steps[currentIndex + 1]);
            }
          }}
          className={`w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all ${((currentIndex === 0 && pin !== '7843') || (currentIndex === 6 && !riskAcknowledged)) ? 'opacity-30 grayscale pointer-events-none' : 'active:scale-95'}`}
        >
          {currentIndex === steps.length - 1 ? 'ДЕАКТИВИРОВАТЬ СИСТЕМУ' : 'ПРОДОЛЖИТЬ'} <ChevronRight size={18} />
        </button>
      </div>
    );
  };

  const AddDeviceCategories = () => (
    <div className="space-y-8">
      <div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-3 border border-outline-variant/10 shadow-inner">
        <Search size={20} className="text-outline" />
        <input 
          type="text" 
          placeholder="Поиск по hex-ID или серийному номеру..."
          className="bg-transparent border-none p-0 focus:ring-0 text-sm text-outline placeholder:text-outline/40 w-full font-mono"
        />
      </div>

      <div>
        <h3 className="text-[10px] font-bold text-outline uppercase tracking-widest mb-6">Категории</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Sun size={32} />, label: "Освещение" },
            { icon: <Shield size={32} />, label: "Безопасность" },
            { icon: <Thermometer size={32} />, label: "Климат", full: true, desc: "Кондиционеры, увлажнители" },
            { icon: <Speaker size={32} />, label: "Колонки" },
            { icon: <Wifi size={32} />, label: "Датчики" },
            { icon: <Utensils size={32} />, label: "Бытовая техника", full: true, desc: "Роботы, чайники" },
          ].map((cat, i) => (
            <div 
              key={i} 
              onClick={() => cat.label === 'Колонки' ? setScreen('ADD_DEVICE_LEGAL') : null}
              className={`${cat.full ? 'col-span-2 flex flex-row' : 'flex flex-col'} bg-surface-container-lowest p-6 rounded-2xl items-center justify-center text-center gap-4 border border-outline-variant/10 shadow-sm transition-all hover:shadow-md cursor-pointer`}
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                {cat.icon}
              </div>
              <div className={cat.full ? 'text-left' : ''}>
                <span className="font-headline font-bold text-sm block">{cat.label}</span>
                {cat.desc && <span className="text-[10px] text-outline">{cat.desc}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AddDeviceLegal = () => (
    <div className="space-y-6">
      <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col items-center gap-4 text-center">
        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary"><Speaker size={48} /></div>
        <div>
          <h2 className="font-headline font-bold text-xl">Veridian Echo Gen 4</h2>
          <p className="text-xs text-outline mt-1">Новое устройство обнаружено</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-headline font-bold text-lg">Соглашение</h3>
          <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">v2.4.1</span>
        </div>
        <div className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/20">
          <div className="h-64 overflow-y-auto p-6 text-[10px] leading-relaxed text-outline text-justify space-y-4 font-mono no-scrollbar bg-slate-50">
            <p className="font-bold text-center border-b border-outline-variant/10 pb-2">V-OS KERNEL EULA (SEC_LEVEL_4)</p>
            <p>1. ИНКАПСУЛЯЦИЯ: Настоящим подтверждается, что ретрансляция пакетов осуществляется через виртуализованный шлюз архитектуры Veridian-Mesh. Пользователь обязуется не препятствовать инспекции трафика Deep Packet Inspection (DPI) для верификации консистентности реестра.</p>
            <p>2. ТЕЛЕМЕТРИЯ: Сбор метрик вольтажа (V_IN), температуры чипа (T_DIE) и джиттера тактового генератора производится ежесекундно. Данные буферизуются в энергонезависимой памяти FLASH_BLOCK_03 и отправляются по защищенному каналу TLS 1.3 (+SHA384).</p>
            <p>3. ХЭШ-ПРОВЕРКА: Любое расхождение в контрольных суммах CRC-32 между локальным узлом и облачным координатором приводит к немедленному переводу устройства в состояние FAIL_SAFE.</p>

            <div className="pt-4 space-y-3 border-t border-outline-variant/10">
               <label className="flex items-start gap-3 cursor-pointer group">
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${consents.data ? 'bg-primary border-primary' : 'border-outline/30 group-hover:border-primary/50'}`} onClick={() => setConsents(c => ({...c, data: !c.data}))}>
                    {consents.data && <Check size={12} className="text-white" />}
                  </div>
                  <span className="text-[9px] leading-tight select-none">Я принимаю условия сбора и инкапсуляции телеметрических данных в соотв. с п. 2</span>
               </label>
               <label className="flex items-start gap-3 cursor-pointer group">
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${consents.update ? 'bg-primary border-primary' : 'border-outline/30 group-hover:border-primary/50'}`} onClick={() => setConsents(c => ({...c, update: !c.update}))}>
                    {consents.update && <Check size={12} className="text-white" />}
                  </div>
                  <span className="text-[9px] leading-tight select-none">Разрешаю Force-Push обновления ядра для поддержания CRC-консистентности</span>
               </label>
               <label className="flex items-start gap-3 cursor-pointer group">
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${consents.analytics ? 'bg-primary border-primary' : 'border-outline/30 group-hover:border-primary/50'}`} onClick={() => setConsents(c => ({...c, analytics: !c.analytics}))}>
                    {consents.analytics && <Check size={12} className="text-white" />}
                  </div>
                  <span className="text-[9px] leading-tight select-none">Согласен на инспекцию трафика API третьими лицами Veridian Trust Partners</span>
               </label>
            </div>

            <details className="mt-4 border-t border-outline-variant/20 pt-4 cursor-pointer">
              <summary className="text-primary font-bold text-[9px] uppercase">Расширенные условия использования API</summary>
              <div className="py-2 space-y-2 opacity-60 text-[8px]">
                 <p>Пользователь предоставляет неограниченное право на запуск фоновых процессов оптимизации нейросетевых весов в часы минимальной нагрузки (T_IDLE &gt; 90%).</p>
                 <button className="text-error font-bold border border-error/20 p-2 rounded w-full uppercase">СБРОС_ЗАВОДСКИХ_НАСТРОЕК (HARD_RESET_OOBE)</button>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence>
          {showLegalError && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute -top-16 left-0 right-0 bg-error text-white p-3 rounded-xl shadow-xl flex items-center gap-2 z-50 border border-white/20"
            >
              <AlertCircle size={16} />
              <p className="text-[10px] font-bold uppercase tracking-tight">Ошибка: Подтвердите все пункты протокола</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => {
            if (consents.data && consents.update && consents.analytics) {
              setScreen('ADD_DEVICE_CONFIG');
              setShowLegalError(false);
            } else {
              setShowLegalError(true);
              setTimeout(() => setShowLegalError(false), 3000);
            }
          }}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
        >
          Принять и продолжить
        </button>
      </div>
      <p className="text-[9px] text-outline text-center px-8 italic">Нажимая кнопку, вы подтверждаете прочтение всех 48 страниц условий.</p>
    </div>
  );

  const AddDeviceConfig = () => {
    const handleConnect = () => {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setSpeakerAdded(true);
        setScreen('DASHBOARD');
      }, 3000);
    };

    if (isSearching) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center py-12 space-y-10">
          <div className="relative">
             <motion.div 
               animate={{ scale: [1, 2], opacity: [0.5, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute inset-0 bg-primary rounded-full"
             />
             <motion.div 
               animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
               transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
               className="absolute inset-0 bg-primary rounded-full transition-all"
             />
             <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-primary/40">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                  <Wifi size={40} />
                </motion.div>
             </div>
          </div>
          <div className="text-center space-y-3">
             <h3 className="font-headline font-bold text-xl">Поиск сигнала...</h3>
             <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest animate-pulse">Инициализация Mesh-узла</p>
                <div className="w-48 h-1 bg-surface-container rounded-full overflow-hidden">
                   <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3, ease: 'linear' }}
                      className="h-full bg-primary"
                   />
                </div>
             </div>
          </div>
          <div className="font-mono text-[8px] text-outline text-center space-y-1 opacity-50">
             <p>TX: 433MHz // RX: ACTIVE</p>
             <p>POLL_ADDR: 0xFF_SEARCHING</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-outline">Название устройства</label>
          <div className="bg-white rounded-xl p-4 border border-outline-variant/30">
            <input type="text" className="w-full border-none p-0 focus:ring-0 text-sm font-bold" defaultValue="Veridian Echo" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold">Настройки подключения (Expert Mode)</h3>

          <div className="bg-surface-container-low p-5 rounded-2xl space-y-4">
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-outline">ЧАСТОТА МОДУЛЯ WI-FI:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['2.4 ГГц', '5 ГГц'].map(f => (
                    <button key={f} className={`py-3 rounded-lg text-xs font-bold border transition-all ${f === '5 ГГц' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/30 bg-white'}`}>{f}</button>
                  ))}
                </div>
             </div>

             <div className="space-y-2">
               <p className="text-[10px] font-bold text-outline flex items-center justify-between">ПРОТОКОЛ ШИФРОВАНИЯ: <Info size={12}/></p>
               <select className="w-full bg-white border-outline-variant/30 rounded-lg text-xs font-bold p-3">
                 <option>WPA3 (SAE-Enhanced)</option>
                 <option>WPA2 / AES-NI</option>
                 <option>Enterprise (RADIUS)</option>
               </select>
             </div>
          </div>

          <div className="bg-error/5 p-4 rounded-xl border border-error/20 flex gap-3 text-error">
             <ShieldAlert size={20} className="shrink-0" />
             <p className="text-[9px] font-medium leading-relaxed italic">Нестабильное соединение может привести к потере пользовательских данных при синхронизации хэш-сумм в облаке Veridian.</p>
          </div>

          <button 
            onClick={handleConnect}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
            ПОДКЛЮЧИТЬ ПРИБОР
          </button>
        </div>
      </div>
    );
  };

  const NotificationCenter = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold uppercase text-outline tracking-wider">Активность сегодня</p>
          <h2 className="text-3xl font-extrabold tracking-tight">История</h2>
        </div>
        <span className="text-xs font-bold text-primary">Прочитать всё</span>
      </div>

      <div className="space-y-4">
         <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Sparkles size={24}/></div>
              <div className="flex-1 space-y-1">
                <h4 className="font-bold text-sm">Сценарий: Свет в гостиной включен</h4>
                <p className="text-[10px] text-outline leading-relaxed">Выполнено успешно согласно графику T_SUNSET. Протокол ACK: 0ms.</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] font-bold text-outline">18:00</span>
                  <button 
                    onClick={() => setScreen('SYSTEM_ANALYSIS')}
                    className="bg-primary-container text-on-primary-container text-[10px] font-bold px-4 py-2 rounded-full"
                  >ПОДРОБНЕЕ</button>
                </div>
              </div>
            </div>
         </div>

         {[
           { t: "Режим «Я ушел» активирован", s: "17:45 • Все системы защищены", i: <Lock size={16} />, bg: "bg-secondary-container/20" },
           { t: "Обнаружено движение: Коридор", s: "17:40 • Секция 4: Активность", i: <ShieldAlert size={16} />, bg: "bg-error-container/10" },
           { t: "Дверь открыта", s: "16:20 • Задний вход", i: <Unlock size={16} />, bg: "bg-tertiary-container/10" },
           { t: "Система: Ошибка CRC", s: "15:30 • Node_0xBC таймаут", i: <Info size={16} />, bg: "bg-surface-container-high" },
         ].map((n, i) => (
           <div key={i} className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg ${n.bg} flex items-center justify-center text-outline`}>{n.i}</div>
              <div>
                <h4 className="font-bold text-xs">{n.t}</h4>
                <p className="text-[10px] text-outline">{n.s}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );

  // --- Main Router ---

  const currentTitle = {
    'DASHBOARD': 'Мой дом',
    'NOTIFICATIONS': 'События',
    'SETTINGS': 'Конфигурация',
    'LIGHTING': 'Освещение',
    'ADD_DEVICE_CATEGORIES': 'Добавить прибор',
    'ADD_DEVICE_LEGAL': 'Лицензия',
    'ADD_DEVICE_CONFIG': 'Подключение',
    'AUTOMATION_BUILDER': 'Логика IF-THEN',
    'SYSTEM_ANALYSIS': 'Логи системы',
    'AWAY_DEACTIVATE_1': 'Безопасность (1/7)',
    'AWAY_DEACTIVATE_2': 'Безопасность (2/7)',
    'AWAY_DEACTIVATE_3': 'Безопасность (3/7)',
    'AWAY_DEACTIVATE_4': 'Безопасность (4/7)',
    'AWAY_DEACTIVATE_5': 'Безопасность (5/7)',
    'AWAY_DEACTIVATE_6': 'Безопасность (6/7)',
    'AWAY_DEACTIVATE_7': 'Безопасность (7/7)',
  }[screen];

  const handleBack = () => {
    if (screen === 'LIGHTING' || screen === 'ADD_DEVICE_CATEGORIES' || screen === 'SYSTEM_ANALYSIS') setScreen('DASHBOARD');
    else if (screen === 'AUTOMATION_BUILDER') setScreen('SETTINGS');
    else if (screen === 'ADD_DEVICE_LEGAL') setScreen('ADD_DEVICE_CATEGORIES');
    else if (screen === 'ADD_DEVICE_CONFIG') setScreen('ADD_DEVICE_LEGAL');
    else if (screen.startsWith('AWAY_DEACTIVATE')) setScreen('SETTINGS');
    else setScreen('DASHBOARD');
  };

  return (
    <Layout 
      activeTab={screen} 
      setTab={setScreen} 
      title={currentTitle}
      onBack={screen !== 'DASHBOARD' ? handleBack : undefined}
      isSyncing={isSyncing}
      setIsSyncing={setIsSyncing}
    >
      <AnimatePresence mode="wait">
        <motion.div
           key={screen}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
           transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {screen === 'DASHBOARD' && <Dashboard />}
          {screen === 'LIGHTING' && <LightingControl />}
          {screen === 'NOTIFICATIONS' && <NotificationCenter />}
          {screen === 'SETTINGS' && <SettingsScreen />}
          {screen === 'ADD_DEVICE_CATEGORIES' && <AddDeviceCategories />}
          {screen === 'ADD_DEVICE_LEGAL' && <AddDeviceLegal />}
          {screen === 'ADD_DEVICE_CONFIG' && <AddDeviceConfig />}
          {screen === 'AUTOMATION_BUILDER' && <AutomationBuilder />}
          {screen === 'SYSTEM_ANALYSIS' && <SystemAnalysis />}
          {screen.startsWith('AWAY_DEACTIVATE') && <AwayDeactivateFlow />}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
