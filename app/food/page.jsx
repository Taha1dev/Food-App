'use client';
import React, { useState } from 'react';

export default function Food() {
  const [randomFood, setRandomFood] = useState({});

  const foodOptions = [
    { id: 1, name: 'كبة' },
    { id: 2, name: 'شاورما' },
    { id: 3, name: 'فطاير' },
    { id: 4, name: 'فلافل' },
    { id: 5, name: 'بابا غنوج' },
    { id: 6, name: 'مقلوبة' },
    { id: 7, name: 'رز وبزاليا' },
    { id: 8, name: 'منسف' },
    { id: 9, name: 'محاشي' },
    { id: 11, name: '😁 لا تطبخي' },
    { id: 12, name: 'زوايد' },
    { id: 14, name: 'فتة مكدوس' },
    { id: 15, name: 'عجة' },
    { id: 16, name: 'كبسة' },
    { id: 17, name: 'ملوخية' },
    { id: 18, name: '😁 جاهز ' },
    { id: 19, name: 'اي حاجة بالتلاجة' },
    { id: 20, name: 'رز وبامية' },
    { id: 21, name: 'رز وفطر' },
    { id: 23, name: 'كباب' },
    { id: 24, name: 'كفتة' },
    { id: 25, name: 'فتوش' },
    { id: 27, name: 'مسقعة' },
    { id: 28, name: 'كبدة' },
    { id: 32, name: 'سبانخ ' },
    { id: 33, name: 'كبة باللبن' },
    { id: 34, name: 'صينية لحمة' },
    { id: 35, name: 'معكرونة' },
    { id: 41, name: 'رقاق سمبوسة' },
    { id: 45, name: 'مسقعة بالباذنجان' },
    { id: 46, name: 'كوسا محشية' },
    { id: 47, name: 'سمك مشوي' },
    { id: 48, name: 'فتة حمص' },
    { id: 49, name: 'مكتومة' },
    { id: 54, name: 'نقانق ' },
    { id: 58, name: 'مندي' },
    { id: 61, name: 'معكرونة باللحمة' },
    { id: 69, name: 'رز بالدجاج' },
    { id: 72, name: 'صينية باللحمة' },
    { id: 78, name: 'كبسة' },
    { id: 79, name: 'مندي' },
    { id: 80, name: 'فريكة' },
    { id: 81, name: 'شاكرية' },
    { id: 82, name: 'كوسا بلبن' },
    { id: 83, name: 'ششبرك' },
    { id: 84, name: 'ورق عنب' },
    { id: 85, name: 'يالنجي' },
    { id: 86, name: 'صينية بطاطا ببندورة' },
    { id: 87, name: 'صينية بطاطا مع كزيرة' },
    { id: 88, name: 'صينية بطاطا ولحمة وبصل' },
    { id: 89, name: 'رز بفول' },
    { id: 90, name: 'رز ببازيلاء' },
    { id: 91, name: 'منزلة باذنجان' },
    { id: 93, name: 'منزلة الاسود' },
    { id: 94, name: 'مجدرة رز' },
    { id: 95, name: 'مجدرة برغل' },
    { id: 96, name: 'كشري' },
    { id: 97, name: 'برغل ببندورة' },
    { id: 98, name: 'مفركة بطاطا' },
    { id: 99, name: 'مفركة كوسا' },
    { id: 100, name: 'بطاطا مع بيض' },
    { id: 101, name: 'محاشي' },
    { id: 102, name: 'دولمة' },
    { id: 103, name: 'فتة مكدوس' },
    { id: 104, name: 'رز بالفطر مع مايونيز' },
    { id: 105, name: 'رز بالبصل ومايونيز ودجاج مشوي' },
    { id: 106, name: 'رز مع دجاجا هندي' },
    { id: 107, name: 'رز مع دجاج بالكريمة' },
    { id: 108, name: 'مقالي' },
    { id: 109, name: 'متبل باذنجان' },
    { id: 110, name: 'مسبحة' },
    { id: 111, name: 'رز وفاصوليا عيشة خانوم' },
    { id: 112, name: 'رز وفاصوليا خضرا' },
    { id: 113, name: 'رز وبامية' },
    { id: 114, name: 'فاصوليا بزين' },
    { id: 115, name: 'لوبية' },
    { id: 116, name: 'بوراني' },
    { id: 117, name: 'بامية بزيت' },
    { id: 118, name: 'رز وسبانخ' },
    { id: 119, name: 'رز ودجاج روستو' },
    { id: 120, name: 'رز وحمص ودجاج' },
    { id: 121, name: 'رز وملوخية' },
    { id: 122, name: 'ملوخية شامية' },
    { id: 123, name: 'بصارة' },
    { id: 124, name: 'زهرة بطحينة' },
    { id: 125, name: 'برك' },
    { id: 126, name: 'تسئية' },
    { id: 127, name: 'فول بزيت' },
    { id: 128, name: 'فول مدمس' },
    { id: 129, name: 'مفركة فول بلحمة' },
    { id: 130, name: 'لزانيا' },
    { id: 131, name: 'صفيحة' },
    { id: 132, name: 'لحمة على عجين' },
    { id: 133, name: 'مسخن' },
    { id: 134, name: 'قلاية بندورة' },
    { id: 135, name: 'بطاطا محشية مع رز' },
    { id: 136, name: 'مقلوبة' },
    { id: 137, name: 'ملفوف' },
    { id: 138, name: 'كبة مقلية' },
    { id: 139, name: 'كبة مشوية' },
    { id: 140, name: 'كبة لبنية' },
    { id: 141, name: 'كبة بالصينية' },
    { id: 142, name: 'دجاج مكسيكي' },
    { id: 143, name: 'رز وكواج' },
    { id: 144, name: 'كباب هندي' },
    { id: 145, name: 'فتة دجاج' },
    { id: 146, name: 'حراق اصبعو' },
    { id: 147, name: 'كريسبي' },
    { id: 148, name: 'برغر' },
    { id: 149, name: 'شاورما' },
    { id: 150, name: 'كفتة لحمة مع بندورة' },
    { id: 151, name: 'كفتة لحمة مع طحينة وبطاطا' },
    { id: 152, name: 'كفتة دجاج' },
    { id: 153, name: 'ساندويش سجق' },
    { id: 154, name: 'سمك' },
    { id: 155, name: 'صينية كلاج' },
    { id: 156, name: 'بيتزا' },
    { id: 157, name: 'فطاير سبانخ' },
    { id: 158, name: 'فطاير بلحمة' },
    { id: 159, name: 'فطاير كشكة' },
    { id: 160, name: 'فطاير جبنة' },
    { id: 161, name: 'فطاير زعتر مناقش' },
    { id: 162, name: 'معكرونة بالشاميل' },
    { id: 163, name: 'معكرونة بلبن وثوم' },
    { id: 164, name: 'معكرونة ببندورة' },
    { id: 165, name: 'معكرونة بجبنة' },
    { id: 166, name: ' سكالوب' },
    { id: 167, name: ' رز بشعيرية' },
    { id: 168, name: ' أوزي' },
  ];

  const handleClick = () => {
    const randomBytes = new Uint8Array(1);
    crypto.getRandomValues(randomBytes);
    const randomIndex = randomBytes[0] % foodOptions.length;
    setRandomFood(foodOptions[randomIndex]);
  };

  return (
    <button
      className="p-16 my-16 bg-blue-100 text-blue-700 rounded-full text-3xl  font-bold outline-none focus:outline-none"
      onClick={handleClick}
    >
      <p>{randomFood.name ? randomFood.name : 'كبسي عليي'}</p>
    </button>
  );
}
