"use client";

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

type StoryParagraph = 
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'footer'; text: string };

const stories: Record<'th' | 'en' | 'ja' | 'ko', StoryParagraph[]> = {
  th: [
    { type: 'heading', text: 'ทุกอย่างเริ่มจากเครื่องเล่นแผ่นเสียงเก่าเครื่องหนึ่ง' },
    { type: 'text', text: 'หลายปีก่อน ชายหนุ่มคนหนึ่ง — แอนดี้ หมอที่ไปร่ำเรียนไกลถึงอเมริกา — เดินเข้าไปในร้านของเก่า แล้วเดินออกมาพร้อมเครื่องเล่นแผ่นเสียงมือสองหนึ่งเครื่อง วันนั้นเขายังไม่รู้ว่ามันจะเปลี่ยนชีวิตเขาไปตลอดกาล' },
    { type: 'text', text: 'พอเข็มแตะร่องแผ่นครั้งแรก เสียงทรัมเป็ต เปียโน และดับเบิลเบสที่อบอุ่นในแบบที่ไฟล์ดิจิทัลให้ไม่ได้ ก็ค่อย ๆ ดึงเขาเข้าไปในโลกของแจ๊ส จากแผ่นแรกกลายเป็นสิบ จากสิบกลายเป็นคอลเลกชัน และทุกครั้งที่เดินทางไปต่างแดน เขาจะตามหาแจ๊สบาร์เล็ก ๆ สักแห่งเสมอ — ที่ที่คนแปลกหน้านั่งใกล้กันมากพอจะยิ้มให้กัน' },
    { type: 'heading', text: 'แล้ววันหนึ่งเขาก็พาความรู้สึกนั้นกลับบ้าน' },
    { type: 'text', text: 'เขาไม่ได้อยากทำบาร์หรู ไม่ได้อยากให้ใครต้องแต่งตัวดีหรือสั่งเหล้าแพง ๆ ถึงจะมีสิทธิ์ฟังเพลงเพราะ ๆ เขาแค่อยากมีห้องเล็ก ๆ สักห้อง ที่ใครเดินผ่านก็แวะขึ้นมานั่งได้ ฟังได้ คุยได้ แล้วกลับบ้านไปพร้อมมิตรภาพติดไม้ติดมือ — นั่นคือจุดเริ่มต้นของ Bluebird' },
    { type: 'heading', text: 'ขึ้นมาชั้นสาม แล้วคุณจะเข้าใจ' },
    { type: 'text', text: 'เลยปากซอยทองหล่อ 17 มานิดเดียว มองหาป้ายนกสีฟ้าถือไวนิลกับแซกโซโฟน เดินขึ้นบันไดมา แล้วผลักประตูเข้ามา ที่นี่ไม่มีเวทีสูง ไม่มีระยะห่างระหว่างคนเล่นกับคนฟัง มีแต่โซฟาคนละแบบ แสงสลัวอบอุ่น แผ่นเสียงที่กำลังหมุน และเปียโนตัวจริงที่มุมห้อง — ตัวที่บางคืนแขกสักคนลุกขึ้นไปนั่งเล่น หรือหยิบเครื่องดนตรีขึ้นมาแจมกับวงเอง' },
    { type: 'text', text: 'เราเปิดแผ่นไล่ตั้งแต่ยุคทองของแจ๊ส มาจนถึงเสียงร่วมสมัย เพราะสำหรับเรา ดิว่าคนหนึ่งไม่จำเป็นต้องมาจากนิวออร์ลีนส์เสมอไป — บางครั้งก็มาจากโตเกียวก็ได้' },
    { type: 'heading', text: 'สั่งสักแก้วสิ' },
    { type: 'text', text: 'มาถึง Bluebird ทั้งที ก็ต้องลอง "Bluebird" — ค็อกเทลจินสีฟ้าสดใส รสเปรี้ยวอมหวาน เสิร์ฟมาในแก้วทรงนกที่กลายเป็นเอกลักษณ์ของร้าน หรือจะเป็นคลาสสิกค็อกเทลสักแก้ว จิบช้า ๆ ไปกับเสียงเพลง ก็เข้ากันดี' },
    { type: 'text', text: 'ที่นี่ไม่ใช่แค่บาร์ ไม่ใช่แค่แกลเลอรี และไม่ใช่แค่ที่เก็บแผ่นเสียง — ที่นี่คือห้องนั่งเล่นของคนรักแจ๊ส ที่เปิดประตูต้อนรับมาตั้งแต่ปี 2019 และยังเปิดอยู่ทุกค่ำคืน (ยกเว้นวันอังคาร)' },
    { type: 'footer', text: 'Bluebird Jazz Bar · ทองหล่อ · ชั้น 3 · พุธ–จันทร์ 17:00–24:00 (ปิดอังคาร)' }
  ],
  en: [
    { type: 'heading', text: 'It all began with one old record player.' },
    { type: 'text', text: 'Years ago, a young man — a doctor named Andy, then studying in the United States — walked into a secondhand shop and walked out with a used turntable. He had no idea that day would change his life for good.' },
    { type: 'text', text: 'The first time the needle touched the groove, the warm sound of trumpet, piano and double bass — a warmth no digital file can give — pulled him into the world of jazz. One record became ten, ten became a collection, and on every trip abroad he\'d seek out a small jazz bar: the kind of place where strangers sit close enough to smile at one another.' },
    { type: 'heading', text: 'Then one day, he brought that feeling home.' },
    { type: 'text', text: 'He never wanted to build a fancy bar, never wanted anyone to feel they had to dress up or order an expensive single malt just to deserve good music. He simply wanted a small room — a place anyone passing by could climb up to, sit down, listen, talk, and leave with a little friendship in hand. That was the beginning of Bluebird.' },
    { type: 'heading', text: 'Come up to the third floor, and you\'ll understand.' },
    { type: 'text', text: 'Just past the mouth of Thonglor Soi 17, look for the sign of a blue bird holding a vinyl record and a saxophone. Walk up the stairs and push the door open. There\'s no high stage here, no distance between players and listeners — only mismatched sofas, warm low light, a record spinning, and a real piano in the corner. Some nights a guest gets up to play it, or picks up an instrument and jams with the band.' },
    { type: 'text', text: 'We spin everything from the golden age of jazz to contemporary voices — because to us, a diva doesn\'t always have to come from New Orleans. Sometimes she comes from Tokyo.' },
    { type: 'heading', text: 'Order yourself a glass.' },
    { type: 'text', text: 'At Bluebird you have to try the "Bluebird" — a bright-blue gin cocktail, sweet and sour, served in the bird-shaped glass that\'s become our signature. Or sip a classic cocktail slowly to the music; that works just as well.' },
    { type: 'text', text: 'This isn\'t just a bar, just a gallery, or just a place that keeps records. This is a living room for people who love jazz — and the door has been open since 2019, every night but Tuesday.' },
    { type: 'footer', text: 'Bluebird Jazz Bar · Thonglor · 3rd floor · Wed–Mon 5 PM–midnight (closed Tuesday)' }
  ],
  ja: [
    { type: 'heading', text: 'すべては、一台の古いレコードプレーヤーから始まりました。' },
    { type: 'text', text: '何年も前、アメリカに留学していた若き医師アンディは、ある古道具屋で中古のターンテーブルを手に入れました。その日が自分の人生を変えることになるとは、まだ知る由もありませんでした。' },
    { type: 'text', text: '針が初めて溝に触れた瞬間、トランペット、ピアノ、ウッドベースの——デジタル音源では決して出せない——温かな響きが、彼をジャズの世界へと引き込みました。一枚が十枚になり、十枚がコレクションになり、海外へ行くたびに、彼は小さなジャズバーを探すようになりました。見知らぬ者同士が、微笑み合えるほど近くに座れる場所を。' },
    { type: 'heading', text: 'そしてある日、彼はその感覚を故郷へ持ち帰りました。' },
    { type: 'text', text: '豪華なバーを作りたかったわけではありません。良い音楽を聴くために、着飾ったり高価なシングルモルトを注文したりする必要などない——そう考えていました。彼が望んだのは、ただ小さな一部屋。通りすがりの誰もが上がってきて、腰かけ、耳を傾け、語り合い、ささやかな友情を手にして帰れる場所でした。それがBluebirdの始まりです。' },
    { type: 'heading', text: '3階まで上がってみてください。きっと分かります。' },
    { type: 'text', text: 'トンロー・ソイ17の入口を少し過ぎたあたり、レコードとサックスを抱えた青い鳥의 간판을 찾으십시오. 계단을 올라가 문을 밀고 들어가면 높은 무대도 없고, 연주자와 듣는 사람을 갈라놓는 거리도 없습니다. 있는 것은 각양각색의 소파, 은은한 따스한 불빛, 계속 도는 레코드, 그리고 구석에 놓인 진짜 피아노. 어떤 밤에는 손님이 스스로 그것을 치기 시작하거나 악기를 손에 쥐고 밴드와 세션을 하기도 합니다.' },
    { type: 'text', text: '私たちはジャズの黄金期から現代の歌声まで幅広くかけます。なぜなら、ディーヴァは必ずしもニューオーリンズ出身とは限らない——時には、東京からやってくることもあるのですから。' },
    { type: 'heading', text: '一杯、頼んでみてください。' },
    { type: 'text', text: 'Bluebirdに来たなら、やはり「Bluebird」を。鮮やかな青いジン・カクテルは甘酸っぱく、この店の象徴となった鳥型のグラスで供されます。あるいはクラシックカクテルを一杯、音楽とともにゆっくりと——それもまた格別です。' },
    { type: 'text', text: 'ここはただのバーでも、ただのギャラリーでも、ただのレコード置き場でもありません。ジャズを愛する人々のためのリビングルーム——その扉は2019年からずっと、火曜日を除く毎晩、開かれています。' },
    { type: 'footer', text: 'Bluebird Jazz Bar · トンロー · 3階 · 水〜月 17:00–24:00（火曜定休）' }
  ],
  ko: [
    { type: 'heading', text: '모든 것은 낡은 턴테이블 한 대에서 시작되었습니다.' },
    { type: 'text', text: '여러 해 전, 미국에서 유학하던 젊은 의사 앤디는 어느 중고품 가게에 들어갔다가 중고 턴테이블 하나를 들고 나왔습니다. 그날이 자신의 인생을 영영 바꾸어 놓으리라는 것을, 그는 아직 알지 못했습니다.' },
    { type: 'text', text: '바늘이 처음 홈에 닿는 순간, 트럼펫과 피아노, 더블베이스의 따뜻한 울림이——디지털 음원은 결코 낼 수 없는 그 온기가——그를 재즈의 세계로 끌어들였습니다. 한 장이 열 장이 되고, 열 장이 컬렉션이 되었으며, 해외에 갈 때마다 그는 작은 재즈 바를 찾아다녔습니다. 낯선 사람들이 서로 미소를 건넬 만큼 가까이 앉을 수 있는 그런 곳을요.' },
    { type: 'heading', text: '그러던 어느 날, 그는 그 느낌을 고향으로 가져왔습니다.' },
    { type: 'text', text: '화려한 바를 만들고 싶었던 것은 아닙니다. 좋은 음악을 듣기 위해 잘 차려입거나 비싼 싱글몰트를 시켜야 할 이유는 없다고 믿었으니까요. 그가 바란 것은 그저 작은 방 하나——지나가던 누구라도 올라와 앉고, 귀 기울이고, 이야기 나누고, 작은 우정을 손에 들고 돌아갈 수 있는 공간이었습니다. 그것이 Bluebird의 시작입니다.' },
    { type: 'heading', text: '3층까지 올라와 보세요. 그러면 알게 될 거예요.' },
    { type: 'text', text: '통러 소이 17 입구를 조금 지나, 바이닐과 색소폰을 든 파랑새 간판을 찾아보세요. 계단을 올라 문을 밀고 들어오면——높은 무대도, 연주자와 청중을 가르는 거리도 없습니다. 그저 제각각인 소파들, 따뜻하고 은은한 조명, 돌아가는 레코드, 그리고 한쪽 구석의 진짜 피아노가 있을 뿐. 어떤 밤에는 손님이 직접 피아노 앞에 앉기도 하고, 악기를 들고 밴드와 함께 잼을 즐기기도 합니다.' },
    { type: 'text', text: '우리는 재즈의 황금기부터 현대의 목소리까지 폭넓게 들려드립니다. 우리에게 디바란 꼭 뉴올리언스 출신일 필요는 없으니까요——때로는 도쿄에서 오기도 하는 법이지요.' },
    { type: 'heading', text: '한 잔 주문해 보세요.' },
    { type: 'text', text: 'Bluebird에 왔다면 역시 \'Bluebird\'를 맛보셔야죠. 선명한 푸른빛의 진 칵테일은 새콤달콤하며, 이 바의 상징이 된 새 모양 잔에 담겨 나옵니다. 아니면 클래식 칵테일 한 잔을 음악과 함께 천천히——그것도 더없이 좋습니다.' },
    { type: 'text', text: '이곳은 단순한 바도, 갤러리도, 레코드 보관소도 아닙니다. 재즈를 사랑하는 사람들을 위한 거실——그 문은 2019년부터 화요일을 제외한 매일 밤, 늘 열려 있습니다.' },
    { type: 'footer', text: 'Bluebird Jazz Bar · 통러 · 3층 · 수–월 17:00–24:00 (화요일 휴무)' }
  ]
};

