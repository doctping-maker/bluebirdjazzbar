"use client";

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Visit() {
  const { language, t } = useLanguage();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [method, setMethod] = useState('WhatsApp');
  const [requests, setRequests] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedRequests = requests ? requests : (language === 'th' ? 'ไม่มีรายละเอียดเพิ่มเติม' : 'None');
    
    // Construct message in Thai
    const message = `สวัสดีครับ/ค่ะ ต้องการจองโต๊ะที่ Bluebird Jazz Bar
รายละเอียดการจอง:
• ชื่อผู้จอง: ${name}
• เบอร์โทรติดต่อ: ${phone}
• วันที่: ${date}
• รอบเวลา: ${time}
• จำนวน: ${guests}
• ความต้องการเพิ่มเติม: ${formattedRequests}

รบกวนยืนยันการจองให้ด้วยนะครับ/ค่ะ ขอบคุณครับ/ค่ะ`;

    const encodedMessage = encodeURIComponent(message);
    const shopPhone = '66897779248'; // 089 777 9248
    
    if (method === 'WhatsApp') {
      const url = `https://api.whatsapp.com/send?phone=${shopPhone}&text=${encodedMessage}`;
      window.open(url, '_blank');
    } else if (method === 'LINE') {
      navigator.clipboard.writeText(message).then(() => {
        alert(t('visit.successLine'));
        window.open('https://line.me/ti/p/@bluebirdjazzbar', '_blank');
      }).catch(err => {
        console.error('Failed to copy: ', err);
        window.open('https://line.me/ti/p/@bluebirdjazzbar', '_blank');
      });
    } else {
      // Call
      alert(`📞 Direct line for table bookings: 089-777-9248\n\nBooking data:\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
      window.open(`tel:${shopPhone}`, '_self');
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
          <div id="reserve-form-section" className="lg:col-span-6 bg-bg-panel border border-line p-8 sm:p-10 rounded-sm shadow-xl">
            <h2 className="font-display font-bold text-2xl text-ink uppercase tracking-wider mb-2">
              {t('visit.reserveTitle')}
            </h2>
            <p className="text-[13px] text-ink-muted leading-relaxed font-light mb-8">
              {t('visit.reserveDesc')}
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                  {t('visit.name')}
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
                  {t('visit.phone')}
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
                  {t('visit.date')}
                </label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  required 
                  className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light"
                />
              </div>

              {/* Time slot */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                  {t('visit.time')}
                </label>
                <select 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  required
                  className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light"
                >
                  <option value="" disabled>{language === 'th' ? '-- เลือกรอบการแสดง --' : '-- Select Performance Session --'}</option>
                  <option value="07:30 PM (Session 1)">07:30 PM (For 8:00 PM live band)</option>
                  <option value="10:00 PM (Session 2)">10:00 PM (For 10:30 PM live band)</option>
                  <option value="06:00 PM (Lounge/Vinyl only)">06:00 PM (Lounge &amp; Vinyl only)</option>
                </select>
              </div>

              {/* Number of guests */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                  {t('visit.guests')}
                </label>
                <select 
                  value={guests} 
                  onChange={(e) => setGuests(e.target.value)} 
                  required
                  className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                  <option value="5-6 Guests">5 - 6 Guests (Sofa / Counter)</option>
                  <option value="7+ Guests">7+ Guests (Requires confirmation)</option>
                </select>
              </div>

              {/* Contact Method */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                  {t('visit.contact')}
                </label>
                <select 
                  value={method} 
                  onChange={(e) => setMethod(e.target.value)} 
                  required
                  className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light"
                >
                  <option value="WhatsApp">WhatsApp Message</option>
                  <option value="LINE">LINE Chat Message</option>
                  <option value="Direct Call">Direct Phone Call</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-widest text-accent uppercase">
                  {t('visit.requests')}
                </label>
                <textarea 
                  value={requests} 
                  onChange={(e) => setRequests(e.target.value)} 
                  rows={3}
                  placeholder={language === 'th' ? "เช่น ความต้องการเรื่องโซฟา ฉลองวันเกิด..." : "e.g. Sofa preference, birthday celebration..."}
                  className="bg-bg-deep border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3 px-4 text-ink text-sm font-light placeholder:text-ink-muted/30"
                />
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className="bg-accent text-bg-deep hover:bg-transparent hover:text-accent border border-accent py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 mt-4 cursor-pointer shadow-lg hover:shadow-accent/10"
              >
                {t('visit.submit')}
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
