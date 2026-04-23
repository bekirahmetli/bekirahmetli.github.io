const translations = {
    tr: {
        nav: {
            home: "Ana Sayfa",
            about: "Hakkımda",
            skills: "Yetenekler",
            projects: "Projeler",
            articles: "Makaleler",
            contact: "İletişim",
            hireMe: "Bana Ulaşın"
        },
        // Hero Section
        hero: {
            greeting: "Merhaba, Ben",
            name: "Bekir Ahmetli",
            role: "Java Full Stack Developer",
            description: "Modern web ve backend teknolojileri ile ölçeklenebilir uygulamalar geliştiriyorum.",
            viewProjects: "Projeleri Görüntüle →",
            contactMe: "İletişime Geç"
        },
        // About Section
        about: {
            label: "// HAKKIMDA",
            title: "Kod Yazan, Çözüm Üreten",
            name: "İsim",
            role: "Rol",
            location: "Konum",
            locationValue: "Türkiye",
            roleValue: "Java Full Stack Developer",
            paragraph1: "Yazılım geliştirmeye olan tutkumla, modern teknolojileri kullanarak kullanıcı dostu ve verimli uygulamalar oluşturuyorum. Modern web ve Java teknolojilerinde deneyim sahibiyim.",
            paragraph2: "Gerçek projelerde edindiğim tecrübelerle, karmaşık problemlere basit ve etkili çözümler sunuyorum. Her projede kullanıcı deneyimini ön planda tutarak, performans ve kalite odaklı çalışıyorum.",
            paragraph3: "Temiz kod yazma prensipleri ve en iyi uygulamaları benimseyerek, sürdürülebilir ve ölçeklenebilir yazılımlar geliştirmeyi hedefliyorum.",
            yearsExp: "Makale",
            completedProjects: "Tamamlanan Proje",
            technologies: "Teknoloji"
        },
        // Skills Section
        skills: {
            label: "// YETENEKLERİM",
            title: "Teknoloji Yığını",
            subtitle: "Modern teknolojiler ve araçlarla çalışıyorum",
            springcloud: { title: "Spring Cloud", tag: "Cloud" },
            keycloak: { title: "Keycloak", tag: "Security" },
            rabbitmq: { title: "RabbitMQ", tag: "Message Broker" },
            kafka: { title: "Kafka", tag: "Message Broker" },
            grafana: { title: "Grafana", tag: "Monitoring" },
            microservices: { title: "Microservices", tag: "Architecture" },
            junit: { title: "JUnit", tag: "Testing" },
            angular: { title: "Angular", tag: "Frontend" },
            springboot: { title: "Spring Boot", tag: "Backend" },
            security: { title: "Spring Security", tag: "Security" },
            jpa: { title: "Spring Data JPA", tag: "ORM" },
            hibernate: { title: "Hibernate", tag: "ORM" },
            jdbc: { title: "JDBC", tag: "Database" },
            postgres: { title: "PostgreSQL", tag: "Database" },
            rest: { title: "RESTful APIs", tag: "API" },
            docker: { title: "Docker", tag: "DevOps" },
            git: { title: "Git", tag: "Version Control" },
            github: { title: "GitHub", tag: "Platform" },
            postman: { title: "Postman", tag: "Tool" },
            swagger: { title: "Swagger", tag: "Documentation" }
        },
        // Projects Section
        projects: {
            label: "// PROJELER",
            title: "Uygulamalarım",
            viewAll: "Tümünü Görüntüle →",
            project1: {
                title: "EcommerceRestAPI",
                desc: "Tam CRUD işlemleri ve gelişmiş JWT kimlik doğrulaması içeren REST API. Java 21 ve Spring Security ile güvenli, ölçeklenebilir backend."
            },
            project2: {
                title: "VeterinaryClinicRESTAPI",
                desc: "Doktor, müşteri ve randevu yönetimi için kapsamlı REST API. Doğrulama, iş kuralları ve katmanlı mimari içerir."
            },
            project3: {
                title: "JPA_Library_System",
                desc: "Kitap, yazar ve ödünç alma işlemlerini yöneten kütüphane sistemi. JPA ve Hibernate ile geliştirildi."
            },
            project4: {
                title: "Rent-A-Car",
                desc: "Yetkilendirme ve araç kiralama işlemleri içeren terminal tabanlı uygulama. JDBC ve katmanlı mimari kullanıldı."
            },
            project5: {
                title: "FoticaApp",
                desc: "Fotoğraf paylaşımı ve sosyal etkileşim sağlayan modern mobil uygulama. Kotlin ve Firebase ile geliştirildi."
            },
            project6: {
                title: "FoodOrdering",
                desc: "Yemek siparişi, sepet ve detay ekranları içeren Android uygulaması. MVVM, Retrofit ve Navigation bileşenleri."
            },
            project7: {
                title: "EventHubRestAPI",
                desc: "JWT, OAuth2 (GitHub, Google) ve refresh token içeren kapsamlı Etkinlik Yönetimi REST API'si. Tam CRUD işlemleri."
            },
            project8: {
                title: "LogiMeshMicroservices",
                desc: "Spring Boot ile geliştirilen event-driven mikroservis lojistik platformu. Rest/Feign, Kafka, API Gateway, Eureka, Keycloak ve tam gözlemlenebilirlik (Grafana, Loki, Tempo) ile Docker Compose üzerinden çalışır."
            },
            project9: {
                title: "bankappmicroservices",
                desc: "Hesaplar, krediler ve kartları yöneten modern bankacılık mikroservisleri. Merkezi yapılandırma, Keycloak ile JWT doğrulaması ve Resilience4j içerir. OpenTelemetry ile tam izlenebilirlik ve Docker Compose ile kapsayıcı mimarisi sunar."
            }
        },
        // Articles Section
        articles: {
            label: "// MAKALELER",
            title: "Yazılarım",
            subtitle: "Teknoloji ve yazılım geliştirme üzerine makalelerim",
            readMore: "Makaleyi Oku →",
            article1: {
                title: "Java'da Exception Handling: En Sık Yapılan Hatalar",
                desc: "Java projelerinde exception yönetiminin yaygın hataları, checked vs unchecked exception, katmanlı mimaride akış ve best practices.",
                date: "30 Aralık 2025"
            },
            article2: {
                title: "Java'da equals ve hashCode Yazmanın Gizli Kuralları",
                desc: "Contract kuralları, Lombok kullanımı, Hibernate entity'lerinde dikkat edilmesi gerekenler ve Set/Map'lerdeki gizli sorunlar.",
                date: "18 Aralık 2025"
            },
            article3: {
                title: "Java Stream API'de Performans İpuçları",
                desc: "Paralel stream kullanımı, boxing maliyeti, filter optimizasyonu ve büyük veri setlerinde dikkat edilmesi gereken performans tuzakları.",
                date: "26 Kasım 2025"
            },
            article4: {
                title: "Optional Sınıfını Doğru Kullanmak",
                desc: "NullPointerException'a veda etmenin yolları. Optional'ın doğru kullanımı, yapılması ve yapılmaması gerekenler.",
                date: "11 Kasım 2025"
            },
            article5: {
                title: "What is Jetpack Compose?",
                desc: "Modern Android UI geliştirme. Declarative UI, state management, animasyonlar ve performans ipuçları.",
                date: "26 Ağustos 2025"
            },
            article6: {
                title: "Android'de WorkManager",
                desc: "Arka plan işlerini yönetmenin güçlü yolu. WorkManager ile esnek zamanlama, güvenilirlik ve enerji verimliliği.",
                date: "11 Mayıs 2025"
            }
        },
        // Contact Section
        contact: {
            label: "// İLETİŞİM",
            title: "Birlikte Çalışalım",
            subtitle: "Projeleriniz için benimle iletişime geçin",
            email: "Email",
            location: "Konum",
            locationValue: "Türkiye",
            status: "Durum",
            statusValue: "Yeni projeler için müsait",
            formName: "Adınız",
            formEmail: "Email Adresiniz",
            formMessage: "Mesajınız",
            sendBtn: "Mesaj Gönder",

        },
        // Footer
        footer: {
            copyright: "© 2026 Bekir Ahmetli. Tüm hakları saklıdır."
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            articles: "Articles",
            contact: "Contact",
            hireMe: "Contact Me"
        },
        // Hero Section
        hero: {
            greeting: "Hello, I am",
            name: "Bekir Ahmetli",
            role: "Java Full Stack Developer",
            description: "I develop scalable full stack applications with modern web and backend technologies.",
            viewProjects: "View Projects →",
            contactMe: "Contact Me"
        },
        // About Section
        about: {
            label: "// ABOUT ME",
            title: "Code Writer, Solution Creator",
            name: "Name",
            role: "Role",
            location: "Location",
            locationValue: "Turkey",
            roleValue: "Java Full Stack Developer",
            paragraph1: "With my passion for software development, I create user-friendly and efficient applications using modern technologies. I have experience in modern web and Java technologies.",
            paragraph2: "With the experience I gained in real projects, I offer simple and effective solutions to complex problems. I work with a focus on performance and quality, prioritizing user experience in every project.",
            paragraph3: "By adopting clean code principles and best practices, I aim to develop sustainable and scalable software.",
            yearsExp: "Articles",
            completedProjects: "Completed Projects",
            technologies: "Technologies"
        },
        // Skills Section
        skills: {
            label: "// MY SKILLS",
            title: "Technology Stack",
            subtitle: "Working with modern technologies and tools",
            springcloud: { title: "Spring Cloud", tag: "Cloud" },
            keycloak: { title: "Keycloak", tag: "Security" },
            rabbitmq: { title: "RabbitMQ", tag: "Message Broker" },
            kafka: { title: "Kafka", tag: "Message Broker" },
            grafana: { title: "Grafana", tag: "Monitoring" },
            microservices: { title: "Microservices", tag: "Architecture" },
            junit: { title: "JUnit", tag: "Testing" },
            angular: { title: "Angular", tag: "Frontend" },
            springboot: { title: "Spring Boot", tag: "Backend" },
            security: { title: "Spring Security", tag: "Security" },
            jpa: { title: "Spring Data JPA", tag: "ORM" },
            hibernate: { title: "Hibernate", tag: "ORM" },
            jdbc: { title: "JDBC", tag: "Database" },
            postgres: { title: "PostgreSQL", tag: "Database" },
            rest: { title: "RESTful APIs", tag: "API" },
            docker: { title: "Docker", tag: "DevOps" },
            git: { title: "Git", tag: "Version Control" },
            github: { title: "GitHub", tag: "Platform" },
            postman: { title: "Postman", tag: "Tool" },
            swagger: { title: "Swagger", tag: "Documentation" }
        },
        // Projects Section
        projects: {
            label: "// PROJECTS",
            title: "My Applications",
            viewAll: "View All →",
            project1: {
                title: "EcommerceRestAPI",
                desc: "REST API with full CRUD operations and advanced JWT authentication. Secure, scalable, and layered backend."
            },
            project2: {
                title: "VeterinaryClinicRESTAPI",
                desc: "REST API for managing doctors, customers, and appointments. Includes validation, business rules, and layered architecture."
            },
            project3: {
                title: "JPA_Library_System",
                desc: "A simple library management system handling books, authors, categories, and borrowing operations."
            },
            project4: {
                title: "Rent-A-Car",
                desc: "Terminal-based car rental application featuring authentication and role-based access control using JDBC."
            },
            project5: {
                title: "FoticaApp",
                desc: "Modern mobile social media app for photo sharing and interaction. Built with Kotlin and Firebase."
            },
            project6: {
                title: "FoodOrdering",
                desc: "Kotlin-based food ordering app featuring home, cart, and detail screens. Implements MVVM and Retrofit."
            },
            project7: {
                title: "EventHubRestAPI",
                desc: "Comprehensive Event Management REST API with JWT, OAuth2 (GitHub, Google), refresh token, and full CRUD operations."
            },
            project8: {
                title: "LogiMeshMicroservices",
                desc: "An event-driven microservices logistics platform built with Spring Boot. Features sync (REST/Feign) and async (Kafka) communication, API Gateway, Eureka discovery, Keycloak security, and comprehensive observability (Grafana, Loki, Tempo) deployed via Docker Compose."
            },
            project9: {
                title: "bankappmicroservices",
                desc: "Modern banking microservices handling accounts, loans, and cards. Implements centralized config, JWT auth via Keycloak, and resilience patterns (Resilience4j). Includes comprehensive OpenTelemetry tracing and monitoring, fully containerized with Docker Compose."
            }
        },
        // Articles Section
        articles: {
            label: "// ARTICLES",
            title: "My Writings",
            subtitle: "Articles on technology and software development",
            readMore: "Read Article →",
            article1: {
                title: "Exception Handling in Java: Most Common Mistakes",
                desc: "Common mistakes in exception management in Java projects, checked vs unchecked exceptions, flow in layered architecture, and best practices.",
                date: "December 30, 2025"
            },
            article2: {
                title: "Hidden Rules of Writing equals and hashCode in Java",
                desc: "Contract rules, Lombok usage, things to consider in Hibernate entities, and hidden issues in Set/Map.",
                date: "December 18, 2025"
            },
            article3: {
                title: "Performance Tips in Java Stream API",
                desc: "Parallel stream usage, boxing cost, filter optimization, and performance pitfalls to watch out for in large data sets.",
                date: "November 26, 2025"
            },
            article4: {
                title: "Using Optional Class Correctly",
                desc: "Ways to say goodbye to NullPointerException. Correct usage of Optional, dos and don'ts.",
                date: "November 11, 2025"
            },
            article5: {
                title: "What is Jetpack Compose?",
                desc: "Modern Android UI development. Declarative UI, state management, animations, and performance tips.",
                date: "August 26, 2025"
            },
            article6: {
                title: "WorkManager in Android",
                desc: "The powerful way to manage background jobs. Flexible scheduling, reliability, and energy efficiency with WorkManager.",
                date: "May 11, 2025"
            }
        },
        // Contact Section
        contact: {
            label: "// CONTACT",
            title: "Let's Work Together",
            subtitle: "Get in touch with me for your projects",
            email: "Email",
            location: "Location",
            locationValue: "Turkey",
            status: "Status",
            statusValue: "Available for new projects",
            formName: "Your Name",
            formEmail: "Your Email",
            formMessage: "Your Message",
            sendBtn: "Send Message",

        },
        // Footer
        footer: {
            copyright: "© 2026 Bekir Ahmetli. All rights reserved."
        }
    }
};

let currentLang = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(currentLang);
    updateLanguageButtons();
});

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    applyLanguage(lang);
    updateLanguageButtons();
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });
}

// Dili sayfaya uygula
function applyLanguage(lang) {
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;

        keys.forEach(k => {
            value = value[k];
        });

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });


}
