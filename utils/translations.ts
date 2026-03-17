
export type Language = 'ru' | 'tr' | 'en';

export const translations = {
  common: {
    phone_display: "+90 533 671 40 55",
    phone_link: "905336714055",
    email: "info@mylovelybaby.com.tr",
    email_copied: "Email address copied to clipboard"
  },
  ru: {
    email_copied: "Email скопирован в буфер обмена",
    whatsapp: "Написать в WhatsApp",
    nav: {
      home: "Главная",
      features: "Преимущества",
      products: "Продукция",
      documents: "Сертификаты",
      blog: "Блог",
      contact: "Контакты",
      assistant: "AI Помощник",
    },
    hero: {
      badge: "Бренд гигиенической продукции",
      title: "Надежный партнер",
      subtitle: "для вашего бизнеса",
      description: "Оптовые поставки подгузников и гигиенических товаров My Lovely Baby. Высокая маржинальность и стабильное качество.",
      cta_catalog: "Смотреть продукцию",
      cta_contact: "Стать дилером",
      tag_hypo: "Сертификаты ISO",
      tag_eco: "Экспорт в 10+ стран",
      float_badge_title: "Лидер рынка",
      float_badge_desc: "Оптовые поставки"
    },
    features: {
      title: "Технологии качества",
      subtitle: "Мы предлагаем продукт, за которым возвращаются покупатели.",
      list: {
        absorb: { title: "Super Absorbent Polymer", desc: "Используем японский SAP для мгновенного впитывания." },
        breath: { title: "Дышащий Backsheet", desc: "Микропористая структура предотвращает парниковый эффект." },
        hypo: { title: "Гипоаллергенно", desc: "Клинически протестировано. Без отдушек и парабенов." },
        soft: { title: "Non-Woven Soft Touch", desc: "Нежнейший нетканый материал для комфорта кожи." },
        elastic: { title: "360° Fit System", desc: "Эластичные боковины и поясок для идеальной посадки." },
        indicator: { title: "Wetness Indicator", desc: "Клеевой индикатор влаги меняет цвет при намокании." }
      }
    },
    products: {
      title: "Наши категории",
      desc: "Выберите интересующую вас категорию продукции для просмотра подробного каталога.",
      pack_suffix: "Пакет",
      categories: {
        baby: {
          title: "Детские подгузники",
          desc: "Премиальный комфорт для малышей. От новорожденных до активных непосед.",
          btn: "Каталог подгузников"
        },
        babyTwin: {
          title: "Детские подгузники — Двойная упаковка",
          desc: "Экономичная двойная упаковка с гибкими ушками и передней лентой. Практичная фасовка для семей.",
          btn: "Каталог двойных упаковок"
        },
        adult: {
          title: "Подгузники для взрослых",
          desc: "Надежная защита и комфорт для пациентов. Высокая впитываемость.",
          btn: "Каталог для взрослых"
        },
        adultPants: {
          title: "Трусы-подгузники для взрослых",
          desc: "Подгузники в форме трусов с технологией 360° пояса. Максимальный комфорт и незаметность.",
          btn: "Каталог трусов-подгузников"
        },
        wipes: {
          title: "Влажные салфетки",
          desc: "Нежный уход за чувствительной кожей. Гипоаллергенные составы.",
          btn: "Каталог салфеток"
        }
      },
      table: { size: "Размер", weight: "Вес/Объем", waist: "Обхват талии", count: "В пачке", bale: "В упаковке", type: "Тип", box: "Пачек в коробке" },
      view_details: "Подробнее",
      wholesale_info: "Минимальный заказ: 1 паллета. Доставка по всей России и СНГ.",
      cta: "Запросить прайс-лист",
      items: {
        NB: {
          title: "1 - Newborn",
          name: "Newborn",
          tagline: "Нежная защита с первых дней жизни",
          description: "Специально разработан для чувствительной кожи новорожденных. Имеет специальный вырез для пуповины.",
          benefit: "Вырез для пупка",
          feature1: "Мягкий слой Soft-Touch",
          feature2: "Вырез для пуповины",
          weight_val: "2-5 кг",
          count_val: "84 шт"
        },
        S: {
          title: "2 - Mini",
          name: "Mini",
          tagline: "Спокойный сон всю ночь",
          description: "Увеличенный впитывающий слой для малышей. Гарантирует сухость до 12 часов.",
          benefit: "До 12 часов сухости",
          feature1: "Мгновенное впитывание",
          feature2: "Индикатор влаги",
          weight_val: "3-6 кг",
          count_val: "76 шт"
        },
        M: {
          title: "3 - Midi",
          name: "Midi",
          tagline: "Свобода для первых открытий",
          description: "Для активных малышей. Эластичные боковины не сковывают движения.",
          benefit: "Эластичные боковины",
          feature1: "Тянущийся поясок",
          feature2: "Защита от протеканий",
          weight_val: "5-9 кг",
          count_val: "68 шт"
        },
        L: {
          title: "4 - Maxi",
          name: "Maxi",
          tagline: "Комфорт для первых шагов",
          description: "Анатомическая форма идеально сидит на ребенке. Усиленные барьеры.",
          benefit: "Анатомическая форма",
          feature1: "3D барьеры",
          feature2: "Дышащий слой",
          weight_val: "8-18 кг",
          count_val: "60 шт"
        },
        XL: {
          title: "5 - Junior",
          name: "Junior",
          tagline: "Для самых активных непосед",
          description: "Максимальная защита для подросших детей. Прочные липучки.",
          benefit: "Усиленная защита",
          feature1: "Прочные липучки",
          feature2: "Максимальная впитываемость",
          weight_val: "11-25 кг",
          count_val: "52 шт"
        },
        XXL: {
          title: "6 - X-Large",
          name: "X-Large",
          tagline: "Экстра защита",
          description: "Для крупных малышей, обеспечивая надежную защиту и комфорт при движении.",
          benefit: "Экстра размер",
          feature1: "Усиленные боковины",
          feature2: "Дышащий слой",
          weight_val: "15+ кг",
          count_val: "44 шт"
        }
      },
      twin_items: {
        title: "Детские подгузники — Двойная упаковка",
        subtitle: "Экономичная упаковка для семей",
        desc: "Ультрагибкие ушки и передняя лента. Дерматологически протестировано.",
        "twin-NB": {
          title: "1 - Newborn",
          name: "Newborn",
          tagline: "Бережная забота с первого дня",
          description: "Двойная упаковка для новорожденных. Гибкие ушки не давят на нежную кожу. Специальный вырез для пуповины.",
          benefit: "Гибкие ушки",
          feature1: "Передняя лента",
          feature2: "Вырез для пупка",
          weight_val: "2-5 кг",
          count_val: "48 шт"
        },
        "twin-S": {
          title: "2 - Mini",
          name: "Mini",
          tagline: "Комфорт на каждый день",
          description: "Ультрагибкие ушки обеспечивают идеальную посадку. Индикатор влаги подскажет, когда пора менять подгузник.",
          benefit: "Индикатор влаги",
          feature1: "Дышащая поверхность",
          feature2: "Мгновенное впитывание",
          weight_val: "3-6 кг",
          count_val: "44 шт"
        },
        "twin-M": {
          title: "3 - Midi",
          name: "Midi",
          tagline: "Для маленьких исследователей",
          description: "Гибкие ушки и передняя лента фиксируют подгузник даже при активных движениях. Экономичная двойная упаковка.",
          benefit: "Эластичные ушки",
          feature1: "Надежная фиксация",
          feature2: "Барьеры от протеканий",
          weight_val: "5-9 кг",
          count_val: "40 шт"
        },
        "twin-L": {
          title: "4 - Maxi",
          name: "Maxi",
          tagline: "Уверенность при каждом шаге",
          description: "Идеален для малышей, начинающих ходить. Анатомическая форма и гибкие ушки обеспечивают свободу движений.",
          benefit: "Анатомическая форма",
          feature1: "3D барьеры",
          feature2: "Гибкие ушки",
          weight_val: "8-18 кг",
          count_val: "36 шт"
        },
        "twin-XL": {
          title: "5 - Junior",
          name: "Junior",
          tagline: "Для неугомонных непосед",
          description: "Усиленная конструкция для активных детей. Передняя лента и гибкие ушки гарантируют надежную посадку.",
          benefit: "Усиленная фиксация",
          feature1: "Экстра впитывание",
          feature2: "Комфортная посадка",
          weight_val: "11-25 кг",
          count_val: "32 шт"
        },
        "twin-XXL": {
          title: "6 - X-Large",
          name: "X-Large",
          tagline: "Максимальная защита",
          description: "Для крупных детей. Гибкие ушки и передняя лента обеспечивают плотное прилегание без дискомфорта.",
          benefit: "Экстра размер",
          feature1: "Усиленные боковины",
          feature2: "Дышащий слой",
          weight_val: "15+ кг",
          count_val: "28 шт"
        }
      },
      adult_items: {
        title: "Подгузники для взрослых",
        subtitle: "Комфорт и безопасность для пациентов",
        desc: "Высокая впитываемость и контроль запаха.",
        features: {
          odor: "Контроль запаха",
          absorb: "Высокая впитываемость",
          indicator: "Индикатор влаги"
        }
      },
      adult_specific: {
        "adult-s": {
          title: "Small (S)",
          tagline: "Компактная защита",
          description: "Подгузники для пациентов с небольшим обхватом талии. Гибкие ушки и передняя лента обеспечивают надежную фиксацию.",
          benefit: "Эластичные ушки",
          feature1: "Дышащий материал",
          feature2: "Индикатор влаги"
        },
        "adult-m": {
          title: "Medium (M)",
          tagline: "Комфорт и защита",
          description: "Подгузники для взрослых среднего размера. Обеспечивают надежную защиту при недержании средней и тяжелой степени. Анатомическая форма.",
          benefit: "Контроль запаха",
          feature1: "Дышащий материал",
          feature2: "Индикатор влаги"
        },
        "adult-l": {
          title: "Large (L)",
          tagline: "Максимальная уверенность",
          description: "Большой размер для пациентов с обхватом талии 100-150 см. Дышащий материал предотвращает раздражение кожи при длительном использовании.",
          benefit: "Высокая впитываемость",
          feature1: "Эластичный пояс",
          feature2: "Барьеры от протекания"
        },
        "adult-xl": {
          title: "Extra Large (XL)",
          tagline: "Усиленная впитываемость",
          description: "Для пациентов с особыми потребностями. Эластичный пояс и многоразовые застежки обеспечивают идеальную посадку.",
          benefit: "Многоразовые липучки",
          feature1: "Анатомическая форма",
          feature2: "Двойной впитывающий слой"
        }
      },
      pants_items: {
        title: "Трусы-подгузники для взрослых",
        subtitle: "Технология 360° пояса",
        desc: "Надеваются как обычное бельё. Ультрамягкие, дышащие, с индикатором влаги.",
        features: {
          waist360: "360° пояс",
          absorb: "Усиленная впитываемость",
          textile: "Текстильная поверхность"
        }
      },
      pants_specific: {
        "pants-s": {
          title: "Small (S)",
          tagline: "Незаметная защита",
          description: "Трусы-подгузники для пациентов с небольшим обхватом талии. 360° пояс для надежной фиксации. Текстильная поверхность не шуршит.",
          benefit: "360° пояс",
          feature1: "Тканевая поверхность",
          feature2: "Индикатор влаги"
        },
        "pants-m": {
          title: "Medium (M)",
          tagline: "Свобода движений",
          description: "Надеваются как обычное бельё. Мягкий 360° пояс не сковывает движения. Дерматологически протестировано.",
          benefit: "Усиленная впитываемость",
          feature1: "Дышащий материал",
          feature2: "Контроль запаха"
        },
        "pants-l": {
          title: "Large (L)",
          tagline: "Максимальный комфорт",
          description: "Большой размер для обхвата талии 100-150 см. Технология 360° пояса обеспечивает идеальную посадку в течение всего дня.",
          benefit: "Дневное и ночное использование",
          feature1: "Текстильная поверхность",
          feature2: "Барьеры от протеканий"
        }
      },
      wipes_items: {
        title: "Влажные салфетки",
        subtitle: "Чистота и уход",
        desc: "Без спирта и парабенов. Идеальны для ежедневного использования.",
        types: {
          "wipes-72": "72 салфетки",
          "wipes-102": "102 салфетки",
          "wipes-120": "120 салфеток"
        }
      },
      wipes_specific: {
        "wipes-72": {
          title: "Ultra Sensitive 72",
          tagline: "Компактная упаковка",
          description: "72 гипоаллергенных салфетки для чувствительной кожи. Удобный формат для сумки и путешествий. Без спирта.",
          benefit: "Гипоаллергенно",
          feature1: "Алоэ Вера",
          feature2: "pH сбалансировано"
        },
        "wipes-102": {
          title: "Ultra Sensitive 102",
          tagline: "Оптимальный выбор",
          description: "102 салфетки в удобной упаковке с пластиковой крышкой. Бережное очищение чувствительной кожи.",
          benefit: "Без спирта",
          feature1: "Мягкая текстура",
          feature2: "С первых дней жизни"
        },
        "wipes-120": {
          title: "Ultra Sensitive 120",
          tagline: "Максимальная упаковка",
          description: "120 салфеток — самая выгодная упаковка. Идеально для дома. Без отдушек, парабенов и красителей.",
          benefit: "120 салфеток",
          feature1: "Без отдушек",
          feature2: "Экономичный формат"
        }
      }
    },
    product_detail: {
      specs_title: "Характеристики",
      description_title: "Описание продукта",
      packaging_title: "Логистическая информация",
      request_quote: "Узнать цену для дилера",
      back: "Назад в категорию",
      features_heading: "Особенности"
    },
    documents: {
      title: "Наши сертификаты",
      subtitle: "Мы придерживаемся строгих международных стандартов качества и безопасности.",
      items: {
        iso9001: { title: "ISO 9001:2015", desc: "Система менеджмента качества" },
        iso10002: { title: "ISO 10002:2018", desc: "Удовлетворенность потребителей" },
        iso14001: { title: "ISO 14001:2015", desc: "Система экологического менеджмента" },
        iso22716: { title: "ISO 22716:2007", desc: "GMP - Надлежащая производственная практика (Косметика)" },
        ohsas: { title: "OHSAS 18001:2007", desc: "Менеджмент охраны здоровья и безопасности труда" },
        sgr: { title: "СГР (SGR)", desc: "Свидетельство о государственной регистрации (ЕАС)" }
      }
    },
    blog: {
      title: "Блог и Новости",
      subtitle: "Полезные статьи для родителей и новости компании",
      read_more: "Читать далее",
      back: "Все статьи"
    },
    contact: {
      title: "Контакты",
      subtitle: "Оставьте заявку, и наш менеджер свяжется с вами для обсуждения условий дилерства.",
      headquarters_label: "Центральный офис",
      headquarters_address: "Организованная промышленная зона,\nСтамбул, Турция",
      form: {
        title: "Форма оптового запроса",
        name: "Имя / Название компании",
        email: "Email",
        phone: "Телефон",
        message: "Сообщение",
        submit: "Стать дилером",
        success: "Спасибо! Мы свяжемся с вами в ближайшее время.",
        placeholders: {
          name: "Ваше имя или компания",
          email: "name@company.com",
          phone: "+7...",
          message: "Укажите планируемые объемы и город..."
        }
      },
      faq: {
        title: "Часто задаваемые вопросы",
        q1: "Как стать дилером?",
        a1: "Пожалуйста, заполните форму выше, указав данные вашей компании. Наш отдел продаж рассмотрит вашу заявку и свяжется с вами в течение 24 часов.",
        q2: "Каков минимальный объем заказа (MOQ)?",
        a2: "Для экспортных заказов минимальный объем обычно составляет 1 паллету или 20-футовый контейнер в зависимости от региона.",
        q3: "Вы осуществляете международную доставку?",
        a3: "Да, мы экспортируем продукцию в более чем 10 стран. Мы можем организовать логистику до вашего порта назначения.",
        q4: "Можно ли запросить образцы продукции?",
        a4: "Да, мы предоставляем образцы для оценки качества. Стоимость доставки образцов может оплачиваться отдельно."
      }
    },
    footer: {
      desc: "Оптовая продажа детских подгузников, товаров для взрослых и влажных салфеток.",
      nav: "Меню",
      contacts: "Контакты",
      headquarters: "Центральный офис: Стамбул, Турция",
      rights: "Все права защищены."
    }
  },
  tr: {
    email_copied: "E-posta panoya kopyalandı",
    whatsapp: "WhatsApp'tan Yazın",
    nav: {
      home: "Ana Sayfa",
      features: "Özellikler",
      products: "Ürünlerimiz",
      documents: "Belgelerimiz",
      blog: "Blog",
      contact: "İletişim",
      assistant: "AI Asistan",
    },
    hero: {
      badge: "Hijyen Ürünleri Markası",
      title: "İşiniz için",
      subtitle: "Güvenilir Ortak",
      description: "My Lovely Baby bebek bezleri, hasta bezleri ve ıslak mendil toptan satışı. Yüksek kâr marjı ve istikrarlı kalite.",
      cta_catalog: "Ürünleri İncele",
      cta_contact: "Bayimiz Olun",
      tag_hypo: "ISO Sertifikalı",
      tag_eco: "10+ Ülkeye İhracat",
      float_badge_title: "Pazar Lideri",
      float_badge_desc: "Toptan Tedarik"
    },
    features: {
      title: "Üretim Teknolojisi",
      subtitle: "Müşterilerin tekrar tercih ettiği kaliteli ürünler sunuyoruz.",
      list: {
        absorb: { title: "Süper Emici Polimer", desc: "Maksimum emicilik için Japon SAP teknolojisi kullanıyoruz." },
        breath: { title: "Nefes Alan Dış Yüzey", desc: "Mikro gözenekli yapı cildin nefes almasını sağlar." },
        hypo: { title: "Hiporaalerjenik", desc: "Klinik olarak test edilmiştir. Parfüm ve paraben içermez." },
        soft: { title: "Non-Woven Yumuşak Dokunuş", desc: "Hassas ciltler için en yumuşak dokusuz yüzey." },
        elastic: { title: "360° Uyum Sistemi", desc: "Mükemmel uyum için esnek yan bantlar ve bel sistemi." },
        indicator: { title: "Islaklık Göstergesi", desc: "Bez ıslandığında renk değiştiren akıllı gösterge." }
      }
    },
    products: {
      title: "Ürün Kategorileri",
      desc: "Detaylı kataloğu incelemek için ilgilendiğiniz ürün grubunu seçin.",
      pack_suffix: "Paket",
      categories: {
        baby: {
          title: "Bebek Bezleri",
          desc: "Bebekler için premium konfor. Yenidoğandan aktif çocuklara kadar.",
          btn: "Bebek Bezi Kataloğu"
        },
        babyTwin: {
          title: "Bebek Bezleri — İkiz Paket",
          desc: "Esnek kulaklı ve ön bantlı ekonomik ikiz paket. Aileler için pratik ambalaj.",
          btn: "İkiz Paket Kataloğu"
        },
        adult: {
          title: "Yetişkin Hasta Bezleri",
          desc: "Yetişkinler için güvenilir koruma ve konfor. Yüksek emicilik.",
          btn: "Hasta Bezi Kataloğu"
        },
        adultPants: {
          title: "Yetişkin Külot Bez",
          desc: "360° bel teknolojisi ile iç çamaşırı gibi giyilen hasta bezi. Maksimum konfor ve gizlilik.",
          btn: "Külot Bez Kataloğu"
        },
        wipes: {
          title: "Islak Mendiller",
          desc: "Hassas ciltler için nazik bakım. Alkolsüz ve hipoalerjenik.",
          btn: "Islak Mendil Kataloğu"
        }
      },
      table: { size: "Beden", weight: "Kilo/Ölçü", waist: "Bel Ölçüsü", count: "Paket İçi", bale: "Çuval İçi", type: "Çeşit", box: "Kutu İçi Paket" },
      view_details: "İncele",
      wholesale_info: "Minimum sipariş: 1 palet. Türkiye ve BDT ülkelerine teslimat.",
      cta: "Fiyat Listesi İste",
      items: {
        NB: {
          title: "1 - Newborn (Yenidoğan)",
          name: "Newborn",
          tagline: "İlk günden itibaren hassas koruma",
          description: "Yenidoğan bebeklerin hassas cildi için özel olarak geliştirilmiştir. Göbek bağı oyuntusu mevcuttur.",
          benefit: "Göbek Bağı Oyuntusu",
          feature1: "Pamuksu Dokunuş",
          feature2: "Göbek Bağı Koruması",
          weight_val: "2-5 kg",
          count_val: "84 Adet"
        },
        S: {
          title: "2 - Mini",
          name: "Mini",
          tagline: "Deliksiz bir uyku için",
          description: "Beslenme düzeni oturan bebekler için artırılmış emici tabaka. 12 saate kadar kuruluk.",
          benefit: "12 Saate Kadar Kuruluk",
          feature1: "Hızlı Emicilik",
          feature2: "Sızdırmaz Bariyerler",
          weight_val: "3-6 kg",
          count_val: "76 Adet"
        },
        M: {
          title: "3 - Midi",
          name: "Midi",
          tagline: "Keşfetme özgürlüğü",
          description: "Hareketli bebekler için. Esnek yan bantlar hareket özgürlüğü sağlar.",
          benefit: "Esnek Yan Bantlar",
          feature1: "Anatomical Uyum",
          feature2: "Esnek Bel Bandı",
          weight_val: "5-9 kg",
          count_val: "68 Adet"
        },
        L: {
          title: "4 - Maxi",
          name: "Maxi",
          tagline: "İlk adımlar için konfor",
          description: "Anatomik yapı sürtünmeyi önler.",
          benefit: "Anatomik Yapı",
          feature1: "3D Sızdırmazlık",
          feature2: "Nefes Alan Yüzey",
          weight_val: "8-18 kg",
          count_val: "60 Adet"
        },
        XL: {
          title: "5 - Junior",
          name: "Junior",
          tagline: "Aktif çocuklar için",
          description: "Oyun çağındaki çocuklar için ultra dayanıklı. Kolay takılıp çıkarılan cırt bantlar.",
          benefit: "Güçlendirilmiş Koruma",
          feature1: "Ekstra Emici Bölge",
          feature2: "Rahat Hareket",
          weight_val: "11-25 kg",
          count_val: "52 Adet"
        },
        XXL: {
          title: "6 - X-Large",
          name: "X-Large",
          tagline: "Ekstra Güvenlik",
          description: "İri bebekler ve yürümeye başlayan çocuklar için ekstra geniş ve emici yapı.",
          benefit: "Ekstra Geniş",
          feature1: "Güçlü Yan Bantlar",
          feature2: "Sızdırmazlık Garantisi",
          weight_val: "15+ kg",
          count_val: "44 Adet"
        }
      },
      twin_items: {
        title: "Bebek Bezleri — İkiz Paket",
        subtitle: "Aileler için ekonomik ambalaj",
        desc: "Ultra esnek kulaklı, ön bantlı. Dermatolojik olarak test edilmiştir.",
        "twin-NB": {
          title: "1 - Newborn (Yenidoğan)",
          name: "Newborn",
          tagline: "İlk günden itibaren şefkatli koruma",
          description: "Yenidoğanlar için ikiz paket. Esnek kulaklar hassas cilde baskı yapmaz. Göbek bağı oyuntusu mevcuttur.",
          benefit: "Esnek Kulaklar",
          feature1: "Ön Bant Sistemi",
          feature2: "Göbek Bağı Koruması",
          weight_val: "2-5 kg",
          count_val: "48 Adet"
        },
        "twin-S": {
          title: "2 - Mini",
          name: "Mini",
          tagline: "Her güne konfor",
          description: "Ultra esnek kulaklar mükemmel oturma sağlar. Islaklık göstergesi bezin ne zaman değiştirilmesi gerektiğini belirtir.",
          benefit: "Islaklık Göstergesi",
          feature1: "Nefes Alan Yüzey",
          feature2: "Hızlı Emicilik",
          weight_val: "3-6 kg",
          count_val: "44 Adet"
        },
        "twin-M": {
          title: "3 - Midi",
          name: "Midi",
          tagline: "Küçük kaşifler için",
          description: "Esnek kulaklar ve ön bant aktif hareketlerde bile bezi sabit tutar. Ekonomik ikiz paket.",
          benefit: "Esnek Kulaklar",
          feature1: "Güvenli Sabitleme",
          feature2: "Sızdırmaz Bariyerler",
          weight_val: "5-9 kg",
          count_val: "40 Adet"
        },
        "twin-L": {
          title: "4 - Maxi",
          name: "Maxi",
          tagline: "Her adımda güven",
          description: "Yürümeye başlayan bebekler için ideal. Anatomik yapı ve esnek kulaklar hareket özgürlüğü sağlar.",
          benefit: "Anatomik Yapı",
          feature1: "3D Sızdırmazlık",
          feature2: "Esnek Kulaklar",
          weight_val: "8-18 kg",
          count_val: "36 Adet"
        },
        "twin-XL": {
          title: "5 - Junior",
          name: "Junior",
          tagline: "Yerinde duramayan çocuklar için",
          description: "Aktif çocuklar için güçlendirilmiş yapı. Ön bant ve esnek kulaklar güvenli oturma sağlar.",
          benefit: "Güçlü Sabitleme",
          feature1: "Ekstra Emicilik",
          feature2: "Konforlu Oturma",
          weight_val: "11-25 kg",
          count_val: "32 Adet"
        },
        "twin-XXL": {
          title: "6 - X-Large",
          name: "X-Large",
          tagline: "Maksimum koruma",
          description: "İri çocuklar için. Esnek kulaklar ve ön bant rahatsızlık vermeden tam oturma sağlar.",
          benefit: "Ekstra Geniş",
          feature1: "Güçlü Yan Bantlar",
          feature2: "Nefes Alan Yüzey",
          weight_val: "15+ kg",
          count_val: "28 Adet"
        }
      },
      adult_items: {
        title: "Yetişkin Hasta Bezleri",
        subtitle: "Yetişkinler için Konfor ve Güvenlik",
        desc: "Yüksek emicilik kapasitesi ve koku kontrol sistemi.",
        features: {
          odor: "Koku Kontrolü",
          absorb: "Yüksek Emicilik",
          indicator: "Islaklık Göstergesi"
        }
      },
      adult_specific: {
        "adult-s": {
          title: "Small (S)",
          tagline: "Kompakt koruma",
          description: "Dar bel ölçüsüne sahip hastalar için. Esnek kulaklar ve ön bant güvenli sabitleme sağlar.",
          benefit: "Esnek Kulaklar",
          feature1: "Nefes Alan Yüzey",
          feature2: "Islaklık Göstergesi"
        },
        "adult-m": {
          title: "Medium (M)",
          tagline: "Gün boyu konfor",
          description: "Orta beden hasta bezi. Sızdırmaz bariyerler ve yüksek emiş gücü. Anatomik yapı vücudu sarar.",
          benefit: "Koku Kontrolü",
          feature1: "Nefes Alan Yüzey",
          feature2: "Islaklık Göstergesi"
        },
        "adult-l": {
          title: "Large (L)",
          tagline: "Tam koruma",
          description: "100-150 cm bel ölçüsü için. Nefes alan tekstil yüzey tahrişi önler.",
          benefit: "Yüksek Emicilik",
          feature1: "Esnek Bel Bandı",
          feature2: "Sızdırmaz Bariyerler"
        },
        "adult-xl": {
          title: "Extra Large (XL)",
          tagline: "Ekstra güvenlik",
          description: "Geniş bel bantları ve vücuda tam uyum sağlayan anatomik yapı. Yoğun kullanıma uygundur.",
          benefit: "Çoklu Bant Sistemi",
          feature1: "Anatomik Yapı",
          feature2: "Çift Emici Tabaka"
        }
      },
      pants_items: {
        title: "Yetişkin Külot Bez",
        subtitle: "360° Bel Teknolojisi",
        desc: "İç çamaşırı gibi giyilir. Ultra yumuşak, nefes alan yapı ve ıslaklık göstergesi.",
        features: {
          waist360: "360° Bel Bandı",
          absorb: "Güçlü Emicilik",
          textile: "Tekstil Dış Yüzey"
        }
      },
      pants_specific: {
        "pants-s": {
          title: "Small (S)",
          tagline: "Fark edilmez koruma",
          description: "Dar bel ölçüsüne sahip hastalar için külot tip bez. 360° bel bandı güvenli oturma sağlar. Tekstil dış yüzey ses çıkarmaz.",
          benefit: "360° Bel Bandı",
          feature1: "Tekstil Yüzey",
          feature2: "Islaklık Göstergesi"
        },
        "pants-m": {
          title: "Medium (M)",
          tagline: "Hareket özgürlüğü",
          description: "İç çamaşırı gibi giyilir. Yumuşak 360° bel bandı hareketi kısıtlamaz. Dermatolojik olarak test edilmiştir.",
          benefit: "Güçlü Emicilik",
          feature1: "Nefes Alan Yapı",
          feature2: "Koku Kontrolü"
        },
        "pants-l": {
          title: "Large (L)",
          tagline: "Maksimum konfor",
          description: "100-150 cm bel ölçüsü için. 360° bel teknolojisi gün boyu mükemmel oturma sağlar.",
          benefit: "Gece & Gündüz Kullanım",
          feature1: "Tekstil Dış Yüzey",
          feature2: "Sızdırmaz Bariyerler"
        }
      },
      wipes_items: {
        title: "Islak Mendiller",
        subtitle: "Temizlik ve Bakım",
        desc: "Alkol ve paraben içermez. Günlük kullanım için ideal.",
        types: {
          "wipes-72": "72 Yaprak",
          "wipes-102": "102 Yaprak",
          "wipes-120": "120 Yaprak"
        }
      },
      wipes_specific: {
        "wipes-72": {
          title: "Ultra Sensitive 72",
          tagline: "Kompakt Ambalaj",
          description: "72 hipoalerjenik ıslak mendil. Çanta ve seyahat için ideal boyut. Alkolsüz formül.",
          benefit: "Hipoalerjenik",
          feature1: "Aloe Vera",
          feature2: "pH Dengeli"
        },
        "wipes-102": {
          title: "Ultra Sensitive 102",
          tagline: "En Çok Tercih Edilen",
          description: "102 yapraklık plastik kapaklı ambalaj. Hassas ciltleri nazikçe temizler ve nemlendirir.",
          benefit: "Alkolsüz",
          feature1: "Yumuşak Doku",
          feature2: "İlk Günden İtibaren"
        },
        "wipes-120": {
          title: "Ultra Sensitive 120",
          tagline: "Ekonomik Boy",
          description: "120 yaprak — en avantajlı ambalaj. Ev kullanımı için ideal. Parfüm, paraben ve boya içermez.",
          benefit: "120 Yaprak",
          feature1: "Parfümsüz",
          feature2: "Ekonomik"
        }
      }
    },
    product_detail: {
      specs_title: "Özellikler",
      description_title: "Ürün Açıklaması",
      packaging_title: "Lojistik Bilgileri",
      request_quote: "Bayilik Fiyatı Al",
      back: "Kategoriye Dön",
      features_heading: "Bu Modele Özel"
    },
    documents: {
      title: "Belgelerimiz",
      subtitle: "Kalite ve güvenlik konusunda uluslararası standartlara tam uyum sağlıyoruz.",
      items: {
        iso9001: { title: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi" },
        iso10002: { title: "ISO 10002:2018", desc: "Müşteri Memnuniyeti Yönetimi" },
        iso14001: { title: "ISO 14001:2015", desc: "Çevre Yönetim Sistemi" },
        iso22716: { title: "ISO 22716:2007", desc: "GMP - İyi Üretim Uygulamaları (Kozmetik)" },
        ohsas: { title: "OHSAS 18001:2007", desc: "İş Sağlığı ve Güvenliği Yönetimi" },
        sgr: { title: "SGR (EAC)", desc: "Devlet Kayıt Belgesi (Avrasya Gümrük Birliği)" }
      }
    },
    blog: {
      title: "Blog ve Haberler",
      subtitle: "Sektörden haberler ve faydalı bilgiler",
      read_more: "Devamını Oku",
      back: "Tüm Yazılar"
    },
    contact: {
      title: "İletişim",
      subtitle: "Formu doldurun, bayilik koşullarını görüşmek için satış temsilcimiz sizinle iletişime geçsin.",
      headquarters_label: "Merkez Ofis",
      headquarters_address: "Organize Sanayi Bölgesi,\nİstanbul, Türkiye",
      form: {
        title: "Toptan Başvuru Formu",
        name: "Ad Soyad / Firma Adı",
        email: "E-posta",
        phone: "Telefon",
        message: "Mesajınız",
        submit: "Başvuru Yap",
        success: "Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.",
        placeholders: {
          name: "Adınız veya Firma Adı",
          email: "isim@firma.com",
          phone: "+90...",
          message: "Tahmini sipariş miktarınız ve ülke..."
        }
      },
      faq: {
        title: "Sıkça Sorulan Sorular",
        q1: "Nasıl bayi olabilirim?",
        a1: "Lütfen yukarıdaki formu firma bilgilerinizle doldurun. Satış ekibimiz başvurunuzu inceleyip 24 saat içinde size dönüş yapacaktır.",
        q2: "Minimum sipariş miktarı (MOQ) nedir?",
        a2: "İhracat siparişleri için minimum sipariş miktarı genellikle bölgeye bağlı olarak 1 palet veya 20'lik konteynerdir. Detaylar için lütfen iletişime geçin.",
        q3: "Yurt dışına gönderim yapıyor musunuz?",
        a3: "Evet, 10'dan fazla ülkeye ihracat yapıyoruz. Lojistik süreçlerini hedef limanınıza kadar yönetebiliyoruz.",
        q4: "Numune talep edebilir miyim?",
        a4: "Evet, kalite değerlendirmesi için numune gönderebiliyoruz. Numune gönderim bedeli alıcıya ait olabilir."
      }
    },
    footer: {
      desc: "Bebek bezleri, yetişkin hasta bezleri ve ıslak mendil toptan satışı. Bayiler ve zincir marketler için iş ortaklığı fırsatları.",
      nav: "Menü",
      contacts: "İletişim",
      headquarters: "Merkez Ofis: İstanbul, Türkiye",
      rights: "Tüm hakları saklıdır."
    }
  },
  en: {
    whatsapp: "Chat on WhatsApp",
    nav: {
      home: "Home",
      features: "Features",
      products: "Products",
      documents: "Certificates",
      blog: "Blog",
      contact: "Contact",
      assistant: "AI Assistant",
    },
    hero: {
      badge: "Hygiene Products Brand",
      title: "Reliable Partner",
      subtitle: "for your business",
      description: "Wholesale distribution of My Lovely Baby diapers, adult care products, and wet wipes. High margins and consistent quality.",
      cta_catalog: "View Products",
      cta_contact: "Become a Dealer",
      tag_hypo: "ISO Certified",
      tag_eco: "Exporting to 10+ Countries",
      float_badge_title: "Market Leader",
      float_badge_desc: "Wholesale Supply"
    },
    features: {
      title: "Production Technology",
      subtitle: "We offer products that customers keep coming back for.",
      list: {
        absorb: { title: "Super Absorbent Polymer", desc: "Using Japanese SAP technology for instant absorption." },
        breath: { title: "Breathable Backsheet", desc: "Microporous structure allows the skin to breathe." },
        hypo: { title: "Hypoallergenic", desc: "Clinically tested. Free from fragrances and parabens." },
        soft: { title: "Non-Woven Soft Touch", desc: "The softest non-woven surface for skin comfort." },
        elastic: { title: "360° Fit System", desc: "Flexible side tapes and waistband for a perfect fit." },
        indicator: { title: "Wetness Indicator", desc: "Smart indicator changes color when the diaper is wet." }
      }
    },
    products: {
      title: "Our Product Categories",
      desc: "Select a category to view the detailed product catalog.",
      pack_suffix: "Pack",
      categories: {
        baby: {
          title: "Baby Diapers",
          desc: "Premium comfort for babies. From newborn to active toddlers.",
          btn: "Baby Diapers Catalog"
        },
        babyTwin: {
          title: "Baby Diapers — Twin Pack",
          desc: "Value twin packs with ultra-flexible ears and front tape. Practical packaging for families.",
          btn: "Twin Pack Catalog"
        },
        adult: {
          title: "Adult Diapers",
          desc: "Reliable protection and comfort for patients. High absorbency.",
          btn: "Adult Diapers Catalog"
        },
        adultPants: {
          title: "Adult Pull-Up Pants",
          desc: "Worn like regular underwear with 360° waist technology. Maximum comfort and discretion.",
          btn: "Pull-Up Pants Catalog"
        },
        wipes: {
          title: "Wet Wipes",
          desc: "Gentle care for sensitive skin. Alcohol-free and hypoallergenic.",
          btn: "Wet Wipes Catalog"
        }
      },
      table: { size: "Size", weight: "Weight/Dim.", waist: "Waist Size", count: "Pcs/Pack", bale: "Packs/Bale", type: "Type", box: "Packs/Box" },
      view_details: "View Details",
      wholesale_info: "Minimum order: 1 pallet. Delivery worldwide.",
      cta: "Request Price List",
      items: {
        NB: {
          title: "1 - Newborn",
          name: "Newborn",
          tagline: "Gentle protection from day one",
          description: "Specially developed for newborn skin. Features an umbilical cord cutout to protect the baby's navel.",
          benefit: "Umbilical Cord Cutout",
          feature1: "Cotton Soft Touch",
          feature2: "Navel Protection",
          weight_val: "2-5 kg",
          count_val: "84 pcs"
        },
        S: {
          title: "2 - Mini",
          name: "Mini",
          tagline: "For a sound sleep all night",
          description: "Increased absorbent layer for babies who feed more and sleep longer. Guarantees dryness for up to 12 hours.",
          benefit: "Up to 12 Hours Dryness",
          feature1: "Instant Absorption",
          feature2: "Leak-Proof Barriers",
          weight_val: "3-6 kg",
          count_val: "76 pcs"
        },
        M: {
          title: "3 - Midi",
          name: "Midi",
          tagline: "Freedom to explore",
          description: "For active babies starting to roll and crawl. Elastic side tapes ensure freedom of movement without tightness.",
          benefit: "Elastic Side Tapes",
          feature1: "Anatomical Fit",
          feature2: "Flexible Waistband",
          weight_val: "5-9 kg",
          count_val: "68 pcs"
        },
        L: {
          title: "4 - Maxi",
          name: "Maxi",
          tagline: "Comfort for first steps",
          description: "Anatomical structure for toddlers learning to walk. The crotch area is designed to prevent friction.",
          benefit: "Anatomical Structure",
          feature1: "3D Leak Protection",
          feature2: "Breathable Surface",
          weight_val: "8-18 kg",
          count_val: "60 pcs"
        },
        XL: {
          title: "5 - Junior",
          name: "Junior",
          tagline: "For active kids",
          description: "Ultra-durable and absorbent for active children. Easy-to-use velcro tapes.",
          benefit: "Reinforced Protection",
          feature1: "Extra Absorbent Zone",
          feature2: "Comfortable Movement",
          weight_val: "11-25 kg",
          count_val: "52 pcs"
        },
        XXL: {
          title: "6 - X-Large",
          name: "X-Large",
          tagline: "Extra Security",
          description: "For larger toddlers, ensuring secure protection and comfort during movement.",
          benefit: "Extra Wide",
          feature1: "Strong Side Tapes",
          feature2: "Leak Guarantee",
          weight_val: "15+ kg",
          count_val: "44 pcs"
        }
      },
      twin_items: {
        title: "Baby Diapers — Twin Pack",
        subtitle: "Value packaging for families",
        desc: "Ultra-flexible ears with front tape. Dermatologically tested.",
        "twin-NB": {
          title: "1 - Newborn",
          name: "Newborn",
          tagline: "Tender care from day one",
          description: "Twin pack for newborns. Flexible ears apply no pressure on delicate skin. Umbilical cord cutout included.",
          benefit: "Flexible Ears",
          feature1: "Front Tape System",
          feature2: "Navel Protection",
          weight_val: "2-5 kg",
          count_val: "48 pcs"
        },
        "twin-S": {
          title: "2 - Mini",
          name: "Mini",
          tagline: "Everyday comfort",
          description: "Ultra-flexible ears ensure a perfect fit. Wetness indicator tells you when it's time for a change.",
          benefit: "Wetness Indicator",
          feature1: "Breathable Surface",
          feature2: "Instant Absorption",
          weight_val: "3-6 kg",
          count_val: "44 pcs"
        },
        "twin-M": {
          title: "3 - Midi",
          name: "Midi",
          tagline: "For little explorers",
          description: "Flexible ears and front tape keep the diaper in place even during active movement. Value twin pack.",
          benefit: "Elastic Ears",
          feature1: "Secure Fit",
          feature2: "Leak-Proof Barriers",
          weight_val: "5-9 kg",
          count_val: "40 pcs"
        },
        "twin-L": {
          title: "4 - Maxi",
          name: "Maxi",
          tagline: "Confidence with every step",
          description: "Ideal for babies learning to walk. Anatomical shape and flexible ears allow free movement.",
          benefit: "Anatomical Shape",
          feature1: "3D Leak Protection",
          feature2: "Flexible Ears",
          weight_val: "8-18 kg",
          count_val: "36 pcs"
        },
        "twin-XL": {
          title: "5 - Junior",
          name: "Junior",
          tagline: "For kids on the go",
          description: "Reinforced construction for active children. Front tape and flexible ears guarantee a secure fit.",
          benefit: "Reinforced Fit",
          feature1: "Extra Absorption",
          feature2: "Comfortable Fit",
          weight_val: "11-25 kg",
          count_val: "32 pcs"
        },
        "twin-XXL": {
          title: "6 - X-Large",
          name: "X-Large",
          tagline: "Maximum protection",
          description: "For larger children. Flexible ears and front tape provide a snug fit without discomfort.",
          benefit: "Extra Wide",
          feature1: "Strong Side Tapes",
          feature2: "Breathable Layer",
          weight_val: "15+ kg",
          count_val: "28 pcs"
        }
      },
      adult_items: {
        title: "Adult Diapers",
        subtitle: "Comfort and Safety for Patients",
        desc: "High absorbency capacity and odor control system.",
        features: {
          odor: "Odor Control",
          absorb: "High Absorbency",
          indicator: "Wetness Indicator"
        }
      },
      adult_specific: {
        "adult-s": {
          title: "Small (S)",
          tagline: "Compact protection",
          description: "Adult diapers for patients with a smaller waist size. Flexible ears and front tape ensure secure fastening.",
          benefit: "Flexible Ears",
          feature1: "Breathable Surface",
          feature2: "Wetness Indicator"
        },
        "adult-m": {
          title: "Medium (M)",
          tagline: "All-day comfort",
          description: "Medium size adult diapers. Leak-proof barriers and high absorption capacity. Anatomical structure fits the body.",
          benefit: "Odor Control",
          feature1: "Breathable Surface",
          feature2: "Wetness Indicator"
        },
        "adult-l": {
          title: "Large (L)",
          tagline: "Complete protection",
          description: "For waist sizes 100-150 cm. Breathable textile backsheet prevents irritation during long-term use.",
          benefit: "High Absorbency",
          feature1: "Elastic Waistband",
          feature2: "Leak Barriers"
        },
        "adult-xl": {
          title: "Extra Large (XL)",
          tagline: "Extra security",
          description: "Wide waist bands and anatomical structure for a perfect fit. Suitable for heavy usage.",
          benefit: "Multi-grip Tapes",
          feature1: "Anatomical Fit",
          feature2: "Dual Core"
        }
      },
      pants_items: {
        title: "Adult Pull-Up Pants",
        subtitle: "360° Waist Technology",
        desc: "Worn like regular underwear. Ultra-soft, breathable, with wetness indicator.",
        features: {
          waist360: "360° Waistband",
          absorb: "Strong Absorption",
          textile: "Textile Backsheet"
        }
      },
      pants_specific: {
        "pants-s": {
          title: "Small (S)",
          tagline: "Discreet protection",
          description: "Pull-up pants for patients with a smaller waist. 360° waistband for secure fit. Textile backsheet is silent and comfortable.",
          benefit: "360° Waistband",
          feature1: "Textile Surface",
          feature2: "Wetness Indicator"
        },
        "pants-m": {
          title: "Medium (M)",
          tagline: "Freedom of movement",
          description: "Worn like regular underwear. Soft 360° waistband does not restrict movement. Dermatologically tested.",
          benefit: "Strong Absorption",
          feature1: "Breathable Material",
          feature2: "Odor Control"
        },
        "pants-l": {
          title: "Large (L)",
          tagline: "Maximum comfort",
          description: "For waist sizes 100-150 cm. 360° waist technology ensures a perfect fit throughout the day.",
          benefit: "Day & Night Use",
          feature1: "Textile Surface",
          feature2: "Leak-Proof Barriers"
        }
      },
      wipes_items: {
        title: "Wet Wipes",
        subtitle: "Cleanliness and Care",
        desc: "Alcohol and paraben free. Ideal for daily use.",
        types: {
          "wipes-72": "72 Sheets",
          "wipes-102": "102 Sheets",
          "wipes-120": "120 Sheets"
        }
      },
      wipes_specific: {
        "wipes-72": {
          title: "Ultra Sensitive 72",
          tagline: "Compact Pack",
          description: "72 hypoallergenic wipes for sensitive skin. Perfect size for bags and travel. Alcohol-free formula.",
          benefit: "Hypoallergenic",
          feature1: "Aloe Vera",
          feature2: "pH Balanced"
        },
        "wipes-102": {
          title: "Ultra Sensitive 102",
          tagline: "Best Seller",
          description: "102 wipes in a convenient flip-top pack. Gently cleanses and moisturizes sensitive skin.",
          benefit: "Alcohol Free",
          feature1: "Soft Texture",
          feature2: "From Day One"
        },
        "wipes-120": {
          title: "Ultra Sensitive 120",
          tagline: "Family Size",
          description: "120 wipes — the best value pack. Ideal for home use. Free from fragrance, parabens, and dyes.",
          benefit: "120 Sheets",
          feature1: "Fragrance Free",
          feature2: "Value Pack"
        }
      }
    },
    product_detail: {
      specs_title: "Specifications",
      description_title: "Product Description",
      packaging_title: "Logistics Information",
      request_quote: "Get Dealer Price",
      back: "Back to Category",
      features_heading: "Model Highlights"
    },
    documents: {
      title: "Our Certificates",
      subtitle: "We strictly adhere to international quality and safety standards.",
      items: {
        iso9001: { title: "ISO 9001:2015", desc: "Quality Management System" },
        iso10002: { title: "ISO 10002:2018", desc: "Customer Satisfaction Guidelines" },
        iso14001: { title: "ISO 14001:2015", desc: "Environmental Management System" },
        iso22716: { title: "ISO 22716:2007", desc: "GMP - Good Manufacturing Practices (Cosmetics)" },
        ohsas: { title: "OHSAS 18001:2007", desc: "Occupational Health and Safety Management" },
        sgr: { title: "SGR (EAC)", desc: "State Registration Certificate" }
      }
    },
    blog: {
      title: "Blog & News",
      subtitle: "Industry news and useful articles",
      read_more: "Read More",
      back: "All Articles"
    },
    contact: {
      title: "Contact",
      subtitle: "Fill out the form, and our sales representative will contact you to discuss dealership conditions.",
      headquarters_label: "Headquarters",
      headquarters_address: "Organized Industrial Zone,\nIstanbul, Turkey",
      form: {
        title: "Wholesale Inquiry Form",
        name: "Name / Company Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Apply for Dealership",
        success: "Thank you! We will contact you shortly.",
        placeholders: {
          name: "Your Name or Company",
          email: "name@company.com",
          phone: "+90...",
          message: "Tell us about your estimated volume and destination country..."
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "How can I become a dealer?",
        a1: "Please fill out the form above with your company details. Our sales team will review your application and get back to you within 24 hours.",
        q2: "What is the minimum order quantity (MOQ)?",
        a2: "For export orders, the minimum order quantity is typically one 20ft container or 1 pallet depending on the region. Please contact us for specific details.",
        q3: "Do you ship internationally?",
        a3: "Yes, we export to over 10 countries. We can handle logistics to your destination port.",
        q4: "Can I request product samples?",
        a4: "Yes, we can provide samples for quality evaluation. Shipping costs for samples may apply."
      }
    },
    footer: {
      desc: "Wholesale distribution of baby diapers, adult care products, and wet wipes. Partnership opportunities available.",
      nav: "Menu",
      contacts: "Contact",
      headquarters: "Headquarters: Istanbul, Turkey",
      rights: "All rights reserved."
    }
  }
};
