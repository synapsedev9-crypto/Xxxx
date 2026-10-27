import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dir-rtl text-right font-sans">
      {/* Header / Navbar */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-bold px-3 py-1.5 rounded-lg text-xl shadow-sm">
              طبكم
            </div>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">سطيف</span>
          </div>
          <div className="flex gap-3">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-2">
              تسجيل الدخول
            </Link>
            <Link href="/doctor/register" className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-all">
              فضاء الطبيب
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-12 pb-16 text-center">
        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          ✨ متابعة الطابور الحي مباشرة عبر الواتساب
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          احجز موعدك الطبي وتتبع دورك من بيتك دون انتظار
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          المنصة الأولى لتنظيم مواعيد العيادات في سطيف. لا داعي لقضاء ساعات في قاعة الانتظار بعد اليوم.
        </p>

        {/* Search Box */}
        <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-3 max-w-3xl mx-auto">
          <input 
            type="text" 
            placeholder="اسم الطبيب أو التخصص (مثال: أطفال، عظام...)" 
            className="flex-1 p-3.5 border rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="p-3.5 border rounded-xl text-slate-600 bg-white outline-none focus:ring-2 focus:ring-blue-500">
            <option>سطيف (المركز)</option>
            <option>العلمة</option>
            <option>عين ولمان</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md">
            بحث
          </button>
        </div>
      </section>

      {/* Features for Patient */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-10">كيف تسهل المنصة حياتك؟</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 text-2xl font-bold rounded-xl flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold text-slate-800 mb-2">حجز سريع بدون تطبيق</h3>
              <p className="text-sm text-slate-600">اختر الطبيب واحجز موعدك من متصفح الهاتف مباشرة بدون تحميل أي برنامج.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 text-2xl font-bold rounded-xl flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold text-slate-800 mb-2">إشعارات الواتساب</h3>
              <p className="text-sm text-slate-600">تصلك رسالة تذكير وتنبيه بموعدك ودورك المتبقي بدقة عبر تطبيق الواتساب.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 text-2xl font-bold rounded-xl flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold text-slate-800 mb-2">طابور تفاعلي حي</h3>
              <p className="text-sm text-slate-600">تابع حركة المرضى في العيادة واعرف الوقت المتبقي لدخولك وأنت في بيتك.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-slate-400 border-t">
        جميع الحقوق محفوظة © {new Date().getFullYear()} - مشروع إرشاد وتنظيم العيادات (سطيف)
      </footer>
    </div>
  );
}
