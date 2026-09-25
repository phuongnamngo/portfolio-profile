'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'vi'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
    en: {
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        'identity.role': 'Full-Stack Developer',
        'identity.location': 'Ho Chi Minh City',
        'identity.downloadCV': 'Download CV',
        'hero.pitch': 'I build and ship web and mobile products with React, Next.js, React Native, and Laravel — including apps live on Google Play.',
        'hero.viewWork': 'View work',

        'about.title': 'About',
        'summary.body': 'Full-Stack Developer with 4+ years of experience, IT graduate. Strong in JavaScript/TypeScript, React, Next.js, React Native, and PHP/Laravel; also experienced with Java, REST APIs, SQL, Docker, and Git/GitHub. Has shipped and operated applications in production (web and Google Play). Solid programming fundamentals and data structures; logical, careful with business data. Uses AI to speed up day-to-day work.',

        'exp.title': 'Experience',
        'exp.job1.company': 'Intercontinental Computer Science Co.',
        'exp.job1.role': 'Full-Stack Developer',
        'exp.job1.period': '03/2022 – 08/2026',
        'exp.job1.bullet1': 'Built web and mobile features for outsourcing projects: React, Next.js, TypeScript, React Native; integrated REST APIs, authentication, and realtime data.',
        'exp.job1.bullet2': 'Developed Laravel/PHP and Node.js backends/admin (PostgreSQL, MySQL, MongoDB); Redux; Dockerized services; collaborated via Git, GitLab/GitHub, Jira.',
        'exp.job1.bullet3': 'Used Cursor, OpenAI Codex, and Antigravity to speed up implementation, refactoring, debugging, and review.',
        'exp.job1.achievementTitle': 'Achievements',
        'exp.job1.achievement': 'Helped deliver projects on schedule (Zogux Exchange, Bitgert Exchange, and others), contributing to team project bonuses / outstanding-performance awards for meeting committed delivery timelines.',
        'projects.title': 'Selected work',
        'exp.selectedTitle': 'Selected client projects',
        'exp.job2.company': 'Xelex Technology Company',
        'exp.job2.role': 'Intern / Fresher',
        'exp.job2.period': '03/2021 – 09/2021',
        'exp.job2.bullet1': 'Built ERP features with .NET, C#, ASP.NET, Angular, and SQL Server; connected Angular UI to C# APIs and wrote SQL Server queries.',

        'projects.otherTitle': 'Other projects',
        'projects.visit': 'Website',
        'projects.github': 'GitHub',
        'projects.playStore': 'Google Play',
        'projects.appStore': 'App Store',
        'projects.telegram': 'Telegram Mini App',
        'projects.admin': 'Admin',

        'projects.kunux.title': 'Kunux Webapp',
        'projects.kunux.team': '2-person team',
        'projects.kunux.desc': 'Managed hosting platform: deploy software to a VPS, choose provider, region, and machine size, then bring the service live.',
        'projects.kunux.h1': 'Built the create-service flow: software template, VPS provider (Hetzner, Linode), region/datacenter, instance size, and deploy (Docker, Traefik).',
        'projects.kunux.h2': 'Built Bring Your Own VPS (BYO VPS) so customers can connect an existing VPS or rent infrastructure, then build and deploy projects on that machine.',

        'projects.zogux.title': 'Zogux Exchange',
        'projects.zogux.team': '4-person team',
        'projects.zogux.desc': 'Web crypto exchange: market data, order placement, and account management.',
        'projects.zogux.h1': 'Built React/TypeScript trading UI from Figma to polish the trading experience.',
        'projects.zogux.h2': 'Integrated backend APIs (markets, orders, accounts) and fixed UI–API issues during handover.',
        'projects.zogux.h3': 'Delivered features from Jira assignments, tracked in GitLab; shipped on time and received a performance award.',

        'projects.pouchpay.title': 'PouchPay Wallet',
        'projects.pouchpay.team': 'Solo',
        'projects.pouchpay.desc': 'Mobile crypto wallet: store and send/receive tokens on Ethereum networks, with a Web3 dApp browser. Released on Google Play and the App Store.',
        'projects.pouchpay.h1': 'Adjusted layouts from Figma; built features to spec, fixed bugs, and produced Android/iOS release builds.',
        'projects.pouchpay.h2': 'Supported the client during development and adjusted the product from feedback and new requests.',

        'projects.bitgert.title': 'Bitgert Exchange',
        'projects.bitgert.team': 'Solo',
        'projects.bitgert.desc': 'Mobile crypto exchange: 30+ coins, 0% trading fees, realtime prices and order books. Live on Google Play (100K+ downloads, 4.1/5).',
        'projects.bitgert.metric': '100K+ downloads, 4.1/5',
        'projects.bitgert.metricShort': '100K+',
        'projects.bitgert.metricLabel': 'Google Play downloads',
        'projects.bitgert.h1': 'Built the React Native app: REST APIs, realtime WebSocket data, Redux state; shipped to Google Play in late 2022 – early 2023.',
        'projects.bitgert.h2': 'In 2025, updated the UI per client request. Both phases were delivered on time and received project bonuses.',

        'projects.booking.title': 'Booking LNT',
        'projects.booking.desc': 'Office desk, seat, and meeting-room booking.',
        'projects.booking.h1': 'Next.js, Go, PostgreSQL — Figma UI, frontend/backend features, APIs, client support, production deploy.',

        'projects.fliam.title': 'Fliam',
        'projects.fliam.team': 'With team lead',
        'projects.fliam.desc': 'Freelance marketplace: gigs, orders, and user profiles — a web business-admin system on MVC.',
        'projects.fliam.h1': 'Built PHP/Laravel backend and frontend features with MySQL per lead requests; updated pages from Figma.',
        'projects.fliam.h2': 'Developed order, profile, and gig areas as assigned; supported production and fixed issues as they came up.',

        'projects.carefor.title': 'Care For Vietnam',
        'projects.carefor.team': 'Web with team; Android/iOS app',
        'projects.carefor.desc': 'OpenCart PHP MVC commerce site (formerly New Image Vietnam, now careforvietnam.vn) and the CareFor CSKH customer-care app on Google Play.',
        'projects.carefor.h1': '04/2022 – 06/2022: Worked with the team to fix bugs, check data, and support operations of the OpenCart PHP MVC site.',
        'projects.carefor.h2': '06/2022 – 09/2022: Designed REST APIs on the existing OpenCart codebase and built the React Native app (Redux, FCM) for Android and iOS, then handed it to other team members.',

        'projects.shop.title': 'E-commerce',
        'projects.shop.team': 'Personal',
        'projects.shop.desc': 'Storefront and admin: catalog, cart, orders, VNPay.',
        'projects.shop.h1': 'Next.js, Laravel, PostgreSQL.',

        'projects.nexdax.title': 'NexDAX App',
        'projects.nexdax.desc': 'Crypto exchange mobile app. React Native, Node.js, MongoDB, Redux — realtime list performance.',

        'projects.taptap.title': 'Dapp Taptap Telegram',
        'projects.taptap.desc': 'Telegram Mini App with tap-to-earn and referrals. React, TypeScript, Node.js, MongoDB.',

        'skills.title': 'Skills',
        'skills.cat.languages': 'Languages',
        'skills.cat.frameworks': 'Frameworks',
        'skills.cat.data': 'Data & API',
        'skills.cat.tools': 'Tools',
        'skills.cat.ai': 'AI-assisted',
        'skills.cat.spoken': 'English',
        'skills.spoken': 'Technical reading',

        'ai.title': 'AI workflow',
        'ai.b1': 'Use Cursor Agent, OpenAI Codex, Hermes Agent, and Antigravity for implementation, refactoring, debugging, and code review.',
        'ai.b2': 'Plan from specs and MCP before implementing features.',
        'ai.b3': 'Review, test, and validate AI-generated code before integration.',
        'ai.b4': 'Use AI for codebase analysis, documentation, and technical research.',

        'edu.title': 'Education',
        'edu.school': 'Cao Thang Technical College',
        'edu.major': 'Information Technology',
        'edu.period': '2018 – 2021',

        'contact.title': 'Get in touch',
        'contact.lead': 'Open to fullstack and mobile roles. Email is the fastest way to reach me.',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.copy': 'Copy',
        'contact.copied': 'Copied',

        'footer.rights': 'All rights reserved.',
    },
    vi: {
        'nav.work': 'Dự án',
        'nav.about': 'Giới thiệu',
        'nav.experience': 'Kinh nghiệm',
        'nav.contact': 'Liên hệ',

        'identity.role': 'Lập trình viên Full-Stack',
        'identity.location': 'TP. Hồ Chí Minh',
        'identity.downloadCV': 'Tải CV',
        'hero.pitch': 'Tôi xây và đưa sản phẩm web, mobile vào vận hành với React, Next.js, React Native và Laravel — gồm app đang live trên Google Play.',
        'hero.viewWork': 'Xem dự án',

        'about.title': 'Giới thiệu',
        'summary.body': 'Lập trình viên Full-Stack với hơn 4 năm kinh nghiệm, tốt nghiệp CNTT. Thành thạo JavaScript/TypeScript, React, Next.js, React Native, PHP/Laravel; có kinh nghiệm Java, REST API, SQL, Docker, Git/GitHub; từng triển khai và đưa ứng dụng vào vận hành (web, Google Play). Có tư duy lập trình, nắm cấu trúc dữ liệu; làm việc logic, cẩn thận khi xử lý dữ liệu nghiệp vụ. Sử dụng AI để tối ưu hóa công việc.',

        'exp.title': 'Kinh nghiệm',
        'exp.job1.company': 'Intercontinental Computer Science Co.',
        'exp.job1.role': 'Lập trình viên Full-Stack',
        'exp.job1.period': '03/2022 – 08/2026',
        'exp.job1.bullet1': 'Phát triển web và mobile cho dự án outsourcing: React, Next.js, TypeScript, React Native; tích hợp REST API, xác thực và dữ liệu realtime.',
        'exp.job1.bullet2': 'Xây dựng backend/admin Laravel/PHP, Node.js (PostgreSQL, MySQL, MongoDB); Redux; đóng gói Docker; phối hợp Git, GitLab/GitHub, Jira.',
        'exp.job1.bullet3': 'Dùng Cursor, OpenAI Codex và Antigravity để tăng tốc implement, refactor, debug và review.',
        'exp.job1.achievementTitle': 'Thành tựu',
        'exp.job1.achievement': 'Đóng góp hoàn thành dự án đúng thời hạn (Zogux Exchange, Bitgert Exchange và một số dự án khác), giúp nhóm nhận thưởng dự án / thưởng thành tích xuất sắc vì đáp ứng tiến độ giao hàng đã cam kết.',
        'projects.title': 'Dự án tiêu biểu',
        'exp.selectedTitle': 'Dự án khách hàng tiêu biểu',
        'exp.job2.company': 'Xelex Technology Company',
        'exp.job2.role': 'Intern / Fresher',
        'exp.job2.period': '03/2021 – 09/2021',
        'exp.job2.bullet1': 'Xây dựng tính năng ERP với .NET, C#, ASP.NET, Angular và SQL Server; tích hợp UI Angular với API C# và viết truy vấn SQL Server.',

        'projects.otherTitle': 'Dự án khác',
        'projects.visit': 'Website',
        'projects.github': 'GitHub',
        'projects.playStore': 'Google Play',
        'projects.telegram': 'Telegram Mini App',
        'projects.appStore': 'App Store',
        'projects.admin': 'Admin',

        'projects.kunux.title': 'Webapp Kunux',
        'projects.kunux.team': 'nhóm 2 người',
        'projects.kunux.desc': 'Nền tảng managed hosting: triển khai phần mềm lên VPS, chọn nhà cung cấp, khu vực và cấu hình máy, rồi đưa dịch vụ vào vận hành.',
        'projects.kunux.h1': 'Xây dựng luồng tạo dịch vụ: chọn template phần mềm, nhà cung cấp VPS (Hetzner, Linode), khu vực/datacenter, cấu hình máy và triển khai (Docker, Traefik).',
        'projects.kunux.h2': 'Phát triển Bring Your Own VPS (BYO VPS) để khách hàng kết nối VPS sẵn có hoặc thuê hạ tầng, rồi build và triển khai dự án trên máy đó.',

        'projects.zogux.title': 'Zogux Exchange',
        'projects.zogux.team': 'nhóm 4 người',
        'projects.zogux.desc': 'Sàn giao dịch tiền mã hóa trên web: theo dõi thị trường, đặt lệnh và quản lý tài khoản.',
        'projects.zogux.h1': 'Phát triển giao diện React/TypeScript bám thiết kế Figma để hoàn thiện trải nghiệm giao dịch.',
        'projects.zogux.h2': 'Tích hợp và gọi API backend (thị trường, lệnh, tài khoản); xử lý lỗi khi ghép UI với API khi bàn giao.',
        'projects.zogux.h3': 'Phát triển tính năng theo phân công trên Jira, theo dõi tiến độ qua GitLab; hoàn thành đúng hạn và được thưởng thành tích.',

        'projects.pouchpay.title': 'PouchPay Wallet',
        'projects.pouchpay.team': '1 người',
        'projects.pouchpay.desc': 'Ví tiền mã hóa trên mobile: lưu trữ và gửi/nhận token trên các mạng Ethereum, kèm trình duyệt dApp Web3. Đã phát hành trên Google Play và App Store.',
        'projects.pouchpay.h1': 'Chỉnh layout theo Figma; phát triển tính năng theo yêu cầu, sửa lỗi và build bản phát hành cho Android và iOS.',
        'projects.pouchpay.h2': 'Hỗ trợ khách hàng trong quá trình phát triển, điều chỉnh sản phẩm theo phản hồi và yêu cầu phát sinh.',

        'projects.bitgert.title': 'Bitgert Exchange',
        'projects.bitgert.team': '1 người',
        'projects.bitgert.desc': 'Sàn giao dịch tiền mã hóa trên mobile: giao dịch hơn 30 đồng coin với phí giao dịch 0%, cập nhật giá và sổ lệnh realtime. Đã phát hành trên Google Play (100K+ lượt tải, đánh giá 4.1/5).',
        'projects.bitgert.metric': '100K+ lượt tải, 4.1/5',
        'projects.bitgert.metricShort': '100K+',
        'projects.bitgert.metricLabel': 'lượt tải Google Play',
        'projects.bitgert.h1': 'Phát triển ứng dụng React Native: gọi REST API, nhận dữ liệu realtime qua WebSocket, quản lý state bằng Redux; đưa app lên Google Play cuối 2022 – đầu 2023.',
        'projects.bitgert.h2': 'Năm 2025 chỉnh giao diện theo yêu cầu khách hàng. Cả hai giai đoạn đều hoàn thành đúng hạn và được thưởng dự án.',

        'projects.booking.title': 'Booking LNT',
        'projects.booking.desc': 'Hệ thống đặt bàn, ghế và phòng họp cho văn phòng.',
        'projects.booking.h1': 'Next.js, Go, PostgreSQL — chỉnh UI theo Figma, làm FE/BE, gọi API, hỗ trợ khách và deploy production.',

        'projects.fliam.title': 'Fliam',
        'projects.fliam.team': 'làm việc với leader',
        'projects.fliam.desc': 'Sàn kết nối freelancer và khách hàng: gig, đơn hàng, hồ sơ — hệ thống quản trị nghiệp vụ web theo mô hình MVC.',
        'projects.fliam.h1': 'Phát triển tính năng backend/frontend PHP/Laravel, MySQL theo yêu cầu leader; chỉnh trang theo Figma.',
        'projects.fliam.h2': 'Phát triển các phần đơn hàng, hồ sơ, gig theo phân công; hỗ trợ khi vận hành và sửa lỗi phát sinh.',

        'projects.carefor.title': 'Care For Việt Nam',
        'projects.carefor.team': 'web cùng team; app Android/iOS',
        'projects.carefor.desc': 'Website thương mại OpenCart PHP MVC (trước là New Image Vietnam, nay là careforvietnam.vn) và app chăm sóc khách hàng CareFor CSKH trên Google Play.',
        'projects.carefor.h1': '04/2022 – 06/2022: Phối hợp team sửa lỗi, kiểm tra dữ liệu và hỗ trợ vận hành website OpenCart PHP MVC.',
        'projects.carefor.h2': '06/2022 – 09/2022: Thiết kế REST API trên codebase OpenCart hiện có; xây dựng ứng dụng React Native (Redux, FCM) cho Android và iOS, rồi bàn giao cho thành viên khác trong team.',

        'projects.shop.title': 'Thương mại điện tử',
        'projects.shop.team': 'cá nhân',
        'projects.shop.desc': 'Storefront và admin: catalog, giỏ hàng, đơn, VNPay.',
        'projects.shop.h1': 'Next.js, Laravel, PostgreSQL.',

        'projects.nexdax.title': 'NexDAX App',
        'projects.nexdax.desc': 'App mobile sàn crypto. React Native, Node.js, MongoDB, Redux — tối ưu danh sách realtime.',

        'projects.taptap.title': 'Dapp Taptap Telegram',
        'projects.taptap.desc': 'Telegram Mini App tap-to-earn và giới thiệu bạn bè. React, TypeScript, Node.js, MongoDB.',

        'skills.title': 'Kỹ năng',
        'skills.cat.languages': 'Ngôn ngữ',
        'skills.cat.frameworks': 'Framework',
        'skills.cat.data': 'Dữ liệu & API',
        'skills.cat.tools': 'Công cụ',
        'skills.cat.ai': 'Hỗ trợ AI',
        'skills.cat.spoken': 'Tiếng Anh',
        'skills.spoken': 'Đọc tài liệu kỹ thuật',

        'ai.title': 'Quy trình AI',
        'ai.b1': 'Dùng Cursor Agent, OpenAI Codex, Hermes Agent và Antigravity cho implement, refactor, debug và code review.',
        'ai.b2': 'Lập kế hoạch theo đặc tả và MCP trước khi triển khai tính năng.',
        'ai.b3': 'Tự review, test và kiểm tra code do AI sinh ra trước khi tích hợp.',
        'ai.b4': 'Dùng AI để phân tích codebase, viết tài liệu và nghiên cứu kỹ thuật.',

        'edu.title': 'Học vấn',
        'edu.school': 'Cao đẳng Kỹ thuật Cao Thắng',
        'edu.major': 'Công nghệ thông tin',
        'edu.period': '2018 – 2021',

        'contact.title': 'Liên hệ',
        'contact.lead': 'Sẵn sàng nhận vai trò fullstack và mobile. Email là cách liên hệ nhanh nhất.',
        'contact.phone': 'Điện thoại',
        'contact.email': 'Email',
        'contact.location': 'Địa điểm',
        'contact.copy': 'Sao chép',
        'contact.copied': 'Đã chép',

        'footer.rights': 'Mọi quyền được bảo lưu.',
    }
} as const

type TranslationKey = keyof typeof translations.en

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    const t = (key: string): string => {
        const table = translations[language]
        return table[key as TranslationKey] || key
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
