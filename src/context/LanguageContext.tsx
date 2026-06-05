"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'th' | 'en' | 'ja' | 'ko' | 'ru' | 'es';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  th: {
    "nav.home": "หน้าแรก",
    "nav.about": "เรื่องราวของเรา",
    "nav.whatsOn": "ตารางดนตรีสด",
    "nav.drinks": "เครื่องดื่ม & ของว่าง",
    "nav.gallery": "ภาพบรรยากาศ",
    "nav.visit": "ที่ตั้ง & จองโต๊ะ",
    "nav.book": "จองโต๊ะ",
    
    "hero.tagline": "ดนตรีแจ๊ส แผ่นเสียงไวนิล และแกลเลอรีศิลปะในวันเวลาที่น่าคิดถึง",
    "hero.appearing": "แสดงคืนนี้",
    "hero.cta": "ตารางดนตรีสัปดาห์นี้",
    
    "common.hours": "เวลาทำการ",
    "common.hoursDetail": "วันพุธ – วันจันทร์: 17:00 – 24:00 น. (ปิดวันอังคาร)",
    "common.address": "ที่ตั้ง",
    "common.addressDetail": "355/3 ซอยสุขุมวิท 55 (ทองหล่อ) แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110",
    "common.landmark": "จุดสังเกต: ระหว่างทองหล่อซอย 17 และ 19 ข้างเซเว่นอีเลฟเว่น ทางเข้าอยู่ฝั่งซอย 17 ร้านอยู่ชั้น 3",
    "common.phone": "เบอร์โทร",
    "common.email": "อีเมล",
    "common.cover": "ค่าเข้าชม (Cover Charge)",
    "common.reserve": "ช่องทางติดต่อจองโต๊ะ",
    "common.reserveCta": "จองโต๊ะล่วงหน้าผ่าน LINE / WhatsApp",
    "common.line": "แชท LINE OA",
    "common.whatsapp": "แชท WhatsApp",
    "common.call": "โทรสายตรง",
    "common.ratings": "คะแนนรีวิว",

    "about.title": "ห้องนั่งเล่นแจ๊สและแกลเลอรีศิลปะ",
    "about.subtitle": "เรื่องราวของเรา",
    "about.p1": "Bluebird Jazz Bar เป็นบาร์ดนตรีสดและแกลเลอรีศิลปะขนาดกะทัดรัดบนชั้น 3 ที่ซ่อนตัวอย่างสงบในย่านทองหล่อ แตกต่างจากบาร์ทองหล่อทั่วไปที่มักเล่นเพลงไทยหรือป๊อปกระแสหลัก ที่นี่เราให้ความสำคัญกับเพลงแจ๊สคลาสสิก (Jazz Standards) ดนตรีอเมริกันดั้งเดิม (American Classics) และการเปิดแผ่นเสียงไวนิลที่ให้ความรู้สึกอบอุ่นในยุคอนาล็อก",
    "about.p2": "เราออกแบบบรรยากาศให้เป็นกันเองและผ่อนคลายที่สุด 'เหมือนได้ไปนั่งฟังดนตรีที่ห้องนั่งเล่นในบ้านเพื่อน' หรือร่วมสนุกแบบปาร์ตี้แจ๊สยุคนิวออร์ลีนส์ (New Orleans Vibe) ทำให้ที่นี่เป็นพื้นที่เปิดรับคนทุกรุ่น ทุกวัย และผู้ที่สนใจแจ๊สแบบไม่เกร็ง ไม่เคร่งขรึมเหมือนแจ๊สคลับดั้งเดิมทั่วไป",
    "about.p3": "นอกจากดนตรีแล้ว ภายในร้านยังเป็นพื้นที่แกลเลอรีจัดแสดงงานศิลปะร่วมสมัย และมีเวทีเปิดช่วง Jam Sessions ในทุกวันพุธให้นักดนตรีหน้าใหม่และคนรักดนตรีได้ขึ้นมาร่วมเล่นแสดงตัวตนอีกด้วย",
    "about.feature1.title": "คลังแผ่นเสียงไวนิล",
    "about.feature1.desc": "คัดสรรแผ่นเสียงแจ๊สระดับตำนาน เปิดแผ่นสลับหมุนเวียนสร้างมู้ดอนาล็อกในทุกค่ำคืน",
    "about.feature2.title": "ใกล้ชิดนักดนตรี",
    "about.feature2.desc": "ตำแหน่งที่นั่งถูกจัดวางล้อมรอบเวทีอย่างเป็นกันเอง ให้คุณสัมผัสแรงสั่นสะเทือนของเสียงดนตรีสดอย่างใกล้ชิด",

    "whatsOn.title": "ตารางดนตรีสดประจำสัปดาห์",
    "whatsOn.subtitle": "Whats On",
    "whatsOn.desc": "ดนตรีสดเริ่มแสดงในเวลา 20:00 หรือ 20:30 น. ของทุกวัน (ร้านปิดวันอังคาร) ยินดีต้อนรับการ Walk-in อย่างเป็นกันเอง",
    "whatsOn.jamTitle": "Jam Session ค่ำคืนวันพุธ",
    "whatsOn.jamDesc": "เวทีเปิดสำหรับศิลปินแจ๊ส นักดนตรี และผู้สนใจขึ้นมาแจมดนตรีกันในบรรยากาศ House-Party",
    "whatsOn.coverChargeDesc": "🔸 ค่าเข้าชม (Cover Charge): มีการเรียกเก็บหน้าประตูสำหรับศิลปินในบางช่วงเวลา กรุณาสอบถามราคาอัปเดตจากบาร์หรือทางเพจโซเชียลมีเดียของร้านโดยตรง",

    "menu.title": "เมนูเครื่องดื่มและของว่าง",
    "menu.subtitle": "Libations & Bites",
    "menu.desc": "เครื่องดื่มคัดสรร และกับแกล้มว่างทานคู่ดนตรีสด เนื้อหาและราคานี้เป็นข้อมูลเบื้องต้นชั่วคราว โปรดตรวจสอบเมนูจริงที่บาร์",
    "menu.featured": "เครื่องดื่มแนะนำ",
    "menu.featuredDesc": "ค็อกเทล 'Bluebird' ซิกเนเจอร์จินสีฟ้าสดใสที่มีรสสัมผัสจากส้มบลูคูราโซและเลมอนเปรี้ยวหวานสดชื่น เสิร์ฟในแก้วทรงนกอันเป็นเอกลักษณ์ของร้าน",
    "menu.thb": "บาท",

    "gallery.title": "ภาพบรรยากาศในร้าน",
    "gallery.subtitle": "The Gallery",
    "gallery.desc": "แสงสี มู้ดอนาล็อกคลาสสิก ชั้นวางแผ่นเสียง และงานศิลปะที่ตกแต่งบนผนัง (ภาพด้านล่างเป็นภาพประกอบ placeholder เพื่อทดสอบเลย์เอาต์)",

    "visit.title": "เดินทางมาพบเรา",
    "visit.subtitle": "Visit Us",
    "visit.findUs": "วิธีการเดินทาง",
    "visit.findUsDetail": "ร้านตั้งอยู่ระหว่างซอยทองหล่อ 17 และ 19 (ข้างๆ 7-Eleven) เมื่อมาถึงซอย 17 จะมีป้ายโลโก้ร้านรูปนกถือแผ่นเสียงและแซกโซโฟนอยู่ทางเข้า ให้เดินขึ้นบันไดตึกไปยัง ชั้น 3 บรรยากาศบาร์จะเปิดต้อนรับคุณ",
    "visit.reserveTitle": "ส่งข้อมูลสำรองที่นั่ง",
    "visit.reserveDesc": "เนื่องจากร้านมีพื้นที่จำกัดและเป็นกันเองมาก ฟอร์มนี้จะช่วยรวบรวมข้อมูลเพื่อส่งข้อความจองผ่านทาง WhatsApp หรือ LINE OA ของร้านได้สะดวกยิ่งขึ้น",
    "visit.name": "ชื่อ-นามสกุล",
    "visit.phone": "เบอร์โทรศัพท์",
    "visit.date": "วันที่ต้องการเข้าใช้บริการ",
    "visit.time": "รอบเวลาการแสดง",
    "visit.guests": "จำนวนที่นั่ง (แขก)",
    "visit.contact": "ช่องทางจองที่ต้องการ",
    "visit.requests": "ความต้องการพิเศษ / หมายเหตุ",
    "visit.submit": "ส่งคำขอจองโต๊ะ",
    "visit.successLine": "คัดลอกรายละเอียดการจองแล้ว! กำลังเปิด LINE เพื่อให้คุณส่งข้อความคุยกับร้าน",

    "vinyl.nowPlaying": "กำลังเล่นแผ่นไวนิล",
    "vinyl.artist": "เซสชันไวนิลคลาสสิก",
    "vinyl.copyright": "© 2026 Bluebird Jazz Bar ทองหล่อ. สงวนลิขสิทธิ์. ออกแบบระบบตามแบบอย่าง Blue Note NYC โดยไม่คัดลอกสื่อลิขสิทธิ์",
    "mascot.title": "เบื้องหลังการออกแบบมาสคอต",
    "mascot.desc": "น้องนกบลูเบิร์ดเริ่มต้นมาจากภาพสเก็ตช์ดินสอ เพื่อสื่อความอบอุ่น เป็นกันเอง และรักในดนตรีแจ๊ส ท่วงทำนองสด และแผ่นเสียงไวนิลคลาสสิก",
    "mascot.bandTitle": "แจมเซสชันกับวงน้องนก",
    "mascot.bandDesc": "เวทีวันพุธเปิดกว้างสำหรับแจ๊สเซสชันสุดพิเศษ ร่วมบรรเลงโดยวงมาสคอตสุดน่ารักของเรา",
    "mascot.cheerTitle": "ชนแก้วและฉลองร่วมกัน",
    "mascot.cheerDesc": "ร้านของเราต้อนรับความหลากหลายและความสุขในเสียงเพลงของทุกๆ คน ชื่นชมเครื่องดื่มรสเลิศ ไปพร้อมๆ กับการดื่มด่ำดนตรีแจ๊สสุดพิเศษที่นี่!"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "Our Story",
    "nav.whatsOn": "What's On",
    "nav.drinks": "Drinks & Bites",
    "nav.gallery": "Gallery",
    "nav.visit": "Visit & Booking",
    "nav.book": "Reserve Table",
    
    "hero.tagline": "Jazz music, vinyl records and art gallery in nostalgic time",
    "hero.appearing": "Appearing Tonight",
    "hero.cta": "View Weekly Schedule",
    
    "common.hours": "Opening Hours",
    "common.hoursDetail": "Wed – Mon: 17:00 – Midnight (Closed Tuesdays)",
    "common.address": "Address",
    "common.addressDetail": "355/3 Soi Sukhumvit 55 (Thong Lo), Khlong Tan Nuea, Watthana, Bangkok 10110",
    "common.landmark": "Landmark: Located between Thonglor Soi 17 & 19, right beside 7-Eleven. The entrance is on Soi 17; venue is situated on the 3rd floor.",
    "common.phone": "Phone",
    "common.email": "Email",
    "common.cover": "Cover Charge",
    "common.reserve": "Table Bookings",
    "common.reserveCta": "Book tables in advance via LINE / WhatsApp",
    "common.line": "Chat via LINE OA",
    "common.whatsapp": "Chat via WhatsApp",
    "common.call": "Direct Call",
    "common.ratings": "Ratings",

    "about.title": "A Cozy Living Room for Jazz & Art",
    "about.subtitle": "Our Story",
    "about.p1": "Bluebird Jazz Bar is a cozy 3rd-floor live music sanctuary and art gallery hidden in the heart of Thonglor, Bangkok. Unlike other bars in the area that predominantly play Thai cover songs, Bluebird focuses purely on classic jazz standards, American classics, and warm analog vinyl records.",
    "about.p2": "We designed the space to evoke a relaxed, nostalgic house-party vibe, 'like listening to jazz in a friend's living room.' Embracing a friendly New Orleans style, it invites visitors of all generations and backgrounds to enjoy jazz in an informal, accessible, and energetic space.",
    "about.p3": "In addition to nightly live jazz, our walls serve as a gallery for contemporary artworks. Every Wednesday night, we open the stage for guest jam sessions, welcoming local musicians and jazz enthusiasts to perform together.",
    "about.feature1.title": "Vinyl Archives",
    "about.feature1.desc": "We play a curated collection of legendary jazz records, rotating vinyl classics to set the analog tone.",
    "about.feature2.title": "Close to the Stage",
    "about.feature2.desc": "Seating is closely integrated around the musicians, letting you feel the rich, raw acoustic vibrations.",

    "whatsOn.title": "Live Music Calendar",
    "whatsOn.subtitle": "What's On",
    "whatsOn.desc": "Live music starts at 8:00 PM or 8:30 PM nightly (Closed Tuesdays). Walk-ins are always welcome.",
    "whatsOn.jamTitle": "Wednesday Jam Sessions",
    "whatsOn.jamDesc": "Open stage for local artists, jazz musicians, and travelers to jam together in a casual house-party mood.",
    "whatsOn.coverChargeDesc": "🔸 Cover Charge: Door fees apply on certain nights for performing artists. Please check pricing details at the door or via our official social pages.",

    "menu.title": "Libations & Snacks Menu",
    "menu.subtitle": "Drinks & Bites",
    "menu.desc": "Selected craft drinks and bites to accompany live music. Menu items and pricing are placeholders; please refer to the bar for the official menu.",
    "menu.featured": "Featured Cocktail",
    "menu.featuredDesc": "The signature 'Bluebird' cocktail. A vibrant blue gin-based blend with sweet blue curaçao and fresh tart lemon, served in our custom-made signature bird glass.",
    "menu.thb": "THB",

    "gallery.title": "Bar Ambiance Gallery",
    "gallery.subtitle": "The Gallery",
    "gallery.desc": "Analog warmth, vinyl crates, record sleeves, and gallery art pieces decorating our walls. (Photos below are placeholders for layout demonstration).",

    "visit.title": "How to Find Us",
    "visit.subtitle": "Visit Us",
    "visit.findUs": "Directions",
    "visit.findUsDetail": "Located on Sukhumvit 55, between Thonglor Soi 17 & 19 (adjacent to 7-Eleven). Look for our bluebird logo sign (featuring a bird holding a record and sax) at the entrance of Soi 17, then climb the stairs up to the 3rd floor.",
    "visit.reserveTitle": "Reservation Details",
    "visit.reserveDesc": "Due to our small room size, we recommend booking a table in advance. This form will compile your booking details to easily text our team via WhatsApp or LINE.",
    "visit.name": "Full Name",
    "visit.phone": "Phone Number",
    "visit.date": "Booking Date",
    "visit.time": "Performance Session",
    "visit.guests": "Number of Guests",
    "visit.contact": "Booking Method",
    "visit.requests": "Special Requests (Optional)",
    "visit.submit": "Submit Booking Request",
    "visit.successLine": "Booking details copied! Opening LINE for you to send the message.",

    "vinyl.nowPlaying": "Now Spinning",
    "vinyl.artist": "Classic Vinyl Session",
    "vinyl.copyright": "© 2026 Bluebird Jazz Bar Thonglor. All rights reserved. Structured after Blue Note NYC; no copyrighted assets are used.",
    "mascot.title": "Behind The Mascot Design",
    "mascot.desc": "The Bluebird mascot started as a cozy hand-drawn pencil sketch, expressing our love for classical live jazz and vintage vinyl records.",
    "mascot.bandTitle": "Nest Jam Session",
    "mascot.bandDesc": "Our Wednesday stage is open for special jam sessions, joined by our lovely mascot band playing together.",
    "mascot.cheerTitle": "Cheers & Celebrations",
    "mascot.cheerDesc": "Our nest welcomes everyone to celebrate diversity, love, and fine music. Grab a glass of wine or beer and let the jazz lift your spirits!"
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "ストーリー",
    "nav.whatsOn": "ライブ予定",
    "nav.drinks": "メニュー",
    "nav.gallery": "ギャラリー",
    "nav.visit": "予約＆アクセス",
    "nav.book": "席を予約する",
    
    "hero.tagline": "ノスタルジックなひとときを彩るジャズ、レコード、そしてアート",
    "hero.appearing": "今夜の出演",
    "hero.cta": "週間スケジュールを見る",
    
    "common.hours": "営業時間",
    "common.hoursDetail": "水曜〜月曜：17:00〜24:00（火曜定休）",
    "common.address": "住所",
    "common.addressDetail": "バンコク・ワッタナー区クロントーンヌア、ソイ・スクุมビット55（トンロー）355/3 〒10110",
    "common.landmark": "目印：トンロー・ソイ17と19の間、セブン-イレブンのすぐ隣。入り口はソイ17側にあり、店は3階にあります。",
    "common.phone": "電話番号",
    "common.email": "メールアドレス",
    "common.cover": "カバーチャージ",
    "common.reserve": "ご予約",
    "common.reserveCta": "LINE / WhatsAppでの事前予約をお勧めします",
    "common.line": "LINE公式アカウントでチャット",
    "common.whatsapp": "WhatsAppでチャット",
    "common.call": "直通電話",
    "common.ratings": "レビュー評価",

    "about.title": "ジャズとアートが集う、隠れ家のようなリビング",
    "about.subtitle": "ストーリー",
    "about.p1": "Bluebird Jazz Barは、バンコク・トンローの中心に隠れた、3階にある心地よいライブジャズバー兼アートギャラリーです。タイのポップスカバー曲を演奏する周囲の一般的なバーとは異なり、Bluebirdはクラシックなジャズスタンダード、アメリカンクラシック、そして温かみのあるアナログのレコードだけに焦点を当てています。",
    "about.p2": "「友達の家のリビングルームでジャズを聴いているような」リラックスしたノスタルジックな雰囲気を大切にしています。フレンドリーなニューオーリンズスタイルのジャズを取り入れ、堅苦しいジャズクラブとは異なり、あらゆる世代やバックグラウンドの人々が気軽に、自由にジャズを楽しめる空間です。",
    "about.p3": "毎夜のライブジャズに加え、壁面は現代アートのギャラリーとなっており、写真や絵画を楽しめます。毎週水曜日の夜にはジャムセッション（Jam Session）を開催し、地元のミュージシャンやジャズファンがステージで共に演奏を繰り広げています。",
    "about.feature1.title": "レコード棚",
    "about.feature1.desc": "伝説的なジャズの名盤コレクションを厳選。レコードならではの温かみあるサウンドが毎夜を包みます。",
    "about.feature2.title": "ステージの近くで",
    "about.feature2.desc": "客席とステージが近く、一体感のあるレイアウト。生演奏の息遣いや豊かな音の響きを間近で体感できます。",

    "whatsOn.title": "ライブスケジュール",
    "whatsOn.subtitle": "ライブ情報",
    "whatsOn.desc": "ライブ演奏は毎夜20:00または20:30に開始します（火曜定休）。ウォークインでのご来店も大歓迎です。",
    "whatsOn.jamTitle": "水曜ジャムセッション",
    "whatsOn.jamDesc": "地元のアーティスト、ジャズプレイヤー、旅行者が集まり、アットホームな雰囲気でセッションを楽しむオープンステージです。",
    "whatsOn.coverChargeDesc": "🔸 カバーチャージについて：一部の公演日には入口でカバーチャージを頂戴する場合がございます。詳細については当日またはSNS公式アカウントへお問い合わせください。",

    "menu.title": "ドリンク＆スナックメニュー",
    "menu.subtitle": "メニュー",
    "menu.desc": "ライブ演奏を彩る厳選されたドリンクとフード。メニュー内容と価格は目安ですので、店頭のメニューをご参照ください。",
    "menu.featured": "おすすめカクテル",
    "menu.featuredDesc": "シグニチャー「Bluebird」カクテル。ブルーキュラソーとフレッシュレモンが香る爽やかで鮮やかなブルーのジンベースカクテル。当店を代表する鳥型グラスで提供いたします。",
    "menu.thb": "バーツ",

    "gallery.title": "店内の雰囲気",
    "gallery.subtitle": "ギャラリー",
    "gallery.desc": "アナログの温もり、レコード棚、アートが飾られたコンクリート壁など、こだわりの空間。",

    "visit.title": "アクセス",
    "visit.subtitle": "アクセス",
    "visit.findUs": "道順",
    "visit.findUsDetail": "スクムビット55のトンロー・ソイ17と19の間（セブン-イレブンのすぐ隣）にあります。ソイ17の入り口にある、レコードとサックスを持った青い鳥の看板が目印です。階段でビルの3階へお上がりください。",
    "visit.reserveTitle": "ご予約内容",
    "visit.reserveDesc": "限られた客席のため、事前予約をお勧めしております。このフォームを入力すると、WhatsAppやLINEでの予約メッセージが簡単に作成できます。",
    "visit.name": "お名前",
    "visit.phone": "電話番号",
    "visit.date": "ご予約希望日",
    "visit.time": "ご希望時間",
    "visit.guests": "人数",
    "visit.contact": "予約方法",
    "visit.requests": "ご要望（任意）",
    "visit.submit": "予約リクエストを送信",
    "visit.successLine": "予約詳細をコピーしました！LINEを開いてショップへ送信してください。",

    "vinyl.nowPlaying": "レコード再生中",
    "vinyl.artist": "クラシックレコードセッション",
    "vinyl.copyright": "© 2026 Bluebird Jazz Bar トンロー. All rights reserved. Designed after Blue Note NYC; no copyrighted assets used.",
    "mascot.title": "マスコットデザインの裏話",
    "mascot.desc": "ブルーバードのマスコットは、温かみのある手描きの鉛筆スケッチから始まり、クラシックなライブジャズとヴィンテージレコードへの愛を表現しています。",
    "mascot.bandTitle": "ネスト・ジャム・セッション",
    "mascot.bandDesc": "水曜日のステージは、マスコットバンドによる演奏を交えた特別なジャмセッションのために開放されています。",
    "mascot.cheerTitle": "乾杯と祝福",
    "mascot.cheerDesc": "私たちの巣は、多様性、愛、そして素晴らしい音楽を祝うために皆様を歓迎します。ワインやビールを片手にジャズを楽しみましょう！"
  },
  ko: {
    "nav.home": "홈",
    "nav.about": "소개",
    "nav.whatsOn": "공연 일정",
    "nav.drinks": "메뉴",
    "nav.gallery": "갤러리",
    "nav.visit": "예약＆안내",
    "nav.book": "예약하기",
    
    "hero.tagline": "향수를 자극하는 재즈 음악, 바이닐 레코드, 그리고 미술 갤러리",
    "hero.appearing": "오늘 밤 공연",
    "hero.cta": "주간 공연 일정 보기",
    
    "common.hours": "영업 시간",
    "common.hoursDetail": "수요일 – 월요일: 17:00 – 24:00 (화요일 휴무)",
    "common.address": "주소",
    "common.addressDetail": "355/3 소이 수쿰빗 55 (통로), 클롱탄느아, 왓타나, 방콕 10110",
    "common.landmark": "랜드마크: 통로 소이 17과 19 사이, 세븐일레븐 바로 옆. 입구는 소이 17 쪽에 있으며, 매장은 3층에 위치해 있습니다.",
    "common.phone": "전화번호",
    "common.email": "이메일",
    "common.cover": "커버 차지",
    "common.reserve": "테이블 예약",
    "common.reserveCta": "LINE / WhatsApp을 통해 테이블을 사전 예약하세요",
    "common.line": "LINE OA로 문의하기",
    "common.whatsapp": "WhatsApp으로 문의하기",
    "common.call": "전화 문의",
    "common.ratings": "리뷰 평점",

    "about.title": "재즈와 예술이 숨쉬는 아늑한 아지트",
    "about.subtitle": "소개",
    "about.p1": "블루버드 재즈 바는 방콕 통로 중심부에 숨겨진 아늑한 3층 라이브 재즈 바 겸 미술 갤러리입니다. 태국 가요 커버 중심의 일반적인 바들과 달리, 블루버드는 클래식 재즈 스탠다드, 아메리간 클래식, 그리고 따뜻한 아날로그 바이닐 레코드 감상에 집중합니다.",
    "about.p2": "우리는 '친구의 거실에서 재즈를 듣는 듯한' 편안하고 아늑한 분위기를 디자인했습니다. 격식 없고 유쾌한 뉴올리언스 스타일의 활기를 담아, 전 세대와 국적을 불문하고 재즈를 캐주얼하고 친근하게 즐길 수 있는 특별한 공간을 제공합니다.",
    "about.p3": "매일 밤 펼쳐지는 라이브 재즈 외에도 벽면은 현대 미술품을 감상할 수 있는 갤러리로 운영됩니다. 매주 수요일 밤에는 오픈 잼 세션이 열려, 현지 뮤지션과 재즈 애호가들이 무대 위에서 함께 호흡하고 연주합니다.",
    "about.feature1.title": "바이닐 레코드",
    "about.feature1.desc": "전설적인 재즈 레코드 컬렉션을 엄선하여 아날로그 사운드가 밤을 채우는 따뜻한 분위기를 연출합니다.",
    "about.feature2.title": "가까운 무대",
    "about.feature2.desc": "뮤지션과 객석이 유기적으로 배치되어 라이브 연주에서 나오는 풍부한 어쿠스틱 진동을 바로 곁에서 느끼실 수 있습니다.",

    "whatsOn.title": "공연 일정",
    "whatsOn.subtitle": "공연 일정",
    "whatsOn.desc": "라이브 음악은 매일 밤 8시 또는 8시 30분에 시작합니다 (화요일 휴무). 예약 없이 편하게 워크인으로 방문하셔도 좋습니다.",
    "whatsOn.jamTitle": "수요일 잼 세션",
    "whatsOn.jamDesc": "현지 아티스트, 뮤지션, 여행자들이 캐주얼한 파티 분위기 속에서 함께 즉흥 연주를 즐길 수 있는 오픈 스테이지입니다.",
    "whatsOn.coverChargeDesc": "🔸 커버 차지 안내: 일부 공연일의 아티스트 공연에는 커버 차지가 부과될 수 있습니다. 당일 가격은 매장 입구 또는 공식 SNS 채널에서 확인해 주세요.",

    "menu.title": "음료 및 스낵 메뉴",
    "menu.subtitle": "음료 & 스낵",
    "menu.desc": "라이브 공연에 곁들일 엄선된 음료와 가벼운 스낵. 해당 메뉴와 가격은 사전 예고 없이 변경될 수 있으니 매장 바에서 확인 바랍니다.",
    "menu.featured": "시그니처 칵테일",
    "menu.featuredDesc": "시그니처 '블루버드' 칵테일. 블루 큐라소와 신선한 레몬이 어우러진 싱그럽고 청량한 블루 진 베이스의 칵테일로, 매장 전용 새 모양 글라스에 제공됩니다.",
    "menu.thb": "바트",

    "gallery.title": "매장 분위기",
    "gallery.subtitle": "갤러리",
    "gallery.desc": "아날로그의 따스함, 바이닐 상자, 음반 슬리브, 그리고 공간을 꾸미는 갤러리 미술품들.",

    "visit.title": "오시는 길",
    "visit.subtitle": "오시는 길",
    "visit.findUs": "길 안내",
    "visit.findUsDetail": "수쿰빗 55 도로변, 통로 소이 17과 19 사이 (세븐일레븐 바로 옆)에 위치해 있습니다. 소이 17 골목 입구에 있는 바이닐과 색소폰을 든 블루버드 로고 간판을 찾으신 후 건물 3층으로 올라오시면 됩니다.",
    "visit.reserveTitle": "예약 정보",
    "visit.reserveDesc": "아늑하고 한정된 좌석으로 운영되므로 사전 예약을 권장합니다. 본 양식을 작성하시면 WhatsApp 또는 LINE 전송용 예약 메시지가 자동 생성됩니다.",
    "visit.name": "성함",
    "visit.phone": "전화번호",
    "visit.date": "예약 날짜",
    "visit.time": "공연 세션",
    "visit.guests": "방문 인원",
    "visit.contact": "예약 방법",
    "visit.requests": "요청사항 (선택)",
    "visit.submit": "예약 신청",
    "visit.successLine": "예약 내역이 복사되었습니다! 매장 LINE으로 예약 메시지를 보내주세요.",

    "vinyl.nowPlaying": "지금 재생 중",
    "vinyl.artist": "클래식 바이닐 세션",
    "vinyl.copyright": "© 2026 Bluebird Jazz Bar 통로. All rights reserved. Blue Note NYC를 벤치마킹하여 합법적으로 개발되었습니다.",
    "mascot.title": "마스코트 디자인 비하인드",
    "mascot.desc": "블루버드 마스코트는 따뜻한 연필 스케치로 시작하여 클래식 라이브 재즈와 빈티지 바이닐 레코드에 대한 사랑을 표현합니다.",
    "mascot.bandTitle": "네스트 잼 세션",
    "mascot.bandDesc": "수요일 무대는 저희 귀여운 마스코트 밴드와 함께 연주하는 특별한 잼 세션을 위해 열려 있습니다.",
    "mascot.cheerTitle": "건배와 축하",
    "mascot.cheerDesc": "저희 블루버드는 다양성, 사랑, 훌륭한 음악을 함께 축하하기 위해 모든 분을 환영합니다. 와인이나 맥주를 들고 재즈를 즐겨보세요!"
  },
  ru: {
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.whatsOn": "Афиша",
    "nav.drinks": "Меню",
    "nav.gallery": "Галерея",
    "nav.visit": "Контакты & Бронь",
    "nav.book": "Забронировать",
    
    "hero.tagline": "Джаз, виниловый винтаж и арт-галерея в атмосфере ностальгии",
    "hero.appearing": "Сегодня на сцене",
    "hero.cta": "Посмотреть расписание",
    
    "common.hours": "Часы работы",
    "common.hoursDetail": "Ср – Пн: 17:00 – 00:00 (Вторник – выходной)",
    "common.address": "Адрес",
    "common.addressDetail": "355/3 Soi Sukhumvit 55 (Thong Lo), Khlong Tan Nuea, Watthana, Bangkok 10110",
    "common.landmark": "Ориентир: между Thonglor Soi 17 и 19, рядом с 7-Eleven. Вход со стороны Soi 17, бар на 3-м этаже.",
    "common.phone": "Телефон",
    "common.email": "Эл. почта",
    "common.cover": "Входная плата",
    "common.reserve": "Бронирование",
    "common.reserveCta": "Предварительная бронь столов через LINE / WhatsApp",
    "common.line": "Написать в LINE OA",
    "common.whatsapp": "Написать в WhatsApp",
    "common.call": "Позвонить",
    "common.ratings": "Рейтинги",

    "about.title": "Уютная гостиная для джаза и искусства",
    "about.subtitle": "О нас",
    "about.p1": "Bluebird Jazz Bar — это уютный джаз-бар с живой музыкой и арт-галерея, спрятанные на 3-м этаже в самом сердце района Thonglor в Бангкоке. В отличие от других местных заведений, здесь звучат исключительно классические джазовые стандарты, американская классика и теплый аналоговый винил.",
    "about.p2": "Мы создали здесь непринужденную и ностальгическую атмосферу домашних посиделок — «словно вы слушаете джаз в гостиной у друга». Придерживаясь душевного стиля Нового Орлеана, бар открыт для гостей всех поколений и культур, позволяя наслаждаться джазом без лишнего пафоса.",
    "about.p3": "Помимо вечерней живой музыки, стены бара служат галереей современного искусства. Каждую среду мы открываем сцену для джем-сейшенов, приглашая местных музыкантов и ценителей джаза поиграть вместе в атмосфере квартирника.",
    "about.feature1.title": "Виниловый архив",
    "about.feature1.desc": "Коллекция легендарных джазовых пластинок, создающая теплое винтажное звучание каждый вечер.",
    "about.feature2.title": "Близко к сцене",
    "about.feature2.desc": "Столы расположены вплотную к музыкантам, позволяя буквально почувствовать живые акустические вибрации.",

    "whatsOn.title": "Живой джаз",
    "whatsOn.subtitle": "Афиша",
    "whatsOn.desc": "Живой джаз звучит каждый вечер с 20:00 или 20:30 (выходной — вторник). Вход свободный, бронь не обязательна.",
    "whatsOn.jamTitle": "Джем-сейшены по средам",
    "whatsOn.jamDesc": "Открытая сцена для местных музыкантов и джазменов-путешественников для совместной импровизации.",
    "whatsOn.coverChargeDesc": "🔸 Входная плата: в некоторые вечера взимается плата на входе в поддержку артистов. Уточняйте стоимость на входе или в наших соцсетях.",

    "menu.title": "Напитки и Закуски",
    "menu.subtitle": "Меню",
    "menu.desc": "Специально подобранные напитки и закуски к живому джазу. Пожалуйста, ознакомьтесь с актуальным меню на баре.",
    "menu.featured": "Фирменный коктейль",
    "menu.featuredDesc": "Фирменный коктейль «Bluebird». Яркий синий микс на основе джина с добавлением ликера блю кюрасао и свежего лимона, подается в бокале в форме птицы.",
    "menu.thb": "бат",

    "gallery.title": "Фотогалерея",
    "gallery.subtitle": "Галерея",
    "gallery.desc": "Аналоговое тепло, ящики с винилом, винтажные пластинки и современная живопись на стенах.",

    "visit.title": "Где мы находимся",
    "visit.subtitle": "Контакты",
    "visit.findUs": "Проезд",
    "visit.findUsDetail": "Расположен на Sukhumvit 55, между Thonglor Soi 17 и 19 (рядом с 7-Eleven). Найдите нашу вывеску с синей птицей у входа на Soi 17 и поднимитесь по лестнице на 3-й этаж.",
    "visit.reserveTitle": "Форма бронирования",
    "visit.reserveDesc": "Ввиду небольшого размера бара мы рекомендуем бронировать столы заранее. Форма создаст готовое сообщение для отправки через WhatsApp или LINE.",
    "visit.name": "Имя и фамилия",
    "visit.phone": "Телефон",
    "visit.date": "Дата визита",
    "visit.time": "Время визита",
    "visit.guests": "Количество гостей",
    "visit.contact": "Способ бронирования",
    "visit.requests": "Пожелания (опционально)",
    "visit.submit": "Запросить бронь стола",
    "visit.successLine": "Детали бронирования скопированы! Открываем LINE для отправки сообщения.",

    "vinyl.nowPlaying": "Сейчас на проигрывателе",
    "vinyl.artist": "Виниловая сессия",
    "vinyl.copyright": "© 2026 Bluebird Jazz Bar Thonglor. Все права защищены. Разработано по мотивам Blue Note NYC; авторские права соблюдены.",
    "mascot.title": "История создания маскота",
    "mascot.desc": "Наш талисман Синяя птица начинался как уютный карандашный набросок от руки, выражающий нашу любовь к классическому живому джазу и винилу.",
    "mascot.bandTitle": "Джем-сейшен в гнезде",
    "mascot.bandDesc": "Наша сцена по средам открыта для особых джем-сейшенов с участием нашей очаровательной группы маскотов.",
    "mascot.cheerTitle": "Будем здоровы!",
    "mascot.cheerDesc": "Наше гнездо приветствует всех, празднуя разнообразие, любовь и хорошую музыку. Возьмите бокал вина или пива и наслаждайтесь джазом!"
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Historia",
    "nav.whatsOn": "Calendario",
    "nav.drinks": "Menú",
    "nav.gallery": "Galería",
    "nav.visit": "Visita & Reserva",
    "nav.book": "Reservar Mesa",
    
    "hero.tagline": "Música jazz, discos de vinilo y galería de arte en un tiempo nostálgico",
    "hero.appearing": "Esta Noche",
    "hero.cta": "Ver Calendario Semanal",
    
    "common.hours": "Horario",
    "common.hoursDetail": "Mié – Lun: 17:00 – Medianoche (Cerrado los martes)",
    "common.address": "Dirección",
    "common.addressDetail": "355/3 Soi Sukhumvit 55 (Thong Lo), Khlong Tan Nuea, Watthana, Bangkok 10110",
    "common.landmark": "Punto de referencia: Ubicado entre Thonglor Soi 17 y 19, al lado del 7-Eleven. La entrada está en el Soi 17; el establecimiento está en el 3er piso.",
    "common.phone": "Teléfono",
    "common.email": "Correo",
    "common.cover": "Cover",
    "common.reserve": "Reservas de Mesa",
    "common.reserveCta": "Reserve mesa con antelación vía LINE / WhatsApp",
    "common.line": "Chat vía LINE OA",
    "common.whatsapp": "Chat vía WhatsApp",
    "common.call": "Llamada Directa",
    "common.ratings": "Calificaciones",

    "about.title": "Una Acogedora Sala de Estar para el Jazz",
    "about.subtitle": "Historia",
    "about.p1": "Bluebird Jazz Bar es un acogedor santuario de música en vivo y galería de arte en el 3er piso, escondido en el corazón de Thonglor, Bangkok. A diferencia de otros bares de la zona que tocan canciones de cover tailandesas, Bluebird se enfoca puramente en estándares clásicos de jazz, clásicos americanos y cálidos discos de vinilo analógicos.",
    "about.p2": "Diseñamos el espacio para evocar un ambiente relajado y nostálgico de fiesta en casa, 'como escuchar jazz en la sala de un amigo'. Adoptando un amigable estilo de Nueva Orleans, invita a visitantes de todas las generaciones a disfrutar del jazz en un espacio informal, accesible y energético.",
    "about.p3": "Además del jazz en vivo todas las noches, nuestras paredes sirven como galería de obras de arte contemporáneo. Cada miércoles por la noche, abrimos el escenario para jam sessions, invitando a músicos locales y entusiastas a tocar juntos.",
    "about.feature1.title": "Archivo de Vinilos",
    "about.feature1.desc": "Tocamos una colección seleccionada de discos de jazz legendarios, rotando clásicos para establecer el tono analógico.",
    "about.feature2.title": "Cerca del Escenario",
    "about.feature2.desc": "Los asientos están integrados alrededor de los músicos, permitiéndote sentir las vibraciones acústicas crudas.",

    "whatsOn.title": "Calendario de Conciertos",
    "whatsOn.subtitle": "Calendario",
    "whatsOn.desc": "La música en vivo comienza a las 8:00 PM o 8:30 PM todas las noches (Cerrado los martes). Walk-ins siempre bienvenidos.",
    "whatsOn.jamTitle": "Jam Sessions de los Miércoles",
    "whatsOn.jamDesc": "Escenario abierto para artistas locales, músicos de jazz y viajeros para improvisar juntos en un ambiente casual.",
    "whatsOn.coverChargeDesc": "🔸 Cover: Se aplican tarifas de entrada en ciertas noches para los artistas. Por favor, consulte los detalles de precios en la puerta o vía redes sociales.",

    "menu.title": "Menú de Bebidas y Tapas",
    "menu.subtitle": "Bebidas & Tapas",
    "menu.desc": "Bebidas artesanales y bocados seleccionados para acompañar la música en vivo. Los artículos y precios son de referencia; consulte el menú real en la barra.",
    "menu.featured": "Cóctel Destacado",
    "menu.featuredDesc": "El cóctel firma 'Bluebird'. Una mezcla vibrante a base de ginebra con curaçao azul y limón fresco, servido en nuestra icónica copa en forma de pájaro.",
    "menu.thb": "THB",

    "gallery.title": "Galería del Bar",
    "gallery.subtitle": "La Galería",
    "gallery.desc": "Calidez analógica, cajas de vinilos, portadas de discos y obras de arte contemporáneo decorando nuestras paredes.",

    "visit.title": "Cómo Encontrarnos",
    "visit.subtitle": "Visítanos",
    "visit.findUs": "Direcciones",
    "visit.findUsDetail": "Ubicado en Sukhumvit 55, entre Thonglor Soi 17 y 19 (junto al 7-Eleven). Busque nuestro letrero con el logo del pájaro azul en la entrada del Soi 17, luego suba las escaleras hasta el 3er piso.",
    "visit.reserveTitle": "Detalles de Reserva",
    "visit.reserveDesc": "Debido al tamaño limitado del lugar, recomendamos reservar mesa con antelación. Este formulario recopilará los detalles de su reserva para enviarlos por WhatsApp o LINE.",
    "visit.name": "Nombre Completo",
    "visit.phone": "Número de Teléfono",
    "visit.date": "Fecha de Reserva",
    "visit.time": "Sesión de Show",
    "visit.guests": "Número de Personas",
    "visit.contact": "Método de Reserva",
    "visit.requests": "Peticiones Especiales (Opcional)",
    "visit.submit": "Enviar Solicitud de Reserva",
    "visit.successLine": "¡Detalles de reserva copiados! Abriendo LINE para enviar el mensaje.",

    "vinyl.nowPlaying": "Reproduciendo",
    "vinyl.artist": "Sesión de Vinilo",
    "vinyl.copyright": "© 2026 Bluebird Jazz Bar Thonglor. Todos los derechos reservados. Inspirado en Blue Note NYC; respetando los derechos de autor.",
    "mascot.title": "Detrás del diseño del mascot",
    "mascot.desc": "El Bluebird mascot comenzó como un boceto a lápiz hecho a mano, que expresa nuestro amor por el jazz clásico en vivo y los discos de vinilo vintage.",
    "mascot.bandTitle": "Sesión de Jam en el Nido",
    "mascot.bandDesc": "Nuestro escenario de los miércoles está abierto para sesiones de jam especiales con nuestra adorable banda de mascotas.",
    "mascot.cheerTitle": "Salud y Celebración",
    "mascot.cheerDesc": "Nuestro nido da la bienvenida a todos para celebrar la diversidad, el amor y la buena música. ¡Toma una copa de vino o cerveza y disfruta del jazz!"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('th');

  // Load saved preference from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('bluebird-lang') as Language;
    const validLanguages: Language[] = ['th', 'en', 'ja', 'ko', 'ru', 'es'];
    if (savedLanguage && validLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bluebird-lang', lang);
  };

  const t = (key: string): string => {
    const langDict = translations[language] || translations['en'];
    return langDict[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
