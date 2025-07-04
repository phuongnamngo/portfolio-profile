'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'vi'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.title': 'Creative Developer',
        'hero.subtitle': 'Crafting beautiful digital experiences with code, creativity, and passion. Transforming ideas into stunning web applications.',
        'hero.viewWork': 'View My Work',
        'hero.downloadCV': 'Download CV',

        // About Section
        'about.title': 'About Me',
        'about.description1': "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey began with a curiosity about how things work, which evolved into a love for building beautiful, functional applications.",
        'about.description2': "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in the power of clean code, thoughtful design, and continuous learning.",
        'about.projects': 'Projects',
        'about.years': 'Years',
        'about.clients': 'Happy Clients',
        'about.cleanCode': 'Clean Code Advocate',
        'about.cleanCodeDesc': 'Writing maintainable, scalable solutions',

        // Skills Section
        'skills.title': 'Skills & Expertise',
        'skills.frontend': 'Frontend Development',
        'skills.frontendDesc': 'React, TypeScript, Next.js, Tailwind CSS',
        'skills.backend': 'Backend Development',
        'skills.backendDesc': 'Node.js, Python, PostgreSQL, MongoDB',
        'skills.design': 'UI/UX Design',
        'skills.designDesc': 'Figma, Adobe Creative Suite, Prototyping',

        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.ecommerce.title': 'E-Commerce Platform',
        'projects.ecommerce.desc': 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
        'projects.analytics.title': 'AI-Powered Analytics Dashboard',
        'projects.analytics.desc': 'Interactive dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.',
        'projects.fitness.title': 'Mobile Fitness App',
        'projects.fitness.desc': 'Cross-platform mobile application for fitness tracking with social features, workout plans, and progress analytics.',
        'projects.code': 'Code',
        'projects.demo': 'Live Demo',

        // Contact Section
        'contact.title': "Let's Work Together",
        'contact.subtitle': "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
        'contact.email': 'Email',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'contact.startConversation': 'Start a Conversation',

        // Footer
        'footer.crafted': 'Crafted with',
        'footer.and': 'and',
    },
    vi: {
        // Navigation
        'nav.home': 'Trang chủ',
        'nav.about': 'Giới thiệu',
        'nav.skills': 'Kỹ năng',
        'nav.projects': 'Dự án',
        'nav.contact': 'Liên hệ',

        // Hero Section
        'hero.title': 'Nhà Phát Triển Sáng Tạo',
        'hero.subtitle': 'Tạo ra những trải nghiệm số đẹp mắt với code, sáng tạo và đam mê. Biến ý tưởng thành những ứng dụng web tuyệt đẹp.',
        'hero.viewWork': 'Xem Tác Phẩm',
        'hero.downloadCV': 'Tải CV',

        // About Section
        'about.title': 'Giới Thiệu',
        'about.description1': 'Tôi là một nhà phát triển full-stack đầy đam mê với hơn 5 năm kinh nghiệm tạo ra các giải pháp số tạo nên sự khác biệt. Hành trình của tôi bắt đầu từ sự tò mò về cách mọi thứ hoạt động, phát triển thành tình yêu xây dựng các ứng dụng đẹp và hữu ích.',
        'about.description2': 'Khi không code, bạn sẽ thấy tôi khám phá các công nghệ mới, đóng góp cho các dự án mã nguồn mở, hoặc chia sẻ kiến thức với cộng đồng developer. Tôi tin vào sức mạnh của code sạch, thiết kế chu đáo và học hỏi liên tục.',
        'about.projects': 'Dự án',
        'about.years': 'Năm',
        'about.clients': 'Khách hàng hài lòng',
        'about.cleanCode': 'Người ủng hộ Code Sạch',
        'about.cleanCodeDesc': 'Viết các giải pháp có thể bảo trì, mở rộng',

        // Skills Section
        'skills.title': 'Kỹ Năng & Chuyên Môn',
        'skills.frontend': 'Phát Triển Frontend',
        'skills.frontendDesc': 'React, TypeScript, Next.js, Tailwind CSS',
        'skills.backend': 'Phát Triển Backend',
        'skills.backendDesc': 'Node.js, Python, PostgreSQL, MongoDB',
        'skills.design': 'Thiết Kế UI/UX',
        'skills.designDesc': 'Figma, Adobe Creative Suite, Prototyping',

        // Projects Section
        'projects.title': 'Dự Án Nổi Bật',
        'projects.ecommerce.title': 'Nền Tảng Thương Mại Điện Tử',
        'projects.ecommerce.desc': 'Giải pháp thương mại điện tử full-stack với React, Node.js và tích hợp Stripe. Các tính năng bao gồm xác thực người dùng, quản lý sản phẩm và theo dõi tồn kho thời gian thực.',
        'projects.analytics.title': 'Dashboard Phân Tích AI',
        'projects.analytics.desc': 'Dashboard tương tác với thông tin chi tiết machine learning, trực quan hóa dữ liệu thời gian thực và phân tích dự đoán cho business intelligence.',
        'projects.fitness.title': 'Ứng Dụng Fitness Di Động',
        'projects.fitness.desc': 'Ứng dụng di động đa nền tảng để theo dõi thể dục với các tính năng xã hội, kế hoạch tập luyện và phân tích tiến độ.',
        'projects.code': 'Mã nguồn',
        'projects.demo': 'Demo trực tiếp',

        // Contact Section
        'contact.title': 'Hãy Cùng Làm Việc',
        'contact.subtitle': 'Có dự án trong đầu? Tôi rất muốn nghe về nó. Hãy cùng tạo ra điều gì đó tuyệt vời.',
        'contact.email': 'Email',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'contact.startConversation': 'Bắt Đầu Cuộc Trò Chuyện',

        // Footer
        'footer.crafted': 'Được tạo với',
        'footer.and': 'và',
    }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['en']] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}