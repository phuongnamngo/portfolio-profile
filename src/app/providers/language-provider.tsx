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
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.education': 'Education',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hello, I am',
        'hero.name': 'Ngo Phuong Nam',
        'hero.title': 'Fullstack & Mobile Developer',
        'hero.subtitle': '4+ years of experience crafting high-performance Web and Mobile solutions (React, Next.js, React Native, Node.js, Laravel). Pioneer in leveraging AI-augmented workflows (Cursor, Antigravity, OpenAI Codex, Hermes Agent, MCP) to accelerate delivery.',
        'hero.viewWork': 'Explore My Projects',
        'hero.downloadCV': 'Download CV (PDF)',
        'hero.aiBadge': 'AI-Augmented Developer',
        'hero.location': 'Ho Chi Minh City, Vietnam',

        // Quick Stats
        'stats.years': 'Years Experience',
        'stats.projects': 'Featured Projects',
        'stats.efficiency': 'Time Saved with AI Tools',
        'stats.techs': 'Technologies Mastered',

        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Full-Stack Developer with 4 years of experience building web and mobile products. Deep mastery of TypeScript across frontend and backend development. Proactively leverage AI-augmented development workflows to accelerate delivery and ensure top-notch code quality.',
        'about.aiTitle': 'AI Agentic Workflow Specialist',
        'about.aiDesc': 'Utilizing Cursor, Antigravity, OpenAI Codex, Hermes Agent, and MCP for automated code reviews, querying large codebases, and accelerating feature deployment by ~30%.',
        'about.fullstackTitle': 'Full-Stack & Mobile Ecosystem',
        'about.fullstackDesc': 'Mastered modern web frameworks (Next.js, React, Laravel, Node.js) and mobile development (React Native, iOS, Android, dApp Browsers).',

        // Skills Section
        'skills.title': 'Technical Expertise',
        'skills.subtitle': 'Core technologies and frameworks I work with daily',
        'skills.cat.languages': 'Languages',
        'skills.cat.frameworks': 'Frameworks & Platforms',
        'skills.cat.databases': 'Databases',
        'skills.cat.devops': 'DevOps & Cloud',
        'skills.cat.ai': 'AI Dev Workflows',

        // Experience Section
        'exp.title': 'Work Experience',
        'exp.subtitle': 'My professional journey in software engineering',
        'exp.job1.company': 'Intercontinental Computer Science Co.',
        'exp.job1.role': 'Fullstack Developer',
        'exp.job1.period': '03/2024 - 09/2026',
        'exp.job1.bullet1': 'Built React Native mobile apps: navigation, Firebase, push notifications, Redux state management, Google/Facebook/Apple login integration.',
        'exp.job1.bullet2': 'Contributed to blockchain fullstack React/Next.js projects (exchange, wallet) with Go backend; solid with Docker and production deployment.',
        'exp.job1.bullet3': 'Used AI agents (Cursor, Antigravity, OpenAI Codex, Hermes Agent) to speed up feature development and automate code review.',

        'exp.job2.company': 'Xelex Technology Company',
        'exp.job2.role': 'Intern / Fresher Developer',
        'exp.job2.period': '03/2022 - 09/2024',
        'exp.job2.bullet1': 'Interned as a developer building basic features for an ERP system using .NET, C#, ASP.NET, and SQL Server.',
        'exp.job2.bullet2': 'Worked with Angular, integrated basic business logic with backend C# APIs, and executed queries using SQL Server.',
        'exp.job2.bullet3': 'Managed source code with SourceTree (Git) and participated in code reviews with the team.',

        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Real-world web, mobile, blockchain, and PaaS applications built',
        'projects.filter.all': 'All Projects',
        'projects.filter.paas': 'PaaS & Cloud',
        'projects.filter.mobile': 'Mobile Apps',
        'projects.filter.web': 'Web & DEX',
        'projects.filter.blockchain': 'Blockchain & Web3',

        'projects.kunux.title': 'Webapp Kunux',
        'projects.kunux.role': 'Full-Stack Developer (2 members)',
        'projects.kunux.desc': 'A self-hosted Platform-as-a-Service (PaaS) that simplifies the deployment and management of applications and databases.',

        'projects.booking.title': 'Booking LNT',
        'projects.booking.role': 'Full-Stack Developer (1 member)',
        'projects.booking.desc': 'An enterprise workspace booking system for desk sharing and meeting room reservations.',

        'projects.zogux.title': 'Zogux Exchange',
        'projects.zogux.role': 'Frontend Developer (4 members)',
        'projects.zogux.desc': 'A decentralized exchange (DEX) platform for cryptocurrency trading with high liquidity.',

        'projects.taptap.title': 'Dapp TapTap Telegram',
        'projects.taptap.role': 'Fullstack Developer (1 member)',
        'projects.taptap.desc': 'A Telegram Mini App where users earn points by tapping, invite friends, and redeem points via integrated exchange.',

        'projects.pouchpay.title': 'App PouchPay Wallet',
        'projects.pouchpay.role': 'Application Developer (1 member)',
        'projects.pouchpay.desc': 'TokenScript-compatible blockchain wallet platform enabling businesses and users to interact with tokenized assets.',

        'projects.vindax.title': 'App VinDAX',
        'projects.vindax.role': 'Application Developer (2 members)',
        'projects.vindax.desc': 'A mobile application for a cryptocurrency exchange platform.',

        'projects.balance.title': 'App Balance Distribution',
        'projects.balance.role': 'Application Developer (2 members)',
        'projects.balance.desc': 'A mobile application for selling agricultural products with Odoo ERP integration.',

        'projects.fliam.title': 'Fliam Marketplace',
        'projects.fliam.role': 'Web Developer',
        'projects.fliam.desc': 'A freelance services marketplace connecting clients with freelancers built with Laravel & MySQL.',

        'projects.visitSite': 'Visit Website',
        'projects.appStore': 'App Store',
        'projects.playStore': 'Google Play',
        'projects.telegram': 'Telegram Bot',
        'projects.admin': 'Admin Panel',

        // Education Section
        'edu.title': 'Education',
        'edu.school': 'Cao Thang Technical College',
        'edu.major': 'Information Technology',
        'edu.period': '2018 - 2021',

        // Contact Section
        'contact.title': "Get In Touch",
        'contact.subtitle': "I am open to fullstack, mobile, and AI-augmented software engineering opportunities. Feel free to contact me directly!",
        'contact.phone': 'Phone Number',
        'contact.email': 'Email Address',
        'contact.location': 'Address',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'contact.portfolio': 'Live Portfolio',
        'contact.copy': 'Copy',
        'contact.copied': 'Copied!',

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.crafted': 'Crafted with passion using Next.js, TypeScript & Tailwind CSS.',
    },
    vi: {
        // Navigation
        'nav.home': 'Trang chủ',
        'nav.about': 'Giới thiệu',
        'nav.skills': 'Kỹ năng',
        'nav.experience': 'Kinh nghiệm',
        'nav.projects': 'Dự án',
        'nav.education': 'Học vấn',
        'nav.contact': 'Liên hệ',

        // Hero Section
        'hero.greeting': 'Xin chào, tôi là',
        'hero.name': 'Ngô Phương Nam',
        'hero.title': 'Lập Trình Viên Fullstack & Mobile',
        'hero.subtitle': '4+ năm kinh nghiệm phát triển sản phẩm Web và Mobile chất lượng cao (React, Next.js, React Native, Node.js, Laravel). Tiên phong ứng dụng quy trình AI (Cursor, Antigravity, OpenAI Codex, Hermes Agent, MCP) giúp tối ưu 30% thời gian phát triển.',
        'hero.viewWork': 'Xem Dự Án',
        'hero.downloadCV': 'Tải CV (PDF)',
        'hero.aiBadge': 'Lập Trình Viên Tích Hợp AI',
        'hero.location': 'TP. Hồ Chí Minh, Việt Nam',

        // Quick Stats
        'stats.years': 'Năm Kinh Nghiệm',
        'stats.projects': 'Dự Án Nổi Bật',
        'stats.efficiency': 'Tối Ưu Tiến Độ Với AI',
        'stats.techs': 'Công Nghệ Nắm Vững',

        // About Section
        'about.title': 'Giới Thiệu Bản Thân',
        'about.subtitle': 'Full-Stack Developer với 4 năm kinh nghiệm xây dựng sản phẩm web và mobile. Nắm vững TypeScript ở cả frontend và backend. Chủ động ứng dụng các công cụ phát triển tích hợp AI để tối ưu tốc độ bàn giao và nâng cao chất lượng code.',
        'about.aiTitle': 'Chuyên Gia Quy Trình Làm Việc AI Agents',
        'about.aiDesc': 'Áp dụng Cursor, Antigravity, OpenAI Codex, Hermes Agent và MCP vào việc review code tự động, truy vấn codebase lớn và rút ngắn ~30% thời gian triển khai tính năng.',
        'about.fullstackTitle': 'Hệ Sinh Thái Full-Stack & Mobile',
        'about.fullstackDesc': 'Nắm vững các framework web hiện đại (Next.js, React, Laravel, Node.js) và lập trình di động (React Native, iOS, Android, dApp Browser).',

        // Skills Section
        'skills.title': 'Kỹ Năng & Chuyên Môn',
        'skills.subtitle': 'Các công nghệ và công cụ tôi sử dụng hàng ngày',
        'skills.cat.languages': 'Ngôn Ngữ Lập Trình',
        'skills.cat.frameworks': 'Framework & Nền Tảng',
        'skills.cat.databases': 'Cơ Sở Dữ Liệu',
        'skills.cat.devops': 'DevOps & Cloud',
        'skills.cat.ai': 'Quy Trình Phát Triển AI',

        // Experience Section
        'exp.title': 'Kinh Nghiệm Làm Việc',
        'exp.subtitle': 'Hành trình phát triển sự nghiệp của tôi',
        'exp.job1.company': 'Công ty Cổ phần Khoa học Máy tính Liên lục địa',
        'exp.job1.role': 'Fullstack Developer',
        'exp.job1.period': '03/2024 - 09/2026',
        'exp.job1.bullet1': 'Phát triển ứng dụng mobile React Native: điều hướng, Firebase, push notification, quản lý trạng thái Redux, tích hợp đăng nhập Google/Facebook/Apple.',
        'exp.job1.bullet2': 'Tham gia các dự án Blockchain fullstack React/Next.js (sàn giao dịch, ví) với backend Go; thành thạo Docker và triển khai production.',
        'exp.job1.bullet3': 'Sử dụng AI agents (Cursor, Antigravity, OpenAI Codex, Hermes Agent) để tăng tốc phát triển tính năng và tự động hóa review code.',

        'exp.job2.company': 'Công ty Công nghệ Xelex',
        'exp.job2.role': 'Intern / Fresher Developer',
        'exp.job2.period': '03/2022 - 09/2024',
        'exp.job2.bullet1': 'Thực tập vị trí developer xây dựng các tính năng cơ bản cho hệ thống ERP bằng .NET, C#, ASP.NET và SQL Server.',
        'exp.job2.bullet2': 'Làm việc với Angular, tích hợp logic nghiệp vụ cơ bản với API backend C# và truy vấn dữ liệu SQL Server.',
        'exp.job2.bullet3': 'Quản lý mã nguồn với SourceTree (Git) và tham gia code review cùng đội ngũ.',

        // Projects Section
        'projects.title': 'Dự Án Thực Tế',
        'projects.subtitle': 'Các sản phẩm Web, Mobile, Blockchain và PaaS đã thực hiện',
        'projects.filter.all': 'Tất Cả Dự Án',
        'projects.filter.paas': 'PaaS & Cloud',
        'projects.filter.mobile': 'Ứng Dụng Mobile',
        'projects.filter.web': 'Web & DEX',
        'projects.filter.blockchain': 'Blockchain & Web3',

        'projects.kunux.title': 'Webapp Kunux',
        'projects.kunux.role': 'Full-Stack Developer (2 thành viên)',
        'projects.kunux.desc': 'Nền tảng PaaS tự host giúp đơn giản hóa việc triển khai và quản lý ứng dụng, cơ sở dữ liệu.',

        'projects.booking.title': 'Booking LNT',
        'projects.booking.role': 'Full-Stack Developer (1 thành viên)',
        'projects.booking.desc': 'Hệ thống đặt chỗ làm việc doanh nghiệp cho việc chia sẻ bàn làm việc và đặt phòng họp.',

        'projects.zogux.title': 'Zogux Exchange',
        'projects.zogux.role': 'Frontend Developer (4 thành viên)',
        'projects.zogux.desc': 'Sàn giao dịch phi tập trung (DEX) giao dịch tiền điện tử thanh khoản cao.',

        'projects.taptap.title': 'Dapp TapTap Telegram',
        'projects.taptap.role': 'Fullstack Developer (1 thành viên)',
        'projects.taptap.desc': 'Telegram Mini App cho phép người dùng chạm nhận điểm, giới thiệu bạn bè và đổi điểm qua sàn tích hợp.',

        'projects.pouchpay.title': 'App PouchPay Wallet',
        'projects.pouchpay.role': 'Application Developer (1 thành viên)',
        'projects.pouchpay.desc': 'Ví ứng dụng blockchain tương thích TokenScript hỗ trợ tương tác với các tài sản token hóa.',

        'projects.vindax.title': 'App VinDAX',
        'projects.vindax.role': 'Application Developer (2 thành viên)',
        'projects.vindax.desc': 'Ứng dụng di động cho sàn giao dịch tiền điện tử VinDAX.',

        'projects.balance.title': 'App Balance Distribution',
        'projects.balance.role': 'Application Developer (2 thành viên)',
        'projects.balance.desc': 'Ứng dụng di động bán sản phẩm nông nghiệp tích hợp hệ thống Odoo ERP.',

        'projects.fliam.title': 'Thương mại dịch vụ Fliam',
        'projects.fliam.role': 'Web Developer',
        'projects.fliam.desc': 'Sàn dịch vụ freelance kết nối khách hàng và freelancer phát triển bằng Laravel & MySQL.',

        'projects.visitSite': 'Truy Cập Web',
        'projects.appStore': 'App Store',
        'projects.playStore': 'Google Play',
        'projects.telegram': 'Bot Telegram',
        'projects.admin': 'Trang Admin',

        // Education Section
        'edu.title': 'Trình Độ Học Vấn',
        'edu.school': 'Trường Cao Đẳng Kỹ Thuật Cao Thắng',
        'edu.major': 'Chuyên ngành Công Nghệ Thông Tin',
        'edu.period': '2018 - 2021',

        // Contact Section
        'contact.title': "Liên Hệ Làm Việc",
        'contact.subtitle': "Tôi luôn sẵn sàng tiếp nhận các cơ hội công việc Fullstack, Mobile và Lập trình tích hợp AI. Hãy liên hệ với tôi!",
        'contact.phone': 'Số Điện Thoại',
        'contact.email': 'Địa Chỉ Email',
        'contact.location': 'Địa Chỉ',
        'contact.github': 'Trang GitHub',
        'contact.linkedin': 'Trang LinkedIn',
        'contact.portfolio': 'Website Portfolio',
        'contact.copy': 'Sao chép',
        'contact.copied': 'Đã chép!',

        // Footer
        'footer.rights': 'Tất cả các quyền được bảo lưu.',
        'footer.crafted': 'Được thiết kế và lập trình với Next.js, TypeScript & Tailwind CSS.',
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