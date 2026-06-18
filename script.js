const members = [
  {
    id: 1,
    name: 'مازنجار',
    image: './images/member-2.jpg',
    intro: 'اقرع صعيدي في حسابات و معلومات عاطل عالة على اهله بيحب الرحماني',
  },
  {
    id: 2,
    name: 'سيادة اللوز',
    image: './images/member-1.jpg',
    intro: 'اقرع اسكندراني في حسابات و معلومات بيركب مشاريع و بياكل فلافل',
  },
  {
    id: 3,
    name: 'عمر ابن عم سيادة اللوز',
    image: './images/member-3.jpg',
    intro: 'ابن عم الواد الاقرع الاسكندراني اللي في حسابات و معلومات و بيركب مشاريع و بياكل فلافل',
  },
  {
    id: 4,
    name: 'عمرو زنقها نو طرش',
    image: './images/member-4.jpg',
    intro: 'مصنع الفياجرا في مصر',
  },
  {
    id: 5,
    name: 'ابن الواسطة',
    image: './images/member-5.jpg',
    intro: 'اقرع ابن عاطف سليم اللي سفرنا الغردقة و الأقصر و أسوان و بس (عاوزين نسافر يا عمو عاطف أرجوك)',
  },
  {
    id: 6,
    name: 'جوزيف تعس',
    image: './images/member-7.png',
    intro: 'منتحر من غير لحية عنده قط ؤجويس و واخد ثانوية عامة على راوندين',
  },
  {
    id: 7,
    name: 'يوسف محمد احمد ابراهيم الشريف',
    image: './images/member-6.png',
    intro: 'اوتيزم و اكتئاب رباعي القطب و احسن جيمر رأته عين جوزيف تعس',
  },
  {
    id: 8,
    name: 'دكتور زياد',
    image: './images/member-8.jpeg',
    intro: 'فحل طب عين شمس تاني اكبر محب لرحماني بعد مازنجار و اكبر داعم لعدم المقاطعة',
  },
  {
    id: 9,
    name: 'عمر المبرمج',
    image: './images/member-9.png',
    intro: 'جمال عبدالناصر',
  },
];

function renderMembers() {
  const grid = document.getElementById('members-grid');
  if (!grid) return;

  grid.innerHTML = members.map((member, index) => {
    const tag = String(index + 1).padStart(2, '0');
    return `
      <article class="member-card" style="animation-delay: ${0.02 + index * 0.06}s">
        <div class="member-photo-frame">
          <img
            class="member-photo"
            src="${member.image}"
            alt="${member.name}"
            loading="lazy"
          />
        </div>
        <p class="member-eyebrow">PACK MEMBER · ${tag}</p>
        <h3 class="member-name">${member.name}</h3>
        <p class="member-intro">${member.intro}</p>
      </article>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderMembers);