export default function About() {
  const { language, t } = useLanguage();
  
  // Safe cast language
  const activeLang = (language === 'th' || language === 'en' || language === 'ja' || language === 'ko') 
    ? language 
    : 'en';

  const activeStory = stories[activeLang];

  const artCommunityDesc = {
    th: "ผนังในร้านนำเสนองานศิลปะคัดสรรจากศิลปินท้องถิ่นที่จัดแสดงหมุนเวียน ให้สัมผัสสุนทรียะแห่งภาพและเสียงดนตรีไปพร้อมๆ กัน",
    en: "Our walls feature curated artworks from local artists in rotating exhibitions, blending visual aesthetics with live jazz.",
    ja: "店内の壁には地元のアーティストによるアート作品が展示され、視覚とジャズの調和をお楽しみいただけます。",
    ko: "매장 내 벽면에는 현지 아티스트들의 엄선된 작품이 전시되어 시각과 청각의 조화를 선사합니다."
  }[activeLang];

  const mascotDescExt = {
    th: "จากภาพร่างดินสอสู่น้องนกแจ๊สสีฟ้าครามตัวจริงที่เป็นตัวแทนความสนุกสนาน ความอบอุ่น และความหลงใหลในเสียงดนตรีอะคูสติกอย่างลงตัว",
    en: "From pencil sketch to our final brand character, representing joy, warmth, and the organic textures of raw acoustic live jazz.",
    ja: "鉛筆のスケッチから始まり、アコースティックなライブジャ즈の楽しさ、温もり、และ열정을 표현하는 캐릭터로 완성되었습니다.",
    ko: "연필 스케치에서 시작하여 어쿠스틱 라이브 재즈의 즐거움, 따뜻함, 그리고 열정을 표현하는 캐릭터로 완성되었습니다."
  }[activeLang];

  return (
    <div className="w-full py-20 px-6 md:px-[8%] bg-bg-deep animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase mb-2 block animate-pulse">
            {t('about.subtitle')}
          </span>
          <h1 className="font-display font-black text-5xl sm:text-7xl text-ink uppercase tracking-tight leading-none">
            OUR <span className="text-accent">STORY</span>
          </h1>
          <div className="h-[2px] bg-accent w-24 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* Two Column Narrative (Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-[15px] font-light text-ink-muted leading-relaxed text-justify">
            {activeStory.map((para, idx) => {
              if (para.type === 'heading') {
                return (
                  <h3 key={idx} className="font-display font-bold text-2xl text-ink uppercase tracking-wide mt-6 first:mt-0">
                    {para.text}
                  </h3>
                );
              } else if (para.type === 'footer') {
                return (
                  <p key={idx} className="font-display italic text-accent/80 text-sm mt-8 border-t border-line/10 pt-4 font-light">
                    {para.text}
                  </p>
                );
              } else {
                return (
                  <p key={idx}>
                    {para.text}
                  </p>
                );
              }
            })}
          </div>

          {/* Side Features / Highlights */}
          <div className="lg:col-span-4 flex flex-col gap-10 bg-bg-panel/40 backdrop-blur-sm border border-accent/20 p-8 sm:p-10 rounded-sm relative shadow-xl">
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
            
            <h3 className="font-display font-bold tracking-widest text-ink text-base uppercase border-b border-line/10 pb-4">
              THE EXPERIENCES
            </h3>
            
            <div className="flex flex-col gap-2 relative z-10">
              <h4 className="font-display font-semibold tracking-wide text-accent text-xs uppercase">
                {t('about.feature1.title')}
              </h4>
              <p className="text-[12px] font-light leading-relaxed text-ink-muted/80">
                {t('about.feature1.desc')}
              </p>
            </div>
            
            <div className="flex flex-col gap-2 border-t border-line/10 pt-6 relative z-10">
              <h4 className="font-display font-semibold tracking-wide text-accent text-xs uppercase">
                {t('about.feature2.title')}
              </h4>
              <p className="text-[12px] font-light leading-relaxed text-ink-muted/80">
                {t('about.feature2.desc')}
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-line/10 pt-6 relative z-10">
              <h4 className="font-display font-semibold tracking-wide text-accent text-xs uppercase">
                Art &amp; Community
              </h4>
              <p className="text-[12px] font-light leading-relaxed text-ink-muted/80">
                {artCommunityDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Bluebird Mascot section on About page */}
        <section className="mt-24 border-t border-line/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase block mb-3">
              Mascot Design
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink uppercase tracking-tight leading-none mb-4">
              {t('mascot.title')}
            </h2>
            <div className="h-[2px] bg-accent w-16 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Grey Sketch */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] border border-accent/20 shadow-xl rounded-sm overflow-hidden bg-bg-panel/40">
                <img 
                  src="/character_grey.jpg" 
                  alt="Mascot original grey hand sketch" 
                  className="w-full h-full object-cover filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-bg-deep/80 backdrop-blur-sm px-3 py-1 border border-line/20 rounded-sm text-[10px] text-ink-muted uppercase tracking-widest font-semibold">
                  Original Sketch
                </div>
              </div>
            </div>

            {/* Middle Column: Story */}
            <div className="lg:col-span-4 flex flex-col gap-4 text-sm font-light text-ink-muted leading-relaxed text-center lg:text-justify px-4">
              <p>
                {t('mascot.desc')}
              </p>
              <p>
                {mascotDescExt}
              </p>
            </div>

            {/* Right Column: Colored Version */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] border border-accent/20 shadow-xl rounded-sm overflow-hidden bg-bg-panel/40">
                <img 
                  src="/character_color.jpg" 
                  alt="Mascot final color design" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-bg-deep/80 backdrop-blur-sm px-3 py-1 border border-line/20 rounded-sm text-[10px] text-accent uppercase tracking-widest font-semibold">
                  Final Color
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big landscape image showing aesthetic detail */}
        <div className="mt-24 bg-bg-panel border border-accent/20 rounded-sm aspect-[21/9] relative flex items-center justify-center shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent z-10 pointer-events-none" />
          <img 
            src="/vinyl-real.jpg" 
            alt="เครื่องเล่นแผ่นเสียงไวนิลคลาสสิกกำลังหมุน" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </div>
  );
}
