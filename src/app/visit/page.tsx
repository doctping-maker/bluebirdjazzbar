"use client";

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Visit() {
  const { language, t } = useLanguage();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [session, setSession] = useState('');
  const [guests, setGuests] = useState(2);
  const [requests, setRequests] = useState('');
  const [pdpaConsent, setPdpaConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdpaConsent) {
      alert(language === 'th' ? 'กรุณายินยอมให้เก็บข้อมูลเพื่อติดต่อกลับ' : 'Please agree to the privacy consent.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Botcheck honeypot value check
    const target = e.currentTarget as HTMLFormElement;
    const botcheckInput = target.elements.namedItem('botcheck') as HTMLInputElement;
    if (botcheckInput && botcheckInput.checked) {
      // Fake successful submit for bot
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
      }, 500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // User will replace this with their actual key
          subject: 'จองโต๊ะใหม่ - Bluebird Jazz Bar',
          from_name: 'Bluebird Web Booking',
          name: name,
          phone: phone,
          date: date,
          session: session || 'Not specified',
          guests: guests,
          notes: requests || 'None',
        })
      });

      const data = await response.json();
      if (response.status === 200 && data.success) {
        setSubmitStatus('success');
        // Reset inputs
        setName('');
        setPhone('');
        setDate('');
        setSession('');
        setGuests(2);
        setRequests('');
        setPdpaConsent(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-16 px-5 md:px-[8%] bg-bg-deep animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold tracking-[5px] text-bluebird uppercase mb-2 block">
            {t('visit.subtitle')}
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-ink uppercase tracking-wide leading-tight">
            {t('visit.title')}
          </h1>
          <div className="h-[2px] bg-accent w-20 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* 2 Column grid: Info & Map vs Reservation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info & Map */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-6 bg-bg-panel border border-line/50 p-6 sm:p-8 rounded-sm">
              
              {/* Address card */}
              <div className="flex gap-4">
                <div className="text-accent text-lg mt-0.5"><i className="fas fa-map-marker-alt" /></div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wider text-ink uppercase mb-2">
                    {t('common.address')}
                  </h3>
                  <p className="text-[13px] text-ink-muted/90 leading-relaxed font-light">
                    {t('common.addressDetail')}
                  </p>
                </div>
              </div>

              {/* Directions card */}
              <div className="flex gap-4 border-t border-line/10 pt-5">
                <div className="text-accent text-lg mt-0.5"><i className="fas fa-route" /></div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wider text-ink uppercase mb-2">
                    {t('visit.findUs')}
                  </h3>
                  <p className="text-[13px] text-ink-muted/90 leading-relaxed font-light">
                    {t('visit.findUsDetail')}
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex gap-4 border-t border-line/10 pt-5">
                <div className="text-accent text-lg mt-0.5"><i className="fas fa-clock" /></div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wider text-ink uppercase mb-2">
                    {t('common.hours')}
                  </h3>
                  <p className="text-[13px] text-ink-muted/90 leading-relaxed font-light">
                    {t('common.hoursDetail')}
                  </p>
                </div>
              </div>

              {/* Phone / Email card */}
              <div className="flex gap-4 border-t border-line/10 pt-5">
                <div className="text-accent text-lg mt-0.5"><i className="fas fa-phone-alt" /></div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wider text-ink uppercase mb-2">
                    {t('common.reserve')}
                  </h3>
                  <p className="text-[13px] text-ink-muted/90 leading-relaxed font-light">
                    Phone: +66 89 777 9248<br />
                    Email: bluebirdjazzbar@gmail.com
                  </p>
                </div>
              </div>

            </div>

            {/* Dark Styled Google Maps iframe */}
            <div className="rounded-sm overflow-hidden border border-line h-80 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7185093226653!2d100.58080431483032!3d13.735484690357962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fd9317781c3%3A0xf7e3796932ae4707!2sBluebird%20Jazz%20Bar!5e0!3m2!1sen!2sth!4v1582031571929!5m2!1sen!2sth" 
                className="w-full h-full border-0 grayscale invert contrast-[1.1]" 
                loading="lazy" 
                title="Bluebird Jazz Bar Location"
              />
            </div>
          </div>

          {/* Column 2: Booking Form */}
          <div id="reserve-form-section" className="lg:col-span-6 bg-bg-panel border border-line p-8 sm:p-10 rounded-sm shadow-xl relative">
            
            {submitStatus === 'success' ? (
              <div className="flex flex-col gap-6 text-center py-8">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl">
                  <i className="fas fa-check" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink uppercase tracking-wide mb-2">
                    {language === 'th' ? 'ส่งคำขอแล้ว' : 'Request Received'}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">
                    {language === 'th' 
                      ? 'ได้รับคำขอจองแล้ว ทางร้านจะติดต่อกลับเพื่อยืนยัน' 
                      : 'Received your reservation request. We will contact you back to confirm.'}
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="text-xs text-accent underline hover:text-ink transition-colors cursor-pointer focus:outline-none"
                >
                  {language === 'th' ? 'ส่งคำขอจองใหม่' : 'Submit another request'}
                </button>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="flex flex-col gap-6 text-center py-8">
                <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-full flex items-center justify-center mx-auto text-2xl">
                  <i className="fas fa-exclamation" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink uppercase tracking-wide mb-2">
                    {language === 'th' ? 'เกิดข้อผิดพลาด' : 'Submission Failed'}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">
                    {language === 'th' 
                      ? 'กรุณาโทร 089-777-9248 หรือจองผ่าน LINE ทางด้านล่าง' 
                      : 'Please call 089-777-9248 or message us via LINE below.'}
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="text-xs text-accent underline hover:text-ink transition-colors cursor-pointer focus:outline-none"
                >
                  {language === 'th' ? 'กลับไปที่ฟอร์ม' : 'Go back to form'}
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-2xl text-ink uppercase tracking-wider mb-2">
                  {language === 'th' ? 'ส่งคำขอสำรองที่นั่ง' : 'Send Reservation Request'}
                </h2>
                <p className="text-[13px] text-ink-muted leading-relaxed font-light mb-8">
                  {language === 'th'
                    ? 'พื้นที่ร้านมีจำนวนจำกัด ส่งข้อมูลความประสงค์เพื่อจองโต๊ะล่วงหน้า (จะได้รับการยืนยันเมื่อเจ้าหน้าที่ติดต่อกลับ)'
                    : 'Intimate space with limited seats. Send your request to reserve in advance (confirmed only when staff contacts you back).'}
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  {/* Honeypot for bots */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {language === 'th' ? 'ชื่อผู้จอง *' : 'Reservation Name *'}
                    </label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="e.g. John Doe"
                      required 
                      className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light placeholder:text-ink-muted/30"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {language === 'th' ? 'เบอร์โทรศัพท์ *' : 'Contact Phone *'}
                    </label>
                    <input 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="e.g. 0897779248"
                      required 
                      className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light placeholder:text-ink-muted/30"
                    />
                  </div>

                  {/* Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {language === 'th' ? 'วันที่ต้องการจอง *' : 'Date of Booking *'}
                    </label>
                    <input 
                      type="date" 
                      value={date} 
                      onChange={(e) => setDate(e.target.value)} 
                      required 
                      className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light"
                    />
                  </div>

                  {/* Time slot / Session */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {language === 'th' ? 'โชว์ / รอบเวลาที่สนใจ' : 'Show / Session Preference'}
                    </label>
                    <select 
                      value={session} 
                      onChange={(e) => setSession(e.target.value)} 
                      className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light"
                    >
                      <option value="">{language === 'th' ? '-- เลือกรอบที่ต้องการ (ไม่บังคับ) --' : '-- Select Session (Optional) --'}</option>
                      <option value="07:30 PM (Session 1)">07:30 PM (For 8:00 PM Live Band)</option>
                      <option value="10:00 PM (Session 2)">10:00 PM (For 10:30 PM Live Band)</option>
                      <option value="06:00 PM (Lounge/Vinyl only)">06:00 PM (Vinyl listening &amp; Lounge only)</option>
                    </select>
                  </div>

                  {/* Number of guests (number input) */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {language === 'th' ? 'จำนวนคน *' : 'Guests *'}
                    </label>
                    <input 
                      type="number"
                      min={1}
                      max={30}
                      value={guests} 
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)} 
                      required
                      className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light"
                    />
                  </div>

                  {/* Remarks */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {language === 'th' ? 'หมายเหตุ' : 'Notes / Remarks'}
                    </label>
                    <textarea 
                      value={requests} 
                      onChange={(e) => setRequests(e.target.value)} 
                      rows={3}
                      placeholder={language === 'th' ? "ระบุที่นั่งพิเศษ หรือความต้องการอื่นๆ..." : "Any seating preference, celebrating birthday, etc."}
                      className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light placeholder:text-ink-muted/30"
                    />
                  </div>

                  {/* PDPA consent */}
                  <div className="flex items-start gap-3 mt-1">
                    <input 
                      type="checkbox" 
                      id="pdpa" 
                      checked={pdpaConsent} 
                      onChange={(e) => setPdpaConsent(e.target.checked)} 
                      required
                      className="mt-1 cursor-pointer accent-accent"
                    />
                    <label htmlFor="pdpa" className="text-xs text-ink-muted/80 font-light select-none cursor-pointer leading-normal">
                      {language === 'th' ? (
                        <>ยินยอมให้ร้านเก็บข้อมูลเพื่อติดต่อยืนยันการจอง | <a href="/privacy" target="_blank" className="text-accent underline hover:text-ink transition-colors">นโยบายความเป็นส่วนตัว</a></>
                      ) : (
                        <>Consent to store contact information for booking confirmations | <a href="/privacy" target="_blank" className="text-accent underline hover:text-ink transition-colors">Privacy Policy</a></>
                      )}
                    </label>
                  </div>

                  {/* Submit button (Clear indicating Request, not instant confirmation) */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-accent text-bg-deep hover:bg-transparent hover:text-accent border border-accent py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 mt-4 cursor-pointer shadow-lg hover:shadow-accent/10 disabled:opacity-50"
                  >
                    {isSubmitting 
                      ? (language === 'th' ? 'กำลังส่งคำขอ...' : 'Sending Request...') 
                      : (language === 'th' ? 'ส่งคำขอจอง (รอยืนยัน)' : 'Send Booking Request')}
                  </button>
                </form>
              </>
            )}

            {/* Alternative Backup Buttons */}
            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-line/10">
              <span className="text-[10px] font-bold tracking-[4px] text-ink-muted/60 uppercase text-center block">
                {language === 'th' ? 'ช่องทางการจองสำรอง' : 'Alternative Booking Channels'}
              </span>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+66897779248"
                  className="flex items-center justify-center gap-2 border border-accent/30 text-accent hover:bg-accent hover:text-bg-deep py-3.5 px-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md text-center cursor-pointer"
                >
                  <i className="fas fa-phone-alt text-xs" />
                  {language === 'th' ? 'โทรจอง' : 'Call Booking'}
                </a>
                <a 
                  href="https://line.me/ti/p/@bluebirdjazzbar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-bg-deep py-3.5 px-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md text-center cursor-pointer"
                >
                  <i className="fab fa-line text-sm" />
                  {language === 'th' ? 'จองผ่าน LINE' : 'Book via LINE'}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
