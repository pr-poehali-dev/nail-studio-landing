import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    category: 'Классический маникюр',
    items: [
      { name: 'Женский маникюр', price: '1 500 ₽' },
      { name: 'Мужской маникюр', price: '1 800 ₽' },
      { name: 'Детский маникюр', price: '1 200 ₽' },
    ],
  },
  {
    category: 'Покрытие',
    items: [
      { name: 'Однотонное покрытие гель-лак', price: '2 000 ₽' },
      { name: 'Френч классический', price: '2 500 ₽' },
      { name: 'Дизайн 1 ноготь', price: '150 ₽' },
      { name: 'Дизайн сложный (все ногти)', price: '1 500 ₽' },
    ],
  },
  {
    category: 'Укрепление и наращивание',
    items: [
      { name: 'Укрепление базой/гелем', price: '500 ₽' },
      { name: 'Наращивание гелем', price: '3 500 ₽' },
      { name: 'Коррекция нарощенных ногтей', price: '2 800 ₽' },
    ],
  },
  {
    category: 'Педикюр',
    items: [
      { name: 'Аппаратный педикюр', price: '2 500 ₽' },
      { name: 'Педикюр с покрытием', price: '3 500 ₽' },
      { name: 'SPA-педикюр', price: '4 000 ₽' },
    ],
  },
  {
    category: 'Дополнительные услуги',
    items: [
      { name: 'Снятие гель-лака', price: '300 ₽' },
      { name: 'Парафинотерапия', price: '800 ₽' },
      { name: 'Массаж рук', price: '600 ₽' },
    ],
  },
];

const testimonials = [
  {
    name: 'Анна Королёва',
    text: 'Потрясающий сервис! Мастера настоящие профессионалы, а атмосфера в студии просто расслабляющая.',
    rating: 5,
  },
  {
    name: 'Мария Светлова',
    text: 'Хожу сюда уже полгода. Качество работы всегда на высоте, ногти держатся 3-4 недели без сколов.',
    rating: 5,
  },
  {
    name: 'Елена Васильева',
    text: 'Идеальное место для маникюра! Чистота, стерильность, внимание к деталям — всё на высшем уровне.',
    rating: 5,
  },
];

const galleryItems = [
  {
    id: 1,
    image: 'https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/6ec1651a-5244-450e-b440-d087517cbfe1.jpg',
    category: 'Покрытие',
    title: 'Розовый маникюр с глиттером',
  },
  {
    id: 2,
    image: 'https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/cc1b015c-a1b8-4ba7-86e7-ab46438ee07e.jpg',
    category: 'Френч',
    title: 'Классический френч',
  },
  {
    id: 3,
    image: 'https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/70ac386a-c1da-4704-8de8-0979f2036d14.jpg',
    category: 'Дизайн',
    title: 'Градиент с цветами',
  },
  {
    id: 4,
    image: 'https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/ee6a3a58-8b5f-49af-a520-079a8b5c283c.jpg',
    category: 'Покрытие',
    title: 'Элегантный дизайн',
  },
  {
    id: 5,
    image: 'https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/f95a136a-fae1-49b1-aedd-c31007c8fbee.jpg',
    category: 'Дизайн',
    title: 'Современный стиль',
  },
  {
    id: 6,
    image: 'https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/6ec1651a-5244-450e-b440-d087517cbfe1.jpg',
    category: 'Френч',
    title: 'Нюдовый френч',
  },
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['Все', 'Покрытие', 'Френч', 'Дизайн'];
  
  const filteredGallery = selectedCategory === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">Manicure Studio</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">
              Работы
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="bg-primary hover:bg-primary/90">
            Записаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary leading-tight">
                Искусство идеального маникюра
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Премиум студия маникюра и педикюра с индивидуальным подходом к каждому клиенту
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection('services')} size="lg" className="bg-primary hover:bg-primary/90">
                  Наши услуги
                </Button>
                <Button onClick={() => scrollToSection('contacts')} size="lg" variant="outline">
                  Связаться
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Видов услуг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/40 rounded-3xl transform rotate-3"></div>
              <img
                src="https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/ee6a3a58-8b5f-49af-a520-079a8b5c283c.jpg"
                alt="Manicure Studio"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для красоты и здоровья ваших ногтей
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6">{service.category}</h3>
                  <div className="space-y-4">
                    {service.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-center pb-4 border-b border-border/50 last:border-0">
                        <span className="text-foreground font-medium">{item.name}</span>
                        <span className="text-primary font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => scrollToSection('contacts')} size="lg" className="bg-primary hover:bg-primary/90">
              Записаться на услугу
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры работ наших мастеров — от классики до авторских дизайнов
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category ? 'bg-primary hover:bg-primary/90' : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover-scale animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-medium mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => scrollToSection('contacts')} size="lg" className="bg-primary hover:bg-primary/90">
              Записаться на маникюр
            </Button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">Постоянный клиент</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Запишитесь на процедуру или задайте вопрос — мы всегда рады помочь
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/d4a23b2f-e97d-4210-93ed-2873e7dbda2b/files/f95a136a-fae1-49b1-aedd-c31007c8fbee.jpg"
                  alt="Studio Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Форма записи</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Напишите, какая услуга вас интересует..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-border min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Manicure Studio</h3>
              <p className="text-primary-foreground/80">
                Премиум студия маникюра и педикюра с индивидуальным подходом
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('reviews')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Отзывы
                </button>
                <button onClick={() => scrollToSection('contacts')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 15.24c-.37.7-1.1 1.11-2.17 1.21-.39.03-.82.05-1.29.05-1.58 0-3.37-.27-5.06-2.03-2.38-2.48-3.42-5.81-2.8-8.95.19-.97.67-1.79 1.35-2.31.57-.43 1.24-.65 1.99-.65.18 0 .36.01.54.04.69.11 1.28.51 1.68 1.13.18.28.33.6.47.95.44 1.11.74 1.86 1.5 1.86.19 0 .39-.05.6-.17.86-.48.94-1.73.94-2.18 0-.83-.14-1.46-.83-1.78-.28-.13-.37-.18-.37-.34 0-.21.17-.38.45-.38h.09c.82 0 1.46.28 1.85.82.36.49.54 1.18.54 2.05 0 .85-.17 2.24-1.52 2.97.36.37 1.23 1.51 2.44 3.06.43.56.66.99.66 1.24 0 .45-.34.79-.93.94z"/>
                  </svg>
                </a>
                <a href="tel:+79787900402" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon name="Phone" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
            <p>© 2024 Manicure Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}