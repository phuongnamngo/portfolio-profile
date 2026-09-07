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
        'hero.title': 'Fullstack Developer',
        'hero.subtitle': 'Full-Stack Developer with 4 years of experience building web and mobile products using Laravel, Node.js, React, Next.js, and React Native, plus working-level exposure to Flutter through real production work. Strong proficiency in TypeScript across both frontend and backend. Proactively leverages AI-augmented workflows — Cursor, Antigravity, OpenAI Codex, Hermes Agent, and MCP — to accelerate delivery and improve code quality.',
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
        'about.subtitle': 'Full-Stack Developer with 4 years of experience building web and mobile products using Laravel, Node.js, React, Next.js, and React Native, plus working-level Flutter. Strong TypeScript across frontend and backend, with AI-augmented workflows to accelerate delivery and improve code quality.',
        'about.aiTitle': 'AI-Augmented Development Workflow',
        'about.aiDesc': 'Cursor, Antigravity, OpenAI Codex, Hermes Agent, and MCP for agentic workflows, automated code review, and querying large-scale codebases — cutting release cycle time by ~30% on client work.',
        'about.fullstackTitle': 'Full-Stack & Mobile',
        'about.fullstackDesc': 'Web and mobile products with React, Next.js, Laravel, Node.js, and React Native. Working-level Flutter from production work. TypeScript across both frontend and backend.',
        'about.paasTitle': 'Client Delivery & Production',
        'about.paasDesc': 'Outsourcing model across concurrent client engagements — feature development, production deployment, and post-release support. Includes PaaS, DEX, wallets, Telegram Mini Apps, and native mobile.',

        // Skills Section
        'skills.title': 'Technical Expertise',
        'skills.subtitle': 'Skills grouped the same way as on my CV',
        'skills.cat.languages': 'Languages',
        'skills.cat.frontend': 'Frontend / Mobile',
        'skills.cat.backend': 'Backend',
        'skills.cat.databases': 'Database',
        'skills.cat.devops': 'DevOps / Cloud',
        'skills.cat.ai': 'AI Dev Workflow',
        'skills.cat.spoken': 'Spoken Languages',

        // Experience Section
        'exp.title': 'Work Experience',
        'exp.subtitle': 'My professional journey in software engineering',
        'exp.job1.company': 'Intercontinental Computer Science Co.',
        'exp.job1.role': 'Fullstack Developer',
        'exp.job1.period': '03/2022 - 09/2026',
        'exp.job1.intro': 'Worked as a fullstack developer in an outsourcing model, handling multiple concurrent client engagements — from feature development to production deployment and post-release support.',
        'exp.job1.bullet1': 'Built React Native mobile apps: navigation, Firebase, push notifications, Redux state management, and Google/Facebook/Apple login integration.',
        'exp.job1.bullet2': 'Contributed to blockchain fullstack React/Next.js projects (exchange, wallet platforms) with a Go backend; hands-on with Docker and production deployment pipelines.',
        'exp.job1.bullet3': 'Applied AI agents (Cursor, Antigravity, OpenAI Codex, Hermes Agent) across projects to speed up feature development and automate code review.',

        'exp.job2.company': 'Xelex Technology Company',
        'exp.job2.role': 'Intern / Fresher Developer',
        'exp.job2.period': '03/2021 - 09/2021',
        'exp.job2.bullet1': 'Interned as a developer building basic features for an ERP system using .NET, C#, ASP.NET, and SQL Server.',
        'exp.job2.bullet2': 'Worked with Angular, integrated business logic with backend C# APIs, and wrote SQL Server queries.',
        'exp.job2.bullet3': 'Managed source code with SourceTree (Git) and participated in team code reviews.',

        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Real-world web, mobile, blockchain, and PaaS applications built',
        'projects.filter.all': 'All Projects',
        'projects.filter.paas': 'PaaS & Cloud',
        'projects.filter.mobile': 'Mobile Apps',
        'projects.filter.web': 'Web & DEX',
        'projects.filter.blockchain': 'Blockchain & Web3',

        'projects.kunux.title': 'Webapp Kunux',
        'projects.kunux.role': 'Full-Stack Developer · client project · 2-person team',
        'projects.kunux.desc': 'Self-hosted Platform-as-a-Service (PaaS) simplifying deployment and management of applications and databases.',
        'projects.kunux.h1': 'Built UI components from Figma; managed deployment of existing services across VM hosting providers.',
        'projects.kunux.h2': 'Used AI agents to accelerate feature delivery, cutting release cycle time by ~30%.',

        'projects.booking.title': 'Booking LNT',
        'projects.booking.role': 'Full-Stack Developer · client project · solo',
        'projects.booking.desc': 'Enterprise workspace booking system for desk sharing and meeting room reservations.',
        'projects.booking.h1': 'Delivered features directly from customer requirements and supported existing clients after launch.',
        'projects.booking.h2': 'Owned end-to-end deployment to production.',

        'projects.zogux.title': 'Zogux Exchange',
        'projects.zogux.role': 'Frontend Developer · client project · 4-person team',
        'projects.zogux.desc': 'Decentralized exchange (DEX) platform for cryptocurrency trading.',
        'projects.zogux.h1': 'Built UI components from Figma designs.',
        'projects.zogux.h2': 'Integrated APIs in close collaboration with the backend team.',

        'projects.taptap.title': 'Dapp Taptap Telegram',
        'projects.taptap.role': 'Fullstack Developer · client project · solo',
        'projects.taptap.desc': 'Telegram Mini App with a tap-to-earn mechanism and referral system.',
        'projects.taptap.h1': 'Tap-to-earn and referral program.',
        'projects.taptap.h2': 'Built as a Telegram Mini App with React, TypeScript, Node.js, and MongoDB.',

        'projects.pouchpay.title': 'PouchPay Wallet',
        'projects.pouchpay.role': 'Mobile App Developer · client project · solo',
        'projects.pouchpay.desc': 'Blockchain wallet platform compatible with TokenScript, a tokenization framework for token-based assets.',
        'projects.pouchpay.h1': 'Shipped to both Google Play and the App Store.',
        'projects.pouchpay.h2': 'Ongoing feature development and support.',

        'projects.nexdax.title': 'NexDAX App',
        'projects.nexdax.role': 'Application Developer · 2-person team',
        'projects.nexdax.desc': 'Mobile app for a cryptocurrency exchange platform.',
        'projects.nexdax.h1': 'React Native, Node.js, MongoDB.',
        'projects.nexdax.h2': 'Shipped to Google Play.',

        'projects.balance.title': 'Balance Distribution App',
        'projects.balance.role': 'Application Developer · 2-person team',
        'projects.balance.desc': 'Agricultural product sales app; shipped to both Google Play and the App Store.',
        'projects.balance.h1': 'React Native with Odoo (Python) and Firebase.',
        'projects.balance.h2': 'Shipped to Google Play and the App Store.',

        'projects.fliam.title': 'Fliam',
        'projects.fliam.role': 'Web Developer · client project under Intercontinental Computer Science Co.',
        'projects.fliam.desc': 'Freelance services marketplace connecting clients with freelancers.',
        'projects.fliam.h1': 'Backend modules and admin-facing features with Laravel/PHP and MySQL.',
        'projects.fliam.h2': 'Responsive frontend views with Blade templating and Tailwind CSS.',

        'projects.visitSite': 'Visit Website',
        'projects.appStore': 'App Store',
        'projects.playStore': 'Google Play',
        'projects.telegram': 'Telegram Bot',
        'projects.admin': 'Admin Panel',

        // Education Section
        'edu.title': 'Education',
        'edu.school': 'Cao Thang Technical College',
        'edu.major': 'Information Technology',
        'edu.period': '09/2018 - 12/2021',

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
        'hero.title': 'Lập trình viên Fullstack',
        'hero.subtitle': 'Full-Stack Developer với 4 năm kinh nghiệm xây dựng sản phẩm web và mobile bằng Laravel, Node.js, React, Next.js và React Native, kèm kinh nghiệm Flutter ở mức production. Thành thạo TypeScript ở cả frontend và backend. Chủ động dùng quy trình AI (Cursor, Antigravity, OpenAI Codex, Hermes Agent, MCP) để đẩy nhanh bàn giao và nâng chất lượng code.',
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
        'about.subtitle': 'Full-Stack Developer với 4 năm kinh nghiệm xây dựng sản phẩm web và mobile bằng Laravel, Node.js, React, Next.js và React Native, kèm Flutter ở mức production. Thành thạo TypeScript ở cả hai phía, dùng quy trình AI để tăng tốc bàn giao và cải thiện chất lượng code.',
        'about.aiTitle': 'Quy trình phát triển tăng cường AI',
        'about.aiDesc': 'Cursor, Antigravity, OpenAI Codex, Hermes Agent và MCP cho workflow agent, review code tự động và truy vấn codebase lớn — rút ngắn ~30% chu kỳ release trên dự án khách.',
        'about.fullstackTitle': 'Full-Stack & Mobile',
        'about.fullstackDesc': 'Sản phẩm web và mobile với React, Next.js, Laravel, Node.js và React Native. Flutter ở mức production. TypeScript xuyên suốt frontend và backend.',
        'about.paasTitle': 'Bàn giao khách hàng & production',
        'about.paasDesc': 'Mô hình outsourcing, nhiều dự án khách song song — từ phát triển tính năng, triển khai production đến hỗ trợ sau go-live. Gồm PaaS, DEX, ví, Telegram Mini App và mobile native.',

        // Skills Section
        'skills.title': 'Kỹ Năng & Chuyên Môn',
        'skills.subtitle': 'Nhóm kỹ năng theo đúng cấu trúc trên CV',
        'skills.cat.languages': 'Ngôn ngữ lập trình',
        'skills.cat.frontend': 'Frontend / Mobile',
        'skills.cat.backend': 'Backend',
        'skills.cat.databases': 'Cơ sở dữ liệu',
        'skills.cat.devops': 'DevOps / Cloud',
        'skills.cat.ai': 'Quy trình phát triển AI',
        'skills.cat.spoken': 'Ngoại ngữ',

        // Experience Section
        'exp.title': 'Kinh Nghiệm Làm Việc',
        'exp.subtitle': 'Hành trình phát triển sự nghiệp của tôi',
        'exp.job1.company': 'Công ty Cổ phần Khoa học Máy tính Liên lục địa',
        'exp.job1.role': 'Fullstack Developer',
        'exp.job1.period': '03/2022 - 09/2026',
        'exp.job1.intro': 'Làm fullstack theo mô hình outsourcing, đồng thời nhiều dự án khách — từ phát triển tính năng, triển khai production đến hỗ trợ sau khi ra mắt.',
        'exp.job1.bullet1': 'Xây dựng app React Native: điều hướng, Firebase, push notification, Redux, tích hợp đăng nhập Google/Facebook/Apple.',
        'exp.job1.bullet2': 'Tham gia dự án blockchain fullstack React/Next.js (sàn, ví) với backend Go; thực chiến Docker và pipeline triển khai production.',
        'exp.job1.bullet3': 'Áp dụng AI agents (Cursor, Antigravity, OpenAI Codex, Hermes Agent) để tăng tốc phát triển tính năng và tự động hóa review code.',

        'exp.job2.company': 'Công ty Công nghệ Xelex',
        'exp.job2.role': 'Intern / Fresher Developer',
        'exp.job2.period': '03/2021 - 09/2021',
        'exp.job2.bullet1': 'Thực tập developer, xây dựng tính năng cơ bản cho hệ thống ERP với .NET, C#, ASP.NET và SQL Server.',
        'exp.job2.bullet2': 'Làm việc với Angular, tích hợp logic nghiệp vụ với API C# và viết truy vấn SQL Server.',
        'exp.job2.bullet3': 'Quản lý mã nguồn với SourceTree (Git) và tham gia code review cùng team.',

        // Projects Section
        'projects.title': 'Dự Án Thực Tế',
        'projects.subtitle': 'Các sản phẩm Web, Mobile, Blockchain và PaaS đã thực hiện',
        'projects.filter.all': 'Tất Cả Dự Án',
        'projects.filter.paas': 'PaaS & Cloud',
        'projects.filter.mobile': 'Ứng Dụng Mobile',
        'projects.filter.web': 'Web & DEX',
        'projects.filter.blockchain': 'Blockchain & Web3',

        'projects.kunux.title': 'Webapp Kunux',
        'projects.kunux.role': 'Full-Stack Developer · dự án khách · team 2 người',
        'projects.kunux.desc': 'PaaS tự host, đơn giản hóa triển khai và quản lý ứng dụng cùng cơ sở dữ liệu.',
        'projects.kunux.h1': 'Xây UI từ Figma; quản lý triển khai dịch vụ hiện có trên các nhà cung cấp VM hosting.',
        'projects.kunux.h2': 'Dùng AI agents để tăng tốc giao tính năng, giảm ~30% thời gian chu kỳ release.',

        'projects.booking.title': 'Booking LNT',
        'projects.booking.role': 'Full-Stack Developer · dự án khách · solo',
        'projects.booking.desc': 'Hệ thống đặt chỗ làm việc doanh nghiệp cho chia sẻ bàn và đặt phòng họp.',
        'projects.booking.h1': 'Phát triển tính năng trực tiếp từ yêu cầu khách và hỗ trợ sau khi ra mắt.',
        'projects.booking.h2': 'Tự triển khai end-to-end lên production.',

        'projects.zogux.title': 'Zogux Exchange',
        'projects.zogux.role': 'Frontend Developer · dự án khách · team 4 người',
        'projects.zogux.desc': 'Sàn giao dịch phi tập trung (DEX) cho giao dịch tiền điện tử.',
        'projects.zogux.h1': 'Xây UI từ thiết kế Figma.',
        'projects.zogux.h2': 'Tích hợp API, phối hợp sát với team backend.',

        'projects.taptap.title': 'Dapp Taptap Telegram',
        'projects.taptap.role': 'Fullstack Developer · dự án khách · solo',
        'projects.taptap.desc': 'Telegram Mini App với cơ chế tap-to-earn và hệ thống giới thiệu.',
        'projects.taptap.h1': 'Tap-to-earn và chương trình giới thiệu.',
        'projects.taptap.h2': 'Telegram Mini App với React, TypeScript, Node.js và MongoDB.',

        'projects.pouchpay.title': 'PouchPay Wallet',
        'projects.pouchpay.role': 'Mobile App Developer · dự án khách · solo',
        'projects.pouchpay.desc': 'Ví blockchain tương thích TokenScript, framework token hóa tài sản.',
        'projects.pouchpay.h1': 'Phát hành trên Google Play và App Store.',
        'projects.pouchpay.h2': 'Tiếp tục phát triển tính năng và hỗ trợ.',

        'projects.nexdax.title': 'NexDAX App',
        'projects.nexdax.role': 'Application Developer · team 2 người',
        'projects.nexdax.desc': 'Ứng dụng di động cho sàn giao dịch tiền điện tử.',
        'projects.nexdax.h1': 'React Native, Node.js, MongoDB.',
        'projects.nexdax.h2': 'Đã phát hành trên Google Play.',

        'projects.balance.title': 'Balance Distribution App',
        'projects.balance.role': 'Application Developer · team 2 người',
        'projects.balance.desc': 'App bán sản phẩm nông nghiệp; phát hành trên Google Play và App Store.',
        'projects.balance.h1': 'React Native, Odoo (Python) và Firebase.',
        'projects.balance.h2': 'Phát hành trên Google Play và App Store.',

        'projects.fliam.title': 'Fliam',
        'projects.fliam.role': 'Web Developer · dự án khách thuộc Công ty Khoa học Máy tính Liên lục địa',
        'projects.fliam.desc': 'Sàn dịch vụ freelance kết nối khách hàng với freelancer.',
        'projects.fliam.h1': 'Module backend và tính năng admin với Laravel/PHP và MySQL.',
        'projects.fliam.h2': 'Giao diện responsive với Blade và Tailwind CSS.',

        'projects.visitSite': 'Truy Cập Web',
        'projects.appStore': 'App Store',
        'projects.playStore': 'Google Play',
        'projects.telegram': 'Bot Telegram',
        'projects.admin': 'Trang Admin',

        // Education Section
        'edu.title': 'Trình Độ Học Vấn',
        'edu.school': 'Trường Cao Đẳng Kỹ Thuật Cao Thắng',
        'edu.major': 'Chuyên ngành Công Nghệ Thông Tin',
        'edu.period': '09/2018 - 12/2021',

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